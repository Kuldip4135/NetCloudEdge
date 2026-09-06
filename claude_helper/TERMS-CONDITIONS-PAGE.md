**# Terms & Conditions — Full Layout & Content**

**\*\*Route:\*\*** \`/terms-conditions/\`

**\*\*Source:\*\*** [src/terms-conditions.njk]\(../src/terms-conditions.njk) → layout \`layouts/page.njk\` → \`layouts/base.njk\`

**\*\*Title:\*\*** Terms & Conditions

**\*\*Meta description:\*\*** The terms you agree to by using this site, sending us a resume, engaging us to hire, or enrolling in a training program.

**\*\*Front matter:\*\*** \`effective: August 12, 2026\` · \`glass: true\` · \`extraScripts: []\`

The **\*\*contract / disclosure\*\*** page. Drafted against what this business actually sells,

not lifted from a template. The Privacy Policy forms part of these terms, and the two

pages are cross-linked at the foot of each.

\> ⚠️ NOT LEGAL ADVICE. Must be reviewed by counsel before launch (CONTENT.md

\> verification list, item 14).

**\*\*Commercial promises that MUST be confirmed before this page goes live\*\*** — each is a

real obligation, currently set to an industry-standard default:

\- the **\*\*90-day replacement period\*\*** in §C

\- the **\*\*7-day training withdrawal window\*\*** in §D

\- the **\*\*12-month direct-hire restriction\*\*** in §C

\- **\*\*governing law and venue\*\*** in §H — set to Illinois to match the Chicago office

\- \`site.legalEntity\` being the correct contracting entity

**\*\*Content rules carried from the service pages:\*\***

\- Our fee is **\*\*never paid by a job seeker\*\***.

\- Nothing on this site — this page least of all — **\*\*promises a placement\*\***.

\- Rates stay off this page on purpose; they live in the engagement letter.

**---**

**## Design pattern — "Centered Read" (Hallmark redesign)**

Matches \`privacy-policy.njk\` exactly. One centered reading column (\`max-w-3xl\`, prose

capped at 40rem via \`.legal-prose\`). The old sticky 3/9 side-rail split is gone; the

rail's function moves to a **\*\*"Contents" jump-link grid\*\*** in a glass panel under the

summary. Clauses separated by a hairline rule. \`rail-active.js\` / \`section-rail.njk\`

are not used here. \`glass: true\` carries the summary, contents and contact panels; the

header keeps the aurora/dots treatment.

**---**

**## Page skeleton (top to bottom)**

\| # | Section | Anchor | Ground / treatment | Source |

\| --- | --- | --- | --- | --- |

\| — | Site header | — | Transparent at top → floating glass pill on scroll | \`partials/header.njk\` |

\| 1 | Hero — "Terms & Conditions." | — | \`relative overflow-hidden\` with \`hero-aurora\` + \`hero-dots\`; breadcrumb + stamp + effective line + H1 + lead (\`max-w-3xl\`) | inline |

\| 2 | "The short version" summary | — | \`glass-panel\`; \`.meta\` label + one plain-language paragraph | inline |

\| 3 | "Contents" jump-link grid | — | \`glass-panel\`, \`\<nav aria-label="Contents">\`; two-column \`\<ol>\` of \`#\`-anchor links | inline (\`rail\` array) |

\| 4 | Clauses 00–I | \`#agreement\` … \`#general\` | Centered column; each clause hairline-topped, eyebrow + H2 + \`.legal-prose\` body | inline |

\| 5 | "Questions about these terms" contact panel | inside \`#general\` | \`glass-panel\`; email / registered office / phone \`\<dl>\` + cross-link to Privacy Policy | inline (\`site.json\`) |

\| — | Site footer | — | Ink band | \`partials/footer.njk\` |

\> No closing CTA band. Every clause anchor carries \`scroll-mt-28\`.

**---**

**## Header**

Shared — see [HOME-PAGE.md]\(../helper/HOME-PAGE.md). The hero section adds its own

\`hero-aurora\` / \`hero-dots\` layers behind the transparent header.

**---**

**## 1. Hero**

\`\<section class="relative overflow-hidden">\` wrapping the aurora/dots layers, then

\`\<div class="section-container py-10 sm\:py-14">\`.

**### Breadcrumb (\`partials/breadcrumb.njk\`)**

**\*\*Home / Terms & Conditions\*\*** — \`crumbs = [{ label: "Home", url: "/" }, { label: "Terms & Conditions" }]\`.

**### Heading block (\`mx-auto max-w-3xl\`)**

1\. **\*\*Stamp row:\*\*** \`.stamp\` with \`check-badge\` icon → "On file"; mono line "Effective

{{ effective }} · {{ site.legalEntity }}".

2\. **\*\*H1\*\*** (\`font-display text-3xl sm\:text-5xl font-semibold\`): "Terms & Conditions."

3\. **\*\*Lead\*\*** (\`mt-4 text-lg text-ink/75\`): "What you agree to by using this site,

sending us a resume, engaging us to hire, or enrolling in a program. Written to be

read, not to be survived."

**---**

**## 2. "The short version" summary**

\`\<div class="glass-panel p-6 sm\:p-7">\` — \`.meta\` "The short version" + \`.legal-prose\`

paragraph.

Copy: Tell us the truth about your experience or your vacancy, and we will do the same

about what we can deliver. We introduce people to employers; we do not employ the

candidates we place and we cannot promise anyone a job. Employers pay our fee, job

seekers never do. A signed engagement letter or enrolment agreement wins over this page.

**---**

**## 3. "Contents" jump-link grid**

\`\<nav class="mt-5 glass-panel p-6 sm\:p-7" aria-label="Contents">\` → \`.meta\` "Contents" +

\`\<ol class="grid grid-cols-1 sm\:grid-cols-2 gap-x-8 gap-y-0.5">\`, each \`\<li>\` an

\`#\`-anchor link with mono clause letter + label.

Driven by the \`rail\` array:

\| n | id | Label |

\| --- | --- | --- |

\| 00 | \`agreement\` | The agreement |

\| A | \`site\` | Using this site |

\| B | \`candidates\` | Candidates |

\| C | \`employers\` | Employers |

\| D | \`training\` | Training |

\| E | \`ip\` | Content and IP |

\| F | \`disclaimer\` | Disclaimers |

\| G | \`liability\` | Liability |

\| H | \`law\` | Governing law |

\| I | \`general\` | General |

**---**

**## 4. Clauses**

Each: \`\<div id="…" class="mt-12 scroll-mt-28 border-t border-ink/10 pt-12">\` →

\`\<p class="eyebrow">\` → \`\<h2 class="font-display text-2xl sm\:text-3xl">\` →

\`\<div class="legal-prose mt-6">\` body.

\| # | id | Eyebrow | H2 | Body highlights |

\| --- | --- | --- | --- | --- |

\| 00 | \`agreement\` | 00 — Agreement | The agreement. | Between you and \`site.legalEntity\`. Accepted by using the site, submitting the form, sending a resume/brief, or enrolling. Must be 16+ and able to contract; authority to bind a company. **\*\*Which document governs\*\*** — a signed services agreement / SOW / enrolment form governs its subject; this page fills the gaps and alone governs general site use. Privacy Policy forms part of these terms. |

\| A | \`site\` | A — Site use | Using this site. | May read/print/share for own hiring or job search. **\*\*May not:\*\*** scrape/bulk-copy, submit false info or impersonate, upload malware or files you can't send, probe/overload the site, build a competing database or advertise, use unlawfully. We may suspend access / remove submissions. **\*\*What you send us\*\*** — you keep ownership; you grant storage/format/share rights per the Privacy Policy (candidate → employer only after agreement); you confirm accuracy and that it's yours to send. |

\| B | \`candidates\` | B — Candidates | If you are a job seeker. | **\*\*We charge you nothing\*\*** — employer pays the fee; nobody will ask you for payment/deposit/percentage; report anyone who does. Paid IT training is separate (§D) and never a condition of being put forward. **\*\*No guarantee of employment\*\*** — we don't decide who gets hired or control the process; nothing here promises a job, interview, salary or visa; published stats describe the past. **\*\*What we need from you\*\*** — accurate info, prompt availability notice, written consent before checks/referees. **\*\*Going direct\*\*** — don't deal with an employer we introduced you to behind us. |

\| C | \`employers\` | C — Employers | If you are hiring. | **\*\*Introductions and fees\*\*** — definitions of \*\*introduction\*_ and _\*engagement\*\*; fee payable on engagement; rate/basis/terms in the engagement letter, not here; **\*\*12-month\*\*** direct-hire restriction covers different roles/divisions and onward referral. **\*\*Replacement period\*\*** — **\*\*90 days\*\***, no further fee, if invoice paid in full and written notice within 14 days; excludes redundancy, material scope change, or non-payment of the candidate. **\*\*What we need from you\*\*** — accurate brief, prompt fill/pause/withdraw notice, engagement confirmed within 7 days, compliance with anti-discrimination law. **\*\*Contract and temporary staff\*\*** — worker not your employee unless the letter says so. **\*\*Candidate details are confidential\*\*** — for assessing that candidate for that vacancy only. |

\| D | \`training\` | D — Training | If you are enrolling in a program. | IT Training sold under an enrolment agreement (track, schedule, fee, plan); these terms apply alongside it. Place confirmed on first cleared payment; fees per learner, non-transferable. **\*\*Withdrawal\*\*** — written, within **\*\*7 days\*\*** of start → refund less materials issued; after that non-refundable for the term, one deferral normally allowed. Attendance/assessment thresholds for certification. We may change instructor/schedule/format; full refund of unused portion if we cancel outright. Materials licensed personally — no recording/redistribution/sharing access. Removal without refund for harassment, cheating, repeated disruption. **\*\*Training is not a placement\*\*** — graduates get pipeline access, not a job offer or guarantee. |

\| E | \`ip\` | E — Intellectual property | Content and ownership. | Text, design, curricula, process docs and marks belong to \`site.legalEntity\` or licensors. Short attributed extract + link is fine; no reproducing a substantial part, no implying an endorsement/partnership. Photos are licensed stock unless captioned; third-party names identify only. Linked sites not controlled or endorsed. |

\| F | \`disclaimer\` | F — Disclaimers | What we do not warrant. | Site provided "as is"; not warranted error-free / always available / fit for your situation; nothing here is legal/tax/immigration/financial advice. **\*\*On candidates\*\*** — we verify what we're engaged to verify; the hiring decision is yours; no warranty of suitability/performance/tenure. **\*\*On employers and roles\*\*** — described as the employer described them; we don't control employer conduct. Implied warranties excluded as far as lawful; no limit on liability for death/personal injury by negligence, fraud, or anything not lawfully limitable. |

\| G | \`liability\` | G — Liability | Limits on liability. | No liability for indirect/consequential loss, lost profits/business/opportunity, wasted management time, reputational damage. Total liability for a placement or program capped at fees paid in the prior 12 months; where you paid nothing (candidate or visitor), capped at **\*\*USD 100\*\***. You indemnify us for claims arising from your breach, false information you gave, or (employers) your treatment of an introduced candidate. |

\| H | \`law\` | H — Jurisdiction | Governing law and disputes. | Governed by the laws of the State of **\*\*Illinois\*\***; exclusive jurisdiction of the state and federal courts in **\*\*Cook County, Illinois\*\***; consumers elsewhere keep mandatory local protections. Notify us before filing — email \`site.email\` with the problem and the remedy sought; 30-day resolution attempt. |

\| I | \`general\` | I — General | The rest. | List: **\*\*Changes\*\*** (effective date shows current version; not retrospective), **\*\*Termination\*\*** (either party on written notice; fee/restriction/confidentiality/IP/liability clauses survive), **\*\*Severability\*\***, **\*\*No waiver\*\***, **\*\*Assignment\*\*** (not by you without consent; by us to a successor), **\*\*No third-party rights\*\***, **\*\*Force majeure\*\***, **\*\*Entire agreement\*\*** (these terms + engagement/enrolment agreement + Privacy Policy). Then the **\*\*contact panel\*\***. |

**### Contact panel (inside \`#general\`)**

\`\<div class="mt-6 glass-panel p-6">\` — \`.meta\` "Questions about these terms" +

\`\<dl class="space-y-5">\`:

\| Term | Icon | Value |

\| --- | --- | --- |

\| Email | \`mail\` | \`mailto:\` → \`site.email\` |

\| Registered office | \`map-pin\` | \`site.legalEntity\` / \`site.address.line1\` / \`site.address.line2\` |

\| Phone | \`phone\` | \`site.phoneHref\` → \`site.phone\` |

Dashed-top footer line: "Read this alongside our **\*\*Privacy Policy\*\***." → \`/privacy-policy/\`.

**---**

**## Footer**

Shared — see [HOME-PAGE.md]\(../helper/HOME-PAGE.md). No page-specific variation.

**---**

**## Data & script dependencies**

\| Concern | Source |

\| --- | --- |

\| Legal entity / short name / URL / email / phone / address | \`\_data/site.json\` |

\| Effective date | front matter \`effective\` |

\| Contents list / clause order | inline \`rail\` array |

\| Cross-links to \`/privacy-policy/\` and \`/services/it-training/\` | inline, via the \`url\` filter |

\| Icons (\`check-badge\`, \`mail\`, \`map-pin\`, \`phone\`) | \`partials/icons.njk\` |

\| Breadcrumb trail | inline \`crumbs\` array |

\| Header scroll pill / mobile menu | \`assets/js/header-scroll.js\` · \`nav-toggle.js\` (base layout) |

No page-specific JS — \`extraScripts: []\`.

**\*\*Placeholder / gated — resolve before launch:\*\*** counsel review; confirm the 90-day

replacement period, the 7-day training withdrawal window, the 12-month restriction, the

USD 100 liability cap, Illinois governing law / Cook County venue, and that

\`site.legalEntity\` is the correct contracting entity. Ship together with \`/privacy-policy/\`.

---

# Creative Redesign — Terms & Conditions

## Design direction — "The Agreement Desk"

This is a legal page, so the creative direction should **increase comprehension without making the document look playful**.

The core idea:

> **A contract you can actually navigate.**

Keep the existing centered-reading model, but give the document stronger visual hierarchy through:

- a clear "On file" status
- a compact legal summary
- a two-column contents index
- numbered clause markers
- deliberate hairline separators
- highlighted obligation / restriction callouts
- a final contact desk

Do **not** turn this into a marketing page.

No hero photography, testimonials, CTA banner, oversized decorative illustration, pricing cards, or animated legal-document gimmicks.

---

# Page Flow

```text
HEADER
   ↓
