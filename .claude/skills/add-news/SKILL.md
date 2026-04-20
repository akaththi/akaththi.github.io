---
name: add-news
description: Add a new news article or farm dispatch to the Akaththi Farms site. Registers an entry in the news data file. Use when the user wants to publish a harvest update, science post, or company announcement.
argument-hint: "<article-title>"
allowed-tools: Read, Write, Edit, Glob, Grep
---

Add a new news article to the Akaththi Farms site. The user may provide the title in $ARGUMENTS. Gather any missing details:
- Title (e.g. "Our first Pink Oyster flush")
- Slug (kebab-case, e.g. `first-pink-oyster-flush`)
- Tag / category: `Harvest` | `Science` | `Company` | `Workshop` | `Community` (or a new one if appropriate)
- Date string (e.g. "Apr 2026")
- Excerpt — 1–2 sentences shown on the news card
- Article body — can be inline HTML or a separate Markdown file

## Decide: inline HTML or Markdown file?

**Use `type: 'html'` with inline `body`** when:
- The article is short (2–5 paragraphs)
- No complex formatting needed

**Use `type: 'md'` with an external file** when:
- The article is long or the user wants to write it in Markdown
- It will be edited frequently

## Step 1 — Register in the data file

Read `news/_data/news.js` first. Add one object at the **top** of the `NEWS` array (newest first):

### For inline HTML articles:
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

Supported HTML tags in `body`: `<p>`, `<h2>`, `<h3>`, `<ul>`, `<ol>`, `<li>`, `<blockquote>`, `<em>`, `<strong>`, `<a href="..." target="_blank" rel="noopener">`. Keep markup clean — no inline styles.

Existing tags in use: `Harvest`, `Science`, `Company`. Add new ones freely if they fit (e.g. `Workshop`, `Community`, `Product`).

### For Markdown articles:
```js
{
  slug: '<slug>',
  title: '<Article Title>',
  tag: '<Tag>',
  date: '<Mon YYYY>',
  excerpt: '<1–2 sentence teaser>',
  type: 'md'
}
```

Then create `news/<slug>.md` with the article content in standard Markdown.

## Step 2 — Confirm

Tell the user:
- The article is live at `news/article.html?slug=<slug>`
- It appears on `news/index.html` automatically (data-driven, no HTML edits needed)
- If `type: 'md'`, remind them to create `news/<slug>.md` if you haven't already
- The article does NOT automatically appear in the `#news` teaser on `index.html` — if they want it featured there, they'll need to add a card to that section manually
