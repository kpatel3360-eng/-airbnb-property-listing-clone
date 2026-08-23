'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Star,
  DoorOpen,
  Utensils,
  Fan,
  Wifi,
  Car,
  Waves,
  Bath,
  Dog,
  Camera,
  ShieldAlert,
  UtensilsCrossed,
  BriefcaseBusiness,
  ChevronRight,
  ChevronLeft,
  Keyboard,
} from 'lucide-react'
import {
  listing,
  host,
  highlights,
  description,
  sleeping,
  amenities,
} from '@/lib/data'

function FirepitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Top rim of firepit */}
      <path d="M4 14.5h16" />
      {/* Pit base box */}
      <path d="M5.5 14.5v6.5h13v-6.5" />
      {/* Jagged outer flame */}
      <path d="M7.5 14.5c0-2.8.6-4.5 1.5-6l1 1.5C10.7 7.5 11.3 5 12 3c1.8 3 4.5 6.5 4.5 11.5" />
      {/* Inner flame */}
      <path d="M12 9c-1 1.8-1.5 3-1.5 4a1.5 1.5 0 0 0 3 0c0-1-.5-2.2-1.5-4z" />
    </svg>
  )
}

function CoolingFanIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Center hub */}
      <circle cx="12" cy="12" r="1.6" />
      {/* Swirled paddle blades */}
      <path d="M12 10.4C10.6 8.5 9.8 5.5 11 3.8c1.2-1.7 3.4-.8 3.3 1.8-.1 2-1 3.5-2.3 4.8z" />
      <path d="M13.6 12c1.9 1.4 4.9 2.2 6.6 1 1.7-1.2.8-3.4-1.8-3.3-2 .1-3.5 1-4.8 2.3z" />
      <path d="M12 13.6c1.4 1.9 2.2 4.9 1 6.6-1.2 1.7-3.4.8-3.3-1.8.1-2 1-3.5 2.3-4.8z" />
      <path d="M10.4 12c-1.9-1.4-4.9-2.2-6.6-1-1.7 1.2-.8 3.4 1.8 3.3 2-.1 3.5-1 4.8-2.3z" />
    </svg>
  )
}

function DoorCheckinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Floor line */}
      <path d="M3.5 21h17" />
      {/* Door frame */}
      <path d="M6 21V4.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V21" />
      {/* Right door thickness / jamb */}
      <path d="M16 4.5V21M18.5 4.5V21M16 4.5h2.5" />
      {/* Door knob */}
      <circle cx="13.5" cy="13" r="0.6" fill="currentColor" />
    </svg>
  )
}

const highlightIcons: Record<string, React.ElementType> = {
  utensils: FirepitIcon,
  fan: CoolingFanIcon,
  door: DoorCheckinIcon,
}

const amenityIcons: Record<string, React.ElementType> = {
  kitchen: UtensilsCrossed,
  wifi: Wifi,
  workspace: BriefcaseBusiness,
  parking: Car,
  pool: Waves,
  hottub: Bath,
  pets: Dog,
  camera: Camera,
  co_alarm: ShieldAlert,
  smoke_alarm: ShieldAlert,
}

function Divider() {
  return <hr className="border-divider" />
}

function LaurelBranch({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <svg
      width="28"
      height="44"
      viewBox="0 0 28 44"
      fill="none"
      className="shrink-0"
      style={mirrored ? { transform: 'scaleX(-1)' } : undefined}
    >
      {/* Main curved stem */}
      <path d="M18 42 C 17 35, 15 26, 16 16 C 17 10, 19 6, 20 3" stroke="#222" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* Leaf 1 - bottom left */}
      <path d="M16 34 C 10 33, 6 36, 7 39 C 8 42, 14 40, 16 37 Z" stroke="#222" strokeWidth="1" fill="none"/>
      {/* Leaf 2 - mid-left */}
      <path d="M16 26 C 10 24, 6 27, 7 30 C 8 33, 14 31, 16 28 Z" stroke="#222" strokeWidth="1" fill="none"/>
      {/* Leaf 3 - upper-left */}
      <path d="M17 18 C 11 15, 7 18, 8 21 C 9 24, 15 22, 17 20 Z" stroke="#222" strokeWidth="1" fill="none"/>
      {/* Leaf 4 - top-left */}
      <path d="M18 11 C 13 8, 9 11, 10 14 C 11 16, 17 15, 18 13 Z" stroke="#222" strokeWidth="1" fill="none"/>
      {/* Leaf 1 - bottom right */}
      <path d="M17 36 C 21 33, 25 35, 24 38 C 23 41, 18 40, 17 37 Z" stroke="#222" strokeWidth="1" fill="none"/>
      {/* Leaf 2 - mid-right */}
      <path d="M17 28 C 21 25, 25 27, 24 30 C 23 33, 18 32, 17 29 Z" stroke="#222" strokeWidth="1" fill="none"/>
      {/* Leaf 3 - upper-right */}
      <path d="M18 20 C 22 17, 26 19, 25 22 C 24 24, 19 23, 18 21 Z" stroke="#222" strokeWidth="1" fill="none"/>
      {/* Leaf 4 - top-right */}
      <path d="M19 13 C 22 10, 26 12, 25 15 C 24 17, 20 16, 19 14 Z" stroke="#222" strokeWidth="1" fill="none"/>
    </svg>
  )
}

