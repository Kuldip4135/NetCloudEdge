**# Home Page — Full Layout & Content**

**\*\*Route:\*\*** \`/\`

**\*\*Source:\*\*** [src/index.njk]\(../src/index.njk) → layout \`layouts/page.njk\` → \`layouts/base.njk\`

**\*\*Title:\*\*** Net Cloud Edge — Recruiting & Staffing

**\*\*Meta description:\*\*** Recruiting and staffing for students starting out and professionals moving on — plus the employers who hire both.

**\*\*Page flags:\*\*** \`glass: true\` · extra scripts: \`tabs.js\`, \`text-rotator.js\`

The home page opens \*\*before\*\* the visitor has chosen a side ("I'm hiring" vs "I'm job

hunting"), so the layout keeps both doors equal weight throughout. It is a single

in-place page — the old dual-path split and separate process tabs were merged into one

stateful module (section 3).

**---**

**## Page skeleton (top to bottom)**

| #   | Section                                                            | Ground / treatment                                  | Source                     |
| --- | ------------------------------------------------------------------ | --------------------------------------------------- | -------------------------- |
| —   | Site header                                                        | Invisible at top, floating glass pill on scroll     | `partials/header.njk`      |
| 1   | Hero — Talent Map                                                  | Aurora bloom + dot field + editorial route graphic  | `partials/home-hero.njk`   |
| 2   | _Employer wall — gated / commented out_                            | —                                                   | `partials/placed-at.njk`   |
| 3   | The fork — "Two doors. One team behind both."                      | Interactive branching route + stateful tab panel    | inline in `index.njk`      |
| 4   | Human Equation                                                     | Quiet editorial typography / manifesto interstitial | inline in `index.njk`      |
| 5   | Services — "Four services, one pipeline."                          | Paper band + connected pipeline rail + 2×2 cards    | inline in `index.njk`      |
| 6   | Recruiter Desk — "Less résumé shuffling. More real conversations." | Pinned/sticky storytelling composition              | inline in `index.njk`      |
| 7   | Standing policy — "Four things every placement follows"            | Single glass pane, quiet rule strip                 | inline in `index.njk`      |
| —   | _Proof / outcomes — gated until data is genuine_                   | Large editorial metrics / case-study moments        | commented out              |
| —   | _Live placement feed — gated_                                      | —                                                   | commented out              |
| 8   | People behind the placement                                        | Asymmetric portrait/editorial composition           | inline in `index.njk`      |
| 9   | Closing CTA — "Ready to find your footing?"                        | Ink band + returning route map                      | `partials/cta-section.njk` |
| —   | Site footer                                                        | Ink band                                            | `partials/footer.njk`      |

**---**

**## Header (\`partials/header.njk\`)**

Top bar. At the very top of the page it is transparent chrome (no ground, no border) so

the hero bloom runs edge-to-edge behind it. After a few pixels of scroll,

\`header-scroll.js\` adds \`.is-scrolled\` and it becomes a floating frosted-glass pill with

a hairline border, soft shadow, and a shorter row.

**\*\*Left:\*\*** wordmark "Net Cloud Edge" (links to \`/\`).

**\*\*Primary nav (desktop ≥ lg):\*\***

\- Home → \`/\`

\- About → \`/about/\`

\- Services → \`/services/\` — has a hover/focus dropdown (420px glass panel, 2-col grid):

\- Job Placement → \`/services/job-placement/\`

\- Recruitment & Staffing → \`/services/recruitment-staffing/\`

\- Talent Acquisition → \`/services/talent-acquisition/\`

\- IT Training → \`/services/it-training/\`

\- Contact → \`/contact/\`

**\*\*Right (desktop):\*\*** \`Get Started\` button → \`/contact/\`

**\*\*Right (mobile < lg):\*\*** click-to-call phone icon (\`tel:+13125550148\`) + hamburger

button (\`nav-burger\`, three bars → X, driven off \`aria-expanded\`).

**\*\*Mobile menu (\`#mobile-menu\`):\*\*** full nav list; Services is a collapsible accordion

with the same four children; \`Get Started\` button at the bottom (full-width).

**---**

**## 1. Hero (\`partials/home-hero.njk\`)**

Centred, full page measure, image as a wide band \*\*below\*\* the copy — so the first screen

on every breakpoint is headline + CTAs, not a photo. Distinct from the service pages'

left-text/right-image \`cover-sheet.njk\`.

**\*\*Decorative ground (aria-hidden):\*\*** \`.hero-aurora\` with three drifting brand blobs

(\`aurora-blob-1/2/3\`) + \`.hero-dots\` crisp centre-lit dot field. Transform-only motion;

collapses to a static hold under \`prefers-reduced-motion\`. This is the only screen on the

site allowed the bloom (scoped exception to the no-glow rule).

**\*\*Content, in order:\*\***

1\. **\*\*Eyebrow (\`meta\`):\*\*** \`212 Wabash Ave, Suite 500 · Chicago, IL 60601\`

\*\*(from \`site.address.line1\` · \`site.address.line2\`)\*\*

2\. **\*\*H1 — rotating headline:\*\***

\- Accessible full sentence (visually hidden): \*"Recruiting for students starting out,

     professionals moving on, and the employers hiring both."\*

\- Visible (aria-hidden presentation):

     \- Line 1: **\*\*"Recruiting for"\*\***

     \- Line 2: rolling mask cycling **\*\*students → professionals → employers\*\*** (→ loops

       back to students). Hold 1800ms + 400ms roll ≈ 2200ms per word. First word is

       pre-rendered in the mask so the hero is correct before \`text-rotator.js\` runs.

\- Hover / keyboard focus anywhere in the hero (\`data-rotator-scope\`) pauses the

     rotation.

3\. **\*\*Lead copy:\*\*** "Two doors, one team behind both — matched by people who read the

brief, not a keyword filter."

4\. **\*\*Two CTAs (equal weight, solid + outline):\*\***

\- \`btn-primary\` — \*\*users icon\*\* **\*\*"Find a job"\*\*** → \`/services/job-placement/\`

\- \`btn-outline\` — \*\*briefcase icon\*\* **\*\*"Hire talent"\*\*** → \`/services/recruitment-staffing/\`

5\. **\*\*Meta line:\*\*** "Free for candidates — employers pay our fee."

6\. **\*\*Hero image (\`\<figure>\`):\*\*** \`hero-team-meeting.jpg\`, alt "A recruiter and a candidate

in conversation", \`aspect-[16/10]\` (mobile) / \`aspect-[21/9]\` (sm+), rounded, shadow,

eager + \`fetchpriority="high"\`.

\- \*\*Gated:\*\* the \`\<figcaption>\` stat strip (from \`stats.json\`) is commented out —

     placeholder figures. Restoring it also re-adds \`count-up.js\`.

**### Creative layer — Hero visual composition**

The hero should feel like a **recruitment control room**, not a conventional staffing landing page.

- Keep the existing centred copy and equal-weight CTAs.
- Add a very thin **orbit / route line** behind the headline, using a few connected nodes rather than a literal illustration.
- Nodes represent the three audiences already used by the rotator: `STUDENTS`, `PROFESSIONALS`, `EMPLOYERS`.
- One small animated node travels the route while the headline rotates. The movement should be slow and almost mechanical — no flashy particle effect.
- The hero photo remains the visual anchor below the copy.
- Add 3 small **annotation labels** around the image, visually resembling editorial callouts:
  - `01 — READ THE BRIEF`
  - `02 — FIND THE FIT`
  - `03 — STAY THROUGH THE OFFER`
- These labels should connect to the image with hairline rules, not cards.
- On mobile, collapse the annotations into a single compact row below the image.
- Keep all decorative elements `aria-hidden="true"`.

**Hero composition sketch**

```text
                 [STUDENTS]
                      ·
                      │
        ┌─────────────┼─────────────┐
        │        RECRUITING          │
        │            FOR             │
        │     [professionals]       │
        │                            │
        │  Two doors. One team.     │
        │                            │
        │ [ FIND A JOB ] [ HIRE ]   │
        └────────────────────────────┘
                      ·
                   [EMPLOYERS]

        ┌───────────────────────────────┐
        │         HERO IMAGE            │
        │                               │
        │  01 READ     02 FIND     03   │
        │  THE BRIEF   THE FIT     STAY │
        └───────────────────────────────┘
