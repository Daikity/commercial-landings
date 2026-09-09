# AURA Studio — Concept

## Brand

**AURA Studio** — neighborhood beauty salon. Calm, polished, approachable. Classic commercial site a client would book from.

Fictional brand for portfolio demonstration.

## Target audience

Urban clients booking hair, skin, and nail care — ages ~22–45. Want clear services, transparent prices, and easy booking.

## Business goal

Drive **Book a visit** (appointment inquiry). Secondary: show services, team trust, before/after proof.

## Visual direction (anti-clone)

| Axis | Choice |
|------|--------|
| Mood | Soft studio daylight, clean spa-salon, quiet confidence |
| Photography | Natural light portraits, soft interiors, product/tools detail — not luxury marble editorial |
| Lighting | Diffused north-window light, gentle skin tones |
| Composition | Brand-forward hero; one job per section; no card-heavy dashboard |
| Avoid | Maison warm bakery sienna; Noir black luxury; Ferment grit; purple AI gradients; cream+terracotta cliché |

## Color palette

```css
--color-bg: #f2f0ec;
--color-bg-elevated: #faf9f6;
--color-text: #1e2420;
--color-text-muted: #5c6560;
--color-accent: #3d6b5c;       /* eucalyptus */
--color-accent-hover: #2f5448;
--color-line: #d8d4cc;
--color-success: #3d6b5c;
--font-display: "Outfit", sans-serif;
--font-body: "Source Serif 4", serif;
--radius-sm: 0.375rem;
--radius-md: 0.75rem;
--section-space: clamp(3.5rem, 8vw, 6.5rem);
--shell-max: 72rem;
```

## Typography

- **Display:** Outfit (modern geometric, salon-clean)
- **Body:** Source Serif 4 (warm readable serif for descriptions)
- Hierarchy: brand hero → section titles → body → meta

## Photography / imagery

| File | Role | Ratio |
|------|------|-------|
| `hero-studio.png` | Hero atmosphere / salon moment | 16:9 |
| `service-hair.png` | Hair service | 4:3 |
| `service-skin.png` | Skin / facial | 4:3 |
| `service-nails.png` | Nails | 4:3 |
| `team-1.png` | Stylist portrait | 3:4 |
| `team-2.png` | Colorist portrait | 3:4 |
| `team-3.png` | Esthetician portrait | 3:4 |
| `before-after-a.png` | Before state | 4:3 |
| `before-after-b.png` | After state | 4:3 |
| `space-interior.png` | Studio interior | 16:9 |

No text/logos/watermarks in images.

## Layout (Classic Commercial)

1. Header — wordmark + nav + Book
2. Hero — brand + one line + CTA + full-bleed studio image
3. Services — 3 offerings
4. Prices — clear list
5. Team — 3 people
6. Before/After — interactive compare
7. Reviews — short quotes
8. Booking — form (RHF + Zod mock)
9. Contacts / footer + fictional disclaimer

## Motion (Level A)

- Soft section reveal (opacity + y)
- Hover on service images
- Before/after slider interaction
- No scroll hijack, no sticky horizontal

## CTA / Form

**Book a visit** — name, email, service, preferred date/note. Mock submit + disclaimer.

## SEO / Deploy

- Title: `AURA Studio — Beauty Salon`
- Path: `/demos/aura-studio/`
- Runtime: **static**
- Lang: EN
- JSON-LD: BeautySalon

## Mobile

Stack sections; before/after still usable; form full-width; no horizontal traps.
