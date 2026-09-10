'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { metrics } from '@/data/content';

function CountUp({
  value,
  decimals = 0,
  suffix = '',
  active,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  active: boolean;
}) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!active) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    const duration = 1100;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setDisplay(value * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value, reduce]);

  return (
    <span>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function AnimatedNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <div ref={ref} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((item) => (
        <div key={item.label} className="border-t border-[var(--color-line)] pt-4">
          <p className="font-[family-name:var(--font-display)] text-6xl uppercase tracking-wide text-[var(--color-accent)] sm:text-7xl">
            <CountUp
              value={item.value}
              decimals={item.decimals ?? 0}
              suffix={item.suffix}
              active={inView}
            />
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
