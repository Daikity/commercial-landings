'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { site } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[var(--color-bg)]">
      <div className={`absolute inset-0 ${reduce ? '' : 'kairo-breathe'}`}>
        <motion.img
          src={assetPath('/images/hero.png')}
          alt="Misty dawn yoga studio with linen mats and soft window light"
          className="h-full w-full object-cover object-center"
          initial={reduce ? false : { scale: 1.06, opacity: 0.65 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/50 to-[var(--color-bg)]/20"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[var(--shell-max)] flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 md:justify-center md:pb-16">
        <motion.p
          className={`mb-3 font-[family-name:var(--font-display)] text-6xl leading-none tracking-tight sm:text-8xl md:text-9xl ${reduce ? '' : 'kairo-float'}`}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {site.name}
        </motion.p>
        <motion.h1
          className="mb-4 max-w-xl font-[family-name:var(--font-display)] text-2xl leading-snug sm:text-4xl"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {site.tagline}
        </motion.h1>
        <motion.p
          className="mb-8 max-w-md text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          {site.support}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a
            href="#practice"
            className="rounded-[var(--radius-sm)] border border-[var(--color-text)]/25 bg-[var(--color-bg-elevated)]/80 px-5 py-3 text-sm font-medium backdrop-blur-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            Enter the practice
          </a>
          <a
            href="#join"
            className="rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            Join a session
          </a>
        </motion.div>
      </div>
    </section>
  );
}
