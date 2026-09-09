'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { steps } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

const PANEL_VW = 32;
const GAP_VW = 1.5;
/** Высота фиксированного хедера сайта */
const HEADER_OFFSET = '3.75rem';

function SectionHeading() {
  const reduce = useReducedMotion();
  // Вровень с логотипом; анимация текста как в Hero
  return (
    <div className="mx-auto w-full max-w-[var(--shell-max)] px-4 sm:px-6">
      <motion.p
        className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        Process
      </motion.p>
      <motion.h2
        className="font-[family-name:var(--font-display)] text-3xl font-semibold uppercase tracking-tight sm:text-5xl"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Grain to bread
      </motion.h2>
      <motion.p
        className="mt-3 max-w-xl font-[family-name:var(--font-body)] text-[var(--color-text-muted)]"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.42, duration: 0.55 }}
      >
        Nine stages. One loaf. Scroll the bake on desktop — or read the chapters stacked on mobile.
      </motion.p>
    </div>
  );
}

function StepPanel({
  step,
  desktop,
}: {
  step: (typeof steps)[number];
  desktop?: boolean;
}) {
  if (!desktop) {
    return (
      <article className="flex w-full flex-col gap-4">
        <div className="overflow-hidden rounded-[var(--radius-md)]">
          <img
            src={assetPath(step.image)}
            alt={step.alt}
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="mb-1 font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.2em] text-[var(--color-accent)]">
            {step.num}
          </p>
          <h3 className="mb-2 font-[family-name:var(--font-display)] text-3xl font-semibold uppercase tracking-tight sm:text-4xl">
            {step.title}
          </h3>
          <p className="max-w-md font-[family-name:var(--font-body)] leading-relaxed text-[var(--color-text-muted)]">
            {step.text}
          </p>
        </div>
      </article>
    );
  }

  // Desktop: высокая картинка заполняет viewport под заголовком
  return (
    <article className="flex shrink-0 flex-col" style={{ width: `${PANEL_VW}vw` }}>
      <div className="relative h-[48vh] min-h-[20rem] w-full overflow-hidden rounded-[var(--radius-md)]">
        <img
          src={assetPath(step.image)}
          alt={step.alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="px-0.5 pt-3">
        <p className="mb-1 font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.2em] text-[var(--color-accent)]">
          {step.num} / {String(steps.length).padStart(2, '0')}
        </p>
        <h3 className="mb-1.5 font-[family-name:var(--font-display)] text-2xl font-semibold uppercase tracking-tight xl:text-3xl">
          {step.title}
        </h3>
        <p className="max-w-sm font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-text-muted)]">
          {step.text}
        </p>
      </div>
    </article>
  );
}

/**
 * Desktop: sticky + горизонтальный скролл.
 * Mobile / prefers-reduced-motion: вертикальный стек.
 * Ветвление только через CSS media — без remount по useReducedMotion (нет CLS).
 */
export function ProcessStory() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 60px', 'end end'],
  });
  const totalWidth = steps.length * PANEL_VW + (steps.length - 1) * GAP_VW;
  const endX = -(totalWidth - 100);
  const x = useTransform(scrollYProgress, [0.04, 1], ['0vw', `${endX}vw`]);

  return (
    <section id="process" className="scroll-mt-24 border-t border-[var(--color-line)]">
      {/* Стек: mobile всегда; desktop при reduced-motion */}
      <div className="pt-12 pb-4 sm:pt-16 md:hidden md:motion-reduce:block">
        <SectionHeading />
      </div>
      <div className="space-y-14 px-4 pb-16 sm:px-6 md:hidden md:motion-reduce:block">
        {steps.map((step) => (
          <StepPanel key={step.id} step={step} />
        ))}
      </div>

      {/* Sticky-карусель: только md+ и без reduced-motion */}
      <div
        ref={trackRef}
        className="relative hidden w-full md:block md:motion-reduce:hidden"
        style={{ height: `${steps.length * 45}vh` }}
      >
        <div
          className="sticky flex w-full max-w-full flex-col overflow-x-clip bg-[var(--color-bg)] pt-6 pb-8"
          style={{ top: HEADER_OFFSET }}
        >
          <SectionHeading />
          <div className="mt-6 w-full min-w-0 overflow-hidden px-4 sm:px-6">
            <motion.div
              style={{ x, gap: `${GAP_VW}vw` }}
              className="flex will-change-transform"
            >
              {steps.map((step) => (
                <StepPanel key={`desk-${step.id}`} step={step} desktop />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
