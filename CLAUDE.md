# Akaththi Farms Website — Project Guide

## What This Is

Premium editorial-style GitHub Pages site for **Akaththí Farms**, an urban mushroom and microgreens farm in Tamil Nadu, India. Live at `akaththifarms.com`.

## Brand & Mission

We believe food is more than just something you eat — it's a connection to life, to nature, and to the people who grow it. In a world that feels increasingly disconnected, we exist to bring food closer to its roots. Our purpose is simple: to nourish not just bodies, but relationships with the earth and each other. We do this by growing fresh, local produce that inspires people to live healthier, more sustainable lives.

**We are Wild at Heart.**

- **Akaththi Farms** is the brand name — logo, identity, search, contracts
- **Wild at Heart** is the brand soul — the feeling that animates the voice, design, and copy. It doesn't need to appear everywhere, but the site should *feel* it

## Target Audience

- **B2B** — restaurants, chefs, cafes
- **D2C** — organic and health-conscious consumers, explorers, home cooks
- **B2B2C** — premium grocery and lifestyle stores

## Site Goals

1. **Build trust** — visitor leaves believing Akaththi is a credible, honest grower (science-backed, locally grown, transparent)
2. **Spark curiosity** — make them want to try a variety they've never heard of
3. **Drive action** — D2C: order via WhatsApp; B2B: get in touch
4. **Inspire exploration** — recipes, varieties, and the farm story keep them browsing
5. **Create affinity** — the brand stays with them long after they leave

## Tone & Voice

Inspired by **Bowery Farming's** editorial brand style — but warmer and more rooted:

- Short, declarative sentences. Bold statements. No fluff
- Science-forward but never clinical — make farming feel aspirational and trustworthy
- Premium but honest — not a luxury brand, not a commodity. Earthy-premium
- Less "lab", more "forest floor" — wild, grounded, alive
- Copy should feel like it was written by someone who actually grows things and cares deeply about food

## Pages

- `index.html` — main landing page (full site)
- `recipes.html` — recipes listing page with filter UI
- `index-legacy.html` — archived old design (do not edit)

## Tech Stack

- Pure HTML + inline CSS per file — no build tools, no external CSS files
- `styles.css` exists but is **no longer used** (replaced by inline `<style>` blocks)
- Google Fonts (CDN): Bebas Neue (display), Cormorant Garamond (italic accents), DM Sans (body)
- EmailJS (contact form) — needs real keys configured (see TODOs below)
- GA4 — needs real Measurement ID configured (see TODOs below)

## Design Philosophy

**Mobile-first.** Design and test on small screens first, then enhance for larger viewports.

## Design System

- **Colors**: `--g:#1B3F20` (deep forest green), `--g2:#2E6636` (mid forest green), `--g3:#4A7C59` (light green accent), `--bg:#EEF2E8` (warm cream), `--w:#FFFFFF`, `--ink:#0E1A0F` (near-black green), `--mid:#5A7062` (muted green-grey)
- **Display font**: Bebas Neue — headings, nav, labels
- **Accent font**: Cormorant Garamond italic — poetic/italic phrases
- **Body font**: DM Sans — all body text
- **Layout**: Full-width sections, max-width 1200–1260px centered, 52px side padding (20px mobile)
- **Responsive breakpoints**: 980px and 580px
- **Animations**: `slideUp (su)`, `mushroom entry (mu)`, `fade (fi/fu)`, scroll `.reveal` class

## Page Sections — index.html

1. Fixed nav (logo, links, Shop modal trigger, Get in Touch CTA)
2. Hero — 4-slide carousel with progress bar, dot/arrow controls
3. Three Pillars (Good Food / Good Science / Honestly Grown)
4. Intro Statement
5. `#grow` — How We Grow (dark green, 3-card grid)
6. `#varieties` — Mushroom varieties grid (4+3 layout)
7. Pull Quote
8. `#kaani` — KAANI Intelligence (2-col layout)
9. CTA section
10. Recipes teaser (3 cards → links to recipes.html)
11. `#news` — Journal/News (3 cards)
12. Instagram grid placeholder
13. Footer + bottom bar

## Mushroom Varieties

- **Current**: Elm Oyster, Pink Oyster, Golden Oyster, Grey Oyster
- **Coming soon**: King Oyster, Pioppino, Shimeji

## Modals

- **Shop modal** — opens WhatsApp link: `https://wa.me/message/OGER5OPHOB7NC1`
- **Contact form modal** — uses EmailJS; fields: name, email, phone, message

## Pending TODOs (from source code comments)

- `index.html` — Replace `YOUR_EMAILJS_PUBLIC_KEY` with real EmailJS public key
- `index.html` — Set EmailJS Service ID and Template ID in contact form JS

## Known Issues

- `styles.css` is now an orphaned file — no longer linked in any HTML
- `images/akaththi-farms-illustration-300dpi.png` — not used in either HTML file
- Secondary logo filename still has a trailing space: `akaththi-farms-secondary-logo-full-color-300dpi .png`
- Copyright year hardcoded as `2025` in both `index.html` and `recipes.html` footers
- Nav links hidden on mobile (≤980px) — no hamburger menu implemented

## Contact

- Phone: +91 80564 02434
- Email: `connect@akaththifarms.com`
- WhatsApp shop: <https://wa.me/message/OGER5OPHOB7NC1>
- Linktree: <https://linktr.ee/akaththi>
