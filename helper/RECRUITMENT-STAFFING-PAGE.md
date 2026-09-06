**# Recruitment & Staffing — Full Layout & Content**

**\*\*Route:\*\*** \`/services/recruitment-staffing/\`

**\*\*Source:\*\*** [src/services/recruitment-staffing.njk]\(../src/services/recruitment-staffing.njk) → layout \`layouts/page.njk\` → \`layouts/base.njk\`

**\*\*Title:\*\*** Recruitment & Staffing — Net Cloud Edge

**\*\*Meta description:\*\*** Full-cycle staffing for employers — sourcing, screening, and delivering vetted candidates across contract, temp, and permanent roles.

**\*\*Page flags:\*\*** \`glass: true\` · extra scripts: \`count-up.js\`, \`faq-accordion.js\`

The **\*\*employer-side\*\*** counterpart to Job Placement — Hallmark audit pass, structured to

match \`job-placement.njk\`. It addresses a reader who has already chosen their door

(they are hiring), so it opens mid-conversation: left-text / right-image split, no

rotating headline, no fork.

Shared characteristics with the pilot pass:

\- Hero drops the aurora / dot-field background — solid paper ground; the glass photo

panel and the floating \`15 min\` tag carry the depth.

\- Section heads are single-column (label directly above heading, no chapter-marker

ghost index, no eyebrow on non-ordinal sections).

\- "What's included" is a definition list with inline icons on hairline rules, not a

grid of glass cards.

\- Fabricated proof is gated (employer quote wall, logo marquee).

**\*\*Distinct from Job Placement:\*\*** this page carries an extra **\*\*"Where we place"\*\*** sector

list (employers scan for their own sector first) and a **\*\*"How engagements work"\*\***

terms section (an employer who can't find terms assumes they're bad).

**---**

**## Page skeleton (top to bottom)**

\| # | Section | Anchor | Ground / treatment | Source |

\|---|---------|--------|--------------------|--------|

\| — | Site header | — | Transparent at top → floating glass pill on scroll | \`partials/header.njk\` |

\| 1 | Hero — "Hire faster, hire right." | — | Solid paper; glass photo panel + floating \`15 min\` tag | inline |

\| 2 | \*\*Employer wall — gated / commented out\*\* | — | — | \`partials/placed-at.njk\` |

\| 3 | What's included — "Four things every engagement gets." | \`#included\` | Plain container; definition list on hairlines | inline |

\| 4 | Where we place — "Where we place." | \`#sectors\` | Paper band (\`bg-paper/50\`), top+bottom hairline; 3-col sector list | inline (\`industries.json\`) |

\| 5 | How engagements work — "How engagements work." | \`#terms\` | Plain container; prose list + brand-tinted "Terms at a glance" panel | inline |

\| 6 | The process — "From requirement to onboarding." | \`#procedure\` | Paper band; numbered trace timeline in a glass panel | \`partials/process-timeline.njk\` |

\| — | \*\*Employer quotes — gated\*\* | \`#statements\` | — | commented out |

\| 7 | FAQ — "Before you brief us." | \`#faq\` | Plain container; dashed docket disclosure rows | \`partials/faq-accordion.njk\` |

\| 8 | Closing CTA — "Tell us your hiring need." | — | Ink band, inverted text | \`partials/cta-section.njk\` |

\| — | Site footer | — | Ink band | \`partials/footer.njk\` |

\> Anchors \`#included\`, \`#sectors\`, \`#terms\`, \`#procedure\`, \`#faq\` carry \`scroll-mt-28\`.

\> \`#statements\` is reserved for the gated section.

**---**

**## Header (\`partials/header.njk\`)**

Shared — see [HOME-PAGE.md]\(HOME-PAGE.md). No page-specific variation.

**---**

**## 1. Hero**

\`\<section class="relative overflow-hidden">\` → \`.section-container pb-14 pt-8 sm\:pb-20 sm\:pt-12\`.

Solid paper ground. \`grid lg\:grid-cols-12 lg\:gap-12\`, vertically centred.

**### Breadcrumb (\`partials/breadcrumb.njk\`)**

Mono \`/\`-separated trail: **\*\*Home / Services / Recruitment & Staffing\*\*** (last item no

link). \`crumbs\` array set in \`recruitment-staffing.njk\`.

**### Left column (\`lg\:col-span-7\`)**

1\. **\*\*Eyebrow (\`.eyebrow\`):\*\*** "Contingency — you pay on placement"

2\. **\*\*H1\*\*** (\`font-grotesk text-4xl sm\:text-6xl font-bold\`): "Hire faster, hire right."

3\. **\*\*Lead (\`.lead-copy\`, \`max-w-xl\`):\*\*** "Vetted candidates for contract, temp, or

full-time roles — delivered faster than sifting through a job board yourself."

4\. **\*\*CTAs\*\*** (stack on mobile, row on sm+):

\- \`btn-primary\` — \*\*arrow-right icon\*\* **\*\*"Tell us your hiring need"\*\*** → \`/contact/\`

\- \`btn-outline\` — **\*\*"Compare with search"\*\*** → \`/services/talent-acquisition/\`

5\. **\*\*Hero stat strip\*\*** (\`\<dl>\`, \`grid grid-cols-3\`, \`border-t\` + \`pt-6\`, \`max-w-lg\`) —

from \`stats.json\`, **\*\*first 3, unfiltered\*\***, each a \`count-up\` figure over a

\`.stat-label\`:

\| Figure | Label |

\|--------|-------|

\| \`2,400+\` | Candidates Placed |

\| \`180+\` | Partner Companies |

\| \`12\` | Years of Experience |

\> **\*\*Gated in spirit:\*\*** \`stats.json\` is flagged "confirm these figures with the

\> client before launch." \`count-up.js\` animates each from \`0\`.

**### Right column (\`lg\:col-span-5\`, \`relative\`)**

\- **\*\*Photo panel:\*\*** \`.glass-panel p-3\` wrapping

\`images.services["recruitment-staffing"].cover\` — \`aspect-[4/5]\`, rounded, eager +

\`fetchpriority="high"\`.

\- URL: Unsplash \`photo-1517048676732-d65bc937f952\` (1400×933)

\- alt: "A hiring team taking notes around a meeting table"

\- **\*\*Floating "to start" tag:\*\*** \`.glass-frost\` (frost — floats over the photo),

absolute \`-bottom-4 left-6 sm:-left-6\`:

\- \`.meta\` label "To start"

\- \`font-grotesk text-2xl font-bold\` value **\*\*"15 min"\*\***

**---**

**## 2. Employer wall — GATED**

\`{% include "partials/placed-at.njk" %}\` commented out. \`placed-at.njk\` hotlinks

\`logo.clearbit.com\` for named companies, reading as a verified client list. Intended

params: \`placedAtTitle = "Hired through us"\`, \`placedAtLead = "Teams that filled a role

this way."\` Re-enable only with a real, permitted set of employer names.

**---**

**## 3. What's included**

\`\<section id="included" class="section-container scroll-mt-28 py-16 sm\:py-24">\`

**\*\*Head\*\*** (\`max-w-2xl\`, single column):

\- **\*\*H2 (\`.section-title\`):\*\*** "Four things every engagement gets."

\- **\*\*Lead (\`.lead-copy\`):\*\*** "Built for how you actually hire, whatever the role structure."

**\*\*Definition list\*\*** (\`\<dl>\`, \`sm\:grid-cols-2\`, \`gap-x-12 gap-y-7\`) — inline array

\`included\`. Each item: brand icon + \`.card-title\` term + \`.body-copy\` description on a

\`border-t border-ink/15 pt-5\` hairline.

\| Icon | Term | Description |

\|------|------|-------------|

\| target | Candidate sourcing | Active and passive candidate networks built specifically for your role, not a job-board repost. |

\| shield | Screening & vetting | Skills, references, and fit assessed before a candidate ever reaches your inbox. |

\| briefcase | Staffing models | Contract, temp-to-hire, or permanent — whichever structure fits the role. |

\| users | Industry specializations | Dedicated sourcing pipelines in technology, finance, healthcare, and more. |

**---**

**## 4. Where we place**

\`\<section id="sectors" class="scroll-mt-28 border-y border-white/60 bg-paper/50 py-16 sm\:py-24">\`

— paper band. Sits high because employers scan for their own sector before reading

anything else. Data from \`\_data/industries.json\` (note: "only list sectors with real

placement history").

**\*\*Head\*\*** (\`max-w-2xl\`):

\- **\*\*H2 (\`.section-title\`):\*\*** "Where we place."

\- **\*\*Lead (\`.lead-copy\`):\*\*** "Employers scan for their own sector first. Here's ours."

**\*\*Sector list\*\*** (\`\<ul>\`, \`sm\:grid-cols-2 lg\:grid-cols-3\`, \`gap-x-12 gap-y-7\`) — each

item: sector icon + \`.card-title\` name + \`.body-copy\` role list, on a hairline.

\| Icon | Sector | Roles | (share\*) |

\|------|--------|-------|----------|

\| code | Technology & Software | Engineers, QA, DevOps, Data | 38% |

\| chart | Finance & Fintech | Analysts, Risk, Compliance | 21% |

\| heart | Healthcare & Life Sciences | Clinical ops, Informatics | 14% |

\| bolt | Manufacturing & Logistics | Supply chain, Ops, Planning | 12% |

\| target | Retail & E-commerce | Merchandising, Growth, CX | 9% |

\| users | Professional Services | Consulting, Accounting, HR | 6% |

\> \*\`share\` is present in \`industries.json\` but **\*\*not currently rendered\*\*** on this page

\> (it's used by the services-overview matrix). Listed here for completeness.

**---**

**## 5. How engagements work**

\`\<section id="terms" class="section-container scroll-mt-28 py-16 sm\:py-24">\`

Structure, not rates — an employer who can't find terms assumes they're bad.

**\*\*Head:\*\*** **\*\*H2 (\`.section-title\`):\*\*** "How engagements work." \*\*(no lead)\*\*

**\*\*Two-column layout\*\*** (\`lg\:grid-cols-5\`, top-aligned):

**### Prose list (\`lg\:col-span-3\`) — inline array \`terms\`**

Each row: \`font-display\` term (\`sm\:col-span-4\`) beside \`.body-copy\` detail (\`sm\:col-span-8\`).

\| Term | Detail |

\|------|--------|

\| Permanent placements | Contingency-based. You pay when someone starts, not before. |

\| Contract & temp | A flat markup on hourly billing, quoted upfront. |

\| No retainer | Nothing to begin, and no minimum for a one-off role. |

\| Ongoing partnerships | Move to a dedicated account structure once volume picks up. |

**### "Terms at a glance" panel (\`lg\:col-span-2\`)**

\`rounded-2xl border border-brand/25 bg-brand/10 p-6\` — brand-tinted callout.

\- \`.meta\` label "Terms at a glance"

\- \`\<dl>\` — each row is value-over-label (\`flex-col-reverse\`):

\| Label | Value |

\|-------|-------|

\| Permanent | Contingency — you pay on placement |

\| Contract | Flat hourly markup, no retainer |

\| To start | A role brief and 15 minutes |

\- \`.link-arrow\` "Tell us your hiring need" + arrow → \`/contact/\`

**\*\*Standing caveat\*\*** (\`.file-inset .meta\`, \`max-w-2xl\`, below the grid):

"Rates depend on role and seniority — we'll quote before any work begins."

**---**

**## 6. The process**

\`\<section id="procedure" class="scroll-mt-28 border-y border-white/60 bg-paper/50 py-16 sm\:py-24">\`

— paper band. Ordinal, so it keeps step numbers.

**\*\*Head\*\*** (\`max-w-2xl\`):

\- **\*\*Eyebrow (\`.eyebrow\`):\*\*** "Step by step"

\- **\*\*H2 (\`.section-title\`):\*\*** "From requirement to onboarding."

**\*\*Timeline\*\*** (\`partials/process-timeline.njk\`) — glass panel, \`\<ol>\` of \`.trace-badge\`

numbered circles on a hairline (\`lg\:grid-cols-5\`). Inline array \`steps\` — \*\*no

durations on this page\*\* (all steps description-only):

\| # | Step | Description |

\|---|------|-------------|

\| 1 | Requirement analysis | We start with the role, the team, and what "right" actually looks like. |

\| 2 | Sourcing | Active outreach across our network, not a passive posting. |

\| 3 | Screening | Skills and reference checks before you see a single resume. |

\| 4 | Client interviews | A shortlist you can actually choose from. |

\| 5 | Onboarding | Support through the offer and the first day. |

**---**

**## Gated section (commented out in \`recruitment-staffing.njk\`)**

\- **\*\*Employer quotes\*\*** (\`#statements\`, \`section-title\` "On record, from the hiring

side.") — \`testimonials.json\` ships stock-photo placeholders with company names

attached to the quotes. Re-enable the \`sm\:grid-cols-2\` card grid

(\`testimonial-card.njk\`, \`t.employer\` only) once quotes are real and attribution is

permitted.

**---**

**## 7. FAQ (\`partials/faq-accordion.njk\`)**

\`\<section id="faq" class="scroll-mt-28 py-14 sm\:py-20">\`, inner \`max-w-3xl\`.

Params: \`faqKey = "recruitment-staffing"\`, \`faqTitle = "Before you brief us."\`

\- **\*\*Eyebrow (\`.eyebrow\`):\*\*** "Standing questions" \*\*(default)\*\*

\- **\*\*H2 (\`font-display text-2xl sm\:text-3xl\`):\*\*** "Before you brief us."

\- **\*\*Rows\*\*** — dashed \`.docket-disclosure\` lines from

\`faqs.json["recruitment-staffing"]\`, chevron toggle, panel hidden until opened

(\`faq-accordion.js\`):

\| Question | Answer (summary) |

\|----------|------------------|

\| What's your pricing model? | Contingency for permanent placements; flat markup on hourly billing for contract/temp — no retainer to start. |

\| Is there a minimum engagement? | No minimum for one-off roles. Ongoing partnerships get a dedicated account structure once volume picks up. |

\| Which industries do you staff for? | Technology, finance, healthcare, and light-industrial roles, with sourcing networks built for each. |

\| What's your average time-to-fill? | 18 days for contract roles, 34 days for permanent placements — both tracked and reported per engagement. |

**---**

**## 8. Closing CTA (\`partials/cta-section.njk\`)**

Ink band, \`py-20 sm\:py-28\`, centred, inverted tokens. Params set in

\`recruitment-staffing.njk\`:

\- **\*\*Status chip (\`glass-dark\`):\*\*** status dot + **\*\*"Ready when you are"\*\*** (\`ctaStamp\`)

\- **\*\*H2:\*\*** "Tell us your hiring need."

\- **\*\*Subtext:\*\*** "Describe the role and we'll come back with how we'd fill it, and what

it would cost."

\- **\*\*Buttons:\*\***

\- \`btn-primary\` — **\*\*"Talk to Our Team"\*\*** + arrow → \`/contact/?role=employer\`

\- outline pill — \*\*phone icon\*\* **\*\*"+1 (312) 555-0148"\*\*** → \`tel:+13125550148\`

\> Note the CTA link carries \`?role=employer\` — the contact form reads it to preselect

\> the employer path.

**---**

**## Footer (\`partials/footer.njk\`)**

Shared — see [HOME-PAGE.md]\(HOME-PAGE.md). No page-specific variation.

**---**

**## Data & script dependencies**

\| Concern | Source |

\|---------|--------|

\| Hero cover image | \`\_data/images.json\` → \`services.recruitment-staffing.cover\` |

\| Hero stat strip figures | \`\_data/stats.json\` (flagged placeholder — confirm before launch) |

\| Sector list | \`\_data/industries.json\` |

\| FAQ questions & answers | \`\_data/faqs.json\` → \`recruitment-staffing\` |

\| Breadcrumb trail | inline \`crumbs\` array |

\| "What's included" list | inline \`included\` array |

\| Engagement terms | inline \`terms\` array |

\| Process steps | inline \`steps\` array |

\| Service title / description / audience (nav, footer, services index) | \`\_data/services.json\` → \`recruitment-staffing\` |

\| Count-up stat animation | \`assets/js/count-up.js\` |

\| FAQ disclosure | \`assets/js/faq-accordion.js\` |

\| Header scroll pill / mobile menu | \`assets/js/header-scroll.js\` · \`nav-toggle.js\` (base layout) |

**\*\*Placeholder / gated — resolve before launch:\*\*** \`stats.json\` figures; employer wall;

employer quotes. Hero image renders from the Unsplash CDN (no build-time warning if

withdrawn — see \`images.json\` note). Time-to-fill figures in the FAQ (18 / 34 days)

should be confirmed against real engagement data.

---

# Recruitment & Staffing — Creative Layout & Content Redesign

**Route:** `/services/recruitment-staffing/`

**Source:** `src/services/recruitment-staffing.njk` → `layouts/page.njk` → `layouts/base.njk`

**Title:** Recruitment & Staffing — Net Cloud Edge

**Meta description:** Full-cycle staffing for employers — sourcing, screening, and delivering vetted candidates across contract, temp, and permanent roles.

---

# Design Direction

This page is the **employer-side hiring experience**.

The creative direction should not turn it into a generic recruitment page full of cards, stock-photo grids, or decorative gradients.

The page should feel like a **hiring command center**:

> **You have a role. We build the route from requirement → candidate → interview → onboarding.**

The recurring visual language is:

- hiring brief
- candidate profile
- route / connection line
- checkpoints
- shortlist
- onboarding destination

The existing content remains the source of truth. The redesign changes the **composition, hierarchy, interaction, and visual storytelling**.

---

# Page Experience

```text
HEADER
   ↓
