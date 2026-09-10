'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  CATEGORIES,
  LEVELS,
  SHOWCASE_PROJECTS,
  sourceUrl,
  type ProjectLevel,
  type ShowcaseProject,
} from '@/data/projects';

const LEVEL_HINT: Record<ProjectLevel, string> = {
  A: 'Classic',
  B: 'Premium',
  C: 'Experimental',
};

type Category = (typeof CATEGORIES)[number];
type LevelFilter = (typeof LEVELS)[number];

/** Fisher–Yates: новый порядок на каждую загрузку страницы */
function shuffleProjects(list: ShowcaseProject[]): ShowcaseProject[] {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function ShowcaseGallery() {
  const [category, setCategory] = useState<Category>('All');
  const [level, setLevel] = useState<LevelFilter>('All');
  // Стартуем с исходного порядка (SSR/hydration), shuffle — после mount
  const [ordered, setOrdered] = useState(SHOWCASE_PROJECTS);

  useEffect(() => {
    setOrdered(shuffleProjects(SHOWCASE_PROJECTS));
  }, []);

  const filtered = useMemo(() => {
    return ordered.filter((project) => {
      const byCategory = category === 'All' || project.category === category;
      const byLevel = level === 'All' || project.level === level;
      return byCategory && byLevel;
    });
  }, [ordered, category, level]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-2" role="group" aria-label="Industry">
          {CATEGORIES.map((item) => {
            const active = category === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(item)}
                className={`px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? 'bg-foreground text-background'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {item === 'All' ? 'All industries' : item}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-x-1 gap-y-2" role="group" aria-label="Level">
          <span className="mr-2 text-xs uppercase tracking-[0.16em] text-muted">Level</span>
          {LEVELS.map((item) => {
            const active = level === item;
            const label =
              item === 'All' ? 'All' : `${item} · ${LEVEL_HINT[item as ProjectLevel]}`;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={active}
                onClick={() => setLevel(item)}
                className={`px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? 'bg-foreground text-background'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <p className="text-sm text-muted">
          {filtered.length} / {SHOWCASE_PROJECTS.length} projects
        </p>
      </div>

      <ul className="grid list-none gap-8 p-0 m-0 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project, index) => (
          <li
            key={project.slug}
            className="group flex flex-col opacity-0 animate-rise"
            style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
          >
            <a
              href={`/demos/${project.slug}/`}
              aria-label={`${project.name} — open demo`}
              className="relative mb-4 block aspect-[16/10] overflow-hidden bg-ink-soft"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.cover}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <span
                className="absolute left-0 top-0 h-1 w-full"
                style={{ background: project.accent }}
                aria-hidden
              />
              <span className="absolute bottom-3 left-3 bg-background/90 px-2 py-1 text-xs uppercase tracking-wider text-foreground backdrop-blur-sm">
                {project.level} · {LEVEL_HINT[project.level]}
              </span>
            </a>

            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="font-display text-xl tracking-tight">{project.name}</h2>
              </div>
              <p className="text-xs uppercase tracking-[0.12em] text-muted">{project.category}</p>
              <p className="text-sm leading-relaxed text-foreground/90">{project.concept.en}</p>
              <p className="text-sm leading-relaxed text-muted">{project.concept.ru}</p>
              <p className="mt-1 text-xs text-muted">{project.tech.join(' · ')}</p>

              <div className="mt-auto flex flex-wrap gap-4 pt-4 text-sm">
                <a
                  className="text-accent underline-offset-4 hover:underline"
                  href={`/demos/${project.slug}/`}
                >
                  Demo
                </a>
                <a
                  className="text-muted underline-offset-4 hover:text-foreground hover:underline"
                  href={`/work/${project.slug}`}
                >
                  Case
                </a>
                <a
                  className="text-muted underline-offset-4 hover:text-foreground hover:underline"
                  href={sourceUrl(project.slug)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="text-muted">No projects match these filters.</p>
      ) : null}
    </div>
  );
}
