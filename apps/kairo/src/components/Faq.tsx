'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useId, useState } from 'react';
import { faqs } from '@/data/content';

function FaqItem({
  item,
  open,
  onToggle,
  reduce,
  index,
}: {
  item: (typeof faqs)[number];
  open: boolean;
  onToggle: () => void;
  reduce: boolean | null;
  index: number;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <motion.div
      className="border-b border-[var(--color-line)]"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.06 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-baseline justify-between gap-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          <span className="font-[family-name:var(--font-display)] text-xl tracking-tight sm:text-2xl">
            {item.q}
          </span>
          <motion.span
            className="relative flex size-7 shrink-0 items-center justify-center text-[var(--color-accent)]"
            aria-hidden
            animate={{ rotate: open ? 45 : 0 }}
            transition={
              reduce
                ? { duration: 0 }
                : { type: 'spring', stiffness: 320, damping: 22 }
            }
          >
            <span className="absolute h-px w-3.5 bg-current" />
            <span className="absolute h-3.5 w-px bg-current" />
          </motion.span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="panel"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={
              reduce
                ? { duration: 0 }
                : { height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.28 } }
            }
            className="overflow-hidden"
          >
            <motion.p
              className="pb-5 pr-10 text-base leading-relaxed text-[var(--color-text-muted)]"
              initial={reduce ? false : { y: -6 }}
              animate={{ y: 0 }}
              exit={reduce ? undefined : { y: -4 }}
              transition={reduce ? { duration: 0 } : { duration: 0.3 }}
            >
              {item.a}
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export function Faq() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
      <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-16">
        <div>
          <motion.p
            className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            FAQ
          </motion.p>
          <motion.h2
            className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Before you join
          </motion.h2>
          <motion.p
            className="mt-4 max-w-sm text-[var(--color-text-muted)]"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18, duration: 0.55 }}
          >
            Short answers about experience, what to bring, and how sessions work.
          </motion.p>
        </div>

        <div className="border-t border-[var(--color-line)]">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              index={i}
              open={openIndex === i}
              reduce={reduce}
              onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
