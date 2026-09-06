**# Job Placement — Full Layout & Content**

**\*\*Route:\*\*** \`/services/job-placement/\`

**\*\*Source:\*\*** [src/services/job-placement.njk]\(../src/services/job-placement.njk) → layout \`layouts/page.njk\` → \`layouts/base.njk\`

**\*\*Title:\*\*** Job Placement — Net Cloud Edge

**\*\*Meta description:\*\*** Hands-on support from resume to signed offer — matching, coaching, and negotiation help for candidates who want a job placed, not just applications sent.

**\*\*Page flags:\*\*** \`glass: true\` · extra scripts: \`count-up.js\`, \`faq-accordion.js\`

This is the **\*\*pilot redesign\*\*** page (Hallmark audit pass) — the test case for pulling

the site's stronger AI tells out of one service template before rolling the same

changes to the three sibling service pages. It addresses a reader who has \*already

chosen a door\* (they are job hunting), so it opens mid-conversation: left-text /

right-image split, no rotating headline, no "which side are you on?" fork.

Changes made here and not yet on the sibling pages:

\- Hero drops the aurora-blob + dot-field background — solid paper ground; the glass

photo panel and the floating \`$0\` tag carry the depth.

\- Section heads are single-column: the label sits directly above its heading in the

same column (no tag-left / heading-right grid, no chapter-marker ghost index, no

eyebrow on non-ordinal sections).

\- "What's included" is a definition list with inline icons on hairline rules, not a

six-up grid of glass cards.

\- Fabricated proof is gated (success story, candidate-quote grid, employer logo wall).

**---**

**## Page skeleton (top to bottom)**

\| # | Section | Anchor | Ground / treatment | Source |

\|---|---------|--------|--------------------|--------|

\| — | Site header | — | Transparent at top → floating glass pill on scroll | \`partials/header.njk\` |

\| 1 | Hero — "Get placed, not just applied." | — | Solid paper; glass photo panel + floating \`$0\` tag | inline |

\| 2 | \*\*Employer wall — gated / commented out\*\* | — | — | \`partials/placed-at.njk\` |

\| 3 | What's included — "Six things you get, from day one." | \`#included\` | Plain container; definition list on hairlines | inline |

\| 4 | What changes — "On your own… into a void." | \`#changes\` | Paper band (\`bg-paper/50\`), top+bottom hairline; \`.ledger\` table (mobile: contrast cards) | inline |

\| 5 | The process — "Five steps to an offer." | \`#procedure\` | Plain container; numbered trace timeline in a glass panel | \`partials/process-timeline.njk\` |

\| — | \*\*Success story — gated\*\* | \`#story\` | Paper band | commented out |

\| — | \*\*Candidate voices — gated\*\* | \`#voices\` | — | commented out |

\| 6 | FAQ — "Before you get started." | \`#faq\` | Plain container; dashed docket disclosure rows | \`partials/faq-accordion.njk\` |

\| 7 | Closing CTA — "Start your job search today." | — | Ink band, inverted text | \`partials/cta-section.njk\` |

\| — | Site footer | — | Ink band | \`partials/footer.njk\` |

\> Anchors \`#included\`, \`#changes\`, \`#procedure\`, \`#faq\` all carry \`scroll-mt-28\` so a

\> jump lands clear of the sticky header. \`#story\` / \`#voices\` are reserved for the

\> gated sections.

**---**

**## Header (\`partials/header.njk\`)**

Shared across all pages — see [HOME-PAGE.md]\(HOME-PAGE.md). Wordmark left; primary nav

(Home · About · Services▾ · Contact) with the Services dropdown; \`Get Started\` button

→ \`/contact/\` on desktop; click-to-call + hamburger on mobile. No page-specific

variation.

**---**

**## 1. Hero**

\`\<section class="relative overflow-hidden">\` → \`.section-container pb-14 pt-8 sm\:pb-20 sm\:pt-12\`.

Solid paper ground (the pilot dropped the aurora bloom). Two-column on lg:

\`grid lg\:grid-cols-12 lg\:gap-12\`, vertically centred.

**### Breadcrumb (\`partials/breadcrumb.njk\`)**

Mono file-path trail, \`/\`-separated: **\*\*Home / Services / Job Placement\*\*** (last item

no link, \`aria-current="page"\`). Set in \`job-placement.njk\` as:

\`crumbs = [{Home, /}, {Services, /services/}, {Job Placement}]\`.

**### Left column (\`lg\:col-span-7\`)**

1\. **\*\*Eyebrow (\`.eyebrow\`):\*\*** "A named recruiter, start to finish"

2\. **\*\*H1\*\*** (\`font-grotesk text-4xl sm\:text-6xl font-bold\`): "Get placed, not just applied."

3\. **\*\*Lead (\`.lead-copy\`, \`max-w-xl\`):\*\*** "A named recruiter works your search end to

end — resume, matching, interview prep, and negotiation — because a job search

shouldn't be something you do alone."

4\. **\*\*CTAs\*\*** (stack on mobile, row on sm+):

\- \`btn-primary\` — \*\*arrow-right icon\*\* **\*\*"Start your job search"\*\*** → \`/contact/\`

\- \`btn-outline\` — **\*\*"See all services"\*\*** → \`/services/\`

5\. **\*\*Hero stat strip\*\*** (\`\<dl>\`, \`grid grid-cols-3\`, \`border-t\` + \`pt-6\`, \`max-w-lg\`) —

from \`stats.json\`, filtered to drop "Partner Companies" then first 3, each a

\`count-up\` figure over a \`.stat-label\`:

\| Figure | Label |

\|--------|-------|

\| \`2,400+\` | Candidates Placed |

\| \`12\` | Years of Experience |

\| \`94%\` | Placement Success |

\> **\*\*Gated in spirit:\*\*** \`stats.json\` is flagged "confirm these figures with the

\> client before launch." \`count-up.js\` animates each from \`0\` to \`data-target\`.

\> Candidate-facing order — success rate last, not partner count.

**### Right column (\`lg\:col-span-5\`, \`relative\`)**

\- **\*\*Photo panel:\*\*** \`.glass-panel p-3\` wrapping \`images.services["job-placement"].cover\`

— \`aspect-[4/5]\`, rounded, eager + \`fetchpriority="high"\`.

\- URL: Unsplash \`photo-1600880292203-757bb62b4baf\` (1400×1050)

\- alt: "Two people in conversation across a desk during an interview"

\- **\*\*Floating fee tag:\*\*** \`.glass-frost\` (frost density — it floats over the photo, per

THEME.md §3), absolutely positioned \`-bottom-4 left-6 sm:-left-6\`:

\- \`.meta\` label "Cost to you"

\- \`font-grotesk text-2xl font-bold\` value **\*\*"$0"\*\***

This answers the fee question in the first screen (PRD §4) as a visible tag, not small

print under the buttons.

**---**

**## 2. Employer wall — GATED**

\`{% include "partials/placed-at.njk" %}\` commented out. \`placed-at.njk\` hotlinks

\`logo.clearbit.com\` for Amazon / Microsoft / Accenture etc., which reads as a client

list the company can't substantiate. Re-enable only with a real, permitted set of

employer names.

**---**

**## 3. What's included**

\`\<section id="included" class="section-container scroll-mt-28 py-16 sm\:py-24">\`

**\*\*Head\*\*** (\`max-w-2xl\`, single column):

\- **\*\*H2 (\`.section-title\`):\*\*** "Six things you get, from day one."

\- **\*\*Lead (\`.lead-copy\`):\*\*** "Support at every stage of the search, not just a stack of

applications sent on your behalf."

**\*\*Definition list\*\*** (\`\<dl>\`, \`sm\:grid-cols-2\`, \`gap-x-12 gap-y-7\`) — inline array

\`included\` in \`job-placement.njk\`. Each item: a brand-coloured icon + \`.card-title\`

term + \`.body-copy\` description, on a \`border-t border-ink/15 pt-5\` hairline.

\| Icon | Term | Description |

\|------|------|-------------|

\| check | Resume & profile optimization | We rebuild your resume and profile around what actually gets noticed. |

\| users | Interview coaching | Mock interviews and real feedback before it counts. |

\| target | Employer matching | We only put you in front of roles that fit your background and goals. |

\| chart | Offer negotiation support | We help you evaluate and negotiate before you sign anything. |

\| clock | Post-placement check-in | We follow up at 30 and 90 days to make sure it's working out. |

\| briefcase | Application tracking | One recruiter, one thread — no chasing status across job boards. |

**\*\*Standing caveat\*\*** (\`.file-inset .meta\`, \`max-w-2xl\`, below the list):

"No guarantee of an offer, and no promise on timeline — but if a placement doesn't

work out inside 90 days, we re-open your search at no additional cost."

\*\*(Stated here rather than buried in the FAQ.)\*\*

**---**

**## 4. What changes**

\`\<section id="changes" class="scroll-mt-28 border-y border-white/60 bg-paper/50 py-16 sm\:py-24">\`

— paper band, tone shift. Qualitative only (PRD §4): no salary figures, no timelines.

**\*\*Heading doing double duty (\`.assertion sm\:text-3xl\`, \`max-w-2xl\`)\*\*** — no separate

lead: "On your own, an application goes into a void. With us, it goes to someone

already expecting it."

**\*\*Contrast set\*\*** (inline array \`contrasts\`), rendered two ways:

\- **\*\*sm+ — \`.ledger\` table\*\***, two columns:

\| On your own | With us |

\|-------------|---------|

\| Applications into a void, no reply | A named recruiter who tells you where each one stands |

\| No idea why you were passed over | Feedback after every interview |

\| Competing with hundreds of applicants | Introduced to employers already expecting your resume |

\| Guessing what the interview will cover | Prepped for the specific team you're meeting |

\- **\*\*mobile — stacked \`.file-inset\` contrast cards\*\***: each row is \`✕ \<old, struck

through>\` above \`✓ \<new, bold ink>\` — same content, no horizontal scroll, sharper

argument.

**---**

**## 5. The process**

\`\<section id="procedure" class="section-container scroll-mt-28 py-16 sm\:py-24">\`

— genuinely ordinal, so it keeps step numbers.

**\*\*Head\*\*** (\`max-w-2xl\`):

\- **\*\*Eyebrow (\`.eyebrow\`):\*\*** "Step by step"

\- **\*\*H2 (\`.section-title\`):\*\*** "Five steps to an offer."

**\*\*Timeline\*\*** (\`partials/process-timeline.njk\`) — a glass panel holding an \`\<ol>\` of

\`.trace-badge\` numbered circles connected by a hairline (\`lg\:grid-cols-5\`). Steps from

inline array \`steps\`:

\| # | Step | Duration | Description |

\|---|------|----------|-------------|

\| 1 | Consultation | 30 minutes | A conversation about where you are and where you want to go. |

\| 2 | Profile build | 3–5 days | Resume, profile, and positioning built around your target roles. |

\| 3 | Matching | Ongoing | Introductions only to employers that fit — no mass applications. |

\| 4 | Interviews | — | Coaching before every conversation that matters. |

\| 5 | Offer | — | Negotiation support and a check-in once you've started. |

\*\*(Steps 4–5 carry no \`duration\`; the partial hides the line when absent.)\*\*

**---**

**## Gated sections (commented out in \`job-placement.njk\`)**

\- **\*\*Success story\*\*** (\`#story\`, paper band) — previously a named, dated placement

("Sofia", "offer in hand four days after her first interview") that was \*\*written,

not sourced\*\*. Restore only with a real, consented placement. Shape to reuse: photo

beside a Situation / Approach / Result run, result carried as a pull quote.

\- **\*\*Candidate voices\*\*** (\`#voices\`, \`section-title\` "What candidates say, after.") —

\`testimonials.json\` ships stock-photo placeholders with real company names (Amazon,

Microsoft, …) attached to the quotes. Re-enable the \`sm\:grid-cols-2\` card grid

(\`testimonial-card.njk\`, candidates only, excluding \`sofia\`, first 4) once the

quotes are real and attribution is permitted.

**---**

**## 6. FAQ (\`partials/faq-accordion.njk\`)**

\`\<section id="faq" class="scroll-mt-28 py-14 sm\:py-20">\`, inner \`max-w-3xl\`.

Params: \`faqKey = "job-placement"\`, \`faqTitle = "Before you get started."\`

\- **\*\*Eyebrow (\`.eyebrow\`):\*\*** "Standing questions" \*\*(default \`faqEyebrow\`)\*\*

\- **\*\*H2 (\`font-display text-2xl sm\:text-3xl\`):\*\*** "Before you get started."

\- **\*\*Rows\*\*** — dashed \`.docket-disclosure\` lines from \`faqs.json["job-placement"]\`, each

a \`\<button aria-expanded>\` with a rotating chevron, panel hidden until opened

(\`faq-accordion.js\`):

\| Question | Answer (summary) |

\|----------|------------------|

\| Does this cost anything as a candidate? | No — the hiring employer pays our fee, never the candidate. No cost at any stage. |

\| How long does placement usually take? | Depends on field, target roles, and the market. Your recruiter gives a realistic read after the first call — no fixed timeline promised. |

\| What if the placement doesn't work out? | We stay involved 90 days post-placement; if it isn't the right fit in that window we re-open your search at no additional cost. |

\| What industries do you cover? | Technology, finance, healthcare administration, professional services — more added as employer demand grows. |

**---**

**## 7. Closing CTA (\`partials/cta-section.njk\`)**

Ink band, \`py-20 sm\:py-28\`, centred, inverted tokens. Params set in \`job-placement.njk\`:

\- **\*\*Status chip (\`glass-dark\`):\*\*** status dot + **\*\*"Ready when you are"\*\*** (\`ctaStamp\`)

\- **\*\*H2:\*\*** "Start your job search today."

\- **\*\*Subtext:\*\*** "The first conversation is free, and there's no cost to you at any stage."

\- **\*\*Buttons:\*\***

\- \`btn-primary\` — **\*\*"Get Started"\*\*** + arrow → \`/contact/\`

\- outline pill — \*\*phone icon\*\* **\*\*"+1 (312) 555-0148"\*\*** → \`tel:+13125550148\`

**---**

**## Footer (\`partials/footer.njk\`)**

Shared across all pages — see [HOME-PAGE.md]\(HOME-PAGE.md). Four columns (Brand /

Services / Company / Contact), bottom bar with copyright + "System status — live". No

page-specific variation.

**---**

**## Data & script dependencies**

\| Concern | Source |

\|---------|--------|

\| Hero cover image (URL, alt, dimensions) | \`\_data/images.json\` → \`services.job-placement.cover\` |

\| Hero stat strip figures | \`\_data/stats.json\` (flagged placeholder — confirm before launch) |

\| FAQ questions & answers | \`\_data/faqs.json\` → \`job-placement\` |

\| Breadcrumb trail | inline \`crumbs\` array in \`job-placement.njk\` |

\| "What's included" list | inline \`included\` array in \`job-placement.njk\` |

\| "What changes" contrasts | inline \`contrasts\` array in \`job-placement.njk\` |

\| Process steps | inline \`steps\` array in \`job-placement.njk\` |

\| Service title / description / audience (nav, footer, services index) | \`\_data/services.json\` → \`job-placement\` |

\| Count-up stat animation | \`assets/js/count-up.js\` |

\| FAQ disclosure | \`assets/js/faq-accordion.js\` |

\| Header scroll pill / mobile menu | \`assets/js/header-scroll.js\` · \`nav-toggle.js\` (base layout) |

**\*\*Placeholder / gated — resolve before launch:\*\*** \`stats.json\` figures; employer wall;

success story; candidate voices. Hero image renders from the Unsplash CDN (no

build-time warning if the photo is withdrawn — see \`images.json\` note).

---

# Creative Redesign Addendum — Job Placement

## Design intent

This page should feel like a **career navigation experience**, not a conventional recruitment landing page.

The existing information architecture remains intact:

`Hero → Included → What changes → Process → FAQ → CTA`

The redesign changes **how those sections occupy the screen**:

- fewer repeated cards
- stronger editorial typography
- asymmetric compositions
- one recurring visual language: **routes, threads, nodes, documents, and signals**
- meaningful scroll interactions instead of decorative animation
- photography used as a human anchor, not as a generic hero background
- no invented testimonials, employer logos, or performance claims

The visual metaphor is:

> **A candidate arrives with a starting point. A recruiter builds the route. The page shows that route becoming clearer as the candidate moves toward an offer.**

---

# 01. HERO — "Get placed, not just applied."

## Layout

Replace the conventional `7/5` text-image split with a **12-column editorial composition**.

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Home / Services / Job Placement                                      │
│                                                                      │
│  A NAMED RECRUITER, START TO FINISH                                 │
│                                                                      │
│  GET PLACED,                                                         │
│  NOT JUST APPLIED.                    ┌─────────────────────────┐    │
│                                       │                         │    │
│  A named recruiter works              │       CANDIDATE         │    │
│  your search end to end.              │       CONVERSATION      │    │
│                                       │                         │    │
│  [ Start your job search ]            └─────────────────────────┘    │
│  [ See all services ]                         ┌──────────────┐       │
│                                               │ COST TO YOU  │       │
│  2,400+       12        94%                   │     $0       │       │
│  placed       years      success              └──────────────┘       │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Creative device — "The Candidate Route"

A thin animated route line begins beneath the hero copy and visually travels toward the photograph.

Nodes:

`START → PROFILE → MATCH → INTERVIEW → OFFER`

The route is intentionally incomplete at first.

As the visitor scrolls, the line progresses.

This becomes the page's recurring visual language.

### Hero content

Keep the existing copy:

**Eyebrow**

`A named recruiter, start to finish`

**H1**

`Get placed, not just applied.`

**Lead**

`A named recruiter works your search end to end — resume, matching, interview prep, and negotiation — because a job search shouldn't be something you do alone.`

