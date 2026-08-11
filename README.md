# Ordo Servorum Mariae (Servite Order) — Indonesia Website

Static informational site plus a News & Blog upload tool for the Servite
Order's Indonesia community/province, built with
[Astro](https://astro.build) and [Decap CMS](https://decapcms.org).

See [`CLAUDE.md`](./CLAUDE.md) for the full project brief, content rules,
and status of pending items (local Indonesia details, brand assets,
hosting).

## Project structure

```text
/
├── public/
│   ├── admin/            # Decap CMS admin UI (index.html + config.yml)
│   └── uploads/           # Post photos uploaded through the CMS
├── src/
│   ├── content/
│   │   ├── pages/         # Markdown copy for every static page
│   │   └── posts/          # News & Blog posts (managed via /admin/)
│   ├── content.config.ts    # Content collection schemas
│   ├── layouts/             # BaseLayout (html shell) and PageLayout
│   ├── components/           # Header, Footer, PlaceholderNotice
│   ├── pages/                 # One route per site page, incl. news/[slug]
│   └── styles/global.css      # Palette, typography, layout — all styling
```

All static page copy lives in `src/content/pages/*.md` as plain markdown
with frontmatter (`title`, `description`, `navLabel`, `navOrder`,
`showInNav`, `placeholder`). Pages marked `placeholder: true` contain
`TODO` notes pending real content — see `CLAUDE.md`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                          |
| :---------------- | :------------------------------------------------ |
| `npm install`      | Installs dependencies                              |
| `npm run dev`       | Starts local dev server at `localhost:4321`       |
| `npm run cms`        | Starts the local Decap CMS backend proxy          |
| `npm run build`       | Build the static site to `./dist/`               |
| `npm run preview`      | Preview the production build locally            |

## Using the News & Blog admin (Phase 2)

The admin panel lives at `/admin/`. To use it locally, run **two**
terminals:

```bash
npm run dev
```

```bash
npm run cms
```

Then open `http://localhost:4321/admin/` in a browser (note: in `astro dev`
specifically, the bare `/admin/` URL 404s due to a dev-server-only quirk
with directory index files — use `http://localhost:4321/admin/index.html`
instead when testing locally; the plain `/admin/` URL works correctly on
the built/deployed site). Posts are created with a Title, Publish Date,
optional Photo, a **Published** toggle, and a Body (rich text/markdown). A
post only appears on the public `/news/` page once **Published** is
turned on — leave it off to draft/preview first.

Saving a post writes a new markdown file straight to
`src/content/posts/` via a local, unauthenticated proxy (`decap-server`) —
no login is required in this local setup, and no git commit is made
automatically (commit it yourself, or via your usual workflow).

If `src/content/posts/` is empty when you start `npm run dev`, adding the
very first post won't appear on the site until you restart the dev
server once (a one-time content-collection quirk when a watched folder
starts out empty). Every post after that hot-reloads normally.

**This is a local-only setup for now.** `public/admin/config.yml` is
configured with decap-server's `proxy` backend, since no hosting/auth
provider has been chosen yet (see `CLAUDE.md`). This backend has **no
authentication** and must never be pointed at a public site. Once a host
is picked, swap the `backend` block in that file for a real backend
(GitHub OAuth, or Netlify Identity + Git Gateway if hosting on Netlify) so
the Priest can log in and post from the live site instead of a local
machine.
