'use client';

import { useEffect, useState } from 'react';
import { site } from '@/data/content';

const ring =
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
          : 'border-transparent bg-[var(--color-bg)]/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-[var(--shell-max)] items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className={`font-[family-name:var(--font-display)] text-2xl tracking-tight ${ring}`}>
          {site.name}
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <a href="#philosophy" className={`text-sm tracking-wide ${ring}`}>
            Philosophy
          </a>
          <a href="#treatments" className={`text-sm tracking-wide ${ring}`}>
            Treatments
          </a>
          <a href="#experts" className={`text-sm tracking-wide ${ring}`}>
            Experts
          </a>
          <a
            href="#booking"
            className={`border border-[var(--color-text)] px-4 py-2 text-sm tracking-wide hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] ${ring}`}
          >
            Request a consult
          </a>
        </nav>
        <button
          type="button"
          className={`border border-[var(--color-line)] px-3 py-2 text-sm md:hidden ${ring}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-[var(--color-line)] px-4 py-4 md:hidden">
          {['#philosophy', '#treatments', '#experts', '#results', '#booking'].map((href) => (
            <a
              key={href}
              href={href}
              className={`block py-2 capitalize ${ring}`}
              onClick={() => setOpen(false)}
            >
              {href.slice(1)}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
