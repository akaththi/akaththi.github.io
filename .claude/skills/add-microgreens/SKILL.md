---
name: add-microgreens
description: Add a new microgreens variety to produce.html. Use when the user wants to list a specific microgreen type (sunflower, pea shoots, radish, etc.) as available or coming soon.
argument-hint: "<microgreen-name> [available|coming-soon]"
allowed-tools: Read, Edit, Grep
---

Add a new microgreens variety to `produce.html`. The user may specify the name and status in $ARGUMENTS. Gather any missing details:
- Variety name (e.g. "Sunflower Shoots", "Pea Shoots", "Radish Microgreens")
- Status: **available** (grown to order now) or **coming-soon** (planned)
- 1–2 sentence description (focus on flavour, texture, and use case — earthy-premium tone)
- Image filename (e.g. `sunflower-shoots.png` — image must exist at `./images/<filename>`)
- Alt text for the image

## Step 1 — Read `produce.html`

Read the full file first. Identify the current microgreens section (`.var-mg` banner near the bottom). Determine whether a `.var-grid` for microgreens already exists or if this is the first individual variety being added.

## Step 2 — Handle two cases

### Case A: First microgreens variety ever added

Currently the microgreens section is a single promotional banner (`div.var-mg`). The first time a variety is added, you need to:

1. **Add a new section above the `.var-mg` banner** with a variety grid. Insert before the `<section class="sec-var" style="background:var(--bg);padding-top:0;padding-bottom:120px;">` that contains `.var-mg`:

```html
<section class="sec-var" style="background:var(--bg);padding-top:0;">
  <div class="var-inner">
    <div class="var-head reveal">
      <div>
        <div class="lbl"><span class="lbl-sq"></span>Microgreens</div>
        <h2 class="var-h">One variety.<br>Grown to order.</h2>
      </div>
      <p class="var-intro">Ultrafresh, custom-grown for restaurants, cafes, and homes. No batch stock — we grow what you need, when you need it.</p>
    </div>
    <div class="var-grid reveal"><!-- microgreens cards go here --></div>
  </div>
</section>
```

Adjust the heading count as appropriate ("One variety", "Two varieties", etc.).

2. **Add the variety card** inside the new `.var-grid`.

### Case B: Microgreens grid already exists

Add a new `.vc` card inside the existing microgreens `.var-grid`. Update the heading count.

## Step 3 — The variety card markup

For an **available** microgreen:
```html
<div class="vc" >
  <div class="vc-top"><span class="vc-n">M1</span><span class="vc-badge" style="background:rgba(46,102,54,.08);color:#246228">Grown to Order</span></div>
  <div class="vc-img"><div class="vc-svg"><img src="./images/<filename>" alt="<Alt text>" style="width:100%;height:100%;object-fit:contain;display:block;"></div><div class="vc-shad"></div></div>
  <div class="vc-info">
    <div class="vc-name"><Variety Name></div>
    <div class="vc-lat"><Botanical or common subtitle if applicable></div>
    <p class="vc-desc"><Description></p>
  </div>
</div>
```

Use sequential numbers M1, M2, M3... for microgreens (separate from the mushroom numbering).

For a **coming-soon** microgreen, add `style="opacity:.58"` to the outer `.vc` and use badge:
```html
<span class="vc-badge" style="background:rgba(196,154,32,.1);color:#9A740A">Coming Soon</span>
```

## Step 4 — Update the `.var-mg` banner

If this is the first variety and microgreens are now actually available (not just "coming soon"), update the `.var-mg` banner:
- Change `.var-mg-badge` text from "Coming Soon" to "Available Now"
- Update `.var-mg-em` and `.var-mg-body` copy to reflect availability if needed

If the variety is coming-soon, leave the `.var-mg` banner as-is.

## Step 5 — Confirm

Tell the user:
- The microgreen card is live on `produce.html`
- If no image file exists yet at `./images/<filename>`, flag it — the card will show broken until added
- Suggest updating the `index.html` produce teaser section if microgreens are now available (they currently say "coming soon")
