**# Talent Acquisition — Full Layout & Content**

**\*\*Route:\*\*** \`/services/talent-acquisition/\`

**\*\*Source:\*\*** [src/services/talent-acquisition.njk]\(../src/services/talent-acquisition.njk) → layout \`layouts/page.njk\` → \`layouts/base.njk\`

**\*\*Title:\*\*** Talent Acquisition — Net Cloud Edge

**\*\*Meta description:\*\*** A higher-touch search practice for roles where volume hiring won't work — specialized, senior, or hard-to-fill positions.

**\*\*Page flags:\*\*** \`glass: true\` · extra scripts: \`count-up.js\`, \`faq-accordion.js\`

The **\*\*premium / retained-search\*\*** employer service. Hallmark audit pass, structured to

match \`job-placement.njk\`. Addresses an employer with a hard-to-fill senior role, so it

opens mid-conversation: left-text / right-image split, no rotating headline, no fork.

The premium framing (PRD §6) is carried by **\*\*tone and rhythm\*\***, not decoration: the

hero and the opening "difference" section sit on \`bg-surface\` (a one-shade lift off

paper) so they read as one uninterrupted opening statement; the aurora / dot-field

background is dropped.

**\*\*Distinct from the other service pages:\*\***

\- The **\*\*"How this differs from staffing"\*\*** section sits second (the single most

important block — if a visitor can't tell Talent Acquisition from Recruitment &

Staffing in five seconds, both pages fail).

\- A dedicated **\*\*"Market mapping"\*\*** zig-zag section (photo + prose) — the deliverable

that justifies the premium framing.

**---**

**## Page skeleton (top to bottom)**

\| # | Section | Anchor | Ground / treatment | Source |

\|---|---------|--------|--------------------|--------|

\| — | Site header | — | Transparent at top → floating glass pill on scroll | \`partials/header.njk\` |

\| 1 | Hero — "Precision hiring for roles that matter." | — | \`bg-surface\`; glass photo panel + floating \`Retained\` tag | inline |

\| 2 | How this differs from staffing | \`#difference\` | \`bg-surface\` (continuous with hero); \`.assertion\` + \`.ledger\` comparison table (mobile: per-dimension cards) | inline |

\| 3 | What's included — "What a retained search includes." | \`#included\` | Plain container; definition list on hairlines | inline |

\| 4 | Market mapping — "What a market map gives you." | \`#map\` | Paper band (\`bg-paper/50\`); 3/2 prose + photo zig-zag | inline (\`images.json\` plate) |

\| 5 | The process — "A search built around the role." | \`#procedure\` | Plain container; numbered trace timeline in a glass panel | \`partials/process-timeline.njk\` |

\| 6 | FAQ — "Before you commission a search." | \`#faq\` | Plain container; dashed docket disclosure rows | \`partials/faq-accordion.njk\` |

\| 7 | Closing CTA — "Have a role that's hard to fill?" | — | Ink band, inverted text | \`partials/cta-section.njk\` |

\| — | Site footer | — | Ink band | \`partials/footer.njk\` |

\> Anchors \`#difference\`, \`#included\`, \`#map\`, \`#procedure\`, \`#faq\` carry \`scroll-mt-28\`.

**---**

**## Header (\`partials/header.njk\`)**

Shared — see [HOME-PAGE.md]\(HOME-PAGE.md). No page-specific variation.

**---**

**## 1. Hero**

\`\<section class="relative overflow-hidden bg-surface">\` → \`.section-container pb-14 pt-8 sm\:pb-20 sm\:pt-12\`.

\`grid lg\:grid-cols-12 lg\:gap-12\`, vertically centred.

**### Breadcrumb (\`partials/breadcrumb.njk\`)**

**\*\*Home / Services / Talent Acquisition\*\*** (mono \`/\`-separated, last item no link).

**### Left column (\`lg\:col-span-7\`)**

1\. **\*\*Eyebrow (\`.eyebrow\`):\*\*** "Confidential, retained search"

2\. **\*\*H1\*\*** (\`font-grotesk text-4xl sm\:text-6xl font-bold\`): "Precision hiring for roles that matter."

3\. **\*\*Lead (\`.lead-copy\`, \`max-w-xl\`):\*\*** "A confidential, retained search practice for

leadership and specialized roles — built to reach the candidate who was never going

to apply, not just the one who did."

4\. **\*\*CTAs\*\*** (stack on mobile, row on sm+):

\- \`btn-primary\` — \*\*arrow-right icon\*\* **\*\*"Start a search"\*\*** → \`/contact/?role=employer\`

\- \`btn-outline\` — **\*\*"Compare with staffing"\*\*** → \`/services/recruitment-staffing/\`

5\. **\*\*Hero stat strip\*\*** (\`\<dl>\`, \`grid grid-cols-3\`, \`border-t\` + \`pt-6\`, \`max-w-lg\`) —

\`stats.json\`, first 3 unfiltered, each a \`count-up\` figure over a \`.stat-label\`:

\| Figure | Label |

\|--------|-------|

\| \`2,400+\` | Candidates Placed |

\| \`180+\` | Partner Companies |

\| \`12\` | Years of Experience |

\> **\*\*Gated in spirit:\*\*** \`stats.json\` flagged "confirm with the client before launch."

**### Right column (\`lg\:col-span-5\`, \`relative\`)**

\- **\*\*Photo panel:\*\*** \`.glass-panel p-3\` wrapping

\`images.services["talent-acquisition"].cover\` — \`aspect-[4/5]\`, rounded, eager +

\`fetchpriority="high"\`. (Template sets \`width="1400" height="933"\`; \`images.json\`

records 1400×1050 — reconcile before launch.)

\- URL: Unsplash \`photo-1497366754035-f200968a6e72\`

\- alt: "An empty glass-walled office corridor"

\- **\*\*Floating "engagement" tag:\*\*** \`.glass-frost\` (frost — floats over the photo),

absolute \`-bottom-4 left-6 sm:-left-6\`:

\- \`.meta\` label "Engagement"

\- \`font-grotesk text-2xl font-bold\` value **\*\*"Retained"\*\***

**---**

**## 2. How this differs from staffing**

\`\<section id="difference" class="scroll-mt-28 bg-surface py-16 sm\:py-24">\` — same

\`bg-surface\` tone as the hero, so the two read as one opening statement.

**\*\*Heading doing double duty (\`.assertion sm\:text-3xl\`, \`max-w-2xl\`)\*\*** — no lead:

"Staffing fills a role you have. Search finds the person who was never going to apply."

**\*\*Comparison set\*\*** (inline array \`comparison\`), rendered two ways:

\- **\*\*sm+ — \`.ledger\` table\*\***, keyed rows (\`\<th data-rowhead>\` on the left):

\| | Recruitment & Staffing | Talent Acquisition |

\|---|------------------------|--------------------|

\| What it does | Fills a defined role from an existing pool | Builds a pipeline for a role that doesn't have one |

\| Timeline | Days to weeks | 6–10 weeks |

\| Candidates | Actively looking | Usually not looking |

\| Best for | Volume, contract, defined roles | Leadership, specialized, competitive roles |

\| Terms | Contingency | Retained |

\- **\*\*mobile — one \`.file-inset\` card per dimension\*\***, both values stacked and labelled

(\`Staffing\` / \`Talent Acq.\`) — no horizontal scroll, comparison stays side by side.

**\*\*Redirect line\*\*** (\`.meta\`, below): "Filling a defined role quickly?

[Recruitment & Staffing]\(/services/recruitment-staffing/) is the faster route."

**---**

**## 3. What's included**

\`\<section id="included" class="section-container scroll-mt-28 py-16 sm\:py-24">\`

**\*\*Head\*\*** (\`max-w-2xl\`, single column):

\- **\*\*H2 (\`.section-title\`):\*\*** "What a retained search includes."

\- **\*\*Lead (\`.lead-copy\`):\*\*** "A higher-touch practice for roles where a job posting was

never going to be enough."

**\*\*Definition list\*\*** (\`\<dl>\`, \`sm\:grid-cols-2\`, \`gap-x-12 gap-y-7\`) — inline array

\`included\`. Each item: brand icon + \`.card-title\` term + \`.body-copy\` description on a

\`border-t border-ink/15 pt-5\` hairline.

\| Icon | Term | Description |

\|------|------|-------------|

\| target | Executive & specialized search | Dedicated, retained search for leadership and niche technical roles — not a contingency posting run in parallel by three other firms. |

\| users | Passive candidate sourcing | Direct, confidential outreach to people who aren't job-searching — where the strongest candidates for a senior role usually are. |

\| chart | Market mapping | A clear view of where the right candidates sit today, and what it takes to reach them. |

\| support | Long-term partnership model | A dedicated search partner who knows the role and the team, not a transactional vendor relationship. |

**---**

**## 4. Market mapping**

\`\<section id="map" class="scroll-mt-28 border-y border-white/60 bg-paper/50 py-16 sm\:py-24">\`

— paper band. The deliverable that justifies the premium framing, so it gets a real

zig-zag (photo + full-sentence prose).

**\*\*Head:\*\*** **\*\*H2 (\`.section-title\`):\*\*** "What a market map gives you." \*\*(no lead)\*\*

**\*\*3/2 layout\*\*** (\`sm\:grid-cols-5\`, vertically centred):

\- **\*\*Prose (\`sm\:col-span-3\`):\*\***

\- \`.body-copy\` "Who's doing this job today and where, what they're paid, which

    companies are the realistic feeder pool, and how long a move from each typically

    takes."

\- \`.highlight\` (accent left-rule pull quote): "You keep it whether or not you hire

    through us."

\- **\*\*Photo (\`sm\:col-span-2\`, \`.glass-panel\`):\*\*** \`images.services["talent-acquisition"].plate\`

\- URL: Unsplash \`photo-1524758631624-e2822e304c36\` (1800×800), \`aspect-[4/3]\`

\- alt: "A quiet, empty meeting lounge"

\- \`.meta\` figcaption: "Exhibit B · Confidential engagement"

**---**

**## 5. The process**

\`\<section id="procedure" class="section-container scroll-mt-28 py-16 sm\:py-24">\`

**\*\*Head\*\*** (\`max-w-2xl\`):

\- **\*\*Eyebrow (\`.eyebrow\`):\*\*** "Step by step"

\- **\*\*H2 (\`.section-title\`):\*\*** "A search built around the role."

**\*\*Timeline\*\*** (\`partials/process-timeline.njk\`) — glass panel, \`\<ol>\` of \`.trace-badge\`

numbered circles on a hairline (\`lg\:grid-cols-5\`). Inline array \`steps\` — \*\*no

durations\*\* on this page:

\| # | Step | Description |

\|---|------|-------------|

\| 1 | Discovery | Understand the role, the team, and what success looks like a year in. |

\| 2 | Market mapping | Identify where qualified candidates actually are. |

\| 3 | Outreach | Direct, confidential approach to passive candidates. |

\| 4 | Shortlist | A small, vetted slate — not a wide net. |

\| 5 | Placement | Offer support and a 6-month replacement guarantee. |

**---**

**## 6. FAQ (\`partials/faq-accordion.njk\`)**

\`\<section id="faq" class="scroll-mt-28 py-14 sm\:py-20">\`, inner \`max-w-3xl\`.

Params: \`faqKey = "talent-acquisition"\`, \`faqTitle = "Before you commission a search."\`

\- **\*\*Eyebrow (\`.eyebrow\`):\*\*** "Standing questions" \*\*(default)\*\*

\- **\*\*H2 (\`font-display text-2xl sm\:text-3xl\`):\*\*** "Before you commission a search."

\- **\*\*Rows\*\*** — dashed \`.docket-disclosure\` lines from \`faqs.json["talent-acquisition"]\`,

chevron toggle, panel hidden until opened (\`faq-accordion.js\`):

\| Question | Answer (summary) |

\|----------|------------------|

\| How is this different from staffing? | Staffing fills a role quickly from an existing pool; talent acquisition builds a pipeline for a role that doesn't have one — usually senior or highly specialized. |

\| What roles is this best suited for? | Leadership, specialized technical, and niche functional roles where the right candidate isn't actively job-searching. |

\| How long does a search typically take? | 6–10 weeks on average, depending on how narrow the spec is and how competitive the market is. |

\| Do you offer a replacement guarantee? | Yes — a 6-month replacement guarantee is standard on every retained search. |

**---**

**## 7. Closing CTA (\`partials/cta-section.njk\`)**

Ink band, \`py-20 sm\:py-28\`, centred, inverted tokens. Params set in

\`talent-acquisition.njk\`:

\- **\*\*Status chip (\`glass-dark\`):\*\*** status dot + **\*\*"Ready when you are"\*\*** (\`ctaStamp\`)

\- **\*\*H2:\*\*** "Have a role that's hard to fill?"

\- **\*\*Subtext:\*\*** "Let's talk about what a dedicated search would look like."

\- **\*\*Buttons:\*\***

\- \`btn-primary\` — **\*\*"Start a Conversation"\*\*** + arrow → \`/contact/?role=employer\`

\- outline pill — \*\*phone icon\*\* **\*\*"+1 (312) 555-0148"\*\*** → \`tel:+13125550148\`

**---**

**## Footer (\`partials/footer.njk\`)**

Shared — see [HOME-PAGE.md]\(HOME-PAGE.md). No page-specific variation.

**---**

**## Data & script dependencies**

\| Concern | Source |

\|---------|--------|

\| Hero cover image | \`\_data/images.json\` → \`services.talent-acquisition.cover\` |

\| Market-map photo | \`\_data/images.json\` → \`services.talent-acquisition.plate\` |

\| Hero stat strip figures | \`\_data/stats.json\` (flagged placeholder — confirm before launch) |

\| FAQ questions & answers | \`\_data/faqs.json\` → \`talent-acquisition\` |

\| Breadcrumb trail | inline \`crumbs\` array |

\| "How this differs" comparison | inline \`comparison\` array |

\| "What's included" list | inline \`included\` array |

\| Process steps | inline \`steps\` array |

\| Service title / description / audience (nav, footer, services index) | \`\_data/services.json\` → \`talent-acquisition\` |

\| Count-up stat animation | \`assets/js/count-up.js\` |

\| FAQ disclosure | \`assets/js/faq-accordion.js\` |

\| Header scroll pill / mobile menu | \`assets/js/header-scroll.js\` · \`nav-toggle.js\` (base layout) |

**\*\*Placeholder / gated — resolve before launch:\*\*** \`stats.json\` figures; hero image

dimension mismatch (template 933 vs data 1050); both Unsplash images render from the

CDN (no build-time warning if withdrawn). The "6-month replacement guarantee" (process

step 5 + FAQ) should be confirmed as an actual standing term.

---

# Creative Redesign — Talent Acquisition

## Design Intent

This page should feel like **a specialist search practice**, not another recruitment service page.

The existing information architecture stays intact:

`Hero → Difference → Included → Market Mapping → Process → FAQ → CTA`

The redesign changes the **spatial storytelling** so Talent Acquisition feels visibly more premium than Recruitment & Staffing.

The core visual idea is:

> **Staffing fills a role. Talent Acquisition builds a market around the role.**

The page therefore uses a recurring **search / intelligence / candidate-map** visual language:

- candidate nodes
- market lines
- confidential documents
- search radius
- shortlist signals
- one-to-one connections

Avoid generic recruitment visuals such as handshake photography, giant gradients, stock-office collages, or repeated rounded cards.

---

# Page Flow

```text
01  PRECISION HERO
        ↓