LEGAL STATUS
   ↓
TERMS & CONDITIONS
   ↓
SHORT VERSION
   ↓
CONTENTS INDEX
   ↓
00  THE AGREEMENT
A   SITE USE
B   CANDIDATES
C   EMPLOYERS
D   TRAINING
E   CONTENT & IP
F   DISCLAIMERS
G   LIABILITY
H   JURISDICTION
I   GENERAL
   ↓
QUESTIONS ABOUT THESE TERMS
   ↓
PRIVACY POLICY
   ↓
FOOTER
```

---

# 01. HERO — "Terms & Conditions."

## Layout

Use the existing centered `max-w-3xl` composition, but make the opening feel like a **document cover sheet** without adding a literal cover image.

```text
HOME / TERMS & CONDITIONS

┌──────────────────────────────────────────────┐
│ ✓ ON FILE                                    │
│ Effective August 12, 2026 · {{ site.legalEntity }}
└──────────────────────────────────────────────┘

Terms & Conditions.

What you agree to by using this site,
sending us a resume, engaging us to hire,
or enrolling in a program.

Written to be read, not to be survived.
```

### Required content

Keep exactly:

**Terms & Conditions.**

**What you agree to by using this site, sending us a resume, engaging us to hire, or enrolling in a program. Written to be read, not to be survived.**

The stamp remains:

**On file**

And the effective line remains:

`Effective {{ effective }} · {{ site.legalEntity }}`

---

# 02. "THE SHORT VERSION" — THE EXECUTIVE SUMMARY

## Layout

Use the glass panel as a **one-minute reading surface**.

```text
THE SHORT VERSION

