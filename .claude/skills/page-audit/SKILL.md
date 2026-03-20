---
name: page-audit
description: Audit all HTML pages for consistency issues — missing meta tags, placeholder values, broken internal links, and design-system deviations. Run when adding a new page or doing a quality pass.
disable-model-invocation: true
allowed-tools: Read, Grep, Glob
---

Audit all HTML pages in the project root. Active pages are: `index.html`, `recipes.html`, and any new `*.html` files (exclude `index-legacy.html`).

## Checklist — run for each page

### Meta & Analytics
- [ ] `<title>` present and descriptive
- [ ] `<meta name="description">` present
- [ ] `<meta property="og:*">` Open Graph tags present
- [ ] GA4 ID is `G-FZ3J83K6JX` (not the placeholder `G-XXXXXXXXXX`)
- [ ] No other placeholder values (`YOUR_EMAILJS_PUBLIC_KEY`, `TODO`, `FIXME`)

### Fonts & Design System
- [ ] Google Fonts loaded: Bebas Neue, Cormorant Garamond, DM Sans
- [ ] CSS custom properties use the correct palette (`--g:#1B3F20`, `--gold:#C49A20`, `--bg:#EEF2E8`, etc.)
- [ ] No hard-coded colour values that should use CSS variables

### Navigation & Links
- [ ] Nav links point to existing anchors or pages
- [ ] Internal `href` links to other HTML pages are valid (file exists)
- [ ] WhatsApp link uses correct URL: `https://wa.me/message/OGER5OPHOB7NC1`

### Accessibility basics
- [ ] All `<img>` tags have `alt` attributes
- [ ] Page has exactly one `<h1>` (or logical heading hierarchy)
- [ ] `<html lang="en">` set (or `lang="ta"` where appropriate)

### Known issues (from CLAUDE.md)
- Secondary logo has trailing space in filename: `akaththi-farms-secondary-logo-full-color-300dpi .png` — check if referenced and if so flag
- Copyright year hardcoded as `2025` — flag if found

## Output format

For each page, output a table of pass/fail results. List all failures with file:line references. Summarise at the end with a total count.
