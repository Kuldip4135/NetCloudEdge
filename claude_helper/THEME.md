# Theme — **Dossier**

Source of truth for **how the site looks and is built**. Stack: Eleventy 2 + Nunjucks +
Tailwind 3, colours resolved through CSS variables in `src/assets/css/input.css` and consumed
as normal Tailwind classes (`bg-brand`, `text-ink/65`, …) via `tailwind.config.js`.

Companions: [PRD.md](PRD.md) (what pages exist) · [CONTENT.md](CONTENT.md) (the words) ·
[coding_guidelines.md](coding_guidelines.md) (project conventions) · [ROADMAP.md](ROADMAP.md) (open work).

Dossier is the only theme on the site. The palette sits in `:root`, the component overrides are
ungated, and no page carries `theme:` front matter.

---

## 1. The idea (read this before writing markup)

**A case file, not a brochure.** Every page is a document that was opened, stamped, and filed.
The visual language comes from the materials the motif is actually made of — archival slate
stock, blue-black registrar's ink, aniline violet (the colour real stamp pads put on paper),
and vermilion reserved strictly for stamps and file numbers.

| Do | Don't |
|---|---|
| Flat surfaces, hairline borders, `rounded-sm` | Blur, glow, glass, drop shadows, big radii |
| Folders with a coloured tab (`.folder-card`) | Floating cards that lift on hover |
| Dashed rules between rows (`.docket-row`) | Boxed grids of equal cards for everything |
| Mono for labels, file numbers, metadata | Mono for body copy |
| Vermilion (`accent`) only on stamps + file numbers | Vermilion as a general highlight or CTA colour |
| Cool slate stock | Warm manila/cream — it reads nostalgic, not verified |
| Asymmetric page shells (rail + document column) | hero → grid → grid → grid → CTA on every page |

The one structural signature: **a sticky left rail beside a narrower document column**, with
one or two full-bleed interludes breaking out of it. Reuse that shell on long pages
(About, Services index, Service detail). Short pages (Contact) can drop the rail.

---

## 2. Tokens

| Token | Tailwind | RGB | Use |
|---|---|---|---|
| `--color-ink` | `ink` | `27 31 46` | Body text, headings, dark CTA band, step numerals |
| `--color-paper` | `paper` | `238 239 244` | Page stock, folder faces, text on ink |
| `--color-brand` | `brand` | `74 63 143` | Folder tabs, primary buttons, links, icon chips |
| `--color-brand-dark` | `brand-dark` | `55 46 110` | Primary button hover only |
| `--color-accent` | `accent` | `184 48 31` | **Stamps and file numbers only** |
| `--color-accent-deep` | `accent-deep` | `138 34 21` | Accent text on `surface` where `accent` gets tight |
| `--color-surface` | `surface` | `226 228 236` | Section bands, icon chips, inset strips |
| `--color-border` | `border` | `199 202 216` | Every hairline and dashed rule |

**Opacity ramp for ink** (contrast measured against `paper`):

| Class | Ratio | Allowed for |
|---|---|---|
| `text-ink` | 14.2 : 1 | Headings, emphasis |
| `text-ink/75` | ~6.5 : 1 | Long-form body, quotes |
| `text-ink/65` | 4.89 : 1 | **Floor for any real text** — secondary copy, mono labels |
| `text-ink/60` and below | 4.17 : 1 ✗ | Decorative only — chevrons, dividers, never words |

`text-brand` on paper is 7.6 : 1, `text-accent` is 5.3 : 1 — both safe for text.

---

## 3. Type & rhythm

```
Display   Fraunces      font-display font-semibold tracking-tight
Body      Public Sans   font-body (set on <body>)
Labels    IBM Plex Mono font-mono uppercase tracking-widest
```

| Role | Classes | Size |
|---|---|---|
| Page H1 | `font-display text-3xl sm:text-5xl font-semibold leading-[1.1] tracking-tight text-ink` | 30 / 48 |
| Section H2 | `font-display text-2xl sm:text-3xl font-semibold leading-tight tracking-tight text-ink` | 24 / 30 |
| Card H3 | `font-display text-xl font-semibold tracking-tight text-ink` | 20 |
| Lead paragraph | `text-lg leading-relaxed text-ink/75 max-w-xl` | 18 |
| **Body** | **`.body-copy`** | 16 |
| Eyebrow / filing mark | `.eyebrow` | 12 mono |
| **Metadata / file no.** | **`.meta`** | 11 mono |
| UI (nav, buttons, fields) | `text-sm` | 14 |

**The two reading tiers are component classes, not utilities.** `.body-copy` (16px prose) and
`.meta` (11px mono) exist so the reading scale lives in one place. Use them for anything a
visitor *reads*; `text-sm` is for chrome only — nav links, buttons, form controls.

