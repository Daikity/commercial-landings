'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { JoinForm } from '@/components/JoinForm';
import { assetPath } from '@/lib/asset-path';

export function JoinSection() {
  const reduce = useReducedMotion();

  return (
    <section id="join" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
      <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-stretch">
        <div className="flex min-h-0 flex-col">
          <motion.p
            className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            Join
          </motion.p>
          <motion.h2
            className="mb-4 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Join a session
          </motion.h2>
          <motion.p
            className="mb-6 max-w-md leading-relaxed text-[var(--color-text-muted)]"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.2, duration: 0.55 }}
          >
            Tell us which practice fits — breath, flow, stillness, or restore. We confirm times by
            email.
          </motion.p>
          <motion.div
            className="relative hidden min-h-[16rem] flex-1 overflow-hidden rounded-[var(--radius-md)] lg:block"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.28, duration: 0.5 }}
          >
            <img
              src={assetPath('/images/rest.png')}
              alt="Quiet rest corner with cushion and blanket"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
        <motion.div
          className="rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-5 sm:p-8"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <JoinForm />
        </motion.div>
      </div>
    </section>
  );
}
