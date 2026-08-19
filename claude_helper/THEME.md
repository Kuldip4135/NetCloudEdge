# Theme: "The Console" — Default Site Theme

> Purpose of this document: describe the default (no `data-theme` attribute) design
> language of this site precisely enough that an AI reading only this file — with no
> access to the rest of the repo — could design and build an entire matching website
> from scratch (new pages, new components, new copy) in the same visual language.
> This is the theme used for Home / About / Services / Contact. It is NOT one of the
> four alternate `[data-theme]` skins (`editorial`, `bold`, `dossier`, `signal`) —
> it is the baseline the whole site is built on.

## 1. Concept, in one sentence

The homepage — and the site generally — is styled as **a live operations dashboard**:
a bento grid of frosted-glass tiles floating over soft colored light, as if you're
looking at a control console that is quietly monitoring a real-time recruiting
pipeline (candidates, employers, placements), not a static marketing brochure.

Governing metaphor: **glass panels over light**. Every content block is a translucent,
blurred "pane" (glassmorphism) sitting above soft glowing color blobs ("orbs"). Status
indicators (pulsing dots, monospace chips) reinforce the "live system" feeling
throughout — on the hero, on stat counters, on the "manifest" of recent placements.

Domain/industry it's built for: recruiting & staffing (candidates, employers, job
placements) — but the visual system itself is industry-agnostic and would work for
any "operational" or data-forward B2B/B2C product (fintech dashboards, logistics,
SaaS ops tools, monitoring products).

## 2. Color system

Colors are defined as CSS custom properties holding `R G B` triplets (space-separated,
no commas), consumed via `rgb(var(--token) / <alpha>)` so every color supports
opacity modifiers everywhere it's used.

```css
--color-ink: 16 28 46; /* near-black navy — all body text */
--color-paper: 245 248 252; /* near-white — page background, text-on-color */
--color-brand: 29 95 214; /* cobalt blue — primary actions, authority */
--color-brand-dark: 20 64 158; /* darker cobalt — hover states */
--color-accent: 23 182 212; /* cyan — "live", confirmed, signal color */
--color-accent-deep: 12 116 137; /* darker cyan — text-safe accent on light bg */
--color-surface: 234 241 251; /* pale blue-white — subtle fills */
--color-border: 211 225 245; /* pale blue-grey — hairlines */
```

Palette character: **cool, clean, corporate-but-alive**. Not warm/cream, not
neutral-grey. A very light blue-white "paper" (not pure white) with a confident
cobalt blue for primary actions and a cyan "signal" color reserved specifically for
anything meant to feel live, active, or just-confirmed (status dots, "live" badges,
count-up numbers). Cyan is a functional color, not decorative — use it for state,
not for random accents.

Usage rules:

- `ink` — all body copy, headings, icons on light backgrounds.
- `paper` — page background base, and text color on top of `brand`/`accent`/`ink`
  filled surfaces.
- `brand` (cobalt) — primary CTAs, primary icon chips, key numerals, links.
- `accent` (cyan) — "live"/status indicators, secondary icon chips, star ratings,
  highlighted stat callouts. Never used as the primary button color.
- `surface` — very subtle background fills, rarely needed since glass panels handle
  most surfaces.
- `border` — hairlines, dividers between stat blocks, table-ish content.

## 3. Typography

Four font families, each with a distinct job — do not blend their roles:

| Token                      | Family (w/ fallback stack)                          | Used for                                                                                                                           |
| -------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `font-grotesk`             | Space Grotesk, ui-sans-serif, system-ui, sans-serif | All headings (h1–h3), tile titles, big numerals in prose context — the "voice" of the design                                       |
| `font-body` (default body) | Public Sans, ui-sans-serif, system-ui, sans-serif   | Paragraph text, descriptions                                                                                                       |
| `font-mono`                | IBM Plex Mono, ui-monospace, monospace              | Status labels, eyebrows/labels, stat counters, timestamps, "system" chrome text — anything meant to feel like instrumentation/data |
| `font-display`             | Fraunces, ui-serif, Georgia, serif                  | Reserved/available but NOT the default theme's display face — belongs to other variants                                            |

Rules:

- Headlines are bold, tight tracking, large scale (h1 up to `text-6xl` on desktop),
  set in Space Grotesk — geometric, slightly technical, not a humanist sans.
