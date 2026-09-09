'use client';

import { useEffect, useState } from 'react';
import { site } from '@/data/content';

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
          : 'border-[var(--color-line)]/60 bg-[var(--color-bg)]/90 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-[var(--shell-max)] items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight uppercase text-[var(--color-text)]"
        >
          {site.name}
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <a
            href="#process"
            className="text-sm font-medium text-[var(--color-text)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            Process
          </a>
          <a
            href="#reserve"
            className="rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            Reserve a loaf
          </a>
        </nav>
        <button
          type="button"
          className="border border-[var(--color-line)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[var(--color-line)] bg-[var(--color-bg)] px-4 py-4 md:hidden"
        >
          <a
            href="#process"
            className="block py-2 text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            onClick={() => setOpen(false)}
          >
            Process
          </a>
          <a
            href="#reserve"
            className="mt-2 block rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-4 py-3 text-center text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            onClick={() => setOpen(false)}
          >
            Reserve a loaf
          </a>
        </div>
      ) : null}
    </header>
  );
}
