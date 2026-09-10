'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { site } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[var(--color-bg)]">
      <div className="absolute inset-0">
        <motion.img
          src={assetPath('/images/hero.png')}
          alt="Aggressive performance car in dark workshop"
          className="h-full w-full object-cover object-center"
          initial={reduce ? false : { scale: 1.2, x: 40, skewX: -4 }}
          animate={{ scale: 1, x: 0, skewX: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/70 to-[var(--color-bg)]/20"
          aria-hidden
        />
        {!reduce ? (
          <motion.div
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[var(--color-accent)]/25 to-transparent mix-blend-screen"
            initial={{ x: '-40%', opacity: 0 }}
            animate={{ x: '120%', opacity: [0, 0.8, 0] }}
            transition={{ delay: 0.35, duration: 0.85, ease: 'easeOut' }}
            aria-hidden
          />
        ) : null}
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[var(--shell-max)] flex-col justify-end px-4 pb-16 pt-28 sm:px-6 md:justify-center">
        <motion.p
          className="mb-2 font-[family-name:var(--font-display)] text-7xl font-semibold uppercase leading-none tracking-wide sm:text-8xl md:text-9xl"
          initial={reduce ? false : { opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
        >
          {site.name}
        </motion.p>
        <motion.p
          className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          / Performance
        </motion.p>
        <motion.h1
          className="mb-4 max-w-xl font-[family-name:var(--font-display)] text-3xl uppercase tracking-wide sm:text-5xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          {site.tagline}
        </motion.h1>
        <motion.p
          className="mb-8 max-w-md text-sm text-[var(--color-text-muted)] sm:text-base"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.45 }}
        >
          {site.support}
        </motion.p>
        <motion.a
          href="#booking"
          className={`inline-block w-fit bg-[var(--color-accent)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-[var(--color-accent-hover)] ${focusRing}`}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.4 }}
        >
          {site.cta}
        </motion.a>
      </div>
    </section>
  );
}
