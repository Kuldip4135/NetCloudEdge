**# Privacy Policy — Full Layout & Content**

**\*\*Route:\*\*** \`/privacy-policy/\`

**\*\*Source:\*\*** [src/privacy-policy.njk]\(../src/privacy-policy.njk) → layout \`layouts/page.njk\` → \`layouts/base.njk\`

**\*\*Title:\*\*** Privacy Policy

**\*\*Meta description:\*\*** What Net Cloud Edge collects when you send us a resume or a hiring brief, who we share it with, how long we keep it, and how to get it deleted.

**\*\*Front matter:\*\*** \`effective: August 12, 2026\` · \`glass: true\` · \`extraScripts: []\`

The **\*\*legal / disclosure\*\*** page. It is drafted against what the site actually does —

the contact form, the resume upload, background checks run in connection with a

placement — not a copied template. Ships together with \`/terms-conditions/\`; the form

must not be published without this page.

\> ⚠️ NOT LEGAL ADVICE. Must be reviewed by counsel before launch, and every

\> bracketed or \`site.json\` placeholder confirmed (CONTENT.md verification list, item 14).

**\*\*Content rules baked into this page:\*\***

\- **\*\*Describe only processing that genuinely happens.\*\*** No clause for a practice the

business does not run. If a practice changes, this page changes in the same commit.

\- **\*\*Never promise a right the business cannot deliver.\*\***

\- **\*\*No cover-sheet exhibit and no CTA band.\*\*** A visitor here wants a clause, not a

photo of an office and an invitation to book a call.

\- **\*\*We do not sell personal information\*\*** and **\*\*never charge a job seeker\*\*** — both

stated plainly, not buried.

\- Cookies clause is written against what the site loads \*\*today\*\*: no analytics, no ad

pixels, one CDN font request. Adding a tag changes this clause and the retention table.

**---**

**## Design pattern — "Centered Read" (Hallmark redesign)**

The old sticky 3/9 side-rail split is gone. The page is one centered reading column

(\`max-w-3xl\`, prose capped tighter at 40rem via \`.legal-prose\`). The rail's function

moves to a **\*\*"Contents" jump-link grid\*\*** in a glass panel under the summary — same

navigation, no permanent column, and it works on mobile where the rail was hidden.

Clauses are separated by a hairline rule (\`border-t border-ink/10\`), not whitespace alone.

\`rail-active.js\` / \`section-rail.njk\` are **\*\*not\*\*** used here. \`glass: true\` still carries

the ambient field for the summary, contents and contact panels; the header keeps the

aurora/dots treatment.

**---**

**## Page skeleton (top to bottom)**

\| # | Section | Anchor | Ground / treatment | Source |

\| --- | --- | --- | --- | --- |

\| — | Site header | — | Transparent at top → floating glass pill on scroll | \`partials/header.njk\` |

\| 1 | Hero — "Privacy Policy." | — | \`relative overflow-hidden\` with \`hero-aurora\` blobs + \`hero-dots\`; breadcrumb + stamp + effective line + H1 + lead (\`max-w-3xl\`) | inline |

\| 2 | "The short version" summary | — | \`glass-panel\`; \`.meta\` label + one plain-language paragraph | inline |

\| 3 | "Contents" jump-link grid | — | \`glass-panel\`, \`\<nav aria-label="Contents">\`; two-column \`\<ol>\` of \`#\`-anchor links, mono clause letter + label | inline (\`rail\` array) |

\| 4 | Clauses 00–I | \`#scope\` … \`#contact\` | Centered column; each clause hairline-topped, eyebrow + H2 + \`.legal-prose\` body | inline |

\| 5 | "Privacy enquiries" contact panel | inside \`#contact\` | \`glass-panel\`; email / post / phone \`\<dl>\` + cross-link to Terms | inline (\`site.json\`) |

\| — | Site footer | — | Ink band | \`partials/footer.njk\` |

\> No closing CTA band. Every clause anchor carries \`scroll-mt-28\`.

**---**

**## Header**

Shared — see [HOME-PAGE.md]\(../helper/HOME-PAGE.md). No page-specific variation, but the

hero section adds its own \`hero-aurora\` / \`hero-dots\` layers behind the transparent header.

**---**

**## 1. Hero**

\`\<section class="relative overflow-hidden">\` wrapping the aurora/dots layers, then

\`\<div class="section-container py-10 sm\:py-14">\`.

**### Breadcrumb (\`partials/breadcrumb.njk\`)**

**\*\*Home / Privacy Policy\*\*** — \`crumbs = [{ label: "Home", url: "/" }, { label: "Privacy Policy" }]\`.

**### Heading block (\`mx-auto max-w-3xl\`)**

1\. **\*\*Stamp row (\`mt-6 flex flex-wrap items-center gap-3\`):\*\***

\- \`.stamp\` with \`check-badge\` icon → "On file"

\- mono line: "Effective {{ effective }} · {{ site.legalEntity }}"

2\. **\*\*H1\*\*** (\`font-display text-3xl sm\:text-5xl font-semibold\`): "Privacy Policy."

3\. **\*\*Lead\*\*** (\`mt-4 text-lg text-ink/75\`): "We handle resumes for a living, so this page

is specific: what we take, who we hand it to, how long we hold it, and how to make

us delete it."

**---**

**## 2. "The short version" summary**

\`\<div class="glass-panel p-6 sm\:p-7">\` — \`.meta\` "The short version" + \`.legal-prose\`

paragraph. Sits **\*\*above\*\*** the clauses, not in place of them; must be true on its own.

Copy: We collect what you send us and use it to do the one job you asked for. We share a

candidate's details with an employer only after that candidate agrees to that specific

introduction. Background checks only with written consent. We do not sell personal

information, and never charge a job seeker to be placed. Delete on request, unless the

law requires a record.

**---**

**## 3. "Contents" jump-link grid**

\`\<nav class="mt-5 glass-panel p-6 sm\:p-7" aria-label="Contents">\` → \`.meta\` "Contents" +

\`\<ol class="grid grid-cols-1 sm\:grid-cols-2 gap-x-8 gap-y-0.5">\`. Each \`\<li>\` is an

\`#\`-anchor link, \`border-t border-ink/10\`, mono clause letter (\`w-6\`) + label.

Driven by the \`rail\` array:

\| n | id | Label |

\| --- | --- | --- |

\| 00 | \`scope\` | Who this covers |

\| A | \`collect\` | What we collect |

\| B | \`use\` | How we use it |

\| C | \`share\` | Who receives it |

\| D | \`screening\` | Background checks |

\| E | \`cookies\` | Cookies |

\| F | \`retention\` | How long we keep |

\| G | \`security\` | Security |

\| H | \`rights\` | Your rights |

\| I | \`contact\` | Contact us |

**---**

**## 4. Clauses**

Each: \`\<div id="…" class="mt-12 scroll-mt-28 border-t border-ink/10 pt-12">\` →

\`\<p class="eyebrow">\` (e.g. "A — Collection") → \`\<h2 class="font-display text-2xl sm\:text-3xl">\`

→ \`\<div class="legal-prose mt-6">\` body.

\| # | id | Eyebrow | H2 | Body highlights |

\| --- | --- | --- | --- | --- |

\| 00 | \`scope\` | 00 — Scope | Who this covers. | Applies to \`site.url\`, all services, and email/phone/in-person contact. Covers **\*\*candidates\*\***, **\*\*client contacts\*\***, **\*\*training applicants and learners\*\***, **\*\*site visitors\*\***. Once we pass candidate info to an employer, the employer is responsible under its own policy. |

\| A | \`collect\` | A — Collection | What we collect. | **\*\*\`ledger\` table\*\*** — Category / What that means / Where it comes from: Contact details, Career history, Placement record, Verification data, Client details, Training records, Technical data. Sub-heads: **\*\*Sensitive information\*\*** (asked separately, purpose-limited; do not send health info), **\*\*Children\*\*** (working-age adults; nothing knowingly under 16). |

\| B | \`use\` | B — Purpose | How we use it. | Bulleted purposes. **\*\*What we do not do\*\*** list (no sale, no cross-context ad sharing, no resume to employer without agreement, no automated hiring decisions, no job-seeker charges). **\*\*Marketing\*\*** (unsubscribe link on every email). **\*\*Legal bases\*\*** — contract, legitimate interests, consent, legal obligation (GDPR). |

\| C | \`share\` | C — Disclosure | Who receives it. | List: employers & hiring teams (after candidate agrees), screening vendors, service providers under contract, professional advisers, authorities, a buyer on sale/merger. **\*\*International transfers\*\*** — SCCs or adequacy decision. |

\| D | \`screening\` | D — Verification | Background checks. | Most intrusive processing; runs on rules — **\*\*written consent\*\*** given separately, vendor named up front, consent withdrawable before completion, copy of report on request + chance to dispute, US FCRA disclosures + adverse-action process where a "consumer report". Check only what the role justifies. |

\| E | \`cookies\` | E — Cookies | Cookies and tracking. | Site is deliberately light — no ad cookies, no cross-site tracking. Runs: strictly necessary storage, aggregate analytics (if enabled, IP-anonymised), Google Fonts (IP only, no cookie), server logs. Honours Global Privacy Control as a valid opt-out. |

\| F | \`retention\` | F — Retention | How long we keep it. | **\*\*\`ledger\` table\*\*** — Record / Kept for / Why: Enquiry no engagement (12 mo), Active candidate file (24 mo from last contact), Placement record (7 yrs), Verification report (per governing law), Training & payment records (7 yrs), Server logs (90 days). Earlier deletion on request except legal minimum. |

\| G | \`security\` | G — Security | How we protect it. | Access limited to the case team, encryption in transit, contracted providers, MFA, staff trained on resumes/verification reports. No claim of perfect security; breach notification within the legal timeframe. |

\| H | \`rights\` | H — Rights | Your rights. | One combined list (not split by jurisdiction), extended to every candidate as practice: know & access, correct, delete, withdraw consent, object/restrict, portability, opt out of sale/sharing, non-retaliation. Email \`site.email\`; respond within 45 days; identity verification; authorised agent allowed. Complaint path — EU/UK national regulator; California CPPA or AG. |

\| I | \`contact\` | I — Contact | Changes, and how to reach us. | Policy updated when practices change; effective date reflects current version; material changes told directly to people concerned. Then the **\*\*contact panel\*\***. |

**### Contact panel (inside \`#contact\`)**

\`\<div class="mt-6 glass-panel p-6">\` — \`.meta\` "Privacy enquiries" + \`\<dl class="space-y-5">\`:

\| Term | Icon | Value |

\| --- | --- | --- |

\| Email | \`mail\` | \`mailto:\` → \`site.email\` |

\| Post | \`map-pin\` | \`site.legalEntity\` / \`site.address.line1\` / \`site.address.line2\` |

\| Phone | \`phone\` | \`site.phoneHref\` → \`site.phone\` |

Dashed-top footer line: "Read this alongside our **\*\*Terms & Conditions\*\***." → \`/terms-conditions/\`.

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

\| Icons (\`check-badge\`, \`mail\`, \`map-pin\`, \`phone\`) | \`partials/icons.njk\` |

\| Breadcrumb trail | inline \`crumbs\` array |

\| Header scroll pill / mobile menu | \`assets/js/header-scroll.js\` · \`nav-toggle.js\` (base layout) |

No page-specific JS — \`extraScripts: []\`.

**\*\*Placeholder / gated — resolve before launch:\*\*** counsel review of the whole page;

confirm \`site.legalEntity\` is the correct entity; confirm the retention periods,

the 45-day response window, and the analytics/cookies clause against what is actually

deployed; keep this page and \`/terms-conditions/\` shipping together.

---

# Creative Redesign — Privacy Policy

## Design direction — "The Data Ledger"

This page should feel like a **transparent record of what happens to someone's information**.

The creative concept is:

> **Nothing hidden. Everything accounted for.**

Unlike the Terms page, which is structured as an agreement, Privacy should visually behave like a **data ledger**.

The recurring visual language is:

- record
- source
- purpose
- recipient
- retention
- rights

Do not turn this into a marketing page.

No CTA band, hero image, testimonial, stock photo, decorative illustration, or generic "your privacy matters" messaging.

---

# Page Flow

```text
HEADER
   ↓
