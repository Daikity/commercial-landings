'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ProcessStory } from '@/components/ProcessStory';
import { ReserveForm } from '@/components/ReserveForm';
import { site } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

export function Closing() {
  const reduce = useReducedMotion();

  return (
    <>
      <ProcessStory />

      <section
        id="reserve"
        className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]"
      >
        <div className="mx-auto grid max-w-[var(--shell-max)] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-stretch">
          <div className="flex min-h-0 flex-col lg:h-full">
            <motion.p
              className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              Reserve
            </motion.p>
            <motion.h2
              className="mb-4 font-[family-name:var(--font-display)] text-3xl font-semibold uppercase tracking-tight sm:text-5xl"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Reserve a loaf
            </motion.h2>
            <motion.p
              className="mb-6 max-w-md font-[family-name:var(--font-body)] text-[var(--color-text-muted)] leading-relaxed"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.42, duration: 0.55 }}
            >
              Weekend bake list fills early. Tell us which loaf — we confirm pickup windows by email.
            </motion.p>
            <motion.div
              className="relative hidden min-h-0 flex-1 overflow-hidden rounded-[var(--radius-md)] lg:block"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <img
                src={assetPath('/images/bread.png')}
                alt="Fresh sourdough boules with cracked crust"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
          <motion.div
            className="rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-5 sm:p-8 lg:h-full"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            <ReserveForm />
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)] py-14">
        <div className="mx-auto flex max-w-[var(--shell-max)] flex-col gap-6 px-4 sm:px-6 md:flex-row md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold uppercase">
              {site.name}
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">{site.address}</p>
            <p className="text-sm text-[var(--color-text-muted)]">{site.hours}</p>
          </div>
          <div className="text-sm">
            <a href={`mailto:${site.email}`} className="block underline-offset-2 hover:underline">
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="mt-1 block text-[var(--color-text-muted)]">
              {site.phone}
            </a>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-[var(--shell-max)] px-4 text-xs text-[var(--color-text-muted)] sm:px-6">
          All brands and business concepts shown here are fictional and created for portfolio
          demonstration purposes.
        </p>
      </footer>
    </>
  );
}
