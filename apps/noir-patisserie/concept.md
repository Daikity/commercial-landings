# NOIR PÂTISSERIE — Concept

## Brand

**NOIR PÂTISSERIE** — premium pastry studio. Quiet luxury, craft precision, after-dark elegance. Not a neighborhood bakery — a destination atelier.

Fictional brand for portfolio demonstration.

## Target audience

Affluent urban clients booking private desserts, celebrations, and tasting boxes. Ages ~28–55. Value atmosphere, exclusivity, and visual refinement.

## Business goal

Drive **Private orders** / tasting inquiries. Secondary: establish premium editorial brand presence.

## Visual direction (anti-clone vs Maison Crumb)

| Axis | Maison Crumb | NOIR |
|------|--------------|------|
| Mood | Warm daylight commercial | Dark luxury editorial |
| Layout | Cards, prices, classic sections | Large type, whitespace, horizontal gallery |
| CTA | Order now | Request private order |
| Nav | Full commercial links | Minimal wordmark + sparse links |
| Motion | Soft reveals, card hover | Cinematic reveal, masking, slow parallax |

## Color palette

```css
--color-bg: #0c0b0a;
--color-bg-elevated: #161412;
--color-text: #f3ebe0;
--color-text-muted: #a89f93;
--color-accent: #c4a574;       /* champagne gold */
--color-accent-hover: #d4b98a;
--color-line: #2a2622;
--font-display: "Cormorant Garamond", serif;
--font-body: "Manrope", sans-serif;
--radius-sm: 0;
--radius-md: 0;                /* sharper editorial edges */
--section-space: clamp(4rem, 10vw, 8rem);
```

## Typography

- **Display:** Cormorant Garamond (editorial, high contrast)
- **Body:** Manrope
- Oversized section titles, generous letter-spacing on labels
- Mobile: scale down display; keep editorial hierarchy stacked

## Photography

One source: **dark luxury studio food photography** — macro desserts, black/charcoal sets, controlled rim light, chef portrait, elegant packaging.

| File | Role |
|------|------|
| `hero-gateau.png` | Hero — subject right, space left for type |
| `signature-01.png` … `03` | Signature collection |
| `ingredients.png` | Ingredients / craft materials |
| `craft.png` | Hands / plating craft |
| `gallery-01.png` … `03` | Horizontal gallery |
| `chef.png` | Chef portrait |
| `private-orders.png` | Private orders atmosphere |

No text/logos in images.

## Layout concept

1. Minimal header (wordmark + Private order)
2. Hero — brand oversized + one line + cinematic image
3. Signature collection — large horizontal scroll (desktop) / stacked (mobile)
4. Ingredients — split editorial
5. Craft — full-bleed image + short copy
6. Gallery — horizontal strip
7. Chef — portrait + bio
8. Private orders — form (mock)
9. Contact / footer

## Motion (Level B)

Framer Motion primary:

- Cinematic hero image reveal (mask / clip)
- Typography entrance (stagger lines)
- Horizontal gallery drag/scroll
- Slow parallax on craft/chef imagery
- Hover image transitions on signatures

`prefers-reduced-motion` → fade only, no parallax/horizontal forced motion.

## Desktop / Mobile

- Desktop: horizontal signature + gallery
- Mobile alternative: vertical stacked cards (not shrunk horizontal)

## CTA strategy

Primary: **Request private order** → form (name, email, occasion, message).  
No price grid. Demo mock submit.

## SEO

- Title: `NOIR PÂTISSERIE — Premium Pastry Studio`
- Description: private pastry atelier, signature desserts, private orders
- JSON-LD: `Bakery` / `FoodEstablishment`
- Lang: EN
- Path: `/demos/noir-patisserie/`
- Runtime: **static**

## Anti-clone checklist intent

- Dark editorial ≠ warm commercial
- No product price cards
- Horizontal storytelling sections
- Sharp zero-radius, champagne accent
- Different CTA language and form context
