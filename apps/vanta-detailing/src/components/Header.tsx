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
      <div className="mx-auto flex max-w-[var(--shell-max)] items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className={`font-[family-name:var(--font-display)] text-2xl font-semibold uppercase tracking-[0.08em] text-[var(--color-text)] ${focusRing}`}
        >
          {site.name}
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <a href="#services" className={`text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] ${focusRing}`}>
            Services
          </a>
          <a href="#packages" className={`text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] ${focusRing}`}>
            Packages
          </a>
          <a href="#results" className={`text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] ${focusRing}`}>
            Results
          </a>
          <a
            href="#booking"
            className={`rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-bg)] hover:bg-[var(--color-accent-hover)] ${focusRing}`}
          >
            {site.cta}
          </a>
        </nav>
        <button
          type="button"
          className={`border border-[var(--color-line)] bg-[var(--color-bg-elevated)] px-3 py-2 text-sm md:hidden ${focusRing}`}
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
            ['#services', 'Services'],
            ['#packages', 'Packages'],
            ['#results', 'Results'],
            ['#process', 'Process'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a key={href} href={href} className={`block py-2 ${focusRing}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href="#booking"
            className={`mt-2 block rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-4 py-3 text-center font-semibold text-[var(--color-bg)] ${focusRing}`}
            onClick={() => setOpen(false)}
          >
            {site.cta}
          </a>
        </div>
      ) : null}
    </header>
  );
}
