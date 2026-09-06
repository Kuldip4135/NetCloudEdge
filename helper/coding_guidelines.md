# Yash Thakor Website — Coding Guidelines

## Tech Stack

- **11ty (Eleventy)** — static site generator. Builds plain `.html` files at build time; zero client-side framework, zero runtime fetch for layout.
- **Tailwind CSS (CLI)** — utility-first styling, purged for production. No custom CSS framework, no component library.
- **Vanilla JS** — small, page-scoped scripts only (mobile nav toggle, form validation, active-link highlighting). No SPA router, no bundler-required framework.
- Output (`dist/`) is 100% static HTML/CSS/JS — deployable to Netlify / Vercel / Cloudflare Pages / GitHub Pages with no server.

## Project Structure

```
Yash Thakor Website/
├── src/
│   ├── _data/                 # Global JSON/JS data — site.json, nav.json, jobs.json, testimonials.json
│   ├── _includes/
│   │   ├── layouts/           # base.njk (root HTML shell), page.njk (extends base)
│   │   └── partials/          # header.njk, footer.njk, nav.njk, cta-section.njk, job-card.njk
│   ├── assets/
│   │   ├── css/               # input.css (Tailwind directives + @layer components)
│   │   ├── js/                # main.js + one file per behavior: nav-toggle.js, form-validate.js
│   │   └── images/            # source images, grouped by page: home/, about/, jobs/, icons/
│   ├── index.njk               # Home
│   ├── about.njk                # About
│   ├── services.njk              # Services (what recruiting help is offered)
│   ├── jobs.njk                   # Jobs / opportunities listing
│   └── contact.njk                # Contact
├── dist/                       # 11ty build output — plain static HTML/CSS/JS, this is what gets deployed
├── .eleventy.js                 # 11ty config (input/output dirs, passthrough copy, filters)
├── tailwind.config.js
├── package.json
└── claude_helper/
    └── coding_guidelines.md
```

Run `npx eleventy --serve` for local dev (live reload), `npx eleventy` for a production build into `dist/`. Tailwind runs as a separate watch/build process (`npx tailwindcss -i ./src/assets/css/input.css -o ./dist/assets/css/style.css --watch`), or wired together via one `npm run dev` script.

## Naming Conventions

- **Folders & files:** `kebab-case` everywhere — `job-card.njk`, `nav-toggle.js`, `hero-section.njk`.
- **Pages:** one `.njk` file per route at `src/` root, filename = route (`about.njk` → `/about/`).
- **Partials:** noun describing the fragment, no page prefix — `header.njk`, `footer.njk`, `job-card.njk`.
- **Data files:** `kebab-case.json`, keys inside in `camelCase` — `{ "companyName": "...", "navLinks": [...] }`.
- **JS files:** one behavior per file, named after what it does, not where it's used — `mobile-nav.js`, `contact-form.js`.
- **CSS:** no custom class files per page; shared repeated patterns go in `input.css` under `@layer components` with kebab-case names (`.btn-primary`, `.section-heading`).

## Components & Layouts (11ty)

- Shared UI (header, footer, nav, CTA banner, job card) lives once under `src/_includes/partials/` and is pulled into pages via `{% include "partials/header.njk" %}` — **never** copy-pasted across pages, and never injected at runtime via JS `fetch`/`innerHTML`.
- All pages extend `layouts/base.njk` (HTML shell: `<head>`, meta tags, header/footer wiring) via front-matter `layout: layouts/page.njk`.
- Any partial that repeats with different content (job card, testimonial, service tile) takes its data as a Nunjucks parameter or loops over a `_data/*.json` array — never hardcode repeated markup per instance.

```njk
{# src/_includes/partials/job-card.njk #}
<div class="rounded-lg border p-6">
  <h3 class="text-lg font-semibold">{{ job.title }}</h3>
  <p class="text-sm text-gray-600">{{ job.location }}</p>
</div>

{# usage in jobs.njk #}
{% for job in jobs %}
  {% include "partials/job-card.njk" %}
{% endfor %}
```

## Data — `_data/`

- `site.json` — company name, tagline, phone, email, address, social links. Referenced everywhere as `{{ site.companyName }}`.
- `nav.json` — nav link list `[{ "label": "...", "url": "..." }]`, looped in `partials/nav.njk` so adding a page never means editing 5 files.
- `jobs.json` (or similar) — any repeated content collection (job listings, testimonials, services) lives here, not inline in a page template.
- Rule: **if the same fact appears on more than one page, it belongs in `_data/`, not typed twice.**

## Styling — Tailwind

- Utility classes directly in markup; no separate hand-written CSS per component.
- Only promote a utility combo to `@layer components` in `input.css` when it repeats 3+ times identically (e.g. `.btn-primary`, `.section-container`).
- Responsive-first: build mobile layout with base classes, add `sm: md: lg:` breakpoints for larger screens — never the reverse.
- Use the Tailwind config's `theme.extend` for brand colors/fonts (e.g. `brand-primary`) instead of arbitrary hex values in markup.
- Purge/content paths in `tailwind.config.js` must include every `.njk`/`.html`/`.js` file under `src/`, or production CSS will drop used classes.

## JavaScript

- Vanilla JS only, no framework, no bundler dependency required to ship.
- One file per behavior, loaded only on pages that need it (don't load `contact-form.js` on pages without a form).
- Hook into markup via `data-*` attributes (`data-nav-toggle`), not class names — keeps styling and behavior concerns separate.
- No layout-critical logic in JS (header/footer must render from the static HTML build, not be injected after page load) — this keeps first paint fast and avoids flash-of-missing-content.

## Images & Assets

- Source images live under `src/assets/images/<page-or-feature>/`, copied to `dist/` via 11ty passthrough copy.
- Filenames `kebab-case`, descriptive — `hero-students-office.jpg`, `icon-briefcase.svg`.
- Always set explicit `width`/`height` (or `aspect-ratio` utility) on `<img>` to avoid layout shift; use `loading="lazy"` on below-the-fold images.
- Prefer `.svg` for icons/logos, compressed `.webp`/`.jpg` for photos.

## Do & Don't

**Do**

- Put any shared fact or repeated content in `_data/*.json`, referenced by pages/partials.
- Build header/footer/nav once as `_includes/partials/`, included at build time.
- Write mobile-first Tailwind, promote a class combo to `@layer components` only once it repeats.
- Keep JS page-scoped and behavior-named; hook via `data-*` attributes.
- Set image dimensions and `loading="lazy"` on non-critical images.

**Don't**

- Copy-paste header/footer/nav markup across page files.
- Fetch/inject header or footer via client-side JS after page load — bake it in at build time instead.
- Hardcode nav links, company info, or job/service listings inline in a page when they repeat elsewhere.
- Add a CSS framework/component library beyond Tailwind, or a JS framework beyond vanilla JS, without discussing first.
- Use arbitrary hex colors or system fonts in markup — use the Tailwind theme tokens.
