# Content Plan — what goes on each page, and what stays off

Companion to [PRD.md](PRD.md). The PRD settles *structure and design*; this settles *content* — the actual copy blocks, the proof elements, and the things we deliberately don't say.

Company: **Net Cloud Edge** (`src/_data/site.json`). Audience: students entering the market, professionals switching, and the employers who hire both.

---

## Part 1 — What the research says

### Competitor: Netbounce Placement (netbounceplacement.com)

Reviewed the homepage and the Job Placement service page. Their content strategy is **proof-by-volume**:

| What they do | Worth copying? |
|---|---|
| Employer logo wall (TikTok, Meta, Amazon, Google, PayPal, Chase) | **Structure yes, content only if true.** A logo wall we can't substantiate is the fastest way to lose trust. |
| Live placement feed — name / role / company / salary ($110K–$229K) | **Concept yes, salaries no.** See "Salary numbers" below. |
| 25+ testimonials with photos and "Verified" badges | **Yes** — but 6–8 real ones beat 25 thin ones. Never fabricate a "Verified" badge. |
| Year-by-year growth table (2021: 130+ → 2026: 437+) | **Yes.** Concrete, dated, and far more credible than a round "5K+ placed". |
| Before/after comparison — "Without Netbounce: 6–8 months, $50–70K. With: 2–4 months, $85–170K" | **Format yes, numbers no.** This is the single highest-converting block on their site. We can run it qualitatively. |
| ISO 9001 / ISO 27001 / "GDPR 5000" / E-Verify badges | **No.** "GDPR 5000 Certified" isn't a real certification. Fake compliance badges are a legal and credibility risk. |
| Visa-led messaging (F-1, OPT, CPT, H-1B, H-4, GC) | **No.** That's their niche, not ours — our audience is broader and this narrows us into a segment we don't serve better than they do. |
| Resume ATS-score calculator (lead magnet, file upload) | **Phase 2.** Genuinely good idea, but it needs a real backend; a fake scorer is worse than none. |
| Blog/Insights (immigration content, heavy SEO play) | **Phase 2**, as the PRD already flags. |
| "Refund Assurance" in value props, refund policy in footer only | **Only if we actually have one.** If we do, it goes on the page, not buried in the footer. |

### Benchmark: Insight Global (enterprise staffing)

Opposite strategy — no numbers, no placement feed. They lead with **culture, breadth, and access to a person**: "The right talent changes everything" → "Talk to an Expert". Their real content asset is a **28-item industry specialization list**, which does two jobs at once: it signals coverage, and it's an SEO landing surface.

**Take from them:** the industries list (we already have `_data/industries.json` — use it on the employer-facing pages), and one human contact CTA instead of a wall of buttons.

### Where that leaves us

