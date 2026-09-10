'use client';

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useRef, useState } from 'react';
import { stages } from '@/data/content';
import { assetPath } from '@/lib/asset-path';
import { Reveal } from '@/components/Reveal';

const N = stages.length;
const HEADER = '3.5rem';

function StageLayer({
  stage,
  index,
  progress,
}: {
  stage: (typeof stages)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / N;
  const mid = (index + 0.4) / N;
  const end = (index + 1) / N;
  const opacity = useTransform(progress, [start, start + 0.06, end - 0.06, end], [0, 1, 1, 0]);
  const skew = useTransform(progress, [start, mid, end], [6, 0, -3]);
  const x = useTransform(progress, [start, mid, end], ['8%', '0%', '-4%']);
  const scale = useTransform(progress, [start, mid, end], [1.12, 1, 1.04]);

  return (
    <motion.div
      style={{ opacity, skewX: skew, x, scale }}
      className="absolute inset-0 origin-center will-change-transform"
    >
      <img
        src={assetPath(stage.image)}
        alt=""
        aria-hidden
        className="h-full w-full object-cover"
        loading={index === 0 ? 'eager' : 'lazy'}
      />
    </motion.div>
  );
}

function StackedPull() {
  return (
    <div className="space-y-10 px-4 pb-16 sm:px-6">
      {stages.map((stage) => (
        <article
          key={stage.id}
          className="mx-auto grid max-w-[var(--shell-max)] gap-5 border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-4 md:grid-cols-2 md:items-center"
        >
          <img
            src={assetPath(stage.image)}
            alt={stage.alt}
            className="aspect-[16/10] w-full object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {stage.num} · {stage.label}
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-5xl uppercase tracking-wide">
              {stage.title}
            </h3>
            <p className="mt-3 text-[var(--color-text-muted)] leading-relaxed">{stage.text}</p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">{stage.detail}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

/** Level C: sticky Idle→Cool pull scrub with speed skew. Mobile: stacked. */
export function PullScrub() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(N - 1, Math.max(0, Math.floor(v * N)));
    setActive((prev) => (prev === next ? prev : next));
  });

  const stage = stages[active];
  const copyOpacity = useTransform(scrollYProgress, (p) => {
    const local = (p * N) % 1;
    if (local < 0.12) return local / 0.12;
    if (local > 0.88) return (1 - local) / 0.12;
    return 1;
  });

  return (
    <section id="pull" className="scroll-mt-24 border-t border-[var(--color-line)]">
      <div className="mx-auto max-w-[var(--shell-max)] px-4 py-14 sm:px-6">
        <Reveal>
          <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            The pull
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-5xl uppercase tracking-wide sm:text-7xl">
            Idle to cool-down
          </h2>
          <p className="mt-4 max-w-xl text-[var(--color-text-muted)]">
            Scroll the session. Desktop pins the bay; mobile stacks the same four stages without a hijack.
          </p>
        </Reveal>
      </div>

      <div className="md:hidden md:motion-reduce:block">
        <StackedPull />
      </div>

      <div
        ref={trackRef}
        className="relative hidden md:block md:motion-reduce:hidden"
        style={{ height: `${N * 100}vh` }}
      >
        <div
          className="sticky overflow-hidden bg-[var(--color-bg)]"
          style={{ top: HEADER, height: `calc(100svh - ${HEADER})` }}
        >
          <div className="absolute inset-0">
            {stages.map((s, i) => (
              <StageLayer key={s.id} stage={s} index={i} progress={scrollYProgress} />
            ))}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/55 to-transparent"
              aria-hidden
            />
          </div>

          <div className="relative z-10 mx-auto flex h-full w-full max-w-[var(--shell-max)] flex-col justify-between px-4 py-10 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
            <motion.div style={{ opacity: copyOpacity }} className="max-w-lg" aria-live="polite">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {stage.num} / {String(N).padStart(2, '0')} · {stage.label}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-6xl uppercase tracking-wide sm:text-8xl">
                {stage.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">{stage.text}</p>
              <p className="mt-2 text-sm text-white/50">{stage.detail}</p>
            </motion.div>

            <nav
              className="mt-8 flex shrink-0 gap-3 self-start lg:mt-0 lg:ml-auto lg:flex-col lg:items-end lg:self-end"
              aria-label="Pull stages"
            >
              {stages.map((s, i) => (
                <div
                  key={s.id}
                  className={`font-[family-name:var(--font-display)] text-xl uppercase tracking-wide transition-opacity ${
                    i === active ? 'text-[var(--color-accent)] opacity-100' : 'text-white/35'
                  }`}
                >
                  {s.num} {s.title}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
