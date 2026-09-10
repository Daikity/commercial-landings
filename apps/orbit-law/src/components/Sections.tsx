'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BookingForm } from '@/components/BookingForm';
import { Reveal } from '@/components/Reveal';
import { cases, insights, practices, site, team, testimonials } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

function ImageReveal({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`overflow-hidden border border-[var(--color-line)] ${className ?? ''}`}
      initial={reduce ? false : { clipPath: 'inset(8% 8% 8% 8%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <img src={assetPath(src)} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </motion.div>
  );
}

export function Sections() {
  return (
    <>
      <section id="practice" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Practice areas
            </p>
            <h2 className="mb-12 max-w-xl font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
              Three orbits of counsel
            </h2>
          </Reveal>

          <div className="lg:grid lg:grid-cols-[12rem_1fr] lg:gap-12">
            <aside className="mb-8 hidden lg:block">
              <div className="sticky top-24 space-y-3">
                {practices.map((item) => (
                  <a
                    key={item.id}
                    href={`#practice-${item.id}`}
                    className="block text-xs uppercase tracking-[0.22em] text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </aside>

            <div className="space-y-16">
              {practices.map((item, i) => (
                <article
                  key={item.id}
                  id={`practice-${item.id}`}
                  className="scroll-mt-28 grid gap-8 md:grid-cols-2 md:items-center"
                >
                  <Reveal delay={0.05}>
                    <ImageReveal src={item.image} alt={item.alt} className="aspect-[4/3]" />
                  </Reveal>
                  <Reveal delay={0.12}>
                    <p className="mb-2 text-[0.65rem] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      0{i + 1}
                    </p>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-wide sm:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-md leading-relaxed text-[var(--color-text-muted)]">{item.text}</p>
                  </Reveal>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-bg-elevated)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">Cases</p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
              Selected matters
            </h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-2">
            {cases.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <article>
                  <ImageReveal src={item.image} alt={item.alt} className="aspect-[4/3]" />
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">Team</p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
              Counsel
            </h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-3">
            {team.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.08}>
                <figure>
                  <ImageReveal src={person.image} alt={person.alt} className="aspect-[3/4]" />
                  <figcaption className="mt-4">
                    <p className="font-[family-name:var(--font-display)] text-xl">{person.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                      {person.role}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Insights
            </p>
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
              Notes from chambers
            </h2>
            <ImageReveal src="/images/insight.png" alt="Counsel desk with notebook" className="aspect-[16/10]" />
          </Reveal>
          <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {insights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="py-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.excerpt}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-[var(--color-bg-elevated)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Testimonials
            </p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
              Quiet confidence
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <blockquote className="border-l border-[var(--color-accent)] pl-4">
                  <p className="font-[family-name:var(--font-display)] text-lg leading-relaxed">
                    “{item.quote}”
                  </p>
                  <footer className="mt-4 text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                    — {item.name}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Contact
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
                {site.cta}
              </h2>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-[var(--color-text-muted)]">
                Share the matter type — we respond with fit and next steps within two business days.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ImageReveal src="/images/contact.png" alt="Law firm reception waiting area" className="aspect-[16/10]" />
            </Reveal>
            <div className="mt-6 space-y-1 text-sm text-[var(--color-text-muted)]">
              <p>{site.address}</p>
              <p>{site.hours}</p>
              <a href={`mailto:${site.email}`} className="block text-[var(--color-accent)] underline-offset-4 hover:underline">
                {site.email}
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="block">
                {site.phone}
              </a>
            </div>
          </div>
          <Reveal delay={0.12}>
            <div className="border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-5 sm:p-8">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)] py-12">
        <div className="mx-auto flex max-w-[var(--shell-max)] flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-end md:justify-between">
          <p className="font-[family-name:var(--font-display)] text-2xl tracking-wide">{site.fullName}</p>
          <p className="max-w-md text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            All brands and business concepts shown here are fictional and created for portfolio demonstration
            purposes. Not legal advice.
          </p>
        </div>
      </footer>
    </>
  );
}