**Primary CTA**

`Start your job search →`

**Secondary CTA**

`See all services →`

### Hero stat treatment

Do **not** present the statistics as three equal cards.

Use an editorial baseline:

```text
2,400+                  12                  94%
Candidates Placed       Years of Experience Placement Success
```

The figures can count up only when the values have been confirmed.

### Hero image treatment

Keep the existing portrait-oriented image, but crop it into an **editorial photo frame** with:

- thin outer border
- oversized `01` behind the frame
- small caption: `THE FIRST CONVERSATION`
- floating `$0` fee marker
- subtle image reveal on page load

Do not add a gradient overlay.

---

# 02. MICRO-TRANSITION — "From application to conversation"

Immediately after the hero, insert a short visual bridge.

```text
APPLICATION
     │
     ▼
┌──────────────┐
│     VOID     │
└──────────────┘

          becomes

┌──────────────┐
│   A PERSON   │
└──────────────┘
     │
     ▼
CONVERSATION
```

### Copy

**Small label**

`THE DIFFERENCE`

**Large statement**

`Your application should go somewhere.`

**Supporting copy**

`With a named recruiter behind it, your search has context, follow-up, and a person accountable for what happens next.`

This is a deliberately short section. It creates breathing room before the detailed feature list.

---

# 03. WHAT'S INCLUDED — "Six things you get, from day one."

