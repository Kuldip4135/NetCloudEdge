**\*\*# Contact — Full Layout & Content\*\***

**\*\*\\\*\\\*Route:\\\*\\\*\*\*** \\\`/contact/\\\`

**\*\*\\\*\\\*Source:\\\*\\\*\*\*** [src/contact.njk]\\(../src/contact.njk) → layout \\\`layouts/page.njk\\\` → \\\`layouts/base.njk\\\`

**\*\*\\\*\\\*Title:\\\*\\\*\*\*** Contact — Net Cloud Edge

**\*\*\\\*\\\*Meta description:\\\*\\\*\*\*** Whether you're looking for a job or looking to hire, we're here to help.

**\*\*\\\*\\\*Page flags:\\\*\\\*\*\*** \\\`glass: true\\\` · extra scripts: \\\`contact-form.js\\\`, \\\`faq-accordion.js\\\`

The **\*\*\\\*\\\*conversion / intake\\\*\\\*\*\*** page — the shared endpoint every service page's CTA

routes to (\\\`/contact/?role=job-seeker\\\`, \\\`?role=employer\\\`, \\\`?role=training\\\`). Hallmark

redesign "Paired Panels": a single two-column shell that holds from \\\`lg\\\` up — the form

in one glass panel on the left, a sticky "direct lines / what happens next" sidebar on

the right, so the no-form route stays visible the whole way down a long form.

**\*\*\\\*\\\*Content rules baked into this page:\\\*\\\*\*\***

\\- **\*\*\\\*\\\*One router, minimal fields.\\\*\\\*\*\*** Step 1 is a three-way role toggle; each choice

swaps in only the fields it needs (every extra field costs submissions). Shared

fields stay at \\\`name\\\` / \\\`email\\\` / \\\`message\\\`.

\\- **\*\*\\\*\\\*The JS contract is fixed:\\\*\\\*\*\*** \\\`data-contact-form\\\`, \\\`data-role-option\\\`,

\\\`data-role-field\\\` and every field \\\`name\\\` must not be renamed — \\\`contact-form.js\\\`

reads the \\\`?role=\\\` query param and shows/hides \\\`data-role-field\\\` groups off it.

\\- **\*\*\\\*\\\*Privacy note is non-negotiable\\\*\\\*\*\*** — resumes shared with employers only on the

candidate's say-so, data never sold, link to \\\`/privacy-policy/\\\`.

\\- **\*\*\\\*\\\*No map block\\\*\\\*\*\*** until the office is confirmed visitable (CONTENT.md item 15).

\\- Form inputs keep their solid \\\`bg-surface\\\` fill — THEME.md §5 Contact exception.

**\*\*---\*\***

**\*\*## Page skeleton (top to bottom)\*\***

\\| # | Section | Anchor | Ground / treatment | Source |

\\| --- | ------------------------------------------ | ------ | -------------------------------------------------------------------- | ---------------------------- |

\\| — | Site header | — | Transparent at top → floating glass pill on scroll | \\\`partials/header.njk\\\` |

\\| 1 | Intro — "Contact us." | — | Solid paper; breadcrumb + eyebrow + H1 + lead (\\\`max-w-2xl\\\`) | inline |

\\| 2 | Contact form | — | Plain container; \\\`glass-panel\\\` with hairline-divided field groups | inline (\\\`contact-form.js\\\`) |

\\| 3 | Sticky sidebar — direct lines + reassurance | — | \\\`lg\\\:col-span-5\\\`, \\\`lg\\\:sticky lg\\\:top-28\\\`; two glass panels | inline (\\\`site.json\\\`) |

\\| 4 | FAQ — "Three quick answers." | \\\`#faq\\\` | Plain container; dashed docket disclosure rows | \\\`partials/faq-accordion.njk\\\` |

\\| — | Site footer | — | Ink band | \\\`partials/footer.njk\\\` |

\\> No closing CTA band — the form \*\*is\*\* the CTA. The FAQ anchor \\\`#faq\\\` carries

\\> \\\`scroll-mt-28\\\` (from the partial).

**\*\*---\*\***

**\*\*## Header (\\\`partials/header.njk\\\`)\*\***

Shared — see [HOME-PAGE.md]\\(HOME-PAGE.md). No page-specific variation.

**\*\*---\*\***

**\*\*## 1. Intro\*\***

\\\`\\\<section class="section-container py-10 sm\\\:py-14">\\\`. Solid paper ground.

**\*\*### Breadcrumb (\\\`partials/breadcrumb.njk\\\`)\*\***

**\*\*\\\*\\\*Home / Contact\\\*\\\*\*\*** (mono \\\`/\\\`-separated, last item no link). \\\`crumbs = [{ label:

"Home", url: "/" }, { label: "Contact" }]\\\`.

**\*\*### Heading block (\\\`mt-8 max-w-2xl\\\`)\*\***

1\\. **\*\*\\\*\\\*Eyebrow (\\\`.eyebrow\\\`):\\\*\\\*\*\*** "Job seeker or employer — same team"

2\\. **\*\*\\\*\\\*H1\\\*\\\*\*\*** (\\\`font-display text-3xl sm\\\:text-5xl font-semibold\\\`): "Contact us."

3\\. **\*\*\\\*\\\*Lead (\\\`.lead-copy\\\`, \\\`mt-5\\\`):\\\*\\\*\*\*** "Whether you're looking for a job or looking to

hire, we're here to help. Fill in the form, or reach us directly — either way the

same team picks it up."

**\*\*---\*\***

**\*\*## 2. Contact form\*\***

\\\`\\\<div class="mt-12 grid grid-cols-1 gap-8 lg\\\:grid-cols-12 lg\\\:items-start lg\\\:gap-10">\\\`.

Form cell \\\`lg\\\:col-span-7\\\`. \\\`\\\<form data-contact-form novalidate class="glass-panel

divide-y divide-ink/10 p-6 sm\\\:p-8">\\\` — field groups separated by hairlines, the

\\\`.meta\\\` step label sitting directly above each group (no rail, no sticky labels).

**\*\*### Step 1 — the router (\\\`\\\<fieldset class="pb-7">\\\`)\*\***

\\- \\\`\\\<legend class="meta">\\\` "Who's asking"

\\- Three radio pills (\\\`data-role-option\\\`, \\\`peer sr-only\\\` input + styled \\\`\\\<span>\\\`;

checked → \\\`bg-brand text-paper\\\`). First option \\\`checked\\\` by default; \\\`required\\\`.

\\| \\\`value\\\` | Label | Swaps in (\\\`data-role-field\\\`) |

\\| ------------ | ------------------ | -------------------------------------------- |

\\| \\\`job-seeker\\\` | Job Seeker | Resume upload (PDF/Word) |

\\| \\\`employer\\\` | Employer | Company name + Role you're hiring for |

\\| \\\`training\\\` | Training Applicant | Which track interests you? (\\\`programs.list\\\`) |

\\> \\\`contact-form.js\\\` reads \\\`?role=\\\` from the URL and pre-selects the matching pill,

\\> showing only that role's \\\`data-role-field\\\` group.

**\*\*### Step 2 — your details (\\\`\\\<div class="py-7">\\\`)\*\***

\\- \\\`.meta\\\` label "Your details"

\\- Always: **\*\*\\\*\\\*Full name\\\*\\\*\*\*** (\\\`name\\\`, \\\`autocomplete="name"\\\`, required) · **\*\*\\\*\\\*Email\\\*\\\*\*\***

(\\\`email\\\`, \\\`type="email"\\\`, required) — \\\`sm\\\:grid-cols-2\\\`.

\\- \\\`data-role-field="employer"\\\` (\\\`sm\\\:grid-cols-2\\\`): **\*\*\\\*\\\*Company name\\\*\\\*\*\*** (\\\`company\\\`,

\\\`autocomplete="organization"\\\`) · **\*\*\\\*\\\*Role you're hiring for\\\*\\\*\*\*** (\\\`hiring-for\\\`)

\\- \\\`data-role-field="job-seeker"\\\`: **\*\*\\\*\\\*Resume upload\\\*\\\*\*\*** (\\\`resume\\\`, \\\`type="file"\\\`,

\\\`accept=".pdf,.doc,.docx"\\\`, styled \\\`file:\\\` button)

\\- \\\`data-role-field="training"\\\`: **\*\*\\\*\\\*Which track interests you?\\\*\\\*\*\*** (\\\`track\\\`,

\\\`\\\<select>\\\` populated from \\\`programs.list\\\` titles)

**\*\*### Step 3 — the message (\\\`\\\<div class="py-7">\\\`)\*\***

\\- \\\`.meta\\\` label "Your message"

\\- \\\`\\\<textarea id="message" name="message" rows="6" required>\\\`, placeholder: "Describe

what you're after — no need to pick a service first, we'll point you to the right

one."

**\*\*### Step 4 — send (\\\`\\\<div class="pt-7">\\\`)\*\***

\\- \\\`btn-primary\\\` **\*\*\\\*\\\*"Send Message"\\\*\\\*\*\*** beside \\\`.meta\\\` "We reply within one business day."

\\- Privacy note (\\\`.body-copy text-sm\\\`): "We use your details only to respond to this

enquiry. Resumes are shared with employers only with your say-so, and we never sell

your data. See our **\*\*\\\*\\\*Privacy Policy\\\*\\\*\*\***." → \\\`/privacy-policy/\\\`

**\*\*---\*\***

**\*\*## 3. Sticky sidebar\*\***

\\\`\\\<div class="lg\\\:col-span-5 lg\\\:sticky lg\\\:top-28">\\\` → \\\`space-y-6\\\`. All values from

\\\`site.json\\\`.

**\*\*### Direct lines panel (\\\`.glass-panel p-6 sm\\\:p-7\\\`)\*\***

\\- \\\`.meta\\\` label "Direct lines"

\\- \\\`\\\<dl>\\\` of \\\`.fact-row\\\` lines:

\\| Term | Value | Link |

\\| ------ | -------------------------------------- | ------------------- |

\\| Phone | \\\`+1 (312) 555-0148\\\` | \\\`site.phoneHref\\\` |

\\| Email | \\\`hello\@netcloudedge.com\\\` | \\\`mailto\\\:site.email\\\` |

\\| Office | 212 Wabash Ave, Suite 500, Chicago, IL 60601 | — |

\\| Hours | Mon–Fri, 9:00am–6:00pm CT | — |

\\- Below a hairline: social links from \\\`site.social\\\` (\\\`.meta\\\`, hover \\\`text-brand\\\`) —

LinkedIn · Instagram · X

**\*\*### Reassurance panel (\\\`.glass-panel flex gap-4 p-6 sm\\\:p-7\\\`)\*\***

\\- \\\`.icon-chip icon-chip-accent\\\` with \\\`users\\\` icon

\\- **\*\*\\\*\\\*\\\`.card-title\\\`:\\\*\\\*\*\*** "A person, not a queue"

\\- \\\`.body-copy text-sm\\\`: "Every enquiry goes straight to the team that handles it — no

ticket number, no chatbot in between."

**\*\*---\*\***

**\*\*## 4. FAQ (\\\`partials/faq-accordion.njk\\\`)\*\***

Params: \\\`faqKey = "contact"\\\`, \\\`faqTitle = "Three quick answers."\\\`

\\- **\*\*\\\*\\\*Eyebrow (\\\`.eyebrow\\\`):\\\*\\\*\*\*** "Standing questions" _\_\\\_(default)\\\_\__

\\- **\*\*\\\*\\\*H2 (\\\`font-display text-2xl sm\\\:text-3xl\\\`):\\\*\\\*\*\*** "Three quick answers."

\\- **\*\*\\\*\\\*Rows\\\*\\\*\*\*** — dashed \\\`.docket-disclosure\\\` lines from \\\`faqs.json["contact"]\\\`, chevron

toggle, panel hidden until opened (\\\`faq-accordion.js\\\`):

\\| Question | Answer |

\\| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |

\\| How soon will I hear back? | Within one business day — most inquiries get a reply the same day they're submitted. |

\\| Do I need to pick a service before reaching out? | No — tell us your situation in the message and we'll point you to the right service, or a combination. |

\\| Is there a cost to reach out? | No — the first conversation is always free, for candidates and employers alike. |

**\*\*---\*\***

**\*\*## Footer (\\\`partials/footer.njk\\\`)\*\***

Shared — see [HOME-PAGE.md]\\(HOME-PAGE.md). No page-specific variation.

**\*\*---\*\***

**\*\*## Data & script dependencies\*\***

\\| Concern | Source |

\\| -------------------------------------------- | -------------------------------------------------------------- |

\\| Phone / email / office / hours / social | \\\`\\\_data/site.json\\\` |

\\| Training track \\\`\\\<select>\\\` options | \\\`\\\_data/programs.json\\\` → \\\`list[].title\\\` |

\\| FAQ questions & answers | \\\`\\\_data/faqs.json\\\` → \\\`contact\\\` |

\\| Breadcrumb trail | inline \\\`crumbs\\\` array |

\\| Role router / query-param pre-select / file field | \\\`assets/js/contact-form.js\\\` |

\\| FAQ disclosure | \\\`assets/js/faq-accordion.js\\\` |

\\| Header scroll pill / mobile menu | \\\`assets/js/header-scroll.js\\\` · \\\`nav-toggle.js\\\` (base layout) |

**\*\*\\\*\\\*Placeholder / gated — resolve before launch:\\\*\\\*\*\*** confirm the real inbound endpoint

(the form currently has no \\\`action\\\` — \\\`contact-form.js\\\` handles submit); confirm

\\\`site.json\\\` phone / email / address are live before publish; the one-business-day

reply SLA must be a real commitment; no map block until the office is confirmed

visitable (CONTENT.md item 15).

**---**

**# Contact — Creative Layout & Content Redesign**

**\*\*Route:\*\*** \`/contact/\`

**\*\*Source:\*\*** \`src/contact.njk\` → \`layouts/page.njk\` → \`layouts/base.njk\`

**\*\*Title:\*\*** Contact — Net Cloud Edge

**\*\*Meta description:\*\*** Whether you're looking for a job or looking to hire, we're here to help.

**---**

**# Creative Direction**

This is the **\*\*shared endpoint\*\*** — every service page CTA lands here with a \`?role=\`

already chosen. The page's whole job is to make finishing the form feel like the

conversation already started somewhere else and is simply continuing.

The central visual idea is:

\> **\*\*You're not filling in a form. You're handing one file across a desk to a person who is already expecting it.\*\***

The page should therefore feel like a **\*\*single hand-off moment\*\***, using:

\- one open panel (the form)

\- one person on the other side (the sidebar)

\- a short, visible "what happens next" trail

\- the role you picked, carried in and acknowledged

Avoid turning the page into a generic contact template.

Do not use:

\- a full-bleed hero with a stock "customer support" photo

\- a contact-info grid of four identical icon cards

\- an embedded map before the office is confirmed visitable

\- more form fields than the chosen role needs

\- a fake live-chat widget or "average response time: 37 seconds" badge

The existing factual rules remain unchanged:

\- keep the JS contract (\`data-contact-form\`, \`data-role-option\`, \`data-role-field\`)

and every field \`name\`

\- keep the privacy note and the \`/privacy-policy/\` link

\- keep inputs on their solid \`bg-surface\` fill (THEME.md §5 exception)

\- no map block until CONTENT.md item 15 clears

**---**

**# Page Experience**

\`\`\`text

HEADER

↓

01 INTRO

Contact us.

↓

02 THE HAND-OFF

Form panel (left) · The person + what happens next (right, sticky)

↓

03 FAQ

Three quick answers

↓

FOOTER

\`\`\`

There is deliberately **\*\*no closing CTA band\*\***. The form is the CTA.

**---**

**# 01. INTRO — "Contact us."**

**## Layout**

Keep it quiet and narrow — \`max-w-2xl\`, solid paper, no photo. The weight of the page

belongs to the form, not a hero.

\`\`\`text

Home / Contact

JOB SEEKER OR EMPLOYER — SAME TEAM

CONTACT US.

Whether you're looking for a job or looking to hire,

we're here to help. Fill in the form, or reach us

directly — either way the same team picks it up.

\`\`\`

**## Content**

**### Breadcrumb**

**\*\*Home / Contact\*\***

**### Eyebrow**

**\*\*Job seeker or employer — same team\*\***

**### H1**

**\*\*Contact us.\*\***

**### Lead**

**\*\*Whether you're looking for a job or looking to hire, we're here to help. Fill in the form, or reach us directly — either way the same team picks it up.\*\***

**### Creative detail**

If the visitor arrived with \`?role=\`, add one small acknowledged line under the lead,

built from the role — quiet \`.meta\`, not a banner:

\`\`\`text

CONTINUING FROM · IT Training

\`\`\`

\| \`?role=\` | Line |

\| ------------ | --------------------------------- |

\| \`job-seeker\` | Continuing from · Job Placement |

\| \`employer\` | Continuing from · Hiring |

\| \`training\` | Continuing from · IT Training |

\| (none) | line omitted |

This must be presentational only — it never changes which fields are required.

**---**

**# 02. THE HAND-OFF — form + person**

**## Layout**

One consistent two-column shell that holds from \`lg\` up. Below \`lg\` it stacks: form

first, sidebar after.

\`\`\`text

┌───────────────────────────────────┐ ┌─────────────────────────┐

│ WHO'S ASKING │ │ DIRECT LINES │

│ ( Job Seeker )( Employer )( … ) │ │ Phone +1 (312) … │

│ ─────────────────────────────── │ │ Email hello@ … │

│ YOUR DETAILS │ │ Office 212 Wabash … │

│ [ Full name ] [ Email ] │ │ Hours Mon–Fri … │

│ …role-specific fields… │ │ LinkedIn · Instagram · X│

│ ─────────────────────────────── │ ├─────────────────────────┤

│ YOUR MESSAGE │ │ ◍ A PERSON, NOT A QUEUE │

│ [ ] │ │ Every enquiry goes │

│ ─────────────────────────────── │ │ straight to the team │

│ [ Send Message ] replies in 1 day │ │ that handles it. │

│ privacy note + Privacy Policy link │ │ │

└───────────────────────────────────┘ │ (sticky, lg\:top-28) │

        lg\:col-span-7                    └─────────────────────────┘

                                                lg\:col-span-5

\`\`\`

**## Left — the form (\`lg\:col-span-7\`)**

\`\<form data-contact-form>\` inside one \`.glass-panel divide-y divide-ink/10\`. Each step

is a hairline-divided group with its \`.meta\` label directly above it — no left rail,

no sticky field labels.

**### Step 1 — Who's asking (the router)**

Three radio pills, \`data-role-option\`. First is \`checked\`; \`contact-form.js\` overrides

that selection from \`?role=\` and reveals only the matching \`data-role-field\` group.

\| \`value\` | Label | Reveals |

\| ------------ | ------------------ | -------------------------------------------- |

\| \`job-seeker\` | Job Seeker | Resume upload (PDF or Word) |

\| \`employer\` | Employer | Company name · Role you're hiring for |

\| \`training\` | Training Applicant | Which track interests you? (\`programs.list\`) |

Checked pill: \`border-brand bg-brand text-paper\`. Keep the focus-visible accent outline.

**### Step 2 — Your details**

Always visible: **\*\*Full name\*\*** (\`name\`, required) and **\*\*Email\*\*** (\`email\`, required), in

a \`sm\:grid-cols-2\` row.

Role-specific groups, shown one at a time:

\- \`employer\` — **\*\*Company name\*\*** (\`company\`), **\*\*Role you're hiring for\*\*** (\`hiring-for\`)

\- \`job-seeker\` — **\*\*Resume upload\*\*** (\`resume\`, \`.pdf,.doc,.docx\`)

\- \`training\` — **\*\*Which track interests you?\*\*** (\`track\`, \`\<select>\` from \`programs.list\`)

**### Step 3 — Your message**

\`\<textarea name="message" rows="6" required>\`, placeholder:

**\*\*Describe what you're after — no need to pick a service first, we'll point you to the right one.\*\***

**### Step 4 — Send**

**\*\*Send Message\*\*** (\`btn-primary\`) beside **\*\*We reply within one business day.\*\***

Privacy note beneath:

**\*\*We use your details only to respond to this enquiry. Resumes are shared with employers only with your say-so, and we never sell your data. See our Privacy Policy.\*\***

Route: \`/privacy-policy/\`

**### Creative behavior**

\- When a role pill changes, the swapped field group reveals with a short opacity +

height transition — never a layout jump on load.

\- Inline validation only on blur / submit, never on first focus.

\- On submit success, the panel is replaced in place by a short confirmation that

names what happens next (see the sidebar trail) — not a redirect to a bare

"thank you" page.

**## Right — the person (\`lg\:col-span-5\`, \`lg\:sticky lg\:top-28\`)**

Two stacked \`.glass-panel\` blocks that stay in view down the whole form.

**### Direct lines**

\`\<dl>\` of \`.fact-row\` lines, all from \`site.json\`:

\| Term | Value | Link |

\| ------ | ---------------------------------------------- | ---------------- |

\| Phone | **\*\*+1 (312) 555-0148\*\*** | \`site.phoneHref\` |

\| Email | **\*\*hello\@netcloudedge.com\*\*** | \`mailto:\` |

\| Office | 212 Wabash Ave, Suite 500, Chicago, IL 60601 | — |

\| Hours | Mon–Fri, 9:00am–6:00pm CT | — |

Below a hairline: **\*\*LinkedIn · Instagram · X\*\*** from \`site.social\`.

**### A person, not a queue**

\`.icon-chip icon-chip-accent\` (\`users\` icon) +

**\*\*A person, not a queue\*\***

**\*\*Every enquiry goes straight to the team that handles it — no ticket number, no chatbot in between.\*\***

**### Creative detail — what happens next**

Add a third quiet block below the two panels (or fold it into the second): a tiny

three-node trail, \`.meta\` labels, no dates:

\`\`\`text

● You send this

│

● We read it — a person, same day

│

● We reply with the next step within one business day

\`\`\`

This is the same visual language the service pages use for their process traces, and

it doubles as the copy for the post-submit confirmation state.

**---**

**# 03. FAQ — "Three quick answers."**

**## Layout**

The existing dashed \`.docket-disclosure\` rows. Short — three rows, numbered \`01–03\`.

\`\`\`text

THREE QUICK ANSWERS.

01 How soon will I hear back? +

──────────────────────────────────────────────────────

02 Do I need to pick a service before reaching out? +

──────────────────────────────────────────────────────

03 Is there a cost to reach out? +

──────────────────────────────────────────────────────

\`\`\`

**## Content**

Preserve \`faqs.json["contact"]\` exactly:

**### How soon will I hear back?**

**\*\*Within one business day — most inquiries get a reply the same day they're submitted.\*\***

**### Do I need to pick a service before reaching out?**

**\*\*No — tell us your situation in the message and we'll point you to the right service, or a combination of them.\*\***

**### Is there a cost to reach out?**

**\*\*No — the first conversation is always free, for candidates and employers alike.\*\***

**## Open state**

\`\`\`text

01 HOW SOON WILL I HEAR BACK? −

    │

    └── Within one business day — most inquiries get a

        reply the same day they're submitted.

\`\`\`

The vertical rule matches the "what happens next" trail above.

**---**

**# 04. HEADER**

Shared site header. No page-specific variation.

\`\`\`text

TOP OF PAGE

transparent / light

        ↓ scroll

FLOATING GLASS PILL

\`\`\`

**---**

**# 05. FOOTER**

Shared footer. No page-specific variation.

**---**

**# 06. VISUAL SYSTEM**

**## Core metaphor**

**### The hand-off**

One file, passed once, to a named person who is already expecting it. The form panel

and the "person" sidebar are two sides of one desk. The "what happens next" trail is

the only route graphic on the page — keep it to three nodes.

**## Typography**

Keep the established site typography.

Use display type for:

\- H1

\- FAQ title

Use grotesk / body / mono type for:

\- field labels and \`.meta\` step labels

\- direct-lines list

\- privacy note

\- FAQ questions and answers

There are no oversized typographic assertions on this page — it is a working page, not

a statement page.

**## Materials**

Use:

\- solid paper ground

\- one glass panel for the form, two for the sidebar

\- hairlines between form steps

\- solid \`bg-surface\` fill on inputs (THEME.md §5 exception)

\- a single three-node trail

Avoid:

\- hero photography

\- icon-card grids

\- gradients or dot-field backgrounds

\- a closing CTA band

**---**

**# 07. MOTION**

Motion should communicate **\*\*a form being handed over\*\***, nothing more.

**### Intro**

Static. No entrance animation on the H1.

**### Role switch**

Swapped field group reveals with a short opacity + height transition. No jump on load.

**### Sidebar**

Sticks at \`lg\:top-28\`. No parallax.

**### Submit**

The form panel cross-fades to the confirmation / "what happens next" state in place.

**### FAQ**

Answer disclosure only.

**## Reduced motion**

Respect \`prefers-reduced-motion\`:

\- disable the field-group height transition (toggle visibility instantly)

\- disable the submit cross-fade (swap instantly)

\- keep disclosure functionality and the static trail

**---**

**# 08. RESPONSIVE COMPOSITION**

**## Desktop (\`lg+\`)**

\- 7 / 5 two-column shell

\- sticky sidebar

\- form and sidebar top-aligned (\`lg\:items-start\`)

**## Tablet**

\- same two-column shell where width allows, else single column

\- sidebar drops below the form, not sticky

**## Mobile**

\- single column: form first, sidebar second, FAQ last

\- role pills wrap

\- no sticky anything

\- the "what happens next" trail runs vertically

Never allow the trail graphic or the pills row to cause horizontal overflow.

**---**

**# 09. DATA & SCRIPT DEPENDENCIES**

\| Concern | Source |

\| -------------------------------------- | ----------------------------------------------- |

\| Phone / email / office / hours / social | \`\_data/site.json\` |

\| Training track \`\<select>\` options | \`\_data/programs.json\` → \`list[].title\` |

\| FAQ questions & answers | \`\_data/faqs.json\` → \`contact\` |

\| Breadcrumb | inline \`crumbs\` array |

\| Role router / \`?role=\` pre-select | \`assets/js/contact-form.js\` |

\| FAQ disclosure | \`assets/js/faq-accordion.js\` |

\| Header scroll pill / mobile menu | \`assets/js/header-scroll.js\` · \`nav-toggle.js\` |

**---**

**# 10. PRODUCTION GATES**

Before launch, confirm:

**### Form endpoint**

The \`\<form>\` has no \`action\` — \`contact-form.js\` owns submit. Confirm the real

inbound destination (inbox, ATS, or webhook) and that file uploads are handled.

**### Contact details**

Confirm \`site.json\` phone, email, and address are live and monitored.

**### Reply SLA**

"Within one business day" appears in the form, the sidebar, and the FAQ. It must be a

real, kept commitment.

**### Office / map**

No map block until the office is confirmed visitable (CONTENT.md item 15).

**### Privacy**

The privacy note and \`/privacy-policy/\` link must ship together — do not publish the

form without the policy page.

**---**

**# 11. FINAL CREATIVE PRINCIPLE**

This page should feel like the **\*\*last step of a conversation that already began\*\***, not

a cold front door.

Not:

\`\`\`text

HERO PHOTO

↓

CONTACT INFO GRID

↓

LONG FORM

↓

MAP

\`\`\`

Instead:

\`\`\`text

I ALREADY KNOW WHY I'M HERE

        ↓

THE FORM KNOWS TOO (it carried my role in)

        ↓

I HAND IT OVER

        ↓

A PERSON HAS IT — I CAN SEE WHAT HAPPENS NEXT

\`\`\`

The creative idea is simple:

\> **\*\*Make the reply feel already in motion.\*\***

---

# Creative Redesign — Contact

## Core idea

This page is not a marketing landing page.

It is the **handoff desk** for the entire website.

Every service page eventually arrives here:

- `/contact/?role=job-seeker`
- `/contact/?role=employer`
- `/contact/?role=training`

So the creative treatment should make the visitor feel:

> **"I have reached the right person, and I already know what happens next."**

The page should remain calm, compact, and highly usable.

Do **not** add a hero image, oversized marketing statement, map, testimonial wall, service-card grid, or closing CTA band.

---

# 01. INTRO — "Contact us."

## Creative composition

Keep the solid paper opening, but introduce a very subtle **intake-sheet motif** beneath the breadcrumb.

```text
HOME / CONTACT

