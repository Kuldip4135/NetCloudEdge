# Service Pages — Layout Differentiation & Type Scale

Companion to [SERVICE-PAGES-EXPANSION.md](SERVICE-PAGES-EXPANSION.md) (what the content is) and [WEBSITE-THEME.md](WEBSITE-THEME.md) (the Dossier rules this must not break). This settles *how each page is shaped* and *how big the type is*.

---

## Part 1 — The layout problem

All five service pages are the same page: `cover-sheet` → sticky left rail → single document column → FAQ → CTA. Same grid (`lg:grid-cols-12`, rail 3 / doc 9), same section rhythm, same everything. A visitor moving from Staffing to Talent Acquisition sees no signal that they've changed context.

Worse, the imagery repeats:

| Page | Cover image |
|---|---|
| Job Placement | `home/interview-conversation.jpg` |
| Recruitment & Staffing | `home/team-at-desk.jpg` |
| **IT Training** | **`home/team-at-desk.jpg`** ← duplicate |
| Talent Acquisition | `home/office-collaboration.jpg` |
| Background Verification | `home/workspace-open-office.jpg` |

Five service pages draw from four homepage photos, two of them identical. Every service page is also pulling from `/images/home/`, which is a filing problem as much as a design one.

> **Decisions taken** (2026-08-06):
> 1. **The section rail stays on all five pages.** Theme consistency wins over differentiation. Pages differ through *content shape, measure, and imagery* — not by discarding the shell. The archetypes below are revised accordingly.
> 2. **Background Verification runs archival/document imagery, no faces.** One cover image.
> 3. **Unsplash** for sourcing, now, under the same licence terms as the existing photos.
> 4. **Type increase is slight and applies to reading tiers only** — the display scale is untouched. ✅ Shipped, see Part 4.

### The organizing idea

Don't invent five unrelated designs — that breaks Dossier and makes the site feel stitched together. Instead: **a case file contains different kinds of document.** Each service page becomes a different document type within the same filing system. Same tokens, same stamps, same paper, same spacing rhythm — different shape on the page, chosen to match how that page's reader actually reads.

---

## Part 2 — Five archetypes ✅ **shipped**

Every page keeps the cover sheet, the sticky rail, the FAQ, and the CTA. What changes per page is **what fills the document column**, how wide the measure runs, and how much imagery it carries.

Built with three new units in `input.css` — `.form-row` / `.form-row-label` (the label-beside-content pair), `.exhibit-band` (a wide plate across the column), and `.assertion` (a display-weight lead-in, distinct from `.statement`, which is a quotation and keeps its brand rule). Plus a `railCard` slot on `section-rail.njk` for terms pinned under the links.

### 1. Job Placement → **The personal file**
*Reader: anxious job seeker, reads top to bottom, needs reassurance.*

- Rail stays, but the doc column runs a **narrower reading measure** — this page is read, not scanned.
- **Full-bleed photo bands between sections**, breaking out of the column to the section edge. This is the emotional page and it earns the most human imagery; each band carries a mono caption in the exhibit style.
- Contrast table and process timeline stay as built.
- **Image budget: 3** (cover + 2 bands).

### 2. Recruitment & Staffing → **The spec sheet**
*Reader: employer with a role open now. Skims for terms, doesn't read prose.*

- Rail stays, with a **terms summary card pinned beneath it** — engagement models, replacement window, CTA — held in view the whole scroll. The rail navigates; the card sells.
- Data-dense doc column: comparison tables, industries grid, shortlist deliverables. Widest measure of the five.
- **Minimal photography.** Employers read terms, not smiling people. Cover only.
- **Image budget: 1.**

### 3. Talent Acquisition → **The confidential brief**
*Reader: senior, evaluating whether we're serious. Premium, sparse, considered.*

- Rail stays. The doc column runs the **narrowest measure of the five** with the largest vertical gaps — restraint is the whole effect.
- One wide image treated as a plate, plus `.pullquote` breaks in the column.
- This page should feel like it costs more than the Staffing page, and it does that through space, not decoration.
- **Image budget: 2** (cover + one plate).

