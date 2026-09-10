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
          className={`font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.12em] uppercase ${focus}`}
        >
          {site.name}
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <a href="#sequence" className={`text-xs uppercase tracking-[0.16em] ${focus}`}>
            Sequence
          </a>
          <a href="#works" className={`text-xs uppercase tracking-[0.16em] ${focus}`}>
            Works
          </a>
          <a href="#studio" className={`text-xs uppercase tracking-[0.16em] ${focus}`}>
            Studio
          </a>
          <a
            href="#brief"
            className={`border border-[var(--color-text)] bg-[var(--color-text)] px-4 py-2 text-xs uppercase tracking-[0.14em] text-[var(--color-bg)] hover:bg-transparent hover:text-[var(--color-text)] ${focus}`}
          >
            Brief the studio
          </a>
        </nav>
        <button
          type="button"
          className={`border border-[var(--color-line)] px-3 py-2 text-xs uppercase tracking-[0.14em] md:hidden ${focus}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-[var(--color-line)] bg-[var(--color-bg)] px-4 py-4 md:hidden">
          <a href="#sequence" className="block py-2 text-sm uppercase tracking-[0.14em]" onClick={() => setOpen(false)}>
            Sequence
          </a>
          <a href="#works" className="block py-2 text-sm uppercase tracking-[0.14em]" onClick={() => setOpen(false)}>
            Works
          </a>
          <a href="#studio" className="block py-2 text-sm uppercase tracking-[0.14em]" onClick={() => setOpen(false)}>
            Studio
          </a>
          <a
            href="#brief"
            className="mt-2 block border border-[var(--color-text)] bg-[var(--color-text)] px-4 py-3 text-center text-xs uppercase tracking-[0.14em] text-[var(--color-bg)]"
            onClick={() => setOpen(false)}
          >
            Brief the studio
          </a>
        </div>
      ) : null}
    </header>
  );
}
