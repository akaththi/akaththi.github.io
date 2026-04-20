---
name: check-todos
description: List all TODO and FIXME comments across the site's HTML files. Use when the user wants to see what's still pending or incomplete in the codebase.
disable-model-invocation: true
allowed-tools: Grep, Read
---

Find and list all TODO/FIXME/PLACEHOLDER comments in the project's HTML files.

## Steps

1. Use Grep to search for `TODO|FIXME|PLACEHOLDER|G-XXXXXXXXXX|YOUR_EMAILJS` across all `.html` files
2. Group results by file
3. For each hit, show the line number, the comment text, and a one-line description of what needs to be done

## Known tracked TODOs (from CLAUDE.md)

These are the known pending items — confirm whether they still exist in the source:

| File | Line | What |
|------|------|------|
| `index.html` | ~358 | Replace `G-XXXXXXXXXX` with real GA4 ID → `G-FZ3J83K6JX` |
| `index.html` | ~370 | Replace `YOUR_EMAILJS_PUBLIC_KEY` with real EmailJS public key |
| `index.html` | — | Set EmailJS Service ID and Template ID in contact form JS |
| `recipes.html` | ~10 | Replace `G-XXXXXXXXXX` with GA4 ID → `G-FZ3J83K6JX` |

Present the full grep results alongside the known list. Flag any NEW TODOs not in the known list.
