'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import { listing } from '@/lib/data'

interface NavTab {
  id: string
  label: string
}

const tabs: NavTab[] = [
  { id: 'photos', label: 'Photos' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'location', label: 'Location' },
]

export function StickyNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('photos')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Show sticky bar once scrolled past top gallery area (~560px)
      setIsVisible(scrollY > 560)

      // Section positions for scroll spy
      const sections = tabs.map((tab) => {
        const el = document.getElementById(tab.id)
        return {
          id: tab.id,
          top: el ? el.getBoundingClientRect().top : Infinity,
        }
      })

      // Find current section in view
      const current = sections
        .filter((s) => s.top <= 160)
        .sort((a, b) => b.top - a.top)[0]

      if (current) {
        setActiveTab(current.id)
      } else {
        setActiveTab('photos')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const topOffset = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-0 inset-x-0 z-40 hidden border-b border-divider bg-background shadow-xs md:block transition-all animate-in fade-in slide-in-from-top duration-200">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-10 xl:px-20">
        {/* Navigation Tabs */}
        <nav className="flex items-center gap-6 h-full">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`relative flex h-full items-center text-[14px] font-semibold transition cursor-pointer ${
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-[3px] bg-foreground rounded-t-sm" />
                )}
              </button>
            )
          })}
        </nav>

        {/* Right side: Price + Ratings + Reserve Button */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="flex items-baseline justify-end gap-1">
              <span className="text-[16px] font-bold text-foreground">
                {listing.priceDisplay}
              </span>
              <span className="text-[14px] text-muted-foreground">
                {listing.priceNightsText}
              </span>
            </div>
            <div className="flex items-center justify-end gap-1 text-[12px] font-semibold text-foreground">
              <Star className="h-3 w-3 fill-foreground text-foreground" />
              <span>{listing.rating}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground font-normal">
                {listing.reviewCount} reviews
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              const aside = document.querySelector('aside')
              if (aside) {
                aside.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="rounded-lg bg-[#E00B41] hover:bg-[#D70466] px-6 py-3 text-[15px] font-semibold text-white transition active:scale-98 cursor-pointer shadow-sm"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  )
}