## Layout

Keep the existing six benefits and exact copy.

Change the presentation from a definition-list grid into a **vertical editorial index**.

```text
01 ─────────────────────────────────────────────
   RESUME & PROFILE OPTIMIZATION
   We rebuild your resume...

02 ─────────────────────────────────────────────
   INTERVIEW COACHING
   Mock interviews...

03 ─────────────────────────────────────────────
   EMPLOYER MATCHING
   We only put you...

04 ─────────────────────────────────────────────
   OFFER NEGOTIATION SUPPORT
   We help you evaluate...

05 ─────────────────────────────────────────────
   POST-PLACEMENT CHECK-IN
   We follow up...

06 ─────────────────────────────────────────────
   APPLICATION TRACKING
   One recruiter, one thread...
```

### Interaction

On desktop:

- the section heading remains sticky on the left
- the six benefits scroll on the right
- the active item gets a small route-node indicator
- inactive items remain quiet

On mobile:

- normal vertical list
- no sticky behavior
- no horizontal scrolling

### Creative detail

Each item gets a tiny **line icon + route node**, rather than a card.

The line connecting the six items should subtly resemble a candidate journey.

---

# 04. WHAT CHANGES — "On your own… into a void."

This section should become the page's strongest **before / after visual**.

## Layout

Instead of a conventional comparison table, create a large split canvas.