```

**Motion rule:** animate opacity/transform only. No glowing particles, blur-heavy effects, or continuous movement that competes with the rotating headline.

**---**

**## 2. Employer wall — GATED**

\`partials/placed-at.njk\` include is commented out in \`index.njk\`. Restores only with

genuine, permission-cleared placements per company (\`companies.json\` note). Intended

title "Referenced employers" / lead "Placements closed with these companies."

**---**

**## 3. The fork — "Two doors. One team behind both."**

\`\<section class="section-container py-16 sm\:py-24">\` — plain ground, no competing

section rail. The single most important decision on the page. Rendered as **\*\*tabs\*\***, not

two columns, because a visitor is only ever on one side of the transaction.

**\*\*Section head (\`max-w-2xl\`):\*\***

\- **\*\*H2:\*\*** "Two doors. One team behind both."

\- **\*\*Lead:\*\*** "Pick your side of the table. What changes is who does the work for whom —

the people doing it don't. Every step below has a real time cost attached."

**\*\*Tab module (\`data-tabs\`, driven by \`tabs.js\`):\*\*** iterates \`paths.list\`.

Tab buttons (full-width on mobile, inline on sm+), \`role="tablist"\` labelled

"Choose your path":

\| Order | \`slug\` | Button label | Panel |

\|-------|--------|--------------|-------|

\| 1 (default selected) | \`seekers\` | **\*\*"I'm job hunting"\*\*** | \`#panel-seekers\` |

\| 2 (\`hidden\` until selected) | \`employers\` | **\*\*"I'm hiring"\*\*** | \`#panel-employers\` |

\> Button label logic: \`"I'm hiring" if path.slug == "employers" else "I'm job hunting"\`.

\> Panels ship with panel 1 visible and panel 2 \`hidden\`, so the section is correct

\> before/without JS.

Each panel is a \`glass-panel\` containing:

**\*\*a) Positioning row\*\*** (border-bottom, stacks on mobile / row on sm+):

\- \`file-tag\` chip = \`path.label\`

\- **\*\*H3\*\*** = \`path.headline\`

\- Paragraph = \`path.lead\`

\- \`btn-primary\` (right, shrink-0) = \`path.cta.label\` + arrow-right icon → \`path.cta.href\`

**\*\*b) Two-column body\*\*** (\`lg\:grid-cols-2\`):

\- **\*\*Left — "What you get"\*\*** (\`meta\` label): unordered list of \`path.benefits\`, each an

icon + bold title + \`text-ink/70\` description. **\*\*Never numbered.\*\***

\- **\*\*Right — "How it runs"\*\*** (\`meta\` label): ordered list of \`path.steps\`, each a

\`trace-badge\` number + label + mono \`duration\` + \`text-ink/70\` description.

**### Panel content (from \`\_data/paths.json\`)**

**#### Panel 1 — \`seekers\` · file-tag "For job seekers"**

\- **\*\*Headline:\*\*** "Someone whose job is getting you hired."

\- **\*\*Lead:\*\*** "Not a job board with a login. A recruiter who reads your resume, knows

which employers are actually hiring, and stays with you through the offer."

\- **\*\*CTA:\*\*** "Explore job placement" → \`/services/job-placement/\`

**\*\*What you get:\*\***

\| Icon | Title | Text |

\|------|-------|------|

\| target | Matched, not blasted | Your profile goes to employers who are hiring for it — never sprayed across a hundred listings. |

\| users | Interview coaching | Prep before every conversation that matters, on the questions that role will actually ask. |

\| check | Offer and negotiation help | We stay in the room through the offer, and tell you plainly when one isn't worth taking. |

\| code | Training that leads somewhere | If a skills gap is the blocker, our IT tracks feed straight back into this pipeline. |

\| heart | Free for candidates | You are never invoiced. Employers pay our fee — that is the whole model, stated up front. |

**\*\*How it runs:\*\***

\| # | Step | Duration | Description |

\|---|------|----------|-------------|

\| 1 | Apply | 10 minutes | Tell us where you are and where you want to be. One form, no account to create. |

\| 2 | Intake call | Within 2 business days | A recruiter reads your resume properly, then calls to fill in what it left out. |

\| 3 | Match | Ongoing | We put you in front of employers hiring for your actual profile, and tell you who and why. |

\| 4 | Interview | Per conversation | Coaching before each round, and honest feedback after the ones that don't land. |

\| 5 | Placement | Offer to day 90 | Negotiation support, then a check-in ninety days in to make sure it stuck. |

**#### Panel 2 — \`employers\` · file-tag "For employers"**

\- **\*\*Headline:\*\*** "A shortlist you can act on this week."

\- **\*\*Lead:\*\*** "Sourced, screened, and reference-checked against the brief you actually

wrote — not a keyword-matched version of it."

\- **\*\*CTA:\*\*** "Explore hiring services" → \`/services/recruitment-staffing/\`

**\*\*What you get:\*\***

\| Icon | Title | Text |

\|------|-------|------|

\| briefcase | Screened before you see them | Every candidate is interviewed by a person against your brief before the resume reaches you. |

\| chart | Contract, temp, or permanent | One team across all three, so a role can change shape without restarting the search. |

\| shield | Verification built in | Employment, education, and reference checks handled before an offer becomes a hire. |

\| target | Specialist search when volume won't work | Senior and hard-to-fill roles move to Talent Acquisition, a different practice with a different method. |

\| support | Terms stated plainly | Engagement structure is on the page, not held back for a call. You know how we work before you enquire. |

**\*\*How it runs:\*\***

\| # | Step | Duration | Description |

\|---|------|----------|-------------|

\| 1 | Brief | 45 minutes | We take the role properly — the work, the team, the constraints, and what has failed before. |

\| 2 | Source | Days 1–5 | Active search across our bench and the wider market, not a repost of your listing. |

\| 3 | Screen | Days 3–8 | Human interviews against your brief. You receive a shortlist with notes, not a resume dump. |

\| 4 | Interview | Your schedule | We coordinate rounds, chase feedback, and keep candidates warm while you decide. |

\| 5 | Verify and close | Offer to start date | Background checks, offer management, and a follow-up once they're actually in the seat. |

**### Creative layer — The fork becomes a visual decision**

Keep the existing tab logic and content, but make the module feel like a **single branching route**.

Above the tab buttons, add a compact diagram:

```text
                         YOU
                          │
                ──────────●──────────
                │                     │
          I'M JOB HUNTING        I'M HIRING
                │                     │
          Find the fit          Build the team
                │                     │
                └─────────●───────────┘
                          │
                    ONE TEAM
