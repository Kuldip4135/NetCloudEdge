**# IT Training — Full Layout & Content**

**\*\*Route:\*\*** \`/services/it-training/\`

**\*\*Source:\*\*** [src/services/it-training.njk]\(../src/services/it-training.njk) → layout \`layouts/page.njk\` → \`layouts/base.njk\`

**\*\*Title:\*\*** IT Training — Net Cloud Edge

**\*\*Meta description:\*\*** Structured programs in web development, QA, cloud, and data — built for graduates who want training that leads somewhere specific: a job.

**\*\*Page flags:\*\*** \`glass: true\` · extra scripts: \`count-up.js\`, \`faq-accordion.js\`

The **\*\*student / early-funnel\*\*** service — the only page addressing a learner rather than

a job-ready candidate or an employer. Hallmark audit pass, structured to match

\`job-placement.njk\`, with two deliberate exceptions:

\- **\*\*The track panels stay full-width panels\*\***, not a definition list — a learner

comparing programs needs curriculum, format, and prerequisites side by side.

\- **\*\*One accent-coloured CTA\*\*** (the only one on the site, PRD §7) — "Book a free demo

class" is \`bg-accent\` / \`hover\:bg-accent-deep\`, because this audience is earlier and

more exploratory than the other three.

**\*\*Content rules baked into this page:\*\***

\- Never "guaranteed placement" anywhere — always "direct access" or "priority access"

to the Job Placement pipeline.

\- Assumes the four \`programs.json\` tracks are real (real curricula + instructors). If

not, the page ships a waitlist variant (\`tracksConfirmed: false\` in front matter) —

no durations, prices, or curriculum until they exist.

**---**

**## Page skeleton (top to bottom)**

\| # | Section | Anchor | Ground / treatment | Source |

\| --- | ---------------------------------------------------- | ------------- | -------------------------------------------------------------------------------------- | ------------------------------- |

\| — | Site header | — | Transparent at top → floating glass pill on scroll | \`partials/header.njk\` |

\| 1 | Hero — "Train. Certify. Get placed." | — | Solid paper; glass photo panel + floating \`Direct access\` tag; **\*\*accent CTA\*\*** | inline |

\| 2 | Tracks offered — "Tracks offered." | \`#programs\` | Plain container; four full-width glass panels (image + detail), alternating image side | inline (\`programs.json\`) |

\| 3 | Why train with us — placement-pipeline pull quote | \`#why\` | Paper band (\`bg-paper/50\`); \`.assertion\` + supporting copy | inline |

\| 4 | What you get at the end — "What you get at the end." | \`#credential\` | Plain container; 3-col definition list on hairlines | inline |

\| 5 | What it costs — "What it costs." | \`#pricing\` | Paper band; 4 payment options as \`.docket-row\` lines | inline |

\| 6 | The process — "From enrollment to placement." | \`#procedure\` | Plain container; numbered trace timeline in a glass panel | \`partials/process-timeline.njk\` |

\| 7 | FAQ — "Before you enroll." | \`#faq\` | Plain container; dashed docket disclosure rows | \`partials/faq-accordion.njk\` |

\| 8 | Closing CTA — "Ready to build a new skill set?" | — | Ink band, inverted text | \`partials/cta-section.njk\` |

\| — | Site footer | — | Ink band | \`partials/footer.njk\` |

\> Anchors \`#programs\`, \`#why\`, \`#credential\`, \`#pricing\`, \`#procedure\`, \`#faq\` carry

\> \`scroll-mt-28\`. Note this page's process anchor is \`#procedure\` (shared id name) and

\> its "Curriculum" section comment — the section titled "From enrollment to placement."

**---**

**## Header (\`partials/header.njk\`)**

Shared — see [HOME-PAGE.md]\(HOME-PAGE.md). No page-specific variation.

**---**

**## 1. Hero**

\`\<section class="relative overflow-hidden">\` → \`.section-container pb-14 pt-8 sm\:pb-20 sm\:pt-12\`.

Solid paper ground. \`grid lg\:grid-cols-12 lg\:gap-12\`, vertically centred.

**### Breadcrumb (\`partials/breadcrumb.njk\`)**

**\*\*Home / Services / IT Training\*\*** (mono \`/\`-separated, last item no link).

**### Left column (\`lg\:col-span-7\`)**

1\. **\*\*Eyebrow (\`.eyebrow\`):\*\*** "Four tracks, one placement pipeline"

2\. **\*\*H1\*\*** (\`font-grotesk text-4xl sm\:text-6xl font-bold\`): "Train. Certify. Get placed."

3\. **\*\*Lead (\`.lead-copy\`, \`max-w-xl\`):\*\*** "Structured programs that build real skills —

and feed straight into our placement pipeline when you're done."

4\. **\*\*CTAs\*\*** (stack on mobile, row on sm+):

\- **\*\*Accent button\*\*** (\`bg-accent\`, \`hover\:bg-accent-deep\` — the only accent CTA on

     the site) — *\_arrow-right icon\_* **\*\*"Book a free demo class"\*\*** → \`/contact/?role=training\`

\- \`btn-outline\` — **\*\*"See job placement"\*\*** → \`/services/job-placement/\`

5\. **\*\*Hero stat strip\*\*** (\`\<dl>\`, \`grid grid-cols-3\`, \`border-t\` + \`pt-6\`, \`max-w-lg\`) —

\`stats.json\`, first 3 unfiltered, each a \`count-up\` figure over a \`.stat-label\`:

\| Figure | Label |

\| -------- | ------------------- |

\| \`2,400+\` | Candidates Placed |

\| \`180+\` | Partner Companies |

\| \`12\` | Years of Experience |

\> **\*\*Gated in spirit:\*\*** \`stats.json\` flagged "confirm with the client before launch."

**### Right column (\`lg\:col-span-5\`, \`relative\`)**

\- **\*\*Photo panel:\*\*** \`.glass-panel p-3\` wrapping \`images.services["it-training"].cover\` —

\`aspect-[4/5]\`, rounded, eager + \`fetchpriority="high"\`. (Template \`width="1400"

height="933"\`; \`images.json\` records 1400×1050 — reconcile before launch.)

\- URL: Unsplash \`photo-1524178232363-1fb2b075b655\`

\- alt: "A class seated in front of a presenter and projected screen"

\- **\*\*Floating tag:\*\*** \`.glass-frost\`, absolute \`-bottom-4 left-6 sm:-left-6\`:

\- \`.meta\` label "Placement pipeline"

\- \`font-grotesk text-2xl font-bold\` value **\*\*"Direct access"\*\***

**---**

**## 2. Tracks offered**

\`\<section id="programs" class="section-container scroll-mt-28 py-16 sm\:py-24">\`

**\*\*Head\*\*** (\`max-w-2xl\`):

\- **\*\*H2 (\`.section-title\`):\*\*** "Tracks offered."

\- **\*\*Lead (\`.lead-copy\`):\*\*** "Four programs, each ending at the same place — a portfolio

project and a handoff to placement."

**\*\*Track panels\*\*** (\`space-y-5\`) — one \`\<article class="glass-panel overflow-hidden !pt-0 md\:grid md\:grid-cols-12">\`

per \`programs.list\` entry. Image \`md\:col-span-4\` (even-index rows: \`md\:order-last\`, so

the image side alternates); detail cell \`md\:col-span-8\` (\`md\:col-span-12\` if no image).

Each detail cell:

\- Top row: brand track icon (left) · \`.meta\` duration (right)

\- **\*\*H3 (\`font-display text-xl font-semibold\`):\*\*** track title

\- \`.body-copy\` description

\- \`\<dl>\` on a dashed rule: **\*\*Format\*\*** and **\*\*Prerequisites\*\*** (value over \`.meta\` label)

Images from \`images.services["it-training"].tracks[\<title>]\` (Unsplash, per track).

\| Icon | Track | Duration | Format | Prerequisites | Description |

\| ----- | --------------- | -------- | --------------------------------- | ------------------------ | ------------------------------------------------------------------------------- |

\| code | Web Development | 12 weeks | Live online · In-person (Chicago) | None | Front-end and back-end fundamentals through a portfolio-ready capstone project. |

\| check | QA / Testing | 8 weeks | Live online | None | Manual and automated testing practices used in real release pipelines. |

\| cloud | Cloud / DevOps | 10 weeks | Live online | Basic command line helps | Core cloud infrastructure, CI/CD, and deployment fundamentals on AWS. |

\| chart | Data Basics | 8 weeks | Live online | None | SQL, spreadsheets, and data analysis fundamentals for non-technical starters. |

\> **\*\*Placeholder:\*\*** \`programs.json\` is flagged — durations, formats, and prerequisites

\> must be confirmed before launch (CONTENT.md item 10). If the tracks aren't real yet,

\> ship the waitlist variant.

**---**

**## 3. Why train with us**

\`\<section id="why" class="scroll-mt-28 border-y border-white/60 bg-paper/50 py-16 sm\:py-24">\`

— paper band. The placement-pipeline link as a pull quote — \*\*"priority access", never

"guaranteed placement".\*\*

\- **\*\*\`.assertion sm\:text-3xl\` (\`max-w-2xl\`):\*\*** "Graduates get

\<span class="text-brand">direct access to our placement pipeline\</span> — the file is

already open on the day you certify."

\- **\*\*Supporting (\`text-lg text-ink/75\`, \`max-w-xl\`):\*\*** "That's priority access, not a

guarantee. It's the difference between an open application and a recruiter who

already knows your work."

**---**

**## 4. What you get at the end**

\`\<section id="credential" class="section-container scroll-mt-28 py-16 sm\:py-24">\`

Vague certification claims are the most common complaint about training providers, so

this section is concrete.

**\*\*Head:\*\*** **\*\*H2 (\`.section-title\`):\*\*** "What you get at the end." _\_(no lead)\__

**\*\*Definition list\*\*** (\`\<dl>\`, \`sm\:grid-cols-3\`, \`gap-x-12 gap-y-7\`) — inline array

\`outcomes\`. Each item: brand icon + \`.card-title\` term + \`.body-copy\` description on a

hairline.

\| Icon | Term | Description |

\| ----------- | ------------------------ | ------------------------------------------------------------------- |

\| check-badge | A completion certificate | Issued by Net Cloud Edge, naming the track and the hours behind it. |

\| code | A portfolio project | Something you can show an employer, not a printable PDF. |

\| briefcase | A handoff to placement | A direct introduction into our Job Placement pipeline. |

_\_(\`site.companyName\` is interpolated into the certificate description.)\__

**\*\*Standing caveat\*\*** (\`.file-inset .meta\`, \`max-w-2xl\`): "Where a track prepares you for

a vendor exam, we say which one and whether the exam fee is included — ask us for the

track you're considering."

**---**

**## 5. What it costs**

\`\<section id="pricing" class="scroll-mt-28 border-y border-white/60 bg-paper/50 py-16 sm\:py-24">\`

— paper band. A page with no price signal loses price-sensitive readers, so it states

that plans exist and how to get exact figures.

**\*\*Head\*\*** (\`max-w-2xl\`):

\- **\*\*H2 (\`.section-title\`):\*\*** "What it costs."

\- **\*\*Lead (\`.lead-copy\`):\*\*** "Fees vary by track and format — ask for your track and

we'll send exact figures. However you pay, it works one of these ways:"

**\*\*Payment options\*\*** — inline array \`paymentOptions\`, each a \`.docket-row\` (dashed

\`grid-cols-12\`): \`font-display\` term (\`sm\:col-span-4\`) beside \`.body-copy\` detail

(\`sm\:col-span-8\`).

\| Option | Detail |

\| ------------------------- | ----------------------------------------------------------------------------------- |

\| Pay in full | One payment at enrollment. |

\| Installment plan | A deposit at enrollment, the balance split across the program. |

\| Employer reimbursement | We provide the documentation your employer's tuition-assistance program needs. |

\| Placement-linked deferral | On select tracks — reduced cost at enrollment, the balance due after you're placed. |

**\*\*\`.link-arrow\` (below):\*\*** "Tell us your track and we'll send exact pricing" + arrow →

\`/contact/?role=training\`

**---**

**## 6. The process**

\`\<section id="procedure" class="section-container scroll-mt-28 py-16 sm\:py-24">\`

The clearest literal run of the pipeline — it ends at the same Job Placement file.

**\*\*Head\*\*** (\`max-w-2xl\`):

\- **\*\*Eyebrow (\`.eyebrow\`):\*\*** "Step by step"

\- **\*\*H2 (\`.section-title\`):\*\*** "From enrollment to placement."

**\*\*Timeline\*\*** (\`partials/process-timeline.njk\`) — glass panel, \`\<ol>\` of \`.trace-badge\`

numbered circles on a hairline (\`lg\:grid-cols-5\`). Inline array \`steps\` — \*\*no

durations\*\*:

\| # | Step | Description |

\| --- | ----------------- | --------------------------------------------------------- |

\| 1 | Enroll | Pick a track and a format — online, in-person, or both. |

\| 2 | Learn | Structured curriculum built around real job requirements. |

\| 3 | Practice | A portfolio-ready project you can show employers. |

\| 4 | Certification | A credential that signals real, tested skill. |

\| 5 | Placement support | Direct handoff into our Job Placement pipeline. |

**---**

**## 7. FAQ (\`partials/faq-accordion.njk\`)**

\`\<section id="faq" class="scroll-mt-28 py-14 sm\:py-20">\`, inner \`max-w-3xl\`.

Params: \`faqKey = "it-training"\`, \`faqTitle = "Before you enroll."\`

\- **\*\*Eyebrow (\`.eyebrow\`):\*\*** "Standing questions" _\_(default)\__

\- **\*\*H2 (\`font-display text-2xl sm\:text-3xl\`):\*\*** "Before you enroll."

\- **\*\*Rows\*\*** — dashed \`.docket-disclosure\` lines from \`faqs.json["it-training"]\`, chevron

toggle, panel hidden until opened (\`faq-accordion.js\`):

\| Question | Answer (summary) |

\| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |

\| How long is each program? | Tracks run 8–14 weeks depending on subject, with full-time and evening/weekend formats. |

\| Is training online, in-person, or both? | Both — live online cohorts run continuously, with in-person sessions in Chicago for select tracks. |

\| What does it cost? | Varies by track. Pay in full, installments, employer tuition reimbursement, or (select tracks) defer part until placed. |

\| Do I need prior experience? | No prior industry experience required — each track starts from fundamentals and builds to a portfolio project. |

\| Is placement guaranteed after graduation? | No — graduates get direct, **\*\*priority\*\*** access to the Job Placement pipeline, a real head start over an open application. |

**---**

**## 8. Closing CTA (\`partials/cta-section.njk\`)**

Ink band, \`py-20 sm\:py-28\`, centred, inverted tokens. Params set in \`it-training.njk\`:

\- **\*\*Status chip (\`glass-dark\`):\*\*** status dot + **\*\*"Ready when you are"\*\*** (\`ctaStamp\`)

\- **\*\*H2:\*\*** "Ready to build a new skill set?"

\- **\*\*Subtext:\*\*** "Sit in on a demo class first — there's no cost and no commitment."

\- **\*\*Buttons:\*\***

\- \`btn-primary\` — **\*\*"Enroll Now"\*\*** + arrow → \`/contact/?role=training\`

\- outline pill — _\_phone icon\__ **\*\*"+1 (312) 555-0148"\*\*** → \`tel:+13125550148\`

\> The CTA button is \`btn-primary\` (brand) here, not the accent variant — only the hero

\> "Book a free demo class" uses \`bg-accent\`.

**---**

**## Footer (\`partials/footer.njk\`)**

Shared — see [HOME-PAGE.md]\(HOME-PAGE.md). No page-specific variation.

**---**

**## Data & script dependencies**

\| Concern | Source |

\| -------------------------------------------------------------------- | ---------------------------------------------------------------- |

\| Hero cover image | \`\_data/images.json\` → \`services.it-training.cover\` |

\| Per-track photos | \`\_data/images.json\` → \`services.it-training.tracks[\<title>]\` |

\| Track curriculum (duration, format, prerequisites, description) | \`\_data/programs.json\` |

\| Hero stat strip figures | \`\_data/stats.json\` (flagged placeholder — confirm before launch) |

\| FAQ questions & answers | \`\_data/faqs.json\` → \`it-training\` |

\| Certificate issuer name | \`\_data/site.json\` → \`companyName\` |

\| Breadcrumb trail | inline \`crumbs\` array |

\| End-of-program outcomes | inline \`outcomes\` array |

\| Payment options | inline \`paymentOptions\` array |

\| Process steps | inline \`steps\` array |

\| Service title / description / audience (nav, footer, services index) | \`\_data/services.json\` → \`it-training\` |

\| Count-up stat animation | \`assets/js/count-up.js\` |

\| FAQ disclosure | \`assets/js/faq-accordion.js\` |

\| Header scroll pill / mobile menu | \`assets/js/header-scroll.js\` · \`nav-toggle.js\` (base layout) |

**\*\*Placeholder / gated — resolve before launch:\*\*** \`stats.json\` figures; \*\*\`programs.json\`

curricula\*\* (durations / formats / prerequisites — CONTENT.md item 10; ship the

waitlist variant if the tracks aren't real); hero image dimension mismatch (933 vs

1050\); all Unsplash images render from the CDN. Keep every placement reference as

"priority / direct access", never "guaranteed".

---

# IT Training — Creative Layout & Content Redesign

**Route:** `/services/it-training/`

**Source:** `src/services/it-training.njk` → `layouts/page.njk` → `layouts/base.njk`

**Title:** IT Training — Net Cloud Edge

**Meta description:** Structured programs in web development, QA, cloud, and data — built for graduates who want training that leads somewhere specific: a job.

---

# Creative Direction

This is the **learner / early-funnel** page.

It should feel fundamentally different from the employer-facing service pages.

The central visual idea is:

> **You don't just learn a skill. You build a path from first lesson → real project → certification → placement.**

The page should therefore feel like a **learning journey in progress**, using:

- curriculum modules
- progress paths
- skill signals
- project artifacts
- checkpoints
- placement handoff

Avoid turning the page into a generic online-course website.

Do not use:

- repetitive course cards
- fake student testimonials
- graduation clichés
- certificate-stock imagery
- giant gradients
- generic "learn today, earn tomorrow" claims

The existing factual rules remain unchanged:

- never say "guaranteed placement"
- use "direct access" / "priority access"
- keep the real curriculum gated until confirmed
- use the waitlist variant if tracks are not confirmed

---

# Page Experience

```text
HEADER
   ↓
