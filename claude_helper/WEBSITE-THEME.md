# Website Theme — **Dossier** (finalized)

The single source of truth for building out the rest of this site. Everything here is
copy-paste ready against the current stack: **Eleventy 2 + Nunjucks + Tailwind 3**, colours
resolved through CSS variables (`src/assets/css/input.css`) and consumed as normal Tailwind
classes (`bg-brand`, `text-ink/65`, …) via `tailwind.config.js`.

Reference implementation: [src/explore/dossier.njk](src/explore/dossier.njk).

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

## 2. Making Dossier the site default — ✅ done

Dossier is now the only theme on the site. The palette below sits in `:root`, the
component overrides are ungated, the exploration themes and `src/explore/` are deleted,
and the font request is trimmed to the three faces in §4. No page carries `theme:` front
matter any more. The rest of this section records what was changed.

**a. `src/assets/css/input.css` — promote the palette to `:root`**

```css
/* Dossier — the site theme. A case file, not a brochure. Archival slate stock,
   blue-black registrar's ink, aniline violet; vermilion reserved for stamps
   and file numbers only. */
:root {
  --color-ink: 27 31 46;
  --color-paper: 238 239 244;
  --color-brand: 74 63 143;
  --color-brand-dark: 55 46 110;
  --color-accent: 184 48 31;
  --color-accent-deep: 138 34 21;   /* ADD — currently missing; see §3 note */
  --color-surface: 226 228 236;
  --color-border: 199 202 216;
}
```

**b. Drop the `[data-theme="dossier"]` gate** on the component overrides in §5 so they apply
globally (find/replace `[data-theme="dossier"] ` → ``). The exploration themes
(editorial / bold / signal / atrium) can stay gated, or be deleted along with
`src/explore/` and `partials/variant-switcher.njk` when the exploration is retired.

**c. `src/_includes/layouts/base.njk`** — nothing to change. The `{% if theme %}` attribute
stays harmless, and the exploration pages keep working while they exist.

Fonts: Dossier uses **Fraunces** (display), **Public Sans** (body), **IBM Plex Mono** (labels).
Once the other themes go, trim the Google Fonts request in `base.njk` to just those three —
Space Grotesk and Bricolage Grotesque are Signal/Atrium only and are dead weight.

---

## 3. Tokens

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

> `--color-accent-deep` is now defined (`138 34 21`), so `text-accent-deep` is safe to use
> where `accent` gets tight on the `surface` tone.

**Opacity ramp for ink** (contrast measured against `paper`):

| Class | Ratio | Allowed for |
|---|---|---|
| `text-ink` | 14.2 : 1 | Headings, emphasis |
| `text-ink/75` | ~6.5 : 1 | Long-form body, quotes |
| `text-ink/65` | 4.89 : 1 | **Floor for any real text** — secondary copy, mono labels |
| `text-ink/60` and below | 4.17 : 1 ✗ | Decorative only — chevrons, dividers, never words |

`text-brand` on paper is 7.6 : 1, `text-accent` is 5.3 : 1 — both safe for text.
There is one leftover `text-ink/60` on the services row in `dossier.njk:150`; use `/65` in new work.

---

## 4. Type & rhythm

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

**The two reading tiers are component classes, not utilities.** `.body-copy` (16px prose)
and `.meta` (11px mono) exist so the reading scale lives in one place. Use them for anything
a visitor *reads*; `text-sm` is for chrome only — nav links, buttons, form controls.

**11px is the floor.** The old 9px and 10px mono tiers are gone; three near-identical
metadata sizes was drift, not design. Nothing on the site goes below 11px.

The display scale is deliberately untouched — Fraunces at 48px was already carrying the
theme. The increase was applied to the *reading* tiers only, where 14px prose was doing a
job the UI scale shouldn't have.

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

## 5. Component layer (`@layer components` in `input.css`)

### 5a. Already shipped — the overrides