### 4. Background Verification → **The form**
*Reader: cautious, checking whether we're compliant and competent.*

- Rail stays. Inside the doc column, each section is a **form row**: fixed mono label block on the left, content on the right. Reads as an actual verification form.
- Numbered sections, heavy `.ledger` tables, dashed rules.
- **Archival/document imagery only — no faces** (decision 2). Stock photos of smiling strangers on a background-check page actively undercut it.
- **Image budget: 1** (cover, documents/filing subject).

### 5. IT Training → **The prospectus**
*Reader: early-career learner comparing programs. Browses, compares, filters.*

- Rail stays and lists the four tracks by name — it becomes a course index, which is exactly what this reader wants.
- Doc column is **panel-led**: each track a full panel with curriculum, tools, format, prerequisites, and its own image.
- Most imagery of the five; a course page without imagery reads as vaporware.
- **Image budget: 5** (cover + one per track).
- ⚠️ Gated on the same blocker as the content plan: are these tracks real?

### What stays identical (non-negotiable)

The differentiation is in the *fill*, not the *system*. Unchanged across all five:

- Colour tokens, `.stamp`, `.folder-card`, `.eyebrow`, `.ledger`, paper grain
- The spine: cover sheet → rail + doc column → FAQ → related services → CTA
- Section padding rhythm (`py-14 sm:py-20`), `.section-container`, `scroll-mt-28`
- The type scale in Part 4
- No shadows, no blur, no gradients — Dossier §9

---

## Part 3 — Images ✅ **covers shipped**

Service imagery is **loaded directly from the Unsplash CDN**, not committed to the repo. Every slot lives in [`src/_data/images.json`](../src/_data/images.json) — url, alt, caption, credit, dimensions — so a template never hardcodes a photo and swapping to local files later is a one-file change.

All 12 URLs were verified twice: a 200 at full size, and *opened and looked at*, so the subject actually matches its caption. That second check is the one that matters — an HTTP 200 says nothing about whether the Background Verification photo has a face in it.

| Page | Slot | Subject | Status |
|---|---|---|---|
| Job Placement | cover | Interview conversation | ✅ wired |
| | band A | Notebook + laptops, hands only | manifest ready |
| | band B | Signing a document | manifest ready |
| Recruitment & Staffing | cover | Hiring team taking notes | ✅ wired |
| Talent Acquisition | cover | Empty glass-walled corridor | ✅ wired |
| | plate | Quiet empty lounge | manifest ready |
| Background Verification | cover | Forms and paperwork — **no faces** | ✅ wired |
| IT Training | cover | Cohort in session | ✅ wired |
| | Web Development | Source code on a monitor | manifest ready |
| | QA / Testing | Two people reviewing a screen | manifest ready |
| | Cloud / DevOps | Server rack cabling | manifest ready |
| | Data Basics | Analytics dashboard | manifest ready |

The seven "manifest ready" slots are defined but not yet placed — they belong to sections (photo bands, the TA plate, track panels) that the layout work still has to build.

**The tradeoff, recorded:** these render from an external host. A photo withdrawn from Unsplash becomes a broken slot with no build-time warning, and every page view hits a third-party CDN. To move local: download each `url`, drop it in `src/assets/images/services/<page>/`, rewrite `url` to the local path. `cover-sheet.njk` already accepts either form (`url` printed raw, `src` through the `url` filter).

**Rules, carried over:**
- No stock portrait presented as a real client or candidate — the existing `person-*.jpg` files are already flagged for replacement before launch
- Every image gets a real `alt`, explicit `width`/`height`, and `loading="lazy"` except the homepage hero
- Captions use `.meta`, and a caption must say something — not restate the alt text

---

## Part 4 — Type scale ✅ **shipped**

### Is an increase needed? Yes — but a floor lift, not a blanket bump.

Current usage across `src/`:

| Class | Size | Count | Used for |
|---|---|---|---|
| `text-sm` | 14px | **48** | Card body, table cells — *most readable prose on the site* |
| `text-[10px]` | 10px | **30** | Metadata, captions, file numbers |
| `text-[11px]` | 11px | 18 | Stamps, field errors |
| `text-xs` | 12px | 10 | Eyebrows |
| `text-[9px]` | 9px | 5 | Rail stat labels |

Two real problems:

1. **Body prose is 14px.** Leads are 16px but the actual descriptive copy — every card body, every table cell — is 14px. That's a UI size being used for reading text, and the [expansion plan](SERVICE-PAGES-EXPANSION.md) roughly doubles how much of it there is.
2. **The 9px tier shouldn't exist.** It's below comfortable reading for anyone, and it's a hard accessibility problem for a site whose audience includes people reading on phones.

### The scale, as shipped

| Role | Now | Proposed |
|---|---|---|
| Page H1 | `text-3xl sm:text-5xl` | unchanged |
| Section H2 | `text-2xl sm:text-3xl` | `text-2xl sm:text-4xl` |
| Card H3 | `text-lg` (18) | `text-xl` (20) |
| Lead paragraph | 16 | `text-lg` (18) |
| **Body prose** | `text-sm` (14) | **`text-base` (16)** |
| Table cells | 14 | 16 |
| Eyebrow | 12 mono | unchanged |
| Metadata / caption | `text-[10px]` | **`text-[11px]`** |
| Micro labels | `text-[9px]` | **`text-[11px]` — tier deleted** |

Net effect: three mono tiers (9/10/11) collapse to two (11 meta, 12 eyebrow), and readable prose moves off the UI scale. The display scale is barely touched — headings are already large and Fraunces at 48px is doing its job.

### How to implement it

Not 100+ find/replaces. Add two component classes to `input.css` alongside the existing `@layer components` set:

```css
.body-copy { @apply text-base leading-relaxed text-ink/75; }   /* replaces 48× text-sm */
.meta      { @apply font-mono text-[11px] uppercase tracking-widest text-ink/65; }  /* replaces 53× mono */
```

This matches how `.eyebrow`, `.stamp`, and `.ledger` already work, kills the drift that produced three near-identical mono tiers, and means the next scale change is two lines instead of a sweep.

### Knock-on effects to check

- **Measure widths.** Body at 16px in a `max-w-xl` column runs short; several will want `max-w-2xl`.
- **`.ledger`** is `text-sm` at the table level — bump with the rest, then re-check the 4-column tables on mobile.
- **`.rail-link`** at 16px may wrap in the 3-column rail; may need `text-[15px]` or a wider rail.
- **Cover sheet** at 18px lead + 20px card headings — re-check the 7/5 split doesn't get cramped.

---

## Part 5 — Order of work

Type first: it changes every measurement the layouts are built against, and doing it after would mean re-tuning five pages.

1. **Type scale** — `.body-copy` + `.meta` in `input.css`, sweep `src/`, fix measures, update [WEBSITE-THEME.md](WEBSITE-THEME.md) §4 so the table stops describing the old scale
2. **Image reorganization** — new folders, source ~11 photos, per-folder `CREDITS.md`
3. **Layouts, one page per pass**, in this order: Background Verification (thinnest, most distinct shape) → Recruitment & Staffing → Talent Acquisition → Job Placement → IT Training (gated)
4. Each layout pass lands together with that page's content expansion — building the shape and then refilling it separately is double work

## Decisions — resolved

1. **Rail removal → rejected.** The rail stays on all five pages; theme consistency beats layout novelty. Archetypes revised in Part 2 to differentiate through fill, measure, and imagery instead.
2. **Background Verification photography → no faces.** Archival/document imagery, one cover image.
3. **Photo sourcing → Unsplash, now.** If real office photography arrives later, these slots swap out cleanly — the per-folder `CREDITS.md` records what needs replacing.
4. **Type increase → slight, reading tiers only.** Display scale untouched. Shipped.