'use client';

import { BeforeAfter } from '@/components/BeforeAfter';
import { ConsultForm } from '@/components/ConsultForm';
import { Reveal } from '@/components/Reveal';
import { experts, site, testimonials, treatments } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

export function Sections() {
  return (
    <>
      <section id="philosophy" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-12 px-4 sm:px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Philosophy</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl">
              Skin first.
              <br />
              Rituals second.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
              MONA is a clinical studio for people who want fewer products and better decisions. We
              diagnose, document, and only then treat — with protocols that respect barrier health.
            </p>
            <div className="mt-8 overflow-hidden">
              <img
                src={assetPath('/images/skin-macro.png')}
                alt="Luminous skin texture macro"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="treatments" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Treatments</p>
            <h2 className="mb-12 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">Care pathways</h2>
          </Reveal>
          <div className="grid gap-0 border-t border-[var(--color-line)] md:grid-cols-2">
            {treatments.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.06}
                className="border-b border-[var(--color-line)] py-8 md:odd:border-r md:odd:pr-10 md:even:pl-10 lg:odd:pr-16 lg:even:pl-16"
              >
                <article>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl">{item.title}</h3>
                  <p className="mt-3 max-w-md text-[var(--color-text-muted)] leading-relaxed">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <img
              src={assetPath('/images/ingredients.png')}
              alt="Clinical skincare ingredients flat lay"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Ingredients</p>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
              Chosen, not stacked
            </h2>
            <p className="max-w-md text-[var(--color-text-muted)] leading-relaxed">
              Actives are selected for compatibility with your barrier — not for a longer receipt.
              Prescription-adjacent care, explained in plain language.
            </p>
            <img
              src={assetPath('/images/product.png')}
              alt="Serum bottles on marble"
              className="mt-8 aspect-[3/4] w-full max-w-sm object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section id="experts" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Experts</p>
            <h2 className="mb-12 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">In clinic</h2>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2">
            {experts.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.08}>
                <figure className="grid gap-6 sm:grid-cols-2 sm:items-end">
                  <img
                    src={assetPath(person.image)}
                    alt={person.alt}
                    className="aspect-[3/4] w-full object-cover object-top"
                    loading="lazy"
                  />
                  <figcaption className="pb-2">
                    <p className="font-[family-name:var(--font-display)] text-3xl">{person.name}</p>
                    <p className="mt-2 text-sm uppercase tracking-wider text-[var(--color-text-muted)]">
                      {person.role}
                    </p>
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
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Results</p>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">Evidence in frame</h2>
            <p className="max-w-md text-[var(--color-text-muted)] leading-relaxed">
              Same light. Same crop. Drag to compare tone and texture after a clinical pathway.
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
            <p className="mb-10 text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Testimonials</p>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-2">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <blockquote>
                  <p className="font-[family-name:var(--font-display)] text-2xl leading-snug sm:text-3xl">
                    “{item.quote}”
                  </p>
                  <footer className="mt-6 text-sm uppercase tracking-wider text-[var(--color-text-muted)]">
                    — {item.name}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Booking</p>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
              Request a consult
            </h2>
            <p className="mb-8 max-w-md text-[var(--color-text-muted)] leading-relaxed">
              Share what you are hoping to change. We reply with availability and a short intake.
            </p>
            <img
              src={assetPath('/images/clinic.png')}
              alt="Clinic corridor"
              className="hidden aspect-[16/10] w-full object-cover lg:block"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-6 sm:p-8">
              <ConsultForm />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)] py-14">
        <div className="mx-auto flex max-w-[var(--shell-max)] flex-col gap-6 px-4 sm:px-6 md:flex-row md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl">{site.fullName}</p>
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
