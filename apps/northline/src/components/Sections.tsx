'use client';

import { Properties } from '@/components/Properties';
import { Reveal } from '@/components/Reveal';
import { ViewingForm } from '@/components/ViewingForm';
import { locations, reasons, reviews, services, site } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

export function Sections() {
  return (
    <>
      <Properties />

      <section id="services" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Services
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
              Desk to door
            </h2>
            <ul className="mt-8 space-y-6">
              {services.map((s) => (
                <li key={s.title}>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">{s.title}</h3>
                  <p className="mt-1 text-[var(--color-text-muted)]">{s.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="overflow-hidden rounded-[var(--radius-md)]">
            <img
              src={assetPath('/images/service.png')}
              alt="Floor plans and keys on a desk near a window"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section id="locations" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Locations
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
              Northern corridor
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-8 overflow-hidden rounded-[var(--radius-md)]">
            <img
              src={assetPath('/images/locations.png')}
              alt="Northern waterfront city skyline in cool daylight"
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc, i) => (
              <Reveal key={loc.name} delay={0.05 * i} className="border-t border-[var(--color-line)] pt-4">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{loc.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{loc.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Why us
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
              Built for clear decisions
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={0.06 * i}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-[var(--color-text-muted)]">{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Testimonials
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
              From recent closings
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal
                key={r.name}
                delay={0.06 * i}
                className="border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-5"
              >
                <blockquote className="text-base leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                <p className="mt-4 text-sm font-medium text-[var(--color-accent)]">{r.name}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="viewing" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Viewing
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
              Book a viewing
            </h2>
            <p className="mt-4 max-w-md text-[var(--color-text-muted)]">
              Tell us what you are looking for — we confirm tour windows by email.
            </p>
            <div className="mt-8 text-sm text-[var(--color-text-muted)]">
              <p>{site.address}</p>
              <p>{site.hours}</p>
              <a href={`mailto:${site.email}`} className="mt-2 block text-[var(--color-accent)] underline-offset-2 hover:underline">
                {site.email}
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="mt-1 block">
                {site.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-5 sm:p-8">
            <ViewingForm />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)] py-14">
        <div className="mx-auto flex max-w-[var(--shell-max)] flex-col gap-4 px-4 sm:px-6 md:flex-row md:justify-between">
          <p className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-[0.06em] uppercase">
            {site.name}
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">{site.address}</p>
        </div>
        <p className="mx-auto mt-8 max-w-[var(--shell-max)] px-4 text-xs text-[var(--color-text-muted)] sm:px-6">
          All brands and business concepts shown here are fictional and created for portfolio demonstration
          purposes.
        </p>
      </footer>
    </>
  );
}