**11px is the floor.** The old 9px and 10px mono tiers are gone; three near-identical metadata
sizes was drift, not design. The display scale is deliberately untouched — Fraunces at 48px was
already carrying the theme.

Spacing rhythm — keep it identical across pages:

```
Full-width section padding   py-14 sm:py-20     (dark CTA: py-20 sm:py-28)
Between doc-column sections  mt-14
Heading → content            mt-6
Eyebrow → heading            mt-2
Heading → lead paragraph     mt-4
Lead → buttons               mt-7
Grid gaps                    gap-5 (cards) / gap-8 lg:gap-12 (page columns)
Anchor offset for the rail   scroll-mt-28
```

Every full-width section wraps its content in `.section-container`
(`max-w-content mx-auto px-4 sm:px-6 lg:px-8`, `--max-w-content: 1280px`).

---

## 4. Component layer

All of these are defined in `@layer components` in [`src/assets/css/input.css`](../src/assets/css/input.css)
— read the file for the exact `@apply` chains. Use them instead of re-deriving utility strings.

| Class | What it is |
|---|---|
| `.folder-card` | The recurring "case file" unit — a folder with a brand tab along the top edge |
| `.folder-card-accent` | Vermilion tab. A page's single most important card. **One per page, maximum** |
| `.file-panel` | Folder with no tab — neutral containers (maps, form wells, sidebars) |
| `.file-inset` | Dashed inset strip on `surface` — callouts, "what's included", small print |
| `.file-tag` | Metadata chip — sector, duration, location. Never a button, never clickable |
| `.file-band` | Full-width `surface` band, alternates against the paper sections |
| `.stamp` | Rotated ink-stamp badge — "VERIFIED", "OPEN", "FILE CLOSED" |
| `.docket-row` / `.docket-head` | Dashed-rule list row and its printed column header |
| `.docket-disclosure` | FAQ / accordion row — a dashed docket line that opens |
| `.ledger` | Data table — ledger rules, not zebra stripes |
| `.statement` | Pull quote. A vertical brand rule replaces quote marks |
| `.assertion` | Display-weight lead-in. Distinct from `.statement`, which is a quotation |
| `.form-row` / `.form-row-label` | Fixed mono label beside content — the Background Verification shape |
| `.exhibit-band` | Wide plate breaking out across the document column |
| `.field` / `.field-label` / `.field-error` | Form fields. Squared, dashed until focused |
| `.filepath` | Breadcrumb, set in mono and separated by slashes |
| `.rail-link` (`.is-active`) | Sticky section rail links |
| `.body-copy` / `.meta` / `.eyebrow` | The reading tiers from §3 |

Nothing above uses blur, glow, or a shadow — that is deliberate. **If a new component needs
depth, it is the wrong component for this theme; give it a border instead.**

---

## 5. Page shell — copy this for any long inner page