02  STAFFING vs SEARCH
    "Two different problems."
        ↓
03  RETAINED SEARCH SYSTEM
    Four capabilities
        ↓
04  MARKET MAP
    The premium differentiator
        ↓
05  SEARCH TRACE
    Discovery → Mapping → Outreach → Shortlist → Placement
        ↓
06  FAQ
        ↓
07  FINAL SEARCH CTA
```

---

# 01. HERO — "Precision hiring for roles that matter."

## Layout

Use a **7/5 asymmetric editorial hero**.

The hero should open like a private search conversation rather than a broad marketing page.

```text
┌────────────────────────────────────────────────────────────────────┐
│ Home / Services / Talent Acquisition                              │
│                                                                    │
│  CONFIDENTIAL, RETAINED SEARCH             ┌─────────────────────┐ │
│                                             │                     │ │
│  PRECISION HIRING                           │      SEARCH         │ │
│  FOR ROLES                                  │      IN PROGRESS    │ │
│  THAT MATTER.                               │                     │ │
│                                             │    ○──────○         │ │
│  A confidential, retained search            │   /        \        │ │
│  practice for leadership and               │  ○          ●       │ │
│  specialized roles — built to              │   \        /        │ │
│  reach the candidate who was               │    ○──────○         │ │
│  never going to apply.                     │                     │ │
│                                             └─────────────────────┘ │
│  [ Start a search ]   [ Compare with staffing ]                    │
│                                                                    │
│  2,400+          180+          12                                  │
│  Candidates      Partner       Years                               │
│  Placed          Companies     Experience                          │
└────────────────────────────────────────────────────────────────────┘
```

## Content

Preserve the existing source copy:

### Eyebrow

**Confidential, retained search**

### H1

**Precision hiring for roles that matter.**

### Lead

**A confidential, retained search practice for leadership and specialized roles — built to reach the candidate who was never going to apply, not just the one who did.**

### Primary CTA

**Start a search →**

Route:

`/contact/?role=employer`

### Secondary CTA

**Compare with staffing →**

Route:

`/services/recruitment-staffing/`

## Stat strip

Keep the existing first three figures:

- `2,400+` — Candidates Placed
- `180+` — Partner Companies
- `12` — Years of Experience

These remain **gated until confirmed**.

## Hero visual

Keep the existing `images.services["talent-acquisition"].cover`.

The image should sit inside the glass panel, but the composition should be different from the staffing page:

- tall 4:5 frame
- minimal caption
- large background `01`
- small `CONFIDENTIAL SEARCH` marker
- no decorative aurora / dot-field background

### Search marker

Floating over the image:

**Engagement**

**Retained**

This reinforces the premium model immediately.

---

# 02. DIFFERENCE — "Two different problems."

This is the most important section of the page.

## Layout

Do not present the comparison as a normal table first.

Open with a **large typographic assertion**.

```text
STAFFING FILLS A ROLE.

