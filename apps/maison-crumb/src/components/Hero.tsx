'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { site } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[var(--color-bg)]">
      <div className="absolute inset-0">
        <motion.img
          src={assetPath('/images/hero-croissant.png')}
          alt="Fresh butter croissants on a wooden board"
          className="h-full w-full object-cover object-right"
          initial={reduce ? false : { scale: 1.08, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/88 to-transparent md:via-[var(--color-bg)]/70"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 md:justify-center md:pb-24 md:pt-24">
        <div className="max-w-xl">
          <motion.p
            className="mb-3 font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {site.name}
          </motion.p>
          <motion.h1
            className="mb-4 text-2xl font-medium leading-snug text-[var(--color-text)] sm:text-3xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            {site.tagline}
          </motion.h1>
          <motion.p
            className="mb-8 max-w-md text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
          >
            {site.support}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46 }}
          >
            <a
              href="#order"
              className="rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Order now
            </a>
            <a
              href="#assortment"
              className="rounded-[var(--radius-sm)] border border-[var(--color-text)]/25 bg-[var(--color-bg-elevated)]/80 px-5 py-3 text-sm font-medium text-[var(--color-text)] backdrop-blur-sm transition-colors hover:border-[var(--color-text)]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              View assortment
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
