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
          alt="Quiet strategy boardroom with daylight"
          className="h-full w-full object-cover object-center md:object-right"
          initial={reduce ? false : { scale: 1.05, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/80 to-[var(--color-bg)]/35 md:bg-gradient-to-r md:from-[var(--color-bg)] md:via-[var(--color-bg)]/90 md:to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[var(--shell-max)] flex-col justify-center px-4 py-24 sm:px-6">
        <motion.p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Strategy studio
        </motion.p>
        <motion.h1
          className="mb-2 max-w-2xl font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          {site.name}
        </motion.h1>
        <motion.p
          className="mb-3 max-w-lg font-[family-name:var(--font-display)] text-xl text-[var(--color-text)] sm:text-2xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.55 }}
        >
          {site.tagline}
        </motion.p>
        <motion.p
          className="mb-8 max-w-md text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.5 }}
        >
          {site.support}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58, duration: 0.45 }}
        >
          <a
            href="#engagement"
            className={`rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent-hover)] ${focusRing}`}
          >
            {site.cta}
          </a>
          <a
            href="#cases"
            className={`rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)]/90 px-5 py-3 text-sm font-medium ${focusRing}`}
          >
            View cases
          </a>
        </motion.div>
      </div>
    </section>
  );
}