01 HERO
   "Hire faster, hire right."
   Hiring brief + human photo + 15 min marker
   ↓
02 HIRING GAP
   "A role shouldn't sit still."
   ↓
03 WHAT'S INCLUDED
   Four hiring capabilities as an editorial index
   ↓
04 WHERE WE PLACE
   Sector map / hiring landscape
   ↓
05 HOW ENGAGEMENTS WORK
   Commercial terms as a clear hiring contract
   ↓
06 THE PROCESS
   Requirement → Sourcing → Screening → Interview → Onboarding
   ↓
07 FAQ
   "Before you brief us."
   ↓
08 CLOSING CTA
   "Tell us your hiring need."
   ↓
FOOTER
```

---

# 01. HERO — "Hire faster, hire right."

## Layout

Use an asymmetric **7/5 editorial split**.

Do not center the hero.

```text
┌────────────────────────────────────────────────────────────────────┐
│ Home / Services / Recruitment & Staffing                           │
│                                                                    │
│  CONTINGENCY — YOU PAY ON PLACEMENT          ┌──────────────────┐  │
│                                               │                  │  │
│  HIRE FASTER,                                 │   HIRING TEAM    │  │
│  HIRE RIGHT.                                  │   AT TABLE       │  │
│                                               │                  │  │
│  Vetted candidates for contract,             │                  │  │
│  temp, or full-time roles —                  └──────────────────┘  │
│  delivered faster than sifting                    ┌────────────┐  │
│  through a job board yourself.                    │ TO START   │  │
│                                                   │ 15 MIN     │  │
│  [ Tell us your hiring need ]                     └────────────┘  │
│  [ Compare with search ]                                           │
│                                                                    │
│  2,400+                 180+                  12                    │
│  Candidates Placed     Partner Companies     Years Experience      │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

