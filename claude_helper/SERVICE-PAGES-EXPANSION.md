# Service Pages — Content Expansion Plan

Companion to [CONTENT-PLAN.md](CONTENT-PLAN.md) and [PRD.md](PRD.md). Those settle *what belongs on the site*; this settles *how each of the five service pages goes from thin to complete* without inventing a single fact.

## Where we are

| Page | Sections | Approx. words | Gap |
|---|---|---|---|
| [job-placement.njk](../src/services/job-placement.njk) | 5 | ~420 | No "who it's for", no cost detail, no sectors, 4 FAQs |
| [recruitment-staffing.njk](../src/services/recruitment-staffing.njk) | 6 | ~500 | Engagement models named but not compared; no intake spec |
| [talent-acquisition.njk](../src/services/talent-acquisition.njk) | 5 | ~430 | Market mapping asserted, never described; no timeline |
| [background-verification.njk](../src/services/background-verification.njk) | 4 | ~350 | Thinnest page. No check catalogue, no data handling, no tiers |
| [it-training.njk](../src/services/it-training.njk) | 6 | ~480 | Tracks have no curriculum; the whole page is one level too abstract |

**Target: 900–1,200 words per page**, in scannable blocks — not longer paragraphs. Every page ends with the same three closers: FAQ (8 items), related services, CTA.

## Ground rules (unchanged, restated because expansion is where they break)

1. Nothing added may be an unverifiable number. Where a number would go and isn't confirmed, write the *policy* or the *mechanism* instead.
2. No sentence reused verbatim across two service pages — duplicated copy weakens both and reads as filler.
3. Length discipline still applies per block: card body 12–20 words, body paragraph ≤ 3 sentences. More content means **more sections**, not longer ones.
4. New content is data-driven where it repeats (`src/_data/*.json`), inline where it's page-specific — matching how the pages already work.

---

## Phase 1 — Shared building blocks

Four new partials, because the same shapes recur on 3+ pages. Built first so page work is assembly, not invention.

| Partial | Shape | Used by |
|---|---|---|
| `partials/audience-fit.njk` | Two columns: "This is for you if" / "You want a different service" — the second column links out | All 5 |
| `partials/spec-table.njk` | Generic 3–4 column comparison table (`ledger` styling already exists) | Staffing, TA, BGV, Training |
| `partials/intake-checklist.njk` | Numbered "what we need from you" with a time cost per item | Placement, Staffing, TA, BGV |
| `partials/related-services.njk` | 2–3 cards from `services.json`, excluding current page | All 5 |

`related-services.njk` is the highest-leverage item on this list: internal linking between the five pages is currently zero, which costs both SEO and the wrong-page visitor.

**Data changes:**
- `programs.json` — add `modules[]`, `outcomes[]`, `tools[]`, `hoursPerWeek` per track
- `faqs.json` — 4 → 8 entries per service key
- New `checks.json` — the Background Verification check catalogue
- New `engagements.json` — contract / temp-to-perm / permanent / retained comparison rows

---

## Phase 2 — Page by page

### 1. Job Placement — add 4 sections (~420 → ~1,000 words)

| New section | Content | Notes |
|---|---|---|
| **Who this is for** | Students entering the market, career switchers, professionals moving up. Plus the redirect: employers hiring → Recruitment & Staffing | `audience-fit.njk` |
| **What it costs, in full** | Expand the cover-sheet line into a section: free at every stage, no exclusivity clause, no charge if you take a role we didn't introduce, employer pays on placement | Policy claims only — must match the confirmed fee model |
| **Roles we place into** | 6 sectors from `industries.json` with example role titles. Answers "do you even work in my field" | Drop `share` percentages here — they belong on employer pages |
| **What we need from you** | Current resume, 30 min for the intake call, honest salary range, availability window | `intake-checklist.njk` |
| FAQ 4 → 8 | Add: how long does it take, what if I'm already interviewing elsewhere, do you work with entry-level, what happens if the placement doesn't work out | No timeline numbers unless tracked |

### 2. Recruitment & Staffing — add 3 sections (~500 → ~1,000)

| New section | Content | Notes |
|---|---|---|
| **Engagement models compared** | Table: Contract / Temp-to-perm / Permanent × who owns payroll, typical use, fee structure, replacement window | `engagements.json` + `spec-table.njk`. Structure only — no rates |
| **What a shortlist contains** | The actual deliverable: 3–5 candidates, screened summary per candidate, reference status, availability, salary expectation | Concrete deliverables are what employers scan for |
| **Starting an engagement** | Role brief, hiring manager availability, interview loop shape, decision timeline | `intake-checklist.njk` |
| **Who this is for** | Employers with a defined open role. Not for pipeline-building → Talent Acquisition; not for candidates → Job Placement | `audience-fit.njk` |
| FAQ 4 → 8 | Add: single hire vs multiple, do you work outside Chicago, what if the candidate leaves, how fast is first shortlist | Time-to-fill numbers only if tracked |

