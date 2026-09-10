'use client';

import { ContactForm } from '@/components/ContactForm';
import { ProjectChapters, ProjectStrip } from '@/components/Projects';
import { MaskImage, Reveal, TypeReveal } from '@/components/Reveal';
import {
  awards,
  clients,
  faqs,
  journal,
  materials,
  press,
  principals,
  processSteps,
  services,
  site,
  stats,
  toc,
} from '@/data/content';
import { assetPath } from '@/lib/asset-path';

export function Sections() {
  return (
    <>
      {/* Contents — журнальное оглавление */}
      <section id="contents" className="border-b border-[var(--color-line)] bg-[var(--color-bg)] py-14">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">Contents</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
              In this issue
            </h2>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">{site.issue}</p>
          </Reveal>
          <ol className="lg:col-span-8">
            {toc.map((item, i) => (
              <Reveal key={item.href} delay={0.04 * i}>
                <li>
                  <a
                    href={item.href}
                    className="group flex items-baseline gap-4 border-t border-[var(--color-line)] py-3.5 last:border-b focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                  >
                    <span className="w-8 text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      {item.n}
                    </span>
                    <span className="flex-1 font-[family-name:var(--font-display)] text-xl group-hover:underline sm:text-2xl">
                      {item.label}
                    </span>
                    <span className="text-[var(--color-text-muted)] transition-transform group-hover:translate-x-1" aria-hidden>
                      →
                    </span>
                  </a>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <ProjectChapters />
      <ProjectStrip />

      {/* Studio */}
      <section id="studio" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">Studio</p>
            <TypeReveal>
              <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[1.05] tracking-tight sm:text-6xl">
                A quiet room
                <br />
                for drawing rooms
              </h2>
            </TypeReveal>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)]">
              Founded in {site.founded} on Mercer Street, ATELIER 27 is a small interior practice for people who
              want rooms that feel published — not staged. We start with light and ritual, then materials,
              then objects that earn their silhouette.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
              The studio holds three principals, a rotating bench of makers, and a preference for fewer
              meetings with clearer drawings. We publish process notes here the way a magazine publishes
              footnotes: short, useful, slightly opinionated.
            </p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <MaskImage
              src={assetPath('/images/studio.png')}
              alt="Interior design atelier with drafting table and material boards"
              className="aspect-[4/3] w-full"
            />
            <p className="mt-3 text-xs text-[var(--color-text-muted)]">
              Fig. 01 — Material wall and drafting table, Mercer Street loft.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-[var(--shell-max)] grid-cols-2 gap-6 border-y border-[var(--color-line)] px-4 py-8 sm:px-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i}>
              <p className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">{s.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">People</p>
            <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">Principals</h3>
          </Reveal>
          <div className="mt-10 grid gap-0 border-t border-[var(--color-line)] md:grid-cols-3">
            {principals.map((p, i) => (
              <Reveal
                key={p.name}
                delay={0.06 * i}
                className="border-b border-[var(--color-line)] py-8 md:border-b-0 md:border-r md:px-6 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <p className="font-[family-name:var(--font-display)] text-2xl">{p.name}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">{p.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{p.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">Services</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
              How engagements look
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Four ways to work with the studio — from a full residence to a focused material direction.
            </p>
          </Reveal>
          <div className="mt-12 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={0.05 * i} className="grid gap-3 py-8 md:grid-cols-[1fr_1.4fr_8rem] md:items-baseline md:gap-8">
                <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">{s.title}</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">{s.text}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] md:text-right">
                  {s.timeline}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-ink)] py-[var(--section-space)] text-white">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">Process</p>
            <TypeReveal>
              <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-6xl">
                Four chapters
              </h2>
            </TypeReveal>
            <p className="mt-4 text-white/65">
              A readable arc from brief to settle — with deliverables you can actually schedule around.
            </p>
          </Reveal>
          <ol className="mt-14 divide-y divide-white/15 border-y border-white/15">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={0.05 * i} className="grid gap-4 py-9 sm:grid-cols-[5rem_1fr] lg:grid-cols-[5rem_14rem_1fr_14rem] lg:gap-8">
                <span className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl">{step.title}</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/45">{step.weeks}</p>
                </div>
                <p className="text-white/70 leading-relaxed lg:pt-1">{step.text}</p>
                <ul className="space-y-1 text-sm text-white/55 lg:pt-1">
                  {step.deliverables.map((d) => (
                    <li key={d}>· {d}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Materials */}
      <section id="materials" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-12 px-4 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <MaskImage
              src={assetPath('/images/materials.png')}
              alt="Material flat lay with limestone, oak, linen, and brass"
              className="aspect-[4/3] w-full"
            />
            <p className="mt-3 text-xs text-[var(--color-text-muted)]">
              Fig. 02 — Working palette board: stone, timber, textile, metal.
            </p>
          </div>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">Materials</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
              Palette before paint
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              We specify finishes that age — not samples that only photograph well once.
            </p>
            <ul className="mt-8">
              {materials.map((m) => (
                <li key={m.name} className="border-t border-[var(--color-line)] py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-[family-name:var(--font-display)] text-2xl">{m.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-accent)]">{m.origin}</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{m.note}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">{m.use}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Press */}
      <section id="press" className="scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-bg-elevated)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">Press</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
              What others wrote
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {press.map((p, i) => (
              <Reveal key={p.source} delay={0.06 * i} className="border border-[var(--color-line)] bg-[var(--color-bg)] p-6 sm:p-8">
                <blockquote className="font-[family-name:var(--font-display)] text-xl leading-snug italic sm:text-2xl">
                  “{p.quote}”
                </blockquote>
                <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  {p.source} · {p.issue}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal className="max-w-xl">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">Awards</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">Mentions</h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Shortlists and studio notes — useful as proof, not as the point.
            </p>
          </Reveal>
          <ul className="mt-12 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {awards.map((a, i) => (
              <Reveal
                key={`${a.year}-${a.title}`}
                delay={0.04 * i}
                className="grid grid-cols-[4.5rem_1fr] items-baseline gap-4 py-6 sm:grid-cols-[5.5rem_1.2fr_0.8fr_1fr]"
              >
                <span className="text-sm text-[var(--color-accent)]">{a.year}</span>
                <span className="font-[family-name:var(--font-display)] text-xl sm:text-2xl">{a.title}</span>
                <span className="col-span-2 text-sm text-[var(--color-text-muted)] sm:col-span-1">{a.org}</span>
                <span className="col-span-2 text-sm text-[var(--color-text-muted)] sm:col-span-1 sm:text-right">
                  {a.note}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Journal */}
      <section id="journal" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal className="max-w-xl">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">Journal</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
              Notes from the studio
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Short essays on plaster, shelves, light, and tables — the opinions behind the drawings.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-0 border-t border-[var(--color-line)] md:grid-cols-2">
            {journal.map((j, i) => (
              <Reveal
                key={j.title}
                delay={0.05 * i}
                className="border-b border-[var(--color-line)] py-8 md:odd:border-r md:odd:pr-8 md:even:pl-8 lg:odd:pr-12 lg:even:pl-12"
              >
                <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  <span>{j.date}</span>
                  <span className="text-[var(--color-line)]">·</span>
                  <span>{j.read}</span>
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl leading-snug sm:text-3xl">
                  {j.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-[var(--color-text)]">{j.excerpt}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{j.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients strip */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-ink)] py-10 text-white">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">Recent work contexts</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            {clients.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">FAQ</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
              Before you write
            </h2>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              Practical answers — geography, budget bands, collaboration, and how we start.
            </p>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={0.04 * i} className="border-t border-[var(--color-line)] py-6 last:border-b">
                <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-12 px-4 sm:px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">Contact</p>
            <TypeReveal>
              <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-6xl">
                Start a project
              </h2>
            </TypeReveal>
            <p className="mt-5 max-w-sm text-[var(--color-text-muted)]">
              Send a short brief — rooms, timeline, and what “finished” means for you. We reply within a few
              days with availability or a frank no.
            </p>
            <div className="mt-10 space-y-1 text-sm text-[var(--color-text-muted)]">
              <p className="font-medium text-[var(--color-text)]">{site.address}</p>
              <p>{site.hours}</p>
              <a href={`mailto:${site.email}`} className="mt-3 block text-[var(--color-text)] underline-offset-4 hover:underline">
                {site.email}
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="block">
                {site.phone}
              </a>
            </div>
            <p className="mt-8 max-w-sm text-xs leading-relaxed text-[var(--color-text-muted)]">
              Prefer a PDF lookbook? Ask for the current project index — we keep a short printed edit for
              studio visits.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-6 sm:p-8 lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)] bg-[var(--color-ink)] py-14 text-white">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 md:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-display)] text-3xl">{site.name}</p>
            <p className="mt-3 text-sm text-white/55">{site.issue}</p>
          </div>
          <div className="text-sm text-white/65">
            <p>{site.address}</p>
            <p className="mt-1">{site.hours}</p>
            <a href={`mailto:${site.email}`} className="mt-3 block text-white hover:underline">
              {site.email}
            </a>
          </div>
          <div className="text-sm text-white/55 md:text-right">
            <p>Interior design studio</p>
            <p>New York · Hudson Valley</p>
            <p className="mt-3">Est. {site.founded}</p>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-[var(--shell-max)] px-4 text-xs text-white/35 sm:px-6">
          All brands and business concepts shown here are fictional and created for portfolio demonstration
          purposes.
        </p>
      </footer>
    </>
  );
}
