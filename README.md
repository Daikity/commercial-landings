# commercial-landings

Showcase из 15 коммерческих landing pages (5 тематик × 3 визуальных уровня: Classic / Premium / Experimental).

> All brands, companies, names and business concepts shown in this project are fictional and created for portfolio demonstration purposes.

## Статус

Этап: **15/15 ✅ committed / следующий showcase polish**.  
Demos: … `/demos/orbit-law/`, `/demos/pulse-digital/` (`85c35b8`).

Canonical ТЗ: [`../tz-for-commercial-landings-plan.md`](../tz-for-commercial-landings-plan.md)  
Контекст: [`../ferment-batch1-context-plan.md`](../ferment-batch1-context-plan.md)

## Архитектура

```
commercial-landings/
├── apps/                 # apps добавляются по batch (не 15 пустых заранее)
├── packages/             # только после повторения в 2–3 проектах
├── templates/next-landing/  # scaffold: Dockerfile, nginx, manifest
├── scripts/
├── pnpm-workspace.yaml
└── package.json
```

Monorepo: **pnpm workspaces**. Turborepo и глобальный design system на старте не используются.

## Deploy (portfolio-stack)

Каждый app:

| Поле | Пример |
|------|--------|
| `id` / slug | `maison-crumb` |
| `demoBase` | `/demos/maison-crumb` |
| `folder` | `commercial-landings/apps/maison-crumb` |

Pipeline:

```
apps/<slug>/portfolio.project.json + Dockerfile
→ pnpm sync   # или из корня stack: node scripts/portfolio-sync.mjs
→ docker compose up -d --build   # из корня portfolio-stack
→ http://localhost/demos/<slug>/
```

`portfolio-sync` обнаруживает top-level проекты и `commercial-landings/apps/*`.

Runtime по умолчанию: **Next.js static export + nginx**. Server — только при нужде в Node (см. `concept.md`).

Scaffold: [`templates/next-landing/SCAFFOLD.md`](templates/next-landing/SCAFFOLD.md)

## Slug map (15 проектов)

| Brand | slug | Theme | Level |
|-------|------|-------|-------|
| Maison Crumb | `maison-crumb` | Food & Bakery | A Classic |
| NOIR PÂTISSERIE | `noir-patisserie` | Food & Bakery | B Premium |
| FERMENT | `ferment` | Food & Bakery | C Experimental |
| AURA Studio | `aura-studio` | Beauty & Wellness | A |
| MONA Skin | `mona-skin` | Beauty & Wellness | B |
| KAIRO | `kairo` | Beauty & Wellness | C |
| NORTHLINE | `northline` | Real Estate & Interior | A |
| ATELIER 27 | `atelier-27` | Real Estate & Interior | B |
| FRAME / HOUSE | `frame-house` | Real Estate & Interior | C |
| VANTA DETAILING | `vanta-detailing` | Auto & Mobility | A |
| VOLT GARAGE | `volt-garage` | Auto & Mobility | B |
| APEX / PERFORMANCE | `apex-performance` | Auto & Mobility | C |
| NORTH & CO | `north-and-co` | Professional Services | A |
| ORBIT LAW | `orbit-law` | Professional Services | B |
| PULSE DIGITAL | `pulse-digital` | Professional Services | C |
| Showcase index | `commercial-landings` | — | gallery |

## Policies

### Language

- Лендинги: **EN** по умолчанию
- Showcase descriptions: **RU + EN**
- 1–2 Classic на RU допустимы как осознанный выбор
- Не смешивать языки внутри одного лендинга без причины

### Tailwind + SCSS

- Tailwind: layout, spacing, responsive, typography utilities, simple states
- SCSS: сложные эффекты, custom animations, pseudo-elements, декоративный слой

### Motion

```
CSS → Framer Motion → GSAP
```

- A: CSS + Framer Motion
- B: в основном Framer Motion
- C: Framer + GSAP только при timeline / pinning / scroll choreography
- C: обязателен Desktop + Mobile alternative (не просто scale down)

### Forms

React Hook Form + Zod. Mock submit (`delay ~800ms`). Состояния: idle → loading → success | error. Явно помечать demo behavior.

### Performance budgets

LCP < 2.5s, CLS < 0.1, INP < 200ms. Optimized images, lazy below fold, font optimization, без раздувания JS ради animation.

### Testing

Vitest + RTL для форм, validation, submit states, mobile menu, критичных interactive. Не обязательно покрывать каждый текстовый блок.

### Anti-clone

Перед Done: hero, nav, typography, grid, section order, CTA, image treatment, motion, mobile — должны отличаться от соседних проектов.

## Workflow одного проекта

1. `concept.md` (до вёрстки)
2. Assets (hero → sections)
3. Wireframe → Visual → Animation → UX → Performance → Polish
4. Deploy `/demos/<slug>/`
5. **STOP** — следующий проект только после подтверждения

Порядок: Phase 0 → showcase skeleton → Maison Crumb → Noir → Ferment → **Hard Gate** → Batch 2–5.

## Локальный запуск monorepo

```bash
corepack enable
pnpm install
pnpm --filter <slug> dev
```

## Цель

Демонстрация commercial UX, visual design, motion, responsive, a11y, SEO и reusable workflow — без клонирования одного шаблона на 15 сайтов.
