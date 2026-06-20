# Design System: Ayeza Raza Portfolio

## Visual Identity & Theme
* **Concept**: "The Gilded Minimalist." Taking cues from ultra-clean, typography-driven portfolios, but injected with warmth and personality through a sophisticated purple palette.
* **Core Trait**: Content-first. The UI should be practically invisible, serving only to frame the copywriting and portfolio media.

## Color Palette
* **Background (Primary)**: `#FAFAFA` (Off-White) - Keeps the canvas modern and stark.
* **Text (Primary)**: `#1A0B2E` (Midnight Purple) - A softer, richer alternative to harsh black for massive typography.
* **Accent/Interactive**: `#7C3AED` (Vibrant Violet) - Used for hover states, active tabs, and critical text highlights.
* **Muted/Borders**: `#E5E7EB` (Light Gray) - For subtle dividers and inactive states.

## Typography
* **Primary Typeface**: `Inter` or `Neue Haas Grotesk` (Clean, geometric sans-serif).
* **Hero Display**: Extremely large (80px - 120px), heavy font weight, and tight letter-spacing.
* **Section Headings (`h2`)**: 3rem, Medium weight, Midnight Purple.
* **Roles/Categories (`h3`)**: 1.5rem, Regular weight, Vibrant Violet.
* **Body Copy (`p`)**: 1.125rem, Regular weight, high line-height (1.6) for readability.

## UI Components & UX Patterns
* **Section 3 Tab Navigation**: Inactive tabs remain unboxed text at 50% opacity. Active tabs transition to Vibrant Violet with a crisp 2px underline (`transition: all 0.3s ease`).
* **Client Logos (Section 2)**: Monochromatic (deep purple/grayscale tint) by default, fading to their full original brand colors on mouse hover.
* **Spatial System**: Adhere to an 8pt grid system.
* **White Space Limit**: Maintain a minimum of `120px` vertical padding between Section 1, Section 2, and Section 3.