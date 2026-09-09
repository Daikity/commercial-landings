'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { sessions } from '@/data/content';

export function Sessions() {
  const reduce = useReducedMotion();

  return (
    <section id="sessions" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
      <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
        <motion.p
          className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          Sessions
        </motion.p>
        <motion.h2
          className="mb-10 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          A quieter day
        </motion.h2>
        <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {sessions.map((item, i) => (
            <motion.li
              key={item.name}
              className="grid grid-cols-[5rem_1fr_auto] items-baseline gap-4 py-5 sm:grid-cols-[6rem_1fr_auto] sm:gap-8"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
            >
              <span className="font-[family-name:var(--font-display)] text-xl text-[var(--color-accent)]">
                {item.time}
              </span>
              <span className="text-lg font-medium sm:text-xl">{item.name}</span>
              <span className="text-sm text-[var(--color-text-muted)]">{item.length}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