Tell us the truth about your experience or
your vacancy, and we will do the same about
what we can deliver.

We introduce people to employers; we do not
employ the candidates we place and we cannot
promise anyone a job.

Employers pay our fee. Job seekers never do.

A signed engagement letter or enrolment
agreement wins over this page.
```

The panel should have a small vertical accent rule on its left edge.

Do not rewrite the legal meaning.

---

# 03. CONTENTS — "FIND THE CLAUSE"

The existing contents grid should become more visually useful.

## Layout

```text
FIND THE CLAUSE

00  The agreement                 A  Using this site
B   Candidates                    C  Employers
D   Training                      E  Content and IP
F   Disclaimers                   G  Liability
H   Governing law                 I  General
```

Each item:

- has its clause marker in mono
- has a short label
- is an anchor link
- uses a top hairline
- has generous hit area
- gets a subtle background on hover

The `rail` array remains the source of truth.

---

# 04. CLAUSE SYSTEM

Every clause should look like a **separate legal record**, not one giant wall of text.

## Standard layout

```text
────────────────────────────────────────────────────────

C — EMPLOYERS

If you are hiring.

[legal prose]

────────────────────────────────────────────────────────
```

Use:

```text
border-t border-ink/10
scroll-mt-28
eyebrow
font-display H2
legal-prose
```

Preserve the existing clause IDs:

```text
#agreement
#site
#candidates
#employers
#training
#ip
#disclaimer
#liability
#law
#general
```

---

# 05. CLAUSE EMPHASIS

Do not alter the legal text, but visually distinguish statements that are especially important.

Use a restrained inline callout treatment for existing high-consequence language such as:

### Candidates

**We charge you nothing**

**No guarantee of employment**

### Employers

**12-month direct-hire restriction**

**90-day replacement period**

### Training

**7-day withdrawal window**

**Training is not a placement**

### Liability

**USD 100 cap**

### Jurisdiction

**Illinois**

**Cook County, Illinois**

These are visual emphasis only.

Do not convert them into new promises.

---

# 06. 00 — THE AGREEMENT

## Visual treatment

Start with a larger clause marker:

```text
00
THE AGREEMENT.
```

Then the existing prose.

At the end, keep the governing-document hierarchy clear:

```text
SIGNED DOCUMENTS TAKE PRIORITY

