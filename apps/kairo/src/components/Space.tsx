'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { assetPath } from '@/lib/asset-path';

export function Space() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04]);

  return (
    <section
      ref={ref}
      id="space"
      className="relative min-h-[85svh] overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-bg-deep)]"
    >
      <motion.img
        src={assetPath('/images/space.png')}
        alt="Minimal meditation hall with tall windows and soft dawn light"
        style={reduce ? undefined : { y, scale }}
        className="absolute inset-0 h-[120%] w-full object-cover opacity-80"
        loading="lazy"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)] via-[var(--color-bg-deep)]/55 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[85svh] max-w-[var(--shell-max)] flex-col justify-end px-4 py-16 sm:px-6">
        <motion.p
          className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Space
        </motion.p>
        <motion.h2
          className="max-w-2xl font-[family-name:var(--font-display)] text-4xl text-white sm:text-6xl"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          Full room. Soft light. Nowhere to hurry.
        </motion.h2>
      </div>
    </section>
  );
}
