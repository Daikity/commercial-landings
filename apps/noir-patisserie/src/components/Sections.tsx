'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HorizontalStrip } from '@/components/HorizontalStrip';
import { PrivateOrderForm } from '@/components/PrivateOrderForm';
import { Reveal } from '@/components/Reveal';
import { gallery, signatures, site } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-6%', '6%']);

  // w-full без 100vw — иначе справа обрезается из‑за scrollbar + overflow-x-clip
  return (
    <div ref={ref} className="relative w-full overflow-hidden aspect-[16/10] md:aspect-[21/9] lg:h-[min(72vh,52rem)] lg:aspect-auto">
      <motion.img
        src={assetPath(src)}
        alt={alt}
        style={{ y }}
        className="absolute left-0 top-0 h-[115%] w-full max-w-none object-cover object-center"
        loading="lazy"
      />
    </div>
  );
}

export function Sections() {
  return (
    <>
      <section id="signature" className="scroll-mt-24 py-[var(--section-space)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <Reveal>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Collection
            </p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl md:text-6xl">
              Signature
            </h2>
          </Reveal>
        </div>
        <HorizontalStrip
          variant="landscape"
          items={signatures.map((s) => ({
            image: s.image,
            alt: s.alt,
            title: s.name,
            note: s.note,
          }))}
        />
      </section>

      <section id="ingredients" className="scroll-mt-24 border-t border-[var(--color-line)] px-4 py-[var(--section-space)] sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <img
              src={assetPath('/images/ingredients.png')}
              alt="Dark chocolate, vanilla pods, and cocoa on black marble"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Ingredients
            </p>
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
              Fewer notes. Deeper flavor.
            </h2>
            <p className="max-w-md leading-relaxed text-[var(--color-text-muted)]">
              Single-origin cacao, cultured butter, and seasonal fruit — chosen for intensity, not
              abundance. Every plate begins with restraint.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="craft" className="scroll-mt-24 py-[var(--section-space)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <Reveal>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">Craft</p>
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
              Precision in the quiet hours
            </h2>
          </Reveal>
        </div>
        <ParallaxImage src="/images/craft.png" alt="Pastry chef hands plating a dessert with tweezers" />
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-8">
          <Reveal>
            <p className="max-w-lg text-[var(--color-text-muted)] leading-relaxed">
              Late evenings in the atelier. Tweezers, tempered chocolate, and the patience of
              slow-set creams.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <Reveal>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Gallery
            </p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
              Recent compositions
            </h2>
          </Reveal>
        </div>
        <HorizontalStrip variant="landscape" items={gallery} />
      </section>

      <section id="chef" className="scroll-mt-24 border-t border-[var(--color-line)] px-4 py-[var(--section-space)] sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[minmax(0,0.9fr)_1.1fr]">
          <Reveal>
            <img
              src={assetPath('/images/chef.png')}
              alt="Portrait of the pastry chef in a dark kitchen"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">Chef</p>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
              Élise Moreau
            </h2>
            <p className="mb-4 max-w-md leading-relaxed text-[var(--color-text-muted)]">
              Trained in Lyon, refined in New York. Élise founded NOIR to give pastry the same
              editorial care as haute couture — intimate servings, exacting technique.
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">Appointments only. Limited weekly capacity.</p>
          </Reveal>
        </div>
      </section>

      <section id="private" className="scroll-mt-24 border-t border-[var(--color-line)]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="relative min-h-72 md:min-h-full">
            <img
              src={assetPath('/images/private-orders.png')}
              alt="Premium pastry atelier interior at night"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="px-4 py-[var(--section-space)] sm:px-10">
            <Reveal>
              <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Private orders
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
                Commission a tasting
              </h2>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-[var(--color-text-muted)]">
                Celebrations, intimate dinners, and custom dessert architectures.
              </p>
              <PrivateOrderForm />
            </Reveal>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-[var(--color-line)] px-4 py-16 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-3xl tracking-[0.12em]">
              {site.fullName}
            </p>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">{site.address}</p>
            <p className="text-sm text-[var(--color-text-muted)]">{site.hours}</p>
          </div>
          <div className="text-sm">
            <a
              href={`mailto:${site.email}`}
              className="block text-[var(--color-text)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, '')}`}
              className="mt-2 block text-[var(--color-text-muted)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              {site.phone}
            </a>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-7xl text-xs text-[var(--color-text-muted)]">
          All brands and business concepts shown here are fictional and created for portfolio
          demonstration purposes.
        </p>
      </footer>
    </>
  );
}
