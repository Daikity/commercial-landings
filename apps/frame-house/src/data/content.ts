export const site = {
  name: 'FRAME / HOUSE',
  tagline: 'Architecture as a sequence.',
  support:
    'Houses and small cultural buildings composed through plan, frame, material, and volume — presented as an interactive build.',
  email: 'studio@framehouse.demo',
  phone: '+1 (917) 555-0144',
  address: '88 Wythe Avenue, Brooklyn',
  hours: 'By appointment · Mon–Fri',
  founded: '2012',
};

export const stages = [
  {
    id: 'plan',
    num: '01',
    title: 'Plan',
    label: 'Drawing set',
    text: 'Site constraints become a clear plan: rooms ordered by light, circulation, and the quiet work of daily life.',
    detail: 'We begin with surveys, solar notes, and a program matrix before a single elevation is drawn.',
    image: '/images/plan.png',
    alt: 'Architectural plan drawing on a drafting table',
  },
  {
    id: 'frame',
    num: '02',
    title: 'Frame',
    label: 'Structure',
    text: 'A readable skeleton — timber and steel lines that hold the geometry before finishes arrive.',
    detail: 'Structure is composed, not hidden. Spans, joints, and voids are part of the architecture.',
    image: '/images/frame.png',
    alt: 'Steel and timber frame of a modern house under construction',
  },
  {
    id: 'material',
    num: '03',
    title: 'Material',
    label: 'Junctions',
    text: 'Concrete meets glass with intention. Edges, reveals, and tolerances become the craft.',
    detail: 'Material boards are tested on site against real light — not only against a mood board.',
    image: '/images/material.png',
    alt: 'Board-formed concrete meeting a glass facade detail',
  },
  {
    id: 'volume',
    num: '04',
    title: 'Volume',
    label: 'Massing',
    text: 'Massing studies lock proportion: how the building sits, shifts, and opens to landscape.',
    detail: 'Physical models stay in the room until the silhouette feels inevitable.',
    image: '/images/volume.png',
    alt: 'White geometric architectural massing model on a studio table',
  },
  {
    id: 'house',
    num: '05',
    title: 'House',
    label: 'Finished work',
    text: 'The built result — rooms calibrated to light, structure expressed, landscape framed.',
    detail: 'Photography is documentation, not decoration. The building must hold without filters.',
    image: '/images/house.png',
    alt: 'Finished modern house interior looking out through glass',
  },
];

export const works = [
  {
    code: 'FH-18',
    title: 'Ridge House',
    place: 'Hudson Highlands',
    year: '2025',
    type: 'Residence',
    area: '3,200 sq ft',
    text: 'A long pavilion on a ridge line — plan stretched to catch east light and a western view cut.',
  },
  {
    code: 'FH-14',
    title: 'Canal Studio',
    place: 'Gowanus',
    year: '2024',
    type: 'Live / work',
    area: '1,850 sq ft',
    text: 'Adaptive reuse with an exposed frame and a north-facing making hall.',
  },
  {
    code: 'FH-11',
    title: 'Garden Court',
    place: 'Prospect Heights',
    year: '2023',
    type: 'Townhouse',
    area: '4,100 sq ft',
    text: 'A court carved into a brownstone block — volume subtracted to give rooms air.',
  },
  {
    code: 'FH-09',
    title: 'Reading Pavilion',
    place: 'Beacon',
    year: '2022',
    type: 'Cultural',
    area: '980 sq ft',
    text: 'A small public room for books and quiet — concrete, glass, and a single deep reveal.',
  },
];

export const principles = [
  {
    title: 'Geometry first',
    text: 'Proportion precedes style. If the diagram is weak, finishes cannot save it.',
  },
  {
    title: 'Structure visible',
    text: 'Frames and spans are part of the experience — not something to plaster over.',
  },
  {
    title: 'Light as plan',
    text: 'Rooms are ordered by sun path and season before furniture is discussed.',
  },
  {
    title: 'Few materials, well joined',
    text: 'A short palette with careful junctions beats a catalog of trends.',
  },
];

export const materials = [
  { name: 'Board-formed concrete', note: 'Mass, thermal calm, readable texture' },
  { name: 'Structural timber', note: 'Warm spans and honest joints' },
  { name: 'Insulated glass', note: 'Thin frames, deep views' },
  { name: 'Blackened steel', note: 'Edges, rails, and hardware' },
  { name: 'Limestone', note: 'Thresholds and wet zones' },
  { name: 'White oak', note: 'Millwork that ages quietly' },
];

export const notes = [
  {
    title: 'Why we still build models',
    text: 'Screens flatten judgment. A physical volume under north light still catches the mistakes early.',
  },
  {
    title: 'On clipping the view',
    text: 'Windows are not walls of glass by default. A reveal should frame a decision, not an Instagram crop.',
  },
  {
    title: 'Tolerance as craft',
    text: 'Architecture lives in millimeters — the gap where concrete meets glass is the drawing that matters.',
  },
];

export const faqs = [
  {
    q: 'What project types do you take?',
    a: 'Houses, adaptive reuse, and small cultural rooms. We rarely take speculative multifamily.',
  },
  {
    q: 'Do you handle interiors?',
    a: 'Primary spaces and built-in furniture yes; full FF&E packages are selective and brief-dependent.',
  },
  {
    q: 'Where do you work?',
    a: 'New York metro and Hudson Valley primarily, with select remote sites when the team can visit regularly.',
  },
  {
    q: 'How does a brief start?',
    a: 'A written brief, site access, and a paid feasibility study before schematic design.',
  },
];

export const briefTypes = [
  { value: 'house' as const, label: 'House' },
  { value: 'reuse' as const, label: 'Adaptive reuse' },
  { value: 'cultural' as const, label: 'Cultural / pavilion' },
  { value: 'other' as const, label: 'Other' },
];
