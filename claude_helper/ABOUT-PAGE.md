**# About — Full Layout & Content**

**\*\*Route:\*\*** \`/about/\`

**\*\*Source:\*\*** [src/about.njk]\(../src/about.njk) → layout \`layouts/page.njk\` → \`layouts/base.njk\`

**\*\*Title:\*\*** About Us

**\*\*Meta description:\*\*** Why Net Cloud Edge exists, and who we've built it for.

**\*\*Front matter:\*\*** \`glass: true\` · \`extraScripts: [/assets/js/count-up.js]\`

The **\*\*positioning / trust\*\*** page. Opens like a document, not like Home's centred

address to a stranger: cover weighted left, photo exhibit beside it, founding date

pinned to the photo as a floating glass tag.

**\*\*Content rules baked into this page (Hallmark audit pass, matches the service-page redesigns):\*\***

\- **\*\*Hero drops the aurora/dot background.\*\*** Section heads are single-column — one label

directly above the heading, no chapter-marker ghost index, no doubled eyebrow.

\- **\*\*Values are a numbered list on hairline rules\*\***, not a 2×2 glass-card grid.

\- Trust panels lose the icon-chip square and the "File · JS" jargon tags.

\- The filing metaphor is dialled back to the one "Trading since" tag.

\- **\*\*Meet the team stays absent\*\*** (PRD §2.5) — ships with real photos, names and roles

or not at all.

\- **\*\*Company facts section is commented out\*\*** — \`site.json\` flags \`legalEntity\`,

\`founded\` and \`registration\` as placeholders. Restore \`#facts\` once the registered

particulars are verified.

\- The four figures render **\*\*once\*\*** (the foot band), not twice, and no longer assert

themselves as ledger truth. Confirm the numbers in \`stats.json\` before launch.

\- Deep-link ids unchanged: \`#story\`, \`#values\`, \`#trust\` (and gated \`#facts\`).

**---**

**## Page skeleton (top to bottom)**

\| # | Section | Anchor | Ground / treatment | Source |

\| --- | --- | --- | --- | --- |

\| — | Site header | — | Transparent at top → floating glass pill on scroll | \`partials/header.njk\` |

\| 1 | Cover — "Recruiting built around people, not pipelines." | — | \`relative overflow-hidden\`, plain (no aurora); 7/5 grid — copy + CTAs left, \`glass-panel\` photo with floating \`glass-frost\` "Trading since" tag right | inline |

\| 2 | Our story | \`#story\` | \`mx-auto max-w-4xl\`; single \`glass-panel\`, founders' first-person note + framed portrait inset | inline |

\| 3 | Mission & values | \`#values\` | Translucent band (\`border-y border-white/60 bg-paper/50\`); numbered \`\<dl>\` on hairline rules, \`sm\:grid-cols-2\` | inline (\`values\` array) |

\| 4 | Why students & professionals trust us | \`#trust\` | Plain container; two \`glass-panel\` cards, each a 16/9 photo + icon-titled body | inline (\`trust\` array) |

\| — | \*\*Company facts\*\* | \`#facts\` | **\*\*Commented out\*\*** — gated on verified registration particulars | inline (\`facts\` array) |

\| 5 | Stats foot band — "Where things stand." | — | \`partials/stat-counter.njk\`; four count-up figures | \`\_data/stats.json\` |

\| 6 | Closing CTA — "Want to know more?" | — | \`partials/cta-section.njk\` | inline \`cta\*\` vars |

\| — | Site footer | — | Ink band | \`partials/footer.njk\` |

**---**

**## Header**

Shared — see [HOME-PAGE.md]\(../helper/HOME-PAGE.md). No page-specific variation; the

cover section does **\*\*not\*\*** add the aurora/dots layers (deliberate, per the audit pass).

**---**

**## 1. Cover**

\`\<section class="relative overflow-hidden">\` → \`\<div class="section-container pb-14 pt-8 sm\:pb-20 sm\:pt-12">\`.

**### Breadcrumb (\`partials/breadcrumb.njk\`)**

**\*\*Home / About\*\*** — \`crumbs = [{ label: "Home", url: "/" }, { label: "About" }]\`.

**### Layout — \`mt-8 grid grid-cols-1 items-center gap-10 lg\:grid-cols-12 lg\:gap-12\`**

**\*\*Left (\`lg\:col-span-7\`):\*\***

1\. **\*\*Eyebrow (\`.eyebrow\`):\*\*** "Both sides of the same hire"

2\. **\*\*H1\*\*** (\`font-grotesk text-4xl sm\:text-6xl font-bold leading-[1.05]\`): "Recruiting

built around people, not pipelines."

3\. **\*\*Lead (\`.lead-copy\`, \`mt-5 max-w-xl\`):\*\*** "We work both sides of the same gap —

helping students and professionals land roles that fit, and helping employers hire

people who'll stay."

4\. **\*\*Button row (\`mt-8 flex flex-col gap-3 sm\:flex-row\`):\*\***

\- \`.btn-primary\` with \`arrow-right\` icon → "Talk to us" → \`/contact/\`

\- \`.btn-outline\` → "See the services" → \`/services/\`

**\*\*Right (\`relative lg\:col-span-5\`):\*\***

\- \`glass-panel p-3\` wrapping \`office-collaboration.jpg\` (\`aspect-[4/5]\`,

\`loading="eager" fetchpriority="high"\`, alt "Two colleagues working through a

shortlist together")

\- **\*\*Floating \`glass-frost\` tag\*\*** (\`absolute -bottom-4 left-6 sm:-left-6\`, frost not

pane — THEME.md §3): \`.meta\` "Trading since" + \`font-grotesk text-2xl font-bold\` →

\`{{ site.founded }}\`

**---**

**## 2. Our story (\`#story\`)**

\`\<section class="section-container scroll-mt-28 py-16 sm\:py-24">\` → \`mx-auto max-w-4xl\`

→ single \`glass-panel\` with \`md\:grid-cols-[1.4fr\_1fr]\`.

**\*\*Left column:\*\***

\- **\*\*Eyebrow:\*\*** "Our story"

\- Body (\`mt-6 space-y-6\`):

\- \`.body-copy text-[17px]\`: "We started this firm after watching too many good

    candidates lose good opportunities to slow processes, vague feedback, and job

    boards that treat people like line items. At the same time, we watched employers

    struggle to fill roles with anyone but the loudest applicant, not the right one."

\- \`.highlight\`: "A placement should feel like a match, not a transaction."

\- \`.body-copy text-[17px]\`: "So we built one team to work both sides of that gap —

    helping students and professionals land roles that fit, and helping employers hire

    people who'll stay."

\- Sign-off (\`mt-8 border-t border-ink/10 pt-5 font-grotesk text-sm font-semibold\`):

"— The founding team, {{ site.companyName }}"

**\*\*Right column:\*\*** \`\<figure>\` — framed portrait inset (\`office-collaboration.jpg\`,

\`aspect-[4/5]\`, \`rounded-2xl border border-border\`).

**---**

**## 3. Mission & values (\`#values\`)**

\`\<section class="scroll-mt-28 border-y border-white/60 bg-paper/50 py-16 sm\:py-24">\` —

translucent band so the four commitments read apart from the narrative either side.

\- **\*\*H2 (\`.section-title\`):\*\*** "Mission & values."

\- **\*\*Lead (\`.lead-copy\`, \`mt-4\`):\*\*** "Four, and only four — the ones we're willing to be

measured against."

\- \`\<dl class="mt-10 grid gap-x-12 gap-y-7 sm\:grid-cols-2">\` — each item

\`flex gap-4 border-t border-ink/15 pt-5\`, \`.value-index\` number + \`.card-title\` term

\+ \`.body-copy\` description:

\| n | Value | Description |

\| --- | --- | --- |

\| 01 | Integrity | We tell candidates and employers the truth, even when it's not the easy answer. |

\| 02 | Candidate-first | Our fee comes from employers, so our advice to you isn't for sale. |

\| 03 | Speed | Good process shouldn't be slow — we move quickly without cutting corners. |

\| 04 | Long-term partnerships | We measure success by who's still placed a year later, not just the offer. |

**---**

**## 4. Why students & professionals trust us (\`#trust\`)**

\`\<section class="section-container scroll-mt-28 py-16 sm\:py-24">\`.

\- **\*\*H2 (\`.section-title\`, \`max-w-2xl\`):\*\*** "Why students & professionals trust us."

\- \`\<div class="mt-10 grid grid-cols-1 gap-6 sm\:grid-cols-2">\` — two \`glass-panel\`

cards, each a full-bleed 16/9 photo above an icon-titled body:

\| Icon | Title | Body | Image |

\| --- | --- | --- | --- |

\| \`users\` | If you're starting out | Most of the people we place are figuring out their first move — we've built the process around that, not around senior hires who already know the drill. | \`team-at-desk.jpg\` |

\| \`briefcase\` | If you're switching or hiring | Whether you're moving on from a role or trying to fill one, we work from the same playbook: understand the fit before we make the match. | \`interview-conversation.jpg\` |

\> "Meet the team" is intentionally omitted (PRD §2.5).

**---**

**## — Company facts (\`#facts\`) — GATED / commented out**

\`\<section id="facts" class="section-container scroll-mt-28 pb-16 sm\:pb-24">\` — restore

once \`site.json\` \`legalEntity\` / \`founded\` / registration are confirmed.

\- **\*\*H2:\*\*** "The registered particulars."

\- \`glass-panel\` \`\<dl>\` of \`.fact-row\` lines from a \`facts\` array: Trading as

(\`site.companyName\`), Registered as (\`site.legalEntity\`), Founded (\`site.founded\`),

Office (\`site.address.line1\` + \`line2\`), Hours (\`site.hours\`).

**---**

**## 5. Stats foot band (\`partials/stat-counter.njk\`)**

\`statsEyebrow = "The numbers"\` · \`statsTitle = "Where things stand."\` The same four

figures as Home, from \`stats.json\`, animated by \`count-up.js\`.

\> TODO — confirm the numbers in \`stats.json\` before launch (stat-counter note still

\> reads "under review").

**---**

**## 6. Closing CTA (\`partials/cta-section.njk\`)**

\| Var | Value |

\| --- | --- |

\| \`ctaStamp\` | Ready when you are |

\| \`ctaHeadline\` | Want to know more? |

\| \`ctaSubtext\` | Let's talk about where you're headed, or who you're hiring for. |

\| \`ctaLabel\` | Let's talk |

\| \`ctaHref\` | \`/contact/\` |

**---**

**## Footer**

Shared — see [HOME-PAGE.md]\(../helper/HOME-PAGE.md). No page-specific variation.

**---**

**## Data & script dependencies**

\| Concern | Source |

\| --- | --- |

\| Company name / founded / legal entity / address / hours | \`\_data/site.json\` |

\| Values list | inline \`values\` array |

\| Trust cards | inline \`trust\` array |

\| Stat figures | \`\_data/stats.json\` → \`partials/stat-counter.njk\` |

\| Count-up animation | \`assets/js/count-up.js\` |

\| Cover / story / trust photos | \`/assets/images/home/\*\` |

\| Icons (\`arrow-right\`, \`users\`, \`briefcase\`) | \`partials/icons.njk\` |

\| Breadcrumb trail | inline \`crumbs\` array |

\| Header scroll pill / mobile menu | \`assets/js/header-scroll.js\` · \`nav-toggle.js\` (base layout) |

**\*\*Placeholder / gated — resolve before launch:\*\*** confirm \`site.json\` \`legalEntity\`,

\`founded\` and registration particulars, then restore the \`#facts\` section; confirm the

four \`stats.json\` figures; add "Meet the team" only with real photos, names and roles

(PRD §2.5).

---

# Creative Redesign — About

## Creative direction — "The Human Side of the Hire"

This page should feel like the **editorial identity page of the company**, not another service landing page.

The central idea is:

> **A recruiting company built around the people inside the process.**

The visual language should combine:

- editorial storytelling
- real photography
- oversized typography
- thin timeline / relationship lines
- numbered values
- document-like company details
- restrained glass surfaces

The page should feel more personal than the service pages, while still belonging to the same design system.

Do not turn it into:

- a generic corporate "About Us" page
- a founder biography
- a team-directory page
- a giant statistics page
- a testimonial page
- a startup-style gradient showcase

The existing content and production gates remain authoritative.

---

# Page Experience

```text
HEADER
   ↓