```

Implementation direction:

- The central node is a small outlined circle.
- Two hairline branches lead toward the two tabs.
- Selecting a tab animates the active branch from muted to brand treatment.
- The inactive branch remains visible so the page always communicates that both audiences are supported.
- Do not introduce a third card or separate visual panel; the tabbed interaction remains the core decision.
- On mobile, turn the diagram into a vertical route:

`YOU → CHOOSE YOUR SIDE → PATH → ONE TEAM`

**Micro-interaction:** when the selected tab changes, the small route marker moves to the selected branch. Use a short transform transition only.

**---**

**## 4. Services — "Four services, one pipeline."**

\`\<section class="border-y border-white/60 bg-paper/50 py-16 sm\:py-24">\` — tone shift to a

paper band separates the catalogue from the argument on either side.

**\*\*Head row\*\*** (stacks on mobile):

\- **\*\*H2:\*\*** "Four services, one pipeline."

\- **\*\*Meta (right):\*\*** "Source → vet → place → upskill"

**\*\*2×2 card grid\*\*** (\`sm\:grid-cols-2\`) — iterates \`services.list\`. Each card is a

\`glass-panel card-lift\` link → \`service.url\`:

\- \`icon-chip\` with \`service.icon\`

\- **\*\*H3\*\*** = \`service.title\`

\- Paragraph = \`service.shortDescription\`

\- Audience \`file-tag\` chips: Students / Professionals / Employers (per \`service.audience\`)

\- \`link-arrow\` "Learn more" + arrow

\| Card | Icon | Title | Short description | Audience chips |

\|------|------|-------|------------------|----------------|

\| 1 | briefcase | Job Placement | We match you to roles worth taking, then help you close the offer. | Students, Professionals |

\| 2 | users | Recruitment & Staffing | Sourced, screened, and ready candidates for contract or full-time roles. | Employers |

\| 3 | target | Talent Acquisition | Strategic search for specialized and leadership hires. | Employers |

\| 4 | code | IT Training | Skill-building tracks that feed directly into our placement pipeline. | Students |

**\*\*Router row\*\*** (full-width, below the grid) — \`glass-frost card-lift\` link →

\`/services/\`, with a \`border-brand/25\` hairline so it reads as the odd one out:

\- \`icon-chip icon-chip-accent\` with target icon

\- **\*\*H3:\*\*** "Not sure which one?"

\- Paragraph: "One table, all four services, mapped against who each is actually built for."

\- \`link-arrow\` "Compare all four" + arrow

**### Creative layer — Make the four services read as one system**

The current 2×2 cards should remain, but add a **visual pipeline rail** underneath the section heading and above the cards:

```text
SOURCE ─────── VET ─────── PLACE ─────── UPSKILL
  ●              ●            ●             ●
  │              │            │             │
  JOB          RECRUIT       TALENT         IT