SEARCH FINDS THE PERSON
WHO WAS NEVER GOING TO APPLY.
```

Then reveal the comparison as a **search ledger**.

```text
                     STAFFING              TALENT ACQUISITION

THE PROBLEM           Defined opening       No existing pipeline

THE MARKET            Existing pool         Passive candidates

THE TIMELINE          Days to weeks         6–10 weeks

THE ROLE              Volume / defined      Leadership / specialized

THE MODEL             Contingency            Retained
```

## Assertion

**Staffing fills a role you have. Search finds the person who was never going to apply.**

## Comparison

Preserve all five existing dimensions and values exactly:

| Dimension    | Recruitment & Staffing                     | Talent Acquisition                                 |
| ------------ | ------------------------------------------ | -------------------------------------------------- |
| What it does | Fills a defined role from an existing pool | Builds a pipeline for a role that doesn't have one |
| Timeline     | Days to weeks                              | 6–10 weeks                                         |
| Candidates   | Actively looking                           | Usually not looking                                |
| Best for     | Volume, contract, defined roles            | Leadership, specialized, competitive roles         |
| Terms        | Contingency                                | Retained                                           |

## Desktop treatment

Use the comparison as a **two-column ledger**.

The Talent Acquisition column receives stronger visual weight.

A thin vertical rule separates the two services.

## Mobile treatment

Do not use horizontal scrolling.

Each dimension becomes:

```text
01  TIMELINE

