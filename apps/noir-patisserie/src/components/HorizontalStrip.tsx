'use client';

import { useReducedMotion } from 'framer-motion';
import { assetPath } from '@/lib/asset-path';

type Item = { image: string; alt: string; title?: string; note?: string };

type Props = {
  items: Item[];
  variant?: 'portrait' | 'landscape';
};

/** Горизонтальная лента от левого края viewport */
export function HorizontalStrip({ items, variant = 'portrait' }: Props) {
  const reduce = useReducedMotion();

  const cardWidth =
    variant === 'portrait'
      ? 'min-w-[78vw] sm:min-w-[46vw] lg:min-w-[30vw] xl:min-w-[24vw]'
      : 'min-w-[88vw] sm:min-w-[56vw] lg:min-w-[40vw] xl:min-w-[34vw]';
  const aspect = variant === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]';

  return (
    <div className="relative w-full">
      <div
        className={`flex w-full gap-3 overflow-x-auto pb-4 pl-4 pr-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 md:gap-6 md:pl-4 md:pr-4 [&::-webkit-scrollbar]:hidden ${
          reduce ? 'snap-x snap-mandatory' : ''
        }`}
      >
        {items.map((item) => (
          <figure key={item.image} className={`group shrink-0 snap-start ${cardWidth}`}>
            <div className={`overflow-hidden ${aspect}`}>
              <img
                src={assetPath(item.image)}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            {item.title ? (
              <figcaption className="mt-4 px-0 sm:pr-2">
                <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-text)]">
                  {item.title}
                </p>
                {item.note ? (
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.note}</p>
                ) : null}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
      <p className="mt-2 px-4 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)] sm:px-8 md:hidden">
        Swipe
      </p>
    </div>
  );
}