Netbounce out-proofs us; Insight Global out-credentials us. Our opening is the one thing neither does cleanly: **we serve both sides and say plainly which service is for whom.** The "Which service fits you?" matrix already in [services.njk:40-84](src/services.njk#L40-L84) is our differentiator — it should be more prominent, not less.

---

## Part 2 — Ground rules for all copy

**Voice:** plain, specific, second person. "We match you to roles worth taking" — not "leveraging synergistic talent solutions."

**The three claim tiers.** Every factual sentence on the site is one of these:
1. **Verified** — we can produce evidence today. State it flatly.
2. **Policy** — a promise we control (fee model, response time, 90-day check-in). Safe to state, must be honored.
3. **Unverified** — placement counts, success rates, salary outcomes, client names. **Either substantiate it or cut it.**

**Numbers currently in the repo are placeholders.** `_data/stats.json` claims 2,400+ placed / 180+ partners / 12 years / 94% success. Every FAQ has hard numbers too — "18 days time-to-fill", "34 days permanent", "97.8%"-style precision. Before launch, someone has to confirm each one. If a number can't be confirmed, replace it with a policy statement rather than a smaller invented number.

**Never put on this site:**
- Salary figures attached to named individuals (privacy + verification exposure)
- Client company names or logos without written permission
- Certification badges we don't hold — no ISO, no GDPR, no SOC 2
- Guarantee language ("guaranteed placement", "guaranteed job") — the IT Training FAQ already handles this correctly; hold that line everywhere
- Stock-photo headshots presented as real team members or real candidates
- Legal advice on employment, visa, or background-check compliance
- Anything about a candidate's background-check result

**Length discipline:** hero subhead ≤ 20 words. Card body 12–20 words. Section intro ≤ 35 words. Body paragraph ≤ 3 sentences. If a section needs more than that, it's two sections.

---

## Part 3 — Page by page

Sections map to the PRD numbering. "✅ Include" = write it. "❌ Leave out" = deliberate omission, not an oversight.

---

### 1. Home

*Job: in 10 seconds, tell a visitor which of the two doors is theirs.*

**Hero**
- ✅ One static headline naming both audiences; subhead ≤ 20 words; two CTAs — "Find a Job" (solid) / "Hire Talent" (outline)
- ✅ One trust line under the CTAs — the *policy* kind, e.g. "No cost to candidates — employers pay our fee." That's a real differentiator and it's verifiable.
- ❌ Rotating headlines, video background, "trusted by thousands", any number in the hero we can't back

**Dual-Path Split** (already built)
- ✅ Two cards, 2 lines each, framed as *outcomes* not features. Job seekers: "matched, coached, and introduced — not added to a pile." Employers: "shortlists you can actually interview."
- ❌ A third card. Two doors is the point; a third dilutes the choice.

**Services Grid**
- ✅ The five one-liners from `_data/services.json` — they're already good, don't rewrite
- ✅ An audience tag per card (Students / Professionals / Employers) — pulls the services-page matrix forward to where the decision happens
- ❌ Long descriptions here; that's what the detail pages are for

**Why Choose Us**
- ✅ 4 tiles, each a *concrete mechanism*, not an adjective: "One recruiter, one thread", "Employers we've placed with before", "Coaching before every interview", "We check in at 30 and 90 days"
- ❌ "Passion", "excellence", "customer-centric", "cutting-edge". Also skip "Fast Turnaround" unless we publish the number.

**Stats Bar**
- ✅ 4 counters from `_data/stats.json` — **after the numbers are confirmed**
- ✅ Better than round numbers: the Netbounce-style **year-by-year table**, if we have per-year records. "2021: 130 → 2025: 385" reads as bookkeeping; "5K+" reads as marketing.
- ❌ A success percentage above ~95% (reads as fabricated even when true, unless we define the denominator right next to it)

**Testimonials**
- ✅ 4–6 real ones. Each needs: full name, role, employer *or* industry, and consent. Initials avatar when there's no photo — that's honest and looks fine.
- ✅ Quotes about *the process* ("someone actually called me back the same week") beat quotes about *the outcome* — they're specific enough to be believable.
- ❌ Stock photos, "Verified" badges, quotes without an attributable person

**How It Works**
- ✅ 4 steps, ≤ 12 words each: Apply → Match → Interview → Placement. Add the *time cost to the visitor* per step ("30 minutes", "no prep needed") — this is the anxiety-reducing detail competitors skip.
- ❌ Internal process language ("requisition intake", "candidate calibration")

**Final CTA**
- ✅ One button. One.
- ❌ Newsletter signup, secondary link, phone + form + email all at once

---

### 2. About Us

*Job: be believable. This page is the one that gets read when someone is deciding whether we're real.*

- ✅ **Our Story** — the origin already in [about.njk:29-30](src/about.njk#L29-L30) ("Started from a bad job search") is the right angle. Keep it first-person and specific: what year, what the founder saw, what they built instead. 120–180 words.
- ✅ **Mission & Values** — 4 tiles, each with a *behavioral* sentence, not just a noun. "Candidate-First → our fee comes from employers, so our advice to you isn't for sale."
- ✅ **Stats Strip** — same component, same data file. Never a second set of numbers.
- ✅ **Meet the Team** — only with real photos, real names, real roles. The PRD is right: skip the whole section otherwise. A 2-person team stated honestly outperforms four stock headshots.
- ✅ **Trust block** — the two-card pattern rewritten as trust statements
- ✅ **Legal footing** — registered business name, entity type, year founded, primary office. Small, factual, at the bottom. This is the cheapest credibility on the site and almost nobody does it.
- ❌ Founder-hero mythology, awards we don't hold, "our journey" timelines with invented milestones, an org chart, investor logos

---

### 3. Services (Overview)

*Job: route the visitor. Nobody buys from this page — they pick a door.*

- ✅ Header line that frames the pipeline: source → vet → place → verify → upskill
- ✅ The 5 zig-zag rows, 2–3 lines each, using the existing `description` fields
- ✅ **The "Which service fits you?" matrix — move it above the zig-zag rows.** It's the fastest router on the site and it's currently below the fold at [services.njk:40](src/services.njk#L40). A visitor who knows which door is theirs in 5 seconds is worth more than one who reads all five descriptions.
- ✅ One line per service naming who it is **not** for ("Job Placement is for candidates — employers hiring should start with Recruitment & Staffing"). Prevents the wrong-form problem.
- ✅ CTA: "Not sure which fits? Book a free consultation."
- ❌ Pricing table, feature-comparison matrix across our own services, per-service testimonials (save those for the detail pages)

---

### 4. Job Placement

*Job: convert an anxious job seeker. This is the highest-emotion page on the site.*

- ✅ **Hero** — "Get Placed, Not Just Applied" is doing its job, keep it. Subhead names the pain, not the service.
- ✅ **Cost, stated in the hero area, not buried in the FAQ.** "Free for candidates — employers pay our fee." It's the first question every candidate has and the FAQ answer at `faqs.json:job-placement[0]` already says it. Move it up.
- ✅ **What's Included** — the 6 tiles already written are strong; they name mechanisms
- ✅ **Process** — 5 steps, each with a realistic duration. Durations reduce anxiety and set expectations we can meet.
- ✅ **A "here's what changes" contrast block** — the qualitative version of the Netbounce comparison: *On your own:* applications into a void, no feedback, no idea why. *With us:* a named recruiter, feedback after every interview, introductions to employers expecting your resume. **No salary or timeline numbers in this block** unless verified.
- ✅ **Case study** — Situation / Approach / Result, as built. Real candidate, consented, first name or initials only.
- ✅ **FAQ** — cost, timeline, what happens if it doesn't work out, industries covered
- ❌ Salary claims ("candidates average $110K"), guaranteed-placement language, "we apply to 100 jobs for you" (volume is the thing we're positioning *against*), visa/immigration content, urgency banners

---

### 5. Recruitment & Staffing

*Job: convert an employer with a role open right now. Different reader — skims, wants terms.*

- ✅ **Hero** — "Hire Faster, Hire Right", employer-facing subhead
- ✅ **What's Included** — sourcing, screening & vetting, engagement models (contract / temp-to-perm / permanent), industry coverage
- ✅ **Industries list** — use `_data/industries.json`. Employers scan for their own sector before reading anything else. This is the Insight Global lesson.
- ✅ **Commercial terms, plainly stated** — contingency for permanent, flat markup on hourly contract, no retainer to start, replacement window. The FAQ already covers this well; surface it as a section. Employers who can't find terms assume they're bad.
- ✅ **Process** — Requirement Analysis → Sourcing → Screening → Client Interviews → Onboarding
- ✅ **Proof band** — time-to-fill and success rate, **only if tracked**. If not tracked, replace with "how we work" and drop the numbers entirely.
- ✅ **CTA** — "Tell us your hiring need", deep-linking to Contact with the Employer option pre-selected
- ❌ Actual rates or percentage fees (that's a conversation), client logos without permission, "24/7 support" unless staffed, headcount promises

---

### 6. Talent Acquisition

*Job: explain why this exists when we already sell staffing. If a visitor can't tell these apart, both pages fail.*

- ✅ **The differentiation block, high on the page** — one table or three bullets: *Staffing* fills a defined role from an existing pool, days-to-weeks, contingency. *Talent Acquisition* builds a pipeline for a role that doesn't have one, 6–10 weeks, retained, for senior/specialized/passive candidates. The FAQ answer at `faqs.json:talent-acquisition[0]` is the clearest sentence we've written — promote it to a section heading.
- ✅ **What's Included** — executive/specialized search, pipelining, market mapping, partnership model
- ✅ **Market mapping as the credibility asset** — describe the actual deliverable (who's in the market, where they sit, what they cost). Specificity is what justifies the premium framing.
- ✅ **Replacement guarantee** — 6-month, if genuinely offered
- ❌ Named executive placements, "C-suite" claims we can't evidence, a second industries list (link to the one on Staffing), overlapping copy with Staffing — every reused sentence weakens both pages

---

### 7. Background Verification

*Job: reassure. Also the most legally sensitive page — write conservatively.*

- ✅ **What We Verify** — employment history, education, references, identity, criminal record **where legally permitted**. That qualifier is non-negotiable; screening law varies by state and role.
- ✅ **Consent-first framing** — no check begins without written candidate consent. Say it early; it protects us and reassures candidates.
- ✅ **Turnaround** — 3–5 business days if we can meet it consistently
- ✅ **Data handling** — what we collect, how it's stored, how long it's retained, who sees it. Factual, no badges.
- ✅ **Process** — Request → Consent → Verification → Report Delivery
- ✅ **Scope flexibility** — basic employment check through full compliance-grade report
- ❌ ISO / GDPR / SOC 2 / FCRA-compliance badges unless certified and current; "100% accurate"; "instant" results; anything implying we adjudicate a candidate's suitability; any real report content or candidate example; legal advice on employer obligations

---

### 8. IT Training

*Job: sell a program to an early-career learner. Reads more like a course page than a service page.*

- ✅ **Hero** — "Train. Certify. Get Placed." with the accent CTA the PRD allows
- ✅ **Programs** — the 4 tracks in `_data/programs.json` with duration in the mono face. Add **format** (live online / in-person Chicago) and **prerequisites** per card — the two things a learner filters on before anything else.
- ✅ **The placement link — the differentiator** — "graduates get priority access to our Job Placement pipeline." Say *priority access*, never *guaranteed placement*. The existing FAQ wording nails this; reuse it verbatim.
- ✅ **Curriculum timeline** — Enroll → Learn → Practice → Certify → Placement Support
- ✅ **Cost handling** — say that payment plans exist and that pricing varies by track; give a range or a "request pricing" CTA. A page with zero price signal loses the price-sensitive reader entirely.
- ✅ **What "certification" means** — our completion certificate, or a vendor exam (AWS etc.)? Ambiguity here is the most common complaint about training providers. Be explicit.
- ❌ "Guaranteed job after graduation", placement-rate percentages for graduates specifically (small denominator, high scrutiny), instructor bios we can't verify, false-scarcity ("2 seats left"), employer logos framed as recruiting our graduates
- ⚠️ **Open question from the PRD, still open:** are these four tracks real, with real curricula and instructors, or placeholders? Everything above assumes real. If placeholder, this page ships as "Programs launching soon — join the waitlist" rather than with invented durations.

---

### 9. Contact

*Job: remove every reason not to send the form.*

- ✅ **"I am a…" toggle** — Job Seeker / Employer / Training Applicant, driving conditional fields (Employer → company name + role; Job Seeker → resume upload; Training → track of interest)
- ✅ **Minimum viable fields.** Name, email, the toggle, message. Every extra field costs submissions.
- ✅ **Response-time promise** — "within one business day", already in the contact FAQ. Put it next to the submit button, not only in the FAQ.
- ✅ **Non-form routes** — phone, email, hours, address. A meaningful share of employers will never use a form.
- ✅ **Map** — only if the Chicago office is real and visitable
- ✅ **Privacy line under the form** — one sentence: what we do with a submitted resume, and that we don't sell data
- ❌ Phone as a required field, "how did you hear about us" (ask later), CAPTCHA if a honeypot will do, a CTA band (the form *is* the CTA), a newsletter checkbox pre-ticked

---

## Part 4 — Shared components

**Header** — Home / About / Services ▾ / Contact + one CTA. `tel:` link on mobile. No "Careers", "Refer & Earn", or "Insights" until those pages exist and are maintained; a nav item leading to a thin page costs more than the missing item.

**Footer** — the 4 columns from the PRD, plus:
- ✅ Privacy Policy and Terms links — required in practice once we collect resumes
- ✅ Registered business name and year in the copyright line
- ❌ Newsletter signup unless someone actually sends the newsletter
- ❌ A second copy of the full nav

**CTA bands** — one action per band, verb-first, and the copy should differ per page (already handled via the `ctaHeadline` variables). Never two competing buttons.

---

## Part 5 — Before launch: what must be confirmed

Ordered by how much content depends on it.

1. **Every number in `_data/stats.json` and `_data/faqs.json`** — placements, partners, years, success %, time-to-fill (18/34 days), turnaround (3–5 days), program durations. Confirm or cut. This blocks Home, About, Staffing, and Background Verification.
2. **Testimonials** — do we have 4–6 real, consented quotes with names and roles? If no, Home ships without the section rather than with invented ones.
3. **Team photos** — determines whether About §5 exists at all.
4. **IT Training reality** — real tracks or waitlist page? (PRD open question, unanswered.)
5. **Fee model, in writing** — "employers pay, candidates never do" appears across Home, Job Placement, and Services. If there's any candidate-paid element, all three change.
6. **Commercial terms for employers** — contingency %, contract markup, replacement window. We don't publish the rates, but the *structure* needs confirming before Staffing and Talent Acquisition copy is final.
7. **Physical office** — real and visitable? Drives the map embed and the address in the footer.
8. **Client permission** — any employer who has agreed in writing to be named or logo'd. Without this, no logo wall.
9. **Privacy Policy + Terms** — needed before the resume upload goes live.
10. **Guarantees** — is there a replacement guarantee, a refund policy, a 90-day re-open? Each is currently asserted in an FAQ. Each needs to be a real policy.

**Deferred to phase 2** (deliberately, per the PRD): blog/Insights, resume ATS scorer, referral program, careers page, live placement feed.
