# Шаблон нового landing app (Next.js static export)

Скопировать в `apps/<slug>/` и подставить значения.

## Обязательные файлы

| Файл | Назначение |
|------|------------|
| `package.json` | name = slug, scripts: `dev`, `build`, `lint` |
| `next.config.ts` | `output: 'export'`, `basePath` / `assetPrefix` = `/demos/<slug>` |
| `portfolio.project.json` | id, demoBase, folder = `commercial-landings/apps/<slug>` |
| `Dockerfile` | multi-stage: pnpm build → nginx |
| `nginx.conf` | try_files для static export |
| `concept.md` | до вёрстки (см. ТЗ §18) |

## next.config.ts

```ts
import type { NextConfig } from 'next';

const slug = 'maison-crumb'; // заменить

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/demos/${slug}`,
  assetPrefix: `/demos/${slug}`,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
```

## Runtime

По умолчанию — **static export**. Server/standalone только если в `concept.md` зафиксирована нужда в Node (SSR, Route Handlers).

## Deploy

1. Добавить `portfolio.project.json` + `Dockerfile`
2. Из корня portfolio-stack: `node scripts/portfolio-sync.mjs`
3. `docker compose up -d --build`
4. Проверить `http://localhost/demos/<slug>/`

## Dependencies (типовой набор)

- next, react, react-dom
- typescript, @types/react, @types/node
- tailwindcss, @tailwindcss/postcss, postcss
- sass (если нужны SCSS-эффекты)
- framer-motion
- gsap — только для C при реальной нужде
- react-hook-form, zod, @hookform/resolvers
- eslint, eslint-config-next
