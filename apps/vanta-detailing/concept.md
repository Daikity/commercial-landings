# VANTA DETAILING — Concept

## Brand

**VANTA DETAILING** — premium car detailing studio. Precision ceramic coatings, paint correction, and interior reset in a controlled bay. Classic commercial site a car owner would book a detail from.

Fictional brand for portfolio demonstration.

## Target audience

Owners of daily drivers and weekend cars, 28–55. Want clear packages, honest before/after proof, and a fast booking path — not a lifestyle magazine.

## Business goal

Drive **Book a detail**. Secondary: explain services, packages, process, trust.

## Visual direction (anti-clone)

| Axis | Choice |
|------|--------|
| Mood | Obsidian graphite / wet-look paint — dark bay, controlled light, ceramic sheen |
| Photography | Glossy body panels, polishing tools, bay floor reflections — not RE interiors or spa |
| Avoid | Northline cool navy; Aura eucalyptus; Mona ivory; Frame iron oxide; purple AI; cream+terracotta |

## Color palette

```css
--color-bg: #0c0d0f;
--color-bg-elevated: #16181c;
--color-text: #e8eaed;
--color-text-muted: #9aa0a8;
--color-accent: #2ec4b6;       /* ceramic teal */
--color-accent-hover: #24a89c;
--color-line: #2a2e35;
--font-display: "Barlow Condensed", sans-serif;
--font-body: "Barlow", sans-serif;
--shell-max: 72rem;
```

## Typography

- Display: Barlow Condensed (automotive condensed impact)
- Body: Barlow (technical readable UI)

## Photography / imagery

| File | Role | Ratio |
|------|------|-------|
| `hero.png` | Full-bleed wet black car in dark bay | 16:9 |
| `service-correction.png` | Paint correction / polish | 4:3 |
| `service-ceramic.png` | Ceramic coating application | 4:3 |
| `service-interior.png` | Interior detail | 4:3 |
| `before-after-a.png` | Dirty / dull paint before | 4:3 |
| `before-after-b.png` | Glossy corrected after | 4:3 |
| `studio.png` | Detailing bay / booking side | 16:9 |

No text/logos/watermarks in images.

## Layout (Classic Commercial)

1. Header — wordmark + nav + Book a detail
2. Hero — brand + one line + CTA + full-bleed vehicle
3. Services — Paint correction / Ceramic / Interior
4. Packages — clear pricing tiers
5. Before/After — interactive slider
6. Process — numbered steps
7. Reviews
8. FAQ
9. Booking — form (RHF + Zod mock)
10. Contacts / footer + fictional disclaimer

## Motion (Level A)

Vehicle soft reveal, service card hover scale, before/after slider, CTA hover. No sticky hijack.

## CTA / Form

**Book a detail** — name, email, package interest, note. Mock submit.

## SEO / Deploy

- Title: `VANTA DETAILING — Premium Car Care`
- Path: `/demos/vanta-detailing/`
- Runtime: **static**
- Lang: EN
- JSON-LD: AutoRepair (or LocalBusiness detailing)

## Mobile

Packages stack; before/after full-width; form full-width.