```text
ON YOUR OWN                         WITH US

      ○                                  ●
      │                                  │
      │                                  │
 Application                         Application
      │                                  │
      ↓                                  ↓
    ? ? ?                            Recruiter
      │                                  │
      ↓                                  ↓
   Silence                           Feedback
      │                                  │
      ↓                                  ↓
    Next?                            Interview
                                         │
                                         ↓
                                       Offer
```

### Headline

`On your own, an application goes into a void. With us, it goes to someone already expecting it.`

### Comparison content

Preserve the existing four comparison rows exactly:

- Applications into a void, no reply → A named recruiter who tells you where each one stands
- No idea why you were passed over → Feedback after every interview
- Competing with hundreds of applicants → Introduced to employers already expecting your resume
- Guessing what the interview will cover → Prepped for the specific team you're meeting

### Interaction

When a row enters the viewport:

- the left-side statement appears slightly faded
- the right-side statement draws in with a connecting line
- the line ends at a small filled node

No flashy animation.

The message should feel like **uncertainty becoming a route**.

---

# 05. THE PROCESS — "Five steps to an offer."

## Layout

Turn the existing timeline into a **horizontal journey map**.

```text
01                02                03                04                05

CONSULTATION ─── PROFILE BUILD ─── MATCHING ─── INTERVIEWS ─── OFFER
     ●                 ●                ●                ●                ●
     │                 │                │                │                │
   30 min            3–5 days         ongoing             —                —
```