JOB SEEKER OR EMPLOYER — SAME TEAM

Contact us.

Whether you're looking for a job or looking to hire,
we're here to help. Fill in the form, or reach us
directly — either way the same team picks it up.

                         ┌─────────────────────────┐
                         │ INTAKE                  │
                         │                         │
                         │ ROLE      → SELECTED    │
                         │ RESPONSE  → 1 BUSINESS  │
                         │                         │
                         │ STATUS    → READY       │
                         └─────────────────────────┘
```

The small intake sheet is **decorative information architecture**, not a third form.

Do not duplicate or invent form fields.

---

# 02. MAIN SHELL — "One router, one handoff."

The existing paired-panel concept should remain the page's main visual structure.

## Desktop

```text
┌───────────────────────────────────────┬───────────────────────────┐
│                                       │                           │
│  CONTACT FORM                         │  DIRECT LINES             │
│                                       │                           │
│  WHO'S ASKING                         │  PHONE                    │
│                                       │  EMAIL                    │
│  [ Job Seeker ]                       │  OFFICE                   │
│  [ Employer   ]                       │  HOURS                    │
│  [ Training   ]                       │                           │
│                                       │  ───────────────────────  │
│  YOUR DETAILS                         │  LinkedIn · Instagram · X │
│                                       │                           │
│  Full name       Email                │                           │
│                                       │  A PERSON, NOT A QUEUE    │
│  Role-specific fields                 │                           │
│                                       │  Every enquiry goes       │
│  YOUR MESSAGE                         │  straight to the team.    │
│                                       │                           │
│  [ Send Message ]                     │  ● You send this          │
│                                       │  │                         │
│  Privacy note                         │  ● We read it              │
│                                       │  │                         │
│                                       │  ● We reply                │
└───────────────────────────────────────┴───────────────────────────┘
```

The right column is deliberately **quiet and persistent**.

The visitor should never lose sight of:

1. how to contact the company directly
2. who receives the enquiry
3. what happens after submission

---

# 03. FORM — MAKE THE ROUTER FEEL LIKE A DECISION

The three role controls are the page's most important interaction.

## Visual treatment

Instead of ordinary radio controls, make them resemble **three intake routes**.

```text
WHO'S ASKING

┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ 01              │ │ 02              │ │ 03              │
│ JOB SEEKER      │ │ EMPLOYER        │ │ TRAINING        │
│                 │ │                 │ │ APPLICANT       │
│ Resume          │ │ Hiring          │ │ Choose a        │
│                 │ │ role            │ │ track           │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

The existing `data-role-option` contract stays unchanged.

### Active state

Use:

- `border-brand`
- `bg-brand`
- `text-paper`

Add a tiny active marker:

`●`

Do not add icons that imply a role beyond the actual labels.

---

# 04. ROLE TRANSITION — "THE FORM ADAPTS"

When a role changes, the form should visibly acknowledge the decision.

Example:

```text
JOB SEEKER selected

WHO'S ASKING
[● Job Seeker] [ Employer ] [ Training ]

YOUR DETAILS

Full name
Email

RESUME
Upload PDF / Word

YOUR MESSAGE
...
```

Switching to Employer:

```text
EMPLOYER selected

WHO'S ASKING
[ Job Seeker ] [● Employer] [ Training ]

YOUR DETAILS

Full name
Email

Company name
Role you're hiring for

YOUR MESSAGE
...
```

Only the relevant `data-role-field` group changes.

Do not move the rest of the form.

## Transition

Use a short opacity + height reveal.

The surrounding form should remain visually stable.