```njk
---
layout: layouts/page.njk
title: About
description: …
---
{% from "partials/icons.njk" import icon %}

{% set rail = [
  { id: "overview",  label: "Overview",  n: "00" },
  { id: "history",   label: "History",   n: "A"  },
  { id: "people",    label: "People",    n: "B"  }
] %}

{# 1 — Cover sheet: two columns, never one column against dead space. #}
<section class="file-band">
  <div class="section-container py-10 sm:py-14">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
      <div class="lg:col-span-7">
        <div class="flex flex-wrap items-center gap-3">
          <span class="stamp">{{ icon("check-badge", "w-3.5 h-3.5") }} On file</span>
          <span class="meta">Case No. 2026–014 · {{ site.address.line2 }}</span>
        </div>
        <h1 class="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          Headline in a plain declarative sentence.
        </h1>
        <p class="mt-4 max-w-lg text-lg leading-relaxed text-ink/75">Lead paragraph.</p>
        <div class="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href="{{ '/contact/' | url }}" class="btn-primary">{{ icon("arrow-right", "w-4 h-4") }} Primary</a>
          <a href="{{ '/services/' | url }}" class="btn-outline">{{ icon("arrow-right", "w-4 h-4") }} Secondary</a>
        </div>
      </div>

      {# Exhibit — a mounted print with a stamp across the corner. The stamp keeps a paper
         fill: vermilion over an unpredictable photo can't be relied on to stay legible. #}
      <figure class="folder-card p-3 lg:col-span-5">
        <div class="relative">
          <img src="{{ '/assets/images/home/hero-team-meeting.jpg' | url }}" alt="…"
               width="1400" height="933" class="aspect-[4/3] w-full object-cover">
          <span class="stamp absolute bottom-3 left-3 bg-paper">
            {{ icon("check-badge", "w-3.5 h-3.5") }} Verified
          </span>
        </div>
        <figcaption class="meta px-1.5 pb-1 pt-3">Exhibit A · Caption</figcaption>
      </figure>
    </div>
  </div>
</section>

{# 2 — The file: sticky rail + document column. #}
<section class="section-container py-14 sm:py-20">
  <div class="lg:grid lg:grid-cols-12 lg:gap-12">

    <nav class="hidden lg:col-span-3 lg:block" aria-label="Sections">
      <div class="sticky top-28 folder-card p-2">
        {% for item in rail %}
        <a href="#{{ item.id }}" class="rail-link">
          <span class="meta">{{ item.n }}</span>{{ item.label }}
        </a>
        {% endfor %}
        <div class="mt-1 border-t border-dashed border-border px-3 pt-4">
          <dl class="grid grid-cols-2 gap-y-4">
            {% for stat in stats.list %}
            <div>
              <dt class="meta">{{ stat.label }}</dt>
              <dd class="mt-1 font-display text-lg font-semibold tracking-tight text-ink"
                  data-count-up data-target="{{ stat.value }}" data-suffix="{{ stat.suffix }}">0{{ stat.suffix }}</dd>
            </div>
            {% endfor %}
          </dl>
        </div>
      </div>
    </nav>

    <div class="lg:col-span-9">
      {% for item in rail %}
      <div id="{{ item.id }}" class="scroll-mt-28 {% if not loop.first %}mt-14{% endif %}">
        <p class="eyebrow">{{ item.n }} — {{ item.label }}</p>
        <h2 class="mt-2 max-w-xl font-display text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
          Section heading.
        </h2>
        <div class="mt-6"><!-- folders / docket rows --></div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

{# 3 — Close the case. Identical on every page. #}
<section class="bg-ink py-20 sm:py-28">
  <div class="section-container text-center">
    <span class="stamp !border-paper !text-paper">{{ icon("check-badge", "w-3.5 h-3.5") }} Ready to open</span>
    <h2 class="mx-auto mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
      Ready to open your file?
    </h2>
    <p class="mx-auto mt-5 max-w-lg leading-relaxed text-paper/65">
      Whether you're job hunting or hiring, the intake call is free — and it starts the file.
    </p>
    <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
      <a href="{{ '/contact/' | url }}" class="inline-flex items-center justify-center gap-2 rounded-sm bg-paper px-6 py-3.5 font-medium text-ink transition-colors hover:bg-surface">
        Get Started {{ icon("arrow-right", "w-4 h-4") }}
      </a>
      <a href="{{ site.phoneHref }}" class="inline-flex items-center justify-center gap-2 rounded-sm border border-paper/40 px-6 py-3.5 font-medium text-paper transition-colors hover:border-paper">
        {{ icon("phone", "w-4 h-4") }} {{ site.phone }}
      </a>
    </div>
  </div>
</section>
```

On the dark band the tokens invert: text is `text-paper` / `text-paper/65`, buttons are
paper-filled, and the stamp needs `!border-paper !text-paper` because vermilion on ink
fails contrast.

---

## 6. Block recipes

**Two-up folder pair** (audience split, plan comparison)

```njk
<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
  <div class="folder-card p-6">
    <div class="flex items-start justify-between">
      <span class="flex h-10 w-10 items-center justify-center rounded-sm bg-brand text-paper">
        {{ icon("users", "w-5 h-5") }}
      </span>
      <span class="meta">File · JS</span>
    </div>
    <h3 class="mt-4 font-display text-xl font-semibold tracking-tight text-ink">Job seeker</h3>
    <p class="body-copy mt-2">One sentence.</p>
    <a href="#" class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all hover:gap-2.5">
      Open a file {{ icon("arrow-right", "w-4 h-4") }}
    </a>
  </div>
  <!-- second folder: bg-accent chip, File · EMP -->
</div>
```

**Docket list** (services, sectors, programs, any 4–8 item list — use this instead of a card grid)

```njk
<div class="docket-head">
  <span class="col-span-1"></span>
  <span class="col-span-3">Service</span>
  <span class="col-span-6">Scope</span>
  <span class="col-span-2 text-right">Ref</span>
</div>
{% for service in services.list %}
<a href="{{ service.url | url }}" class="docket-row group">
  <span class="col-span-2 flex h-9 w-9 items-center justify-center rounded-sm bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-paper sm:col-span-1">
    {{ icon(service.icon, "w-4 h-4") }}
  </span>
  <p class="col-span-10 font-display font-semibold tracking-tight text-ink sm:col-span-3">{{ service.title }}</p>
  <p class="body-copy col-span-12 sm:col-span-6">{{ service.shortDescription }}</p>
  <span class="col-span-12 flex justify-end text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-brand sm:col-span-2">
    {{ icon("arrow-right", "w-4 h-4") }}
  </span>
</a>
{% endfor %}
```

