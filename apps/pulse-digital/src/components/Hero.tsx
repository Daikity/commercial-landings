'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { site } from '@/data/content';
import { assetPath } from '@/lib/asset-path';
import { MagneticButton } from '@/components/MagneticButton';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[var(--color-bg)]">
      <div className="absolute inset-0">
        <motion.img
          src={assetPath('/images/hero.png')}
          alt="Dark digital agency studio with cyan monitor glow"
          className="h-full w-full object-cover"
          initial={reduce ? false : { scale: 1.18, filter: 'blur(8px)' }}
          animate={{ scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/75 to-[var(--color-bg)]/30"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[var(--shell-max)] flex-col justify-end px-4 pb-16 pt-28 sm:px-6 md:justify-center">
        <motion.p
          className="mb-3 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.35em] text-[var(--color-accent)]"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45 }}
        >
          Digital agency
        </motion.p>
        <motion.h1
          className="mb-2 font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl"
          initial={reduce ? false : { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' }}
          animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
          transition={{ delay: 0.3, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {site.fullName}
        </motion.h1>
        <motion.p
          className="mb-3 font-[family-name:var(--font-display)] text-2xl text-[var(--color-text-muted)] sm:text-3xl"
          initial={reduce ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.55 }}
        >
          {site.tagline}
        </motion.p>
        <motion.p
          className="mb-8 max-w-md font-[family-name:var(--font-body)] text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          {site.support}
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.45 }}
        >
          <MagneticButton
            href="#contact"
            className={`inline-block border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 py-3 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-bg)] ${focusRing}`}
          >
            {site.cta}
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
