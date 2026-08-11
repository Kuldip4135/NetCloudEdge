# Image credits & replacement notes

All photos sourced from [Unsplash](https://unsplash.com) under the Unsplash License
(free for commercial use, no attribution required — credit below is courtesy).

## Environment / context photos — safe to keep

| File | Unsplash photo ID |
|---|---|
| `hero-team-meeting.jpg` | `1521737604893-d14cc237f11d` |
| `office-collaboration.jpg` | `1552664730-d307ca884978` |
| `interview-conversation.jpg` | `1600880292203-757bb62b4baf` |
| `team-at-desk.jpg` | `1522071820081-009f0129c71c` |
| `workspace-open-office.jpg` | `1497032628192-86f99bcd76bc` |

These five back the Home, About, and Services-overview covers. They used to back the
five service detail pages too — four photos across five pages, one of them used twice.

## Service-page photos — not in this folder

Service imagery now lives in [`src/_data/images.json`](../../../_data/images.json) and is
loaded straight from the Unsplash CDN rather than committed here. Photo IDs, alt text,
and captions are all recorded in that file, one entry per slot.

Because they render from an external host, a photo withdrawn from Unsplash becomes a
broken image with no build-time warning. If that matters more than the convenience,
download each `url`, put the files under `src/assets/images/services/<page>/`, and change
`url` to the local path — the cover-sheet partial already accepts either form.

## Portrait photos — REPLACE BEFORE LAUNCH

`person-*.jpg` are stock portraits standing in for candidate testimonials.

**These are not the people quoted.** Attaching a stock face to a named
testimonial misrepresents a real person's endorsement. Before this site goes
live, either:

1. replace each with a real photo of the actual candidate, with their written
   consent to use their name, likeness, and quote; or
2. drop the photos and fall back to the initials-avatar treatment (the shared
   `testimonial-card.njk` partial already supports this).

The same applies to `_data/placements.json` — the placement feed is placeholder
data. Never publish a candidate's name, employer, or compensation without
written permission.
