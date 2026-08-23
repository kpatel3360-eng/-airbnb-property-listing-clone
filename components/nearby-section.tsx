'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { nearby } from '@/lib/data'

function NearbyCard({ item }: { item: (typeof nearby)[number] }) {
  return (
    <div className="group shrink-0 cursor-pointer">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-2.5 flex flex-col">
        <p className="text-[14.5px] font-normal leading-snug text-foreground line-clamp-2">
          {item.title}
        </p>
        <div className="mt-1 flex items-center gap-1.5 text-[14px] font-normal text-foreground">
          <span>₹{item.price}</span>
          <span className="flex items-center gap-0.5 ml-1">
            <span className="text-xs">★</span>
            <span>{item.rating}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

const PER_PAGE = 5

export function NearbySection() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(nearby.length / PER_PAGE)

  const prev = () => setPage((p) => Math.max(0, p - 1))
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1))

  return (
    <section>
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-[22px] font-semibold text-foreground">
          More stays nearby
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-sm font-normal text-muted-foreground mr-1">
            {page + 1}/{totalPages}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={page === 0}
              aria-label="Previous stays"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              disabled={page === totalPages - 1}
              aria-label="Next stays"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop: paginated slider */}
      <div className="hidden overflow-hidden md:block">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, p) => (
            <div key={p} className="grid w-full shrink-0 grid-cols-5 gap-4">
              {nearby.slice(p * PER_PAGE, p * PER_PAGE + PER_PAGE).map((item, idx) => (
                <NearbyCard key={`${item.title}-${p}-${idx}`} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="-mx-6 flex gap-4 overflow-x-auto px-6 pb-2 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {nearby.map((item, idx) => (
          <div key={`${item.title}-${idx}`} className="w-[60%] shrink-0">
            <NearbyCard item={item} />
          </div>
        ))}
      </div>
    </section>
  )
}
