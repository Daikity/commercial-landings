'use client';

import { useEffect, useState } from 'react';
import { site } from '@/data/content';

const focus =
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
      <div className="mx-auto flex max-w-[var(--shell-max)] items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className={`font-[family-name:var(--font-display)] text-lg font-semibold tracking-[0.08em] uppercase text-[var(--color-text)] ${focus}`}
        >
          {site.name}
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <a href="#properties" className={`text-sm font-medium underline-offset-4 hover:underline ${focus}`}>
            Properties
          </a>
          <a href="#locations" className={`text-sm font-medium underline-offset-4 hover:underline ${focus}`}>
            Locations
          </a>
          <a
            href="#viewing"
            className={`rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-accent-hover)] ${focus}`}
          >
            Book a viewing
          </a>
        </nav>
        <button
          type="button"
          className={`border border-[var(--color-line)] bg-[var(--color-bg-elevated)] px-3 py-2 text-sm md:hidden ${focus}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-[var(--color-line)] bg-[var(--color-bg)] px-4 py-4 md:hidden">
          <a href="#properties" className="block py-2" onClick={() => setOpen(false)}>
            Properties
          </a>
          <a href="#locations" className="block py-2" onClick={() => setOpen(false)}>
            Locations
          </a>
          <a
            href="#viewing"
            className="mt-2 block rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-4 py-3 text-center text-white"
            onClick={() => setOpen(false)}
          >
            Book a viewing
          </a>
        </div>
      ) : null}
    </header>
  );
}