## Content

### Breadcrumb

`Home / Services / Recruitment & Staffing`

### Eyebrow

**Contingency — you pay on placement**

### H1

**Hire faster, hire right.**

### Lead

**Vetted candidates for contract, temp, or full-time roles — delivered faster than sifting through a job board yourself.**

### CTA

**Tell us your hiring need →**

Secondary:

**Compare with search →**

### Stat strip

Preserve the existing first-three `stats.json` values:

- `2,400+` — Candidates Placed
- `180+` — Partner Companies
- `12` — Years of Experience

These remain **confirmation-gated** before launch.

## Hero visual

Keep:

`images.services["recruitment-staffing"].cover`

Use:

- `aspect-[4/5]`
- `glass-panel p-3`
- rounded image frame
- eager loading
- `fetchpriority="high"`

Keep the existing image URL and alt text from the source specification.

### Floating marker

Place a small glass-frost label overlapping the lower-left edge:

**To start**

**15 min**

The marker should feel like a **service guarantee / starting point**, not a decorative badge.

---

# 02. CREATIVE TRANSITION — "A role shouldn't sit still."

Insert a short editorial transition between the hero and detailed service content.

## Layout

Large statement on the left.

A visual hiring brief on the right.

```text
A ROLE SHOULDN'T
SIT STILL.

                    ┌──────────────────────┐
                    │ OPEN ROLE             │
                    │                      │
                    │ Team: Product        │
                    │ Type: Permanent      │
                    │ Priority: High       │
                    │                      │
                    │ ● sourcing           │
                    └──────────────────────┘
```