01 COVER
   "Recruiting built around people, not pipelines."
   ↓
02 THE STORY
   A problem → a realization → a different way
   ↓
03 THE PRINCIPLES
   Four things we are willing to be measured against
   ↓
04 TWO SIDES OF THE SAME GAP
   Students / Professionals ↔ Employers
   ↓
05 COMPANY RECORD
   Only when verified
   ↓
06 THE NUMBERS
   Existing stats
   ↓
07 CLOSING
   "Want to know more?"
   ↓
FOOTER
```

---

# 01. COVER — "Recruiting built around people, not pipelines."

## Layout

Keep the existing 7/5 split, but make it feel more like an **editorial cover** than a standard service hero.

```text
┌─────────────────────────────────────────────────────────────────────┐
│ HOME / ABOUT                                                        │
│                                                                     │
│ BOTH SIDES OF THE SAME HIRE                                         │
│                                                                     │
│ Recruiting built                    ┌───────────────────────────┐   │
│ around people,                      │                           │   │
│ not pipelines.                      │       PHOTO EXHIBIT       │   │
│                                     │                           │   │
│ We work both sides of the same      │                           │   │
│ gap — helping students and          │                           │   │
│ professionals land roles that       │                           │   │
│ fit, and helping employers hire     │                           │
│ people who'll stay.                 │                           │
│                                     │                           │   │
│ [ Talk to us → ]                    │   └───────────────────────┘   │
│ [ See the services ]                │   TRADING SINCE               │
│                                     │   {{ site.founded }}           │
└─────────────────────────────────────────────────────────────────────┘
```

## Existing content

### Eyebrow

**Both sides of the same hire**

### H1

**Recruiting built around people, not pipelines.**

### Lead

**We work both sides of the same gap — helping students and professionals land roles that fit, and helping employers hire people who'll stay.**

### CTA

**Talk to us →**

`/contact/`

Secondary:

**See the services**

`/services/`

## Visual treatment

Keep:

- plain background
- no aurora
- no dots
- glass photo panel
- `Trading since` glass-frost tag

Use a slightly oversized crop of the existing:

`office-collaboration.jpg`

The photo should feel like a **real working moment**, not a staged corporate hero.

---

# 02. STORY — "It started with the gap."

## Creative concept

The story becomes a **three-beat editorial sequence**.

```text
01  THE PROBLEM
    Slow processes.
    Vague feedback.
    Job boards that treat people like line items.

          ↓

