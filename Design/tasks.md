# Tasks: Ayeza Raza Portfolio SPA

## Objective
Build a minimal, typography-driven portfolio website for Ayeza Raza, functioning as a fast Single Page Application (SPA). The project will be built using a local-first mock data strategy before migrating to a production backend.

## Requirements
1. **Tech Stack**: Custom HTML5, modern CSS3 (Flexbox/Grid), Vanilla JavaScript (ES6+), Supabase (Backend/Storage), Vercel (Hosting).
2. **Constraint**: Strict adherence to the minimalist design system. Ensure lightning-fast load times with no heavy frontend frameworks.
3. **Output**: A responsive, single-page portfolio featuring dynamic, tabbed filtering for work categories without page reloads.

## Roadmap

### Phase 1: Architecture & Scaffolding
- [ ] **Architecture**: Draft high-fidelity wireframes in Figma to map out spatial hierarchy, massive typography sizing, and tabbed interaction flows before writing code.
- [ ] **Scaffolding**: Initialize the local project structure (`index.html`, `style.css`, `app.js`).
- [ ] **Scaffolding**: Create a `data.json` file in the root directory to act as a local mock database containing dummy portfolio items (title, category, image placeholder URL, description).
- [ ] **Scaffolding**: Import the primary web fonts (e.g., Inter or Neue Haas Grotesk).

### Phase 2: Local Implementation (UI & Logic)
- [ ] **Implementation**: Build Section 1 (Hero) featuring the name "Ayeza Raza" and the resume title "Creative strategist, writer and storyteller."
- [ ] **Implementation**: Build Section 2 (About) using the provided short bio.
- [ ] **Implementation**: Build Section 2 (Clients) using a CSS Grid layout for the logos (Nestlé Neafruita, Nestlé Fruita Vitals, Nestlé Milo, Nestlé Nido, Kisan, Easypaisa, Telenor, Remotebase).
- [ ] **Implementation**: Build the HTML skeleton for Section 3 (Selected Works) containing the tabbed navigation (Digital Ads, Socials, Film & Scriptwriting, Animation, Illustration) and an empty grid container for the results.
- [ ] **Implementation**: Write vanilla JS in `app.js` using the standard `fetch()` API to pull data from your local `data.json` file on load.
- [ ] **Implementation**: Write the JS event listeners for the Section 3 tabs to dynamically filter and render the JSON data into the gallery grid without a page refresh.

### Phase 3: Styling (The Gilded Minimalist)
- [ ] **Styling**: Map all colors (`#FAFAFA`, `#1A0B2E`, `#7C3AED`, `#E5E7EB`) and spacing rules from `designsystem.md` into CSS Variables within `style.css`.
- [ ] **Styling**: Apply the massive typography scaling to headers and roles.
- [ ] **Styling**: Style the active/inactive states for the custom tab navigation (Vibrant Violet with a crisp 2px underline for active states).
- [ ] **Styling**: Add smooth CSS fade-in transitions for the gallery items and logo hover states.

### Phase 4: Production Transition & Deployment
- [ ] **Database Migration**: Setup a Supabase project and create the `portfolio_items` table.
- [ ] **Storage Migration**: Upload all actual portfolio media assets to Supabase Storage and configure public read-only Row Level Security (RLS) policies.
- [ ] **Logic Migration**: Link the Supabase JS client via CDN in `index.html`. In `app.js`, swap out the local `fetch('data.json')` call with the Supabase JS Client query to fetch live data.
- [ ] **Deployment**: Initialize a Git repository, commit the codebase, and push to your provider (e.g., GitHub).
- [ ] **Hosting**: Connect the repository to Vercel, securely add the Supabase API keys to the environment variables, and trigger the production build.