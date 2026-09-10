'use client';

import { useCallback, useRef, useState } from 'react';
import { assetPath } from '@/lib/asset-path';

/** Интерактивный before/after слайдер (paint correction) */
export function BeforeAfter() {
  const [pos, setPos] = useState(52);
  const dragging = useRef(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    const el = boxRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <div
      ref={boxRef}
      className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] touch-none"
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) update(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      role="img"
      aria-label="Before and after paint correction. Drag to compare."
    >
      <img
        src={assetPath('/images/before-after-b.png')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={assetPath('/images/before-after-a.png')}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </div>
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-[var(--color-accent)] shadow"
        style={{ left: `${pos}%` }}
        aria-hidden
      >
        <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-bg)] text-xs text-[var(--color-accent)]">
          ↔
        </span>
      </div>
      <span className="absolute bottom-3 left-3 rounded bg-black/55 px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-white">
        Before
      </span>
      <span className="absolute right-3 bottom-3 rounded bg-black/55 px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-white">
        After
      </span>
    </div>
  );
}