### Copy

**A role shouldn't sit still.**

**Supporting copy**

`When a position needs the right person, the work starts before the first resume reaches your inbox.`

The purpose of this section is to create a visual bridge from **problem → recruitment system**.

Do not introduce new numerical claims.

---

# 03. WHAT'S INCLUDED — "Four things every engagement gets."

## Layout

Do not use four cards.

Use a **large editorial index** with a continuous vertical line.

```text
FOUR THINGS
EVERY ENGAGEMENT
GETS.

01 ──────────────────────────────────────────
   TARGET       CANDIDATE SOURCING

                Active and passive candidate
                networks built specifically
                for your role...

02 ──────────────────────────────────────────
   SHIELD       SCREENING & VETTING

                Skills, references, and fit
                assessed before a candidate
                ever reaches your inbox.

03 ──────────────────────────────────────────
   BRIEFCASE    STAFFING MODELS

                Contract, temp-to-hire, or
                permanent...

04 ──────────────────────────────────────────
   USERS        INDUSTRY SPECIALIZATIONS

                Dedicated sourcing pipelines...
```

## Section head

### H2

**Four things every engagement gets.**

### Lead

**Built for how you actually hire, whatever the role structure.**

## Four items

Preserve the existing terms and descriptions:

### 01 — Candidate sourcing