```css
/* Dossier: folders, not cards. Flat, faintly bureaucratic, a tab of colour along the
   top edge standing in for a manila folder tab without borrowing manila's hue. */
.btn-primary  { @apply rounded-sm shadow-none hover:shadow-none hover:translate-y-0 hover:bg-brand-dark; }
.btn-outline  { @apply rounded-sm border-dashed bg-paper backdrop-blur-none hover:translate-y-0 hover:border-solid; }
.glass-panel  { @apply rounded-sm border-border bg-paper shadow-none; }
.card-lift:hover { @apply translate-y-0 shadow-none; }
.eyebrow      { @apply text-ink/65; }
body::before  { opacity: 0.2; }              /* the paper grain, kept faint */
```

### 5b. Already shipped — the three signature units

```css
/* A folder with a coloured tab along the top edge — the recurring "case file" unit. */
.folder-card {
  @apply relative overflow-hidden rounded-sm border border-border bg-paper pt-5
         before:absolute before:inset-x-0 before:top-0 before:h-1.5 before:bg-brand;
}

/* A rotated ink-stamp badge — "VERIFIED", "OPEN", "FILE CLOSED". */
.stamp {
  @apply inline-flex -rotate-2 items-center gap-1.5 rounded-sm border-2 border-accent
         px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-accent;
}

/* Dashed-rule row for exhibit/docket lists — never solidifies into a card. */
.docket-row {
  @apply grid grid-cols-12 items-center gap-3 border-b border-dashed border-border
         py-4 last:border-b-0;
}
```

### 5c. Add these to extend the theme site-wide

Paste inside `@layer components`. These are the units the inner pages need that the
homepage never did — forms, FAQ, breadcrumb, tables, pull quotes, section bands.

```css
  /* ---- Dossier: site-wide extensions ---- */

  /* A folder whose tab is vermilion — reserve for a page's single most important
     card (the "open a file" CTA tile, a featured service). One per page, maximum. */
  .folder-card-accent { @apply before:bg-accent; }

  /* A folder with no tab — for neutral containers (maps, form wells, sidebars). */
  .file-panel { @apply rounded-sm border border-border bg-paper; }

  /* An inset strip: the typed insert clipped inside a file. Use for callouts,
     "what's included", small print blocks. */
  .file-inset {
    @apply rounded-sm border border-dashed border-border bg-surface px-5 py-4;
  }

  /* Metadata chip — sector, duration, location. Never a button, never clickable. */
  .file-tag {
    @apply inline-flex items-center gap-2 rounded-sm border border-border bg-surface
           px-3 py-1.5 font-mono text-xs text-ink/70;
  }

  /* Column heading for docket lists — the printed header above a ledger. */
  .docket-head {
    @apply grid grid-cols-12 items-center gap-3 border-b border-border pb-2
           font-mono text-[10px] uppercase tracking-widest text-ink/65;
  }

  /* Form fields. Squared, dashed until focused — a blank on a form, not a chat input. */
  .field-label {
    @apply block font-mono text-[10px] uppercase tracking-widest text-ink/65;
  }
  .field {
    @apply mt-1.5 w-full rounded-sm border border-dashed border-border bg-paper px-3.5 py-2.5
           text-sm text-ink placeholder:text-ink/40
           focus:border-solid focus:border-brand focus:outline-none
           focus:ring-1 focus:ring-brand;
  }
  .field-error { @apply mt-1.5 font-mono text-[11px] uppercase tracking-widest text-accent; }

  /* FAQ / accordion row — a dashed docket line that opens. */
  .docket-disclosure {
    @apply border-b border-dashed border-border last:border-b-0;
  }
  .docket-disclosure summary,
  .docket-disclosure [data-faq-trigger] {
    @apply flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left
           font-display font-semibold tracking-tight text-ink marker:content-none
           hover:text-brand;
  }

  /* Breadcrumb — a file path, so it is set in mono and separated by a slash. */
  .filepath {
    @apply flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase
           tracking-widest text-ink/65;
  }
  .filepath a { @apply hover:text-brand; }

  /* Pull quote / sworn statement. The vertical brand rule replaces quote marks. */
  .statement {
    @apply border-l-2 border-brand pl-5 font-display text-lg leading-relaxed
           tracking-tight text-ink/75 sm:text-xl;
  }

  /* Data table — ledger, not zebra stripes. */
  .ledger { @apply w-full border-collapse text-sm; }
  .ledger th {
    @apply border-b border-border pb-2 text-left font-mono text-[10px] uppercase
           tracking-widest font-normal text-ink/65;
  }
  .ledger td { @apply border-b border-dashed border-border py-3.5 text-ink/75; }
  .ledger tr:last-child td { @apply border-b-0; }

  /* Full-width band on the slate stock — alternates against the paper sections. */
  .file-band { @apply border-y border-border bg-surface; }

  /* Sticky section rail (the page shell's left column). */
  .rail-link {
    @apply flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm text-ink/65
           transition-colors hover:bg-surface hover:text-ink;
  }
  .rail-link.is-active { @apply bg-surface text-ink; }
```

