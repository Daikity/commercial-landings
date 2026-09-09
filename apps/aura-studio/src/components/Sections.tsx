'use client';

import { BeforeAfter } from '@/components/BeforeAfter';
import { BookingForm } from '@/components/BookingForm';
import { Reveal } from '@/components/Reveal';
import { prices, reviews, services, site, team } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

export function Sections() {
  return (
    <>
      <section id="services" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Services
            </p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
              What we do
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <article className="group">
                  <div className="overflow-hidden rounded-[var(--radius-md)]">
                    <img
                      src={assetPath(item.image)}
                      alt={item.alt}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[var(--color-text-muted)] leading-relaxed">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Prices
            </p>
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
              Clear from the start
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {prices.map((row) => (
                <li key={row.name} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="font-[family-name:var(--font-display)] text-lg">{row.name}</span>
                  <span className="shrink-0 text-[var(--color-text-muted)]">{row.price}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Team
            </p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
              People behind the chair
            </h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-3">
            {team.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.08}>
                <figure>
                  <div className="overflow-hidden rounded-[var(--radius-md)]">
                    <img
                      src={assetPath(person.image)}
                      alt={person.alt}
                      className="aspect-[3/4] w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <p className="font-[family-name:var(--font-display)] text-xl font-semibold">{person.name}</p>
                    <p className="text-sm text-[var(--color-text-muted)]">{person.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Results
            </p>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
              Before / after
            </h2>
            <p className="max-w-md text-[var(--color-text-muted)] leading-relaxed">
              Drag the handle to compare. Same light, same frame — the difference is the cut and finish.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <BeforeAfter />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Reviews
            </p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
              From the chair
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <blockquote>
                  <p className="font-[family-name:var(--font-body)] text-lg leading-relaxed text-[var(--color-text)]">
                    “{item.quote}”
                  </p>
                  <footer className="mt-4 text-sm text-[var(--color-text-muted)]">— {item.name}</footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="booking"
        className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]"
      >
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-stretch">
          <div className="flex min-h-0 flex-col">
            <Reveal>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
                Booking
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
                Book a visit
              </h2>
              <p className="mb-6 max-w-md text-[var(--color-text-muted)] leading-relaxed">
                Tell us what you need — we confirm times by email within one business day.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="relative hidden min-h-[14rem] flex-1 overflow-hidden rounded-[var(--radius-md)] lg:block">
              <img
                src={assetPath('/images/space-interior.png')}
                alt="Quiet salon waiting area"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-5 sm:p-8">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)] py-14">
        <div className="mx-auto flex max-w-[var(--shell-max)] flex-col gap-6 px-4 sm:px-6 md:flex-row md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold uppercase">{site.name}</p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">{site.address}</p>
            <p className="text-sm text-[var(--color-text-muted)]">{site.hours}</p>
          </div>
          <div className="text-sm">
            <a href={`mailto:${site.email}`} className="block underline-offset-2 hover:underline">
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="mt-1 block text-[var(--color-text-muted)]">
              {site.phone}
            </a>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-[var(--shell-max)] px-4 text-xs text-[var(--color-text-muted)] sm:px-6">
          All brands and business concepts shown here are fictional and created for portfolio
          demonstration purposes.
        </p>
      </footer>
    </>
  );
}
