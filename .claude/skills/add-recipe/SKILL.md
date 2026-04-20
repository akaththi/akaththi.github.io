---
name: add-recipe
description: Add a new recipe to the Akaththi Farms site — creates the HTML fragment and registers it in the recipes data file. Use when the user wants to add a mushroom recipe.
argument-hint: "<recipe-name> [category]"
allowed-tools: Read, Write, Edit, Glob, Grep
---

Add a new recipe to the Akaththi Farms site. The user may provide the recipe name and/or category in $ARGUMENTS. Gather any missing details:
- Recipe title (e.g. "Kalan Milagu Varuval")
- Subtitle / English name (e.g. "Mushroom Pepper Fry")
- Slug (kebab-case, e.g. `kalan-milagu-varuval`)
- Section type: `grid` (standard) | `chef` (chef special) | `customer` (customer story)
- Category: `south-indian` | `north-indian` | `indo-chinese` | `continental` | `japanese-korean` | `rolls-grills-bbq` | `chef-specials` | `customer-stories`
- Cuisine label (display name, e.g. "South Indian", "Rolls & Grills", "Chef Special", "Customer Story")
- Mushroom variety: `elm`, `pink`, `golden`, `grey` (one or more as array)
- Variety label (e.g. "Elm Oyster / Pink Oyster")
- Cook time in minutes, difficulty (`Easy` / `Medium` / `Hard` / `Advanced`), serves count
- Card description — 1–2 sentences in brand voice (earthy-premium, declarative)
- Image filename (e.g. `milagu-varuval.jpg`) — note: the image filename does NOT always match the recipe slug exactly
- imgFallback gradient — pick colours that match the dish. Use the pattern `linear-gradient(135deg,#XXXXXX 0%,#YYYYYY 100%)`
- Full ingredients list and method steps

**For `chef` section only:** chef's first name + a one-sentence chef's note in quotes  
**For `customer` section only:** customer's full name + location (e.g. "Adyar, Chennai")

## Step 1 — Create the HTML fragment

Create `recipes/<category>/<slug>.html`. This is a **content fragment only** — no `<html>`, no `<head>`, no `<body>`. It is loaded by JS into a slide panel on `recipes.html`.

Structure:
```html
<!-- recipe-body: content loaded into slide panel -->
<div class="recipe-body">

<div class="panel-section-title">Ingredients</div>
<ul class="panel-ingredients">
  <li><span class="pi-qty">AMOUNT</span> ingredient description</li>
  <!-- repeat for each ingredient -->
</ul>

<div class="panel-section-title">Method</div>
<ol class="panel-steps">
  <li><span class="ps-num">01</span>Step text. Write it as a direct instruction.</li>
  <li><span class="ps-num">02</span>Next step.</li>
  <!-- number continues: 03, 04, ... -->
</ol>

<div class="panel-chef-note">
  <div class="pcn-bar"></div>
  <div class="pcn-body">
    <div class="pcn-label">Cook's Note</div>
    <div class="pcn-text">A practical tip or technique insight. Omit this block entirely if there's nothing meaningful to add.</div>
  </div>
</div>

</div>
```

## Step 2 — Register in the data file

Read `recipes/_data/recipes.js` first. Add one object to the `RECIPES` array inside the correct cuisine comment section. Use the exact shape below — include only the fields relevant to the section type.

### For `section: "grid"` (standard recipe):
```js
{
  id: "<slug>",
  title: "<Recipe Title>",
  subtitle: "<English Subtitle>",
  cuisine: "<category-slug>",
  cuisineLabel: "<Cuisine Label>",
  variety: ["<variety1>"],           // e.g. ["elm","pink"]
  varietyLabel: "<Variety Label>",   // e.g. "Elm Oyster / Pink Oyster"
  time: <minutes>,
  difficulty: "<Easy|Medium|Hard>",
  serves: <number>,
  desc: "<card description — 1–2 sentences in brand voice>",
  img: "recipes/images/<category>/<image-filename>.jpg",
  imgCredit: "<Source name if known>",   // omit if unknown
  imgFallback: "linear-gradient(135deg,#XXXXXX 0%,#YYYYYY 100%)",
  file: "recipes/<category>/<slug>.html",
  section: "grid",
  tags: ["<tag1>","<tag2>","<tag3>"]
}
```

### For `section: "chef"` (chef special — goes in `chef-specials` cuisine):
```js
{
  id: "<slug>",
  title: "<Recipe Title>",
  subtitle: "Chef <Name> — Akaththi Kitchen",
  cuisine: "chef-specials",
  cuisineLabel: "Chef Special",
  variety: ["<variety1>"],
  varietyLabel: "<Variety Label>",
  time: <minutes>,
  difficulty: "<Medium|Advanced>",
  serves: <number>,
  desc: "<card description>",
  img: "recipes/images/chef-specials/<image>.jpg",
  imgFallback: "linear-gradient(135deg,#XXXXXX 0%,#YYYYYY 100%)",
  file: "recipes/chef-specials/<slug>.html",
  section: "chef",
  chef: "<Chef First Name>",
  chefNote: "<One-sentence chef's note in quotes>",
  tags: ["<tag1>","<tag2>"]
}
```

### For `section: "customer"` (customer story — goes in `customer-stories` cuisine):
```js
{
  id: "<slug>",
  title: "<Story Title>",
  subtitle: "<Customer Name> — <Location>",
  cuisine: "customer-stories",
  cuisineLabel: "Customer Story",
  variety: ["<variety>"],
  varietyLabel: "<Variety Label>",
  time: <minutes>,
  difficulty: "<Easy|Medium>",
  serves: <number>,
  desc: "<First-person teaser — quote the customer's voice>",
  img: "recipes/images/customer-stories/<image>.jpg",
  imgFallback: "linear-gradient(135deg,#XXXXXX 0%,#YYYYYY 100%)",
  file: "recipes/customer-stories/<slug>.html",
  section: "customer",
  customerName: "<Full Name>",
  customerLocation: "<Area, City>",
  tags: ["<tag1>","<tag2>"]
}
```

**Tag suggestions by category:**
- South Indian: `quick`, `dry`, `spicy`, `curry`, `coconut`, `rice`, `weekend`, `celebration`, `comfort`
- North Indian: `curry`, `spicy`, `comfort`, `quick`
- Indo-Chinese: `quick`, `noodles`, `rice`, `fried`, `street-food`, `crowd-pleaser`
- Continental: `quick`, `pasta`, `brunch`, `showstopper`, `weekend`, `cast-iron`, `trending`
- Japanese/Korean: `soup`, `umami`, `fermented`, `quick`, `portable`, `weekend`
- Rolls/Grills/BBQ: `quick`, `street-food`, `wrap`, `grill`, `bbq`, `baked`, `appetiser`, `outdoor`
- Chef Specials: `tasting`, `advanced`, `fusion`, `trending`
- Customer Stories: family names of dishes, `quick`, `umami`

## Step 3 — Confirm

Tell the user:
- Recipe fragment is at `recipes/<category>/<slug>.html`
- Registered in `recipes/_data/recipes.js` — appears live on `recipes.html` immediately
- No image required to work — `imgFallback` gradient displays until `recipes/images/<category>/<filename>.jpg` is added
- If they want it in the top showreel on `recipes.html`, add its `id` to the `FEATURED_IDS` array in `recipes/_data/featured.js` (max 4 items; first item is the hero card)
