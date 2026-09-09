# KAIRO — Concept

## Brand

**KAIRO** — wellness / yoga / meditation studio. The site is a calm digital space: slow breath, large type, quiet imagery.

Fictional brand for portfolio demonstration.

## Target audience

Adults 25–45 seeking guided practice, breathwork, and meditative reset — not spa retail or clinical skincare.

## Business goal

Drive **Join a session**. Secondary: communicate the five-stage practice ritual and studio stillness.

## Visual direction (anti-clone)

| Axis | Aura | MONA | KAIRO |
|------|------|------|-------|
| Mood | Soft eucalyptus salon | Cool ivory medical-luxury | Mist sage stillness / breath |
| Structure | Classic services | Editorial clinic | Vertical sticky breath ritual |
| Motion | Soft A | Soft reveals B | Breathing scale + sticky C |
| CTA | Book a visit | Request a consult | Join a session |
| Fonts | Outfit + Source Serif 4 | Newsreader + IBM Plex Sans | Instrument Serif + Figtree |

Avoid: Ferment horizontal carousel, Mona bronze ivory, Aura eucalyptus commercial cards, purple glow, cream+terracotta cliché.

## Practice narrative

```
Arrive → Breathe → Hold → Release → Rest
```

Five breath stages. Desktop: **one sticky scrub frame** — crossfade images, breath ring, stage rail.  
Mobile / `prefers-reduced-motion`: stacked chapters (no pin), CSS media only.

## Color palette

```css
--color-bg: #e4ebe7;
--color-bg-elevated: #f0f4f1;
--color-bg-deep: #1c2420;
--color-text: #1c2420;
--color-text-muted: #5a6660;
--color-accent: #3d6b62;
--color-accent-hover: #2f554e;
--color-line: #c5d0ca;
--font-display: "Instrument Serif", serif;
--font-body: "Figtree", sans-serif;
--shell-max: 72rem;
```

## Typography

- Display: Instrument Serif (large breathing headlines)
- Body: Figtree (calm geometric sans)

## Photography

Empty studio mist, linen, breath torso, seated stillness, forward fold, rest cushion, wide hall. Soft dawn light. No spa product grids, no clinical marble bottles.

## Motion (Level C)

- Slow scroll pacing
- Floating soft accents
- Breathing ring + image crossfade scrubbed by scroll
- Large typography
- Fullscreen space chapter
- One sticky scrub (not Ferment horizontal; not five empty pins)
- Framer Motion + CSS sticky; GSAP not required
- `prefers-reduced-motion`: stacked static chapters via CSS media

## Layout

Hero → Intro (stillness) → Practice scrub (5) → Space fullscreen → Sessions → FAQ → Join form → Footer

## CTA / Form

**Join a session** — name, email, practice interest, note. Mock submit.

## SEO / Deploy

- Title: `KAIRO — Stillness Practice`
- Path: `/demos/kairo/`
- Runtime: **static**
- Lang: EN
- JSON-LD: HealthClub / ExerciseGym (wellness studio)

## Mobile alternative

Sticky pin → vertical stack with same copy/order. No forced horizontal scroll.