### Desktop behavior

The journey is pinned while the five steps move through the viewport.

At each step:

- the node enlarges slightly
- the step description appears
- the previous node becomes a quiet completed marker
- the next node remains outlined

### Mobile behavior

Convert it to a vertical route:

```text
● 01
│
├── Consultation
│
● 02
│
├── Profile build
│
● 03
│
├── Matching
│
● 04
│
├── Interviews
│
● 05
│
└── Offer
```

### Important

The existing durations and process copy remain unchanged.

This section should visually communicate **progress**, not merely list five services.

---

# 06. GATED SUCCESS STORY — RESERVED CREATIVE LAYOUT

When genuine, consented proof becomes available, do not use a generic case-study card.

Use a **candidate file / dossier composition**.

```text
CASE FILE  /  PLACEMENT

CANDIDATE
──────────────
Name
Role
Target

SITUATION
──────────────
...

APPROACH
──────────────
...

RESULT
──────────────
...

                         "Pull quote..."
```

### Visual treatment

- off-white paper panel
- redacted/document marks
- subtle handwritten annotation
- oversized result figure only when verified
- candidate image only with permission

This section stays completely hidden until real data exists.

---

# 07. GATED CANDIDATE VOICES — RESERVED CREATIVE LAYOUT

When real testimonials are available, avoid a 2×2 card grid.

