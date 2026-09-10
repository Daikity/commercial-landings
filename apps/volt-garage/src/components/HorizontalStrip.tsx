'use client';

import { useReducedMotion } from 'framer-motion';
import { assetPath } from '@/lib/asset-path';

type Item = { image: string; alt: string; title?: string; note?: string };

type Props = {
  items: Item[];
  variant?: 'portrait' | 'landscape';
};

/** Горизонтальная лента; на mobile — swipe, не сжатый desktop */
export function HorizontalStrip({ items, variant = 'landscape' }: Props) {
  const reduce = useReducedMotion();

  const cardWidth =
    variant === 'portrait'
      ? 'min-w-[72vw] sm:min-w-[42vw] lg:min-w-[28vw]'
      : 'min-w-[84vw] sm:min-w-[52vw] lg:min-w-[38vw]';
  const aspect = variant === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]';

  return (
    <div className="relative w-full">
      <div
        className={`flex w-full gap-4 overflow-x-auto pb-4 pl-4 pr-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 sm:pl-6 sm:pr-6 [&::-webkit-scrollbar]:hidden ${
          reduce ? 'snap-x snap-mandatory' : ''
        }`}
      >
        {items.map((item) => (
          <figure key={item.image} className={`group shrink-0 snap-start ${cardWidth}`}>
            <div className={`overflow-hidden border border-[var(--color-line)] ${aspect}`}>
              <img
                src={assetPath(item.image)}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 md:motion-safe:group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            {item.title ? (
              <figcaption className="mt-4">
                <p className="font-[family-name:var(--font-display)] text-xl font-medium tracking-tight">
                  {item.title}
                </p>
                {item.note ? (
                  <p className="mt-1 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                    {item.note}
                  </p>
                ) : null}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
      <p className="mt-2 px-4 font-[family-name:var(--font-body)] text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-text-muted)] sm:px-6 md:hidden">
        Swipe
      </p>
    </div>
  );
}
