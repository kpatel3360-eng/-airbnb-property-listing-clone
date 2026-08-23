export const listing = {
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  location: 'Entire serviced apartment in Candolim, India',
  rating: 4.95,
  reviewCount: 19,
  isGuestFavourite: true,
  specs: {
    guests: 3,
    bedrooms: 1,
    beds: 1,
    baths: 1,
  },
  priceDisplay: '₹28,499',
  priceNightsText: 'for 5 nights',
  price: 28499,
  cleaningFee: 0,
  serviceFee: 0,
  nights: 5,
  checkIn: '10/18/2026',
  checkOut: '10/23/2026',
  cancellationDateText: 'Free cancellation before 17 October',
  images: [
    '/gallery-1.png',
    '/gallery-2.png',
    '/gallery-3.png',
    '/gallery-4.png',
    '/gallery-exterior-clean.png',
    '/images/photo-living-room.png',
    '/images/photo-pool.png',
    '/images/photo-gym.png',
    '/images/photo-kitchen-bedroom.png',
    '/images/photo-bathroom.png',
    '/images/photo-living-tv.png',
    '/images/photo-hottub-pair.png',
    '/images/photo-additional-2.png',
  ],
}

export interface PhotoCategory {
  id: string
  title: string
  subtitle: string
  coverImage: string
  images: string[]
}

export const photoCategories: PhotoCategory[] = [

  {
    id: 'living-room-1',
    title: 'Living room 1',
    subtitle: 'Sofa · Air conditioning · Ceiling fan · TV',
    coverImage: '/images/photo-living-room.png',
    images: ['/images/photo-living-room.png', '/images/photo-living-tv.png'],
  },
  {
    id: 'living-room-2',
    title: 'Living room 2',
    subtitle: 'Ceiling fan · Hot tub',
    coverImage: '/images/stay-1.png',
    images: [
      '/images/stay-1.png',
      '/images/stay-2.png',
      '/images/stay-3.png',
      '/images/stay-4.png',
      '/images/stay-5.png',
      '/images/stay-kanso.png',
      '/images/stay-serendipity.png',
    ],
  },
  {
    id: 'full-kitchen',
    title: 'Full kitchen',
    subtitle: 'Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery',
    coverImage: '/images/full-kitchen-1.png',
    images: ['/images/full-kitchen-1.png', '/images/full-kitchen-2.png'],
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    subtitle: 'Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi',
    coverImage: '/images/bedroom-1.png',
    images: [
      '/images/bedroom-1.png',
      '/images/bedroom-2.png',
      '/images/bedroom-3.png',
      '/images/bedroom-4.png',
      '/images/bedroom-5.png',
    ],
  },
  {
    id: 'full-bathroom',
    title: 'Full bathroom',
    subtitle: 'Deep soaking tub · Rain shower · Double vanity',
    coverImage: '/images/full-bathroom-1.png',
    images: ['/images/full-bathroom-1.png'],
  },
  {
    id: 'gym',
    title: 'Gym',
    subtitle: 'Treadmill · Dumbbells · Workout bench · Ocean breeze',
    coverImage: '/images/gym-1.png',
    images: [
      '/images/gym-1.png',
      '/images/gym-2.png',
      '/images/gym-3.png',
      '/images/gym-4.png',
    ],
  },
  {
    id: 'exterior',
    title: 'Exterior',
    subtitle: 'Private deck · Coastal landscape · Sun loungers',
    coverImage: '/images/exterior-1.png',
    images: [
      '/images/exterior-1.png',
      '/images/exterior-2.png',
      '/images/exterior-3.png',
      '/images/exterior-4.png',
    ],
  },
  {
    id: 'pool',
    title: 'Pool',
    subtitle: 'Private plunge pool · Hot tub · Ocean sunset view',
    coverImage: '/images/pool-1.png',
    images: [
      '/images/pool-1.png',
      '/images/pool-2.png',
      '/images/pool-3.png',
    ],
  },
  {
    id: 'additional-photos',
    title: 'Additional photos',
    subtitle: 'More views of the property and amenities',
    coverImage: '/images/additional-1.png',
    images: [
      '/images/additional-1.png',
      '/images/additional-2.png',
      '/images/additional-3.png',
      '/images/additional-4.png',
      '/images/additional-5.png',
      '/images/additional-6.png',
      '/images/additional-7.png',
      '/images/additional-8.png',
      '/images/additional-9.png',
    ],
  },
]

