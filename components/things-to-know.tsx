import { thingsToKnow } from '@/lib/data'
import { Key, Shield } from 'lucide-react'

function CalendarXIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-foreground"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="10" x2="14" y1="13" y2="17" />
      <line x1="14" x2="10" y1="13" y2="17" />
    </svg>
  )
}

function HouseRulesKeyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-foreground"
    >
      <path d="M12.4 10.6a5.5 5.5 0 1 0-2.8 2.8l6.9 6.9 2.5-2.5-1.5-1.5 1.5-1.5-1.5-1.5-5.1-2.7z" />
      <circle cx="8" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  )
}

export function ThingsToKnow() {
  return (
    <section>
      <h2 className="mb-8 text-[22px] font-semibold text-foreground">
        Things to know
      </h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Column 1: Cancellation policy */}
        <div className="flex flex-col justify-between">
          <div>
            <CalendarXIcon />
            <h3 className="mt-4 mb-3 text-[16px] font-semibold text-foreground">
              Cancellation policy
            </h3>
            <div className="space-y-2 text-[15px] leading-relaxed text-foreground">
              {thingsToKnow.cancellation.map((item, idx) => (
                <p key={idx} className="text-pretty">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <button className="mt-5 self-start text-[14.5px] font-normal underline text-foreground hover:opacity-80 cursor-pointer">
            Learn more
          </button>
        </div>

        {/* Column 2: House rules */}
        <div className="flex flex-col justify-between">
          <div>
            <HouseRulesKeyIcon />
            <h3 className="mt-4 mb-3 text-[16px] font-semibold text-foreground">
              House rules
            </h3>
            <div className="space-y-2 text-[15px] leading-relaxed text-foreground">
              {thingsToKnow.houseRules.map((item, idx) => (
                <p key={idx} className="text-pretty">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <button className="mt-5 self-start text-[14.5px] font-normal underline text-foreground hover:opacity-80 cursor-pointer">
            Learn more
          </button>
        </div>

        {/* Column 3: Safety & property */}
        <div className="flex flex-col justify-between">
          <div>
            <Shield className="h-6 w-6 stroke-[1.5] text-foreground" />
            <h3 className="mt-4 mb-3 text-[16px] font-semibold text-foreground">
              Safety & property
            </h3>
            <div className="space-y-2 text-[15px] leading-relaxed text-foreground">
              {thingsToKnow.safety.map((item, idx) => (
                <p key={idx} className="text-pretty">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <button className="mt-5 self-start text-[14.5px] font-normal underline text-foreground hover:opacity-80 cursor-pointer">
            Learn more
          </button>
        </div>
      </div>
    </section>
  )
}