02  THE REALIZATION
    Good candidates were losing good opportunities.
    Employers were seeing the loudest applicant,
    not necessarily the right one.

          ↓

03  THE DECISION
    Build one team that works both sides of the gap.
```

Then place the existing first-person story in the glass panel.

## Layout

Keep the `max-w-4xl` single glass panel, but add a narrow left-side **story rail**:

```text
01
THE PROBLEM
│
02
THE REALIZATION
│
03
THE DECISION
```

The actual story remains unchanged.

## Existing copy

**Our story**

> We started this firm after watching too many good candidates lose good opportunities to slow processes, vague feedback, and job boards that treat people like line items. At the same time, we watched employers struggle to fill roles with anyone but the loudest applicant, not the right one.

### Highlight

**A placement should feel like a match, not a transaction.**

### Resolution

> So we built one team to work both sides of that gap — helping students and professionals land roles that fit, and helping employers hire people who'll stay.

### Sign-off

**— The founding team, {{ site.companyName }}**

## Portrait treatment

Keep the existing framed `office-collaboration.jpg` inset.

Do not add founder names or biographies unless real information is supplied.

---

# 03. MISSION & VALUES — "Four things we will be measured against."

## Layout

This should be one of the strongest visual sections.

Do not use four glass cards.

Use a **large numbered editorial list**.

```text
MISSION & VALUES.