- Any label that should feel like machine-generated status text (eyebrows, "Live
  totals", timestamps, step numbers, stat values) is set in monospace, uppercase,
  letter-spaced (`tracking-widest`), small (11–12px), and usually at reduced opacity
  (`text-ink/45` to `/55`) unless it's the hero number itself.
- Body copy is relaxed leading, medium-size, ink at ~65% opacity (`text-ink/65`) so
  it recedes under the bolder headline/mono chrome.

## 4. The core visual unit: glass panels over light

This is the signature and must be present on essentially every page to read as "this
theme."

**Background layer — the "light":**

- Full-bleed section background: soft gradient `from-surface to-paper` (top to
  bottom).
- 2–3 large blurred circular color blobs ("orbs") positioned absolutely, using
  `brand` and `accent` at low opacity (15–25%), `blur-3xl`, sized 20–34rem,
  positioned to bleed off the edges of hero/closer sections. Two of them get a slow
  drifting float animation (12–14s ease-in-out, translate + scale, `prefers-reduced-motion`-safe).
- These orbs are what the glass panels have to actually blur/frost — without light
  behind it, a translucent panel reads as flat and pointless.

**Foreground layer — the "glass":**

```css
.glass-panel {
  background: rgb(paper / 0.6);
  backdrop-filter: blur(24px) /* backdrop-blur-xl */;
  border: 1px solid rgb(255 255 255 / 0.6);
  box-shadow: /* .glass = */
    0 1px 1px rgb(ink/0.04),
    0 12px 32px -12px rgb(ink/0.12);
  border-radius: 1.75rem; /* generous, consistent rounding on every panel */
}
```

- Every discrete content block on the page — hero, stat cards, testimonial,
  service cards, process steps — is a `.glass-panel`, not a plain white card.
- Panels are laid out as a **bento grid**: `grid-cols-12` on desktop, panels span
  varying column counts (7+5, 4+4+4, 7+5, 12, 12) rather than a uniform card grid.
  This asymmetric, dashboard-like arrangement is intentional — avoid making
  everything the same size.
- Interactive/hover cards additionally get `.card-lift`: translate up 1.5 on hover
  plus the glass shadow — subtle, not dramatic.
- Corner radius is consistently very generous (28px / `1.75rem`) across panels —
  this softness is part of what keeps "glass + dashboard" from feeling cold.

## 5. Signature components (the "operations dashboard" motifs)

These specific UI patterns are what sell the "live system" concept — reuse this
vocabulary rather than inventing generic marketing components:

- **Status chip** (`.status-chip`): small pill, monospace, uppercase-ish, often
  paired with a pulsing dot (a `absolute animate-ping` ring behind a solid dot) in
  accent or brand color. Used for "System status — live", "Signal received",
  "Ready when you are". This pulsing-dot + chip pattern is the single most
  recognizable motif in the theme — reuse it anywhere something should feel
  live/current.
- **Manifest / ledger rows** (`.manifest-row`): a `grid-cols-12` row inside a panel
  listing real-feeling records (name/role, company, status chip) with a bottom
  hairline (`border-b border-ink/10`), no border on the last row. Reads like a live
  feed/table, not a bullet list. Status values get color-coded chips (accent for
  "done/placed" state, brand for "in progress" state).
- **Count-up stat numerals**: large monospace numbers (`font-mono text-2xl
font-semibold`) with a small mono label underneath at reduced opacity. On the
  homepage these animate from 0 to target via a `data-count-up`/`data-target`
  JS hook — implies motion/liveness even in a static screenshot.
- **Icon chips**: small rounded-square (`rounded-xl`/`rounded-2xl`) solid-color
  badges (`bg-brand`, `bg-accent`, or `bg-ink`) holding a white/paper-colored line
  icon, `shadow-glow` (colored glow shadow matching the fill). Used to lead every
  feature/service block.
- **Numbered process/trace steps**: circular monospace-numbered badges
  (`01`, `02`...) connected by a horizontal hairline through their centers — used
  both for a generic "how it works" 4-step list and for a narrative "trace through
  the system" case-study timeline (walk one real customer through discrete
  timestamped stages: Day 0 → Day 4 → Day 11 → Day 16, applied → matched →
  interview → offer). This "trace" pattern — a single concrete story rendered as a
  timestamped pipeline — is a distinctive theme signature; use it for one flagship
  proof-point per major page rather than generic testimonials only.
- **Eyebrow labels** (`.eyebrow`): tiny monospace uppercase brand-colored kicker
  above every section heading ("Why us", "What we do", "How it works").

## 6. Buttons

