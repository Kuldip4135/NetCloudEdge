# PRD — pages, sections, and shared components

Source of truth for **what pages exist and what sections each one has, in what order**, for
Net Cloud Edge (`src/_data/site.json`), a recruiting and staffing site serving two audiences —
students entering the job market and working professionals switching or moving up — plus the
employers who hire both.

## Competitor research

Reviewed for structure and positioning, not copied for content or claims:

- **[Netbounce Placement](https://netbounceplacement.com/)** — a full-service US recruiting firm
  with visa/OPT-specific messaging. Runs **proof-by-volume**: an employer logo wall, a live
  placement feed with salaries, 25+ testimonials, a year-by-year growth table, a before/after
  comparison block, and a certification badge wall (one badge on it does not correspond to a real
  certification). **What we borrow:** the growth-table pattern (dated and concrete beats a round
  headline number) and a qualitative before/after block. **What we reject:** salary figures tied
  to placements, unverifiable badges, and their visa-led framing — that's their niche, and it
  narrows us into a segment we don't serve better than they do.
- **[Insight Global](https://insightglobal.com/)** — the opposite strategy: no counters, no feed,
  leads with culture, breadth of industry coverage, and access to a named person rather than a
  form. Their real asset is a long, specific industry list (20+ named industries), which reads as
  coverage and doubles as an SEO surface. **What we borrow:** the industries list
  (`_data/industries.json`, surfaced on the employer-facing pages) and a single human-facing CTA
  in place of a wall of competing buttons.
- **[Robert Half](https://www.roberthalf.com/us/en)** — the largest player at true dual-audience
  scale: a job-search tool and a "hire talent" path live on the same homepage, backed by a
  standing insights/research hub (salary guides, hiring advice, career advice) that both audiences
  return to outside of an active job search or open role. **What we borrow:** confirmation that the
  dual-path homepage split is the right opening move at any company size. **What we deliberately
  don't build:** the insights hub — it's a genuine content-marketing commitment (research,
  publishing cadence, SEO investment) that only pays off maintained, and a thin version reads worse
  than none. Tracked under [Deferred to phase 2](#deferred-to-phase-2-deliberately).
- **TEKsystems / Randstad / ManpowerGroup** — the large generalist and specialist firms split the
  market on one axis: **breadth vs. specialization**. TEKsystems and Insight Global win on IT
  depth; Randstad and Adecco win on breadth across admin, operational, and light-industrial roles.
  Neither framing is stated loudly on their homepages — it shows up in how each site organizes its
  service and industry pages. **What we borrow:** the same tension exists inside our own four
  services, between Recruitment & Staffing (breadth, speed, volume roles) and Talent Acquisition
  (depth, seniority, executive search). It's why Talent Acquisition's most important section is a
  direct comparison table against Staffing, placed high on the page — without it, a visitor can't
  tell the two services apart, which is exactly the failure mode this class of company falls into
  when its service lines aren't clearly delineated.

**Net position:** Netbounce out-proofs us, Insight Global out-credentials us, Robert Half
out-publishes us. None of the three say plainly, on their own homepage, which of their services is
for whom — **we do, and it stays the differentiator.** The "Which service fits you?" matrix on the
Services overview page is the thing none of them build cleanly, and it stays high on the page.

## Sitemap (8 pages)

1. Home
2. About Us
3. Services (overview — four cards linking to the detail pages; without it "Services" in the nav
   has nowhere to land, and visitors comparing options need one page that shows all four)
4. Services → Job Placement
5. Services → Recruitment & Staffing
6. Services → Talent Acquisition
7. Services → IT Training
8. Contact

Plus Privacy Policy and Terms, required before the resume upload goes live.

**Numbered step markers** are used only where the content really is a sequence — Apply → Match →
Interview → Placement. We don't number things that aren't sequences.

---

## 1. Home

*Goal: convert a first-time visitor into a lead within 10 seconds of scroll, while signalling
credibility to employers.*

1. **Hero** — one static headline (no carousel), subhead, two CTAs: "Find a Job" (solid) /
   "Hire Talent" (outline), plus the fee-model trust line. Image stacks below text on mobile.
   Robert Half runs this exact dual-CTA pattern at the largest scale in the industry — it's the
   validated opening move, not a guess.
2. **Dual-Path Split** — two cards, "For Job Seekers" / "For Employers", each with an icon, a
   two-line pitch, and its own CTA. Two doors is the point; a third dilutes the choice.
3. **Services Grid** — four cards: icon, title, one-liner, audience tag, "Learn more". 1 / 2 / 3
   columns across mobile / tablet / desktop.
4. **Why Choose Us** — four tiles, each naming a concrete mechanism rather than an adjective.
5. **Success Metrics** — four counters in the numeric face, counting up on scroll. 2×2 on mobile,
   one row on desktop.
6. **Employer network + placement feed** — full-bleed interludes; both gated on permission and
   real consented placements. Netbounce's live feed is the strongest single element of their
   proof-by-volume strategy — we run a smaller, honest version of it, never backfilled with
   invented placements.
7. **Testimonials** — swipe horizontally on mobile, row on desktop. Initials avatar where there's
   no real photo.
8. **How It Works** — four numbered steps, each with the time cost to the visitor.
9. **Case Study** — one placement, Situation / Approach / Result.
10. **Final CTA Band** — one centred button, one action, no competing links.

## 2. About Us

*Goal: build trust. This is the page that gets read when someone is deciding whether we're real.*

1. **Page Header** — smaller than Home's, on the surface tone: title, one-line tagline, breadcrumb.
2. **Our Story** — zig-zag split, image one side, origin and mission the other, one phrase set
   large as a pull-quote.
3. **Mission & Values** — four tiles, each a behavioural sentence rather than a noun.
4. **Stats Strip** — the same counters as Home, from the same data file, so the numbers can never
   disagree between pages.
5. **Meet the Team** — *only if real photos, names, and roles exist.* Skip the section entirely
   otherwise; stock headshots undermine the trust this page exists to build.
6. **Why Students & Professionals Trust Us** — the two-card pattern rewritten as trust statements.
7. **Company Facts** — registered name, entity type, founding year, office. Small and factual.
   Cheapest credibility on the site, and almost no competitor bothers.
8. **CTA Band.**

## 3. Services (Overview)

*Goal: route the visitor. Nobody buys from this page — they pick a door.*

1. **Page Header** — title plus an intro framing the four as one pipeline: source → vet → place →
   upskill.
2. **Which Service Fits You?** — audience × service matrix. **Sits above the detail rows** — it's
   the fastest router on the site, and the thing none of the researched competitors build cleanly
   on their own homepage or overview page. Collapses to stacked label/value pairs on mobile.
3. **Services Detail Rows** — four zig-zag rows, alternating image side, each with a 2–3 line
   description, a "not for you if…" line pointing at the right alternative, and an "Explore" link.
4. **CTA Band** — "Not sure which service fits? Book a free consultation."

## 4. Job Placement

*Goal: convert a job seeker. Highest-emotion page on the site.*

1. **Hero** — the fee line belongs here, not buried in the FAQ. It's the first question every
   candidate has.
2. **What's Included** — six tiles.
3. **What Changes** — two-column contrast, on your own vs. with us. Qualitative only; no salary
   or timeline promises.
4. **Process Steps** — five numbered steps with realistic durations.
5. **Success Story** — one real placement as Situation / Approach / Result.
6. **FAQ Accordion.**
7. **CTA Band.**

## 5. Recruitment & Staffing

*Goal: convert an employer with a role open now. This reader skims and wants terms.*

1. **Hero** — mirrored layout from Job Placement, employer-facing headline.
2. **What's Included** — sourcing, screening, staffing models, industry specialisations.
3. **Industries We Staff** — sectors with typical roles. Employers scan for their own sector
   before reading anything else — Insight Global's homepage leads with exactly this kind of long,
   specific industry list, and it's their strongest single credibility signal.
4. **How Engagements Work** — commercial structure stated plainly, structure not rates.
   Employers who can't find terms assume they're bad.
5. **Process Steps.**
6. **Proof Band** — only if the numbers are genuinely tracked; otherwise an employer testimonial.
7. **FAQ Accordion.**
8. **CTA Band** — links to Contact with the Employer option pre-selected.

## 6. Talent Acquisition

*Goal: distinguish from Recruitment & Staffing. If a visitor can't tell them apart in five
seconds, both pages fail.*

1. **Hero** — on the surface tone rather than paper, a deliberate one-shade shift so the page
   reads as more premium without introducing any new colour.
2. **How This Differs from Staffing** — comparison table, placed high. The most important block
   on the page: the breadth-vs-specialization split that separates generalist firms (Randstad,
   Adecco) from depth-focused ones (TEKsystems, Insight Global) in the wider market is exactly the
   split between our own Staffing and Talent Acquisition services, and it has to be stated
   explicitly rather than left for the visitor to infer.
3. **What's Included** — with market mapping expanded into its own block; describing that
   deliverable concretely is what justifies the premium framing.
4. **Process Steps.**
5. **FAQ Accordion.**
6. **CTA Band.**

## 7. IT Training

*Goal: sell a program to an early-career learner. Reads more like a course catalogue than a
service page.*

1. **Hero** — the one hero allowed an accent-coloured button; this audience is earlier in the
   funnel and more exploratory.
2. **Programs Offered** — track cards with duration, format, and prerequisites — the things a
   learner filters on first.
3. **Why Train With Us** — the placement-pipeline link, as a pull-quote. Always "priority access",
   never "guaranteed placement".
4. **What Certification Means** — what a graduate actually receives, and whether a track prepares
   for a vendor exam.
5. **Pricing** — at minimum, that payment plans exist and how to get exact figures.
6. **Curriculum Timeline** — Enroll → Learn → Practice → Certification → Placement Support.
7. **FAQ Accordion.**
8. **CTA Band.**

> If the tracks aren't real yet, this page ships as a single waitlist section instead — no
> durations, no prices, no curriculum until they exist.

## 8. Contact

*Goal: remove every reason not to send the form.*

1. **Page Header.**
2. **Contact Form + Info Split** — an "I am a…" choice (Job Seeker / Employer / Training
   Applicant) swapping in a couple of fields each. Shared fields stay at name, email, message —
   every extra field costs submissions. Response-time promise beside the submit button, resume
   privacy line beneath the form. Info card on the right; stacks form-above-info on mobile.
3. **Map Embed** — only if a physical office exists and can be visited.
4. **Social / Alternate Contact** — for visitors who'd rather not use a form.
5. **FAQ Mini-Section** — two or three "before you contact us" answers.

No CTA band. The form on this page *is* the call to action.

---

## Shared components (all pages)

- **Header / Nav** — logo left; Home, About, Services ▾, Contact and a "Get Started" button
  right, becoming a click-to-call link on mobile. Sticky on scroll with a hairline bottom border,
  not a shadow.
  - **Services dropdown** — opens on hover *and* keyboard focus, never hover alone. Panel of four
    links on desktop, single column on tablet, an expandable row inside the slide-out menu on mobile.
  - **Mobile menu** — full-width slide-in, closes on outside click and on Escape, page behind it
    locked from scrolling.
  - No Careers, Insights, or Refer & Earn items until those pages exist and are maintained — a nav
    item leading to a thin page costs more than a missing one. (See Robert Half's insights hub
    above, deferred for the same reason.)
- **Footer** — four columns on desktop, one on mobile: (1) logo, one-line pitch, social;
  (2) all four services; (3) company links including Privacy Policy and Terms; (4) contact details.
  Registered entity name in the copyright line. No newsletter signup unless someone genuinely
  sends a newsletter, and no second copy of the full nav.
- **CTA Band** — one reusable band, different wording per page, one action per band, never two
  competing buttons.
- **Stat Counter** — one reusable animated counter fed from a single source, so Home and About
  can never disagree.
- **FAQ Accordion** — one reusable accordion, questions kept in `_data/faqs.json`.

## Responsive behaviour — applies to every page and section above

Designed mobile-first, then adapted upward through tablet and desktop.

- **Hero** sections: text and image stacked on mobile, side by side on desktop.
- **Grids** (services, programs, team, differentiators): one column mobile, two tablet, three desktop.
- **Zig-zag split sections**: always stack image-above-text on mobile, regardless of desktop order.
- **Process timelines**: vertical stacked steps on mobile, a horizontal connected line on desktop.
- **Tables and comparisons**: collapse to stacked label/value pairs, or scroll sideways inside
  their own container — never shrink a wide table until it's unreadable.
- **Testimonial and logo rows**: swipeable on mobile, a fitted row on desktop.
- Every interactive component (dropdown, accordion, carousel) must work by touch, mouse, **and**
  keyboard. Hard requirement, not a nice-to-have, given the mobile-heavy job-seeker audience.

## Deferred to phase 2 (deliberately)

- **Insights / resources hub** — Robert Half's strongest asset (salary guides, hiring advice,
  career advice) is a standing content-marketing commitment: research, a publishing cadence, SEO
  investment. A thin version reads worse than none.
- **Resume ATS scorer** — needs a real backend; a fake scorer is worse than no scorer.
- **Referral program.**
- **Careers page.**
- **Live placement feed** — beyond the gated, permission-based version already on Home.
