'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function Intro() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-[var(--color-line)] py-[var(--section-space)]">
      <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
        <motion.p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Stillness
        </motion.p>
        <motion.h2
          className="max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-tight tracking-tight sm:text-6xl md:text-7xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.12, duration: 0.7 }}
        >
          The internet is loud. This room is not.
        </motion.h2>
        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.24, duration: 0.55 }}
        >
          KAIRO is a practice studio for breath, slow flow, and seated stillness — built as a calm
          digital space with patient scroll and quiet imagery.
        </motion.p>
      </div>
    </section>
  );
}
