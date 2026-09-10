'use client';

import { BeforeAfter } from '@/components/BeforeAfter';
import { BookingForm } from '@/components/BookingForm';
import { Reveal } from '@/components/Reveal';
import { faq, packages, processSteps, reviews, services, site } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

export function Sections() {
  return (
    <>
      <section id="services" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Services
            </p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-wide sm:text-5xl">
              What we finish
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <article className="group">
                  <div className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)]">
                    <img
                      src={assetPath(item.image)}
                      alt={item.alt}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 md:motion-safe:group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[var(--color-text-muted)] leading-relaxed">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-bg-elevated)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Packages
            </p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-wide sm:text-5xl">
              Clear bay pricing
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 0.08}>
                <article
                  className={`flex h-full flex-col rounded-[var(--radius-md)] border p-6 transition-colors ${
                    pkg.featured
                      ? 'border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-accent)_10%,var(--color-bg))]'
                      : 'border-[var(--color-line)] bg-[var(--color-bg)]'
                  }`}
                >
                  {pkg.featured ? (
                    <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
                      Most booked
                    </p>
                  ) : null}
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold uppercase tracking-wide">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-lg text-[var(--color-accent)]">{pkg.price}</p>
                  <ul className="mt-5 flex-1 space-y-2 text-sm text-[var(--color-text-muted)]">
                    {pkg.items.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="text-[var(--color-accent)]" aria-hidden>
                          —
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#booking"
                    className="mt-6 inline-block text-sm font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                  >
                    {site.cta}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Results
            </p>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-wide sm:text-5xl">
              Before / after
            </h2>
            <p className="max-w-md text-[var(--color-text-muted)] leading-relaxed">
              Drag the handle. Same light language — the difference is correction and ceramic depth.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <BeforeAfter />
          </Reveal>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Process
            </p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-wide sm:text-5xl">
              Bay workflow
            </h2>
          </Reveal>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.06}>
                <li className="border-t border-[var(--color-line)] pt-4">
                  <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--color-accent)]">
                    {item.step}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Reviews
            </p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-wide sm:text-5xl">
              From the lot
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <blockquote className="border-l-2 border-[var(--color-accent)] pl-4">
                  <p className="text-lg leading-relaxed">“{item.quote}”</p>
                  <footer className="mt-4 text-sm text-[var(--color-text-muted)]">— {item.name}</footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-bg-elevated)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              FAQ
            </p>
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-wide sm:text-5xl">
              Before you drop off
            </h2>
          </Reveal>
          <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {faq.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <details className="group py-4">
                  <summary className="cursor-pointer list-none font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {item.q}
                      <span className="text-[var(--color-accent)] transition group-open:rotate-45" aria-hidden>
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-stretch">
          <div className="flex min-h-0 flex-col">
            <Reveal>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Booking
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-wide sm:text-5xl">
                {site.cta}
              </h2>
              <p className="mb-6 max-w-md text-[var(--color-text-muted)] leading-relaxed">
                Tell us the package and vehicle — we confirm bay time by email within one business day.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="relative hidden min-h-[14rem] flex-1 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] lg:block">
              <img
                src={assetPath('/images/studio.png')}
                alt="Controlled detailing bay with tool carts"
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

      <footer id="contacts" className="border-t border-[var(--color-line)] py-14">
        <div className="mx-auto flex max-w-[var(--shell-max)] flex-col gap-6 px-4 sm:px-6 md:flex-row md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-3xl font-semibold uppercase tracking-[0.06em]">
              {site.fullName}
            </p>
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