01 HERO
   Train. Certify. Get placed.
   ↓
02 THE JOURNEY
   Skill → Project → Credential → Placement
   ↓
03 TRACKS
   Four learning paths
   ↓
04 WHY TRAIN WITH US
   Direct-access placement statement
   ↓
05 WHAT YOU GET
   The actual outputs
   ↓
06 WHAT IT COSTS
   Four ways to pay
   ↓
07 PROCESS
   Enrollment → Learning → Practice → Certification → Placement
   ↓
08 FAQ
   Before you enroll
   ↓
09 CTA
   Ready to build a new skill set?
```

---

# 01. HERO — "Train. Certify. Get placed."

## Layout

Make the hero feel like a **learning dashboard crossed with an editorial landing page**, without becoming SaaS UI.

Use a 12-column composition.

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Home / Services / IT Training                                       │
│                                                                      │
│  FOUR TRACKS, ONE PLACEMENT PIPELINE                                │
│                                                                      │
│  TRAIN. CERTIFY.                     ┌───────────────────────────┐   │
│  GET PLACED.                         │                           │   │
│                                      │       LEARNING PATH       │   │
│  Structured programs that build      │                           │   │
│  real skills — and feed straight    │  ●────────●────────●      │   │
│  into our placement pipeline        │  Learn    Build   Certify │   │
│  when you're done.                  │                    │       │   │
│                                      │                 ●          │   │
│  [ Book a free demo class ]          │              Placement     │   │
│  [ See job placement ]               │                           │   │
│                                      └───────────────────────────┘   │
│                                                                      │
│  2,400+              180+                12                          │
│  Candidates          Partner             Years                       │
│  Placed              Companies           Experience                  │
└──────────────────────────────────────────────────────────────────────┘
```

