---
name: add-mushroom
description: Add a new mushroom variety to produce.html — either as an available variety or a coming-soon variety. Use when launching a new mushroom or listing one in research.
argument-hint: "<variety-name> [available|coming-soon]"
allowed-tools: Read, Edit, Grep
---

Add a new mushroom variety to `produce.html`. The user may specify the name and status in $ARGUMENTS. Gather any missing details:
- Variety name (e.g. "Lion's Mane")
- Latin name (e.g. *Hericium erinaceus*)
- Status: **available** (in stock now) or **coming-soon** (in research)
- 1–2 sentence description for the card (earthy-premium tone, see existing cards)
- Image filename (e.g. `lions-mane.png` — image must exist at `./images/<filename>`)
- Alt text for the image

## Step 1 — Read `produce.html`

Read the full file first. Identify:
- The `.var-grid` div (available varieties) and how many cards exist (to get the next sequential number)
- The `.var-grid-3` div (coming-soon varieties) and how many cards exist
- The JSON-LD `ItemList` at the top of `<head>` — it lists available varieties with `numberOfItems`

## Step 2 — Add the card

### For an AVAILABLE variety:
Add inside the `.var-grid` div. The next sequential number is the count of existing `.vc` cards + 1.

```html
<div class="vc" >
  <div class="vc-top"><span class="vc-n">NN</span><span class="vc-badge" style="background:rgba(46,102,54,.08);color:#246228">Available</span></div>
  <div class="vc-img"><div class="vc-svg"><img src="./images/<filename>" alt="<Alt text>" style="width:100%;height:100%;object-fit:contain;display:block;"></div><div class="vc-shad"></div></div>
  <div class="vc-info">
    <div class="vc-name"><Variety Name></div>
    <div class="vc-lat"><Latin Name></div>
    <p class="vc-desc"><Description></p>
  </div>
</div>
```

Then update the JSON-LD `ItemList`:
- Increment `numberOfItems` by 1
- Add a new `ListItem` at the correct position with `@type`, `position`, and `item` (Product with name, description, image, brand, offers fields — copy the pattern from existing items)

Also update the section header text if it references a count (e.g. "Three varieties. Ready to cook." → update the number).

### For a COMING SOON variety:
Add inside the `.var-grid-3` div. Same card markup but with `style="opacity:.58"` on the outer `.vc` and the badge styled as:

```html
<span class="vc-badge" style="background:rgba(196,154,32,.1);color:#9A740A">Coming Soon</span>
```

Do NOT add coming-soon cards to the JSON-LD ItemList (they are not products available for sale).

Update the "Coming Soon" section header text if it references a count.

## Step 3 — Confirm

Tell the user:
- The card is live on `produce.html`
- If the image file doesn't exist yet at `./images/<filename>`, flag this — the card will show a broken image until it's added
- For available varieties: JSON-LD was updated for SEO
- Suggest adding the variety to `recipes/_data/recipes.js` variety labels if relevant recipes exist
