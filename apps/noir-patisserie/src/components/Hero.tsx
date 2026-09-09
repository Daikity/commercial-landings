'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { site } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[var(--color-bg)]">
      <div className="absolute inset-0">
        <motion.div
          className="h-full w-full origin-center overflow-hidden"
          initial={reduce ? false : { clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={assetPath('/images/hero-gateau.png')}
            alt="Dark chocolate gateau with mirror glaze on black stone"
            className="h-full w-full object-cover object-[70%_center]"
            initial={reduce ? false : { scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            fetchPriority="high"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/80 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-20 pt-28 sm:px-8 md:justify-center">
        <div className="max-w-xl">
          <motion.p
            className="mb-4 text-[0.7rem] uppercase tracking-[0.35em] text-[var(--color-accent)]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Pastry atelier
          </motion.p>
          <motion.h1
            className="mb-4 font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-wide text-[var(--color-text)] sm:text-7xl md:text-8xl"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            {site.fullName}
          </motion.h1>
          <motion.p
            className="mb-10 max-w-md text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.65 }}
          >
            {site.tagline} {site.support}
          </motion.p>
          <motion.a
            href="#private"
            className="inline-block border border-[var(--color-accent)] px-6 py-3 text-xs uppercase tracking-[0.22em] text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            Request private order
          </motion.a>
        </div>
      </div>
    </section>
  );
}
