// ─────────────────────────────────────────────
//  AKATHTHI FARMS — NEWS REGISTRY
//
//  To add an HTML article:
//    1. Add entry below with type: 'html' and a body string
//    2. Done — no extra file needed
//
//  To add a Markdown blog post:
//    1. Add entry below with type: 'md' (no body field needed)
//    2. Drop news/[slug].md with the content
//    3. Done — article.html renders it automatically
//
//  Fields:
//    slug     — used in URL: news/article.html?slug=...
//    title    — card headline + <title> of article page
//    tag      — category badge (Harvest / Science / Company / etc.)
//    date     — display string ("Feb 2025")
//    excerpt  — 2-sentence teaser shown on the card
//    type     — 'html' (use body field) | 'md' (fetch slug.md)
//    body     — HTML string, used when type === 'html'
// ─────────────────────────────────────────────

const NEWS = [

  {
    slug: 'golden-oyster-first-harvest',
    title: 'Our first Golden Oyster harvest',
    tag: 'Harvest',
    date: 'Feb 2025',
    excerpt: 'After months of dialling in the POD environment, our Golden Oyster clusters came through exactly as they should — vivid, dense, and harvested at peak.',
    type: 'html',
    body: `
      <p>After months of dialling in the environment inside our POD chambers — temperature, CO₂, humidity, airflow — our first Golden Oyster clusters finally came through exactly as they should. Vivid yellow, dense, harvested at peak.</p>
      <p>Golden Oysters (<em>Pleurotus citrinopileatus</em>) are among the most delicate to grow. They need precise temperatures between 18–24°C, high humidity, and indirect light to form their characteristic golden fans. Too warm and they flatten. Too dry and the caps split.</p>
      <h2>What peak harvest looks like</h2>
      <p>We harvest when the caps are still slightly cupped — before they fully flatten and sporulate. At this stage, the texture is firm, the colour is most vivid, and the shelf life is best. From cut to delivery is typically 12–16 hours.</p>
      <p>The first batch went to a chef in Nungambakkam who'd been asking us when Golden Oysters were coming. Hearing back that they held up through a full dinner service is the kind of feedback that makes months of dial-in worth it.</p>
    `
  },

  {
    slug: 'beta-glucans-freshness',
    title: 'Beta-glucans, immunity and why freshness matters',
    tag: 'Science',
    date: 'Jan 2025',
    excerpt: 'The nutritional case for buying mushrooms grown close to you. Beta-glucan content degrades quickly post-harvest — here\'s what that means for your kitchen.',
    type: 'html',
    body: `
      <p>Beta-glucans are the reason mushrooms have earned serious attention in nutritional science. These complex polysaccharides — found in the cell walls of oyster mushrooms — have been studied for their role in immune modulation, blood sugar regulation, and cardiovascular health.</p>
      <p>But there's a catch most people don't know about: beta-glucan content degrades with time post-harvest. The rate depends on storage temperature, humidity, and handling — but studies consistently show significant degradation within 48–72 hours at ambient temperature.</p>
      <h2>Why distance matters</h2>
      <p>Most mushrooms sold in Indian supermarkets have travelled from farms in Himachal Pradesh or Uttarakhand. That's a 2–4 day cold chain at minimum — often much longer. By the time they reach your kitchen, the nutritional potency is measurably lower.</p>
      <p>When Akaththi grows in Chennai and delivers same-day, we're not just offering freshness as an aesthetic — we're preserving the actual nutritional case for eating mushrooms in the first place.</p>
      <blockquote>Fresh is not a marketing word. It's a measurable difference in what you're actually eating.</blockquote>
    `
  },

  {
    slug: 'crescent-ciic-incubation',
    title: 'Akaththí Farms joins Crescent CIIC incubation programme',
    tag: 'Company',
    date: 'Dec 2024',
    excerpt: 'We\'re proud to be part of the Crescent CIIC incubator at Vandalur — giving us the infrastructure to scale our POD model and our KAANI Intelligence platform.',
    type: 'html',
    body: `
      <p>We're proud to announce that Akaththi Farms has been selected as a registered incubatee of the <a href="https://www.ciic.ventures/" target="_blank" rel="noopener">Crescent Innovation &amp; Incubation Council (CIIC)</a> at Vandalur, Chennai.</p>
      <p>CIIC is one of Tamil Nadu's most active deep-tech incubators, supporting ventures at the intersection of science, engineering, and sustainability. Being part of the CIIC ecosystem gives us access to infrastructure, mentorship, and a peer network of founders building serious technology.</p>
      <h2>What this means for us</h2>
      <p>The incubation support is directly accelerating two priorities: scaling our POD chamber model and building out KAANI Intelligence — our proprietary farm monitoring platform. Both require the kind of iteration speed that's hard to achieve without institutional backing.</p>
      <p>Our mentor through this programme is <strong><a href="https://www.linkedin.com/in/arunodhayam-kalleti-192118241/" target="_blank" rel="noopener">Dr. K. Arunodhayam</a></strong> — whose guidance on the intersection of technology and food systems has been invaluable as we formalise our research protocols and prepare for the next phase of growth.</p>
    `
  }

];
