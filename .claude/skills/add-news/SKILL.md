---
name: add-news
description: Add a new news article or farm dispatch to the Akaththi Farms site. Creates a standalone indexable article page and registers it in the news data file. Use when the user wants to publish a harvest update, science post, or company announcement.
argument-hint: "<article-title>"
allowed-tools: Read, Write, Edit, Glob, Grep
---

Add a new news article to the Akaththi Farms site. The user may provide the title in $ARGUMENTS. Gather any missing details:
- Title (e.g. "Our first Pink Oyster flush")
- Slug (kebab-case, e.g. `first-pink-oyster-flush`)
- Tag / category: `Harvest` | `Science` | `Company` | `Workshop` | `Community` (or a new one if appropriate)
- Date string (e.g. "Apr 2026")
- Excerpt — 1–2 sentences shown on the news card
- Article body — HTML content (paragraphs, headings, lists, blockquotes)

## Step 1 — Create the standalone article page

Each article lives at `news/<slug>.html` as a **complete, independently indexable page** — own `<title>`, meta description, canonical URL, OG/Twitter tags, and `NewsArticle` + `BreadcrumbList` JSON-LD — not a shared template read via `?slug=`. This matters for SEO: every article needs its own crawlable URL instead of funnelling through one canonical (`news/article.html`) shared by every post.

Copy the full structure of an existing article page (e.g. `news/golden-oyster-first-harvest.html`) as your template, then adjust:
- `<title>`, meta description, canonical, OG/Twitter tags
- The JSON-LD `NewsArticle` object (`headline`, `description`, `datePublished`/`dateModified` as `YYYY-MM-01` from the display date, `articleSection` from the tag, `mainEntityOfPage`) and `BreadcrumbList` (Home → News → this article's title/URL)
- The hero (`article-tag`, `article-date`, `<h1>`, hook paragraph)
- The `.article-body-inner` content — plain HTML: `<p>`, `<h2>`, `<h3>`, `<ul>`, `<ol>`, `<li>`, `<blockquote>`, `<em>`, `<strong>`, `<a href="..." target="_blank" rel="noopener">`. Keep markup clean — no inline styles.

Use `/images/akaththi-farms-primary-logo-300dpi.png` as the JSON-LD `image` / OG image unless a real article-specific photo exists on disk — don't reference a photo path that doesn't exist as a file.

Existing tags in use: `Harvest`, `Science`, `Company`. Add new ones freely if they fit (e.g. `Workshop`, `Community`, `Product`).

**Important — factual accuracy in body copy:** this site's fulfillment model is grow-to-order (pre-order → 2–5 days to harvest → 2–6 hours delivery from cutting), not same-day or instant delivery. Never write "same-day," "instant," or "on-demand" delivery language into an article body — it contradicts the site's actual claims elsewhere and has been a real bug before.

## Step 2 — Register in the data file

Read `news/_data/news.js` first. Add one object at the **top** of the `NEWS` array (newest first). This data still drives the `news/index.html` listing page and its filter buttons — it does not generate the standalone page, which you author directly in Step 1.

```js
{
  slug: '<slug>',
  title: '<Article Title>',
  tag: '<Tag>',
  date: '<Mon YYYY>',
  excerpt: '<1–2 sentence teaser>',
  type: 'html',
  body: `
    <p>First paragraph...</p>
    <h2>Section heading</h2>
    <p>More content...</p>
    <blockquote>Optional pull quote.</blockquote>
  `
}
```

Keep the `body` field here identical to the `.article-body-inner` HTML you wrote into the standalone page in Step 1 — it's kept in the registry as the single source of truth for the content, even though the standalone page is what actually gets crawled and rendered.

## Step 3 — Add to the news index ItemList and sitemap

`news/index.html` carries an `ItemList` JSON-LD block in its `<head>` — add a new `{"@type": "ListItem", ...}` entry with the next `position` number and bump `numberOfItems` by 1.

Add a `<url>` entry for the new page to `sitemap.xml` in the News section, with today's date as `lastmod`.

## Step 4 — Confirm

Tell the user:
- The article is live at `news/<slug>.html` — independently indexable, with its own title/canonical/NewsArticle schema
- It appears on `news/index.html` automatically (card rendering is data-driven from `news/_data/news.js`)
- Added to `news/index.html`'s `ItemList` schema and `sitemap.xml`
- The article does NOT automatically appear in the `#news` teaser on `index.html` — if they want it featured there, they'll need to add a card to that section manually
- Old-style links to `news/article.html?slug=<slug>` still work — that file now redirects to `news/<slug>.html` client-side