---

# 05. SUBMIT AREA — "HAND IT OVER"

The final form group should visually feel like the visitor is **passing the enquiry across the desk**.

```text
YOUR MESSAGE

┌─────────────────────────────────────────────┐
│ Describe what you're after...               │
│                                             │
│                                             │
└─────────────────────────────────────────────┘

WE REPLY WITHIN ONE BUSINESS DAY

[ SEND MESSAGE ]

We use your details only to respond...
```

The privacy note stays small.

The primary button remains:

**Send Message**

Do not introduce a second CTA.

---

# 06. SUCCESS STATE — KEEP IT IN PLACE

Do not redirect to a generic thank-you page.

Replace the form contents **inside the same glass panel**.

```text
HANDOFF COMPLETE

● You sent this
│
● A person has it
│
● We'll reply within one business day

Thanks — your enquiry is with the team now.

If your question is urgent, you can also reach us
directly at +1 (312) 555-0148.
```

The sidebar remains visible.

This makes the success state feel like the final step of the same interaction.

---

# 07. RIGHT SIDEBAR — "DIRECT LINES"

## Direct lines panel

Keep the existing values from `site.json`.

```text
DIRECT LINES

PHONE
+1 (312) 555-0148

EMAIL
hello@netcloudedge.com

OFFICE
212 Wabash Ave, Suite 500
Chicago, IL 60601

HOURS
Mon–Fri, 9:00am–6:00pm CT

────────────────────────

LinkedIn · Instagram · X
```

