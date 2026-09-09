# Maison Crumb — Concept

## Brand

**Maison Crumb** — neighborhood bakery / patisserie. Warm, trustworthy, everyday-premium. Feels like a real local business site a client would order.

Fictional brand for portfolio demonstration.

## Target audience

Urban professionals and families who want fresh bread and pastries — order for pickup or local delivery. Ages ~25–55. Value quality, clarity, and convenience over hype.

## Business goal

Drive **Order now** actions (pickup / delivery inquiry). Secondary: communicate assortment, trust, and neighborhood story.

## Visual direction

| Axis | Choice |
|------|--------|
| Mood | Warm, inviting, craft, daylight bakery |
| Photography | Warm editorial food photography — real textures, wood, flour, crust |
| Lighting | Soft morning window light, gentle highlights on crust |
| Composition | Hero subject right / text left; generous space for type |
| Avoid | Dark luxury (Noir), documentary grit (Ferment), purple gradients, neon |

## Color palette (CSS variables)

```css
--color-bg: #f7f3ec;
--color-bg-elevated: #fffdf8;
--color-text: #2a2218;
--color-text-muted: #6a5e50;
--color-accent: #9a4e2b;      /* crust / burnt sienna */
--color-accent-hover: #7d3d21;
--color-line: #e4d9c8;
--color-success: #3d6b4f;
--font-display: "Fraunces", serif;
--font-body: "Source Sans 3", sans-serif;
--radius-sm: 0.375rem;
--radius-md: 0.75rem;
--section-space: clamp(3.5rem, 8vw, 6.5rem);
```

Не глобальный design system — только project-level tokens.

## Typography

- **Display:** Fraunces (soft serif, bakery craft)
- **Body:** Source Sans 3
- Hierarchy: large hero headline → section titles → body 1.05–1.125rem → small meta
- Mobile: reduce display size, keep line-height readable; no oversized type that breaks CTA

## Photography / imagery

One visual source: **warm editorial bakery photography**.

Asset set:

| File | Role | Ratio |
|------|------|-------|
| `hero-croissant.jpg` | Hero product (text left → subject right) | 16:9 |
| `assortment-bread.jpg` | Assortment / loaves | 4:3 |
| `product-sourdough.jpg` | Popular product | 1:1 |
| `product-croissant.jpg` | Popular product | 1:1 |
| `product-tart.jpg` | Popular product | 1:1 |
| `story-interior.jpg` | Bakery story / interior | 4:3 |
| `delivery-bag.jpg` | Delivery section | 4:3 |
| `texture-flour.jpg` | Subtle background / decorative | 16:9 |

No text, logos, or watermarks in images. Consistent white balance and wood/flour props.

## Layout concept

Classic commercial single-page:

1. Header (logo wordmark + nav + Order now)
2. Hero — headline + short support + CTA group + full-bleed product image
3. Assortment — category grid
4. Popular products — 3 cards
5. Benefits — 3–4 points (fresh daily, local flour, same-day pickup…)
6. Story — split text + interior image
7. Reviews — quotes
8. Delivery — zones / hours + image
9. CTA band — Order now
10. Contact / footer — address, hours, phone, form

Desktop: clear sections, ~max 1120–1200px content. Mobile: stacked, sticky compact Order CTA optional in header.

## Motion concept (Level A)

CSS + Framer Motion only:

- Hero image reveal (clip / fade + subtle scale)
- Staggered heading lines
- Product card hover (lift + image scale)
- Scroll reveal for sections
- Subtle image scale on scroll (light)

Respect `prefers-reduced-motion`.

## Desktop behavior

- Full-bleed hero with text overlay/left column
- Product grid 3 columns
- Story as 50/50 split
- Horizontal nav

## Mobile behavior

- Hero: image top or background with readable text block below/over gradient scrim
- Products: 1 column
- Story: stacked image then text
- Burger menu
- Form full-width

## CTA strategy

Primary: **Order now** → scroll/modal to order form (name, phone/email, pickup vs delivery, note).  
Secondary: View menu / Call.

Mock submit: delay ~800ms → success | error. Label demo behavior.

## SEO direction

- Title: `Maison Crumb — Fresh Bakery & Patisserie`
- Description: neighborhood bakery, bread, pastries, order pickup & delivery
- OG image: hero
- JSON-LD: `LocalBusiness` / Bakery
- Lang: **EN**
- Canonical / demo path: `/demos/maison-crumb/`

## Form behavior

```
idle → fill → Zod validation → submit → loading → success | error
```

Fields: name, email or phone, order type (pickup/delivery), message. Demo notice visible.

## Deployment

| Field | Value |
|-------|--------|
| slug / id | `maison-crumb` |
| demoBase | `/demos/maison-crumb` |
| folder | `commercial-landings/apps/maison-crumb` |
| **Runtime** | **static** (Next.js `output: 'export'` + nginx) |

## Wireframe (section order)

```
[Header]
[Hero: copy left | product right / full-bleed]
[Assortment categories]
[Popular products ×3]
[Benefits strip]
[Our story: text | interior]
[Reviews]
[Delivery]
[CTA Order now]
[Contact + form]
[Footer]
```

## Anti-clone notes (vs future Noir / Ferment)

- Light warm commercial layout (not dark editorial, not scroll-story)
- Clear product cards + prices feel
- Standard header + Order CTA
- Friendly copy, not luxury manifesto or process manifesto
