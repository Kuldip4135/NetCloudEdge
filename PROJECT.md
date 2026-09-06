# Yash Thakor Website

## About

Marketing website for a recruiting & staffing company. It's a fully static,
content-driven site covering the company's core offerings — recruitment &
staffing, talent acquisition, job placement, and IT training — plus supporting
pages (about, contact, services overview, and legal pages).

All page content (services, industries, stats, testimonials, placements, FAQs,
navigation, etc.) is stored as JSON data and rendered through reusable
templates and partials, so copy can be updated without touching markup.

## Technology

| Area | Tool |
|------|------|
| Static site generator | [Eleventy (11ty)](https://www.11ty.dev/) `^2.0.1` |
| Templating | Nunjucks (`.njk`) — set as both HTML and Markdown template engine |
| Styling | Tailwind CSS `^3.4.13` (compiled from `src/assets/css/input.css`) |
| Build orchestration | `npm-run-all` (parallel dev watchers) |
| Interactivity | Vanilla JavaScript (no framework) — small per-feature scripts in `src/assets/js/` |
| Hosting | Static output in `dist/` — deployable to any static host |

### Why this stack

- **11ty + Nunjucks** — zero client-side JS by default, fast builds, and
  simple layout/partial composition.
- **Data-driven** — `src/_data/*.json` holds all structured content; templates
  loop over it. Editing content = editing JSON.
- **Tailwind** — utility-first styling with a single compiled stylesheet.
- **Vanilla JS** — progressive enhancement only (nav toggle, count-up
  animations, FAQ accordion, text rotator, tabs, etc.).

## Project structure

```
src/
  _data/            JSON content (services, stats, faqs, testimonials, nav, ...)
  _includes/
    layouts/        Base page layouts
    partials/       Reusable UI blocks (header, footer, hero, rails, routes, ...)
  assets/
    css/input.css   Tailwind entry file
    js/             Per-feature vanilla JS
    images/ fonts/  Passthrough-copied static assets
  services/         Service detail pages (.njk)
  *.njk             Top-level pages (index, about, contact, services, legal)
.eleventy.js        11ty config (input src/, output dist/, njk engine)
tailwind.config.js  Tailwind config
```

## Commands

```bash
npm run dev     # parallel watch: Tailwind + Eleventy dev server
npm run build   # build CSS then build the site into dist/
```
