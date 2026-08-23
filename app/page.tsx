import { SiteHeader } from '@/components/site-header'
import { StickyNav } from '@/components/sticky-nav'
import { ListingGallery } from '@/components/listing-gallery'
import { ListingOverview } from '@/components/listing-overview'
import { BookingCard } from '@/components/booking-card'
import { ReviewsSection } from '@/components/reviews-section'
import { LocationSection } from '@/components/location-section'
import { HostSection } from '@/components/host-section'
import { ThingsToKnow } from '@/components/things-to-know'
import { NearbySection } from '@/components/nearby-section'
import { Star } from 'lucide-react'
import { listing } from '@/lib/data'

function Divider() {
  return <hr className="my-10 border-divider" />
}

export default function ListingPage() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SiteHeader />
      <StickyNav />

      <ListingGallery />

      <main className="mx-auto max-w-[1280px] px-6 lg:px-10 xl:px-20 pb-16 lg:pb-24">
        {/* Overview + booking */}
        <div className="grid grid-cols-1 gap-12 py-8 lg:grid-cols-[1fr_minmax(0,372px)] lg:gap-20 lg:py-12">
          <ListingOverview />
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <BookingCard />
            </div>
          </aside>
        </div>

        <Divider />
        <ReviewsSection />
        <Divider />
        <LocationSection />
        <Divider />
        <HostSection />
        <Divider />
        <ThingsToKnow />
        <Divider />
        <NearbySection />
      </main>

      {/* Mobile sticky booking bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between border-t border-divider bg-background px-5 py-3 md:hidden">
        <div>
          <p className="text-[15px]">
            <span className="font-semibold">${listing.price}</span> night
          </p>
          <div className="flex items-center gap-1 text-xs">
            <Star className="h-3 w-3 fill-foreground text-foreground" />
            <span className="font-medium">{listing.rating}</span>
            <span className="text-muted-foreground">
              · {listing.reviewCount} reviews
            </span>
          </div>
        </div>
        <button className="rounded-lg bg-primary px-6 py-3 text-[15px] font-semibold text-primary-foreground">
          Reserve
        </button>
      </div>
    </div>
  )
}
