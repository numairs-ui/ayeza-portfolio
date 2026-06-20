# Agent Instructions

## Tech Stack & Execution
- Vanilla HTML/CSS/JS (No bundler, no node_modules)
- Local Server: `python -m http.server 8080`

## Commit Attribution
AI commits MUST include:
```text
Co-Authored-By: Antigravity <noreply@google.com>
```

## Key Conventions
- **Aesthetic**: "Gilded Minimalist" Deep Purple Dark Mode.
- **Color Palette**: Background `#0C0614`, Text `#F3E8FF`, Accent `#A855F7`.
- **Typography**: Strict adherence to centered cinematic hierarchy (Title, Subtitle, Tags) in Hero section.
- **Animation**: Use GSAP and ScrollTrigger (via CDN) for all scroll-reveals and kinetic text animations.
- **Styling**: Strictly use CSS Variables defined in `:root`. No hardcoded HEX values in components.
- **Grid System**: Use CSS Grid `grid-auto-flow: dense` (Bento layout) for gallery sections.
