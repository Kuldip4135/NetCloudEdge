# Roadmap — service pages: what's built, what's left

Source of truth for **remaining build work**. Structure is in [PRD.md](PRD.md), copy in
[CONTENT.md](CONTENT.md), the visual system in [THEME.md](THEME.md).

The nine pages exist and carry the Dossier theme. The open work is depth on the five service
pages: they run 350–500 words each where they need 900–1,200, in **more sections, not longer
ones** (card body 12–20 words, body paragraph ≤ 3 sentences still hold).

---

## Already shipped — don't redo it

**Type scale.** `.body-copy` (16px prose) and `.meta` (11px mono) replaced the 48 loose `text-sm`
prose uses and the three near-identical mono tiers. The 9px tier is deleted; 11px is the floor.
Display scale untouched. Recorded in [THEME.md §3](THEME.md).

**Five layout archetypes.** The rail stays on all five pages — theme consistency beat layout
novelty. Pages differentiate through *fill, measure, and imagery*, not by discarding the shell:

| Page | Archetype | Reader | Measure | Images |
|---|---|---|---|---|
| Job Placement | The personal file | Anxious job seeker, reads top to bottom | Narrow | 3 (cover + 2 photo bands) |
| Recruitment & Staffing | The spec sheet | Employer with a role open now, skims for terms | Widest | 1 (cover) |
| Talent Acquisition | The confidential brief | Senior, evaluating whether we're serious | Narrowest, largest gaps | 2 (cover + plate) |
| Background Verification | The form | Cautious, checking compliance and competence | Standard, form rows | 1 (cover, **no faces**) |
| IT Training | The prospectus | Early-career learner comparing programs | Panel-led | 5 (cover + one per track) |

Built on `.form-row` / `.form-row-label`, `.exhibit-band`, `.assertion`, and a `railCard` slot on
`section-rail.njk`. The organizing idea: *a case file contains different kinds of document* — same
tokens, same stamps, same paper, same spacing rhythm, different shape on the page.

**Cover images.** All five covers wired from `src/_data/images.json`, loaded from the Unsplash CDN.
Every URL was verified twice — a 200 at full size, *and opened and looked at*, because an HTTP 200
says nothing about whether the Background Verification photo has a face in it.

*The tradeoff, recorded:* these render from an external host. A photo withdrawn from Unsplash
becomes a broken slot with no build-time warning, and every page view hits a third-party CDN. To
move local: download each `url`, drop it in `src/assets/images/services/<page>/`, rewrite `url` to
the local path. `cover-sheet.njk` already accepts either form.

---

## Phase 1 — Shared partials *(no blockers, start here)*

Four partials, because the same shapes recur on 3+ pages. Built first so page work is assembly,
not invention.

| Partial | Shape | Used by |
|---|---|---|
| `partials/related-services.njk` | 2–3 cards from `services.json`, excluding the current page | All 5 |
| `partials/audience-fit.njk` | Two columns: "This is for you if" / "You want a different service", second column links out | All 5 |
| `partials/spec-table.njk` | Generic 3–4 column comparison table (`.ledger` styling exists) | Staffing, TA, BGV, Training |
| `partials/intake-checklist.njk` | Numbered "what we need from you", with a time cost per item | Placement, Staffing, TA, BGV |

`related-services.njk` is the highest-leverage item here: internal linking between the five pages
is currently **zero**, which costs both SEO and the wrong-page visitor.

**Data changes to land alongside:**
- `programs.json` — add `modules[]`, `outcomes[]`, `tools[]`, `hoursPerWeek` per track
- `faqs.json` — 4 → 8 entries per service key
- New `checks.json` — the Background Verification check catalogue
- New `engagements.json` — contract / temp-to-perm / permanent / retained comparison rows

---

## Phase 2 — Page by page

### Background Verification *(~350 → ~950 words. Thinnest page, biggest gain.)*

| New section | Content | Notes |
|---|---|---|
| **Consent and candidate rights** | No check begins without written consent; candidate sees what's requested; how a dispute is raised | Lead with this — it protects us and reassures both sides |
| **Check catalogue** | Per check: what it confirms, source, typical turnaround. Employment, education, professional reference, identity, criminal record *where legally permitted* | `checks.json` + `spec-table.njk`. The legal qualifier is non-negotiable |
| **Package tiers** | Basic / Standard / Compliance-grade × which checks are included | Scope columns only, no pricing |
| **How we handle the data** | What we collect, where it's stored, retention period, who can access the report | Factual sentences, zero badges |
| **What we don't do** | We report findings, we don't adjudicate suitability. No legal advice. No checks where prohibited | Rare on competitor sites; reads as competence |
| FAQ 4 → 8 | Inconclusive results, international records, retention period, whether a candidate can see the report | Write conservatively — most legally sensitive page |

### Recruitment & Staffing *(~500 → ~1,000)*

