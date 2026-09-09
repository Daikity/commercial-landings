'use client';

import { useCallback, useRef, useState } from 'react';
import { assetPath } from '@/lib/asset-path';

export function BeforeAfter() {
  const [pos, setPos] = useState(52);
  const dragging = useRef(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    const el = boxRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <div
      ref={boxRef}
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden"
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
      aria-label="Before and after skin result. Drag to compare."
    >
      <img
        src={assetPath('/images/result-after.png')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={assetPath('/images/result-before.png')}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </div>
      <div className="absolute inset-y-0 w-px bg-[var(--color-text)]" style={{ left: `${pos}%` }} aria-hidden>
        <span className="absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-text)] bg-[var(--color-bg)]" />
      </div>
    </div>
  );
}