PRIVACY STATUS
   ↓
PRIVACY POLICY
   ↓
SHORT VERSION
   ↓
CONTENTS / DATA INDEX
   ↓
00  WHO THIS COVERS
A   WHAT WE COLLECT
B   HOW WE USE IT
C   WHO RECEIVES IT
D   BACKGROUND CHECKS
E   COOKIES
F   RETENTION
G   SECURITY
H   YOUR RIGHTS
I   CONTACT
   ↓
PRIVACY ENQUIRIES
   ↓
TERMS & CONDITIONS
   ↓
FOOTER
```

---

# 01. HERO — "Privacy Policy."

## Layout

Keep the centered legal layout, but make the hero feel like the start of a **data record**.

```text
HOME / PRIVACY POLICY

┌──────────────────────────────────────────────┐
│ ✓ ON FILE                                    │
│ Effective August 12, 2026 · {{ site.legalEntity }}
└──────────────────────────────────────────────┘

Privacy Policy.

We handle resumes for a living, so this page
is specific: what we take, who we hand it to,
how long we hold it, and how to make us delete it.
```

Preserve the existing wording.

---

# 02. THE SHORT VERSION — "ONE MINUTE READ"

The existing summary panel becomes the page's **plain-language promise**.

```text
THE SHORT VERSION

