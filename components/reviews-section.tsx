'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Star,
  SprayCan,
  CheckCircle2,
  Key,
  MessageSquare,
  Map,
  Tag,
} from 'lucide-react'
import {
  listing,
  reviews,
  reviewChips,
  categoryRatings,
  ratingDistribution,
} from '@/lib/data'

function CleanlinessSprayIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={`text-foreground ${className}`}>
      <path d="M8 10h8v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10z" />
      <path d="M10 10V7h4v3" />
      <path d="M14 7h2a1 1 0 0 0 1-1V4.5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1V6" />
      <path d="M10 8l-2 3" />
      <circle cx="20" cy="4.5" r="0.6" fill="currentColor" />
      <circle cx="21.5" cy="6.5" r="0.6" fill="currentColor" />
      <circle cx="19" cy="8.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

function AccuracyCheckIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={`text-foreground ${className}`}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="8 12 11 15 16 9" />
    </svg>
  )
}

function CheckInKeyIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={`text-foreground ${className}`}>
      <path d="M12.4 10.6a5.5 5.5 0 1 0-2.8 2.8l6.9 6.9 2.5-2.5-1.5-1.5 1.5-1.5-1.5-1.5-5.1-2.7z" />
      <circle cx="8" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  )
}

function CommunicationChatIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={`text-foreground ${className}`}>
      <path d="M21 15a3 3 0 0 1-3 3H7l-4 4V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9z" />
    </svg>
  )
}

function LocationMapIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={`text-foreground ${className}`}>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  )
}

function ValueTagIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={`text-foreground ${className}`}>
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <circle cx="7" cy="7" r="1.5" fill="currentColor" />
    </svg>
  )
}

const ratingIcons: Record<string, React.ElementType> = {
  spray: CleanlinessSprayIcon,
  check: AccuracyCheckIcon,
  key: CheckInKeyIcon,
  chat: CommunicationChatIcon,
  map: LocationMapIcon,
  tag: ValueTagIcon,
}

function ReviewChipsCarousel() {
  const [selectedChip, setSelectedChip] = useState<string | null>(null)

  return (
    <div className="py-2">
      {/* Chips scroll track with touch/mouse swipe */}
      <div
        className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth py-1 px-0.5 select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reviewChips.map((chip) => {
          const isSelected = selectedChip === chip.label
          return (
            <button
              key={chip.label}
              onClick={() => setSelectedChip(isSelected ? null : chip.label)}
              className={`flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-semibold transition shrink-0 cursor-pointer active:scale-98 ${
                isSelected
                  ? 'border-neutral-900 bg-neutral-900 text-white'
                  : 'border-neutral-200 bg-white text-neutral-800 hover:border-neutral-900 shadow-2xs'
              }`}
            >
              <span className="text-base leading-none">{chip.emoji}</span>
              <span>{chip.label}</span>
              <span
                className={`font-normal ${
                  isSelected ? 'text-neutral-300' : 'text-neutral-500'
                }`}
              >
                {chip.count}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function CategoryBars() {
  return (
    <div className="flex flex-col gap-1 text-[11px]">
      <p className="mb-2 text-xs font-semibold text-foreground">Overall rating</p>
      {ratingDistribution.map((d) => (
        <div key={d.stars} className="flex items-center gap-2">
          <span className="w-2 text-muted-foreground font-medium">{d.stars}</span>
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-foreground"
              style={{ width: `${d.value * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-24 space-y-8">
      {/* Guest favourite top summary */}
      <div className="flex flex-col items-center gap-2 text-center pt-4">
        <div className="flex items-center justify-center gap-4 text-foreground">
          <div className="relative h-24 w-12 sm:h-28 sm:w-14">
            <Image
              src="/images/laurel-left-3d.png"
              alt="Guest favourite laurel left"
              fill
              className="object-contain drop-shadow-sm"
              priority
            />
          </div>
          <span className="text-7xl sm:text-8xl md:text-[92px] font-extrabold tracking-tight text-[#222222]">
            {listing.rating}
          </span>
          <div className="relative h-24 w-12 sm:h-28 sm:w-14">
            <Image
              src="/images/laurel-right-3d.png"
              alt="Guest favourite laurel right"
              fill
              className="object-contain drop-shadow-sm"
              priority
            />
          </div>
        </div>
        <p className="text-xl md:text-2xl font-bold text-foreground mt-1">
          Guest favourite
        </p>
        <p className="max-w-md text-sm text-muted-foreground text-pretty leading-relaxed">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <a
          href="#how-reviews-work"
          className="text-xs font-semibold text-foreground underline hover:opacity-80 transition mt-1"
        >
          How reviews work
        </a>
      </div>

      {/* Ratings Breakdown Grid */}
      <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 md:grid-cols-7 border-y border-border/70 py-8 px-2 items-start">
        {/* Column 1: Overall rating bar */}
        <div className="col-span-1 pr-4 border-r border-border/50">
          <CategoryBars />
        </div>

        {/* Columns 2-7: Specific Category Scores */}
        {categoryRatings.map((c, idx) => {
          const Icon = ratingIcons[c.icon] || Star
          return (
            <div
              key={c.label}
              className={`flex flex-col justify-between h-full px-4 ${
                idx < categoryRatings.length - 1 ? 'border-r border-border/50' : ''
              }`}
            >
              <div>
                <p className="text-xs font-semibold text-foreground">{c.label}</p>
                <p className="text-lg font-bold text-foreground mt-0.5">
                  {c.value.toFixed(1)}
                </p>
              </div>
              <div className="mt-4 text-foreground">
                <Icon className="h-7 w-7" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Review Filter Chips Carousel */}
      <ReviewChipsCarousel />

      {/* Review Cards */}
      <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 pt-4">
        {reviews.map((r) => (
          <article key={r.name} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {r.avatar ? (
                <div className="relative h-10 w-10 overflow-hidden rounded-full shrink-0">
                  <Image
                    src={r.avatar}
                    alt={r.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-base font-semibold shrink-0"
                  style={{
                    backgroundColor: r.avatarColor || '#F5EBE1',
                    color: r.textColor || '#8B572A',
                  }}
                >
                  {r.initial}
                </span>
              )}
              <div>
                <p className="text-[15px] font-semibold leading-tight text-foreground">
                  {r.name}
                </p>
                <p className="text-[13px] text-muted-foreground mt-0.5">
                  {r.subtitle}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 fill-foreground text-foreground"
                  />
                ))}
              </div>
              <span className="font-medium text-foreground">·</span>
              <span className="font-normal text-foreground">{r.date}</span>
            </div>
            <p className="text-[14px] leading-relaxed text-foreground text-pretty">
              {r.text}
            </p>
            {r.showMore && (
              <button className="text-[14px] font-semibold underline text-foreground hover:opacity-80 transition cursor-pointer text-left -mt-1">
                Show more
              </button>
            )}
          </article>
        ))}
      </div>

      <button className="mt-6 rounded-xl border border-foreground px-6 py-3 text-sm font-semibold hover:bg-secondary cursor-pointer">
        Show all {listing.reviewCount} reviews
      </button>
    </section>
  )
}

