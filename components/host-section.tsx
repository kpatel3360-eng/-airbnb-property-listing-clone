import Image from 'next/image'
import { GraduationCap } from 'lucide-react'
import { host } from '@/lib/data'

export function HostSection() {
  return (
    <section>
      <h2 className="mb-6 text-[22px] font-semibold text-foreground">
        Meet your host
      </h2>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14">
        {/* Left Column: Host Profile Card + Details */}
        <div className="flex flex-col gap-6">
          {/* Host Card */}
          <div className="rounded-3xl border border-divider bg-card p-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-6">
              {/* Left Sub-column: Avatar & Name */}
              <div className="flex flex-1 flex-col items-center text-center">
                <img
                  src={host.avatar}
                  alt={host.name}
                  className="h-24 w-24 object-contain"
                />
                <p className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                  {host.name}
                </p>
                <p className="mt-0.5 text-sm font-normal text-muted-foreground">
                  {host.role}
                </p>
              </div>

              {/* Right Sub-column: Metrics */}
              <div className="flex flex-col gap-3 pl-4 border-l border-divider/60">
                <div>
                  <p className="text-xl font-bold text-foreground">{host.reviews}</p>
                  <p className="text-[11px] text-muted-foreground">Reviews</p>
                </div>
                <hr className="border-divider/60" />
                <div>
                  <p className="flex items-center gap-0.5 text-xl font-bold text-foreground">
                    {host.rating}
                    <span className="text-sm">★</span>
                  </p>
                  <p className="text-[11px] text-muted-foreground">Rating</p>
                </div>
                <hr className="border-divider/60" />
                <div>
                  <p className="text-xl font-bold text-foreground">{host.yearsHosting}</p>
                  <p className="text-[11px] text-muted-foreground">Years hosting</p>
                </div>
              </div>
            </div>
          </div>

          {/* Host Personal Info below card */}
          <div className="space-y-3 pt-1 text-[15px] text-foreground">
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 shrink-0 text-foreground"
              >
                <circle cx="12" cy="8" r="6" />
                <path d="m11 14 1 2 1-2" />
                <path d="M12 16c-.5 1-.5 2 0 3s.5 2 0 3" />
              </svg>
              <span>{host.bornIn}</span>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 shrink-0 text-foreground" strokeWidth={1.75} />
              <span>{host.school}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Co-Hosts + Host details */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Co-Hosts */}
            <div>
              <h3 className="mb-4 text-[18px] font-semibold text-foreground">
                Co-Hosts
              </h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 sm:grid-cols-3">
                {host.coHosts.map((cohost) => (
                  <div key={cohost.name} className="flex items-center gap-3">
                    {cohost.avatar ? (
                      <div className="relative h-8 w-8 overflow-hidden rounded-full shrink-0">
                        <Image
                          src={cohost.avatar}
                          alt={cohost.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold shrink-0"
                        style={{ backgroundColor: cohost.bg, color: cohost.text }}
                      >
                        {cohost.initial}
                      </div>
                    )}
                    <span className="text-[14px] font-normal text-foreground leading-tight">
                      {cohost.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Host details */}
            <div className="mt-8">
              <h3 className="mb-3 text-[18px] font-semibold text-foreground">
                Host details
              </h3>
              <p className="text-[14px] text-foreground">
                Response rate: {host.responseRate}
              </p>
              <p className="text-[14px] text-foreground mt-1">
                {host.responseTime}
              </p>

              <button className="mt-6 rounded-xl bg-neutral-100 px-6 py-3 text-[14px] font-semibold text-foreground hover:bg-neutral-200 transition cursor-pointer active:scale-98">
                Message host
              </button>
            </div>
          </div>

          {/* Payment protection notice */}
          <div className="mt-8 flex items-center gap-3 pt-6 text-xs text-muted-foreground">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5 shrink-0 text-muted-foreground"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <p className="text-xs text-muted-foreground leading-relaxed">
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
