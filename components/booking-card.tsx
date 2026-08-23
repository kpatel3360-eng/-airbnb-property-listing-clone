'use client'

import { useState } from 'react'
import { Tag, ChevronDown, Flag } from 'lucide-react'
import { listing } from '@/lib/data'

export function BookingCard() {
  const [guests, setGuests] = useState(2)

  return (
    <div className="flex flex-col gap-4">
      {/* Discount Coupon Box */}
      <div className="flex items-center justify-between rounded-2xl border border-border/80 p-4 shadow-xs bg-background">
        <div className="flex items-center gap-3">
          <img
            src="/images/discount-tag.png"
            alt="Discount tag"
            className="h-8 w-8 shrink-0 object-contain"
          />
          <div>
            <p className="text-sm font-medium text-foreground leading-tight">
              Get 10% off your next stay.
            </p>
            <a href="#terms" className="text-xs text-foreground font-semibold underline">
              Terms apply
            </a>
          </div>
        </div>
        <button className="rounded-xl border border-border px-3.5 py-1.5 text-xs font-semibold hover:bg-secondary transition cursor-pointer">
          Claim
        </button>
      </div>

      {/* Main Reservation Box */}
      <div className="rounded-3xl border border-border p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)] bg-background">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold tracking-tight text-foreground underline decoration-1">
            {listing.priceDisplay}
          </span>
          <span className="text-base font-normal text-foreground">
            {listing.priceNightsText}
          </span>
        </div>

        {/* Date + guests picker */}
        <div className="mt-5 rounded-2xl border border-input overflow-hidden">
          <div className="grid grid-cols-2">
            <div className="border-r border-input p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                CHECK-IN
              </p>
              <p className="text-sm font-medium text-foreground mt-0.5">
                {listing.checkIn}
              </p>
            </div>
            <div className="p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                CHECKOUT
              </p>
              <p className="text-sm font-medium text-foreground mt-0.5">
                {listing.checkOut}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-input p-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                GUESTS
              </p>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="-ml-0.5 appearance-none bg-transparent text-sm font-medium text-foreground focus:outline-none cursor-pointer"
                aria-label="Number of guests"
              >
                {[1, 2, 3].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'guest' : 'guests'}
                  </option>
                ))}
              </select>
            </div>
            <ChevronDown className="h-5 w-5 text-foreground" />
          </div>
        </div>

        {/* Free Cancellation text bar */}
        <div className="mt-4 rounded-xl bg-secondary/50 px-4 py-2.5 text-center text-xs text-foreground">
          Free cancellation before <span className="font-bold">17 October</span>
        </div>

        {/* Reserve Button */}
        <button className="mt-4 w-full rounded-xl bg-[#e51d54] py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-95 shadow-xs cursor-pointer">
          Reserve
        </button>

        <p className="mt-3 text-center text-xs text-muted-foreground">
          You won&apos;t be charged yet
        </p>
      </div>

      {/* Report this listing link */}
      <div className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer pt-1">
        <Flag className="h-3.5 w-3.5" />
        <span className="underline">Report this listing</span>
      </div>
    </div>
  )
}

