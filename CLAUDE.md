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

**Top-level**
- `index.html` — main landing page
- `produce.html` — mushrooms + microgreens product catalogue
- `find.html` — store locator + partner/order form
- `farms.html` — how we grow + KAANI + farm details
- `vision.html` — brand story and mission
- `company.html` — about the team
- `join.html` — careers / join us
- `recipes.html` — recipes listing with filter UI

**Subdirectories**
- `recipes/<category>/<slug>.html` — individual recipe pages
- `jobs/<slug>.html` — individual job listing pages
- `news/index.html` + `news/article.html` — journal / news

**Partials (loaded via fetch)**
- `nav.html` — shared navigation (desktop + mobile)
- `footer.html` — shared footer

**Do not edit**
- `index-legacy.html` — archived v1 design

## Platform Constraint — GitHub Pages Only

**This site must remain strictly compatible with GitHub Pages.** That means:

- No server-side code, no Node.js, no build tools, no frameworks, no npm
- No dynamic routing, no SSR, no backend — pure static files served as-is
- All features must work with `file://` or a plain HTTP server (Python `http.server` is fine for local dev)
- JS is allowed but only for progressive enhancement (nav toggle, reveal animation, EmailJS, GA4)
- `fetch()` for HTML partials (nav, footer) is acceptable — GitHub Pages serves static files correctly

## Tech Stack

- Pure HTML pages + **shared `styles.css`** for design system, nav, footer, buttons, utilities
- Per-page `<style>` blocks only for page-specific layout and section styles
- `nav.html` partial loaded via `fetch()` on every page (same pattern as `footer.html`)
- Google Fonts (CDN): Bebas Neue (display), Cormorant Garamond (italic accents), DM Sans (body)
- EmailJS (contact form) — needs real keys configured (see TODOs below)
- GA4 — Measurement ID: `G-FZ3J83K6JX`

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

## Produce

**Mushrooms — available now**
- Elm Oyster (*Hypsizygus ulmarius*) — firm, meaty, high heat
- Pink Oyster (*Pleurotus djamor*) — vivid coral, smoky/bacon aroma
- Golden Oyster (*Pleurotus citrinopileatus*) — fruity, nutty, rare in India

**Mushrooms — coming soon (in research)**
- King Oyster, Pioppino, Shimeji

**Microgreens — upcoming**
- Not yet available; positioned as ultrafresh, custom-grown to order
- Target: restaurants, cafes, homes
- CTA on `produce.html` and `index.html` links to `find.html#partner` ("Register Interest")

## Retail Stores (find.html)

| Location | Store |
|---|---|
| Anna Nagar, Chennai | MK Cheese & Gourmet |
| Anna Nagar, Chennai | Dhanyam Organic Store — Anna Nagar |
| Adyar, Chennai | Dhanyam Organic Superstore |
| T Nagar, Chennai | Dhanyam Organic Store — T Nagar |
| R.A. Puram, Chennai | Dhanyam Organic Store — R.A. Puram |
| Neelankarai, Chennai | Dhanyam Organic Store — Neelankarai |
| ECR, Injambakkam, Chennai | MK Cheese & Gourmet |

Note: "JK Cheese & More" was rebranded to "MK Cheese & Gourmet" (Sept 2026). Its Anna Nagar and ECR/Injambakkam outlets use the new name; the Nungambakkam outlet has closed and was removed from the list.

## How to Add a Recipe

Use the `add-recipe` skill (`.claude/skills/add-recipe/SKILL.md`) — it walks through all steps below.

1. Create `recipes/<category>/<slug>.html` as a **complete, standalone page** (own `<title>`, canonical, OG/Twitter tags, `Recipe` + `BreadcrumbList` JSON-LD) — not a bare fragment. Each recipe must be independently indexable by Google, not share one canonical URL with every other recipe.
2. Inside that page, keep a `<div class="recipe-body">` block with the ingredients/method content: `<div class="panel-section-title">Ingredients</div>` → `<ul class="panel-ingredients">` → `<div class="panel-section-title">Method</div>` → `<ol class="panel-steps">` → optional `<div class="panel-chef-note">`. `recipes.html`'s slide-in panel fetches this same file and extracts `.recipe-body` to render in-page — don't rename that class.
3. Register the recipe as an object in `recipes/_data/recipes.js` (`RECIPES` array) — this drives the grid/panel/filter UI on `recipes.html`.
4. Add a `ListItem` entry to `recipes.html`'s own `ItemList` JSON-LD, and a `<url>` entry to `sitemap.xml`.
5. Categories available: `south-indian`, `north-indian`, `indo-chinese`, `continental`, `japanese-korean`, `rolls-grills-bbq`, `chef-specials`, `customer-stories`
6. Also add a teaser card in `index.html` recipes section if it's a featured recipe, and its `id` to `recipes/_data/featured.js` for the showreel

