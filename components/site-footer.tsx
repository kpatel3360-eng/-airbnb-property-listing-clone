import { Globe } from 'lucide-react'

const columns = [
  {
    title: 'Support',
    links: [
      'Help Centre',
      'AirCover',
      'Anti-discrimination',
      'Disability support',
      'Cancellation options',
    ],
  },
  {
    title: 'Hosting',
    links: [
      'Airbnb your home',
      'AirCover for Hosts',
      'Hosting resources',
      'Community forum',
      'Hosting responsibly',
    ],
  },
  {
    title: 'Airbnb',
    links: [
      'Newsroom',
      'New features',
      'Careers',
      'Investors',
      'Gift cards',
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-divider bg-secondary">
      <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-10 xl:px-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8 border-divider" />

        <div className="flex flex-col items-start justify-between gap-4 text-sm text-muted-foreground md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-1">
            <span>© 2025 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
          <div className="flex items-center gap-4 font-medium text-foreground">
            <button className="flex items-center gap-2 hover:underline">
              <Globe className="h-4 w-4" />
              English (US)
            </button>
            <button className="hover:underline">$ USD</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
