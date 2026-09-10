export const site = {
  name: 'ATELIER 27',
  tagline: 'Rooms composed like editorials.',
  support:
    'Residential interiors shaped by light, material, and quiet proportion — from first site walk to the last styling pass.',
  email: 'studio@atelier27.demo',
  phone: '+1 (646) 555-0127',
  address: '27 Mercer Street, New York',
  hours: 'By appointment · Mon–Fri 10:00–18:00',
  founded: '2014',
  issue: 'Vol. 27 · Spring edit',
};

export const toc = [
  { n: '01', label: 'Selected projects', href: '#projects' },
  { n: '02', label: 'Gallery plates', href: '#gallery' },
  { n: '03', label: 'Studio & people', href: '#studio' },
  { n: '04', label: 'Process', href: '#process' },
  { n: '05', label: 'Materials', href: '#materials' },
  { n: '06', label: 'Press & awards', href: '#awards' },
  { n: '07', label: 'Journal', href: '#journal' },
  { n: '08', label: 'Start a project', href: '#contact' },
];

export const stats = [
  { value: '60+', label: 'Residences completed' },
  { value: '11', label: 'Years of practice' },
  { value: '4', label: 'Cities of work' },
  { value: '27', label: 'Mercer Street studio' },
];

export const projects = [
  {
    id: 'mercer',
    num: '01',
    title: 'Mercer Residence',
    place: 'SoHo, New York',
    year: '2025',
    area: '2,400 sq ft',
    scope: 'Full residence · Dining · Library',
    text: 'Plaster, linen, and a dining room held by quiet ceramics.',
    body: 'A loft re-proportioned for long dinners and soft evenings. We lowered visual noise, raised the ceiling line with lime plaster, and let a single oak table carry the room. Storage hides in millwork; objects stay few and earned.',
    quote: 'The table had to feel like the only lamp in the room.',
    details: [
      { label: 'Client', value: 'Private collector' },
      { label: 'Duration', value: '14 months' },
      { label: 'Lead', value: 'I. March' },
      { label: 'Palette', value: 'Lime · oak · linen' },
    ],
    image: '/images/project-1.png',
    alt: 'Minimal dining room with oak table and plaster walls',
  },
  {
    id: 'brook',
    num: '02',
    title: 'Brook House',
    place: 'Hudson Valley',
    year: '2024',
    area: '3,100 sq ft',
    scope: 'Primary suite · Guest wing',
    text: 'Layered bedding, timber, and morning light as the primary finish.',
    body: 'A weekend house that should feel slower than the city. North windows do most of the lighting; textiles do the rest. We kept the architecture honest and treated the bedroom as a still landscape rather than a showroom.',
    quote: 'Morning light is the only paint we trust here.',
    details: [
      { label: 'Client', value: 'Family residence' },
      { label: 'Duration', value: '11 months' },
      { label: 'Lead', value: 'S. Okada' },
      { label: 'Palette', value: 'Timber · wool · clay' },
    ],
    image: '/images/project-2.png',
    alt: 'Editorial bedroom with linen bedding and warm plaster',
  },
  {
    id: 'clay',
    num: '03',
    title: 'Clay Kitchen',
    place: 'Tribeca',
    year: '2024',
    area: '680 sq ft',
    scope: 'Kitchen · Pantry · Breakfast nook',
    text: 'Stone counters and open shelves — utility dressed as still life.',
    body: 'A working kitchen that photographs like a still life without pretending not to cook. Stone takes heat and knives; open shelves accept only what earns a silhouette. The pantry absorbs the chaos so the room can stay composed.',
    quote: 'Open shelves are a contract with discipline.',
    details: [
      { label: 'Client', value: 'Chef & writer' },
      { label: 'Duration', value: '7 months' },
      { label: 'Lead', value: 'I. March' },
      { label: 'Palette', value: 'Limestone · brass · ash' },
    ],
    image: '/images/project-3.png',
    alt: 'Stone kitchen with ceramics on open shelving',
  },
];

export const services = [
  {
    title: 'Full residence',
    text: 'Concept through installation for primary homes — plans, finishes, FF&E, site coordination.',
    timeline: '10–18 months',
  },
  {
    title: 'Room edit',
    text: 'Focused redesign of dining, kitchen, or suite when the rest of the apartment already works.',
    timeline: '4–8 months',
  },
  {
    title: 'Material direction',
    text: 'Palette, boards, and purchasing guidance for clients building with their own GC.',
    timeline: '6–12 weeks',
  },
  {
    title: 'Hospitality suites',
    text: 'Quiet guest rooms and lobbies for small inns — residential manners at hospitality scale.',
    timeline: 'By brief',
  },
];

export const principals = [
  {
    name: 'Irene March',
    role: 'Principal · Design',
    bio: 'Former magazine stylist turned spatial editor. Obsessed with proportion, silence, and tables that host well.',
  },
  {
    name: 'Sora Okada',
    role: 'Principal · Materials',
    bio: 'Tracks stone, timber, and textile mills. Builds palettes that age instead of trend.',
  },
  {
    name: 'Noah Pell',
    role: 'Studio lead · Delivery',
    bio: 'Keeps drawings honest and contractors calm. Translates editorial intent into buildable details.',
  },
];

