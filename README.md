# Akaththí Farms — Website

> **Good Food. Good Science. Honestly Grown.**

Official website for **Akaththí Farms**, an urban mushroom farm based in Tamil Nadu, India. Live at [akaththifarms.com](https://akaththifarms.com).

---

## Overview

A premium, editorial-style static site built entirely with pure HTML and inline CSS — no build tools, no frameworks, no external CSS files. Deployed via GitHub Pages.

The design philosophy is inspired by brands like Bowery Farming but warmer and more grounded — earthy-premium, science-forward, and rooted in Tamil Nadu. The brand soul is captured in two words: **Wild at Heart**.

---

## Tech Stack

| Concern | Choice |
|---|---|
| Markup | Pure HTML5 |
| Styling | Inline `<style>` per page (no shared CSS) |
| Fonts | Google Fonts CDN — Bebas Neue, Cormorant Garamond, DM Sans |
| Analytics | Google Analytics 4 (`G-FZ3J83K6JX`) |
| Contact form | [EmailJS](https://emailjs.com) (keys need to be configured — see TODOs) |
| Hosting | GitHub Pages + custom domain via `CNAME` |
| Ordering | WhatsApp deep link (`wa.me/message/OGER5OPHOB7NC1`) |

> `styles.css` exists in the repo but is **not linked** in any page — it is an archived file from the legacy design.

---

## Project Structure

```
akaththi.github.io/
├── index.html              # Main landing page
├── produce.html            # Mushroom varieties catalogue
├── farms.html              # How we grow / POD technology
├── vision.html             # Brand story & mission
├── company.html            # Company info & team
├── join.html               # Careers / STEP internships
├── find.html               # Find us / partner inquiry
├── recipes.html            # Recipes listing with filter UI
├── footer.html             # Shared footer (fetched via JS)
├── index-legacy.html       # Archived v1 design — do not edit
├── CNAME                   # akaththifarms.com
├── robots.txt
├── sitemap.xml
│
├── images/                 # All site images and logos
│   ├── akaththi-farms-primary-logo-300dpi.png
│   ├── akaththi-farms-illustration-300dpi.png
│   ├── akaththi-farms-icon.png
│   ├── elm-oyster.png
│   ├── pink-oyster.png
│   ├── golden-oyster.png
│   ├── king-oyster.png
│   ├── pioppino.png
│   ├── shimeji.png
│   ├── mushroom.webp
│   └── tamil-script.jpg
│
├── recipes/
│   ├── _data/
│   │   ├── recipes.js      # Master recipe registry
│   │   └── featured.js     # Featured recipe IDs
│   ├── images/             # Recipe photography
│   ├── south-indian/
│   ├── continental/
│   ├── indo-chinese/
│   ├── japanese-korean/
│   ├── north-indian/
│   ├── rolls-grills-bbq/
│   ├── chef-specials/
│   └── customer-stories/
│
├── news/
│   ├── index.html          # News listing page
│   ├── article.html        # Single article renderer (slug-based)
│   └── _data/
│       └── news.js         # Master news registry
│
└── jobs/
    ├── *.html              # Individual STEP internship pages
    └── _data/
        └── jobs.js         # Master jobs registry
```

---

## Design System

### Colors
| Token | Value | Use |
|---|---|---|
| `--g` | `#1B3F20` | Deep forest green — primary |
| `--g2` | `#2E6636` | Mid green — interactive / hover |
| `--g3` | `#4A7C59` | Light green — accents |
| `--bg` | `#EEF2E8` | Warm cream — section backgrounds |
| `--w` | `#FFFFFF` | White sections |
| `--ink` | `#0E1A0F` | Near-black body text |
| `--mid` | `#5A7062` | Muted green-grey — secondary text |
| `--gold` | `#C49A20` | Gold — labels, highlights |
| `--rule` | `rgba(27,63,32,.1)` | Divider lines |

### Typography
| Role | Font |
|---|---|
| Display / Headings / Nav | **Bebas Neue** |
| Italic / Poetic accents | **Cormorant Garamond** italic |
| Body / UI | **DM Sans** |

### Layout
- Full-width sections; content max-width **1200–1260px**, centered
- Side padding: **52px** desktop → **20px** mobile
- Responsive breakpoints: **980px** and **580px**

### Animations
| Class / Keyframe | Effect |
|---|---|
| `.reveal` | Scroll-triggered fade + slide up (IntersectionObserver) |
| `su` | Slide up entry (hero title) |
| `mu` | Mushroom image entry (scale + slide) |
| `fu` | Fade up (labels, sub-copy) |
| `fi` | Fade in |
| `logo-float` | Gentle float loop on nav logo |

---

## Pages

### `index.html` — Landing Page
The full brand experience in one scrollable page:

1. **Fixed Nav** — logo center, links left/right, mobile hamburger overlay
2. **Hero** — full-height dark green section with mushroom image and CTA
3. **Hero Carousel** — 3-slide auto-advancing carousel (7s) with progress bar, dot controls, arrow nav, and keyboard support
4. **Three Pillars** — Good Food / Good Science / Honestly Grown
5. **Intro Statement** — brand vision copy
6. **How We Grow** (`#grow`) — Spawn → Grow → Track process steps
7. **Produce Grid** (`#produce`) — 3 available varieties (Elm, Pink, Golden Oyster)
8. **Pull Quote** — G. Nammalvar quote
9. **KAANI Intelligence** (`#kaani`) — Node/Edge/Cloud architecture spec
10. **Partner CTA** (`#partner`) — for restaurants and chefs
11. **Recipes Teaser** — 3 featured recipe cards linking to `recipes.html`
12. **News** (`#journal`) — 3 latest dispatches from the farm
13. **Instagram Grid** — placeholder (hidden by feature flag)
14. **Shop Modal** — WhatsApp order link
15. **Contact Modal** — EmailJS form

**Feature flags** (in the inline `<script>` block):
```js
const FEATURES = {
  hero:       true,
  howWeGrow:  true,
  produce:    true,
  kaani:      true,
  partnerCta: true,
  recipes:    true,
  news:       true,
  instagram:  false,  // toggle to show/hide Instagram section
};
```

### `produce.html` — Mushroom Varieties
Full catalogue of all varieties:

| # | Variety | Status |
|---|---|---|
| 01 | Elm Oyster (*Hypsizygus ulmarius*) | Available |
| 02 | Pink Oyster (*Pleurotus djamor*) | Available |
| 03 | Golden Oyster (*Pleurotus citrinopileatus*) | Available |
| 04 | King Oyster (*Pleurotus eryngii*) | Coming Soon |
| 05 | Pioppino (*Cyclocybe aegerita*) | Coming Soon |
| 06 | Shimeji (*Hypsizygus tessellatus*) | Coming Soon |

Each card uses a product image from `./images/[variety].png` inside `.vc-img > .vc-svg`.

### `farms.html` — How We Grow
Covers the POD micro-farm architecture, substrate sourcing (crop waste / rice straw), and the Polichalur R&D site.

### `vision.html` — Brand Vision
Brand manifesto and sustainability narrative. Wild at Heart philosophy.

### `company.html` — Company
Team, incubation under Crescent CIIC (Vandalur), and company background.

### `join.html` — Careers
STEP internship programme listing. Pulls from `jobs/_data/jobs.js`.

**Available STEP roles:** Mycology, Brand & Social Media, Automation, Embedded & IoT, Marketing, Finance, Sales, Supply Chain.

### `find.html` — Find Us
D2C and B2B partner contact. WhatsApp and location info.

### `recipes.html` — Recipes
Full recipe library with filter UI (by cuisine, variety, time, difficulty). Pulls from `recipes/_data/recipes.js`.

**Cuisines:** South Indian · Continental · Indo-Chinese · Japanese/Korean · North Indian · Rolls/Grills/BBQ · Chef Specials · Customer Stories

### `news/article.html` — Article Renderer
Single article page. Accepts `?slug=` query param. Pulls from `news/_data/news.js`. Supports both inline HTML (`type: 'html'`) and Markdown (`type: 'md'`) article bodies.

---

## Data Registries

All content is driven by plain JS data files — no CMS required.

### `recipes/_data/recipes.js`
```js
{
  id:           "kalan-milagu-varuval",
  title:        "Kalan Milagu Varuval",
  cuisine:      "south-indian",
  cuisineLabel: "South Indian",
  variety:      ["grey", "elm"],
  varietyLabel: "Grey Oyster / Elm Oyster",
  time:         20,            // minutes
  difficulty:   "Easy",
  serves:       2,
  desc:         "...",
  img:          "recipes/images/...",
  imgFallback:  "linear-gradient(...)",  // shown if image missing
  file:         "recipes/south-indian/kalan-milagu-varuval.html",
  section:      "grid",        // "grid" | "chef" | "customer"
  tags:         ["quick","dry","spicy"]
}
```

### `news/_data/news.js`
```js
{
  slug:    "golden-oyster-first-harvest",
  title:   "Our first Golden Oyster harvest",
  tag:     "Harvest",
  date:    "Feb 2025",
  excerpt: "...",
  type:    "html",   // "html" (use body) | "md" (fetch slug.md)
  body:    `<p>...</p>`
}
```

### `jobs/_data/jobs.js`
```js
{
  id:           "mycology-step-intern",
  title:        "Mycology",
  role:         "Spawn production, substrate R&D, ...",
  department:   "Science",
  badge:        "STEP Intern",
  location:     "Chennai (Onsite)",
  duration:     "1 Month",
  compensation: "Unpaid",
  file:         "jobs/mycology-step-intern.html"
}
```

---

## Adding Content

### Add a Recipe
1. Add an entry to `recipes/_data/recipes.js`
2. Create the HTML file in the appropriate `recipes/[cuisine]/` folder
3. Drop the image in `recipes/images/[cuisine]/`

### Add a News Article
1. Add an entry to `news/_data/news.js`
2. For `type: 'md'` — drop a `news/[slug].md` file
3. For `type: 'html'` — include the `body` HTML string inline in the registry

### Add a Job
1. Add an entry to `jobs/_data/jobs.js`
2. Create `jobs/[id].html` following the existing page structure

---

## Pending TODOs

| File | TODO |
|---|---|
| `index.html` | Replace `YOUR_EMAILJS_PUBLIC_KEY` with real EmailJS public key |
| `index.html` | Replace `YOUR_SERVICE_ID` with EmailJS Service ID |
| `index.html` | Replace `YOUR_TEMPLATE_ID` with EmailJS Template ID |

EmailJS template must include variables: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{message}}`.

---

## Shared Footer

`footer.html` is fetched and injected by every page using:
```js
fetch('footer.html').then(r => r.text()).then(h => {
  document.getElementById('site-footer').outerHTML = h;
});
```
Edit `footer.html` once to update the footer across the entire site.

---

## Contact & Links

| | |
|---|---|
| Website | [akaththifarms.com](https://akaththifarms.com) |
| Email | connect@akaththifarms.com |
| Phone | +91 80564 02434 |
| WhatsApp | [wa.me/message/OGER5OPHOB7NC1](https://wa.me/message/OGER5OPHOB7NC1) |
| Instagram | [@akaththifarms](https://www.instagram.com/akaththifarms) |
| Linktree | [linktr.ee/akaththi](https://linktr.ee/akaththi) |

**Registered Office:** 5/419, Erukankadu Street, Pappampadi, Edappadi, Salem — 636306, Tamil Nadu, India

**R&D & Cultivation Hub:** No.2, First Floor, Narasimman Nagar, Polichalur, Thomas Malai Block, Chengalpattu District — 600074, Tamil Nadu, India

**Incubating With:** Crescent Innovation and Incubation Council (CIIC), B.S. Abdur Rahman Crescent Institute of Science and Technology, Vandalur, Chennai — 600048

---

*Akaththí Farms — Wild at Heart*
