---
name: serve
description: Start a local dev server to preview the Akaththi Farms site in the browser. Use when the user wants to preview, test, or check the site locally.
argument-hint: "[port=8080]"
disable-model-invocation: true
---

Start a local HTTP server to preview the site.

Port defaults to 8080 unless the user specifies otherwise with $ARGUMENTS.

Run the following in the project root:

```
python3 -m http.server ${ARGUMENTS:-8080}
```

Tell the user:
- The site is live at http://localhost:${ARGUMENTS:-8080}
- Ctrl+C to stop the server
- Since this is pure static HTML, any saved file changes need a browser refresh — no hot reload

Then launch the server using the Bash tool with `run_in_background: true`.