export const processSteps = [
  {
    title: 'Listen',
    weeks: 'Weeks 1–3',
    text: 'Brief, site light study, and what each room must hold — daily rituals before mood boards.',
    deliverables: ['Site notes', 'Program map', 'Reference edit'],
  },
  {
    title: 'Compose',
    weeks: 'Weeks 4–12',
    text: 'Plans, elevations, material boards, and proportion studies until the room feels inevitable.',
    deliverables: ['Concept set', 'Palette board', 'Budget bands'],
  },
  {
    title: 'Build',
    weeks: 'Months 3–12',
    text: 'Shop drawings, finish schedules, site visits, and quiet detailing with the trade team.',
    deliverables: ['Drawings', 'Spec book', 'Site reports'],
  },
  {
    title: 'Settle',
    weeks: 'Final month',
    text: 'Styling pass, object edit, and a walkthrough so the space is ready to live in — not just photograph.',
    deliverables: ['Punch list', 'Care guide', 'Photo set'],
  },
];

export const materials = [
  {
    name: 'Limestone',
    origin: 'Burgundy / local yards',
    note: 'Cool mass for floors and thresholds. We specify honed, not polished — it keeps the room grounded.',
    use: 'Floors · hearths · kitchen islands',
  },
  {
    name: 'White oak',
    origin: 'Northern mills',
    note: 'Warm grain for millwork and seating. Rift-sawn where we want calm, flat-sawn where we want character.',
    use: 'Tables · cabinetry · stairs',
  },
  {
    name: 'Lime plaster',
    origin: 'Studio mix',
    note: 'Breathable walls that take light like soft paper. Imperfection is the finish.',
    use: 'Feature walls · ceilings',
  },
  {
    name: 'Linen & wool',
    origin: 'EU / US mills',
    note: 'Soft layers that age with the room. We prefer undyed or mineral-dyed textiles.',
    use: 'Upholstery · bedding · curtains',
  },
  {
    name: 'Brass',
    origin: 'Cast & milled',
    note: 'Hardware that catches late light and darkens honestly with touch.',
    use: 'Pulls · lamps · fixtures',
  },
  {
    name: 'Clay & ceramic',
    origin: 'Studio makers',
    note: 'Objects with weight. If it does not earn a silhouette on the shelf, it does not stay.',
    use: 'Tableware · vessels',
  },
];

export const awards = [
  { year: '2025', title: 'Interior Review — Shortlist', org: 'Residence edit', note: 'Mercer Residence dining chapter' },
  { year: '2024', title: 'Material Merit', org: 'Craft & Space', note: 'Limestone & oak kitchen suite' },
  { year: '2024', title: 'Weekend House Mention', org: 'Upstate Forms', note: 'Brook House primary suite' },
  { year: '2023', title: 'Studio Mention', org: 'City Ateliers', note: 'Emerging New York practices' },
  { year: '2022', title: 'Hospitality Quiet Award', org: 'Inn Edit', note: 'Guest suite direction' },
];

export const press = [
  {
    quote: 'ATELIER 27 designs rooms that feel published before they feel staged.',
    source: 'Interior Review',
    issue: 'No. 118',
  },
  {
    quote: 'A studio that treats light as a finish and objects as footnotes.',
    source: 'Craft & Space',
    issue: 'Autumn 2024',
  },
  {
    quote: 'Mercer Residence is a lesson in how little a dining room needs to feel complete.',
    source: 'City Ateliers',
    issue: 'Vol. 9',
  },
];

export const journal = [
  {
    title: 'On plaster that breathes',
    date: 'Mar 2025',
    read: '6 min',
    excerpt: 'Why we prefer lime finishes that take the weather of a room.',
    body: 'Paint seals; plaster listens. In north-facing rooms we specify lime so morning light lands soft and evening shadows stay honest. The surface will mark — that is the point.',
  },
  {
    title: 'Kitchen as still life',
    date: 'Jan 2025',
    read: '5 min',
    excerpt: 'Open shelves only work when the objects earn their place.',
    body: 'A shelf is a contract. If the silhouette is weak, the room looks unfinished. We edit pottery the way a magazine edits a spread: fewer plates, clearer hierarchy, one dark vessel for contrast.',
  },
  {
    title: 'North light notes',
    date: 'Nov 2024',
    read: '7 min',
    excerpt: 'How we place seating when the window is the main lamp.',
    body: 'South light shows off; north light reveals. Seating faces the window only when the view deserves it. Otherwise we seat people beside the light — conversation first, glare never.',
  },
  {
    title: 'Tables that host',
    date: 'Sep 2024',
    read: '4 min',
    excerpt: 'Proportion rules for dining that outlast trends.',
    body: 'Width before length. Elbow room before centerpiece. If twelve people cannot pass a dish without apology, the table is wrong — no matter how photogenic.',
  },
];

export const clients = [
  'Private residences · SoHo',
  'Hudson Valley houses',
  'Tribeca kitchens',
  'Small inns · Upstate',
  'Collectors’ libraries',
];

export const faqs = [
  {
    q: 'Do you take projects outside New York?',
    a: 'Yes — Hudson Valley regularly, and select work in London and Los Angeles when the brief fits our pace.',
  },
  {
    q: 'What is a typical budget band?',
    a: 'Full residences usually begin around mid-six figures for FF&E and finishes, excluding construction. We share ranges after the first site visit.',
  },
  {
    q: 'Can you work with our architect or GC?',
    a: 'Often. We prefer early collaboration so drawings and materials stay aligned — not layered on at the end.',
  },
  {
    q: 'How do engagements start?',
    a: 'A short written brief, a call, then a paid concept phase. If we are not the right studio, we say so early.',
  },
];

export const projectTypes = [
  { value: 'residence' as const, label: 'Residence' },
  { value: 'apartment' as const, label: 'Apartment' },
  { value: 'hospitality' as const, label: 'Hospitality' },
  { value: 'other' as const, label: 'Other' },
];