Use an **editorial quote wall**:

```text
WHAT CANDIDATES SAY, AFTER.

      "..................................."
                                      — Name

  "...................................................."
                         — Name

          "..................................."
                         — Name
```

Large quotation marks become part of the composition.

Keep attribution factual and permission-cleared.

No fabricated company names or stock-photo testimonials.

---

# 08. FAQ — "Before you get started."

## Layout

Keep the existing accordion behavior, but redesign the visual treatment as a **docket / file index**.

```text
01   Does this cost anything as a candidate?              +
────────────────────────────────────────────────────────────

02   How long does placement usually take?                 +
────────────────────────────────────────────────────────────

03   What if the placement doesn't work out?               +
────────────────────────────────────────────────────────────

04   What industries do you cover?                         +
────────────────────────────────────────────────────────────
```

### Open state

The question remains on the same horizontal line.

The answer unfolds below it with a short vertical route line:

```text
03   What if the placement doesn't work out?          −
     │
     └── We stay involved 90 days post-placement...
```

This keeps the FAQ consistent with the site's route metaphor.

---

# 09. CLOSING CTA — "Start your job search today."

## Layout

Do not use only a centered CTA.

Make this the **destination of the route introduced in the hero**.

```text
START
  │
  ●
  │
PROFILE
  │
  ●
  │
MATCH
  │
  ●
  │
INTERVIEW
  │
  ●
  │
┌───────────────────────────────────────┐
│                                       │
│        OFFER / NEXT STEP              │
│                                       │
│   Start your job search today.        │
│                                       │
│   The first conversation is free,     │
│   and there's no cost to you...       │
│                                       │
│   [ GET STARTED ]                     │
│                                       │
└───────────────────────────────────────┘
```

