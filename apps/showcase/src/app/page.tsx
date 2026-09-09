import { SHOWCASE_PROJECTS, type ProjectLevel } from '@/data/projects';

const LEVEL_HINT: Record<ProjectLevel, string> = {
  A: 'Classic',
  B: 'Premium',
  C: 'Experimental',
};

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-10 border-b border-line pb-8">
        <p className="mb-2 text-sm uppercase tracking-[0.14em] text-muted">Portfolio showcase</p>
        <h1 className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Commercial Landings
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          5 industries × 3 visual directions = 15 landing pages. Skeleton index — UI polish after
          Hard Gate.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          All brands, companies, names and business concepts shown in this project are fictional and
          created for portfolio demonstration purposes.
        </p>
      </header>

      <ul className="flex flex-col gap-0">
        {SHOWCASE_PROJECTS.map((project) => (
          <li
            key={project.slug}
            className="grid gap-3 border-b border-line py-5 sm:grid-cols-[1fr_auto] sm:items-start"
          >
            <div>
              <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="text-lg font-semibold tracking-tight">{project.name}</h2>
                <span className="text-xs uppercase tracking-wider text-muted">
                  {project.level} · {LEVEL_HINT[project.level]}
                </span>
              </div>
              <p className="mb-1 text-sm text-muted">{project.category}</p>
              <p className="mb-1 text-sm leading-relaxed">{project.concept.en}</p>
              <p className="mb-2 text-sm leading-relaxed text-muted">{project.concept.ru}</p>
              <p className="text-xs text-muted">{project.tech.join(' · ')}</p>
            </div>

            <div className="flex flex-col items-start gap-2 text-sm sm:items-end">
              <span className="rounded border border-line px-2 py-0.5 text-xs uppercase tracking-wide text-muted">
                {project.status}
              </span>
              <div
                className="flex h-20 w-36 items-center justify-center border border-dashed border-line bg-white/40 text-xs text-muted"
                aria-hidden
              >
                screenshot
              </div>
              <div className="flex gap-3">
                <span className="text-muted" title="Demo появится после реализации">
                  Demo
                </span>
                <span className="text-muted" title="Source появится после реализации">
                  Source
                </span>
              </div>
              <a
                className="text-accent underline-offset-2 hover:underline"
                href={`/demos/${project.slug}/`}
              >
                /demos/{project.slug}/
              </a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
