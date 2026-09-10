'use client';

import { BriefForm } from '@/components/BriefForm';
import { Reveal } from '@/components/Reveal';
import { SequenceScrub } from '@/components/SequenceScrub';
import { faqs, materials, notes, principles, site, works } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

export function Sections() {
  return (
    <>
      <SequenceScrub />

      <section id="works" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)]">Works</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
              Selected index
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              A short list of built and in-progress work — codes like a drawing set, not a brochure grid of cards.
            </p>
          </Reveal>
          <ul className="mt-12 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {works.map((w, i) => (
              <Reveal key={w.code} delay={0.04 * i} className="grid gap-3 py-7 md:grid-cols-[6rem_1fr_8rem_7rem] md:items-baseline md:gap-6">
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-accent)]">
                  {w.code}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold uppercase tracking-tight">
                    {w.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-[var(--color-text-muted)]">{w.text}</p>
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {w.place}
                  <br />
                  {w.type}
                </p>
                <p className="text-sm text-[var(--color-text-muted)] md:text-right">
                  {w.year}
                  <br />
                  {w.area}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="studio" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-12 px-4 sm:px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)]">Studio</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
              Brooklyn making room
            </h2>
            <p className="mt-5 text-[var(--color-text-muted)] leading-relaxed">
              FRAME / HOUSE is an architecture practice for houses and small cultural rooms. Models stay on the
              table; drawings stay readable; structure stays visible. Founded {site.founded}, based at{' '}
              {site.address}.
            </p>
            <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">
              We work across New York metro and the Hudson Valley. Interiors are considered where they are
              architecture — built-ins, thresholds, light — not a separate styling pass.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <img
              src={assetPath('/images/studio.png')}
              alt="Architecture studio with model tables and cool northern light"
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
            <p className="mt-3 text-xs text-[var(--color-text-muted)]">Fig. A — Model tables, Wythe Avenue studio.</p>
          </Reveal>
        </div>
      </section>

      <section id="approach" className="scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-ink)] py-[var(--section-space)] text-white">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)]">Approach</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
              Working principles
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-0 border-t border-white/15 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal
                key={p.title}
                delay={0.05 * i}
                className="border-b border-white/15 py-8 md:odd:border-r md:odd:pr-8 md:even:pl-8"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold uppercase">
                  {p.title}
                </h3>
                <p className="mt-3 text-white/65 leading-relaxed">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal className="max-w-xl">
            <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)]">Materials</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
              Short palette
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Fewer finishes, better junctions. The list is a discipline, not a shopping catalog.
            </p>
          </Reveal>
          <ul className="mt-10 grid grid-cols-1 border-t border-[var(--color-line)] md:grid-cols-3">
            {materials.map((m, i) => (
              <Reveal
                key={m.name}
                delay={0.04 * i}
                className="border-b border-[var(--color-line)] py-6 md:border-r md:px-6 md:[&:nth-child(3n+1)]:pl-0 md:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(3n)]:pr-0"
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-tight">
                  {m.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{m.note}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="notes" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)]">Notes</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
              Studio notes
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {notes.map((n, i) => (
              <Reveal key={n.title} delay={0.05 * i} className="border-t border-[var(--color-line)] pt-5">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-tight">
                  {n.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{n.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)]">FAQ</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-tight">
              Before the brief
            </h2>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={0.04 * i} className="border-t border-[var(--color-line)] py-6 last:border-b">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-tight">
                  {f.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="brief" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-12 px-4 sm:px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)]">Brief</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
              Brief the studio
            </h2>
            <p className="mt-5 text-[var(--color-text-muted)]">
              Site, program, and timeline — enough to decide if we are the right practice. We reply with
              availability or a clear no.
            </p>
            <div className="mt-8 space-y-1 text-sm text-[var(--color-text-muted)]">
              <p className="font-medium text-[var(--color-text)]">{site.address}</p>
              <p>{site.hours}</p>
              <a href={`mailto:${site.email}`} className="mt-3 block text-[var(--color-text)] underline-offset-4 hover:underline">
                {site.email}
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="block">
                {site.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-6 sm:p-8 lg:col-span-6 lg:col-start-7">
            <BriefForm />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)] bg-[var(--color-ink)] py-14 text-white">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-8 px-4 sm:px-6 md:grid-cols-3">
          <p className="font-[family-name:var(--font-display)] text-2xl font-semibold uppercase tracking-tight">
            {site.name}
          </p>
          <div className="text-sm text-white/60">
            <p>{site.address}</p>
            <a href={`mailto:${site.email}`} className="mt-2 block text-white hover:underline">
              {site.email}
            </a>
          </div>
          <p className="text-sm text-white/50 md:text-right">Architecture · Est. {site.founded}</p>
        </div>
        <p className="mx-auto mt-10 max-w-[var(--shell-max)] px-4 text-xs text-white/35 sm:px-6">
          All brands and business concepts shown here are fictional and created for portfolio demonstration
          purposes.
        </p>
      </footer>
    </>
  );
}
