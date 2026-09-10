export const site = {
  name: 'VANTA',
  fullName: 'VANTA DETAILING',
  tagline: 'Paint that holds a mirror.',
  support: 'Correction, ceramic, and interior resets in a controlled bay — clear packages, proven finish.',
  email: 'book@vantadetailing.demo',
  phone: '+1 312 555 0174',
  address: '880 Industrial Drive, Chicago',
  hours: 'Mon–Sat 08:00–18:00',
  cta: 'Book a detail',
};

export const services = [
  {
    id: 'correction',
    title: 'Paint correction',
    text: 'Multi-stage polish to cut swirls and haze — measured, not rushed.',
    image: '/images/service-correction.png',
    alt: 'Polisher working paint correction on a dark panel',
  },
  {
    id: 'ceramic',
    title: 'Ceramic coating',
    text: 'Liquid glass protection with depth that lasts through seasons.',
    image: '/images/service-ceramic.png',
    alt: 'Ceramic coating applied to a glossy hood',
  },
  {
    id: 'interior',
    title: 'Interior reset',
    text: 'Leather, fabric, and vents cleaned to a quiet cabin finish.',
    image: '/images/service-interior.png',
    alt: 'Interior leather detailing with microfiber',
  },
];

export const packages = [
  {
    id: 'essential',
    name: 'Essential',
    price: 'from $249',
    items: ['Hand wash & decontam', 'Single-stage polish', 'Tire & glass finish'],
  },
  {
    id: 'ceramic',
    name: 'Ceramic Shield',
    price: 'from $899',
    items: ['Paint correction', '1–2 year ceramic', 'Maintenance kit'],
    featured: true,
  },
  {
    id: 'full',
    name: 'Full Bay',
    price: 'from $1,450',
    items: ['Full correction', 'Multi-year ceramic', 'Interior deep clean'],
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Inspect',
    text: 'Lighting check, paint gauge notes, and a clear scope before tools move.',
  },
  {
    step: '02',
    title: 'Correct',
    text: 'Wash, clay, polish — stages matched to the panel, not a fixed menu.',
  },
  {
    step: '03',
    title: 'Protect',
    text: 'Ceramic or sealant cured in the bay with controlled temperature.',
  },
  {
    step: '04',
    title: 'Handover',
    text: 'Walkaround, care sheet, and booking window for the next maintenance wash.',
  },
];

export const reviews = [
  {
    quote: 'Swirls gone, depth back — and they explained every stage before starting.',
    name: 'Marcus T.',
  },
  {
    quote: 'Ceramic still beads after a winter of salt. Cabin smells clean, not chemical.',
    name: 'Priya N.',
  },
  {
    quote: 'Booked Essential, got honest photos of what correction would and would not fix.',
    name: 'Devon K.',
  },
];

export const faq = [
  {
    q: 'How long does a Ceramic Shield day take?',
    a: 'Usually 1–2 full days depending on paint condition. We confirm timing after inspection.',
  },
  {
    q: 'Do you work on wraps and matte paint?',
    a: 'Yes for maintenance washes and carefully selected coatings — we decline aggressive polish on matte.',
  },
  {
    q: 'Is drop-off required?',
    a: 'Preferred. Same-day wait is available for Essential when the bay schedule allows.',
  },
  {
    q: 'What products do you use?',
    a: 'Professional compounds and ceramic systems chosen per paint hardness — we list the stack on handover.',
  },
];
