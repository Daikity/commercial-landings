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
          src={assetPath('/images/hero-grain.png')}
          alt="Wheat and rye grains pouring from a burlap sack"
          // Mobile: кадр по центру зерна; desktop: акцент справа
          className="h-full w-full object-cover object-[center_35%] md:object-right"
          initial={reduce ? false : { scale: 1.08, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          fetchPriority="high"
        />
        {/* Mobile: мягкий низ; desktop: левый wash под текст */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/55 to-[var(--color-bg)]/25 md:bg-gradient-to-r md:from-[var(--color-bg)] md:via-[var(--color-bg)]/85 md:to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[var(--shell-max)] flex-col justify-center px-4 py-24 sm:px-6 md:py-16">
        <motion.p
          className="mb-2 font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-tight sm:mb-3 sm:text-7xl md:text-8xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          {site.name}
        </motion.p>
        <motion.h1
          className="mb-3 max-w-lg font-[family-name:var(--font-body)] text-xl leading-snug sm:mb-4 sm:text-3xl"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {site.tagline}
        </motion.h1>
        <motion.p
          className="mb-6 max-w-md text-sm leading-relaxed text-[var(--color-text-muted)] sm:mb-8 sm:text-base"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.55 }}
        >
          {site.support}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-2.5 sm:gap-3"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          <a
            href="#process"
            className="rounded-[var(--radius-sm)] border border-[var(--color-text)]/30 bg-[var(--color-bg-elevated)]/80 px-4 py-2.5 text-xs font-medium backdrop-blur-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] sm:px-5 sm:py-3 sm:text-sm"
          >
            Follow the process
          </a>
          <a
            href="#reserve"
            className="rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-4 py-2.5 text-xs font-medium text-white hover:bg-[var(--color-accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] sm:px-5 sm:py-3 sm:text-sm"
          >
            Reserve a loaf
          </a>
        </motion.div>
      </div>
    </section>
  );
}
