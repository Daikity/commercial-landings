# ATELIER 27 — Concept (v2)

## Brand

**ATELIER 27** — interior design studio. The site reads like a design magazine: full-bleed rooms, masked type, sparse copy.

Fictional brand for portfolio demonstration.

## Target audience

Homeowners / developers commissioning residential interiors. Want editorial proof before a brief call.

## Business goal

**Start a project.**

## Visual direction (anti-clone)

| Axis | Choice |
|------|--------|
| Mood | Ink & paper magazine — AD / Kinfolk calm, not spa beige |
| Structure | Fullscreen project chapters + native horizontal strip |
| Motion | Mask reveals, typography slide, parallax, gallery snap |
| Avoid | Ferment sticky scrub, Northline navy cards, Mona ivory clinic, cream+terracotta AI, purple glow |

## Color palette

```css
--color-bg: #f6f4ef;           /* paper */
--color-bg-elevated: #fffcf7;
--color-ink: #0e0e0d;          /* chapter fills */
--color-text: #0e0e0d;
--color-text-muted: #5e5954;
--color-accent: #8a7355;       /* aged brass */
--color-line: #ddd7ce;
--font-display: "Bodoni Moda", serif;
--font-body: "DM Sans", sans-serif;
--shell-max: 72rem;
```

## Typography

- Display: Bodoni Moda (magazine masthead)
- Body: DM Sans (editorial UI)

## Layout

1. Hero — full-bleed room, brand masthead, one line, one CTA  
2. Selected projects — three fullscreen chapters (image + masked title)  
3. Gallery strip — native horizontal snap (no sticky hijack)  
4. Studio — 12-col asymmetric  
5. Process — thin numbered list  
6. Materials — image + list  
7. Awards — dense type rows  
8. Journal — three notes  
9. Contact — form  

## Motion (Level B)

- Image mask / clip reveals  
- Typography reveal  
- Subtle hero parallax  
- Fullscreen project chapter fades  
- Horizontal gallery: CSS scroll-snap (reduced-motion: stack)  

## CTA / Form

**Start a project** — name, email, type, note. Mock.

## Deploy

`/demos/atelier-27/` · static · EN · JSON-LD ProfessionalService
