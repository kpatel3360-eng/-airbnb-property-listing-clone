import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export function LocationSection() {
  return (
    <section id="location" className="scroll-mt-24">
      <h2 className="mb-4 text-[22px] font-semibold text-foreground">
        Candolim, Goa, India
      </h2>
      <div className="relative aspect-[2.33/1] w-full overflow-hidden rounded-2xl border border-divider/60 shadow-xs">
        <Image
          src="/images/map-candolim.png"
          alt="Map of Candolim, Goa, India"
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1200px"
          priority
        />
      </div>
      <p className="mt-4 text-[14px] text-foreground">
        Exact location will be provided after booking.
      </p>

      {/* Neighbourhood highlights */}
      <div className="mt-8 space-y-3">
        <h3 className="text-[16px] font-semibold text-foreground">
          Neighbourhood highlights
        </h3>
        <p className="max-w-3xl text-[15px] leading-relaxed text-foreground text-pretty">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
        <div>
          <button className="flex items-center gap-1 text-[15px] font-semibold text-foreground cursor-pointer group">
            <span className="underline group-hover:opacity-80">Show more</span>
            <ChevronRight className="h-4 w-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  )
}