## Content

### Eyebrow

**Four tracks, one placement pipeline**

### H1

**Train. Certify. Get placed.**

### Lead

**Structured programs that build real skills — and feed straight into our placement pipeline when you're done.**

### Primary CTA

**Book a free demo class →**

Route:

`/contact/?role=training`

This remains the **only accent-coloured CTA on the site**.

### Secondary CTA

**See job placement →**

Route:

`/services/job-placement/`

## Hero stats

Keep the existing first three `stats.json` values:

- `2,400+` — Candidates Placed
- `180+` — Partner Companies
- `12` — Years of Experience

These remain confirmation-gated.

## Hero visual

Use:

`images.services["it-training"].cover`

Existing image:

`photo-1524178232363-1fb2b075b655`

Alt:

**A class seated in front of a presenter and projected screen**

Keep the existing `.glass-panel p-3` treatment.

### Creative overlay

Instead of only placing a floating "Placement pipeline / Direct access" badge, create a small **four-stage learning route** over the lower portion of the image:

```text
SKILL
  ●
  │
PROJECT
  ●
  │
CERTIFY
  ●
  │
PLACEMENT
  ●
```

Floating label:

**Placement pipeline**

**Direct access**

The route is conceptual and must not imply guaranteed placement.

---

# 02. THE JOURNEY — "Learning should lead somewhere."