Services agreement / SOW / enrolment form
governs its subject.

This page fills the gaps and governs
general site use.
```

This is not new legal content; it is a visual treatment of the existing "Which document governs" distinction.

---

# 07. A — USING THIS SITE

## Visual motif

A small **"Allowed / Not allowed"** distinction can make the dense clause easier to scan.

```text
USING THIS SITE.

WHAT YOU MAY DO
Read · print · share for your own hiring
or job search.

WHAT YOU MAY NOT DO
Scrape · impersonate · upload malware ·
probe / overload · build a competing
database · advertise unlawfully.
```

Keep all actual restrictions and ownership language from the source.

Do not invent additional prohibited actions.

---

# 08. B — CANDIDATES

This is one of the most important sections.

## Visual treatment

Use a large inline statement:

> **You do not pay us to be placed.**

Then immediately follow with the actual clause.

Also visually isolate:

**No guarantee of employment**

and

**What we need from you**

as sub-labels.

This makes the candidate-facing obligations easy to find without changing the legal content.

---

# 09. C — EMPLOYERS

Use a compact **commercial terms ledger** before the full prose.

```text
EMPLOYER TERMS

INTRODUCTION
Fee becomes payable on engagement.

DIRECT-HIRE RESTRICTION
12 months.

REPLACEMENT PERIOD
90 days.

