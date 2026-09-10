import { ShowcaseGallery } from '@/components/ShowcaseGallery';
import { SHOWCASE_PROJECTS } from '@/data/projects';

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-12 max-w-3xl">
        <p className="mb-3">
          {/* Внешний выход на корень портфолио (не basePath showcase) */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/"
            className="text-xs uppercase tracking-[0.2em] text-accent underline-offset-4 hover:underline"
          >
            ← Igor Edison · Portfolio
          </a>
        </p>
        <h1 className="font-display mb-4 text-4xl tracking-tight sm:text-5xl">
          Commercial Landings
        </h1>
        <p className="mb-4 text-lg leading-relaxed text-foreground/85">
          {SHOWCASE_PROJECTS.length} live demos · 5 industries · 3 visual levels (Classic / Premium /
          Experimental). Built as distinct brands — not one template recolored.
        </p>
        <p className="text-sm leading-relaxed text-muted">
          All brands, companies, names and business concepts shown in this project are fictional and
          created for portfolio demonstration purposes.
        </p>
      </header>

      <ShowcaseGallery />

      <footer className="mt-16 border-t border-line pt-8 text-sm text-muted">
        <p>
          Stack: Next.js static export · Tailwind · Framer Motion · React Hook Form + Zod · pnpm
          workspaces.
        </p>
      </footer>
    </main>
  );
}