Insert a new visual transition before the tracks.

## Layout

Use a full-width paper band.

```text
LEARNING SHOULD
LEAD SOMEWHERE.

        LEARN
          ●
          │
        BUILD
          ●
          │
       CERTIFY
          ●
          │
       GET READY
          ●
          │
       PLACEMENT
```

## Content

### H2

**Learning should lead somewhere.**

### Supporting copy

**A course is useful when you can point to what you built, what you learned, and what happens next.**

This section should be concise.

It creates the mental model for everything that follows.

---

# 03. TRACKS OFFERED — "Choose your track."

## Layout

Keep the existing **full-width panels**, because the source explicitly identifies these as important for learners comparing curriculum, format, and prerequisites.

However, make them feel more editorial and less like ordinary course cards.

```text
CHOOSE YOUR TRACK.

01  WEB DEVELOPMENT
────────────────────────────────────────────────────────
[ IMAGE ]       12 weeks
                Live online · In-person (Chicago)

                Front-end and back-end fundamentals
                through a portfolio-ready capstone.

                FORMAT
                Live online · In-person (Chicago)

                PREREQUISITES
                None
────────────────────────────────────────────────────────

02  QA / TESTING
────────────────────────────────────────────────────────
                8 weeks
                Live online
...
```

## Section head