Use `.fact-row` hairlines.

Do not turn these into icon cards.

---

# 08. REASSURANCE — "A PERSON, NOT A QUEUE"

This remains a glass panel, but visually it should feel like a **human signature** rather than a feature card.

```text
A PERSON, NOT A QUEUE

Every enquiry goes straight to the
team that handles it — no ticket
number, no chatbot in between.

●
```

Use the existing `users` icon and `icon-chip-accent`.

No additional statistics.

---

# 09. WHAT HAPPENS NEXT — THREE-NODE TRAIL

This is the one graphic system that should define the page.

```text
WHAT HAPPENS NEXT

●  YOU SEND THIS
│
●  WE READ IT
│
●  WE REPLY
```

Supporting labels:

**You send this**

Your enquiry reaches the team.

**We read it**

A person reviews it — usually the same day.

**We reply**

You hear from us within one business day.

The trail must remain visually subtle.

No dates, progress bars, percentages, or invented SLA metrics.

---

# 10. FAQ — "Three quick answers."

Keep the existing three-question FAQ.

The visual treatment should match the trail:

```text
THREE QUICK ANSWERS.

01  How soon will I hear back?                       +

──────────────────────────────────────────────────────

02  Do I need to pick a service before reaching out? +

──────────────────────────────────────────────────────

03  Is there a cost to reach out?                    +
```