We collect what you send us and use it to do
the one job you asked for.

We share a candidate's details with an employer
only after that candidate agrees to that specific
introduction.

Background checks only with written consent.

We do not sell personal information, and never
charge a job seeker to be placed.

Delete on request, unless the law requires a record.
```

## Visual detail

Add a small left-side record marker:

`01 / 05`

But keep it decorative and not part of the legal text.

---

# 03. CONTENTS — "FOLLOW THE DATA"

Rename the visual label only:

**FOLLOW THE DATA**

The actual clause labels remain unchanged.

```text
00  Who this covers
A   What we collect
B   How we use it
C   Who receives it
D   Background checks
E   Cookies
F   How long we keep
G   Security
H   Your rights
I   Contact us
```

Use the existing `rail` array.

Each row should have:

- mono clause marker
- label
- hairline
- anchor
- subtle hover state

On mobile, one column.

---

# 04. CLAUSE SYSTEM

Every section remains:

```text
EYEBROW
H2
LEGAL PROSE
```

But Privacy gets a recurring **ledger treatment**.

Each clause opens with:

```text
A — COLLECTION

What we collect.

[record / table / prose]
```

The goal is to make the reader understand:

**what → why → where → how long**

without changing the underlying legal text.

---

# 05. 00 — WHO THIS COVERS

## Layout

Use four audience markers.

```text
WHO THIS COVERS

