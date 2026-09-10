'use client';

import { useEffect, useState } from 'react';
import { site } from '@/data/content';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled || open
          ? 'border-[var(--color-line)] bg-[var(--color-bg)]/95 backdrop-blur-sm'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[var(--shell-max)] items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#top"
          className={`font-[family-name:var(--font-display)] text-lg font-semibold tracking-[0.2em] uppercase ${focusRing}`}
        >
          {site.name}
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <a
            href="#vehicles"
            className={`font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-text-muted)] hover:text-[var(--color-text)] ${focusRing}`}
          >
            Vehicles
          </a>
          <a
            href="#technology"
            className={`font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-text-muted)] hover:text-[var(--color-text)] ${focusRing}`}
          >
            Technology
          </a>
          <a
            href="#contact"
            className={`border border-[var(--color-accent)] px-4 py-2 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] ${focusRing}`}
          >
            {site.cta}
          </a>
        </nav>
        <button
          type="button"
          className={`border border-[var(--color-line)] px-3 py-2 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.18em] md:hidden ${focusRing}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-[var(--color-line)] bg-[var(--color-bg)] px-4 py-4 md:hidden">
          {[
            ['#vehicles', 'Vehicles'],
            ['#technology', 'Technology'],
            ['#services', 'Services'],
            ['#gallery', 'Gallery'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={`block py-2 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] ${focusRing}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className={`mt-3 block border border-[var(--color-accent)] px-4 py-3 text-center font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] ${focusRing}`}
            onClick={() => setOpen(false)}
          >
            {site.cta}
          </a>
        </div>
      ) : null}
    </header>
  );
}
