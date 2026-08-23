'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { ChevronLeft, Share, Heart, ChevronRight, X } from 'lucide-react'
import { photoCategories, listing } from '@/lib/data'

interface PhotoTourModalProps {
  isOpen: boolean
  onClose: () => void
  initialCategoryId?: string
}

export function PhotoTourModal({
  isOpen,
  onClose,
  initialCategoryId,
}: PhotoTourModalProps) {
  const [mounted, setMounted] = useState(false)
  const [saved, setSaved] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>(
    initialCategoryId || photoCategories[0].id
  )
  const [lightboxImage, setLightboxImage] = useState<{
    src: string
    title: string
    index: number
    allImages: string[]
  } | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent background body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Scroll to initial category on open if provided
  useEffect(() => {
    if (isOpen && initialCategoryId) {
      setTimeout(() => {
        scrollToCategory(initialCategoryId)
      }, 100)
    }
  }, [isOpen, initialCategoryId])

  if (!isOpen || !mounted) return null

  const scrollToCategory = (catId: string) => {
    setActiveCategory(catId)
    const element = document.getElementById(`category-${catId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Aggregate all images for lightbox navigation
  const allImages = photoCategories.flatMap((cat) => cat.images)

  const openLightbox = (src: string, categoryTitle: string) => {
    const idx = allImages.indexOf(src)
    setLightboxImage({
      src,
      title: categoryTitle,
      index: idx !== -1 ? idx : 0,
      allImages: allImages.length > 0 ? allImages : [src],
    })
  }

  const modalJSX = (
    <div className="fixed inset-0 z-[9999] flex flex-col bg-white text-neutral-900 overflow-y-auto min-h-screen animate-in fade-in duration-200">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between bg-white px-4 py-3 md:px-8">
        <button
          onClick={onClose}
          aria-label="Back to listing"
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-secondary transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <span className="text-base font-semibold text-foreground">Photo tour</span>

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
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium underline hover:bg-secondary transition"
          >
            <Share className="h-4 w-4" />
            <span className="hidden sm:inline">Share</span>
          </button>
          <button
            onClick={() => setSaved((s) => !s)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium underline hover:bg-secondary transition"
          >
            <Heart
              className={`h-4 w-4 ${saved ? 'fill-primary text-primary' : ''}`}
            />
            <span className="hidden sm:inline">Save</span>
          </button>
        </div>
      </header>

      {/* Category Grid Navigation */}
      <div className="mx-auto w-full max-w-6xl px-4 md:px-12 pt-6 pb-2">
        <div className="flex flex-wrap gap-x-3 gap-y-6 md:gap-x-4">
          {photoCategories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className="flex flex-col items-start gap-2 group text-left transition-opacity hover:opacity-80 focus:outline-none"
              >
                <div className="relative w-28 h-[76px] sm:w-32 sm:h-[86px] rounded-lg overflow-hidden bg-secondary/50">
                  <Image
                    src={cat.coverImage}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 112px, 128px"
                    className="object-cover"
                  />
                </div>
                <span className={`text-[13px] md:text-sm ${isActive ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                  {cat.title}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <main className="mx-auto w-full max-w-6xl px-4 md:px-12 py-8 space-y-16">
        {photoCategories.map((cat) => (
          <section
            key={cat.id}
            id={`category-${cat.id}`}
            className="scroll-mt-36 space-y-6 pt-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Category Title & Info Column */}
              <div className="md:col-span-4 space-y-1 md:sticky md:top-36 self-start">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  {cat.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-normal">
                  {cat.subtitle}
                </p>
              </div>

              {/* Category Images Column */}
              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {cat.images.map((imgSrc, idx) => {
                  const isFullWidth = (cat.images.length === 1 || cat.images.length >= 3) ? idx % 3 === 0 : false
                  return (
                    <div
                      key={idx}
                      onClick={() => openLightbox(imgSrc, cat.title)}
                      className={`relative overflow-hidden rounded-2xl shadow-sm border border-border/40 cursor-pointer group bg-secondary/30 ${
                        isFullWidth
                          ? 'col-span-1 sm:col-span-2 aspect-video sm:aspect-[3/2]'
                          : 'col-span-1 aspect-[4/3]'
                      }`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`${cat.title} image ${idx + 1}`}
                        fill
                        sizes={
                          isFullWidth
                            ? '(max-width: 768px) 100vw, 66vw'
                            : '(max-width: 768px) 100vw, 33vw'
                        }
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Lightbox Sub-Modal for Detailed Image View */}
      {lightboxImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 text-white animate-in fade-in duration-150"
          onClick={() => setLightboxImage(null)}
        >
          {/* Lightbox Header */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
            <span className="text-sm font-medium text-white/80">
              {lightboxImage.index + 1} / {lightboxImage.allImages.length}
            </span>
            <button
              onClick={() => setLightboxImage(null)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Close photo"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              const prevIdx =
                (lightboxImage.index - 1 + lightboxImage.allImages.length) %
                lightboxImage.allImages.length
              setLightboxImage({
                ...lightboxImage,
                index: prevIdx,
                src: lightboxImage.allImages[prevIdx],
              })
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition z-10"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Enlarge Image */}
          <div
            className="relative h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt="Enlarged photo"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              const nextIdx =
                (lightboxImage.index + 1) % lightboxImage.allImages.length
              setLightboxImage({
                ...lightboxImage,
                index: nextIdx,
                src: lightboxImage.allImages[nextIdx],
              })
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition z-10"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  )

  return createPortal(modalJSX, document.body)
}
