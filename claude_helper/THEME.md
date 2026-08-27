# THEME.md — The Glass System

How the frosted-glass treatment works, where it is allowed, and the order to roll it
out across the remaining pages. Read this before adding a translucent surface anywhere.

The base theme is unchanged: **The Ledger** — near-white paper, one confident blue,
depth from a hairline plus a soft colourless shadow. Glass sits *on top* of that as a
second layer of depth. It does not replace the card theme; it replaces the card's
*ground*.

---

## 1. The three ingredients

A surface reads as glass only when all three are present. Miss one and you get a pale
box that costs a `backdrop-filter` and returns nothing.

1. **Something chromatic behind it.** The ambient field — two fixed, 100px-blurred
   brand fields on `.bg-orbs`. Fixed rather than scrolled, so panes slide across them
   and the refraction shifts as the page moves.
2. **A translucent, blurred, saturated ground.** `saturate()` runs *before* `blur()`,
   which is what keeps whatever passes behind — the aurora, a photograph, a logo —
   chromatic instead of washing out to grey.
3. **A lit rim.** The inset white line along the top edge, plus a light hairline border.
   This is the detail that reads as a physical pane rather than as opacity.

---

## 2. Tokens

Every frosted surface derives from five numbers in `:root` (`src/assets/css/input.css`).
Tune density here, never in individual rules.

| Token | Default | What it controls |
|---|---|---|
| `--glass-blur` | `18px` | Backdrop blur radius |
| `--glass-saturate` | `180%` | Colour retention of what shows through |
| `--glass-ground` | `0.55` | Panel opacity — the main dial |
| `--glass-ground-frost` | `0.82` | Raised opacity for floating surfaces |
| `--glass-rim` | `0.7` | Strength of the lit top edge |
| `--glass-hairline` | `0.6` | Border opacity |

**Density is set as a variable, never as another `background-color`.** A surface that
needs to be denser sets `--glass-ground` on itself and inherits the appearance rule
unchanged. This is what keeps the system free of specificity fights — see
`.glass-frost`, which is nothing but three variable assignments.

---

## 3. The three densities

| Class | Ground | Use for |
|---|---|---|
| `.glass-pane` | 0.55 | In-page panels sitting on the ambient field |
| `.glass-frost` | 0.82 | Anything floating over content it cannot predict — the top bar, the nav dropdown, the mobile sheet, sticky rails |
| `.glass-dark` | white/10 | Chips and cards inside the ink bands (CTA, footer) |

The rule of thumb: **if you cannot predict what will be behind it, it is frost.** A
panel in the page flow knows its own background; a dropdown does not, and at pane
density its text lands on whatever photograph happens to be underneath.

A page opts in with **`glass: true` in its front matter**, which puts `is-glass` on the
`<body>` (see `layouts/base.njk`). That switches on the ambient field and promotes every
`.glass-panel` on the page to pane density, so converting a page needs no per-panel
markup change. Pages without the flag keep the solid-card theme untouched.

---

## 4. Where it is applied today

**Converted:** Home, About, Services (overview), and all four service detail pages
(Job Placement, Recruitment & Staffing, Talent Acquisition, IT Training). All carry
`glass: true`.

**Global, on every page:** the top bar (frost, on scroll), the nav dropdown, the mobile
sheet. These are chrome, not page content, so they do not wait for a page to convert.

**Home:** hero stat strip · hero secondary button · employer marquee (+ edge fade) ·
both dual-path panels · the five service-grid tiles (four services + the router tile) ·
four policy cards · growth table · case study · testimonial cards · process tab pill ·
process panel · placement manifest · CTA band chip (dark glass).

**About:** cover image frame · the floating "trading since" tag (frost — it sits over a
photograph) · story exhibit · four value tiles · both trust panels · the registered-
particulars manifest · stat band · CTA band chip.

**Services overview:** cover image frame · the sticky section rail (frost) · the audience
matrix (transparent `.ledger`, no conversion needed) · all four file-index rows (frost,
via `.folder-card`) · the featured Job Placement row's brand-tinted variant
(`.folder-card-accent`).

**The four service detail pages:** cover image frame · the sticky section rail (frost) ·
every "what's included" / outcome tile grid (frost, via `.folder-card`) · the process-
timeline panel · the exhibit-band photographs' captions · Talent Acquisition's market-map
callout (`.folder-card-accent`) · IT Training's per-track panels. Tables (`.ledger`,
`.docket-row`) stay unconverted by design — see the guardrail on data below.