CANDIDATES
CLIENT CONTACTS
TRAINING APPLICANTS & LEARNERS
SITE VISITORS
```

Then keep the complete existing scope clause.

At the bottom, visually isolate:

**Once we pass candidate info to an employer, the employer is responsible under its own policy.**

This is a scan aid for existing text.

---

# 06. A — WHAT WE COLLECT

This should be the most data-visual section.

## Use the existing ledger table

```text
WHAT WE COLLECT

CATEGORY              WHAT IT MEANS              SOURCE

Contact details       Name, email...             Contact form

Career history        Resume / experience...     You

Placement record      Placement-related data     Our work

Verification data     Background checks...       Screening

Client details        Hiring brief...            Employer

Training records      Enrolment / progress...    Learner

Technical data        Logs / device data...      Site
```

Use the actual table content from the source.

## Sensitive information

Put this in a restrained warning inset:

**Sensitive information**

Asked separately, purpose-limited; do not send health information.

## Children

Use a small note:

**Children**

Working-age adults; nothing knowingly under 16.

Do not add new categories.

---

# 07. B — HOW WE USE IT

Create a **purpose map**.

```text
HOW WE USE IT

WE RECEIVE
     ↓
UNDERSTAND
     ↓
MATCH / OPERATE
     ↓
COMMUNICATE
     ↓
