'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { site } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]';

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden bg-[var(--color-ink)]">
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y }}>
        <img
          src={assetPath('/images/hero.png')}
          alt="Minimal concrete and glass house on a hillside"
          className="h-[118%] w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[var(--color-ink)]/50" aria-hidden />
        <div className="fh-grid absolute inset-0 opacity-40 mix-blend-soft-light" aria-hidden />
      </motion.div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[var(--shell-max)] flex-col justify-end px-4 pb-16 pt-28 sm:px-6">
        <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-white/60">
          Architecture studio · Est. {site.founded}
        </p>
        <motion.p
          className="font-[family-name:var(--font-display)] text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          FRAME
          <br />
          / HOUSE
        </motion.p>
        <motion.h1
          className="mt-5 max-w-lg text-xl text-white/85 sm:text-2xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {site.tagline}
        </motion.h1>
        <motion.p
          className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
        >
          {site.support}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            href="#sequence"
            className={`border border-white/70 px-5 py-3 text-xs uppercase tracking-[0.16em] text-white hover:bg-white hover:text-[var(--color-ink)] ${focus}`}
          >
            Play the sequence
          </a>
          <a
            href="#brief"
            className={`border border-white/35 px-5 py-3 text-xs uppercase tracking-[0.16em] text-white/85 hover:border-white ${focus}`}
          >
            Brief the studio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