Four, and only four —
the ones we're willing to
be measured against.

01 ─────────────────────────────────────
   INTEGRITY

   We tell candidates and employers
   the truth, even when it's not the
   easy answer.

02 ─────────────────────────────────────
   CANDIDATE-FIRST

   Our fee comes from employers,
   so our advice to you isn't for sale.

03 ─────────────────────────────────────
   SPEED

   Good process shouldn't be slow —
   we move quickly without cutting corners.

04 ─────────────────────────────────────
   LONG-TERM PARTNERSHIPS

   We measure success by who's still
   placed a year later, not just the offer.
```

## Creative detail

Make the number:

`01 / 02 / 03 / 04`

large enough to act as a visual anchor.

The title stays compact.

The description is the readable content.

Each item sits on a hairline rule.

---

# 04. TWO SIDES OF THE SAME GAP

## Purpose

This is the creative addition that gives the About page more personality without inventing new claims.

Instead of another card grid, create a **split relationship diagram**.

```text
                    THE SAME GAP

       STUDENTS / PROFESSIONALS
                  │
                  │
                  ●
             UNDERSTAND
                  │
                  │
                  ●
                MATCH
                  │
                  │
                  ●
              EMPLOYERS
```

Place the two existing trust stories on opposite sides.

---

## Left — "If you're starting out"

Use:

`team-at-desk.jpg`

Title:

**If you're starting out**

Body:

**Most of the people we place are figuring out their first move — we've built the process around that, not around senior hires who already know the drill.**

Icon:

`users`

---

## Right — "If you're switching or hiring"

Use:

`interview-conversation.jpg`

Title:

**If you're switching or hiring**

Body:

**Whether you're moving on from a role or trying to fill one, we work from the same playbook: understand the fit before we make the match.**

Icon:

`briefcase`

---

## Layout

Desktop:

```text
┌────────────────────────────┐
│ PHOTO                      │
│                            │
│ If you're starting out     │
│ ...                        │
└──────────────┬─────────────┘
               │
               ●
               │