COMPLY
```

Then show the actual purposes as the legal prose.

## "What we do not do"

This deserves a strong visual treatment.

```text
WE DO NOT

SELL YOUR INFORMATION
SHARE IT FOR CROSS-CONTEXT ADS
SEND A RESUME TO AN EMPLOYER WITHOUT AGREEMENT
MAKE AUTOMATED HIRING DECISIONS
CHARGE JOB SEEKERS
```

These are all existing source rules.

## Marketing

Keep:

**unsubscribe link on every email**

## Legal bases

Keep:

- contract
- legitimate interests
- consent
- legal obligation

including GDPR language from the source.

---

# 08. C — WHO RECEIVES IT

Use a **recipient chain**.

```text
YOUR INFORMATION
       │
       ├── EMPLOYERS / HIRING TEAMS
       │
       ├── SCREENING VENDORS
       │
       ├── SERVICE PROVIDERS
       │
       ├── PROFESSIONAL ADVISERS
       │
       ├── AUTHORITIES
       │
       └── BUYER ON SALE / MERGER
```

The complete legal list remains below.

## Candidate consent

Visually isolate:

**Employer / hiring team**

**Only after candidate agrees to the specific introduction.**

This is the core transparency rule.

## International transfers

Keep the existing:

**SCCs or adequacy decision**

language.

---

# 09. D — BACKGROUND CHECKS

This section should look different because it represents the most intrusive processing.

## Layout

Use a **consent gate**.

```text
BACKGROUND CHECKS

01  WRITTEN CONSENT
        ↓
02  VENDOR NAMED
        ↓
03  ROLE-JUSTIFIED CHECK
        ↓
04  REPORT / DISPUTE PROCESS
```

Then keep the full existing prose, including:

- written consent
- vendor named up front
- withdrawal before completion
- copy of report on request
- chance to dispute
- US FCRA disclosures
- adverse-action process where applicable
- role-justified scope

Do not add claims beyond the source.

---

# 10. E — COOKIES

Make this a compact **"site today" status panel**.

```text
COOKIES & TRACKING

AD COOKIES                 NONE
CROSS-SITE TRACKING        NONE
GOOGLE FONTS               IP ONLY
SERVER LOGS                YES
AGGREGATE ANALYTICS        IF ENABLED
GLOBAL PRIVACY CONTROL     HONOURED
```

This visually communicates the deliberately light tracking posture.

Keep the exact legal prose underneath.

The clause must continue to describe what the site actually loads today.

---

# 11. F — RETENTION

This should be the second major ledger section.

## Existing retention table

```text
RECORD                     KEPT FOR

Enquiry — no engagement   12 months
Active candidate file     24 months from last contact
Placement record          7 years
Verification report       Per governing law
Training & payment        7 years
Server logs               90 days
```

Use the existing source values.

## Visual principle

Highlight the retention duration as the primary scan value.

Example:

```text
12 MO
Enquiry — no engagement
```

The "why" remains visible beneath each row.

## Deletion

At the end, visually emphasize:

**Earlier deletion on request except legal minimum.**

---

# 12. G — SECURITY

Use a **defence-in-depth stack**.

```text
SECURITY

ACCESS
Case team only

TRANSPORT
Encryption in transit

ACCESS CONTROL
MFA

PEOPLE
Staff trained on resumes /
verification reports

PROVIDERS
Contracted providers
```

Then retain the complete legal prose.

Do not imply perfect security.

Keep:

**No claim of perfect security.**

And the legal breach-notification wording.

---

# 13. H — YOUR RIGHTS

This should be the most actionable section.

## Layout

Use a **rights matrix**.

```text
YOUR RIGHTS

ACCESS
Know and access your information

CORRECT
Fix inaccurate information

DELETE
Request deletion

WITHDRAW
Withdraw consent

OBJECT / RESTRICT
Control certain processing

PORTABILITY
Receive portable data

OPT OUT
Sale / sharing

NON-RETALIATION
No retaliation for exercising rights
```

These are existing rights from the source.

## Request path

Add a simple visual line:

```text
REQUEST
  ↓
