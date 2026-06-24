# Aeon — Cinematic Space-Travel Landing Page

A single-page landing site with two full-height sections (Hero + Capabilities),
both driven by looping background videos with a custom JS crossfade, a shared
**liquid-glass** design system, and **Framer Motion** entrance animations.

Everything runs from the CDN — no build step, no `node_modules`.

## Running locally

The components are loaded as external `<script type="text/babel">` files, so the
page **must be served over HTTP** (opening `index.html` via `file://` will fail
because Babel can't fetch the component files).

```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000
```

Any static server works (`npx serve`, `php -S`, VS Code Live Server, etc.).

## Project structure

```
index.html              Shell: CDN scripts, Tailwind config, liquid-glass CSS, #root
js/
  content.js            ← ALL copy, media URLs and links (edit this for real data)
  icons.babel.js        Inline SVG icons (ArrowUpRight, Play, Clock, Globe, Material)
  FadingVideo.babel.js  Looping <video> with rAF-driven crossfade (no CSS transitions)
  BlurText.babel.js     Word-by-word blur-in headline (IntersectionObserver + Motion)
  Navbar.babel.js       Fixed top nav (logo · glass pill of links + CTA · spacer)
  Hero.babel.js         Section 1
  Capabilities.babel.js Section 2
  App.babel.js          Roots the app and mounts to #root
```

Each component file is wrapped in an IIFE and exports through `window.X = X`, so
they share state through the global object without polluting / colliding in the
global lexical scope. They are loaded in dependency order in `index.html`.

## Swapping in real data

All text, video URLs, navigation links, stats, partner names and feature-card
content live in **`js/content.js`** under `window.SITE_CONTENT`. Change the
strings there and the layout/animation components pick them up automatically —
no need to touch the `*.babel.js` files.

Icon keys in the data map to the inline SVGs:

- `hero.stats[].icon` → `"clock"` or `"globe"`
- `capabilities.cards[].icon` → `"image"`, `"movie"` or `"lightbulb"`

## Tech stack (pinned, CDN-only)

- Tailwind (browser JIT) — `font-heading` (Instrument Serif), `font-body` (Barlow), bare `rounded` → pill
- React 18.3.1 + ReactDOM 18.3.1 (UMD dev builds)
- Babel Standalone 7.29.0 (`type="text/babel"`)
- Framer Motion 11.11.17 (`window.Motion`)

## Design system

Two glass utilities defined in `index.html`:

- `.liquid-glass` — subtle blur(4px), for nav / chips / cards
- `.liquid-glass-strong` — heavy blur(50px), for the primary CTA

Both render a gradient hairline border via a masked `::before`. Backgrounds are
full-bleed video with **no dark overlay** — all contrast comes from the glass
chrome. Everything is white text on black; no gradients, no color.
