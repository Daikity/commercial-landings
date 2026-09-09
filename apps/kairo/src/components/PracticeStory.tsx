'use client';

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useRef, useState } from 'react';
import { stages } from '@/data/content';
import { assetPath } from '@/lib/asset-path';

const HEADER_OFFSET = '3.75rem';
const N = stages.length;

function StageCopy({ stage }: { stage: (typeof stages)[number] }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
        {stage.num} / {String(N).padStart(2, '0')}
      </p>
      <h3 className="mb-3 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
        {stage.title}
      </h3>
      <p className="max-w-md text-base leading-relaxed text-[var(--color-text-muted)]">{stage.text}</p>
    </div>
  );
}

function StackedStages() {
  return (
    <div className="space-y-16 px-4 pb-16 sm:px-6">
      {stages.map((stage) => (
        <article
          key={stage.id}
          className="mx-auto grid max-w-[var(--shell-max)] gap-6 md:grid-cols-2 md:items-center"
        >
          <div className="overflow-hidden rounded-[var(--radius-md)]">
            <img
              src={assetPath(stage.image)}
              alt={stage.alt}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <StageCopy stage={stage} />
        </article>
      ))}
    </div>
  );
}

function StageImage({
  stage,
  index,
  progress,
}: {
  stage: (typeof stages)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / N;
  const mid = (index + 0.5) / N;
  const end = (index + 1) / N;
  // Кроссфейд: появляется → держится → уходит
  const opacity = useTransform(progress, [start, start + 0.04, end - 0.04, end], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, mid, end], [1.08, 1, 1.04]);

  return (
    <motion.img
      src={assetPath(stage.image)}
      alt=""
      aria-hidden
      style={{ opacity, scale }}
      className="absolute inset-0 h-full w-full object-cover will-change-transform"
      loading={index === 0 ? 'eager' : 'lazy'}
    />
  );
}

function BreathRing({ progress }: { progress: MotionValue<number> }) {
  // Внутри каждого этапа: вдох → выдох (scale кольца)
  const phase = useTransform(progress, (p) => {
    const local = (p * N) % 1;
    // 0→0.5 expand, 0.5→1 contract
    return local < 0.5 ? local * 2 : (1 - local) * 2;
  });
  const scale = useTransform(phase, [0, 1], [0.72, 1.12]);
  const ringOpacity = useTransform(progress, [0, 0.02, 0.98, 1], [0, 0.85, 0.85, 0]);

  return (
    <motion.div
      style={{ scale, opacity: ringOpacity }}
      className="pointer-events-none absolute left-1/2 top-1/2 z-10 size-[min(42vw,22rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 shadow-[0_0_60px_rgba(61,107,98,0.35)]"
      aria-hidden
    >
      <div className="absolute inset-[12%] rounded-full border border-white/25" />
      <div className="absolute inset-[28%] rounded-full bg-white/10 backdrop-blur-[2px]" />
    </motion.div>
  );
}

function ProgressRail({
  progress,
  active,
}: {
  progress: MotionValue<number>;
  active: number;
}) {
  const fill = useTransform(progress, [0, 1], ['0%', '100%']);

  return (
    <nav
      className="absolute top-1/2 right-4 z-20 flex -translate-y-1/2 flex-col items-end gap-3 xl:right-8"
      aria-label="Practice stages"
    >
      <div className="relative mb-2 h-28 w-px overflow-hidden bg-white/25">
        <motion.div style={{ height: fill }} className="absolute inset-x-0 top-0 bg-white" />
      </div>
      {stages.map((stage, i) => (
        <div
          key={stage.id}
          className={`text-right transition-opacity duration-300 ${
            i === active ? 'opacity-100' : 'opacity-35'
          }`}
        >
          <p className="font-[family-name:var(--font-display)] text-sm text-white sm:text-base">
            {stage.title}
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">{stage.num}</p>
        </div>
      ))}
    </nav>
  );
}

/**
 * Один sticky-кадр: скролл scrub'ит 5 этапов (кроссфейд + breath ring + rail).
 * Не 5 одинаковых пинов с пустой задержкой.
 */
function ScrubPractice() {
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

  const copyY = useTransform(scrollYProgress, (p) => {
    const local = (p * N) % 1;
    return (0.5 - local) * 28;
  });
  const copyOpacity = useTransform(scrollYProgress, (p) => {
    const local = (p * N) % 1;
    if (local < 0.12) return local / 0.12;
    if (local > 0.88) return (1 - local) / 0.12;
    return 1;
  });

  const stage = stages[active];

  return (
    <div ref={trackRef} className="relative" style={{ height: `${N * 100}vh` }}>
      <div
        className="sticky overflow-hidden bg-[var(--color-bg-deep)]"
        style={{ top: HEADER_OFFSET, height: `calc(100svh - ${HEADER_OFFSET})` }}
      >
        {/* Слой изображений — полный кадр */}
        <div className="absolute inset-0">
          {stages.map((s, i) => (
            <StageImage key={s.id} stage={s} index={i} progress={scrollYProgress} />
          ))}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-deep)]/90 via-[var(--color-bg-deep)]/45 to-transparent"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)]/70 via-transparent to-[var(--color-bg-deep)]/30"
            aria-hidden
          />
        </div>

        <BreathRing progress={scrollYProgress} />
        <ProgressRail progress={scrollYProgress} active={active} />

        {/* Текст текущего этапа — морфит по active + лёгкий drift */}
        <div className="relative z-10 flex h-full max-w-[var(--shell-max)] items-end px-4 pb-16 sm:px-6 sm:pb-20 lg:items-center lg:pb-0">
          <motion.div
            style={{ y: copyY, opacity: copyOpacity }}
            className="max-w-lg text-white"
            aria-live="polite"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              {stage.num} / {String(N).padStart(2, '0')} · scroll to breathe
            </p>
            <h3 className="mb-4 font-[family-name:var(--font-display)] text-5xl tracking-tight sm:text-7xl">
              {stage.title}
            </h3>
            <p className="max-w-md text-base leading-relaxed text-white/80 sm:text-lg">{stage.text}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/**
 * Desktop: один sticky scrub (кроссфейд этапов).
 * Mobile / reduced-motion: вертикальный стек (CSS media).
 */
export function PracticeStory() {
  const reduce = useReducedMotion();

  return (
    <section id="practice" className="scroll-mt-24 border-t border-[var(--color-line)]">
      <div className="mx-auto max-w-[var(--shell-max)] px-4 pt-12 sm:px-6 sm:pt-16">
        <motion.p
          className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
        >
          Practice
        </motion.p>
        <motion.h2
          className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-6xl"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.65 }}
        >
          Five breaths
        </motion.h2>
        <motion.p
          className="mt-3 max-w-xl text-[var(--color-text-muted)]"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.55 }}
        >
          Scroll the ritual: images dissolve, the breath ring expands and softens, stages rename in
          place — not five empty pauses.
        </motion.p>
      </div>

      <div className="mt-12 md:hidden md:motion-reduce:block">
        <StackedStages />
      </div>

      <div className="mt-8 hidden md:block md:motion-reduce:hidden">
        <ScrubPractice />
      </div>
    </section>
  );
}