STAFFING
Days to weeks

TALENT ACQUISITION
6–10 weeks
```

## Redirect

Keep:

**Filling a defined role quickly?**

`Recruitment & Staffing` is the faster route.

---

# 03. WHAT'S INCLUDED — "What a retained search includes."

## Layout

Do not use four cards.

Create a **vertical search dossier**.

```text
WHAT A RETAINED
SEARCH INCLUDES.

01  EXECUTIVE & SPECIALIZED SEARCH
    ─────────────────────────────────────────────
    Dedicated, retained search for leadership
    and niche technical roles...

02  PASSIVE CANDIDATE SOURCING
    ─────────────────────────────────────────────
    Direct, confidential outreach...

03  MARKET MAPPING
    ─────────────────────────────────────────────
    A clear view of where the right candidates sit...

04  LONG-TERM PARTNERSHIP MODEL
    ─────────────────────────────────────────────
    A dedicated search partner...
```

## Section copy

### H2

**What a retained search includes.**

### Lead

**A higher-touch practice for roles where a job posting was never going to be enough.**

## Four capabilities

### 01 — Executive & specialized search

**Dedicated, retained search for leadership and niche technical roles — not a contingency posting run in parallel by three other firms.**

### 02 — Passive candidate sourcing

**Direct, confidential outreach to people who aren't job-searching — where the strongest candidates for a senior role usually are.**

### 03 — Market mapping

**A clear view of where the right candidates sit today, and what it takes to reach them.**

### 04 — Long-term partnership model

**A dedicated search partner who knows the role and the team, not a transactional vendor relationship.**

## Interaction

The left side holds the large section title.

The right side scrolls through the four capabilities.

Each active item gets:

- one route node
- one thin connecting rule
- subtle upward reveal

The content itself remains the focus.

---

# 04. MARKET MAPPING — "What a market map gives you."

This should be the **signature section of the page**.

It is the clearest visual distinction from ordinary staffing.

## Layout

Use a **zig-zag 3/2 composition** on a paper band.

```text
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│ WHAT A MARKET MAP GIVES YOU.                                     │
│                                                                  │
│  WHO IS DOING THIS JOB TODAY?           ┌──────────────────────┐ │
│                                         │                      │ │
│  Where they work.                       │      MARKET MAP      │ │
│  What they're paid.                     │                      │ │
│  Which companies are realistic           │   ○──────○           │ │
│  feeder pools.                           │  /        \          │ │
│  How long a move takes.                 │ ○          ●         │ │
│                                         │  \        /          │ │
│  ┌───────────────────────────────────┐  │   ○──────○           │ │
│  │ YOU KEEP THE MAP.                 │  │                      │ │
│  └───────────────────────────────────┘  └──────────────────────┘ │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

