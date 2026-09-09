'use client';

import { useCallback, useRef, useState } from 'react';
import { assetPath } from '@/lib/asset-path';

/** Интерактивный before/after слайдер */
export function BeforeAfter() {
  const [pos, setPos] = useState(50);
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
      className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-[var(--radius-md)] touch-none"
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
      aria-label="Before and after hair result. Drag to compare."
    >
      <img
        src={assetPath('/images/before-after-b.png')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={assetPath('/images/before-after-a.png')}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </div>
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white/90 shadow"
        style={{ left: `${pos}%` }}
        aria-hidden
      >
        <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-[var(--color-accent)] text-xs text-white">
          ↔
        </span>
      </div>
      <span className="absolute bottom-3 left-3 rounded bg-black/45 px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-white">
        Before
      </span>
      <span className="absolute right-3 bottom-3 rounded bg-black/45 px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-white">
        After
      </span>
    </div>
  );
}