**Numbered procedure** — same `.docket-row`, with `bg-ink font-mono text-paper` numerals in a
`h-8 w-8 rounded-sm` square. Wrap in `<ol>`.

**Sworn statement / testimonial** — `.folder-card p-5` wrapping a `<blockquote>`, with a
`<figcaption>` split across a `border-t border-dashed border-border pt-4`: name in
`text-sm font-semibold text-ink`, role · company below it, and a `.meta` "Sworn" mark on the right.

**Fact strip** — `<dl class="grid grid-cols-3 gap-4 border-t border-dashed border-border pt-5">`
with `.meta` `<dt>` and `font-display text-base font-semibold` `<dd>`.

**Sequence chips** — `.file-tag` per stage, `loop.index` in `font-semibold`, last one
`text-accent` (a file number, so vermilion is legitimate there).

**Breadcrumb**

```njk
<nav class="filepath" aria-label="Breadcrumb">
  <a href="{{ '/' | url }}">Home</a><span aria-hidden="true">/</span>
  <a href="{{ '/services/' | url }}">Services</a><span aria-hidden="true">/</span>
  <span class="text-ink">{{ title }}</span>
</nav>
```

**Form** — `.field-label` + `.field`, submit is `.btn-primary`, wrap the whole form in
`.file-panel p-6 sm:p-8`, and put reassurance copy in a `.file-inset` beside it.

---

## 7. Data & icons

Global data (no import needed in templates): `site`, `nav`, `services.list`, `industries.list`,
`programs.list`, `testimonials.list`, `companies.list`, `placements.list`, `stats.list`,
`faqs["<service-slug>"]`, `images`.

Shared partials that already carry the theme: `cover-sheet.njk`, `section-rail.njk` (accepts a
`railCard` slot for terms pinned under the links), `placed-at.njk` (pass `placedAtTitle` /
`placedAtLead`), `placement-feed.njk`, `faq-accordion.njk`, `breadcrumb.njk`, `cta-section.njk`,
`process-timeline.njk`, `stat-counter.njk`, `testimonial-card.njk`.

Icons — `{% from "partials/icons.njk" import icon %}` then `{{ icon("name", "w-4 h-4") }}`:
`arrow-right`, `bolt`, `briefcase`, `chart`, `check`, `check-badge`, `chevron-down`, `clock`,
`close`, `cloud`, `code`, `heart`, `mail`, `map-pin`, `menu`, `phone`, `shield`, `star`,
`support`, `target`, `users`.

**Images.** Every slot lives in [`src/_data/images.json`](../src/_data/images.json) — url, alt,
caption, credit, dimensions — so a template never hardcodes a photo. Service imagery currently
loads from the Unsplash CDN rather than the repo; `cover-sheet.njk` accepts either form (`url`
printed raw, `src` through the `url` filter), so moving local later is a one-file change.
Always set `width`/`height` and `loading="lazy"` (except the cover-sheet exhibit, which gets
`fetchpriority="high"`), mount photos in a `.folder-card` with an `Exhibit N ·` caption, and
give every caption something to say beyond restating the alt text. Local photo credits:
`src/assets/images/home/CREDITS.md`.

**No stock portrait may be presented as a real client, candidate, or team member** — the
existing `person-*.jpg` files are flagged for replacement before launch.

---

## 8. Non-negotiables

- **Vermilion discipline.** `accent` appears on stamps and file numbers. Not on buttons, not on
  links, not on hover states. Break this and the theme collapses into a generic red-accent site.
- **`text-ink/65` is the floor** for anything a person reads. See §2.
- **No blur, no glow, no drop shadow.** `shadow-*` and `backdrop-blur-*` do not belong in new markup.
- **`rounded-sm` everywhere**, `rounded-full` never.
- **Every section is anchorable**: `id` + `scroll-mt-28`, and listed in that page's `rail`.
- **Reduced motion is already handled globally** in `@layer base`; if you add a keyframe
  animation, verify it neutralises there.
- **`:focus-visible` is a 2px accent outline** — never remove it, and never set `outline: none`
  without an equivalent replacement.
- Decorative-only elements get `aria-hidden="true"`; the paper grain is `pointer-events: none`.

---

## 9. New page checklist

1. Front matter: `layout: layouts/page.njk`, `title`, `description`.
2. Define the `rail` array first — it forces you to decide the document's structure.
3. Cover sheet: stamp + case line, H1, lead, two buttons, exhibit figure. Two columns.
4. Optional full-bleed interlude (`placed-at.njk` or `placement-feed.njk`) to break the column.
5. Rail + document column; sections at `mt-14`, each with eyebrow → H2 → content.
6. Close with the dark `bg-ink` CTA band, verbatim.
7. `npm run build` and check: no vermilion outside stamps, no `text-ink/60`, no `rounded-full`,
   nothing below 11px, rail anchors all resolve, images have dimensions.