┌──────────────┴─────────────┐
│ PHOTO                      │
│                            │
│ If you're switching or     │
│ hiring                     │
│ ...                        │
└────────────────────────────┘
```

Mobile:

Stack naturally.

Remove the central connector if it creates awkward spacing.

---

# 05. COMPANY RECORD — GATED

Do not make this section visible until:

- `site.json` `legalEntity` is verified
- `site.json` `founded` is verified
- registration particulars are verified

When approved, use a **company record sheet** rather than a generic fact grid.

```text
THE REGISTERED PARTICULARS

TRADING AS
{{ site.companyName }}

REGISTERED AS
{{ site.legalEntity }}

FOUNDED
{{ site.founded }}

OFFICE
{{ site.address.line1 }}
{{ site.address.line2 }}

HOURS
{{ site.hours }}
```

Use:

`glass-panel`

with hairline `.fact-row` separators.

No icons.

No decorative graphics.

---

# 06. THE NUMBERS — "Where things stand."

Keep the existing stats band.

Do not duplicate statistics elsewhere.

## Layout

Use the existing:

`partials/stat-counter.njk`

with:

### Eyebrow

**The numbers**

### Heading

**Where things stand.**

The four figures continue to come from:

`_data/stats.json`

and remain confirmation-gated.

## Creative treatment

Place the four figures across a **single continuous horizontal rule**.

```text
2,400+             180+             12             ...
Candidates         Partner          Years          ...
Placed             Companies        Experience
```

The line should visually connect the numbers without turning them into cards.

---

# 07. CLOSING — "Want to know more?"

The final CTA should feel like a **continuation of the story**, not a sales banner.

Keep the existing CTA component.

```text
READY WHEN YOU ARE

Want to know more?

Let's talk about where you're headed,
or who you're hiring for.

