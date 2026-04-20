---
name: add-job
description: Add a new job listing to the Akaththi Farms site — creates the HTML page and registers it in the jobs data file. Use when the user wants to post a new internship or role.
argument-hint: "<role-name>"
allowed-tools: Read, Write, Edit, Glob, Grep
---

Add a new job listing to the Akaththi Farms site. The user may provide the role name in $ARGUMENTS. Gather any missing details:
- Role title (e.g. "Finance")
- Slug (kebab-case, e.g. `finance-step-intern`)
- Role subtitle / description line for the data file (e.g. "Budgeting, cost tracking, and financial modelling for a growing food company")
- Department (e.g. "Operations") and departmentLabel (same or abbreviated)
- One-sentence tagline for the job card on join.html (punchy, brand-voice)
- Location (e.g. "Chennai (Hybrid)" or "Chennai (Onsite)")
- Schedule details (e.g. "9 AM – 5 PM, Tue–Sat"; for hybrid also note In-Office days)
- Duration (e.g. "1 Month")
- Compensation (always "Unpaid" for STEP internships)
- Hero hook — the same as or similar to the tagline, shown under the big title in the green hero
- "What you'll work on" — 5–7 bullet points of concrete tasks
- "What you'll walk away with" — 4–6 bullet points of outcomes/learning (always starts with "STEP Internship Certificate")
- "Who can apply" — 1–2 paragraphs + bullet list of requirements; include a BYOD note
- Apply email subject line (e.g. "Application for Finance STEP Intern – Your Name")

## Step 1 — Read an existing job page as template

Read `jobs/automation-step-intern.html` to understand the full page structure. Do not reconstruct from memory.

## Step 2 — Create the job HTML page

Create `jobs/<slug>.html`. The page has these sections in order:

### Head
- `<title>`: `<Role Title> STEP Intern — Akaththí Farms`
- `<meta name="description">`: short description
- `<link rel="canonical" href="https://www.akaththifarms.com/jobs/<slug>.html">`
- OG / Twitter meta (use `og:title`, `og:description`, `og:image` pointing to primary logo)
- JSON-LD `JobPosting` schema with `datePosted` set to today's date (`2026-04-05`)
- `<link rel="stylesheet" href="/styles.css">` (root-relative — works from `jobs/` subdirectory)
- GA4 script with ID `G-FZ3J83K6JX`
- Inline `<style>` block — **copy the entire CSS block verbatim** from an existing job page (it's identical across all jobs)

### Body structure
```html
<div id="site-nav"></div>

<!-- Hero -->
<section class="job-hero">
  <div class="job-hero-inner">
    <a href="../join.html" class="back-link"><span class="back-arrow">←</span> All Openings</a>
    <div class="job-program-lbl">STEP Internship Program</div>
    <h1 class="job-hero-h"><Role Title></h1>
    <p class="job-hero-hook"><hero hook — 1 sentence></p>
  </div>
</section>

<!-- Details bar — fields vary per role -->
<div class="job-details-bar">
  <div class="job-details-inner">
    <div class="jd-item">
      <span class="jd-label">Location</span>
      <span class="jd-value"><Location></span>
    </div>
    <div class="jd-item">
      <span class="jd-label">Schedule</span>
      <span class="jd-value"><e.g. "9 AM – 5 PM, Onsite"></span>
    </div>
    <!-- For hybrid roles, add an In-Office row: -->
    <!-- <div class="jd-item"><span class="jd-label">In-Office</span><span class="jd-value">Thu, Fri, Sat</span></div> -->
    <div class="jd-item">
      <span class="jd-label">Duration</span>
      <span class="jd-value"><Duration></span>
    </div>
    <div class="jd-item">
      <span class="jd-label">Intake</span>
      <span class="jd-value">Rolling</span>
    </div>
    <div class="jd-item">
      <span class="jd-label">Compensation</span>
      <span class="jd-value">Unpaid</span>
    </div>
  </div>
</div>

<!-- Two-column content: Work On (left) + Walk Away With (right) -->
<section class="job-content">
  <div class="job-content-inner">
    <div class="reveal">
      <div class="jc-section">
        <h2 class="jc-h">What you'll<br>work on</h2>
        <ul class="jc-list">
          <li>...</li>
        </ul>
      </div>
    </div>
    <div class="reveal">
      <div class="jc-section">
        <h2 class="jc-h">What you'll<br>walk away with</h2>
        <ul class="jc-list">
          <li>STEP Internship Certificate</li>
          <li>...</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Full-width: Who can apply -->
<section class="job-content-wide">
  <div class="job-content-wide-inner reveal">
    <div style="border-top:1px solid var(--rule);padding-top:52px;">
      <h2 class="jc-h" style="margin-bottom:16px;">Who can apply</h2>
      <p class="jc-p">...</p>
      <ul class="jc-list" style="margin-top:16px;">
        <li>...</li>
      </ul>
      <div style="margin-top:28px;padding:18px 22px;background:var(--bg);border-left:3px solid var(--g2);">
        <p style="font-size:11px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:var(--g);margin-bottom:6px;">BYOD — Bring Your Own Device</p>
        <p style="font-size:14px;font-weight:300;color:var(--mid);line-height:1.7;">You are expected to bring your own laptop. We provide farm access, hardware, and tooling — not workstations.</p>
      </div>
    </div>
  </div>
</section>

<!-- How to Apply -->
<section class="sec-apply">
  <div class="apply-inner reveal">
    <div class="lbl" style="justify-content:center;"><span class="lbl-sq"></span>How to Apply</div>
    <h2 class="apply-h">Email us.</h2>
    <p class="apply-email"><a href="mailto:job@akaththi.in">job@akaththi.in</a></p>
    <div class="apply-subject">
      <span>Subject line</span>
      Application for <Role Title> STEP Intern – Your Name
    </div>
    <p class="apply-note">Attach your resume and a cover letter. Tell us what specifically draws you to this role.</p>
    <p class="apply-fine">We run STEP internships year-round. We're open to curious students and open-source contributors — not certificate collectors.</p>
  </div>
</section>

<div id="site-footer"></div>
<script>fetch('/footer.html').then(r=>r.text()).then(h=>{document.getElementById('site-footer').outerHTML=h;});</script>
<script>
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
</script>
<script src="/nav-loader.js"></script>
```

## Step 3 — Register in the data file

Read `jobs/_data/jobs.js` first. Add one object to the `JOBS` array at the end:

```js
{
  id: "<slug>",
  title: "<Role Title>",
  role: "<role subtitle — 1 line describing the work>",
  department: "<Department>",
  departmentLabel: "<Department>",
  badge: "STEP Intern",
  tagline: "<one-sentence card tagline>",
  location: "<Location>",
  duration: "1 Month",
  compensation: "Unpaid",
  file: "jobs/<slug>.html"
}
```

## Step 4 — Confirm

Tell the user:
- The job page is at `jobs/<slug>.html`
- It's registered in `jobs/_data/jobs.js` and will appear on `join.html` automatically
- Apply email: `job@akaththi.in` with subject `Application for <Role> STEP Intern – Your Name`