## Heading

**What a market map gives you.**

## Prose

**Who's doing this job today and where, what they're paid, which companies are the realistic feeder pool, and how long a move from each typically takes.**

## Highlight

**You keep it whether or not you hire through us.**

## Image

Use:

`images.services["talent-acquisition"].plate`

Existing source:

`photo-1524758631624-e2822e304c36`

Alt:

**A quiet, empty meeting lounge**

Caption:

**Exhibit B · Confidential engagement**

## Creative treatment

Add a subtle **market-map overlay** on the photo:

- 5–7 tiny nodes
- thin connecting paths
- one highlighted candidate node
- no labels that imply real candidate identities

The graphic is conceptual only.

It should communicate **market intelligence**, not pretend to show actual candidate data.

---

# 05. THE PROCESS — "A search built around the role."

## Layout

Turn the existing five-step timeline into a **search trace**.

```text
A SEARCH BUILT
AROUND THE ROLE.

01              02              03              04              05

DISCOVERY ───── MARKET MAP ──── OUTREACH ───── SHORTLIST ───── PLACEMENT
   ●                 ●               ●               ●               ●
```

The line should feel like a private search being assembled.

## Head

### Eyebrow

**Step by step**

### H2

**A search built around the role.**

## Steps

### 01 — Discovery

