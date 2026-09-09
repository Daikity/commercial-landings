# FERMENT — Concept

## Brand

**FERMENT** — artisan sourdough bakery. Raw, process-obsessed, documentary. The site *is* the bake cycle.

Fictional brand for portfolio demonstration.

## Target audience

Sourdough enthusiasts and craft-food buyers who care about fermentation time, flour origin, and oven craft. Ages ~25–50.

## Business goal

Communicate process authority → drive loaf pre-orders / subscribe CTA (**Reserve a loaf**).

## Visual direction (anti-clone)

| Axis | Maison | NOIR | FERMENT |
|------|--------|------|---------|
| Mood | Warm commercial | Dark luxury | Raw documentary |
| Structure | Classic sections | Editorial + galleries | Process scroll story |
| Motion | Soft A | Cinematic B | Sticky / timeline C |
| CTA | Order now | Private order | Reserve a loaf |

## Process narrative

```
Grain → Flour → Starter → Dough → Fermentation → Score → Oven → Bread → Crumb
```

Nine documentary stages (extended bake cycle for scroll storytelling).

Desktop: sticky process with horizontal step progression.  
Mobile / `prefers-reduced-motion`: vertical stacked chapters (not scaled-down horizontal).

## Color palette

```css
--color-bg: #ebe6dc;
--color-bg-elevated: #f5f1e8;
--color-text: #1c1914;
--color-text-muted: #5c564c;
--color-accent: #b33a1a;       /* kiln / crust red-orange */
--color-accent-hover: #8f2e15;
--color-line: #d2cbbd;
--font-display: "Syne", sans-serif;
--font-body: "Literata", serif;
--radius-sm: 0.25rem;
--section-space: clamp(3rem, 9vw, 7rem);
```

## Typography

- Display: Syne (angular, contemporary craft)
- Body: Literata (readable serif for long process copy)
- Large step numerals / labels

## Photography

Raw documentary bakery: grain bags, milling flour dust, dough folds, bannetons, oven fire/heat, finished loaves. Natural imperfect light. No luxury plating, no pastel commercial polish.

## Motion (Level C)

- Scroll storytelling through **9** stages
- Sticky process panel (desktop, motion allowed)
- Text entrance like Hero (fade-up stagger)
- Product reveal → final CTA
- Framer Motion + CSS sticky; GSAP not required
- `prefers-reduced-motion`: stacked static chapters (CSS media, no JS remount)

## CTA / Form

**Reserve a loaf** — name, email, loaf type, note. Mock submit.

## SEO / Deploy

- Title: `FERMENT — Artisan Sourdough`
- Path: `/demos/ferment/`
- Runtime: **static**
- Lang: EN
- JSON-LD: Bakery

## Mobile alternative

Horizontal timeline → vertical chapters with sticky step title only (short). No forced horizontal scroll on small screens.