PLACEMENT      & STAFFING   ACQUISITION   TRAINING
```

- Each service card corresponds to one point in the pipeline.
- The rail uses the same hairline treatment as the site's borders.
- Small numbered markers are structural, not decorative.
- Hovering a card highlights its corresponding pipeline node.
- On touch/mobile, keep the rail static and stack the cards normally.
- The service cards should have **different visual signatures** without using four unrelated colors:
  - Job Placement → target / destination motif
  - Recruitment & Staffing → people / network motif
  - Talent Acquisition → focused search / crosshair motif
  - IT Training → code / progression motif
- Prefer CSS line illustrations or existing iconography over stock illustrations.

**Optional card detail:** add a tiny `NEXT →` route label in the bottom-right of each card so the cards feel like destinations in one system rather than four unrelated products.

**---**

**## 5. Standing policy — "Four things every placement follows"**

\`\<section class="section-container py-14 sm\:py-16">\` — a single \`glass-panel\`, a quiet

rule strip rather than a third big heading. Policy list is defined inline in \`index.njk\`.

**\*\*Label (\`meta\`):\*\*** "Four things every placement follows"

**\*\*Definition grid\*\*** (\`sm\:grid-cols-2 lg\:grid-cols-4\`), each item: \`value-index\` number +

\`card-title\` term + \`text-ink/70\` description.

\| # | Term | Description |

\|---|------|-------------|

\| 01 | Personalised matching | A recruiter who has actually read your resume, not a keyword filter with a friendly name. |

\| 02 | Verified employers | Every partner company is vetted before you are ever introduced to it. |

\| 03 | One thread, one recruiter | No chasing status across four job boards and three inboxes. One person owns your search. |

\| 04 | End to end, past the offer | We stay involved through negotiation and check in ninety days after you start. |

**---**

**## Gated sections (commented out in \`index.njk\`)**

\- **\*\*Proof band\*\*** — \`growth-table.njk\` (\`growth.json\`), traced case study

("Priya — sixteen days to an offer", \`#case-study\`), signed statements

(\`#statements\`, \`testimonials.json\`). All on placeholder / stock data.

\- **\*\*Live placement feed\*\*** — \`placement-feed.njk\` (\`placements.json\` marked

"PLACEHOLDER DATA").

Restore each only when the underlying data is real and consented.

**---**

**## 6. Closing CTA (\`partials/cta-section.njk\`)**

\`\<section class="relative overflow-hidden bg-ink py-20 sm\:py-28">\` — ink band, centred,

symmetric with the hero so the page "returns to the console" at the end. Tokens invert

(text is \`paper\` / \`paper/65\`).

\- **\*\*Status chip (\`glass-dark\`):\*\*** status dot + "Ready when you are" \*\*(default \`ctaStamp\`)\*\*

\- **\*\*H2:\*\*** "Ready to find your footing?"

\- **\*\*Subtext:\*\*** "Whether you're job hunting or hiring, the first conversation is free."

\- **\*\*Buttons:\*\***

\- \`btn-primary\` — **\*\*"Get started"\*\*** + arrow → \`/contact/\`

\- outline pill — \*\*phone icon\*\* **\*\*"+1 (312) 555-0148"\*\*** → \`tel:+13125550148\`

\*\*(Params set in \`index.njk\`: \`ctaHeadline\`, \`ctaSubtext\`, \`ctaLabel\`, \`ctaHref\`.)\*\*

**---**

**## Footer (\`partials/footer.njk\`)**

Ink band, \`text-paper\`. Four columns (\`lg\:grid-cols-4\`):

1\. **\*\*Brand:\*\*** wordmark "Net Cloud Edge" → \`/\`; tagline "Where careers find their

footing."; social links — LinkedIn, Instagram, X.

2\. **\*\*Services:\*\*** Job Placement · Recruitment & Staffing · Talent Acquisition · IT Training

\*\*(from \`services.list\`)\*\*.

3\. **\*\*Company:\*\*** Home · About · Services · Contact — then a hairline rule — Privacy Policy ·

Terms & Conditions.

4\. **\*\*Contact:\*\***

\- map-pin — 212 Wabash Ave, Suite 500, Chicago, IL 60601

\- phone — +1 (312) 555-0148 (\`tel:\`)

\- mail — hello\@netcloudedge.com (\`mailto:\`)

\- clock — Mon–Fri, 9:00am–6:00pm CT

**\*\*Bottom bar\*\*** (border-top): \`© {currentYear} Net Cloud Edge LLC. All rights reserved.\`

· right: status dot + "System status — live".

**---**

## Global creative / graphics specification

The redesign should add **graphic storytelling without turning the page into an illustration-heavy marketing site**.

### 1. Visual language

Use a consistent vocabulary throughout the homepage. The goal is **editorial systems design**, not decoration:

- Hairline routes
- Small numbered nodes
- Editorial annotations
- Dotted fields used sparingly
- Oversized typography
- Thin rules and measurement-like labels
- Cropped photography
- Asymmetric whitespace
- Small monospace metadata
- Subtle hover/focus movement

The visual language should make the company feel **precise, human, and operational**.

### 2. What NOT to add

Do not add:

- Generic recruitment stock illustrations
- Cartoon people
- Floating 3D objects
- Large gradient blobs outside the existing hero exception
- Random abstract shapes with no connection to the content
- Excessive glassmorphism
- Four unrelated accent colors
- Decorative icons inside every paragraph
- Fake metrics or invented client logos

### 3. Graphic hierarchy

Every graphic should answer one of these questions:

`WHO are we helping?`

`HOW does the process work?`

`WHY should I trust it?`

`WHERE do I go next?`

If a graphic does not reinforce one of these, remove it.

### 4. Motion system

Preferred:

- `transform`
- `opacity`
- short route-marker transitions
- tab branch movement
- card lift of 2–4px
- subtle image scale on hover

Avoid:

- looping large-scale parallax
- flashing elements
- constantly moving backgrounds
- aggressive cursor effects
- scroll-jacking

Respect `prefers-reduced-motion`.

### 5. Photography direction

Use photography as **human evidence**, not decoration.

Preferred imagery:

- recruiter + candidate conversation
- real workplace interactions
- professionals collaborating
- interview / discussion moments
- diverse but natural U.S. workplace scenes

Avoid:

- handshake closeups
- staged boardroom smiles
- overly polished corporate stock photography
- isolated headshots as the primary visual

### 6. Section rhythm

The page should alternate visual density:

```text
HERO
  ↓
