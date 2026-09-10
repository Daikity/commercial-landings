'use client';

import { useEffect, useState } from 'react';
import { site } from '@/data/content';

const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open
          ? 'border-b border-[var(--color-line)] bg-[var(--color-bg)]/92 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[var(--shell-max)] items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#top"
          className={`font-[family-name:var(--font-display)] text-lg tracking-[0.02em] text-[var(--color-text)] sm:text-xl ${focus}`}
        >
          {site.name}
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          <a href="#contents" className={`text-xs uppercase tracking-[0.18em] ${focus}`}>
            Contents
          </a>
          <a href="#projects" className={`text-xs uppercase tracking-[0.18em] ${focus}`}>
            Projects
          </a>
          <a href="#studio" className={`text-xs uppercase tracking-[0.18em] ${focus}`}>
            Studio
          </a>
          <a href="#journal" className={`text-xs uppercase tracking-[0.18em] ${focus}`}>
            Journal
          </a>
          <a
            href="#contact"
            className={`border border-[var(--color-text)] bg-[var(--color-text)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--color-bg)] hover:bg-transparent hover:text-[var(--color-text)] ${focus}`}
          >
            Start a project
          </a>
        </nav>
        <button
          type="button"
          className={`border border-[var(--color-line)] px-3 py-2 text-xs uppercase tracking-[0.16em] md:hidden ${focus}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-[var(--color-line)] bg-[var(--color-bg)] px-4 py-5 md:hidden">
          <a href="#contents" className="block py-3 text-sm uppercase tracking-[0.16em]" onClick={() => setOpen(false)}>
            Contents
          </a>
          <a href="#projects" className="block py-3 text-sm uppercase tracking-[0.16em]" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#studio" className="block py-3 text-sm uppercase tracking-[0.16em]" onClick={() => setOpen(false)}>
            Studio
          </a>
          <a href="#journal" className="block py-3 text-sm uppercase tracking-[0.16em]" onClick={() => setOpen(false)}>
            Journal
          </a>
          <a
            href="#contact"
            className="mt-3 block border border-[var(--color-text)] bg-[var(--color-text)] px-4 py-3 text-center text-xs uppercase tracking-[0.16em] text-[var(--color-bg)]"
            onClick={() => setOpen(false)}
          >
            Start a project
          </a>
        </div>
      ) : null}
    </header>
  );
}
