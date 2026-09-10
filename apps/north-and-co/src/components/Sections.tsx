'use client';

import { BookingForm } from '@/components/BookingForm';
import { Reveal } from '@/components/Reveal';
import { cases, processSteps, services, site, testimonials } from '@/data/content';
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
              What we install
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
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 md:motion-safe:group-hover:scale-[1.03]"
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

      <section id="cases" className="scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-bg-elevated)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Cases
            </p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
              Recent engagements
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {cases.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-bg)]">
                  <div className="overflow-hidden">
                    <img
                      src={assetPath(item.image)}
                      alt={item.alt}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 md:motion-safe:group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      {item.sector}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {item.result}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Process
            </p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
              How an engagement runs
            </h2>
          </Reveal>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.06}>
                <li className="border-t border-[var(--color-line)] pt-4">
                  <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--color-accent)]">
                    {item.step}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              About
            </p>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
              A small studio that forces choices
            </h2>
            <p className="max-w-md text-[var(--color-text-muted)] leading-relaxed">
              NORTH & CO partners with operators for finite engagements — diagnose, design, install, review.
              We stay out of permanent slide decks and architecture theater.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)]">
              <img
                src={assetPath('/images/about.png')}
                alt="Quiet consulting meeting room"
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Testimonials
            </p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
              From the room
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <blockquote className="border-l-2 border-[var(--color-accent)] pl-4">
                  <p className="text-lg leading-relaxed">“{item.quote}”</p>
                  <footer className="mt-4 text-sm text-[var(--color-text-muted)]">
                    — {item.name}, {item.role}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="engagement"
        className="scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-bg-elevated)] py-[var(--section-space)]"
      >
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-stretch">
          <div className="flex min-h-0 flex-col">
            <Reveal>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
                CTA
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
                {site.cta}
              </h2>
              <p className="mb-6 max-w-md text-[var(--color-text-muted)] leading-relaxed">
                Share company and focus — we reply with fit and timing within two business days.
              </p>
            </Reveal>
            <Reveal
              delay={0.1}
              className="relative hidden min-h-[14rem] flex-1 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] lg:block"
            >
              <img
                src={assetPath('/images/cta.png')}
                alt="Notebook on desk for engagement planning"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-bg)] p-5 sm:p-8">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>

      <footer id="contact" className="border-t border-[var(--color-line)] py-14">
        <div className="mx-auto flex max-w-[var(--shell-max)] flex-col gap-6 px-4 sm:px-6 md:flex-row md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold">{site.name}</p>
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
          All brands and business concepts shown here are fictional and created for portfolio demonstration
          purposes.
        </p>
      </footer>
    </>
  );
}
