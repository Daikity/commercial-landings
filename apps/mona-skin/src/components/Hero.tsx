'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { site } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

const ring =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]';

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden bg-[var(--color-bg)]">
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y }}>
        <img
          src={assetPath('/images/hero.png')}
          alt="Premium skincare clinic interior"
          className="h-[120%] w-full object-cover object-center"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/80 to-transparent"
          aria-hidden
        />
      </motion.div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[var(--shell-max)] flex-col justify-end px-4 pb-20 pt-28 sm:px-6 md:justify-center md:pb-16">
        <motion.p
          className="mb-3 font-[family-name:var(--font-display)] text-6xl leading-none tracking-tight sm:text-8xl md:text-9xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7 }}
        >
          {site.name}
        </motion.p>
        <motion.h1
          className="mb-4 max-w-lg font-[family-name:var(--font-display)] text-2xl italic leading-snug text-[var(--color-text-muted)] sm:text-3xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.65 }}
        >
          {site.tagline}
        </motion.h1>
        <motion.p
          className="mb-8 max-w-md text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.55 }}
        >
          {site.support}
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52, duration: 0.5 }}
        >
          <a
            href="#booking"
            className={`inline-block border border-[var(--color-text)] bg-[var(--color-text)] px-6 py-3 text-sm tracking-wide text-[var(--color-bg)] hover:bg-transparent hover:text-[var(--color-text)] ${ring}`}
          >
            Request a consult
          </a>
        </motion.div>
      </div>
    </section>
  );
}
