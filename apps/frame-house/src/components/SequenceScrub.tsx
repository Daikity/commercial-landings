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
const HEADER = '3.75rem';

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
  const mid = (index + 0.45) / N;
  const end = (index + 1) / N;
  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  const clip = useTransform(
    progress,
    [start, mid, end],
    ['inset(12% 12% 12% 12%)', 'inset(0% 0% 0% 0%)', 'inset(4% 4% 4% 4%)'],
  );
  const scale = useTransform(progress, [start, mid, end], [1.08, 1, 1.03]);
  // Perspective-like tilt on volume stage
  const rotateX = useTransform(progress, [start, mid, end], index === 3 ? [8, 0, -4] : [0, 0, 0]);

  return (
    <motion.div
      style={{ opacity, clipPath: clip, scale, rotateX, transformPerspective: 1200 }}
      className="absolute inset-0 origin-center will-change-transform"
    >
      <img
        src={assetPath(stage.image)}
        alt=""
        aria-hidden
        className="h-full w-full object-cover"
        loading={index === 0 ? 'eager' : 'lazy'}
      />
      <div className="fh-grid absolute inset-0 opacity-25 mix-blend-overlay" aria-hidden />
    </motion.div>
  );
}

function StackedSequence() {
  return (
    <div className="space-y-14 px-4 pb-16 sm:px-6">
      {stages.map((stage) => (
        <article
          key={stage.id}
          className="mx-auto grid max-w-[var(--shell-max)] gap-6 border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-4 md:grid-cols-2 md:items-center md:p-6"
        >
          <img
            src={assetPath(stage.image)}
            alt={stage.alt}
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
              {stage.num} · {stage.label}
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-tight">
              {stage.title}
            </h3>
            <p className="mt-3 text-[var(--color-text-muted)] leading-relaxed">{stage.text}</p>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">{stage.detail}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

/**
 * Level C: sticky scrub Plan → House with clipping + grid + perspective.
 * Mobile / reduced-motion: stacked chapters via CSS media.
 */
export function SequenceScrub() {
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
    if (local < 0.1) return local / 0.1;
    if (local > 0.88) return (1 - local) / 0.12;
    return 1;
  });

  return (
    <section id="sequence" className="scroll-mt-24 border-t border-[var(--color-line)]">
      <div className="mx-auto max-w-[var(--shell-max)] px-4 py-14 sm:px-6">
        <Reveal>
          <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)]">Sequence</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold uppercase tracking-tight sm:text-6xl">
            Plan to house
          </h2>
          <p className="mt-4 max-w-xl text-[var(--color-text-muted)]">
            Scroll the build: drawings clip open into frame, material, massing, then the finished house.
            On mobile the same five stages stack without a sticky hijack.
          </p>
        </Reveal>
      </div>

      <div className="md:hidden md:motion-reduce:block">
        <StackedSequence />
      </div>

      <div
        ref={trackRef}
        className="relative hidden md:block md:motion-reduce:hidden"
        style={{ height: `${N * 100}vh` }}
      >
        <div
          className="sticky overflow-hidden bg-[var(--color-ink)]"
          style={{ top: HEADER, height: `calc(100svh - ${HEADER})` }}
        >
          <div className="absolute inset-0">
            {stages.map((s, i) => (
              <StageLayer key={s.id} stage={s} index={i} progress={scrollYProgress} />
            ))}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/90 via-[var(--color-ink)]/45 to-transparent"
              aria-hidden
            />
          </div>

          <div className="relative z-10 mx-auto flex h-full w-full max-w-[var(--shell-max)] flex-col justify-between px-4 py-10 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:pb-14">
            <motion.div style={{ opacity: copyOpacity }} className="max-w-lg text-white" aria-live="polite">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                {stage.num} / {String(N).padStart(2, '0')} · {stage.label}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-semibold uppercase tracking-tight sm:text-7xl">
                {stage.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">{stage.text}</p>
              <p className="mt-3 text-sm text-white/55">{stage.detail}</p>
            </motion.div>

            <nav
              className="mt-8 flex shrink-0 gap-2 self-start lg:mt-0 lg:ml-auto lg:flex-col lg:items-end lg:self-end"
              aria-label="Sequence stages"
            >
              {stages.map((s, i) => (
                <div
                  key={s.id}
                  className={`text-right text-xs uppercase tracking-[0.18em] transition-opacity ${
                    i === active ? 'text-white opacity-100' : 'text-white/40'
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