## How to Add a Job

1. Create `jobs/<role>-step-intern.html` — copy an existing jobs page as template
2. Page structure: job hero (dark green) → details bar (near-black) → 2-col content grid → single-col wide section → apply section
3. Key CSS classes: `.job-hero`, `.job-details-bar`, `.jd-item`, `.job-content`, `.job-content-inner`, `.jc-h`, `.jc-list`, `.jc-p`, `.job-content-wide`, `.sec-apply`, `.apply-h`, `.apply-subject`, `.back-link`
4. Add the job card to `join.html` — find the openings grid and copy an existing card
5. Use `<link rel="stylesheet" href="/styles.css">` and `<script src="/nav-loader.js"></script>` (root-relative — works from `jobs/` subdirectory on GitHub Pages)

## How to Add a News Article

Use the `add-news` skill (`.claude/skills/add-news/SKILL.md`) — it walks through all steps below.

1. Create `news/<slug>.html` as a **complete, standalone page** (own `<title>`, canonical, OG/Twitter tags, `NewsArticle` + `BreadcrumbList` JSON-LD) — not a shared template read via `?slug=`. Each article must be independently indexable, not share one canonical URL with every other article. `news/article.html` is now only a legacy redirect shim for old `?slug=` links — don't add new content there.
2. Register the article as an object in `news/_data/news.js` (`NEWS` array, newest first) — this drives the `news/index.html` listing and filter buttons.
3. Add a `ListItem` entry to `news/index.html`'s `ItemList` JSON-LD, and a `<url>` entry to `sitemap.xml`.
4. Also add a card to the `#news` section on `index.html` if it should appear in that homepage teaser.

## How to Add a Store Location (find.html)

Find the `.stores-areas` div. Copy an existing `.sa` row:
```html
<div class="sa">
  <div class="sa-loc">Area Name<br>Chennai</div>
  <div class="sa-cards">
    <a href="https://maps.app.goo.gl/..." target="_blank" rel="noopener" class="sc">
      <div class="sc-brand">Store Name</div>
      <span class="sc-dir">Get Directions <svg ...></svg></span>
    </a>
  </div>
</div>
```
Stores with multiple outlets in the same area share one `.sa` row with multiple `.sc` cards inside `.sa-cards`.

## Shared Files — Maintenance Rules

- **`styles.css`** — only add CSS here if it is used on 2+ pages. Do not add page-specific styles here.
- **`nav.html`** — uses root-relative hrefs (`/produce.html`). Works correctly from any subdirectory on GitHub Pages.
- **`footer.html`** — same. All pages load it via `fetch('/footer.html')`.
- **`nav-loader.js`** — injects nav, sets active link by matching `window.location.pathname` to nav hrefs, and attaches burger toggle. Do not duplicate burger JS in page scripts.
- Every page must include `<link rel="stylesheet" href="/styles.css">` and `<script src="/nav-loader.js"></script>`.

## Page Template (new top-level page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Page Title — Akaththí Farms</title>
<meta name="description" content="...">
<link rel="canonical" href="https://www.akaththifarms.com/page.html">
<!-- OG / Twitter meta here -->
<meta name="theme-color" content="#1B3F20">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-FZ3J83K6JX"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-FZ3J83K6JX');</script>
<link rel="stylesheet" href="/styles.css">
<style>
/* page-specific CSS only */
</style>
</head>
<body>
<div id="site-nav"></div>

<!-- page content here -->

<div id="site-footer"></div>
<script>fetch('/footer.html').then(r=>r.text()).then(h=>{document.getElementById('site-footer').outerHTML=h;});</script>
<script>
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
</script>
<script src="/nav-loader.js"></script>
</body>
</html>
```

## Modals

- **Shop modal** — opens WhatsApp link (`openShop()`, wired to `#shopNowBtn`)
- There is no contact form modal — it used EmailJS and was removed as dead code (the keys were never configured). WhatsApp and the `find.html` partner form are the only contact paths now.

## Known Issues

- `images/akaththi-farms-secondary-logo-full-color-300dpi .png` (trailing space in the filename) still exists on disk, but only because `index-legacy.html` references it — and that page is explicitly frozen (see "Do not edit" above). Every live page uses the correctly-named `akaththi-farms-secondary-logo-full-color-300dpi.png` via `footer.html`. Don't rename or delete the space-suffixed file unless `index-legacy.html` is also being retired.

## Contact

- Phone: +91 80564 02434
- Email: `connect@akaththifarms.com`
- WhatsApp shop: <https://wa.me/message/OGER5OPHOB7NC1>
- Linktree: <https://linktr.ee/akaththi>