`Active and passive candidate networks built specifically for your role, not a job-board repost.`

### 02 — Screening & vetting

`Skills, references, and fit assessed before a candidate ever reaches your inbox.`

### 03 — Staffing models

`Contract, temp-to-hire, or permanent — whichever structure fits the role.`

### 04 — Industry specializations

`Dedicated sourcing pipelines in technology, finance, healthcare, and more.`

## Interaction

On desktop:

- left-side heading remains visually anchored
- list scrolls vertically
- active row receives the brand-colored route node
- the connecting line grows as the user moves through the list

On mobile:

- standard vertical list
- no sticky layout
- no horizontal scrolling

---

# 04. WHERE WE PLACE — "Where we place."

This section should feel like a **hiring landscape**, not another six-card grid.

## Layout

Use a paper band with top and bottom hairlines.

At the top:

```text
WHERE WE PLACE.

Employers scan for their own sector first.
Here's ours.
```

Then create a **3-column sector index**.

Each sector is a numbered territory:

```text
01  TECHNOLOGY & SOFTWARE
    Engineers · QA · DevOps · Data

02  FINANCE & FINTECH
    Analysts · Risk · Compliance

03  HEALTHCARE & LIFE SCIENCES
    Clinical ops · Informatics

04  MANUFACTURING & LOGISTICS
    Supply chain · Ops · Planning

05  RETAIL & E-COMMERCE
    Merchandising · Growth · CX

06  PROFESSIONAL SERVICES
    Consulting · Accounting · HR
```

