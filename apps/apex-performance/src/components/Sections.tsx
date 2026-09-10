'use client';

import { AnimatedNumbers } from '@/components/AnimatedNumbers';
import { BookingForm } from '@/components/BookingForm';
import { PullScrub } from '@/components/PullScrub';
import { Reveal } from '@/components/Reveal';
import { faq, services, site } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

export function Sections() {
  return (
    <>
      <PullScrub />

      <section id="numbers" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Numbers
            </p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-5xl uppercase tracking-wide sm:text-6xl">
              Proof on the printout
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <AnimatedNumbers />
          </Reveal>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto mb-8 max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Services
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-5xl uppercase tracking-wide sm:text-6xl">
              Map · Dyno · Track
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.06}>
          <div className="flex gap-4 overflow-x-auto px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 sm:px-6 [&::-webkit-scrollbar]:hidden md:mx-auto md:max-w-[var(--shell-max)] md:overflow-visible md:px-6">
            {services.map((item) => (
              <article
                key={item.title}
                className="group min-w-[78vw] shrink-0 border border-[var(--color-line)] bg-[var(--color-bg-elevated)] sm:min-w-[42vw] md:min-w-0 md:flex-1"
              >
                <div className="overflow-hidden">
                  <img
                    src={assetPath(item.image)}
                    alt={item.alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 md:motion-safe:group-hover:scale-[1.04] md:motion-safe:group-hover:skew-x-[-1deg]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-3xl uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-2 px-4 text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-text-muted)] sm:px-6 md:hidden">
            Swipe
          </p>
        </Reveal>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-bg-elevated)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              FAQ
            </p>
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-5xl uppercase tracking-wide sm:text-6xl">
              Before the straps
            </h2>
          </Reveal>
          <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {faq.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <details className="group py-4">
                  <summary className="cursor-pointer list-none font-[family-name:var(--font-display)] text-2xl uppercase tracking-wide marker:content-none [&::-webkit-details-marker]:hidden">
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
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Booking
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-5xl uppercase tracking-wide sm:text-6xl">
                {site.cta}
              </h2>
              <p className="mb-6 max-w-md text-[var(--color-text-muted)] leading-relaxed">
                Tell us the vehicle and goal — we confirm a dyno window by email within one business day.
              </p>
            </Reveal>
            <Reveal
              delay={0.1}
              className="relative hidden min-h-[14rem] flex-1 overflow-hidden border border-[var(--color-line)] lg:block"
            >
              <img
                src={assetPath('/images/bay.png')}
                alt="Performance workshop dyno bay"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-5 sm:p-8">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)] py-12">
        <div className="mx-auto flex max-w-[var(--shell-max)] flex-col gap-4 px-4 sm:px-6 md:flex-row md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-4xl uppercase tracking-wide">
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
        <p className="mx-auto mt-8 max-w-[var(--shell-max)] px-4 text-xs text-[var(--color-text-muted)] sm:px-6">
          All brands and business concepts shown here are fictional and created for portfolio demonstration
          purposes.
        </p>
      </footer>
    </>
  );
}
