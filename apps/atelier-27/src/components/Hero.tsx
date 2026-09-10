'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { site } from '@/data/content';
import { assetPath } from '@/lib/asset-path';
import { TypeReveal } from '@/components/Reveal';

const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]';

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden bg-[var(--color-ink)]">
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y, opacity }}>
        <img
          src={assetPath('/images/hero.png')}
          alt="Serene living room with warm stone walls and linen sofa"
          className="h-[120%] w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[var(--color-ink)]/45" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/35 to-transparent"
          aria-hidden
        />
      </motion.div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[var(--shell-max)] flex-col justify-end px-4 pb-14 pt-28 sm:px-6 sm:pb-18">
        <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.28em] text-white/65">
          <span>Interior design · New York</span>
          <span className="hidden text-white/35 sm:inline" aria-hidden>
            /
          </span>
          <span>{site.issue}</span>
          <span className="hidden text-white/35 sm:inline" aria-hidden>
            /
          </span>
          <span>Est. {site.founded}</span>
        </div>
        <TypeReveal>
          <p className="font-[family-name:var(--font-display)] text-6xl leading-[0.92] tracking-tight text-white sm:text-8xl md:text-9xl">
            {site.name}
          </p>
        </TypeReveal>
        <motion.h1
          className="mt-5 max-w-lg font-[family-name:var(--font-display)] text-xl italic leading-snug text-white/88 sm:text-3xl"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {site.tagline}
        </motion.h1>
        <motion.p
          className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          {site.support}
        </motion.p>
        <motion.div
          className="mt-9 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.55 }}
        >
          <a
            href="#projects"
            className={`inline-block border border-white/70 px-6 py-3 text-xs uppercase tracking-[0.2em] text-white hover:bg-white hover:text-[var(--color-ink)] ${focus}`}
          >
            Enter the edit
          </a>
          <a
            href="#contact"
            className={`inline-block border border-white/35 px-6 py-3 text-xs uppercase tracking-[0.2em] text-white/85 hover:border-white ${focus}`}
          >
            Start a project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