**Deliberately still solid — these are what make the glass read as glass:**

- `.icon-chip` — brand fill plus glow. The accent anchor.
- `.trace-badge` — solid ink step numbers.
- `.growth-bar` — data must not be translucent.
- The manifest's first-row highlight.
- The ink CTA band and the footer.

If everything is translucent, nothing is. The opaque anchors are load-bearing.

---

## 5. Rollout order for the remaining pages

Per page, in this order:

1. **Add `glass: true` to the page's front matter.** This is the ambient field plus
   pane density in one line. Do it first — without the field a page pays for
   `backdrop-filter` and looks identical.
2. **Convert `.glass-panel` for that page**, the same way home does.
3. **Convert the floating surfaces to `.glass-frost`** — on inner pages that means
   `.folder-card` / the sticky section rail, which scrolls over live content.
4. **Handle the opaque fills inside panels** (`.file-inset` and friends), or the blur
   underneath them is wasted.
5. **`.glass-dark` for anything inside the ink bands** on that page.

All shared components are converted: `cover-sheet` and `process-timeline` compose
through `.glass-panel`; `section-rail` / `folder-card` runs frost via
`.is-glass .folder-card`; `faq-accordion` and `breadcrumb` need no glass surface of
their own. (`stat-counter` came along with About, since it is built from
`.glass-panel`.) Still on the solid-card theme: Contact and the legal pages (Privacy
Policy, Terms) — see the Contact exception in §5 below before converting the former.

### Layout, as distinct from theme

The glass system is a surface treatment; it does not dictate page structure, and pages
converted to it should not converge on one shape. Home opens centred on a full-measure
headline because it addresses a stranger who has not chosen a door yet. About opens
weighted left with the exhibit beside it, because it is already a conversation — and it
replaced the sticky rail with per-section **chapter markers** (`.chapter-marker` /
`.chapter-index`): a ghosted index number and label that hold position while their
section scrolls past.

Keep the rail card for the service and legal pages. It is the right answer where a
reader arrives hunting one clause and wants a list of them; it is the wrong answer on a
page that is read top to bottom.

**Exception — Contact.** Form `.field` inputs stay at or above 85% opacity. Translucent
text inputs are where this trend consistently hurts usability: the value the user typed
has to be the highest-contrast thing in the control.

---

## 6. Guardrails

- **Never nest glass inside glass.** Two stacked `backdrop-filter`s blur an already
  blurred result and go grey. Inner wells use a flat `white/45` instead — this is why
  `.file-inset` is overridden rather than frosted.
- **Text over glass over a photograph needs ≥70% ground.** Pane density (55%) is for
  surfaces over the ambient field only. The hero stat cells and the nav dropdown are
  denser for exactly this reason.
- **Budget roughly a dozen blurred panes per viewport.** `backdrop-filter` costs per
  element, not per page. Blur the panel, never its children.
- **Blur the panel, not the text.** Nothing inside a pane should carry its own
  `backdrop-filter` unless it floats independently.
- **Always ship a `@supports not` fallback.** Where `backdrop-filter` is unavailable the
  ground has to carry the contrast alone (95% opaque), or ink text sits on whatever is
  behind the panel. Safari on iOS drops the filter inside some stacking contexts.
- **`prefers-reduced-motion` does not disable glass.** Blur is not motion. The global
  reduced-motion block already stops the drift; the bloom itself stays, which is the
  correct reading of that preference.

---

## 7. Motion knobs on home

| What | Where | Default |
|---|---|---|
| Hero rotating word — hold time | `data-hold` on `[data-rotator]`, `partials/home-hero.njk` | `1800` ms |
| Hero rotating word — roll duration | `.roll-track` transition, `input.css` | `400` ms |
| Top bar — scroll threshold | `header-scroll.js` | `8` px |
| Top bar — state transition | `.header-bar` / `.header-shell`, `input.css` | `300` ms |
| Aurora drift loops | `.aurora-blob-1/2/3`, `input.css` | `20s / 26s / 32s` |

A word is on screen for **hold + roll** — 1800 + 400 ≈ 2.2s per word at the defaults.
The three drift durations are deliberately unequal: matched durations resolve into a
single visible beat and the hero starts reading as a loading screen.