**Understand the role, the team, and what success looks like a year in.**

### 02 — Market mapping

**Identify where qualified candidates actually are.**

### 03 — Outreach

**Direct, confidential approach to passive candidates.**

### 04 — Shortlist

**A small, vetted slate — not a wide net.**

### 05 — Placement

**Offer support and a 6-month replacement guarantee.**

## Visual behavior

At first:

```text
●────────○────────○────────○────────○
```

After discovery:

```text
●────────●────────○────────○────────○
```

At placement:

```text
●────────●────────●────────●────────●
```

Use restrained animation.

The line represents **search progress**.

## Important

Do not add durations to the process steps. The source explicitly keeps this page's process without durations.

The `6-month replacement guarantee` remains a production confirmation item.

---

# 06. FAQ — "Before you commission a search."

## Layout

Make the FAQ feel like a **confidential search docket**.

```text
BEFORE YOU
COMMISSION A SEARCH.

01  HOW IS THIS DIFFERENT FROM STAFFING?                 +
──────────────────────────────────────────────────────────

02  WHAT ROLES IS THIS BEST SUITED FOR?                  +
──────────────────────────────────────────────────────────

03  HOW LONG DOES A SEARCH TYPICALLY TAKE?               +
──────────────────────────────────────────────────────────

04  DO YOU OFFER A REPLACEMENT GUARANTEE?                +
──────────────────────────────────────────────────────────
```