NOTICE
Written notice within 14 days.
```

These are extracted from the existing clause solely for scanning.

The complete legal prose remains below.

Do not add rates here.

The source explicitly keeps rates in the engagement letter.

---

# 10. D — TRAINING

Use a **learner agreement timeline** visual.

```text
ENROL
  ↓
PAYMENT CLEARED
  ↓
WITHDRAWAL WINDOW
7 days
  ↓
PROGRAM
  ↓
CERTIFICATION
```

This is only a visual representation of existing terms.

Keep the complete training clause underneath, including:

- enrolment agreement
- payment
- withdrawal
- attendance / assessment
- schedule changes
- materials license
- removal
- no-placement guarantee

---

# 11. E — CONTENT & IP

Use a document / ownership visual.

```text
YOUR USE

READ
SHORT ATTRIBUTED EXTRACT
LINK

NOT PERMITTED

SUBSTANTIAL REPRODUCTION
FALSE ENDORSEMENT
UNAUTHORISED USE
```

Again, these are scan labels for the existing content.

---

# 12. F — DISCLAIMERS

Use a **"What this page does not promise"** inset.

Existing points should be visually separated into:

- Site availability / accuracy
- Advice limitations
- Candidate suitability
- Employer / role information
- Implied warranties

Do not weaken or strengthen the legal wording.

---

# 13. G — LIABILITY

This section deserves the strongest visual clarity.

## Layout

```text
LIMITS ON LIABILITY

PLACEMENT / PROGRAM
Fees paid in the prior 12 months

NO-FEE USER
USD 100

EXCLUSIONS

Indirect / consequential loss
Lost profits
Lost business / opportunity
Wasted management time
Reputational damage
```

These labels summarize the existing clause.

Keep the full legal text beneath them.

---

# 14. H — GOVERNING LAW

Use a simple jurisdiction card.

```text
GOVERNING LAW

