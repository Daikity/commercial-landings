# APEX / PERFORMANCE — Concept

## Brand

**APEX / PERFORMANCE** — performance automotive workshop. Dyno runs, ECU maps, and track-prep builds. Aggressive, fast, high contrast — not a quiet EV showroom or detailing spa.

Fictional brand for portfolio demonstration.

## Target audience

Enthusiasts and time-attack drivers 25–45 who want measurable power and a reserved dyno slot.

## Business goal

Drive **Book a run**. Secondary: show pull stages, services, and proof numbers.

## Visual direction (anti-clone)

| Axis | Choice |
|------|--------|
| Mood | Asphalt black / racing red — speed, high contrast, technical grit |
| vs VANTA | Not ceramic teal detailing packages |
| vs VOLT | Not voltage lime EV editorial calm |
| vs FRAME | Not concrete iron oxide architecture scrub |
| Avoid | Purple glow, cream+terracotta, soft spa |

## Color palette

```css
--color-bg: #050505;
--color-bg-elevated: #111111;
--color-text: #f5f5f5;
--color-text-muted: #9a9a9a;
--color-accent: #ff1e1e;       /* racing red */
--color-accent-hover: #ff4444;
--color-line: #2a2a2a;
--font-display: "Teko", sans-serif;
--font-body: "Titillium Web", sans-serif;
--shell-max: 72rem;
```

## Typography

- Display: Teko (aggressive condensed)
- Body: Titillium Web (technical readable)

## Narrative (sticky scrub)

```
Idle → Launch → Apex → Cool-down
```

Desktop: one sticky vehicle scrub with speed skew + crossfade.  
Mobile / reduced-motion: stacked stages.

## Photography

| File | Role |
|------|------|
| `hero.png` | Aggressive performance car, motion blur hint |
| `stage-idle.png` | Static bay / idle |
| `stage-launch.png` | Launch / roll start energy |
| `stage-apex.png` | Peak load / dyno intensity |
| `stage-cool.png` | Cool-down / finish |
| `service-ecu.png` / `service-dyno.png` / `service-track.png` | Horizontal services |
| `bay.png` | Workshop for CTA |

## Layout

Hero → Pull scrub → Numbers → Services (horizontal) → FAQ → Book a run → Footer

## Motion (Level C)

Sticky scrub, speed skew distortion, animated counters, horizontal service rail. Framer only (no GSAP unless needed). Mobile alternative: stacked.

## CTA / Form

**Book a run** — name, email, vehicle, goal. Mock submit.

## Deploy

`/demos/apex-performance/` · static · EN · JSON-LD AutoRepair
