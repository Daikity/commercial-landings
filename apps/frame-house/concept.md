# FRAME / HOUSE — Concept

## Brand

**FRAME / HOUSE** — architecture studio. The site is an interactive architectural presentation: scroll reveals plan → frame → material → volume → finished house.

Fictional brand for portfolio demonstration.

## Target audience

Clients commissioning houses and small cultural buildings who care about geometry, materials, and process clarity.

## Business goal

**Brief the studio.**

## Visual direction (anti-clone)

| Axis | Atelier 27 | Northline | FRAME / HOUSE |
|------|------------|-----------|---------------|
| Mood | Warm magazine interiors | Navy agency listings | Concrete / blueprint geometry |
| Motion | Fullscreen chapters B | Soft A | Sticky scrub C: plan→house |
| CTA | Start a project | Book a viewing | Brief the studio |
| Fonts | Bodoni + DM Sans | Archivo + Public Sans | Space Grotesk + Source Sans 3 |

Avoid: Ferment bakery sticky story, Kairo breath ring, WebGL.

## Narrative

```
Plan → Frame → Material → Volume → House
```

Desktop: one sticky scrub with clipped image layers + perspective grid.  
Mobile / reduced-motion: vertical stacked stages (CSS media).

## Color palette

```css
--color-bg: #e9eaec;
--color-bg-elevated: #f5f6f7;
--color-ink: #101112;
--color-text: #101112;
--color-text-muted: #5a5f66;
--color-accent: #8f4f35;       /* iron oxide */
--color-line: #c8ccd2;
--font-display: "Space Grotesk", sans-serif;
--font-body: "Source Sans 3", sans-serif;
--shell-max: 72rem;
```

## Layout

Hero → Sequence scrub → Works index → Studio → Approach → Materials grid → Notes → Brief form → Footer

## Motion (Level C)

Sticky scrub, image clipping, architectural grid overlay, perspective tilt on volume stage, large type. No WebGL.

## Deploy

`/demos/frame-house/` · static · EN · JSON-LD Architect
