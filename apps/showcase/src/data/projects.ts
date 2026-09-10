export type ProjectLevel = 'A' | 'B' | 'C';

export type ShowcaseProject = {
  name: string;
  slug: string;
  category: string;
  level: ProjectLevel;
  levelLabel: string;
  concept: { ru: string; en: string };
  tech: string[];
  status: 'planned' | 'in-progress' | 'ready';
  /** Обложка с живого демо (тот же origin через proxy) */
  cover: string;
  accent: string;
};

const GH = 'https://github.com/Daikity/commercial-landings/tree/main/apps';

export function sourceUrl(slug: string): string {
  return `${GH}/${slug}`;
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    name: 'Maison Crumb',
    slug: 'maison-crumb',
    category: 'Food & Bakery',
    level: 'A',
    levelLabel: 'Classic Commercial',
    concept: {
      ru: 'Пекарня: ассортимент, доставка, понятный CTA Order now.',
      en: 'Bakery landing with assortment, delivery, and Order now CTA.',
    },
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'React Hook Form'],
    status: 'ready',
    cover: '/demos/maison-crumb/images/hero-croissant.png',
    accent: '#c45c26',
  },
  {
    name: 'NOIR PÂTISSERIE',
    slug: 'noir-patisserie',
    category: 'Food & Bakery',
    level: 'B',
    levelLabel: 'Premium Editorial',
    concept: {
      ru: 'Premium pastry studio: editorial photography и горизонтальная галерея.',
      en: 'Premium pastry studio with editorial photography and horizontal gallery.',
    },
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'React Hook Form'],
    status: 'ready',
    cover: '/demos/noir-patisserie/images/hero-gateau.png',
    accent: '#c9a227',
  },
  {
    name: 'FERMENT',
    slug: 'ferment',
    category: 'Food & Bakery',
    level: 'C',
    levelLabel: 'Experimental Motion',
    concept: {
      ru: 'Artisan sourdough: scroll storytelling Grain → Bread.',
      en: 'Artisan sourdough with Grain → Bread scroll storytelling.',
    },
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'React Hook Form'],
    status: 'ready',
    cover: '/demos/ferment/images/bread.png',
    accent: '#8b6914',
  },
  {
    name: 'AURA Studio',
    slug: 'aura-studio',
    category: 'Beauty & Wellness',
    level: 'A',
    levelLabel: 'Classic Commercial',
    concept: {
      ru: 'Салон красоты: услуги, цены, before/after, booking.',
      en: 'Beauty salon with services, prices, before/after, booking.',
    },
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'React Hook Form'],
    status: 'ready',
    cover: '/demos/aura-studio/images/hero-studio.png',
    accent: '#b76e79',
  },
  {
    name: 'MONA Skin',
    slug: 'mona-skin',
    category: 'Beauty & Wellness',
    level: 'B',
    levelLabel: 'Premium Editorial',
    concept: {
      ru: 'Luxury skincare clinic: minimal medical-premium.',
      en: 'Luxury skincare clinic with minimal medical-premium look.',
    },
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'React Hook Form'],
    status: 'ready',
    cover: '/demos/mona-skin/images/hero.png',
    accent: '#5c7a6e',
  },
  {
    name: 'KAIRO',
    slug: 'kairo',
    category: 'Beauty & Wellness',
    level: 'C',
    levelLabel: 'Experimental Motion',
    concept: {
      ru: 'Wellness / yoga: спокойное пространство, breathing motion.',
      en: 'Wellness / yoga space with calm breathing-like motion.',
    },
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'React Hook Form'],
    status: 'ready',
    cover: '/demos/kairo/images/hero.png',
    accent: '#6b8f71',
  },
  {
    name: 'NORTHLINE',
    slug: 'northline',
    category: 'Real Estate & Interior',
    level: 'A',
    levelLabel: 'Classic Commercial',
    concept: {
      ru: 'Агентство недвижимости: фильтры объектов, карточки.',
      en: 'Real estate agency with property filters and cards.',
    },
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'React Hook Form'],
    status: 'ready',
    cover: '/demos/northline/images/hero.png',
    accent: '#3d5a80',
  },
  {
    name: 'ATELIER 27',
    slug: 'atelier-27',
    category: 'Real Estate & Interior',
    level: 'B',
    levelLabel: 'Premium Editorial',
    concept: {
      ru: 'Interior design studio: журнальная презентация проектов.',
      en: 'Interior design studio with editorial project presentation.',
    },
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'React Hook Form'],
    status: 'ready',
    cover: '/demos/atelier-27/images/hero.png',
    accent: '#9a7b4f',
  },
  {
    name: 'FRAME / HOUSE',
    slug: 'frame-house',
    category: 'Real Estate & Interior',
    level: 'C',
    levelLabel: 'Experimental Motion',
    concept: {
      ru: 'Architecture studio: space, materials, geometry, sticky scroll.',
      en: 'Architecture studio: space, materials, geometry, sticky scroll.',
    },
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'React Hook Form'],
    status: 'ready',
    cover: '/demos/frame-house/images/hero.png',
    accent: '#4a5568',
  },
  {
    name: 'VANTA DETAILING',
    slug: 'vanta-detailing',
    category: 'Auto & Mobility',
    level: 'A',
    levelLabel: 'Classic Commercial',
    concept: {
      ru: 'Car detailing: пакеты услуг, before/after slider.',
      en: 'Car detailing with packages and before/after slider.',
    },
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'React Hook Form'],
    status: 'ready',
    cover: '/demos/vanta-detailing/images/hero.png',
    accent: '#1e3a5f',
  },
  {
    name: 'VOLT GARAGE',
    slug: 'volt-garage',
    category: 'Auto & Mobility',
    level: 'B',
    levelLabel: 'Premium Editorial',
    concept: {
      ru: 'EV / premium automotive: dark technical editorial.',
      en: 'EV / premium automotive with dark technical editorial.',
    },
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'React Hook Form'],
    status: 'ready',
    cover: '/demos/volt-garage/images/hero.png',
    accent: '#00b4d8',
  },
  {
    name: 'APEX / PERFORMANCE',
    slug: 'apex-performance',
    category: 'Auto & Mobility',
    level: 'C',
    levelLabel: 'Experimental Motion',
    concept: {
      ru: 'Performance workshop: speed-inspired transitions.',
      en: 'Performance workshop with speed-inspired transitions.',
    },
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'React Hook Form'],
    status: 'ready',
    cover: '/demos/apex-performance/images/stage-launch.png',
    accent: '#e63946',
  },
  {
    name: 'NORTH & CO',
    slug: 'north-and-co',
    category: 'Professional Services',
    level: 'A',
    levelLabel: 'Classic Commercial',
    concept: {
      ru: 'B2B consulting: строгий коммерческий landing.',
      en: 'B2B consulting with a structured commercial landing.',
    },
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'React Hook Form'],
    status: 'ready',
    cover: '/demos/north-and-co/images/hero.png',
    accent: '#2d4a3e',
  },
  {
    name: 'ORBIT LAW',
    slug: 'orbit-law',
    category: 'Professional Services',
    level: 'B',
    levelLabel: 'Premium Editorial',
    concept: {
      ru: 'Legal consultancy: editorial, trust, practice areas.',
      en: 'Legal consultancy: editorial, trust, practice areas.',
    },
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'React Hook Form'],
    status: 'ready',
    cover: '/demos/orbit-law/images/hero.png',
    accent: '#b08d57',
  },
  {
    name: 'PULSE DIGITAL',
    slug: 'pulse-digital',
    category: 'Professional Services',
    level: 'C',
    levelLabel: 'Experimental Motion',
    concept: {
      ru: 'Digital agency: самый технологичный motion landing.',
      en: 'Digital agency: the most tech-forward motion landing.',
    },
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'React Hook Form'],
    status: 'ready',
    cover: '/demos/pulse-digital/images/hero.png',
    accent: '#2ee6ff',
  },
];

export const CATEGORIES = [
  'All',
  'Food & Bakery',
  'Beauty & Wellness',
  'Real Estate & Interior',
  'Auto & Mobility',
  'Professional Services',
] as const;

export const LEVELS = ['All', 'A', 'B', 'C'] as const;
