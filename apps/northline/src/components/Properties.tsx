'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { filterTypes, properties, type PropertyType } from '@/data/content';
import { assetPath } from '@/lib/asset-path';
import { Reveal } from '@/components/Reveal';

type Filter = 'all' | PropertyType;

const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]';

export function Properties() {
  const [type, setType] = useState<Filter>('all');
  const [beds, setBeds] = useState<number | 'any'>('any');

  const list = useMemo(() => {
    return properties.filter((p) => {
      if (type !== 'all' && p.type !== type) return false;
      if (beds !== 'any' && p.beds < beds) return false;
      return true;
    });
  }, [type, beds]);

  return (
    <section id="properties" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
      <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
        <Reveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Featured
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
            Properties on the line
          </h2>
          <p className="mt-3 max-w-xl text-[var(--color-text-muted)]">
            Filter by type and bedrooms — cards stay honest about price and size.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Property type">
            {filterTypes.map((opt) => {
              const active = type === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setType(opt.value)}
                  aria-pressed={active}
                  className={`rounded-[var(--radius-sm)] border px-3 py-2 text-sm transition-colors ${focus} ${
                    active
                      ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white'
                      : 'border-[var(--color-line)] bg-[var(--color-bg-elevated)] hover:border-[var(--color-accent)]/40'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
          <label className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            Beds
            <select
              className={`rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] px-3 py-2 text-[var(--color-text)] ${focus}`}
              value={beds === 'any' ? 'any' : String(beds)}
              onChange={(e) => {
                const v = e.target.value;
                setBeds(v === 'any' ? 'any' : Number(v));
              }}
            >
              <option value="any">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </label>
        </Reveal>

        <p className="mt-4 text-sm text-[var(--color-text-muted)]" aria-live="polite">
          {list.length} listing{list.length === 1 ? '' : 's'}
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="group overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={assetPath(p.image)}
                    alt={p.alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                        {p.location} · {p.type}
                      </p>
                    </div>
                    <p className="shrink-0 font-semibold text-[var(--color-accent)]">{p.priceLabel}</p>
                  </div>
                  <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                    {p.beds} bed · {p.baths} bath · {p.area}
                  </p>
                  <a
                    href="#viewing"
                    className={`mt-4 inline-block text-sm font-medium text-[var(--color-accent)] underline-offset-4 hover:underline ${focus}`}
                  >
                    Request viewing
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {list.length === 0 ? (
          <p className="mt-8 text-[var(--color-text-muted)]">No listings match these filters. Try All types.</p>
        ) : null}
      </div>
    </section>
  );
}