## Eyebrow

**Standing questions**

## H2

**Before you commission a search.**

## Questions

Preserve the existing FAQ content:

### How is this different from staffing?

**Staffing fills a role quickly from an existing pool; talent acquisition builds a pipeline for a role that doesn't have one — usually senior or highly specialized.**

### What roles is this best suited for?

**Leadership, specialized technical, and niche functional roles where the right candidate isn't actively job-searching.**

### How long does a search typically take?

**6–10 weeks on average, depending on how narrow the spec is and how competitive the market is.**

### Do you offer a replacement guarantee?

**Yes — a 6-month replacement guarantee is standard on every retained search.**

## Open state

When a question opens:

```text
03  HOW LONG DOES A SEARCH TYPICALLY TAKE?             −
    │
    └── 6–10 weeks on average, depending on...
```

The vertical rule reinforces the page's search-trace visual language.

---

# 07. CLOSING CTA — "Have a role that's hard to fill?"

This should feel like the **moment the visitor starts a confidential search**.

## Layout

Use the existing ink band.

Place a large, quiet **search target graphic** behind the content.

```text
                     ◎
                 HARD TO FILL?
                      │
                      │
               ┌───────────────┐
               │ START SEARCH  │
               └───────────────┘

              HAVE A ROLE
              THAT'S HARD
              TO FILL?

        Let's talk about what a
        dedicated search would look like.

       [ START A CONVERSATION ]

       [+1 (312) 555-0148]
```

## Content

### Status

**Ready when you are**

### H2

**Have a role that's hard to fill?**

### Subtext

**Let's talk about what a dedicated search would look like.**

### Primary CTA

**Start a Conversation →**

Route:

`/contact/?role=employer`

### Phone

**+1 (312) 555-0148**

Route:

`tel:+13125550148`

## Creative detail

The search-target graphic should be extremely subtle.

It should look like:

- one central target node
- two or three concentric hairlines
- tiny candidate/search nodes outside the target
- one path resolving toward the center

The CTA is the destination.

---

# 08. HEADER

Use the shared site header.

No page-specific header variation.

Behavior:

```text
TOP
transparent / light

        ↓ scroll

FLOATING GLASS PILL
```

---

# 09. FOOTER

Use the shared footer.

No page-specific variation.

---

# 10. VISUAL DIFFERENTIATION FROM RECRUITMENT & STAFFING

This is important.

The two service pages must **not** feel like the same template with different copy.

### Recruitment & Staffing

Visual language:

`Hiring pipeline`

```text
ROLE
 ↓
SOURCE
 ↓
SCREEN
 ↓
INTERVIEW
 ↓
ONBOARD
```

### Talent Acquisition

Visual language:

`Market intelligence`

```text
ROLE
 ↓
DISCOVER
 ↓
MAP THE MARKET
 ↓
REACH PASSIVE TALENT
 ↓
SHORTLIST
 ↓
PLACE
```

Therefore:

**Staffing page = operational / faster / broader**

**Talent Acquisition page = strategic / confidential / specialized**

---

# 11. TYPOGRAPHY

Keep the established site typography.

Use display typography for:

- hero
- major assertion
- market-map heading
- CTA

Use grotesk/body typography for:

- comparisons
- descriptions
- labels
- FAQ
- metadata

Avoid oversized type in every section.