```css
.btn-primary  = solid brand pill, paper text, shadow-glow, lifts -0.5 + darkens on hover
.btn-outline  = translucent paper/50 + backdrop-blur pill, ink text, white/60 border,
                border/text turn brand on hover, same lift
```

Both are fully rounded (`rounded-full`), generous padding (`px-6 py-3.5`), medium
weight, 200ms transitions, always paired with a trailing arrow icon on primary CTAs.
Never square/sharp buttons in this theme (that's the "bold" variant's job).

## 7. Motion

- Orbs: slow independent float loops (12s/14s), never synchronized, subtle
  scale+translate only.
- Status dots: `animate-ping` pulse ring behind a solid dot — used sparingly, only
  on genuinely "live/current" indicators, not decoratively everywhere.
- Count-up numerals on scroll/load.
- Hover lifts on cards/buttons (`-translate-y-0.5` to `-1.5`), never rotation or
  large movement.
- Everything respects `prefers-reduced-motion: reduce` (animations collapse to
  ~instant, scroll-behavior reverts to auto).
- A faint fixed SVG noise/grain texture overlays the whole page at low opacity
  (`mix-blend-mode: multiply`) for tactility — keeps the glass look from feeling too
  digital/sterile.

## 8. Layout patterns to reuse on new pages

1. **Hero as dashboard, not banner**: pair a large glass "hero tile" (headline + CTA
   - inline stat row) with an adjacent smaller glass "live feed" tile (manifest-style
     list) rather than a single centered hero.
2. **Bento grid over section stack**: prefer an asymmetric `grid-cols-12` bento
   layout of glass panels (mixed 4/5/7/12-column spans) over uniform full-width
   stacked sections, at least for the top of a page.
3. **Two-audience split**: for any page describing two sides of a marketplace/service
   (e.g. "For Job Seekers" / "For Employers"), give each side its own equal-width
   glass panel with a distinct icon-chip color (brand vs. accent) and matching link
   color — never merge them into one panel.
4. **One flagship "trace" story per major page**: a single named, concrete
   example walked through timestamped pipeline stages, closing with a real quote —
   this does more work than generic testimonial grids in this theme.
5. **Symmetric open/close**: bookend the page with visually matching hero and
   closing sections (same orb treatment, same glass-panel CTA block, same status-chip
   pattern) so the page feels like it "returns to the console" at the end.
6. **Full-bleed interludes** (e.g. logo marquees) break the section-container width
   constraint between bento blocks to vary rhythm.

## 9. What this theme is NOT (contrast with sibling variants, for disambiguation)

If asked to build "the site's theme," this default is the one to use unless a
specific alternate is named. Do not accidentally pull in traits from these
siblings, which exist elsewhere in this project as opt-in `[data-theme]` skins:

- NOT "editorial" (warm cream/print, squared-off, no blur, serif-led).
- NOT "bold" (neo-brutalist, thick black borders/outlines, offset hard shadows,
  zero blur, loud saturated colorways).
- NOT "dossier" (case-file/folder motif, dashed borders, stamps, muted slate).
- NOT "signal" (a dark-mode "control room" descendant of this same glass language,
  but on a near-black petrol background with green/amber functional states instead
  of light paper + cobalt/cyan).

The default theme described in this document is light, cool-toned, and paper-based
— glass floating over light on a bright background, not glass in a dark room.

## 10. Quick build spec (for an AI generating a new page/site in this theme)

- Background: `bg-gradient-to-b from-surface to-paper`, 2–3 low-opacity blurred
  brand/accent orbs behind content.
- Container: max-width ~1280px, centered, responsive horizontal padding.
- Every content block: `.glass-panel` — `bg-paper/60`, `backdrop-blur-xl`,
  `border-white/60`, soft layered shadow, `rounded-[1.75rem]`.
- Grid: 12-column bento on desktop, asymmetric spans, collapsing to single column
  on mobile.
- Headings: Space Grotesk, bold, tight tracking.
- Body: Public Sans, `text-ink/65`.
- Labels/data/status: IBM Plex Mono, uppercase, wide tracking, small, muted opacity
  unless it's the hero stat.
- Primary color cobalt blue for actions/authority; cyan reserved exclusively for
  "live/confirmed" signaling — pulsing dot + chip, never a general accent.
- Buttons: fully rounded pills with colored glow shadows and a small hover lift.
- Include at least one "manifest"-style live feed list and one numbered
  process/trace sequence per page where content allows — these are the theme's
  signature, not optional flourish.