### H2

**Tracks offered.**

### Lead

**Four programs, each ending at the same place — a portfolio project and a handoff to placement.**

## Track composition

Preserve the four real tracks:

### 01 — Web Development

**12 weeks**

**Live online · In-person (Chicago)**

**None**

**Front-end and back-end fundamentals through a portfolio-ready capstone project.**

### 02 — QA / Testing

**8 weeks**

**Live online**

**None**

**Manual and automated testing practices used in real release pipelines.**

### 03 — Cloud / DevOps

**10 weeks**

**Live online**

**Basic command line helps**

**Core cloud infrastructure, CI/CD, and deployment fundamentals on AWS.**

### 04 — Data Basics

**8 weeks**

**Live online**

**None**

**SQL, spreadsheets, and data analysis fundamentals for non-technical starters.**

## Visual structure

Each panel contains:

```text
TRACK NUMBER
     ↓
IMAGE
     ↓
TRACK TITLE
     ↓
DESCRIPTION
     ↓
FORMAT / PREREQUISITES
```

Add a small **progress-line motif** running through the four panels.

It should visually communicate that the tracks are different routes to the same next stage.

## Interaction

On desktop:

- alternating image side
- hover gently enlarges image crop
- track number becomes active
- a thin route line connects the panels

On mobile:

- stacked panels
- image first
- no hover-dependent information
- all details visible

## Data gate

`programs.json` must be confirmed before launch.

If tracks are not real:

**ship the waitlist variant**

Do not invent:

- durations
- formats
- prerequisites
- curricula

---

# 04. WHY TRAIN WITH US — "The file is already open."

This is the emotional center of the learner page.

## Layout

Use a **large pull quote with an oversized placement-file visual**.

```text
WHY TRAIN WITH US?

┌────────────────────────────────────────────────────┐
│                                                    │
│ "Graduates get direct access to our               │
│  placement pipeline — the file is already          │
│  open on the day you certify."                     │
│                                                    │
│                  ────────────────────              │
│                                                    │
└────────────────────────────────────────────────────┘
```

## Existing content

### Assertion

**Graduates get direct access to our placement pipeline — the file is already open on the day you certify.**

Highlight:

**direct access to our placement pipeline**

### Supporting copy

**That's priority access, not a guarantee. It's the difference between an open application and a recruiter who already knows your work.**

## Creative detail

Add a tiny visual label:

**PLACEMENT FILE**

`OPEN`

But ensure the copy never visually implies a guaranteed job.

---

# 05. WHAT YOU GET AT THE END — "Build something you can use."

## Layout

Instead of a normal 3-column definition list, create three **artifact panels** arranged as:

```text
WHAT YOU GET
AT THE END.

┌─────────────────────┐
│ 01                  │
│ CERTIFICATE         │
│                     │
│ A completion        │
│ certificate naming  │
│ the track and hours │
└─────────────────────┘

        ┌─────────────────────┐
        │ 02                  │
        │ PORTFOLIO PROJECT   │
        │                     │
        │ Something you can   │
        │ show an employer.   │
        └─────────────────────┘

                 ┌─────────────────────┐
                 │ 03                  │
                 │ PLACEMENT HANDOFF  │
                 │                     │
                 │ Direct introduction │
                 │ into Job Placement. │
                 └─────────────────────┘
```

The offset composition makes the three outcomes feel like **milestones**, not feature cards.

## Content

### H2

**What you get at the end.**

### 01 — A completion certificate

**Issued by Net Cloud Edge, naming the track and the hours behind it.**

### 02 — A portfolio project

**Something you can show an employer, not a printable PDF.**

### 03 — A handoff to placement

**A direct introduction into our Job Placement pipeline.**

## Caveat

Preserve:

**Where a track prepares you for a vendor exam, we say which one and whether the exam fee is included — ask us for the track you're considering.**

Use a quiet `.file-inset` / document-note treatment.

---

# 06. WHAT IT COSTS — "Choose the payment path."

## Layout

Make the pricing section feel like a **transparent enrollment decision**, not a pricing table.

```text
WHAT IT COSTS.

Fees vary by track and format.

┌─────────────────────────────────────────────────────────────┐
│ 01  PAY IN FULL                                             │
│     One payment at enrollment.                             │
├─────────────────────────────────────────────────────────────┤
│ 02  INSTALLMENT PLAN                                        │
│     A deposit at enrollment, balance across the program.   │
├─────────────────────────────────────────────────────────────┤
│ 03  EMPLOYER REIMBURSEMENT                                  │
│     Documentation for tuition-assistance programs.         │
├─────────────────────────────────────────────────────────────┤
│ 04  PLACEMENT-LINKED DEFERRAL                               │
│     On select tracks — reduced cost at enrollment...       │
└─────────────────────────────────────────────────────────────┘
```