ILLINOIS

Exclusive jurisdiction:
State and federal courts
in Cook County, Illinois.

Consumers elsewhere keep
mandatory local protections.
```

This should be visually prominent but restrained.

---

# 15. I — GENERAL

Treat this as the **closing record**.

Use a compact list for:

- Changes
- Termination
- Severability
- No waiver
- Assignment
- No third-party rights
- Force majeure
- Entire agreement

Then move directly into the contact panel.

---

# 16. CONTACT PANEL — "QUESTIONS ABOUT THESE TERMS"

This should feel like the **legal desk**, not a CTA.

```text
QUESTIONS ABOUT THESE TERMS

EMAIL
site.email

REGISTERED OFFICE
site.legalEntity
site.address.line1
site.address.line2

PHONE
site.phone

────────────────────────────────────────

Read this alongside our Privacy Policy →
```

Use the existing:

- `mail`
- `map-pin`
- `phone`

icons.

No map.

No marketing CTA.

---

# 17. PRIVACY POLICY CROSS-LINK

At the bottom of the contact panel:

**Read this alongside our Privacy Policy.**

Route:

`/privacy-policy/`

This should visually feel like a **paired legal document**.

---

# 18. HEADER & FOOTER

## Header

Keep the shared header.

Hero keeps:

- `hero-aurora`
- `hero-dots`

Transparent at top → floating glass pill on scroll.

## Footer

Use the shared footer.

Ink band.

No page-specific variation.

---

# 19. TYPOGRAPHY

Keep the site's established typography.

### Display

Use for:

- H1
- clause H2s
- major legal callouts

### Mono

Use for:

- clause numbers
- effective date
- metadata
- jurisdiction values
- commercial term labels

### Body

Use for legal prose.

The legal prose width remains capped at roughly 40rem.

---

# 20. MOTION

This page should be mostly static.

Allowed:

- contents hover
- subtle anchor scroll
- tiny opacity transition for hover states

Avoid:

- parallax
- animated blobs
- moving legal-document graphics
- scroll-driven clause animations

Respect:

`prefers-reduced-motion`

---

# 21. RESPONSIVE DESIGN

## Desktop

```text
CENTERED COLUMN
      ↓
SUMMARY PANEL
      ↓
CONTENTS GRID
      ↓
CLAUSE RECORDS
```

## Mobile

The same hierarchy becomes:

```text
SUMMARY
↓
CONTENTS
↓
00
↓
A
↓
B
↓
...
↓
I
```

Contents changes from two columns to one.

Clause spacing remains generous enough to preserve readability.

Every anchor keeps:

`scroll-mt-28`

---

# 22. DATA & SCRIPT DEPENDENCIES

| Concern                                                   | Source                                         |
| --------------------------------------------------------- | ---------------------------------------------- |
| Legal entity / short name / URL / email / phone / address | `_data/site.json`                              |
| Effective date                                            | front matter `effective`                       |
| Contents list / clause order                              | inline `rail` array                            |
| Cross-link to Privacy Policy                              | inline via `url` filter                        |
| Icons                                                     | `partials/icons.njk`                           |
| Breadcrumb                                                | inline `crumbs`                                |
| Header scroll pill / mobile menu                          | `assets/js/header-scroll.js` · `nav-toggle.js` |
| Page-specific JS                                          | none                                           |

Preserve:

`extraScripts: []`

Do not introduce `rail-active.js` or `section-rail.njk`.

---

# 23. PRODUCTION GATES

Before launch, counsel must review the page.

Confirm:

- `90-day replacement period`
- `7-day training withdrawal window`
- `12-month direct-hire restriction`
- `USD 100 liability cap`
- Illinois governing law
- Cook County venue
- `site.legalEntity`

Ship this page together with:

`/privacy-policy/`

---

# 24. FINAL CREATIVE PRINCIPLE

The page should not look "creative" in the conventional marketing sense.

Its creativity should come from **making a dense legal document unusually navigable**.

The experience is:

```text
I KNOW WHAT THIS IS
        ↓
I CAN GET THE SHORT VERSION
        ↓
I CAN FIND MY CLAUSE
        ↓
I CAN SCAN THE IMPORTANT TERMS
        ↓
I CAN READ THE FULL WORDING
        ↓
I KNOW WHO TO CONTACT
        ↓
I CAN CHECK THE PRIVACY POLICY
```

> **Make the contract feel organized, not intimidating.**