When opened:

```text
01  HOW SOON WILL I HEAR BACK?                       −
    │
    └── Within one business day — most inquiries
        get a reply the same day they're submitted.
```

The vertical rule should align with the "what happens next" trail.

---

# 11. MOBILE — FORM-FIRST HANDOFF

On mobile, the hierarchy becomes:

```text
CONTACT US.

FORM
  ↓
DIRECT LINES
  ↓
A PERSON, NOT A QUEUE
  ↓
WHAT HAPPENS NEXT
  ↓
FAQ
```

Do not make the sidebar sticky.

The role controls wrap naturally.

The three-node trail becomes vertical.

The FAQ remains last.

---

# 12. VISUAL LANGUAGE

## Materials

Use:

- solid paper background
- one large glass form panel
- two smaller glass sidebar panels
- hairline rules
- solid `bg-surface` form fields
- one accent color for selected role / primary action
- mono metadata labels

## Avoid

- hero photography
- decorative illustrations
- gradient blobs
- map
- service-card grids
- testimonials
- giant statistics
- closing CTA band

The form itself is the CTA.

---

# 13. MOTION

The page should have almost no motion.

### Role selection

Short height + opacity transition.

### Sidebar

No parallax.

### Submit

In-place cross-fade to success state.

### FAQ

Disclosure only.

