'use client';

import { useEffect, useState } from 'react';
import { site } from '@/data/content';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  const linkClass =
    'text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open
          ? 'border-b border-[var(--color-line)] bg-[var(--color-bg)]/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-2xl tracking-[0.12em] text-[var(--color-text)]"
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <a href="#signature" className={linkClass}>
            Signature
          </a>
          <a href="#craft" className={linkClass}>
            Craft
          </a>
          <a href="#chef" className={linkClass}>
            Chef
          </a>
          <a
            href="#private"
            className="border border-[var(--color-accent)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          >
            Private order
          </a>
        </nav>

        <button
          type="button"
          className="border border-[var(--color-line)] px-3 py-2 text-xs uppercase tracking-[0.16em] md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-[var(--color-line)] bg-[var(--color-bg)] px-4 py-6 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {[
              ['#signature', 'Signature'],
              ['#craft', 'Craft'],
              ['#chef', 'Chef'],
              ['#private', 'Private order'],
            ].map(([href, label]) => (
              <a key={href} href={href} className={linkClass} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