EMAIL site.email
  ↓
IDENTITY VERIFICATION
  ↓
RESPONSE
45 DAYS
```

This is a visual representation of the existing process.

Keep:

- authorised agent allowed
- EU/UK regulator route
- California CPPA or AG

in the full prose.

---

# 14. I — CONTACT

Treat this as the final data-record entry.

## Layout

```text
CONTACT US

POLICY CHANGES

Updated when practices change.
Material changes are told directly
to people concerned.

────────────────────────────

PRIVACY ENQUIRIES
```

Then the contact panel.

---

# 15. CONTACT PANEL — "PRIVACY ENQUIRIES"

Keep the existing glass panel.

```text
PRIVACY ENQUIRIES

EMAIL
site.email

POST
site.legalEntity
site.address.line1
site.address.line2

PHONE
site.phone

────────────────────────

Read this alongside our Terms & Conditions →
```

Use:

- `mail`
- `map-pin`
- `phone`

icons.

No CTA band.

---

# 16. TERMS CROSS-LINK

At the bottom:

**Read this alongside our Terms & Conditions.**

Route:

`/terms-conditions/`

Make the two legal pages feel like a matched pair.

---

# 17. HEADER & FOOTER

## Header

Shared header.

Transparent at top → floating glass pill on scroll.

Hero retains:

- `hero-aurora`
- `hero-dots`

## Footer

Shared ink-band footer.

No page-specific variation.

---

# 18. TYPOGRAPHY

Keep the established site typography.

### Display

- H1
- clause H2
- major data statements

### Mono

- clause markers
- retention durations
- status labels
- metadata
- data categories

### Body

Legal prose.

Keep the legal reading width capped around 40rem.

---

# 19. MOTION

Minimal.

Allowed:

- contents hover
- subtle table-row hover
- anchor scrolling
- tiny disclosure transitions if used

Avoid:

- animated data streams
- moving nodes
- parallax
- decorative charts
- fake live data

Respect:

`prefers-reduced-motion`

---

# 20. RESPONSIVE DESIGN

## Desktop

Use:

```text
CENTERED LEGAL COLUMN
        ↓
SUMMARY
        ↓
FOLLOW THE DATA
        ↓
LEDGER / CLAUSES
        ↓
CONTACT
```

## Mobile

Use:

```text
SUMMARY
↓
CONTENTS
↓
CLAUSES
↓
CONTACT
```

Tables become stacked records where necessary.

Do not use horizontal scrolling for the main privacy content.

---

# 21. DATA & SCRIPT DEPENDENCIES

| Concern                                                   | Source                                         |
| --------------------------------------------------------- | ---------------------------------------------- |
| Legal entity / short name / URL / email / phone / address | `_data/site.json`                              |
| Effective date                                            | front matter `effective`                       |
| Contents list / clause order                              | inline `rail` array                            |
| Icons                                                     | `partials/icons.njk`                           |
| Breadcrumb trail                                          | inline `crumbs`                                |
| Header scroll pill / mobile menu                          | `assets/js/header-scroll.js` · `nav-toggle.js` |
| Page-specific JS                                          | none                                           |

Preserve:

`extraScripts: []`

Do not introduce page-specific JS.

---

# 22. PRODUCTION GATES

Before launch:

- counsel review
- confirm `site.legalEntity`
- confirm retention periods
- confirm the 45-day response window
- confirm analytics/cookies language against the deployed site
- ensure the page describes only processing that genuinely happens
- ship together with `/terms-conditions/`

---

# 23. FINAL CREATIVE PRINCIPLE

The Privacy Policy should feel like a **transparent ledger**, not a wall of legal text.

The visitor journey is:

```text
WHAT DO YOU HAVE?
        ↓
WHY DO YOU HAVE IT?
        ↓
WHO GETS IT?
        ↓
DO YOU CHECK ME?
        ↓
HOW LONG DO YOU KEEP IT?
        ↓
HOW DO YOU PROTECT IT?
        ↓
WHAT CAN I ASK YOU TO DO?
        ↓
WHO DO I CONTACT?
```

> **Make every important privacy question answerable by scanning the page.**