| New section | Content | Notes |
|---|---|---|
| **Engagement models compared** | Contract / temp-to-perm / permanent × who owns payroll, typical use, fee structure, replacement window | `engagements.json` + `spec-table.njk`. Structure only — no rates |
| **What a shortlist contains** | The actual deliverable: 3–5 candidates, screened summary each, reference status, availability, salary expectation | Concrete deliverables are what employers scan for |
| **Starting an engagement** | Role brief, hiring manager availability, interview loop shape, decision timeline | `intake-checklist.njk` |
| **Who this is for** | Employers with a defined open role. Not pipeline-building → Talent Acquisition; not candidates → Job Placement | `audience-fit.njk` |
| FAQ 4 → 8 | Single vs multiple hires, work outside Chicago, what if the candidate leaves, how fast the first shortlist | Time-to-fill numbers only if tracked |

### Talent Acquisition *(~430 → ~950)* — written together with Staffing so they don't overlap

| New section | Content | Notes |
|---|---|---|
| **When retained search is the right call** | Four triggers: no existing pool, targets aren't looking, the search is confidential, a bad hire is expensive to unwind | Sharpens the differentiation the page already opens with |
| **The market map, described** | Contents of the actual deliverable: who's in the market, where they sit, comp bands, org structures, who's reachable | The page's credibility asset, currently one sentence |
| **Engagement timeline** | 6–10 weeks broken into phases, with what you receive at each | Only if the 6–10 week figure is confirmed |
| **Confidentiality** | Off-market approach, replacing an incumbent, NDA posture | Real differentiator vs Staffing; no overlap risk |
| FAQ 4 → 8 | What makes a role "senior enough", hiring someone ourselves mid-search, how the 6-month guarantee works, exclusivity | The guarantee must be a real policy |

### Job Placement *(~420 → ~1,000)*

| New section | Content | Notes |
|---|---|---|
| **Who this is for** | Students entering the market, career switchers, professionals moving up. Plus the redirect: employers hiring → Recruitment & Staffing | `audience-fit.njk` |
| **What it costs, in full** | Free at every stage, no exclusivity clause, no charge if you take a role we didn't introduce, employer pays on placement | Policy claims only — must match the confirmed fee model |
| **Roles we place into** | Six sectors from `industries.json` with example role titles. Answers "do you even work in my field" | Drop the `share` percentages — they belong on employer pages |
| **What we need from you** | Current resume, 30 min for the intake call, honest salary range, availability window | `intake-checklist.njk` |
| FAQ 4 → 8 | How long it takes, already interviewing elsewhere, entry-level candidates, what if the placement doesn't work out | No timeline numbers unless tracked |
| Photo bands A + B | Notebook + laptops (hands only); signing a document | Slots defined in `images.json`, not yet placed |

### IT Training *(~480 → ~1,200)* — ⚠️ **gated**

`programs.json` still carries `PLACEHOLDER` curricula. **If the four tracks aren't real with real
instructors, this page ships the waitlist variant and everything below is deferred.**

| New section | Content | Notes |
|---|---|---|
| **Per-track detail** | Each track expands: 5–6 curriculum modules, tools covered, outcomes, hours/week, prerequisites | `programs.json` expansion. Biggest single word-count gain on the site |
| **Format and schedule** | Live vs recorded, evening/weekend options, cohort size, what happens if you miss a session | Learners filter on this before anything else |
| **The placement pathway, spelled out** | What "priority access" concretely means — handoff to a recruiter, portfolio review, intro to the pipeline. Explicitly **not** a job guarantee | Reuse the existing FAQ wording verbatim; it's already correct |
| **Payment** | Payment plans exist, pricing varies by track, request-pricing CTA | A page with no price signal loses price-sensitive readers |
| FAQ 5 → 8 | Do I need a degree, what if I fall behind, is the certificate vendor-recognized | Never a graduate placement rate |
| Track panel images | Source code on a monitor · two people reviewing a screen · server rack cabling · analytics dashboard | Slots defined in `images.json`, not yet placed |

---

## Phase 3 — Consistency pass

- All five pages end identically: FAQ → related services → CTA
- Section rail letters renumbered per page — they're hand-keyed and will have drifted as sections were added
- Meta `description` rewritten per page against the new content, 150–160 chars
- One read-through for cross-page duplication — the failure mode of an expansion this size
- The Talent Acquisition plate image and the TA/Staffing measure widths re-checked at final length

---

## Blockers

All of them live in **[CONTENT.md Part 4](CONTENT.md#part-4--before-launch-what-must-be-confirmed)**
— that's the single list, kept there because content depends on it too. The four that block *this*
work specifically:

1. **Are the four IT Training tracks real?** (CONTENT #5) — decides whether page 5 gets ~700 new
   words or a waitlist page.
2. **Background check scope** (CONTENT #8) — blocks the check catalogue, the largest new block on
   the thinnest page.
3. **Commercial structure for employers** (CONTENT #7) — blocks two tables.
4. **TA timeline and guarantee** (CONTENT #6, #9) — blocks the engagement timeline section.

Where an answer doesn't arrive: **write the mechanism, cut the number.**

## Order of work

1. Phase 1 partials, `related-services.njk` across all five pages first *(unblocked — start now)*
2. Background Verification *(pending blocker 2)*
3. Recruitment & Staffing, then Talent Acquisition *(the employer pair, written together)*
4. Job Placement
5. IT Training *(gated on blocker 1)*
6. Phase 3 consistency pass

Each page's content expansion lands **together with** its remaining layout work — building the
shape and refilling it separately is double work.