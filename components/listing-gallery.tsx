'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Share, Heart, Grid, ChevronLeft, ChevronRight } from 'lucide-react'
import { listing } from '@/lib/data'
import { PhotoTourModal } from '@/components/photo-tour-modal'

export function ListingGallery() {
  const [saved, setSaved] = useState(false)
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false)
  const [mobileIndex, setMobileIndex] = useState(0)
  const images = listing.images

  return (
    <section id="photos" className="mx-auto max-w-[1280px] px-0 md:px-6 lg:px-10 xl:px-20 scroll-mt-24">
      {/* Title row (desktop) */}
      <div className="hidden items-end justify-between px-2 pb-4 pt-6 md:flex">
        <h1 className="text-2xl font-semibold text-balance">{listing.title}</h1>
        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              if (typeof window !== 'undefined' && navigator.share) {
                navigator.share({
                  title: listing.title,
                  url: window.location.href,
                })
              }
            }}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium underline hover:bg-secondary"
          >
            <Share className="h-4 w-4" />
            Share
          </button>
          <button
            onClick={() => setSaved((s) => !s)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium underline hover:bg-secondary"
          >
            <Heart
              className={`h-4 w-4 ${saved ? 'fill-primary text-primary' : ''}`}
            />
            Save
          </button>
        </div>
      </div>

      {/* Mobile carousel */}
      <div className="relative md:hidden">
        <div
          onClick={() => setIsPhotoTourOpen(true)}
          className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer"
        >
          <Image
            src={images[mobileIndex] || '/placeholder.svg'}
            alt={`${listing.title} photo ${mobileIndex + 1}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <button
          onClick={() =>
            setMobileIndex((i) => (i - 1 + images.length) % images.length)
          }
          className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 shadow z-10"
          aria-label="Previous photo"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => setMobileIndex((i) => (i + 1) % images.length)}
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 shadow z-10"
          aria-label="Next photo"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 z-10">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i === mobileIndex ? 'bg-background' : 'bg-background/50'
              }`}
            />
          ))}
        </div>
        <div className="absolute right-4 top-4 flex gap-4 z-10">
          <button aria-label="Share" className="text-background drop-shadow">
            <Share className="h-5 w-5" />
          </button>
          <button
            onClick={() => setSaved((s) => !s)}
            aria-label="Save"
            className="text-background drop-shadow"
          >
            <Heart
              className={`h-5 w-5 ${saved ? 'fill-primary text-primary' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Desktop photo grid */}
      <div className="relative hidden md:block">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-2xl h-[400px] lg:h-[460px]">
          <button
            onClick={() => setIsPhotoTourOpen(true)}
            className="relative col-span-2 row-span-2 h-full w-full overflow-hidden focus:outline-none group cursor-pointer"
          >
            <Image
              src={images[0] || '/placeholder.svg'}
              alt={`${listing.title} main photo`}
              fill
              priority
              unoptimized
              className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              sizes="50vw"
            />
          </button>
          {images.slice(1, 5).map((src, i) => (
            <button
              key={`${src}-${i}`}
              onClick={() => setIsPhotoTourOpen(true)}
              className="relative col-span-1 row-span-1 h-full w-full overflow-hidden focus:outline-none group cursor-pointer"
            >
              <Image
                src={src || '/placeholder.svg'}
                alt={`${listing.title} photo ${i + 2}`}
                fill
                unoptimized
                className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                sizes="25vw"
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsPhotoTourOpen(true)}
          className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl border border-black/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-neutral-900 shadow-md hover:bg-neutral-50 transition cursor-pointer z-10"
        >
          <Grid className="h-4 w-4 text-neutral-900" />
          <span>Show all photos</span>
        </button>
      </div>

      {/* Photo Tour Modal */}
      <PhotoTourModal
        isOpen={isPhotoTourOpen}
        onClose={() => setIsPhotoTourOpen(false)}
      />
    </section>
  )
}
