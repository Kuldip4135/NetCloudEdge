# Content — the copy, and the rules behind it

Source of truth for **every word on the site** and for what we deliberately don't say.
Structure is in [PRD.md](PRD.md); the visual system is in [THEME.md](THEME.md).

**Company:** Net Cloud Edge (`src/_data/site.json`) · **Tagline:** Where careers find their footing.
**Audience:** students entering the market, professionals switching, and the employers who hire both.

### How to read this file

- **✅ Ready** — approved wording, use as-is. Don't rewrite it to sound better; it ships.
- **⚠️ Needs confirming** — the words are ready but contain a number, name, or promise someone has
  to verify. Every one of these is collected in [Part 4](#part-4--before-launch-what-must-be-confirmed).
- **❌ Leave out** — a deliberate omission, not an oversight.
- `[BRACKETS]` mean we don't have the real value yet. Never ship a page with a bracket still in it.

---

## Part 1 — Ground rules for all copy

**Voice:** plain, specific, second person. "We match you to roles worth taking" — not "leveraging
synergistic talent solutions."

**Length discipline:** hero subhead ≤ 20 words · card body 12–20 words · section intro ≤ 35 words ·
body paragraph ≤ 3 sentences. If a section needs more than that, it's two sections.

**The three claim tiers.** Every factual sentence on the site is one of these:

1. **Verified** — we can produce evidence today. State it flatly.
2. **Policy** — a promise we control (fee model, response time, 90-day check-in). Safe to state,
   and must then be honored.
3. **Unverified** — placement counts, success rates, salary outcomes, client names.
   **Either substantiate it or cut it.** Where a number would go and isn't confirmed, write the
   *policy* or the *mechanism* instead — never a smaller invented number.

**Never put on this site:**

- Salary figures attached to named individuals (privacy plus verification exposure)
- Client company names or logos without written permission
- Certification badges we don't hold — no ISO, no GDPR, no SOC 2
- Guarantee language ("guaranteed placement", "guaranteed job")
- Stock-photo headshots presented as real team members or real candidates
- Legal advice on employment, visa, or background-check compliance
- Anything about a candidate's background-check result

**No sentence appears verbatim on two pages.** Duplicated copy weakens both and reads as filler —
this is the standing failure mode whenever a page gets expanded.

### What the competitor research settled

*Netbounce Placement* runs **proof-by-volume**: an employer logo wall (TikTok, Meta, Amazon,
Google), a live placement feed with salaries, 25+ testimonials with "Verified" badges, a
year-by-year growth table, a before/after comparison ("Without: 6–8 months, $50–70K. With: 2–4
months, $85–170K"), and an ISO/GDPR badge wall — one of whose certifications does not exist.

What we took: **the structures, not the claims.** The growth table (dated and concrete beats a
round "5K+ placed"), the before/after block run qualitatively, and 4–6 real testimonials instead
of 25 thin ones. What we rejected: salary figures, fabricated badges, and their visa-led messaging
(F-1/OPT/CPT/H-1B) — that's their niche, and adopting it narrows us into a segment we don't serve
better than they do.

*Insight Global* runs the opposite strategy — no numbers, no feed, leading with culture, breadth,
and access to a person. Their real asset is a 28-item industry specialization list, which signals
coverage and doubles as an SEO surface. We took that (`_data/industries.json`, used on the
employer-facing pages) and their single human CTA instead of a wall of buttons.

**Where that leaves us:** Netbounce out-proofs us; Insight Global out-credentials us. Our opening
is the thing neither does cleanly — **we serve both sides and say plainly which service is for
whom.** The "Which service fits you?" matrix is the differentiator, and it belongs high on the page.

---

## Part 2 — Page by page

# 1. Home

*Job: in 10 seconds, tell a visitor which of the two doors is theirs.*

## Hero ✅

> **Eyebrow:** Where careers find their footing
> **Headline:** Recruiting, running live.
> **Subhead:** Every match, interview, and offer moves through one dashboard — for you to watch, not just wait on.
> **Buttons:** Find a Job · Hire Talent
> **Trust line (under the buttons):** Free for candidates — employers pay our fee.

*Alternative headline if a plainer read is wanted:* **Two doors. One team behind both.** /
Subhead: *Students starting out, professionals moving on, and the employers hiring both.*

The trust line is the *policy* kind of claim, and it's a real differentiator — keep it in the hero.
❌ Rotating headlines, video background, "trusted by thousands", any number we can't back.

## Dual-Path Split ✅

**For Job Seekers**
Personal matching, interview coaching, and offer support — from your first role to your next move.
→ *Explore job placement*

**For Employers**
Sourced, screened, and verified candidates — delivered faster than a job board could ever manage.
→ *Explore hiring services*

❌ A third card. Two doors is the point.

## Services Grid ✅

> **Eyebrow:** What we do
> **Heading:** Five services, one pipeline

| Service | One-liner | For |
|---|---|---|
| Job Placement | We match you to roles worth taking, then help you close the offer. | Students · Professionals |
| Recruitment & Staffing | Sourced, screened, and ready candidates for contract or full-time roles. | Employers |
| Talent Acquisition | Strategic search for specialized and leadership hires. | Employers |
| Background Verification | Thorough, compliant checks before an offer becomes a hire. | Everyone |
| IT Training | Skill-building tracks that feed directly into our placement pipeline. | Students |

The "For" column pulls the services-page matrix forward to where the decision actually happens.
❌ Long descriptions here; that's what the detail pages are for.

## Why Choose Us ✅ / ⚠️

> **Eyebrow:** Why us
> **Heading:** What makes it different

- **Personalized Matching** — A recruiter who's actually read your resume, not a keyword filter.
- **Verified Employers** — Every partner company is vetted before you're ever introduced.
- **Fast Turnaround** ⚠️ — Most candidates interview within two to three weeks of onboarding.
- **End-to-End Support** — We stay involved through the offer, negotiation, and first 90 days.

*If the two-to-three-week figure can't be backed, swap the third tile for:* **One Thread, One
Recruiter** — *No chasing status across four job boards and three inboxes.*

Each tile names a concrete mechanism. ❌ "Passion", "excellence", "customer-centric", "cutting-edge".

## Stats Bar ⚠️

> **Eyebrow:** Live totals

| Number | Label |
|---|---|
| 2,400+ | Candidates Placed |
| 180+ | Partner Companies |
| 12 | Years of Experience |
| 94% | Placement Success |

**All four are placeholders.** Confirm or replace. If we have per-year records, the stronger
version is a growth strip — *2021: 130 · 2022: 188 · 2023: 234 · 2024: 376 · 2025: 385* — which
reads as bookkeeping rather than marketing.
❌ A success percentage above ~95%; it reads as fabricated even when true, unless the denominator
is defined right beside it.

## Employer Network / "Placed in" ⚠️

> **Heading:** Candidates placed in
> **Lead:** Our people work here now.

Currently lists 16 major employers as wordmarks. **Do not ship without written permission**, or
without genuine placements at each. Honest fallback that needs no permission:

> **Heading:** Where our candidates work
> **Lead:** Placements across technology, finance, healthcare, logistics, retail, and professional services.

## Live Placement Feed ⚠️

> **Label:** Manifest · Updated hourly
> **Footnote:** Names shortened at candidates' request.

Placeholder people. Needs real, consented placements or the section comes out. Keep the footnote —
it explains the shortened names honestly. **Never add salary figures to these rows.**

## Testimonials ⚠️

> **Spotlight quote (Priya Nandakumar, Data Analyst):** "I'd sent out forty applications with nothing back. My recruiter had me in front of a hiring manager within two weeks — and the role fit better than anything I'd found on my own."

Written well; needs a real, consented person behind it. Each testimonial needs full name, role,
employer *or* industry, and consent. Photos in the repo are stock — use initials avatars until
real ones exist; that's honest and looks fine. Four to six real quotes beat twenty-five thin ones.
Quotes about *the process* ("someone actually called me back the same week") beat quotes about
*the outcome* — they're specific enough to be believable.
❌ Stock photos, "Verified" badges, quotes without an attributable person.

## How It Works ✅

> **Eyebrow:** How it works
> **Heading:** The process

1. **Apply** — Tell us where you are and where you want to be — takes ten minutes.
2. **Match** — We connect you with roles and employers that actually fit the brief.
3. **Interview** — Coaching and prep before every conversation that matters.
4. **Placement** — An offer, a negotiation assist, and a check-in 90 days in.

The time cost per step is the anxiety-reducing detail competitors skip.
❌ Internal process language ("requisition intake", "candidate calibration").

## Case Study ⚠️

> **Eyebrow:** One trace through the system
> **Heading:** Forty applications, no replies. Sixteen days after her first call, an offer.
> **Body:** Priya's résumé buried a strong analytics background on page two. We rebuilt the profile, matched her to three employers who needed exactly that, and prepped her for every interview.
> **Timeline:** Day 0 Applied · Day 4 Matched · Day 11 Interview · Day 16 Offer
> **Pull quote:** "The role fit better than anything I'd found on my own."

Same person as the spotlight — pick one placement for each so the page doesn't tell one story twice.

## Final CTA ✅

> **Eyebrow:** Ready when you are
> **Heading:** Ready to find your footing?
> **Subhead:** Whether you're job hunting or hiring, the first conversation is free.
> **Buttons:** Get Started · [phone number]

One button's worth of intent. ❌ Newsletter signup, secondary link, phone + form + email at once.

---

# 2. About Us

*Job: be believable. This is the page that gets read when someone is deciding whether we're real.*

## Page Header ✅

> **Title:** About Us
> **Tagline:** Recruiting built around people, not pipelines.

## Our Story ✅

> **Eyebrow:** Our story
> **Heading:** Started from a bad job search
>
> We started this firm after watching too many good candidates lose good opportunities to slow processes, vague feedback, and job boards that treat people like line items. At the same time, we watched employers struggle to fill roles with anyone but the loudest applicant, not the right one.
>
> *"A placement should feel like a match, not a transaction."*
>
> Today we work both sides of that gap — helping students and professionals land roles that fit, and helping employers hire people who'll stay.

**Add one sentence of specifics** ⚠️ — the year we started and who started it. Right now the story
is true of any agency. Something like: *"[Founder name] started Net Cloud Edge in [year] after
[X] years on the hiring side, having watched the same good candidates get filtered out of the same
good roles."* Keep it first person, 120–180 words total.

❌ Founder-hero mythology, awards we don't hold, "our journey" timelines with invented milestones,
an org chart, investor logos.

## Mission & Values ✅

> **Eyebrow:** What we stand for
> **Heading:** Mission & values

- **Integrity** — We tell candidates and employers the truth, even when it's not the easy answer.
- **Candidate-First** — Our fee comes from employers, so our advice to you isn't for sale.
- **Speed** — Good process shouldn't be slow — we move quickly without cutting corners.
- **Long-Term Partnerships** — We measure success by who's still placed a year later, not just the offer.

Candidate-First was rewritten from a sentiment to name the actual mechanism. Mechanisms are
believable; sentiments aren't. Every value tile follows that pattern.

## Stats Strip ⚠️

Same four numbers as Home, from the same data file. Never a second set.

## Meet the Team

**Only ships with real photos, real names, real roles.** Per person: name, role, one line on what
they handle. No stock headshots — a two-person team stated honestly beats four invented ones.

## Why Students & Professionals Trust Us ✅ / ⚠️

> **Eyebrow:** Trust
> **Heading:** Why students & professionals trust us

**If you're starting out** ⚠️
We've placed thousands of first-time candidates who didn't know where to start — and treated every one like the placement mattered.

*"Thousands" depends on the stats being confirmed. Safe rewrite:* "Most of the people we place are
figuring out their first move — we've built the process around that, not around senior hires who
already know the drill."

**If you're switching or hiring** ✅
Whether you're moving on from a role or trying to fill one, we work from the same playbook: understand the fit before we make the match.

## Company Facts ✅ ⚠️

Small, factual, at the bottom of the page:

> Net Cloud Edge · Registered as [legal entity name] · Founded [year] · [Office address] · [Business registration number, if public]

Cheapest credibility on the site, and almost no competitor does it.

## CTA ✅

> **Heading:** Want to know more?
> **Subhead:** Let's talk about where you're headed, or who you're hiring for.
> **Button:** Let's Talk

---

# 3. Services (Overview)

*Job: route the visitor. Nobody buys from this page — they pick a door.*

## Page Header ✅

> **Title:** Our Services
> **Intro:** Source, vet, place, verify, upskill — five services that work as one connected pipeline, whichever end you're starting from.

## Which Service Fits You? ✅ — *sits above the service rows*

> **Eyebrow:** Who it's for
> **Heading:** Which service fits you?

| | Students | Professionals | Employers |
|---|---|---|---|
| Job Placement | ✓ | ✓ | — |
| Recruitment & Staffing | — | — | ✓ |
| Talent Acquisition | — | — | ✓ |
| Background Verification | ✓ | ✓ | ✓ |
| IT Training | ✓ | — | — |

The fastest router on the site. A visitor who knows which door is theirs in five seconds is worth
more than one who reads all five descriptions.

## Service Rows ✅

**01 · Job Placement** — Hands-on support from resume to signed offer — matching, coaching, and negotiation help for candidates who want a job placed, not just applications sent.
*Not for employers hiring — start with Recruitment & Staffing.*

**02 · Recruitment & Staffing** — Full-cycle staffing for employers — sourcing, screening, and delivering vetted candidates across contract, temp, and permanent roles.
*Hiring one senior or specialized role instead? See Talent Acquisition.*

**03 · Talent Acquisition** — A higher-touch search practice for roles where volume hiring won't work — specialized, senior, or hard-to-fill positions.
*Filling a defined role quickly? Recruitment & Staffing is the faster route.*

**04 · Background Verification** — Employment history, education, and reference verification handled quickly and correctly, so an offer becomes a hire with confidence.
*Available standalone, or bundled with any placement.*

**05 · IT Training** — Structured programs in web development, QA, cloud, and data — built for graduates who want training that leads somewhere specific: a job.
*Already have the skills? Go straight to Job Placement.*

The italic "not for you" lines prevent the wrong-service inquiry — the most common conversion leak
on a five-service site.

❌ Pricing table, feature-comparison matrix across our own services, per-service testimonials
(those belong on the detail pages).

## CTA ✅

> **Heading:** Not sure which service fits?
> **Subhead:** Book a free consultation and we'll point you the right way.
> **Button:** Book a Consultation

---

# 4. Job Placement

*Job: convert an anxious job seeker. Highest-emotion page on the site.*

## Hero ✅

> **Breadcrumb:** Home / Services / Job Placement
> **Headline:** Get Placed, Not Just Applied
> **Subhead:** Full support from resume to signed offer — because a job search shouldn't be something you do alone.
> **Under the button:** Free for candidates. Our fee is paid by the hiring employer, never by you.
> **Button:** Start Your Job Search

The cost line belongs in the hero, not the FAQ — it's the first question every candidate has.

## What's Included ✅

> **Eyebrow:** What's included
> **Heading:** Support at every stage

- **Resume & Profile Optimization** — We rebuild your resume and profile around what actually gets noticed.
- **Interview Coaching** — Mock interviews and real feedback before it counts.
- **Employer Matching** — We only put you in front of roles that fit your background and goals.
- **Offer Negotiation Support** — We help you evaluate and negotiate before you sign anything.
- **Post-Placement Check-In** — We follow up at 30 and 90 days to make sure it's working out.
- **Application Tracking** — One recruiter, one thread — no chasing status across job boards.

## What Changes ✅

> **Eyebrow:** The difference
> **Heading:** What actually changes

| On your own | With us |
|---|---|
| Applications into a void, no reply | A named recruiter who tells you where each one stands |
| No idea why you were passed over | Feedback after every interview |
| Competing with hundreds of applicants | Introduced to employers already expecting your resume |
| Guessing what the interview will cover | Prepped for the specific team you're meeting |

**No salaries and no timelines in this table.** The competitor's version promises "$85K–$170K in
2–4 months" — exactly the claim we can't back and don't need. The qualitative version converts
nearly as well and is defensible.

## Process ✅ ⚠️

> **Eyebrow:** The process
> **Heading:** Five steps to an offer

1. **Consultation** *(30 minutes)* — A conversation about where you are and where you want to go.
2. **Profile Build** *(3–5 days)* — Resume, profile, and positioning built around your target roles.
3. **Matching** *(ongoing)* — Introductions only to employers that fit — no mass applications.
4. **Interviews** — Coaching before every conversation that matters.
5. **Offer** — Negotiation support and a check-in once you've started.

Durations reduce anxiety and set expectations. ⚠️ Confirm we can meet them.

## Success Story ⚠️

> **Eyebrow:** Success story
> **Heading:** Real placement, real timeline
>
> **Situation** — Sofia had six months of unanswered applications for QA roles after a bootcamp.
> **Approach** — We rebuilt her profile around testing frameworks employers were actually hiring for, and matched her to two fintech teams.
> **Result** — Offer in hand four days after her first interview, at 15% above her target salary.

Needs a real, consented candidate; first name or initials only. Keep "15% above her target" only
if true — otherwise cut the clause; the four-day detail carries the story.

## FAQ ✅ / ⚠️

- **Does this cost anything as a candidate?** No — our fee is paid by the hiring employer, never by the candidate. There's no cost to you at any stage.
- **How long does placement usually take?** ⚠️ Most candidates interview within 2–3 weeks of onboarding and receive an offer within 4–8 weeks, depending on role and industry.
- **What if the placement doesn't work out?** ⚠️ We stay involved for 90 days post-placement. If a role isn't the right fit in that window, we re-open your search at no additional cost.
- **What industries do you cover?** Technology, finance, healthcare administration, and professional services, with new industries added as employer demand grows.

❌ Salary claims, guaranteed-placement language, "we apply to 100 jobs for you" (volume is what
we're positioning *against*), visa/immigration content, urgency banners.

## CTA ✅

> **Heading:** Start your job search today. · **Button:** Get Started

---

# 5. Recruitment & Staffing

*Job: convert an employer with a role open right now. Different reader — skims, wants terms.*

## Hero ✅

> **Headline:** Hire Faster, Hire Right
> **Subhead:** Vetted candidates for contract, temp, or full-time roles — delivered faster than sifting through a job board yourself.
> **Button:** Tell Us Your Hiring Need

## What's Included ✅

> **Eyebrow:** What's included
> **Heading:** Built for how you hire

- **Candidate Sourcing** — Active and passive candidate networks built specifically for your role, not a job-board repost.
- **Screening & Vetting** — Skills, references, and fit assessed before a candidate ever reaches your inbox.
- **Staffing Models** — Contract, temp-to-hire, or permanent — whichever structure fits the role.
- **Industry Specializations** — Dedicated sourcing pipelines in technology, finance, healthcare, and more.

## Industries We Staff ⚠️

> **Eyebrow:** Coverage
> **Heading:** Where we place
> **Intro:** Employers scan for their own sector first. Here's ours.

| Sector | Typical roles |
|---|---|
| Technology & Software | Engineers, QA, DevOps, Data |
| Finance & Fintech | Analysts, Risk, Compliance |
| Healthcare & Life Sciences | Clinical ops, Informatics |
| Manufacturing & Logistics | Supply chain, Ops, Planning |
| Retail & E-commerce | Merchandising, Growth, CX |
| Professional Services | Consulting, Accounting, HR |

Driven from `_data/industries.json`, which says to list only sectors with real placement history.
The percentage shares stored alongside these sectors are placeholders — **either confirm them or
show the sectors without shares.** The sector list itself is the valuable part.

## How We Work Commercially ✅ ⚠️

> **Eyebrow:** Terms
> **Heading:** How engagements work
>
> - **Permanent placements** — contingency-based. You pay when someone starts, not before.
> - **Contract & temp** — a flat markup on hourly billing, quoted upfront.
> - **No retainer** to begin, and no minimum for a one-off role.
> - **Ongoing partnerships** move to a dedicated account structure once volume picks up.
>
> Rates depend on role and seniority — we'll quote before any work begins.

Publish the *structure*, never the percentages. Employers who can't find terms assume they're bad.

## Process ✅

> **Eyebrow:** The process
> **Heading:** From requirement to onboarding

1. **Requirement Analysis** — We start with the role, the team, and what "right" actually looks like.
2. **Sourcing** — Active outreach across our network, not a passive posting.
3. **Screening** — Skills and reference checks before you see a single resume.
4. **Client Interviews** — A shortlist you can actually choose from.
5. **Onboarding** — Support through the offer and the first day.

## Proof Band ⚠️

> **Eyebrow:** Why employers choose us
> **Heading:** Results, not resumes
> **94%** Placement Success · **18 days** Average Time-to-Fill (Contract) · **20+** Industries Served

All three unverified, and "20+ industries" contradicts the six sectors listed above — fix that
inconsistency either way. **If we don't track these, delete the band** and use an employer
testimonial instead:

> "We stopped sifting through hundreds of resumes. Every candidate they send has already been screened for the role we actually described, not a generic version of it." — Hiring Manager, fintech scale-up

## FAQ ⚠️

Four questions on pricing model, minimum engagement, industries, and time-to-fill. The time-to-fill
answer ("18 days contract, 34 days permanent — both tracked and reported per engagement") promises
reporting we must actually do.

❌ Actual rates or percentage fees (that's a conversation), client logos without permission,
"24/7 support" unless staffed, headcount promises.

## CTA ✅

> **Heading:** Tell us your hiring need · **Button:** Talk to Our Team

Link through to Contact with the Employer option pre-selected.

---

# 6. Talent Acquisition

*Job: explain why this exists when we already sell staffing. If a visitor can't tell them apart,
both pages fail.*

## Hero ✅

> **Headline:** Precision Hiring for Roles That Matter
> **Subhead:** A strategic search practice for leadership and specialized roles — built on quality of match, not speed of fill.
> **Button:** Start a Search

## How This Differs from Staffing ✅

> **Eyebrow:** How this differs from staffing
> **Heading:** Not the same as Recruitment & Staffing

| | Recruitment & Staffing | Talent Acquisition |
|---|---|---|
| **What it does** | Fills a defined role from an existing pool | Builds a pipeline for a role that doesn't have one |
| **Timeline** | Days to weeks | 6–10 weeks ⚠️ |
| **Candidates** | Actively looking | Usually not looking |
| **Best for** | Volume, contract, defined roles | Leadership, specialized, competitive roles |
| **Terms** | Contingency | Retained |

The most important block on the page, so it goes high.

## What's Included ✅

> **Eyebrow:** What's included
> **Heading:** A higher-touch search

- **Executive & Specialized Search** — Dedicated search for leadership and niche technical roles.
- **Talent Pipelining** — We build a candidate bench before you need to fill the role again.
- **Market Mapping** — A clear view of where the right candidates sit today, and what it takes to reach them.
- **Long-Term Partnership Model** — A dedicated search partner, not a transactional vendor relationship.

**Market Mapping gets its own short block** — it's the deliverable that justifies the premium framing:

> **What a market map gives you:** who's doing this job today and where, what they're paid, which companies are the realistic feeder pool, and how long a move from each typically takes. You keep it whether or not you hire through us.

## Process ✅ / ⚠️

> **Eyebrow:** The process
> **Heading:** A search built around the role

1. **Discovery** — Understand the role, the team, and what success looks like a year in.
2. **Market Mapping** — Identify where qualified candidates actually are.
3. **Outreach** — Direct, confidential approach to passive candidates.
4. **Shortlist** — A small, vetted slate — not a wide net.
5. **Placement** ⚠️ — Offer support and a 6-month replacement guarantee.

## FAQ ✅ / ⚠️

Four questions covering the staffing distinction, suitable roles, timeline (6–10 weeks), and the
replacement guarantee. ⚠️ The 6-month guarantee appears twice on this page — confirm it's a real
policy before either instance goes live.

❌ Named executive placements, "C-suite" claims we can't evidence, a second industries list (link
to the one on Staffing), and any sentence reused from the Staffing page.

## CTA ✅

> **Heading:** Have a role that's hard to fill?
> **Subhead:** Let's talk about what a dedicated search would look like.
> **Button:** Start a Conversation

---

# 7. Background Verification

*Most legally sensitive page on the site. Write conservatively; qualifiers are not optional.*

## Hero ✅

> **Headline:** Confidence Before the Hire
> **Subhead:** Thorough, compliant verification so an offer becomes a hire without second-guessing.
> **Button:** Request a Verification

## What We Verify ✅

> **Eyebrow:** What we verify
> **Heading:** A complete picture, checked

- **Employment History** — Confirmed dates, titles, and roles directly with past employers.
- **Education Verification** — Degrees and certifications confirmed at the source.
- **Criminal Record Check** — Conducted where legally permitted, scoped to the role.
- **Reference Checks** — Structured conversations with the people who worked with the candidate directly.
- **Identity Verification** — Confirms the candidate is who their application says they are.

"Where legally permitted" on the criminal check is **non-negotiable** — screening law varies by
state and by role.

## Compliance ✅

> **Eyebrow:** Compliance
> **Heading:** Handled correctly, every time
>
> Every check begins with documented candidate consent, and every report is scoped to what's legally permitted for the role and jurisdiction. Data is encrypted in transit and at rest, accessible only to the parties directly involved in the hiring decision, and retained only as long as required by applicable law. We don't display third-party compliance badges we haven't earned — if you have specific regulatory requirements for a role, tell us and we'll confirm in writing what our process covers.

Strongest paragraph on the site. The refusal to display unearned badges is a direct contrast with
the competitor's badge wall. **Leave this exactly as written.**

## Process ✅ / ⚠️

> **Eyebrow:** The process
> **Heading:** From request to report

1. **Request** — Tell us which candidate and which checks the role requires.
2. **Consent Collection** — We collect documented consent directly from the candidate.
3. **Verification** — Employment, education, and reference checks run in parallel.
4. **Report Delivery** ⚠️ — A clear, scoped report delivered within days, not weeks.

## FAQ ✅ / ⚠️

Turnaround (⚠️ 3–5 business days), scope, data handling, and per-role customization. All well
written; only the turnaround needs confirming.

**Never on this page:** compliance badges (ISO / GDPR / SOC 2 / FCRA), "100% accurate", "instant
results", sample report contents, any real candidate example, anything implying we adjudicate a
candidate's suitability, or advice on an employer's legal obligations. We report findings; the
hiring decision is the employer's.

## CTA ✅

> **Heading:** Ready to verify a candidate? · **Button:** Request a Check

---

# 8. IT Training

⚠️ **This whole page assumes the four tracks are real, with real curricula and instructors.**
If they're placeholders, ship the waitlist version at the bottom of this section instead.

*Job: sell a program to an early-career learner. Reads more like a course page than a service page.*

## Hero ✅

> **Headline:** Train. Certify. Get Placed.
> **Subhead:** Structured programs that build real skills — and feed straight into our placement pipeline when you're done.
> **Button:** Book a Free Demo Class

## Programs ⚠️

> **Eyebrow:** Programs
> **Heading:** Tracks offered

| Track | Duration | Format | Prerequisites | Description |
|---|---|---|---|---|
| Web Development | 12 weeks | Live online · In-person (Chicago) | None | Front-end and back-end fundamentals through a portfolio-ready capstone project. |
| QA / Testing | 8 weeks | Live online | None | Manual and automated testing practices used in real release pipelines. |
| Cloud / DevOps | 10 weeks | Live online | Basic command line helps | Core cloud infrastructure, CI/CD, and deployment fundamentals on AWS. |
| Data Basics | 8 weeks | Live online | None | SQL, spreadsheets, and data analysis fundamentals for non-technical starters. |

Format and prerequisites are the two things a learner filters on before reading anything else.
⚠️ Every cell here needs to be real.

## Why Train With Us ✅

> **Eyebrow:** Why train with us
> **Heading:** Graduates get direct access to our placement pipeline — the strongest differentiator versus a generic training vendor.

Always **"priority access"** or **"direct access."** Never "guaranteed placement."

## What Certification Means ✅ ⚠️

> **Heading:** What you get at the end
> **Body:** A Net Cloud Edge completion certificate, a portfolio project you can show employers, and a direct handoff into our Job Placement pipeline. ⚠️ [If a track prepares you for a vendor exam — AWS, ISTQB — say which, and whether the exam fee is included.]

Vague certification claims are the most common complaint about training providers. Being explicit
here is a differentiator on its own.

## What It Costs ✅ ⚠️

> **Heading:** Pricing
> **Body:** Program fees vary by track and format. Payment plans are available, and select tracks offer a placement-linked deferral. ⚠️ [Tell us which track you're considering and we'll send exact pricing — or: Tracks start at $X.]

A page with zero price signal loses price-sensitive readers entirely. A range or a "request
pricing" route is enough.

## Curriculum Timeline ✅

> **Eyebrow:** Curriculum
> **Heading:** From enrollment to placement

1. **Enroll** — Pick a track and a format — online, in-person, or both.
2. **Learn** — Structured curriculum built around real job requirements.
3. **Practice** — A portfolio-ready project you can show employers.
4. **Certification** — A credential that signals real, tested skill.
5. **Placement Support** — Direct handoff into our Job Placement pipeline.

## FAQ ✅

Duration, format, cost, prerequisites, and placement. The placement answer is the model for the
whole site:

> **Is placement guaranteed after graduation?** Graduates get direct, priority access to our Job Placement pipeline — not a guarantee, but a real head start over an open application.

Honest, and still sells. Reuse this pattern wherever we're tempted to overclaim.

❌ "Guaranteed job after graduation", graduate-specific placement rates (small denominator, high
scrutiny), instructor bios we can't verify, false scarcity ("2 seats left"), employer logos framed
as recruiting our graduates.

## CTA ✅

> **Heading:** Ready to build a new skill set? · **Button:** Enroll Now

## If the tracks aren't real yet

> **Headline:** Training that ends in a job, not a certificate.
> **Body:** We're building four tracks — web development, QA, cloud, and data — designed around the roles our employer partners are actually hiring for. Join the list and we'll tell you when enrollment opens.
> **Button:** Join the Waitlist

No durations, no prices, no curriculum until they exist.

---

# 9. Contact

*Job: remove every reason not to send the form.*

## Page Header ✅

> **Title:** Contact Us
> **Subhead:** Whether you're looking for a job or looking to hire, we're here to help.

## Form ✅

> **I am a…** Job Seeker · Employer · Training Applicant
>
> **Everyone:** Full name · Email · Message
> **Employer adds:** Company name · Role you're hiring for
> **Job Seeker adds:** Resume upload *(PDF or Word)*
> **Training Applicant adds:** Which track interests you?
>
> **Button:** Send Message
> **Next to the button:** We reply within one business day.
> **Under the form:** We use your details only to respond to this enquiry. Resumes are shared with employers only with your say-so, and we never sell your data.

The response promise belongs beside the button, not buried in the FAQ; the privacy line is needed
the moment we accept resume uploads.

❌ Phone as a required field, "how did you hear about us" (ask later), a CAPTCHA where a honeypot
will do, a CTA band, a pre-ticked newsletter checkbox.

## Contact Info Card ✅ ⚠️

> **Office** — 212 Wabash Ave, Suite 500, Chicago, IL 60601
> **Phone** — +1 (312) 555-0148
> **Email** — hello@netcloudedge.com
> **Hours** — Mon–Fri, 9:00am–6:00pm CT
> **Social** — LinkedIn · Instagram · X

⚠️ Every one of these is placeholder data — the phone number is a reserved fictional-use number
and the social links point at bare domains. All must be real before launch.

## Map ✅

Only if the office is real and visitable. Otherwise remove the block entirely rather than showing
a city-center pin we don't occupy.

## FAQ ✅

- **How soon will I hear back?** Within one business day — most inquiries get a reply the same day they're submitted.
- **Do I need to pick a service before reaching out?** No — tell us your situation in the message and we'll point you to the right service, or a combination of them.
- **Is there a cost to reach out?** No — the first conversation is always free, for candidates and employers alike.

No CTA band on this page. The form is the call to action.

---

## Part 3 — Shared

## Navigation ✅

Home · About · Services ▾ · Contact · **Get Started**
Services dropdown lists all five service pages. On mobile the header CTA becomes a click-to-call link.

No Careers, Insights, or Refer & Earn until those pages exist and are maintained — a nav item
leading to a thin page costs more than a missing one.

## Footer ✅

> **Column 1** — Net Cloud Edge. Where careers find their footing. *(+ social links)*
> **Column 2 — Services:** all five
> **Column 3 — Company:** Home · About · Contact · Privacy Policy · Terms
> **Column 4 — Contact:** address · phone · email · hours
>
> **Bottom line:** © [year] [Registered entity name]. All rights reserved.

⚠️ Privacy Policy and Terms must exist before the resume upload goes live. No newsletter signup
unless someone actually sends a newsletter, and no second copy of the full nav.

## CTA band wording, by page

| Page | Heading | Button |
|---|---|---|
| Home | Ready to find your footing? | Get Started |
| About | Want to know more? | Let's Talk |
| Services | Not sure which service fits? | Book a Consultation |
| Job Placement | Start your job search today. | Get Started |
| Recruitment & Staffing | Tell us your hiring need | Talk to Our Team |
| Talent Acquisition | Have a role that's hard to fill? | Start a Conversation |
| Background Verification | Ready to verify a candidate? | Request a Check |
| IT Training | Ready to build a new skill set? | Enroll Now |
| Contact | *(none — the form is the CTA)* | |

One action per band, verb-first. Never two competing buttons.

## Page titles & descriptions ✅

| Page | Title | Description |
|---|---|---|
| Home | Net Cloud Edge — Recruiting & Staffing | Recruiting and staffing for students starting out and professionals moving on — plus the employers who hire both. |
| About | About Us | Why Net Cloud Edge exists, and who we've built it for. |
| Services | Services | Five services, one connected pipeline — from sourcing candidates to verifying them to placing them. |
| Job Placement | Job Placement | Hands-on support from resume to signed offer — matching, coaching, and negotiation help for candidates who want a job placed, not just applications sent. |
| Recruitment & Staffing | Recruitment & Staffing | Full-cycle staffing for employers — sourcing, screening, and delivering vetted candidates across contract, temp, and permanent roles. |
| Talent Acquisition | Talent Acquisition | A higher-touch search practice for roles where volume hiring won't work — specialized, senior, or hard-to-fill positions. |
| Background Verification | Background Verification | Employment history, education, and reference verification handled quickly and correctly, so an offer becomes a hire with confidence. |
| IT Training | IT Training | Structured programs in web development, QA, cloud, and data — built for graduates who want training that leads somewhere specific: a job. |
| Contact | Contact | Whether you're looking for a job or looking to hire, we're here to help. |

Meta descriptions get rewritten to 150–160 chars against the final content of each page.

---

## Part 4 — Before launch: what must be confirmed

Every ⚠️ on the site, in one list, ordered by how much depends on it. This is the only copy of
this list — [ROADMAP.md](ROADMAP.md) points here rather than keeping its own.

| # | To confirm | Blocks |
|---|---|---|
| 1 | **Every number in `_data/stats.json` and `_data/faqs.json`** — candidates placed, partner companies, years, success rate | Home, About, Staffing |
| 2 | **Fee model in writing** — "employers pay, candidates never do". Any candidate-paid element changes three pages | Home, Services, Job Placement |
| 3 | **Company contact details** — phone, email, address, social. All currently fictional | Every page (footer), Contact |
| 4 | **Real consented testimonials (4–6)** and placement-feed entries, with name, role, employer or industry | Home, Job Placement |
| 5 | **IT Training reality** — are the four tracks real, with curricula and instructors? Determines whether the page ships in full or as a waitlist | IT Training |
| 6 | **Timelines** — time-to-fill (18 / 34 days), interview window (2–3 weeks), offer window (4–8 weeks), TA search (6–10 weeks) | Home, Job Placement, Staffing, Talent Acquisition |
| 7 | **Commercial structure for employers** — contingency vs retained, contract markup, replacement window, temp-to-perm conversion terms. Structure, not rates | Staffing, Talent Acquisition |
| 8 | **Background check scope** — which checks we actually run, through which vendor, typical turnaround (3–5 business days?) | Background Verification |
| 9 | **Guarantees** — 90-day candidate re-open, 6-month replacement, any refund policy. Each is currently asserted in an FAQ; each must be a real policy | Job Placement, Talent Acquisition |
| 10 | **Employer names / logos** — written permission plus genuine placements at each | Home |
| 11 | **Industry sector shares** (38% / 21% / 14%…) — and whether every listed sector has real placement history | Staffing, Job Placement |
| 12 | **Team photos and bios** — determines whether About §5 exists at all | About |
| 13 | **Legal entity name, founding year, founder name** | About, footer |
| 14 | **Privacy Policy and Terms pages** — required before the resume upload goes live | Footer, Contact form |
| 15 | **Is the Chicago office real and visitable?** | Contact, footer |

Where an answer doesn't arrive, the fallback is always the same: **write the mechanism, cut the number.**