The large type should appear at **intentional moments**.

---

# 12. SHAPE & MATERIAL LANGUAGE

Prefer:

- paper bands
- hairlines
- glass image frames
- thin route lines
- circular search nodes
- dossier-style labels
- subtle inset panels

Avoid:

- excessive rounded cards
- gradient blobs
- generic SaaS UI
- icon-card repetition
- heavy drop shadows

---

# 13. MOTION SYSTEM

Motion should communicate **search progression and discovery**.

### Hero

Photo reveal + subtle candidate-node movement.

### Difference

Comparison rows reveal sequentially.

### Included

Active capability gets a route node.

### Market Map

Conceptual nodes gently appear as the section enters.

### Process

Search trace progresses through the five stages.

### FAQ

Answer expands beneath its question.

### CTA

Search path resolves into the CTA.

## Reduced motion

Respect:

`prefers-reduced-motion`

Disable:

- node movement
- route drawing
- parallax
- large transforms

Keep:

- readable transitions
- accordion behavior
- static route graphics

---

# 14. RESPONSIVE DESIGN

## Desktop

Use:

- asymmetric 7/5 hero
- editorial comparison ledger
- sticky included-section heading
- zig-zag market-map composition
- horizontal process trace
- large CTA

## Tablet

Use:

- 7/5 hero
- stacked market-map content where needed
- compressed process trace

## Mobile

Use:

- single-column hero
- comparison dimensions stacked
- vertical capability index
- market map image above/below copy depending on available width
- vertical process trace
- stacked CTA

Never allow route graphics to create horizontal page overflow.

---

# 15. DATA & SCRIPT DEPENDENCIES

| Concern                          | Source                                                    |
| -------------------------------- | --------------------------------------------------------- |
| Hero cover image                 | `_data/images.json` → `services.talent-acquisition.cover` |
| Market-map photo                 | `_data/images.json` → `services.talent-acquisition.plate` |
| Hero stat strip figures          | `_data/stats.json` — confirm before launch                |
| FAQ questions & answers          | `_data/faqs.json` → `talent-acquisition`                  |
| Breadcrumb trail                 | inline `crumbs` array                                     |
| Comparison                       | inline `comparison` array                                 |
| Included capabilities            | inline `included` array                                   |
| Process steps                    | inline `steps` array                                      |
| Service metadata                 | `_data/services.json` → `talent-acquisition`              |
| Count-up animation               | `assets/js/count-up.js`                                   |
| FAQ disclosure                   | `assets/js/faq-accordion.js`                              |
| Header scroll pill / mobile menu | `assets/js/header-scroll.js` · `nav-toggle.js`            |

---

# 16. PRODUCTION GATES

Before launch, confirm:

### Statistics

- `2,400+` Candidates Placed
- `180+` Partner Companies
- `12` Years of Experience

### Image dimensions

The source identifies a mismatch between the template's `1400 × 933` dimensions and the `images.json` record at `1400 × 1050`.

Reconcile before launch.

### External image availability

Both Unsplash assets currently render from CDN.

Confirm the assets remain available or replace them with owned/licensed imagery.

### Replacement guarantee

Confirm that the **6-month replacement guarantee** is genuinely a standing term before publishing it in:

- process step 5
- FAQ

### FAQ timing

Confirm the `6–10 weeks` average is supported before publication.

---

# 17. FINAL CREATIVE PRINCIPLE

The page should feel like a **private search being assembled in real time**.

Not:

```text
HEADING
↓
FOUR CARDS
↓
PHOTO
↓
FIVE CARDS
↓
FAQ
↓
CTA
```

Instead:

```text
A HARD ROLE
     ↓
DEFINE THE PROBLEM
     ↓
UNDERSTAND THE MARKET
     ↓
FIND PEOPLE WHO AREN'T LOOKING
     ↓
BUILD A SMALL, STRONG SHORTLIST
     ↓
MAKE THE INTRODUCTION
     ↓
PLACE
```

The most important creative distinction is:

> **Recruitment & Staffing shows a hiring pipeline. Talent Acquisition shows the intelligence behind finding someone who isn't already in the pipeline.**