### 3. Talent Acquisition — add 3 sections (~430 → ~950)

| New section | Content | Notes |
|---|---|---|
| **When retained search is the right call** | 4 triggers: role has no existing pool, target candidates aren't looking, the search is confidential, a bad hire is expensive to unwind | Sharpens the differentiation the page already opens with |
| **The market map, described** | Table of contents of the actual deliverable: who's in the market, where they sit, comp bands, org structures, who's reachable | This is the page's credibility asset and it's currently one sentence |
| **Engagement timeline** | 6–10 weeks broken into phases with what you receive at each | Only if the 6–10 week figure is confirmed |
| **Confidentiality** | Off-market approach, replacing an incumbent, NDA posture | Real differentiator vs. Staffing; no overlap risk |
| FAQ 4 → 8 | Add: what makes a role "senior enough", what if we hire someone ourselves mid-search, how the 6-month guarantee works, exclusivity | Guarantee must be a real policy |

### 4. Background Verification — add 4 sections (~350 → ~950). **Biggest lift.**

| New section | Content | Notes |
|---|---|---|
| **Check catalogue** | Per check: what it confirms, source, typical turnaround. Employment, education, professional reference, identity, criminal record *where legally permitted* | `checks.json` + `spec-table.njk`. The legal qualifier is non-negotiable |
| **Package tiers** | Basic / Standard / Compliance-grade × which checks are included | Scope columns only, no pricing |
| **Consent and candidate rights** | No check begins without written consent; candidate sees what's requested; how a dispute is raised | Lead with this — it protects us and reassures both sides |
| **How we handle the data** | What we collect, where it's stored, retention period, who can access the report | Factual sentences, zero badges |
| **What we don't do** | We report findings, we don't adjudicate suitability. No legal advice. No checks where prohibited | Rare on competitor sites; reads as competence |
| FAQ 4 → 8 | Add: what if a check comes back inconclusive, international records, how long results are retained, can a candidate see the report | Write conservatively — most legally sensitive page |

### 5. IT Training — add 4 sections (~480 → ~1,200). **Gated.**

⚠️ `programs.json` still carries `PLACEHOLDER curricula`. **If the four tracks aren't real with real instructors, this page ships the waitlist variant and everything below is deferred.** That decision blocks the work — it's the one thing I need an answer on.

If real:

| New section | Content | Notes |
|---|---|---|
| **Per-track detail** | Each track expands: 5–6 curriculum modules, tools covered, outcomes, hours/week, prerequisites | `programs.json` expansion. Single biggest word-count gain on the site |
| **Format and schedule** | Live vs. recorded, evening/weekend options, cohort size, what happens if you miss a session | Learners filter on this before anything else |
| **The placement pathway, spelled out** | What "priority access" concretely means — handoff to a recruiter, portfolio review, intro to the placement pipeline. Explicitly **not** a job guarantee | Reuse the existing FAQ wording verbatim; it's already correct |
| **Payment** | Payment plans exist, pricing varies by track, request-pricing CTA | A page with no price signal loses price-sensitive readers entirely |
| FAQ 5 → 8 | Add: do I need a degree, what if I fall behind, is the certificate vendor-recognized | Never a graduate placement rate |

---

## Phase 3 — Consistency pass

- All five pages end identically: FAQ → related services → CTA
- Section rail letters renumbered per page (they're hand-keyed today and will drift as sections are added)
- Meta `description` rewritten per page against the new content, 150–160 chars
- One read-through for cross-page duplication — the failure mode of a content expansion like this

---

## Blockers

Ordered. The first two block the most work.

1. **Are the four IT Training tracks real?** Determines whether page 5 gets ~700 new words or a waitlist page. Still unanswered from the PRD.
2. **The fee model in writing** — "employers pay, candidates never" is about to become a full section on Job Placement. If any candidate-paid element exists, that section changes.
3. **Commercial structure for employers** — not rates, but the *shape*: contingency vs retained, replacement window length, temp-to-perm conversion terms. Blocks two tables.
4. **Background check scope** — which checks we actually run, through which vendor, and typical turnaround. Blocks the catalogue, the largest new block on that page.
5. **Talent Acquisition timeline and guarantee** — is 6–10 weeks real, is the 6-month replacement a real policy?
6. **Industry list honesty** — `industries.json` says "only list sectors with real placement history". Job Placement is about to surface it a second time.

Where an answer doesn't arrive, the fallback is always the same: write the mechanism, cut the number.

## Suggested order

1. Phase 1 partials + `related-services.njk` across all five pages *(no blockers — can start now)*
2. Background Verification *(thinnest page, biggest gain — pending blocker 4)*
3. Recruitment & Staffing, then Talent Acquisition *(employer pair, written together so they don't overlap)*
4. Job Placement
5. IT Training *(gated on blocker 1)*
6. Phase 3 consistency pass