## Data source

Use `_data/industries.json`.

Only display sectors with real placement history.

Do not use the `share` value in this page.

The source notes that `share` exists for the services-overview matrix but is not rendered here.

## Creative visual

Connect the six sectors with a very subtle **network line**.

The line should never compete with the text.

Hovering a sector:

- highlights its node
- reveals the role list
- gently lifts only that sector
- leaves the remaining sectors quiet

---

# 05. HOW ENGAGEMENTS WORK — "How engagements work."

This section should answer the commercial question **without feeling like a pricing page**.

## Layout

Use two unequal columns:

```text
HOW ENGAGEMENTS WORK.

┌────────────────────────────────────┐
│                                    │
│ Permanent placements               │
│ Contingency-based.                 │
│ You pay when someone starts.       │
│                                    │
│ Contract & temp                    │
│ Flat markup on hourly billing.     │
│                                    │
│ No retainer                        │
│ Nothing to begin.                  │
│                                    │
│ Ongoing partnerships               │
│ Dedicated account structure...     │
│                                    │
└────────────────────────────────────┘

                 ┌──────────────────────┐
                 │ TERMS AT A GLANCE     │
                 │                      │
                 │ Permanent             │
                 │ Contingency           │
                 │                      │
                 │ Contract              │
                 │ Flat hourly markup    │
                 │                      │
                 │ To start              │
                 │ A role brief + 15 min │
                 │                      │
                 │ Tell us your need →   │
                 └──────────────────────┘
```

## H2

**How engagements work.**

No lead beneath the heading.

## Terms

Preserve exactly:

### Permanent placements

`Contingency-based. You pay when someone starts, not before.`

### Contract & temp

`A flat markup on hourly billing, quoted upfront.`

### No retainer

`Nothing to begin, and no minimum for a one-off role.`

### Ongoing partnerships

`Move to a dedicated account structure once volume picks up.`

## Terms at a glance

**Permanent**

`Contingency — you pay on placement`

**Contract**

`Flat hourly markup, no retainer`

**To start**

`A role brief and 15 minutes`

CTA:

**Tell us your hiring need →**

## Caveat

`Rates depend on role and seniority — we'll quote before any work begins.`

---

# 06. THE PROCESS — "From requirement to onboarding."

This is the page's main **visual journey**.

## Layout

Do not use five disconnected cards.

Create a **horizontal recruitment trace**.

```text
FROM REQUIREMENT
TO ONBOARDING.

       01                 02                 03                 04                 05

       ●━━━━━━━━━━━━━━━━━━●━━━━━━━━━━━━━━━━━━●━━━━━━━━━━━━━━━━━━●━━━━━━━━━━━━━━━━━━●
       │                  │                  │                  │                  │
   REQUIREMENT          SOURCING          SCREENING          CLIENT            ONBOARDING
    ANALYSIS                                               INTERVIEWS
```

## Head

**Step by step**