export const host = {
  name: 'Mirashya Homes',
  avatar: '/images/mirashya-logo-verified.png',
  isSuperhost: false,
  role: 'Host',
  yearsHosting: 2,
  reviews: '1,463',
  rating: '4.68',
  bornIn: 'Born in the 80s',
  school: 'Where I went to school: NICMAR GOA',
  responseRate: '100%',
  responseTime: 'Responds within an hour',
  coHosts: [
    { name: 'Sharath', avatar: '/images/cohost-sharath.png' },
    { name: 'Aman Dev Pahwa', avatar: '/images/cohost-aman.png' },
    { name: 'Maria Karen Priyanka', avatar: '/images/cohost-maria.png' },
    { name: 'Simran', avatar: '/images/cohost-simran.png' },
    { name: 'Pallavi', avatar: '/images/cohost-pallavi.png' },
    { name: 'Sanyukta', avatar: '/images/cohost-sanyukta.png' },
    { name: 'Shruti', initial: 'S', bg: '#FCE7F3', text: '#DB2777' },
    { name: 'Amisha', initial: 'A', bg: '#E0E7FF', text: '#4F46E5' },
  ],
}

export const highlights = [
  {
    icon: 'utensils',
    title: 'Outdoor entertainment',
    text: 'The pool and alfresco dining are great for summer trips.',
  },
  {
    icon: 'fan',
    title: 'Designed for staying cool',
    text: 'Beat the heat with the A/C and ceiling fan.',
  },
  {
    icon: 'door',
    title: 'Self check-in',
    text: 'You can check in with the building staff.',
  },
]

export const description = `🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. 💗 🌴`

export const sleeping = [
  { image: '/images/photo-bedroom.png', name: 'Bedroom', detail: '1 double bed' },
  { image: '/images/photo-living-room.png', name: 'Living room', detail: '1 sofa' },
]

export const amenities = [
  { icon: 'kitchen', label: 'Kitchen' },
  { icon: 'wifi', label: 'Wifi' },
  { icon: 'workspace', label: 'Dedicated workspace' },
  { icon: 'parking', label: 'Free parking on premises' },
  { icon: 'pool', label: 'Pool' },
  { icon: 'hottub', label: 'Hot tub' },
  { icon: 'pets', label: 'Pets allowed' },
  { icon: 'camera', label: 'Exterior security cameras on property' },
  { icon: 'co_alarm', label: 'Carbon monoxide alarm', disabled: true },
  { icon: 'smoke_alarm', label: 'Smoke alarm', disabled: true },
]

export const categoryRatings = [
  { label: 'Cleanliness', value: 5.0, icon: 'spray' },
  { label: 'Accuracy', value: 5.0, icon: 'check' },
  { label: 'Check-in', value: 5.0, icon: 'key' },
  { label: 'Communication', value: 5.0, icon: 'chat' },
  { label: 'Location', value: 4.8, icon: 'map' },
  { label: 'Value', value: 4.8, icon: 'tag' },
]

export const reviewChips = [
  { label: 'Comfort', count: 6, emoji: '🛋️' },
  { label: 'Accuracy', count: 5, emoji: '✅' },
  { label: 'Hot tub', count: 5, emoji: '🛁' },
  { label: 'Condition', count: 4, emoji: '🪣' },
  { label: 'Hospitality', count: 8, emoji: '🎁' },
  { label: 'Cleanliness', count: 4, emoji: '🧴' },
  { label: 'Amenities', count: 2, emoji: '🧺' },
  { label: 'Decor', count: 2, emoji: '🖼️' },
  { label: 'Indoor spaces', count: 2, emoji: '🪑' },
  { label: 'Location', count: 2, emoji: '📍' },
]