### Reduced motion

Immediately toggle role-specific groups and success state.

Keep all functionality intact.

---

# 14. ACCESSIBILITY

The creative redesign must not compromise the form.

Preserve:

- semantic `<fieldset>` / `<legend>`
- actual radio inputs
- keyboard navigation
- visible focus state
- accessible labels
- file input labeling
- error association
- `aria` state where required by the accordion
- native form semantics

The role router must remain usable without JavaScript-dependent visual cues.

---

# 15. DATA & SCRIPT CONTRACT

Do not rename any existing JS hooks.

Required:

```text
data-contact-form
data-role-option
data-role-field
name="name"
name="email"
name="company"
name="hiring-for"
name="resume"
name="track"
name="message"
```

Keep:

```text
contact-form.js
faq-accordion.js
header-scroll.js
nav-toggle.js
```

The `?role=` URL parameter remains the source for pre-selecting:

```text
job-seeker
employer
training
```

---

# 16. CONTENT SAFETY / PRODUCTION GATES

Before launch:

### Contact details

Confirm:

- phone
- email
- office
- hours
- social links

### Reply promise

Confirm that:

**"We reply within one business day."**

is an actual operational commitment.

### Form destination

Confirm the real inbound destination and file-upload handling.

### Privacy

Do not publish the form without:

`/privacy-policy/`

### Office

Do not add a map until the office is confirmed visitable.

---

# 17. FINAL CREATIVE PRINCIPLE

This page should feel like **a handoff between two people**.

Not:

```text
CONTACT PAGE
↓
LONG FORM
↓
CONTACT DETAILS
↓
FAQ
```

Instead:

```text
I ARRIVE WITH A REASON
        ↓
I CHOOSE MY ROUTE
        ↓
THE FORM ADAPTS
        ↓
I HAND IT OVER
        ↓
I CAN SEE WHO HAS IT
        ↓
I KNOW WHAT HAPPENS NEXT
```

> **The creative element is not decoration. It is making the invisible handoff visible.**