### H2

**From requirement to onboarding.**

## Timeline

### 01 — Requirement analysis

`We start with the role, the team, and what "right" actually looks like.`

### 02 — Sourcing

`Active outreach across our network, not a passive posting.`

### 03 — Screening

`Skills and reference checks before you see a single resume.`

### 04 — Client interviews

`A shortlist you can actually choose from.`

### 05 — Onboarding

`Support through the offer and the first day.`

## Interaction

The timeline should behave like a **recruitment trace**.

As the user scrolls:

```text
●────────○────────○────────○────────○
DONE      NEXT
```

Then:

```text
●────────●────────○────────○────────○
          DONE      NEXT
```

The line should progress naturally.

No exaggerated motion.

## Mobile

Convert to a vertical trace:

```text
● 01
│ Requirement analysis
│
● 02
│ Sourcing
│
● 03
│ Screening
│
● 04
│ Client interviews
│
● 05
└ Onboarding
```

---

# 07. EMPLOYER PROOF — GATED

Keep this section commented out until genuine proof exists.

Do not ship:

- fabricated employer names
- Clearbit logo scraping as implied endorsement
- placeholder testimonials
- invented case studies

## When real data is available

Replace the normal logo wall with a **"Hiring ledger"** composition.

```text
HIRING LEDGER

ROLE FILLED                         INDUSTRY
────────────────────────────────────────────────
Senior Software Engineer            Technology
────────────────────────────────────────────────
Financial Analyst                   Finance
────────────────────────────────────────────────
Operations Manager                  Logistics
```

Then allow the real employer logos to appear as secondary evidence.

The source's existing gated employer wall remains the data authority.

---

# 08. EMPLOYER QUOTES — GATED

Keep the quote section disabled until the quotes and attribution are real.

When enabled, use an editorial **quote wall**, not generic testimonial cards.

```text
ON RECORD,
FROM THE HIRING SIDE.

"................................................"

                                      — Employer

        "........................................"

                              — Employer
```

Only render:

- genuine quote
- permitted employer name
- permitted attribution
- approved photo, if any

The existing `testimonials.json` placeholder content must not be treated as production proof.

---

# 09. FAQ — "Before you brief us."

## Layout

Turn the accordion into a **hiring docket**.

```text
BEFORE YOU BRIEF US.

01  What's your pricing model?                         +
────────────────────────────────────────────────────────

02  Is there a minimum engagement?                     +
────────────────────────────────────────────────────────

03  Which industries do you staff for?                 +
────────────────────────────────────────────────────────

04  What's your average time-to-fill?                  +
────────────────────────────────────────────────────────
```

## Eyebrow

**Standing questions**

## H2

**Before you brief us.**

## Questions and answers

Preserve the source content:

### What's your pricing model?

`Contingency for permanent placements; flat markup on hourly billing for contract/temp — no retainer to start.`

### Is there a minimum engagement?

`No minimum for one-off roles. Ongoing partnerships get a dedicated account structure once volume picks up.`

### Which industries do you staff for?

`Technology, finance, healthcare, and light-industrial roles, with sourcing networks built for each.`

### What's your average time-to-fill?

`18 days for contract roles, 34 days for permanent placements — both tracked and reported per engagement.`

## Important

The `18 / 34 days` figures remain **confirmation-gated** against real engagement data before launch.

---

# 10. CLOSING CTA — "Tell us your hiring need."

This should be the visual destination of the page.

## Layout

Use the existing ink band, but add the **recruitment route resolving into a brief**.

```text
START
  │
  ●
  │
REQUIREMENT
  │
  ●
  │
SOURCING
  │
  ●
  │
SCREENING
  │
  ●
  │
INTERVIEW
  │
  ●
  │
ONBOARDING
  │
  ▼

┌─────────────────────────────────────────────┐
│                                             │
│             READY WHEN YOU ARE              │
│                                             │
│       TELL US YOUR HIRING NEED.             │
│                                             │
│ Describe the role and we'll come back       │
│ with how we'd fill it, and what it would     │
│ cost.                                       │
│                                             │
│ [ TALK TO OUR TEAM ]  [+1 (312) 555-0148]  │
│                                             │
└─────────────────────────────────────────────┘
```

## Content

### Status chip

**Ready when you are**

### H2

**Tell us your hiring need.**

### Subtext

**Describe the role and we'll come back with how we'd fill it, and what it would cost.**

### Primary CTA

**Talk to Our Team →**

Route:

`/contact/?role=employer`

### Phone

**+1 (312) 555-0148**

Route:

`tel:+13125550148`

The `?role=employer` parameter must remain because the contact form uses it to preselect the employer path.

---

# 11. HEADER

Use the shared header from `HOME-PAGE.md`.

Behavior:

```text
TOP OF PAGE
transparent / light

        ↓ scroll

FLOATING GLASS PILL
```

No page-specific header variation.

---

# 12. FOOTER

Use the shared footer from `HOME-PAGE.md`.

No page-specific variation.

---

# 13. VISUAL SYSTEM

## Primary metaphor

### The hiring route

Every major section should reinforce the idea of moving a role from **open → filled**.

Use:

- route lines
- nodes
- checkpoints
- document frames
- shortlist markers
- editorial numbering

## Typography

Keep the established brand typography.

Use the display face for:

- hero headline
- major editorial statements
- section titles

Use the grotesk/body face for:

- descriptions
- labels
- navigation
- metadata

## Borders

Prefer:

- hairlines
- thin rules
- dashed disclosure rules in FAQ
- subtle section dividers

Avoid:

- thick decorative borders
- excessive pills
- heavy shadows

## Cards

Cards should be rare.

The page should primarily use:

- editorial lists
- split layouts
- timeline structures
- paper bands
- document-like panels

---

# 14. MOTION

Motion should communicate **hiring progress**.

### Hero

- photo reveal
- subtle route-line draw

### Included

- active node follows the currently visible benefit

### Sectors

- sector node highlights on hover

### Terms

- callout panel enters with subtle vertical movement

### Process

- recruitment trace progresses as the user scrolls

### FAQ

- answer unfolds below the question

### CTA

- final route resolves into the contact action

## Reduced motion

Respect `prefers-reduced-motion`.

Disable:

- route drawing
- parallax
- large transforms

Keep:

- content visibility
- readable transitions
- functional accordion behavior

---

# 15. RESPONSIVE LAYOUT

## Desktop

Use:

- 12-column asymmetric hero
- editorial benefit index
- 3-column sector landscape
- 5-stage horizontal recruitment trace
- large CTA destination

## Tablet

Use:

- 7/5 hero
- 2-column benefits
- 2-column sectors
- compressed process timeline

## Mobile

Use:

- single-column hero
- vertical benefit index
- single-column sectors
- vertical process trace
- stacked CTA buttons

Never allow the route graphics to create horizontal page overflow.

---

# 16. DATA & SCRIPT DEPENDENCIES

| Concern                                | Source                                                      |
| -------------------------------------- | ----------------------------------------------------------- |
| Hero cover image                       | `_data/images.json` → `services.recruitment-staffing.cover` |
| Hero stat strip figures                | `_data/stats.json` — confirm before launch                  |
| Sector list                            | `_data/industries.json`                                     |
| FAQ questions & answers                | `_data/faqs.json` → `recruitment-staffing`                  |
| Breadcrumb trail                       | inline `crumbs` array                                       |
| What's included                        | inline `included` array                                     |
| Engagement terms                       | inline `terms` array                                        |
| Process steps                          | inline `steps` array                                        |
| Service title / description / audience | `_data/services.json` → `recruitment-staffing`              |
| Count-up animation                     | `assets/js/count-up.js`                                     |
| FAQ disclosure                         | `assets/js/faq-accordion.js`                                |
| Header scroll pill / mobile menu       | `assets/js/header-scroll.js` · `nav-toggle.js`              |

---

# 17. PRODUCTION GATES

Before launch, resolve the existing source flags:

### Statistics

Confirm:

- `2,400+`
- `180+`
- `12`

### Employer wall

Only enable with real, permitted employer names.

### Employer quotes

Only enable with genuine, permitted attribution.

### Time-to-fill

Confirm:

- `18 days` contract
- `34 days` permanent

### Hero image

Confirm the external Unsplash image remains available or replace it with an owned/licensed asset.

---

# 18. FINAL CREATIVE RULE

The page should **not look like six sections decorated with graphics**.

It should feel like one continuous employer journey:

```text
OPEN ROLE
    ↓
DEFINE
    ↓
SOURCE
    ↓
VET
    ↓
SHORTLIST
    ↓
INTERVIEW
    ↓
ONBOARD
```

The hero introduces the problem.

The included section explains the capability.

The sector section establishes relevance.

The terms section removes commercial uncertainty.

The process makes the service tangible.

The FAQ removes final friction.

The CTA turns the journey into an actual hiring brief.

> **The creative element is the way the page moves information through a hiring route — not decorative graphics added on top of ordinary cards.**