export const ratingBreakdown = [
  { label: 'Cleanliness', value: 5.0 },
  { label: 'Accuracy', value: 5.0 },
  { label: 'Check-in', value: 5.0 },
  { label: 'Communication', value: 5.0 },
  { label: 'Location', value: 4.8 },
  { label: 'Value', value: 4.8 },
]

export const ratingDistribution = [
  { stars: 5, value: 0.95 },
  { stars: 4, value: 0.05 },
  { stars: 3, value: 0.0 },
  { stars: 2, value: 0.0 },
  { stars: 1, value: 0.0 },
]

export const reviews = [
  {
    name: 'Amit',
    subtitle: '2 months on Airbnb',
    initial: 'A',
    avatarColor: '#F5EBE1',
    textColor: '#8B572A',
    rating: 5,
    date: '1 week ago',
    text: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.',
  },
  {
    name: 'Aheesh',
    subtitle: '3 years on Airbnb',
    avatar: '/images/avatar-aheesh.png',
    rating: 5,
    date: '2 weeks ago',
    text: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.',
    showMore: true,
  },
  {
    name: 'Samiksha',
    subtitle: '8 months on Airbnb',
    avatar: '/images/avatar-samiksha.png',
    rating: 5,
    date: 'May 2026',
    text: 'the host nitish was really great help',
  },
  {
    name: 'Vedant',
    subtitle: '4 years on Airbnb',
    initial: 'V',
    avatarColor: '#F3E8FF',
    textColor: '#7E22CE',
    rating: 5,
    date: 'May 2026',
    text: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....',
    showMore: true,
  },
  {
    name: 'Vaibhav S',
    subtitle: '3 years on Airbnb',
    avatar: '/images/avatar-vaibhav.png',
    rating: 5,
    date: 'May 2026',
    text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
  },
  {
    name: 'Mohd',
    subtitle: '5 years on Airbnb',
    avatar: '/images/avatar-mohd.png',
    rating: 5,
    date: 'May 2026',
    text: 'Great place. Exactly as described in the listing.',
  },
]

export const thingsToKnow = {
  cancellation: [
    'Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.',
    'Review this host’s full policy for details.',
  ],
  houseRules: [
    'Check-in after 2:00 pm',
    'Checkout before 11:00 am',
    '3 guests maximum',
  ],
  safety: [
    'Carbon monoxide alarm not reported',
    'Smoke alarm not reported',
    'Exterior security cameras on property',
  ],
}

export const nearby = [
  // Page 1
  { image: '/images/stay-1.png', title: 'Beautiful Studio with a view to die for', rating: '4.91', price: '23,600' },
  { image: '/images/stay-2.png', title: 'NAQAB - 1bhk with private pool', rating: '4.95', price: '42,218' },
  { image: '/images/stay-3.png', title: 'Greentique Luxury Flat with plunge pool, Calangute', rating: '4.94', price: '44,506' },
  { image: '/images/stay-4.png', title: 'The Tropical Studio | 5 mins to Beach', rating: '4.96', price: '22,824' },
  { image: '/images/stay-5.png', title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute', rating: '4.95', price: '39,942' },
  // Page 2
  { image: '/images/stay-4.png', title: 'The Tropical Studio | 5 mins to Beach', rating: '4.96', price: '22,824' },
  { image: '/images/stay-5.png', title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute', rating: '4.95', price: '39,942' },
  { image: '/images/stay-kanso.png', title: 'Kanso by Earthen Window | Jacuzzi | Terrace | Pool', rating: '5.0', price: '45,648' },
  { image: '/images/stay-luxury-apt.png', title: 'Luxury Apt | Private Pool | 6 Mins from Beach', rating: '4.93', price: '48,786' },
  { image: '/images/stay-serendipity.png', title: 'Serendipity Cottage - Calm Stay in Calangute-Baga.', rating: '4.92', price: '22,824' },
]

