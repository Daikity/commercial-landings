export const site = {
  name: 'Maison Crumb',
  tagline: 'Bread worth waking up for',
  support:
    'Neighborhood bakery baking sourdough, croissants, and seasonal tarts every morning.',
  phone: '+1 (415) 555-0142',
  email: 'hello@maisoncrumb.demo',
  address: '128 Grove Street, San Francisco',
  hours: 'Tue–Sun · 7:00–18:00',
};

export const nav = [
  { label: 'Assortment', href: '#assortment' },
  { label: 'Popular', href: '#popular' },
  { label: 'Story', href: '#story' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'Contact', href: '#contact' },
];

export const categories = [
  { title: 'Sourdough', text: 'Long-fermented loaves with crackling crust.' },
  { title: 'Viennoiserie', text: 'Butter croissants, pain au chocolat, brioche.' },
  { title: 'Pastries', text: 'Fruit tarts and seasonal sweets.' },
  { title: 'Savory', text: 'Quiches and lunch-ready bakes.' },
];

export const products = [
  {
    name: 'Country Sourdough',
    price: '$8',
    image: '/images/product-sourdough.png',
    alt: 'Rustic sourdough loaf on a wooden surface',
  },
  {
    name: 'Butter Croissant',
    price: '$4.50',
    image: '/images/product-croissant.png',
    alt: 'Golden butter croissant on a ceramic plate',
  },
  {
    name: 'Berry Tart',
    price: '$6',
    image: '/images/product-tart.png',
    alt: 'Fruit tart with berries and pastry cream',
  },
];

export const benefits = [
  { title: 'Baked daily', text: 'We start at 4am so the case is full by opening.' },
  { title: 'Local flour', text: 'Milled nearby for flavor you can taste.' },
  { title: 'Same-day pickup', text: 'Order by noon, collect after 3pm.' },
  { title: 'Neighborhood delivery', text: 'Within 3 miles, Tue–Sat afternoons.' },
];

export const reviews = [
  {
    quote: 'The croissant shatters exactly the way it should. Our weekend ritual.',
    author: 'Maya R.',
  },
  {
    quote: 'Sourdough with real depth — and the staff actually remembers your name.',
    author: 'Jonah K.',
  },
  {
    quote: 'Ordered a tart for a birthday; it looked as good as it tasted.',
    author: 'Elena V.',
  },
];
