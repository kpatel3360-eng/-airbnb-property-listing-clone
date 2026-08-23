'use client'

import { Search, Globe, Menu, User } from 'lucide-react'

function AirbnbLogo() {
  return (
    <img
      src="/images/airbnb-logo.png"
      alt="Airbnb"
      className="h-8 w-auto object-contain"
    />
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 hidden border-b border-neutral-200 bg-white md:block">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-10 xl:px-20">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center text-[#ff385c]">
          <AirbnbLogo />
        </a>

        {/* Search pill */}
        <nav className="flex items-center rounded-full border border-neutral-300 py-1.5 pl-3 pr-2 shadow-xs transition-shadow hover:shadow-md bg-white cursor-pointer">
          <button className="flex items-center gap-2 border-r border-neutral-200 pr-4 text-sm font-normal text-neutral-900">
            <img src="/house-icon.png" alt="home" className="h-12 w-12 object-contain" />
            <span>Anywhere</span>
          </button>
          <button className="border-r border-neutral-200 px-4 text-sm font-normal text-neutral-900">
            Anytime
          </button>
          <button className="px-4 text-sm text-neutral-400 font-normal">
            Add guests
          </button>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff385c] text-white shadow-xs">
            <Search className="h-4 w-4 stroke-[3]" />
          </span>
        </nav>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-1">
          <button className="hidden rounded-full px-4 py-2.5 text-sm font-normal text-neutral-900 hover:bg-neutral-100 transition lg:block cursor-pointer">
            Become a host
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-900 hover:bg-neutral-100 transition cursor-pointer">
            <Globe className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-3 rounded-full border border-neutral-300 py-1.5 pl-3 pr-1.5 hover:shadow-md transition cursor-pointer">
            <Menu className="h-4 w-4 text-neutral-700" />
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700 text-white">
              <User className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
