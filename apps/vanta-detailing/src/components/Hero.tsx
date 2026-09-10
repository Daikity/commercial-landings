'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { site } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[var(--color-bg)]">
      <div className="absolute inset-0">
        <motion.img
          src={assetPath('/images/hero.png')}
          alt="Glossy black car in a dark detailing bay"
          className="h-full w-full object-cover object-center"
          initial={reduce ? false : { scale: 1.08, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/75 to-[var(--color-bg)]/25 md:bg-gradient-to-r md:from-[var(--color-bg)] md:via-[var(--color-bg)]/80 md:to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[var(--shell-max)] flex-col justify-end px-4 pb-16 pt-28 sm:px-6 md:justify-center md:pb-16 md:pt-16">
        <motion.p
          className="mb-1 font-[family-name:var(--font-display)] text-6xl font-bold uppercase tracking-[0.06em] sm:text-7xl md:text-8xl"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.65 }}
        >
          {site.name}
        </motion.p>
        <motion.p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28, duration: 0.5 }}
        >
          Detailing
        </motion.p>
        <motion.h1
          className="mb-3 max-w-lg font-[family-name:var(--font-display)] text-3xl font-semibold uppercase tracking-wide sm:text-4xl"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
        >
          {site.tagline}
        </motion.h1>
        <motion.p
          className="mb-8 max-w-md text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          {site.support}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          <a
            href="#booking"
            className={`rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-bg)] hover:bg-[var(--color-accent-hover)] ${focusRing}`}
          >
            {site.cta}
          </a>
          <a
            href="#packages"
            className={`rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)]/70 px-5 py-3 text-sm font-medium backdrop-blur-sm hover:border-[var(--color-accent)]/50 ${focusRing}`}
          >
            View packages
          </a>
        </motion.div>
      </div>
    </section>
  );
}
