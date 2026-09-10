'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/data/content';
import { assetPath } from '@/lib/asset-path';
import { TypeReveal } from '@/components/Reveal';

function ProjectChapter({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const dark = index % 2 === 1;
  const muted = dark ? 'text-white/70' : 'text-[var(--color-text-muted)]';
  const soft = dark ? 'text-white/55' : 'text-[var(--color-text-muted)]';
  const line = dark ? 'border-white/20' : 'border-[var(--color-line)]';

  return (
    <article
      ref={ref}
      className={`relative min-h-[100svh] overflow-hidden ${
        dark ? 'bg-[var(--color-ink)] text-white' : 'bg-[var(--color-bg)] text-[var(--color-text)]'
      }`}
    >
      <div className="absolute inset-0">
        <motion.img
          src={assetPath(project.image)}
          alt=""
          aria-hidden
          style={reduce ? undefined : { y: imgY }}
          className="h-[120%] w-full object-cover opacity-90"
          loading="lazy"
        />
        <div
          className={`absolute inset-0 ${
            dark
              ? 'bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/80 to-[var(--color-ink)]/25'
              : 'bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/85 to-transparent'
          }`}
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[var(--shell-max)] flex-col justify-end gap-8 px-4 py-16 sm:px-6 md:justify-center md:py-24 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="max-w-xl">
          <p className={`mb-3 text-[10px] uppercase tracking-[0.3em] ${dark ? 'text-white/55' : 'text-[var(--color-accent)]'}`}>
            {project.num} — {project.place} · {project.year}
          </p>
          <TypeReveal delay={0.05}>
            <h3 className="font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
              {project.title}
            </h3>
          </TypeReveal>
          <motion.p
            className={`mt-3 text-xs uppercase tracking-[0.18em] ${soft}`}
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {project.scope} · {project.area}
          </motion.p>
          <motion.p
            className={`mt-5 text-base leading-relaxed sm:text-lg ${muted}`}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            {project.body}
          </motion.p>
          <motion.blockquote
            className={`mt-6 border-l-2 pl-4 font-[family-name:var(--font-display)] text-xl italic leading-snug sm:text-2xl ${
              dark ? 'border-[var(--color-accent)] text-white/90' : 'border-[var(--color-accent)]'
            }`}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.55 }}
          >
            “{project.quote}”
          </motion.blockquote>
        </div>

        <motion.dl
          className={`grid w-full max-w-sm grid-cols-2 gap-x-6 gap-y-4 border-t pt-5 text-sm lg:shrink-0 ${line}`}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.55 }}
        >
          {project.details.map((d) => (
            <div key={d.label}>
              <dt className={`text-[10px] uppercase tracking-[0.2em] ${soft}`}>{d.label}</dt>
              <dd className="mt-1 font-medium">{d.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </article>
  );
}

export function ProjectChapters() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="border-b border-[var(--color-line)] bg-[var(--color-bg)] px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">Selected</p>
            <TypeReveal>
              <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-6xl">
                Three rooms in print
              </h2>
            </TypeReveal>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[var(--color-text-muted)] lg:col-span-5">
            Full-bleed chapters from recent residences — each with scope, duration, and the line that
            shaped the brief. Scroll slowly; the rooms are meant to be read.
          </p>
        </div>
      </div>
      {projects.map((project, i) => (
        <ProjectChapter key={project.id} project={project} index={i} />
      ))}
    </section>
  );
}

export function ProjectStrip() {
  return (
    <section
      id="gallery"
      className="border-t border-[var(--color-line)] bg-[var(--color-bg)] py-[var(--section-space)]"
      aria-label="Project gallery"
    >
      <div className="mx-auto mb-8 flex max-w-[var(--shell-max)] flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">Gallery</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-5xl">
            Scroll the plates
          </h2>
        </div>
        <p className="max-w-sm text-sm text-[var(--color-text-muted)]">
          A horizontal plate set — drag or swipe. On reduced motion, the same images stack as a vertical
          index.
        </p>
      </div>
      <div className="atelier-gallery mx-auto max-w-[var(--shell-max)] md:px-6">
        {projects.map((p) => (
          <figure key={p.id} className="group">
            <div className="overflow-hidden">
              <img
                src={assetPath(p.image)}
                alt={p.alt}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 space-y-1 border-t border-[var(--color-line)] pt-3">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-[family-name:var(--font-display)] text-xl">{p.title}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                  {p.num}
                </span>
              </div>
              <p className="text-xs text-[var(--color-text-muted)]">
                {p.place} · {p.year} · {p.area}
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">{p.text}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