Keep:

**Status**

`Ready when you are`

**H2**

`Start your job search today.`

**Subtext**

`The first conversation is free, and there's no cost to you at any stage.`

**CTA**

`Get Started →`

**Phone**

`+1 (312) 555-0148`

---

# 10. GLOBAL VISUAL LANGUAGE

## Primary metaphor

### Route / Thread / Signal

Every major section can contain one subtle expression of:

- a connecting line
- a node
- a document
- a checkpoint
- a destination

This creates a recognizable system without forcing a literal illustration into every section.

## Typography

### Display

Keep the existing display family.

Use large editorial sizing selectively:

- hero: very large
- section assertions: large
- ordinary content: restrained

### Body

Keep the existing grotesk/body system for readability.

## Shape language

Prefer:

- thin rules
- square or lightly rounded media frames
- small tags
- circles for route nodes
- document-like panels

Avoid turning everything into rounded glass cards.

---

# 11. MOTION SYSTEM

Motion should explain **progress**, not decorate the page.

### Hero

- image reveal
- route line draw

### Included

- active benefit node

### What changes

- connecting line animation

### Process

- route progression

### FAQ

- answer expansion

### CTA

- route resolves into destination

### Reduced motion

Under `prefers-reduced-motion`:

- disable route drawing
- disable parallax
- disable image movement
- preserve all content and layout
- use simple opacity/visibility changes only

---

# 12. COLOR / MATERIAL DIRECTION

Preserve the existing paper + ink foundation.

Use the existing brand accent for:

- route nodes
- active states
- small icons
- selected labels

Do not introduce a new gradient-heavy color system.

### Material hierarchy

**Paper**

Primary reading surface.

**Ink**

Strong statements and CTA destination.

**Glass**

Use only where already established by the site's design system, primarily for media and small overlays.

**Hairlines**

Primary method of separating content.

---

# 13. RESPONSIVE COMPOSITION

## Desktop

Use the full editorial composition:

- asymmetric hero
- sticky section heads
- horizontal process
- route animations
- overlapping media
- generous whitespace

## Tablet

Reduce overlaps.

- hero becomes 7/5
- process becomes horizontal scroll only if it remains accessible
- sticky headings become static

## Mobile

Do not attempt to preserve desktop compositions literally.

Use:

- single-column editorial flow
- vertical route
- stacked CTAs
- full-width media
- no horizontal page scrolling
- no excessive floating elements

---

# 14. CONTENT PRINCIPLES

The redesign should preserve the current factual discipline.

Never invent:

- placement counts
- success rates
- employer names
- candidate testimonials
- candidate identities
- salary outcomes
- time-to-placement promises

The existing file explicitly marks statistics and proof sections as requiring confirmation before launch. Keep those gates intact.

---

# 15. FINAL PAGE EXPERIENCE

The finished page should feel like this:

```text
ARRIVE
  ↓
A PERSON IS HERE
  ↓
YOUR APPLICATION HAS SOMEWHERE TO GO
  ↓
SIX PIECES OF SUPPORT
  ↓
THE DIFFERENCE BECOMES VISIBLE
  ↓
THE ROUTE TAKES SHAPE
  ↓
FIVE STEPS
  ↓
QUESTIONS ANSWERED
  ↓
THE ROUTE REACHES ITS DESTINATION
  ↓
START YOUR JOB SEARCH
```

The important design principle is:

> **Do not add graphics to the page. Make the page itself behave like a graphic.**

That distinction keeps the redesign creative without turning it into a collection of decorative UI elements.