## Content

### H2

**What it costs.**

### Lead

**Fees vary by track and format — ask for your track and we'll send exact figures. However you pay, it works one of these ways:**

### Options

#### Pay in full

**One payment at enrollment.**

#### Installment plan

**A deposit at enrollment, the balance split across the program.**

#### Employer reimbursement

**We provide the documentation your employer's tuition-assistance program needs.**

#### Placement-linked deferral

**On select tracks — reduced cost at enrollment, the balance due after you're placed.**

### Link

**Tell us your track and we'll send exact pricing →**

Route:

`/contact/?role=training`

## Creative detail

Number the four options `01–04`.

On hover, only the active row receives the accent rule.

Do not show invented dollar amounts.

---

# 07. THE PROCESS — "From enrollment to placement."

This should be the page's strongest literal **learning pipeline**.

## Layout

Use a horizontal route on desktop.

```text
FROM ENROLLMENT
TO PLACEMENT.

01              02              03              04              05

ENROLL ─────── LEARN ───────── PRACTICE ───── CERTIFY ─────── PLACEMENT
  ●                ●                ●                ●                ●
```

## Content

### Eyebrow

**Step by step**

### H2

**From enrollment to placement.**

### 01 — Enroll

**Pick a track and a format — online, in-person, or both.**

### 02 — Learn

**Structured curriculum built around real job requirements.**

### 03 — Practice

**A portfolio-ready project you can show employers.**

### 04 — Certification

**A credential that signals real, tested skill.**

### 05 — Placement support

**Direct handoff into our Job Placement pipeline.**

## Creative behavior

The route starts incomplete:

```text
●────────○────────○────────○────────○
```

Then progresses:

```text
●────────●────────○────────○────────○
```

Until:

```text
●────────●────────●────────●────────●
```

The final node should visually connect to the phrase:

**Job Placement pipeline**

This is a **handoff**, not a guarantee.

## Mobile

Convert into a vertical route:

```text
● Enroll
│
● Learn
│
● Practice
│
● Certification
│
● Placement support
```

---

# 08. FAQ — "Before you enroll."

## Layout

Use the existing dashed docket disclosure rows, but introduce a **learner's checklist** feeling.

```text
BEFORE YOU ENROLL.

01  How long is each program?                         +
──────────────────────────────────────────────────────

02  Is training online, in-person, or both?           +
──────────────────────────────────────────────────────

03  What does it cost?                                +
──────────────────────────────────────────────────────

04  Do I need prior experience?                       +
──────────────────────────────────────────────────────

05  Is placement guaranteed after graduation?        +
──────────────────────────────────────────────────────
```

## Existing content

Preserve all five FAQ answers.

### How long is each program?

**Tracks run 8–14 weeks depending on subject, with full-time and evening/weekend formats.**

### Is training online, in-person, or both?

**Both — live online cohorts run continuously, with in-person sessions in Chicago for select tracks.**

### What does it cost?

**Varies by track. Pay in full, installments, employer tuition reimbursement, or (select tracks) defer part until placed.**

### Do I need prior experience?

**No prior industry experience required — each track starts from fundamentals and builds to a portfolio project.**

### Is placement guaranteed after graduation?

**No — graduates get direct, priority access to the Job Placement pipeline, a real head start over an open application.**

## Important

Never shorten the last answer to merely "no."

The distinction between:

**guaranteed placement**

and

**priority access**

is a core content rule for this page.

---

# 09. CLOSING CTA — "Ready to build a new skill set?"

## Layout

Use the existing ink band, but make it the **destination of the learner route**.

```text
SKILL
  ●
  │
PROJECT
  ●
  │
CERTIFICATION
  ●
  │
PLACEMENT
  ●
  │

        READY TO BUILD
        A NEW SKILL SET?

   Sit in on a demo class first —
   there's no cost and no commitment.

   [ ENROLL NOW → ]

   [ ☎ +1 (312) 555-0148 ]
```

## Content

### Status

**Ready when you are**

### H2

**Ready to build a new skill set?**

### Subtext

**Sit in on a demo class first — there's no cost and no commitment.**

### Primary CTA

**Enroll Now →**

Route:

`/contact/?role=training`

### Phone

**+1 (312) 555-0148**

Route:

`tel:+13125550148`

## CTA rule

This CTA is the **brand button**.

The hero's:

**Book a free demo class**

remains the only accent CTA.

Do not create additional accent buttons elsewhere on the page.

---

# 10. HEADER

Use the shared header from `HOME-PAGE.md`.

No page-specific variation.

Behavior:

```text
TOP OF PAGE
transparent / light

        ↓ scroll

FLOATING GLASS PILL
```