[ Let's talk → ]
```

Route:

`/contact/`

Use the existing `cta-section.njk`.

The CTA should remain visually restrained.

---

# 08. HEADER

Use the shared header.

No page-specific header variation.

Cover remains:

- plain
- no aurora
- no dots

Header behavior:

```text
TOP
transparent

SCROLL
floating glass pill
```

---

# 09. FOOTER

Use the shared footer.

Ink band.

No About-specific variation.

---

# 10. VISUAL SYSTEM

## Signature graphic

The About page gets one recurring motif:

### The connection line

A thin line connects:

**People → Understanding → Match → Employer**

Use it only in:

- Story rail
- Two-sides section
- optionally CTA

Do not repeat it in every section.

## Materials

Use:

- paper
- glass
- real photography
- thin ink rules
- large editorial numbers
- restrained accent highlights

## Avoid

- generic corporate icons
- gradients
- decorative blobs
- team headshot grids
- fake testimonials
- excessive cards
- huge quote marks
- animated statistics outside the existing counter

---

# 11. TYPOGRAPHY

Use the established site type system.

### Display

For:

- cover H1
- section titles
- values titles
- story highlight

### Grotesk

For:

- buttons
- navigation
- labels
- metadata

### Mono

For:

- section numbers
- story rail
- company record labels
- stat metadata

---

# 12. MOTION

Keep motion subtle and editorial.

### Cover

Photo can use a very small reveal.

### Story

Story rail markers can fade in as the section enters.

### Values

Numbers can reveal sequentially.

### Two sides

Connector line can draw in.

### Stats

Existing `count-up.js` remains the only count animation.

### Reduced motion

Disable:

- connector drawing
- image transforms
- sequential reveals

Preserve:

- opacity
- layout
- content
- count-up fallback

---

# 13. RESPONSIVE DESIGN

## Desktop

Use:

- 7/5 cover
- story panel with side rail
- large numbered values
- connected two-side composition
- company record sheet
- continuous stats line

## Tablet

Reduce:

- image height
- story rail width
- heading scale

Keep the two-side relationship visible.

## Mobile

Use:

```text
COVER
↓
STORY
↓
VALUES
↓
STARTING OUT
↓
SWITCHING / HIRING
↓
COMPANY RECORD
↓
STATS
↓
CTA
```

The connection line becomes vertical.

No horizontal overflow.

---

# 14. DATA & SCRIPT DEPENDENCIES

| Concern                                                 | Source                                         |
| ------------------------------------------------------- | ---------------------------------------------- |
| Company name / founded / legal entity / address / hours | `_data/site.json`                              |
| Values                                                  | inline `values` array                          |
| Trust stories                                           | inline `trust` array                           |
| Statistics                                              | `_data/stats.json`                             |
| Count-up                                                | `assets/js/count-up.js`                        |
| Cover / story / trust images                            | `/assets/images/home/*`                        |
| Icons                                                   | `partials/icons.njk`                           |
| Breadcrumb                                              | inline `crumbs`                                |
| Header / mobile navigation                              | `assets/js/header-scroll.js` · `nav-toggle.js` |
| Closing CTA                                             | `partials/cta-section.njk`                     |

---

# 15. PRODUCTION GATES

Before launch:

### Company record

Verify:

- legal entity
- founded date
- registration particulars

Only then restore:

`#facts`

### Statistics

Confirm all four values in:

`stats.json`

### Team

Do **not** add "Meet the team" unless real:

- photos
- names
- roles

are available.

### Images

Confirm the existing image assets are licensed / approved for production.

---

# 16. FINAL CREATIVE PRINCIPLE

This page should answer:

```text
WHY DID YOU START?
        ↓
WHAT DO YOU BELIEVE?
        ↓
WHO DO YOU BUILD FOR?
        ↓
HOW DO YOU WORK?
        ↓
WHAT DO THE FACTS SAY?
        ↓
HOW DO I TALK TO YOU?
```

The visitor should leave with a clear impression:

> **This is a recruiting company that cares about the quality of the match, not just moving candidates through a pipeline.**

The creative system should therefore make the **relationship** visible:

```text
PEOPLE
  ↓
UNDERSTANDING
  ↓
FIT
  ↓
MATCH
  ↓
LONG-TERM PARTNERSHIP
```

That is the visual story of the About page.