function GuestFavouriteBanner() {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-divider px-5 py-4 shadow-sm sm:px-8">
      <div className="flex items-center gap-5">
        {/* Guest favourite with laurel wreaths */}
        <div className="flex items-center gap-0 shrink-0">
          <LaurelBranch />
          <div className="text-center px-2">
            <p className="text-[15px] font-semibold leading-tight text-foreground">Guest</p>
            <p className="text-[15px] font-semibold leading-tight text-foreground">favourite</p>
          </div>
          <LaurelBranch mirrored />
        </div>
        {/* Description */}
        <p className="text-[14px] leading-snug text-foreground max-w-[240px]">
          One of the most loved homes on Airbnb, according to guests
        </p>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="text-center">
          <div className="text-xl font-semibold sm:text-2xl">
            {listing.rating}
          </div>
          <div className="flex justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-2.5 w-2.5 fill-foreground text-foreground" />
            ))}
          </div>
        </div>
        <div className="h-9 w-px bg-divider" />
        <div className="text-center">
          <a href="#reviews" className="text-xl font-semibold sm:text-2xl">
            {listing.reviewCount}
          </a>
          <div className="text-xs text-muted-foreground">Reviews</div>
        </div>
      </div>
    </div>
  )
}

export function ListingOverview() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="flex flex-col gap-8">
      {/* Overview heading */}
      <div>
        <h2 className="text-[22px] font-semibold text-balance">
          {listing.location}
        </h2>
        <p className="mt-1 text-[15px] text-foreground">
          {listing.specs.guests} guests · {listing.specs.bedrooms} bedroom ·{' '}
          {listing.specs.beds} bed · {listing.specs.baths} bathroom
        </p>
      </div>

      <GuestFavouriteBanner />

      <Divider />

      {/* Host row */}
      <div className="flex items-center gap-4">
        <img
          src="/images/mirashya-logo-verified.png"
          alt={`${host.name}, your host`}
          className="h-12 w-12 shrink-0 object-contain"
        />
        <div>
          <p className="text-[16px] font-normal">Hosted by {host.name}</p>
          <p className="text-[14px] text-muted-foreground">
            {host.yearsHosting} years hosting
          </p>
        </div>
      </div>

      <Divider />

      {/* Highlights */}
      <div className="flex flex-col gap-6">
        {highlights.map((h) => {
          const Icon = highlightIcons[h.icon] || DoorOpen
          return (
            <div key={h.title} className="flex items-start gap-6">
              <Icon className="mt-0.5 h-7 w-7 shrink-0 text-foreground" />
              <div>
                <p className="text-[16px] font-normal leading-snug text-foreground">
                  {h.title}
                </p>
                <p className="mt-0.5 text-[14px] text-muted-foreground text-pretty leading-relaxed">
                  {h.text}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <Divider />

      {/* Translation notice */}
      <div className="rounded-xl bg-neutral-50 border border-neutral-200 px-4 py-3 text-sm text-muted-foreground">
        Some info has been automatically translated.{' '}
        <button className="font-semibold underline text-foreground cursor-pointer">Show original</button>
      </div>

      {/* Description */}
      <div>
        <div
          className={`space-y-4 text-[15.5px] leading-relaxed text-foreground transition-all duration-300 ${
            expanded
              ? ''
              : 'max-h-[5.8rem] overflow-hidden [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]'
          }`}
        >
          {description.split('\n\n').map((p, i) => (
            <p key={i} className="text-pretty">{p}</p>
          ))}
        </div>
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-3 inline-flex items-center gap-1 text-[15px] font-normal underline text-foreground hover:opacity-80 transition cursor-pointer"
        >
          {expanded ? 'Show less' : 'Show more'}
          <ChevronRight
            className={`h-4 w-4 stroke-[1.75] transition-transform ${
              expanded ? 'rotate-90' : ''
            }`}
          />
        </button>
      </div>

      <Divider />

      {/* Sleeping arrangements */}
      <div>
        <h3 className="mb-4 text-[22px] font-semibold">Where you&apos;ll sleep</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sleeping.map((room) => (
            <div
              key={room.name}
              className="overflow-hidden rounded-2xl border border-divider"
            >
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={room.image || '/placeholder.svg'}
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 300px"
                />
              </div>
              <div className="p-4">
                <p className="text-[15px] font-semibold">{room.name}</p>
                <p className="text-sm text-muted-foreground">{room.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Amenities */}
      <div id="amenities" className="scroll-mt-24">
        <h3 className="mb-6 text-[22px] font-semibold">
          What this place offers
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {amenities.map((a) => {
            const Icon = amenityIcons[a.icon] || Star
            return (
              <div
                key={a.label}
                className={`flex items-center gap-4 py-1 ${
                  a.disabled ? 'line-through text-muted-foreground/60' : 'text-foreground'
                }`}
              >
                <Icon className="h-6 w-6 shrink-0" strokeWidth={1.5} />
                <span className="text-[15px]">{a.label}</span>
              </div>
            )
          })}
        </div>
        <button className="mt-8 rounded-xl border border-foreground px-5 py-3 text-[15px] font-normal hover:bg-secondary cursor-pointer">
          Show all 50 amenities
        </button>
      </div>

      <Divider />

      {/* Calendar Section */}
      <CalendarSection />
    </div>
  )
}

function CalendarSection() {
  const [cleared, setCleared] = useState(false)

  // October 2026: starts on Thursday (index 4)
  const octOffset = 4
  const octDays = Array.from({ length: 31 }, (_, i) => i + 1)

  // November 2026: starts on Sunday (index 0)
  const novOffset = 0
  const novDays = Array.from({ length: 30 }, (_, i) => i + 1)

  const isStart = (day: number, month: string) => !cleared && month === 'oct' && day === 18
  const isEnd = (day: number, month: string) => !cleared && month === 'oct' && day === 23
  const isMiddle = (day: number, month: string) => !cleared && month === 'oct' && day > 18 && day < 23

  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  return (
    <div>
      <div>
        <h3 className="text-[22px] font-semibold">
          {cleared ? 'Select dates' : `${listing.nights} nights in Candolim`}
        </h3>
        <p className="mt-1 text-[14px] text-muted-foreground">
          {cleared ? 'Add your travel dates for exact pricing' : '18 Oct 2026 - 23 Oct 2026'}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* October 2026 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-secondary cursor-pointer">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <p className="text-[16px] font-semibold">October 2026</p>
            <div className="w-8 md:hidden" />
          </div>

          <div className="grid grid-cols-7 gap-y-1 text-center">
            {weekDays.map((d, i) => (
              <div key={i} className="h-8 flex items-center justify-center text-xs font-semibold text-muted-foreground">
                {d}
              </div>
            ))}

            {Array.from({ length: octOffset }).map((_, i) => (
              <div key={`empty-oct-${i}`} className="h-10 w-10" />
            ))}

            {octDays.map((day) => {
              if (isStart(day, 'oct')) {
                return (
                  <div key={day} className="relative flex items-center justify-center h-10">
                    <div className="absolute right-0 h-10 w-1/2 bg-neutral-100" />
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background font-bold text-sm">
                      {day}
                    </div>
                  </div>
                )
              }
              if (isEnd(day, 'oct')) {
                return (
                  <div key={day} className="relative flex items-center justify-center h-10">
                    <div className="absolute left-0 h-10 w-1/2 bg-neutral-100" />
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background font-bold text-sm">
                      {day}
                    </div>
                  </div>
                )
              }
              if (isMiddle(day, 'oct')) {
                return (
                  <div key={day} className="flex h-10 items-center justify-center bg-neutral-100 text-sm font-semibold text-foreground">
                    {day}
                  </div>
                )
              }
              return (
                <div key={day} className="flex items-center justify-center h-10">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium hover:border hover:border-foreground cursor-pointer">
                    {day}
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* November 2026 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-8 hidden md:block" />
            <p className="text-[16px] font-semibold">November 2026</p>
            <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-secondary cursor-pointer">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-y-1 text-center">
            {weekDays.map((d, i) => (
              <div key={i} className="h-8 flex items-center justify-center text-xs font-semibold text-muted-foreground">
                {d}
              </div>
            ))}

            {Array.from({ length: novOffset }).map((_, i) => (
              <div key={`empty-nov-${i}`} className="h-10 w-10" />
            ))}

            {novDays.map((day) => (
              <div key={day} className="flex items-center justify-center h-10">
                <button className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium hover:border hover:border-foreground cursor-pointer">
                  {day}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calendar footer */}
      <div className="mt-6 flex items-center justify-between">
        <button className="flex h-8 w-10 items-center justify-center rounded-lg border border-divider hover:bg-secondary cursor-pointer" title="Keyboard shortcuts">
          <Keyboard className="h-4 w-4 text-foreground" />
        </button>
        <button
          onClick={() => setCleared(!cleared)}
          className="text-sm font-semibold underline text-foreground hover:text-muted-foreground cursor-pointer"
        >
          {cleared ? 'Reset dates' : 'Clear dates'}
        </button>
      </div>
    </div>
  )
}
