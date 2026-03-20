---
name: deploy
description: Push the current branch to origin/main to trigger a GitHub Pages deployment of the Akaththi Farms site. Use when the user says "deploy", "push", "go live", or "publish".
disable-model-invocation: true
---

Deploy the site to GitHub Pages by pushing to `main`.

## Steps

1. Run `git status` to confirm the working tree is clean (no uncommitted changes)
   - If there are uncommitted changes, warn the user and stop — do NOT deploy dirty state
   - If clean, proceed

2. Run `git push origin main`

3. Tell the user:
   - GitHub Actions will build and publish — typically live within 1–2 minutes
   - Live site: https://akaththifarms.com
   - GitHub Pages status: https://github.com/akaththi/akaththi.github.io/actions

## Important

- Never force-push (`--force`) unless the user explicitly asks
- Only push to `main` — this is the production branch and directly drives the live site
- If the push fails due to upstream changes, show the error and ask the user how to proceed — do NOT auto-rebase or auto-merge
