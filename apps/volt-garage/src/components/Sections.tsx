'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BookingForm } from '@/components/BookingForm';
import { HorizontalStrip } from '@/components/HorizontalStrip';
import { Reveal } from '@/components/Reveal';
import { gallery, services, site, techPoints, vehicles } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-6%', '6%']);

  return (
    <div ref={ref} className="relative aspect-[16/10] overflow-hidden border border-[var(--color-line)]">
      <motion.img
        src={assetPath(src)}
        alt={alt}
        style={{ y }}
        className="absolute inset-[-8%] h-[116%] w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

export function Sections() {
  return (
    <>
      <section id="vehicles" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto mb-10 max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-3 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Vehicles
            </p>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
              Forms we know by sound
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.08}>
          <HorizontalStrip items={vehicles} variant="landscape" />
        </Reveal>
      </section>

      <section id="technology" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <p className="mb-3 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Technology
            </p>
            <h2 className="mb-5 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
              Charge path, mapped
            </h2>
            <p className="mb-8 max-w-md font-[family-name:var(--font-body)] text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
              We treat the port like paint — measured sessions, thermal notes, and a handover that reads like a log, not a pitch.
            </p>
            <ul className="space-y-3">
              {techPoints.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 border-t border-[var(--color-line)] pt-3 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-text-muted)]"
                >
                  <span className="text-[var(--color-accent)]" aria-hidden>
                    /
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <ParallaxImage src="/images/tech.png" alt="EV charging cable connected in dark studio" />
          </Reveal>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-bg-elevated)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-3 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Services
            </p>
            <h2 className="mb-12 max-w-lg font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
              Sparse menu, full bay
            </h2>
          </Reveal>
          <div className="grid gap-0 sm:grid-cols-2">
            {services.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="border-t border-[var(--color-line)] py-8 sm:border-r sm:px-6 sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:pr-0 sm:[&:nth-child(odd)]:pl-0">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm font-[family-name:var(--font-body)] text-xs leading-relaxed text-[var(--color-text-muted)]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto mb-10 max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-3 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Gallery
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
              Surfaces under voltage
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.08}>
          <HorizontalStrip items={gallery} variant="portrait" />
        </Reveal>
      </section>

      <section id="studio" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-3 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Studio
            </p>
            <h2 className="mb-8 max-w-lg font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
              One bay. Reserved light.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ParallaxImage src="/images/studio.png" alt="Dark EV garage bay with charging pedestal" />
          </Reveal>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Contact
            </p>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
              {site.cta}
            </h2>
            <p className="mb-8 max-w-md font-[family-name:var(--font-body)] text-xs leading-relaxed text-[var(--color-text-muted)]">
              Share the vehicle — we confirm a bay window by email within one business day.
            </p>
            <div className="space-y-2 font-[family-name:var(--font-body)] text-xs text-[var(--color-text-muted)]">
              <p>{site.address}</p>
              <p>{site.hours}</p>
              <a href={`mailto:${site.email}`} className="block text-[var(--color-accent)] underline-offset-4 hover:underline">
                {site.email}
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="block">
                {site.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-5 sm:p-8">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)] py-12">
        <div className="mx-auto flex max-w-[var(--shell-max)] flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-end md:justify-between">
          <p className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[0.12em] uppercase">
            {site.fullName}
          </p>
          <p className="font-[family-name:var(--font-body)] text-[0.6rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            All brands and business concepts shown here are fictional and created for portfolio demonstration purposes.
          </p>
        </div>
      </footer>
    </>
  );
}