---

# 11. FOOTER

Use the shared footer.

No page-specific variation.

---

# 12. VISUAL SYSTEM

## Core metaphor

### The learning route

The route is:

`SKILL → PROJECT → CERTIFICATION → PLACEMENT`

It should appear subtly across:

- hero
- transition
- tracks
- process
- CTA

Do not force it into every paragraph.

## Typography

Keep the established site typography.

Use display type for:

- hero
- major assertions
- section titles
- CTA

Use grotesk/body type for:

- curriculum details
- pricing
- FAQ
- labels
- metadata

## Materials

Use:

- paper backgrounds
- thin ink rules
- glass photo panels
- document-like insets
- route nodes
- occasional accent emphasis

Avoid:

- course-marketplace aesthetics
- excessive pills
- huge floating gradients
- cartoon illustrations
- stock graduation graphics

---

# 13. MOTION

Motion should communicate **learning progress**.

### Hero

Route nodes reveal sequentially.

### Journey transition

The path draws from `Learn` to `Placement`.

### Tracks

Image reveals and route node activation.

### Outcomes

Three artifacts appear as milestone objects.

### Pricing

Rows reveal one at a time.

### Process

Timeline progresses with scroll.

### FAQ

Answer disclosure.

### CTA

Final route resolves into the enrollment action.

## Reduced motion

Respect:

`prefers-reduced-motion`

Disable:

- route drawing
- parallax
- image movement
- large transforms

Keep:

- opacity transitions
- disclosure functionality
- static route visuals

---

# 14. RESPONSIVE COMPOSITION

## Desktop

Use:

- asymmetric hero
- full-width alternating track panels
- large editorial pull quote
- offset outcomes
- horizontal process route
- destination CTA

## Tablet

Use:

- 7/5 hero
- stacked market/learning visual where necessary
- reduced image overlap
- compressed process

## Mobile

Use:

- single-column hero
- full-width track panels
- vertical learning route
- stacked outcome milestones
- vertical process trace
- stacked CTAs

Never allow decorative route graphics to create horizontal overflow.

---

# 15. DATA & SCRIPT DEPENDENCIES

| Concern                          | Source                                                       |
| -------------------------------- | ------------------------------------------------------------ |
| Hero cover image                 | `_data/images.json` → `services.it-training.cover`           |
| Per-track photos                 | `_data/images.json` → `services.it-training.tracks[<title>]` |
| Track curriculum                 | `_data/programs.json`                                        |
| Hero stats                       | `_data/stats.json` — confirm before launch                   |
| FAQ questions & answers          | `_data/faqs.json` → `it-training`                            |
| Certificate issuer               | `_data/site.json` → `companyName`                            |
| Breadcrumb                       | inline `crumbs` array                                        |
| End-of-program outcomes          | inline `outcomes` array                                      |
| Payment options                  | inline `paymentOptions` array                                |
| Process steps                    | inline `steps` array                                         |
| Service metadata                 | `_data/services.json` → `it-training`                        |
| Count-up animation               | `assets/js/count-up.js`                                      |
| FAQ disclosure                   | `assets/js/faq-accordion.js`                                 |
| Header scroll pill / mobile menu | `assets/js/header-scroll.js` · `nav-toggle.js`               |

---

# 16. PRODUCTION GATES

Before launch, confirm:

### Statistics

- `2,400+` Candidates Placed
- `180+` Partner Companies
- `12` Years of Experience

### Programs

Confirm all curriculum:

- durations
- formats
- prerequisites
- descriptions

If the programs are not real:

**ship the waitlist variant**

### Image dimensions

Resolve the existing:

`1400 × 933` template expectation vs `1400 × 1050` image record.

### Images

Confirm all Unsplash assets or replace them with owned/licensed imagery.

### Placement language

Every reference must remain:

- direct access
- priority access
- placement pipeline

Never:

- guaranteed placement

---

# 17. FINAL CREATIVE PRINCIPLE

This page should feel like a **path the learner can see themselves moving through**.

Not:

```text
HERO
↓
COURSE CARDS
↓
FEATURES
↓
PRICING
↓
TIMELINE
↓
FAQ
```

Instead:

```text
I'M STARTING SOMEWHERE
        ↓
CHOOSE A TRACK
        ↓
LEARN SOMETHING REAL
        ↓
BUILD SOMETHING I CAN SHOW
        ↓
CERTIFY
        ↓
GET DIRECT ACCESS TO PLACEMENT
        ↓
TAKE THE NEXT STEP
```

The creative idea is simple:

> **Make the learner's progress visible.**

The page should make someone understand not only **what they can study**, but **what they will have in their hands when the training ends and how that connects to the next stage.**
