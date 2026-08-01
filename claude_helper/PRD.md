Competitor Website - https://netbounceplacement.com/

# PRD — Page & Section Breakdown

Target audience: students entering the job market + working professionals looking to switch/land jobs. Company helps both sides — candidates get placed, employers get vetted talent.

Reference used for inspiration: Netbounce Placement (competitor, full-service US recruiting firm with visa/OPT-specific messaging — we borrow structure, not their visa-specific content since our audience is broader).

## Sitemap (9 pages)

1. Home
2. About Us
3. Services (overview — **added, see note below**)
4. Services → Job Placement
5. Services → Recruitment & Staffing
6. Services → Talent Acquisition
7. Services → Background Verification
8. Services → IT Training
9. Contact

> **Suggestion:** you listed Services as a nav item with 5 sub-pages but no landing page of its own. I added a **Services overview page** (#3) that briefly shows all 5 as cards linking to their detail pages — without it, "Services" in the nav has nowhere to land, and visitors comparing options need one page to see all five before drilling in. This is standard on every competitor reviewed.

---

## Visual Design Direction

**Constraint:** light theme only — no dark mode toggle, no `dark:` Tailwind variants, no `prefers-color-scheme` handling. `tailwind.config.js` does not need a `darkMode` strategy at all; skip it.

**Subject:** a recruiting/staffing company bridging two audiences — students starting out and professionals moving on — plus the employers who hire both. The design should feel warmer and more human than the generic navy-and-white corporate-recruiting template every competitor defaults to, without losing professional credibility.

**Color** (light theme, named tokens → add to `tailwind.config.js theme.extend.colors`):
| Token | Hex | Use |
|---|---|---|
| `ink` | `#1A2B2E` | body text, headings (warm near-black, not pure `#000`) |
| `paper` | `#FAF8F4` | page background (warm off-white, not stark `#FFFFFF`) |
| `brand` | `#1F6F5C` | primary — deep teal-green, growth/trust, buttons/links |
| `accent` | `#E8843A` | sparing use — CTA highlight, the signature path line, active states |
| `surface` | `#F1EEE6` | cards, alternating section backgrounds |
| `border` | `#D8D2C4` | dividers, input borders |

**Typography** (add via `@font-face`/Google Fonts link + `tailwind.config.js theme.extend.fontFamily`):
- **Display** (headings): a warm serif/slab (e.g. Fraunces or similar) — used with restraint, large sizes only, gives the page personality a generic sans-only recruiting site lacks.
- **Body**: a clean humanist sans (e.g. Inter or Public Sans) for all paragraph/UI text — high legibility at small sizes.
- **Utility/numeric**: a mono or semi-mono face (e.g. IBM Plex Mono) reserved for the stat counters and process-step numbers — reinforces that placement results are data, not marketing copy.

**Layout concept:** generous whitespace on the warm `paper` background, alternating zig-zag split sections (already specified per service page), cards on `surface` rather than heavy borders/shadows.

**Signature element — "The Path":** a single continuous curved SVG line that appears in the Home hero background, reappears threading through the "How It Works" step icons, and again connecting the stat counters — a literal visual path from "candidate" to "placement" that ties the whole site together, rather than a decorative flourish repeated for its own sake. Implemented as one inline SVG per section (no charting/animation library); on scroll into view, a small vanilla JS `IntersectionObserver` toggles a class that animates `stroke-dashoffset` via CSS transition — draws itself in, costs no dependency beyond the ~15-line JS file already planned for scroll behavior. Respect `prefers-reduced-motion`: skip the draw animation and show the line fully drawn when set.

**Numbered step markers** (Process/How-It-Works sections) are justified here — these are real ordered sequences (Apply → Match → Interview → Placement), not decoration, so `01 / 02 / 03` styling is appropriate and consistent with the design-skill guidance to only number true sequences.

---

## 1. Home

**Goal:** convert a first-time visitor (student or professional) into a lead within 10 seconds of scroll, while also signaling credibility to employers.

1. **Hero** — `paper` background (not a photo overlay — keeps the warm, human tone instead of the dark-gradient-over-stock-photo default); **"The Path" SVG opens here**, curving behind the headline in a light `accent`-on-`paper` stroke. Display-face headline in `ink`, left-aligned, subheadline in body face below, two CTAs side by side: "Find a Job" (`brand` solid) and "Hire Talent" (`brand` outline). Avoid rotating/carousel text — hurts perceived load speed and SEO; one static headline converts better. **Responsive:** image/illustration stacks below text on mobile (`flex-col`), side-by-side from `lg:`.
2. **Dual-Path Split** — Two `surface` cards side by side: "For Job Seekers" and "For Employers" (icon + 2-line pitch + CTA each). **Responsive:** stacked full-width on mobile, `md:grid-cols-2` from tablet up.
3. **Services Grid** — 5 cards on `surface`, icon + display-face title + one-line body-face description, "Learn more →" in `brand`. **Responsive:** 1 column mobile, 2 `sm:`/`md:`, 3 `lg:`.
4. **Why Choose Us / Differentiators** — 4–5 icon+text tiles (Personalized Matching, Verified Employers, Fast Turnaround, End-to-End Support), icon-top/text-below. **Responsive:** 1 column mobile → 2 `sm:` → 4/5-across `lg:`.
5. **Success Metrics / Stats Bar** — Full-width `brand`-color band, `paper`-colored counters in the mono/utility face; **"The Path" reappears here**, threading between the 4 counters as a subtle connecting line. Counters: Candidates Placed, Partner Companies, Years of Experience, Placement Success %. Animated count-up on scroll-into-view via the same `IntersectionObserver` script. **Responsive:** 2×2 grid on mobile, single row `md:`+.
6. **Testimonials** — Cards on `surface`, horizontally swipeable via native CSS scroll-snap (no JS carousel library) on mobile, auto-fit row on `lg:`. Real photos > stock; fallback to an `ink`-on-`surface` initials avatar if none available.
7. **How It Works (Process Timeline)** — 4 numbered steps (Apply → Match → Interview → Placement) — numbering is justified here, it's a real sequence. **"The Path" connects each step icon** as the horizontal line on desktop. **Responsive:** vertical stacked steps with the path rendered as a vertical connector on mobile, horizontal from `lg:`.
8. **Final CTA Band** — `brand` solid background, `paper` text, single centered CTA button — one action only, no competing links. **Responsive:** full-width padding scales down on mobile, headline size steps down one type-scale notch below `md:`.
9. **Footer** (shared across all pages) — see [Shared Components](#shared-components-all-pages).

---

## 2. About Us

**Goal:** build trust — who we are, why we started, why we're credible.

1. **Page Header/Hero** — Smaller than Home's, `surface` background, display-face page title "About Us" + one-line tagline, breadcrumb (Home / About) in body face. **Responsive:** title scales down one step below `md:`, breadcrumb wraps if needed.
2. **Our Story** — Zig-zag split: image left, text right on `lg:`; company origin/mission in body face, key phrase set in display face as a pull-quote. **Responsive:** image stacks above text on mobile (`flex-col lg:flex-row`).
3. **Mission & Values** — 3–4 tiles on `surface` (Integrity, Candidate-First, Speed, Long-Term Partnerships), icon + short text. **Responsive:** 1 column mobile → 2 `sm:` → 4 `lg:`.
4. **Stats Strip** — Reuses the exact Home stat-counter component (same `_data/stats.json`, same mono face, same `brand` band) — do not re-author. Keeps numbers consistent site-wide.
5. **Meet the Team** (optional, only if team photos exist) — Grid of member cards on `surface`: photo, name, role, 1-line bio. Skip entirely if no real photos — placeholder/stock headshots undermine the trust this page exists to build. **Responsive:** 1 column mobile → 2 `sm:` → 3–4 `lg:`.
6. **Why Students & Professionals Trust Us** — Reuses the Home "Dual-Path" two-card visual pattern, rewritten as trust statements instead of CTAs, same `surface` card treatment.
7. **CTA Band** — Same shared component as Home, `brand` variant, different copy ("Want to know more? Let's talk").

---

## 3. Services (Overview)

**Goal:** let a visitor compare all 5 offerings and pick the one relevant to them, or contact for a bundled need.

1. **Page Header** — Same `surface` pattern as About: display-face title "Our Services" + intro sentence summarizing the 5 offerings as one connected pipeline (source → vet → place → verify → upskill); this is the one spot **"The Path" could run horizontally behind the 5-word pipeline phrase** as a preview of the sequence to come.
2. **Services Detail Grid** — Each of the 5 in its own zig-zag row (**image-left/text-right** alternating with **text-left/image-right**) on `lg:`, 2–3 line body-face description + "Explore [Service] →" in `brand`. **Responsive:** every row stacks image-above-text on mobile regardless of desktop order (`flex-col lg:flex-row` / `lg:flex-row-reverse`).
3. **Comparison / Who Is This For** — Icon-list contrasting Students vs. Professionals vs. Employers per service, on `surface`. **Responsive:** collapses to stacked label/value pairs below `md:` rather than shrinking a table.
4. **CTA Band** — `brand` variant, "Not sure which service fits? Book a free consultation."

---

## 4. Service Page — Job Placement

**Goal:** convert a job seeker who wants an actual job placed for them.

1. **Hero** — `paper` background, left text (display-face headline: "Get Placed, Not Just Applied") + right image, breadcrumb Home / Services / Job Placement in body face. **Responsive:** image stacks below text on mobile, side-by-side `lg:`.
2. **What's Included** — 4–6 tiles on `surface`: resume/profile optimization, interview coaching, employer matching, offer negotiation support, post-placement check-in. **Responsive:** 1 column mobile → 2 `sm:` → 3 `lg:`.
3. **Process Steps** — 5-step timeline (numbered, real sequence), **"The Path" connects the steps** same as Home: Consultation → Profile Build → Matching → Interviews → Offer. **Responsive:** vertical stack mobile, horizontal `lg:`.
4. **Success Story / Case Study** (optional) — reuses the Home testimonial card style, expanded to Situation / Approach / Result on `surface`.
5. **FAQ Accordion** — 4–6 questions (cost, timeline, industries covered, guarantee/refund policy).
6. **CTA Band** — `brand` variant, "Start your job search today."

---

## 5. Service Page — Recruitment & Staffing

**Goal:** convert an employer looking to hire (temp, contract, or full-time staffing).

1. **Hero** — `paper` background, mirrored layout from Job Placement (image-left/text-right) for visual variety across the 5 service pages while keeping the same component; display-face headline aimed at employers ("Hire Faster, Hire Right"). **Responsive:** stacks on mobile, side-by-side `lg:`.
2. **What's Included** — Tiles on `surface`: candidate sourcing, screening & vetting, staffing models (contract/temp/permanent), industry specializations. **Responsive:** 1 → 2 `sm:` → 3 `lg:` columns.
3. **Process Steps** — Numbered timeline with **"The Path"** connector: Requirement Analysis → Sourcing → Screening → Client Interviews → Onboarding. **Responsive:** vertical mobile, horizontal `lg:`.
4. **Why Employers Choose Us** — Stat-backed trust block reusing the mono-face stat counter (placement success %, average time-to-fill, industries served) on a `brand` band.
5. **FAQ Accordion** — Pricing model, minimum engagement, industries supported, SLA/turnaround.
6. **CTA Band** — `brand` variant, "Tell us your hiring need" → links to Contact with a pre-selected "I'm an Employer" option.

---

## 6. Service Page — Talent Acquisition

**Goal:** distinguish from "Recruitment & Staffing" — this is strategic, higher-touch, usually for specialized/leadership roles.

1. **Hero** — `surface` background instead of `paper` (deliberate one-shade shift so this page visually reads as more premium/higher-touch than the two above — no new colors, just swapping the two neutrals we already have), headline emphasizing precision/quality over volume. **Responsive:** stacks on mobile, side-by-side `lg:`.
2. **How This Differs from Staffing** — 2–3 bullet contrast block on `paper` so visitors understand why two similar-sounding services exist — avoids confusion, a real risk when 2 of your 5 services sound alike.
3. **What's Included** — Tiles: executive/specialized search, talent pipelining, market mapping, long-term partnership model. **Responsive:** 1 → 2 `sm:` → 3 `lg:`.
4. **Process Steps** — Same shared timeline component + **"The Path"** connector, talent-acquisition-specific step labels. **Responsive:** vertical mobile, horizontal `lg:`.
5. **FAQ Accordion** — shared component, page-specific content from `_data/faqs.json`.
6. **CTA Band** — `brand` variant.

---

## 7. Service Page — Background Verification

**Goal:** reassure employers (and candidates) this is thorough, compliant, and fast.

1. **Hero** — `paper` background, left text / right image (shield/checkmark iconography over a photo, in `brand`, not `accent` — trust visuals should read as steady, not urgent). **Responsive:** stacks on mobile, side-by-side `lg:`.
2. **What We Verify** — Icon grid on `surface`: employment history, education, criminal record check, reference checks, identity verification. **Responsive:** 1 → 2 `sm:` → 3 `lg:`.
3. **Compliance Note** — Plain `paper` text block, no badge iconography — legally sensitive section, stay factually conservative rather than displaying unverifiable certification claims (e.g. the competitor's "ISO/GDPR certified" badges) unless genuinely certified.
4. **Process Steps** — Numbered timeline + **"The Path"** connector: Request → Consent Collection → Verification → Report Delivery. **Responsive:** vertical mobile, horizontal `lg:`.
5. **FAQ Accordion** — Turnaround time, what's covered, data privacy handling.
6. **CTA Band** — `brand` variant.

---

## 8. Service Page — IT Training

**Goal:** distinct audience — mainly students/early-career professionals wanting to upskill before placement. This page should feel more "course/program" than "service."

1. **Hero** — `paper` background, left text / right image (learners in a training/classroom or online-learning visual), headline pitching the skill-to-job pipeline ("Train. Certify. Get Placed." — the one hero on this page allowed a slightly more energetic `accent`-colored CTA, since this audience is earlier-funnel/more exploratory than a direct job seeker). **Responsive:** stacks on mobile, side-by-side `lg:`.
2. **Programs/Tracks Offered** — Card grid on `surface` (placeholder: Web Development, QA/Testing, Cloud/DevOps, Data basics) — icon + display-face title + duration in mono/utility face. **Responsive:** 1 → 2 `sm:` → 3 `lg:`.
3. **Why Train With Us** — Ties back to Job Placement: "Graduates get direct access to our placement pipeline" — the strongest differentiator versus a generic training vendor, set in display face as a pull-quote, `accent` underline on the key phrase.
4. **Process/Curriculum Timeline** — Numbered timeline + **"The Path"** connector: Enroll → Learn → Practice/Project → Certification → Placement Support — the clearest literal use of the site's "path" motif since it ends at the same Job Placement pipeline. **Responsive:** vertical mobile, horizontal `lg:`.
5. **FAQ Accordion** — Duration, format (online/in-person), cost, prerequisites, placement guarantee (if any).
6. **CTA Band** — `accent`-highlighted CTA button on a `brand` band, "Enroll Now" / "Book a Free Demo Class."

---

## 9. Contact

**Goal:** low-friction conversion for both audiences, routed correctly.

1. **Page Header** — `surface` background, display-face title "Contact Us" + short body-face line ("Whether you're looking for a job or looking to hire, we're here to help").
2. **Contact Form + Info Split** — Left: form on `paper` with a **"I am a…" toggle/radio** (Job Seeker / Employer / Training Applicant) that swaps in a couple of fields per choice (Employer → "Company Name," Job Seeker → "Resume upload"); selected toggle state uses `brand`, focus rings use `accent` for visible keyboard focus. Right: `surface` info card — address, phone, email, business hours, map embed. **Responsive:** stacks form-above-info on mobile, side-by-side `lg:`.
3. **Map Embed** — Static embed of office location if a physical office exists; skip entirely if fully remote. **Responsive:** full-width, fixed aspect-ratio box to avoid layout shift.
4. **Social/Alternate Contact** — Social icons in `ink`, hover to `brand` + direct email/phone repeated for visitors skipping the form.
5. **FAQ Mini-Section** (optional) — 2–3 quick "before you contact us" answers using the shared FAQ Accordion component.

No final CTA band needed here — the form on this page *is* the CTA.

---

## Shared Components (all pages)

- **Header/Nav** — Logo left, nav links center/right (Home, About, Services ▾, Contact), CTA button far right ("Get Started" or tel: link for click-to-call on mobile). Sticky on scroll, `paper`-colored background with a hairline `border` bottom on scroll (not shadow-heavy).
  - **Services dropdown** — desktop (`lg:`, ≥1024px): opens on hover *and* keyboard focus (`:focus-within`, never hover-only — hover-only dropdowns are unusable on touch devices) as a panel listing all 5 service pages, icon + label each, 2-column mini-grid. Tablet (`md:`, 640–1023px): same trigger, collapses to a single-column list to fit the narrower width. Mobile (<640px): "Services" becomes an accordion row inside the slide-in hamburger menu — tap to expand/collapse, revealing the 5 sub-links indented beneath it; implemented with the same `data-dropdown-toggle` vanilla JS hook used for the mobile hamburger itself (one small script, no separate library).
  - **Hamburger menu** (mobile, <640px): full-width slide-in/down panel, close on outside-click and `Esc`, body scroll locked while open.
- **Footer** — 4-column layout on desktop (`lg:grid-cols-4`), stacking to a single column on mobile (`grid-cols-1`): (1) logo + 1-line pitch + social icons, (2) Services links (all 5), (3) Company links (Home, About, Contact), (4) Contact info (address, phone, email) + newsletter signup (optional, only if there's a real use for a mailing list — otherwise skip to avoid a dead form).
- **CTA Band** — Reusable component (background + headline + button), restyled per page via a `variant` param (`brand` solid / `image` background) — light theme only, no dark variant needed.
- **Stat Counter** — Reusable animated counter, fed from `_data/stats.json` so numbers update in one place and stay consistent across Home/About. Set numeric text in the utility/mono face.
- **FAQ Accordion** — Reusable component, content sourced per-page from `_data/faqs.json` keyed by page slug.

### Responsive behavior — applies to every page and section above

Mobile-first Tailwind breakpoints throughout (`base` = mobile, then `sm:` 640px, `md:` 768px, `lg:` 1024px, `xl:` 1280px):
- **Hero** sections: stacked (image below/behind text) on mobile, side-by-side (`lg:flex-row`) on desktop.
- **Grids** (services, programs, team, differentiators): 1 column mobile → 2 columns `sm:`/`md:` → 3 columns `lg:`.
- **Zig-zag split sections** (Services detail, About Story): always stack image-above-text on mobile regardless of desktop left/right order (`flex-col lg:flex-row` / `lg:flex-row-reverse`).
- **Process timelines**: vertical stacked steps on mobile, horizontal connected line on `lg:`.
- **Tables/comparisons**: collapse to stacked label/value pairs or a horizontally scrollable container below `md:` rather than shrinking a wide table unreadably.
- **Testimonial/logo carousels**: swipeable (native scroll-snap, no JS carousel library) on mobile; auto-fit row on desktop.
- Every interactive component (dropdown, accordion, carousel) must be usable via touch, mouse, and keyboard — this is a hard requirement, not a nice-to-have, given the mobile-heavy job-seeker audience.

## Open Questions Before Build

- Do you have real team/candidate photos, or should placeholders be used until available? (Affects About "Meet the Team" and Home testimonials.)
- Do you want a blog/insights section? Competitor uses one heavily for SEO (visa/interview content) — worth considering as a phase-2 addition, not in this initial 9-page scope.
- Any real certifications/registrations to display (business registration, industry association membership)? Avoid unverifiable badges (ISO/GDPR-style claims) unless genuinely certified.
- Does IT Training have concrete course tracks yet, or are these placeholder categories for now?
