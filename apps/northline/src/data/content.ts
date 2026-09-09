export const site = {
  name: 'NORTHLINE',
  tagline: 'Homes along the northern line.',
  support:
    'Apartments, houses, and lofts selected for light, commute, and calm streets — filter the list, book a viewing.',
  email: 'hello@northline.demo',
  phone: '+1 (206) 555-0138',
  address: '400 Pike Street, Seattle',
  hours: 'Mon–Sat 9:00–18:00',
};

export type PropertyType = 'apartment' | 'house' | 'loft';

export const properties = [
  {
    id: 'harbor-apt',
    title: 'Harbor View Apt',
    type: 'apartment' as const,
    beds: 2,
    baths: 2,
    area: '1,120 sq ft',
    price: 845000,
    priceLabel: '$845,000',
    location: 'Belltown',
    image: '/images/prop-1.png',
    alt: 'Bright apartment living room with large windows',
  },
  {
    id: 'cedar-house',
    title: 'Cedar Lane House',
    type: 'house' as const,
    beds: 4,
    baths: 3,
    area: '2,400 sq ft',
    price: 1285000,
    priceLabel: '$1,285,000',
    location: 'Queen Anne',
    image: '/images/prop-2.png',
    alt: 'Modern townhouse exterior with tall windows',
  },
  {
    id: 'mill-loft',
    title: 'Mill Street Loft',
    type: 'loft' as const,
    beds: 1,
    baths: 1,
    area: '980 sq ft',
    price: 695000,
    priceLabel: '$695,000',
    location: 'Georgetown',
    image: '/images/prop-3.png',
    alt: 'Industrial loft interior with tall windows',
  },
  {
    id: 'lake-condo',
    title: 'Lake Edge Condo',
    type: 'apartment' as const,
    beds: 3,
    baths: 2,
    area: '1,560 sq ft',
    price: 1120000,
    priceLabel: '$1,120,000',
    location: 'Eastlake',
    image: '/images/prop-4.png',
    alt: 'Open-plan condo kitchen with city view',
  },
];

export const filterTypes = [
  { value: 'all' as const, label: 'All' },
  { value: 'apartment' as const, label: 'Apartment' },
  { value: 'house' as const, label: 'House' },
  { value: 'loft' as const, label: 'Loft' },
];

export const services = [
  {
    title: 'Buyer guidance',
    text: 'Neighborhood fit, commute reality, and offer strategy without the noise.',
  },
  {
    title: 'Listing care',
    text: 'Photography, staging notes, and a calm path from inquiry to close.',
  },
  {
    title: 'Viewing desk',
    text: 'Same-week tours coordinated around your calendar — not ours.',
  },
];

export const locations = [
  { name: 'Belltown', note: 'Walkable towers, waterfront light' },
  { name: 'Queen Anne', note: 'Houses with quiet side streets' },
  { name: 'Georgetown', note: 'Lofts and maker blocks' },
  { name: 'Eastlake', note: 'Lake edge and short downtown hop' },
];

export const reasons = [
  { title: 'North clarity', text: 'We filter for daylight, transit, and livable floor plans — not buzzwords.' },
  { title: 'Honest cards', text: 'Beds, baths, and price up front. No buried fees in the brochure voice.' },
  { title: 'Local desk', text: 'Seattle corridor specialists who answer before the third follow-up.' },
];

export const reviews = [
  {
    quote: 'Filters actually matched what we asked for. Viewing booked in one email.',
    name: 'Priya & Sam',
  },
  {
    quote: 'Clear cards, no pressure tour, and a loft that looked exactly like the photos.',
    name: 'Marcus T.',
  },
  {
    quote: 'They knew Eastlake better than our first three portals combined.',
    name: 'Helen K.',
  },
];

export const interests = [
  { value: 'any' as const, label: 'Any type' },
  { value: 'apartment' as const, label: 'Apartment' },
  { value: 'house' as const, label: 'House' },
  { value: 'loft' as const, label: 'Loft' },
];
