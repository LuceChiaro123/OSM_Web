# Project: Ordo Servorum Mariae (Servite Order) Website

## What this is
A public informational website for the **Servite Order's Indonesia
community/province** (O.S.M.), part of a Catholic mendicant religious
order founded in 1233. This is a local-community site, not a global-order
site — the global history/spirituality content applies, but "Our
Communities," contact info, and any local ministries are specific to
Indonesia and are TBD (user will provide).

Phase 1 is a static content site. Phase 2 (later, separate task) adds a
simple blog/news upload feature that a Priest will use directly — so it
must stay very easy to use.

Full research content lives in `servite-order-website-brief.md` in this
repo — read it before generating any page copy. Do not invent historical
facts, dates, or theological claims; use only what's in that brief, and
flag anything you're unsure of instead of guessing. Do not invent
Indonesia-specific local details (address, contact, local ministries) —
leave clearly marked placeholders until the user provides them.

## Status
Phase 1 only right now: static informational site. Do NOT build the blog/
auth/CMS yet unless explicitly asked — get the static site right first.

## Tech stack (default choice — confirm with user before changing)
- **Framework:** Astro (fast, content-focused, ships minimal JS — good fit
  for a mostly-static site run by non-technical maintainers)
- **Content:** Markdown files via Astro Content Collections for pages
- **Styling:** plain CSS or Tailwind — keep it simple, no heavy UI framework
- **Hosting target:** none yet — build and run locally for now (`astro
  dev` / local preview). Don't set up deploy config or pick a host until
  the user decides; keep the project host-agnostic (plain static output)
  so it can deploy anywhere later.
- **Phase 2 blog (future):** single admin account only — one Priest (or
  one shared login) uploads posts. Do NOT build multi-user accounts, 
  roles, or a sign-up flow. A simple single-login admin form (title,
  photo, body, publish toggle) is enough; a lightweight headless CMS
  with one editor seat (e.g. Decap CMS) is a good fit and avoids
  building custom auth from scratch.

## Design direction
- No official brand assets confirmed yet (logo/colors) — see "Open
  questions" below. Until confirmed, use a restrained palette that nods to
  the order's black habit and Marian devotion (e.g. deep black/charcoal +
  a muted gold or deep red accent) rather than inventing a "brand."
- Tone: reverent, simple, uncluttered. Avoid stock "corporate" templates —
  this is a religious order's site, not a business.
- Must be usable and readable by an older, non-technical audience
  (priests, parishioners) — larger text, clear navigation, no gimmicks.

## Site structure (v1)
1. Home — mission/motto, feast day banner, links to key sections
2. About the Order — founding story, Seven Holy Founders, timeline
3. Spirituality — four pillars, Our Lady of Sorrows, black habit meaning
4. The Servite Family — friars, nuns, sisters, secular order/institutes
5. Notable Figures / Saints
6. Our Communities — Indonesia community; placeholder content until local
   address/contact/ministry details are provided
7. News & Blog — placeholder page only in Phase 1 (build in Phase 2)
8. Vocations — how to join / contact
9. Contact / Find a Community
10. Prayer Resources — placeholder; do not write liturgical/prayer texts
    yourself, these need to come from the Order directly

## Language
Target language for the live site is **Bahasa Indonesia** — but that
translation/content pass happens **later**. For now, build and scaffold
the site with English placeholder copy (from the research brief), using
a content structure that makes swapping in Bahasa Indonesia text
straightforward later (e.g. keep all page text in content files/markdown,
not hardcoded in components, so it's easy to translate page-by-page).
Don't build a full i18n/multi-locale system yet unless asked — just keep
content cleanly separated from layout so the translation pass is simple
when it happens.

## Decided
- Scope: Servite Order, Indonesia community/province
- Phase 2 blog: single admin login, no multi-user system
- Hosting: local/dev only for now, no provider chosen yet

## Still pending — use clearly marked placeholders, don't invent these
- Local Indonesia community details: address, contact info, ministries,
  any local history beyond the global founding story
- Official logo / crest / brand colors — using a default Marian/black-
  habit palette until provided (see Design direction)
- Photos — using placeholder imagery until licensed/owned photos are
  provided
- Hosting provider — decide when ready to go live
- Whether Seven Sorrows prayers/liturgical texts get reproduced on-site —
  don't write these; must come from the Order directly
- Multilingual requirements (Indonesian / English / Latin?)

## Working conventions
- Keep components small and content-driven; non-developers may eventually
  need to edit copy in markdown files directly
- Don't add dependencies without a clear reason — this needs to stay
  maintainable by whoever inherits it, who may not be a developer
- Confirm before scaffolding the blog/CMS layer — it's a separate phase
