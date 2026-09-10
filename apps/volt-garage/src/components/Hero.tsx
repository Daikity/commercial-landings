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
        <motion.div
          className="h-full w-full overflow-hidden"
          initial={reduce ? false : { clipPath: 'inset(12% 18% 12% 18%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={assetPath('/images/hero.png')}
            alt="Electric vehicle in a dark premium showroom"
            className="h-full w-full object-cover object-center"
            initial={reduce ? false : { scale: 1.14 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
            fetchPriority="high"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/55 to-transparent md:bg-gradient-to-r md:from-[var(--color-bg)] md:via-[var(--color-bg)]/75 md:to-transparent"
          aria-hidden
        />
        {!reduce ? (
          <motion.div
            className="volt-streak pointer-events-none absolute top-[38%] left-0 h-px w-full opacity-70"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.7 }}
            transition={{ delay: 0.9, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'left' }}
            aria-hidden
          />
        ) : null}
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[var(--shell-max)] flex-col justify-end px-4 pb-20 pt-28 sm:px-6 md:justify-center">
        <div className="max-w-xl">
          <motion.p
            className="mb-4 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.35em] text-[var(--color-accent)]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55 }}
          >
            {site.eyebrow}
          </motion.p>
          <motion.h1
            className="mb-2 font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {site.fullName}
          </motion.h1>
          <motion.p
            className="mb-3 font-[family-name:var(--font-display)] text-xl text-[var(--color-text-muted)] sm:text-2xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.55 }}
          >
            {site.tagline}
          </motion.p>
          <motion.p
            className="mb-10 max-w-md font-[family-name:var(--font-body)] text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.55 }}
          >
            {site.support}
          </motion.p>
          <motion.a
            href="#contact"
            className={`inline-block border border-[var(--color-accent)] px-6 py-3 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] ${focusRing}`}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
          >
            {site.cta}
          </motion.a>
        </div>
      </div>
    </section>
  );
}