quiet / whitespace
  ↓
DECISION GRAPHIC
  ↓
dense service system
  ↓
quiet trust system
  ↓
dark CTA / route map
```

This prevents every section from competing for attention.

### 7. Creative layout rules

The page should deliberately alternate between different spatial behaviors instead of repeating the same section template:

| Moment         | Layout behavior                         | Purpose                                  |
| -------------- | --------------------------------------- | ---------------------------------------- |
| Hero           | Centred + route graphic + wide image    | Establish the talent network             |
| Fork           | Expanding split / branching interaction | Let visitors choose a side               |
| Human Equation | Full-width typography                   | Reset attention and state the philosophy |
| Services       | Connected rail + 2×2 grid               | Explain the service ecosystem            |
| Recruiter Desk | Pinned media + scrolling chapters       | Show the human process                   |
| Policy         | Quiet 4-column definition grid          | Build trust without visual noise         |
| Outcomes       | Large editorial numbers                 | Make proof feel consequential            |
| People         | Asymmetric portrait wall                | Humanise the company                     |
| CTA            | Route-map return                        | Convert and close the story              |

**Important:** do not force every section to use cards, glass panels, or rounded containers. The contrast between layouts is part of the design.

### 8. Component naming suggestions

If these graphics are implemented as reusable Nunjucks partials/components, prefer:

- `route-line.njk`
- `path-map.njk`
- `pipeline-rail.njk`
- `trust-nodes.njk`
- `editorial-callout.njk`
- `cta-route.njk`

Keep decorative graphics separate from semantic content so accessibility remains clean.

**---**

**## Data & script dependencies**

\| Concern | Source |

\|---------|--------|

\| Path panels (fork) | \`\_data/paths.json\` |

\| Service cards + footer services | \`\_data/services.json\` |

\| Site name / address / phone / email / social | \`\_data/site.json\` |

\| Nav + Services dropdown | \`\_data/nav.json\` |

\| Standing policy list | inline array in \`index.njk\` |

\| Tab switching | \`assets/js/tabs.js\` |

\| Hero word rotator | \`assets/js/text-rotator.js\` |

\| Header scroll pill | \`assets/js/header-scroll.js\` (base layout) |

\| Mobile menu / accordion | \`assets/js/nav-toggle.js\` (base layout) |

**\*\*Placeholder data — confirm before launch:\*\*** \`site.json\` legal entity / founded /

address / phone; all gated sections above.