Nothing above uses blur, glow, or a shadow — that is deliberate. If a new component needs
depth, it is the wrong component for this theme; give it a border instead.

---

## 6. Page shell — copy this for any long inner page

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
          <span class="font-mono text-xs uppercase tracking-widest text-ink/65">
            Case No. 2026–014 · {{ site.address.line2 }}
          </span>
        </div>
        <h1 class="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          Headline in a plain declarative sentence.
        </h1>
        <p class="mt-4 max-w-lg leading-relaxed text-ink/65">Lead paragraph.</p>
        <div class="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href="{{ '/contact/' | url }}" class="btn-primary">{{ icon("arrow-right", "w-4 h-4") }} Primary</a>
          <a href="{{ '/services/' | url }}" class="btn-outline">{{ icon("arrow-right", "w-4 h-4") }} Secondary</a>
        </div>
      </div>

      {# Exhibit — a mounted print with a stamp across the corner. The stamp keeps a
         paper fill: vermilion over an unpredictable photo can't be relied on to stay legible. #}
      <figure class="folder-card p-3 lg:col-span-5">
        <div class="relative">
          <img src="{{ '/assets/images/home/hero-team-meeting.jpg' | url }}" alt="…"
               width="1400" height="933" class="aspect-[4/3] w-full object-cover">
          <span class="stamp absolute bottom-3 left-3 bg-paper">
            {{ icon("check-badge", "w-3.5 h-3.5") }} Verified
          </span>
        </div>
        <figcaption class="px-1.5 pb-1 pt-3 font-mono text-[10px] uppercase tracking-widest text-ink/65">
          Exhibit A · Caption
        </figcaption>
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
          <span class="font-mono text-[10px] text-ink/65">{{ item.n }}</span>{{ item.label }}
        </a>
        {% endfor %}
        <div class="mt-1 border-t border-dashed border-border px-3 pt-4">
          <dl class="grid grid-cols-2 gap-y-4">
            {% for stat in stats.list %}
            <div>
              <dt class="font-mono text-[9px] uppercase tracking-widest text-ink/65">{{ stat.label }}</dt>
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

## 7. Block recipes

**Two-up folder pair** (audience split, plan comparison)

```njk
<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
  <div class="folder-card p-6">
    <div class="flex items-start justify-between">
      <span class="flex h-10 w-10 items-center justify-center rounded-sm bg-brand text-paper">
        {{ icon("users", "w-5 h-5") }}
      </span>
      <span class="font-mono text-[11px] uppercase tracking-widest text-ink/65">File · JS</span>
    </div>
    <h3 class="mt-4 font-display text-lg font-semibold tracking-tight text-ink">Job seeker</h3>
    <p class="mt-2 text-sm leading-relaxed text-ink/65">One sentence.</p>
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
  <p class="col-span-12 text-sm text-ink/65 sm:col-span-6">{{ service.shortDescription }}</p>
  <span class="col-span-12 flex justify-end text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-brand sm:col-span-2">
    {{ icon("arrow-right", "w-4 h-4") }}
  </span>
</a>
{% endfor %}
```

**Numbered procedure** — same `.docket-row`, with `bg-ink font-mono text-paper` numerals in a
`h-8 w-8 rounded-sm` square. Wrap in `<ol>`.

**Sworn statement / testimonial**

```njk
<figure class="folder-card p-5">
  <blockquote class="text-sm leading-relaxed text-ink/75">&ldquo;{{ t.quote }}&rdquo;</blockquote>
  <figcaption class="mt-4 flex items-center justify-between gap-3 border-t border-dashed border-border pt-4">
    <span>
      <span class="block text-sm font-semibold text-ink">{{ t.name }}</span>
      <span class="block text-xs text-ink/65">{{ t.role }} · {{ t.company }}</span>
    </span>
    <span class="font-mono text-[10px] uppercase tracking-widest text-ink/65">Sworn</span>
  </figcaption>
</figure>
```

**Fact strip** — `<dl class="grid grid-cols-3 gap-4 border-t border-dashed border-border pt-5">`
with mono `<dt>` at `text-[9px] uppercase tracking-widest text-ink/65` and
`font-display text-base font-semibold` `<dd>`.

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

## 8. Data & icons

Global data (no import needed in templates): `site`, `nav`, `services.list`, `industries.list`,
`programs.list`, `testimonials.list`, `companies.list`, `placements.list`, `stats.list`,
`faqs["<service-slug>"]`.

Shared partials that already carry the theme: `placed-at.njk` (pass `placedAtTitle` /
`placedAtLead`, keep the default grid layout — the marquee is Atrium's), `placement-feed.njk`
(keep default `rows`), `faq-accordion.njk`, `breadcrumb.njk`, `cta-section.njk`,
`process-timeline.njk`, `stat-counter.njk`.

Icons — `{% from "partials/icons.njk" import icon %}` then `{{ icon("name", "w-4 h-4") }}`:
`arrow-right`, `bolt`, `briefcase`, `chart`, `check`, `check-badge`, `chevron-down`, `clock`,
`close`, `cloud`, `code`, `heart`, `mail`, `map-pin`, `menu`, `phone`, `shield`, `star`,
`support`, `target`, `users`.

Images live in `src/assets/images/home/` — always set `width`/`height`, `loading="lazy"`
(except the cover-sheet exhibit, which gets `fetchpriority="high"`), and mount them in a
`.folder-card` with an `Exhibit N ·` caption. Stock photography credits:
`src/assets/images/home/CREDITS.md`.

---

## 9. Non-negotiables

- **Vermilion discipline.** `accent` appears on stamps and file numbers. Not on buttons, not on
  links, not on hover states. Break this and the theme collapses into a generic red-accent site.
- **`text-ink/65` is the floor** for anything a person reads. See §3.
- **No blur, no glow, no drop shadow.** `shadow-*` and `backdrop-blur-*` do not belong in new markup.
- **`rounded-sm` everywhere**, `rounded-full` never.
- **Every section is anchorable**: `id` + `scroll-mt-28`, and listed in that page's `rail`.
- **Reduced motion is already handled globally** in `@layer base`; if you add a keyframe
  animation, verify it neutralises there.
- **`:focus-visible` is a 2px accent outline** — never remove it, and never set `outline: none`
  without an equivalent replacement.
- Decorative-only elements get `aria-hidden="true"`; the paper grain is `pointer-events: none`.

---

## 10. New page checklist

1. Front matter: `layout: layouts/page.njk`, `title`, `description`. (No `theme:` once §2 lands.)
2. Define the `rail` array first — it forces you to decide the document's structure.
3. Cover sheet: stamp + case line, H1, lead, two buttons, exhibit figure. Two columns.
4. Optional full-bleed interlude (`placed-at.njk` or `placement-feed.njk`) to break the column.
5. Rail + document column; sections at `mt-14`, each with eyebrow → H2 → content.
6. Close with the dark `bg-ink` CTA band, verbatim.
7. `npm run build` and check: no vermilion outside stamps, no `text-ink/60`, no rounded-full,
   rail anchors all resolve, images have dimensions.
