# Ordo Servorum Mariae (Servite Order) — Indonesia Website

Phase 1 static informational site for the Servite Order's Indonesia
community/province, built with [Astro](https://astro.build).

See [`CLAUDE.md`](./CLAUDE.md) for the full project brief, content rules,
and status of pending items (research brief, local Indonesia details, brand
assets).

## Project structure

```text
/
├── src/
│   ├── content/
│   │   └── pages/       # Markdown copy for every page (edit text here)
│   ├── content.config.ts  # Content collection schema
│   ├── layouts/          # BaseLayout (html shell) and PageLayout (article)
│   ├── components/        # Header, Footer, PlaceholderNotice
│   ├── pages/             # One .astro route per site page
│   └── styles/global.css  # Palette, typography, layout — all site styling
└── public/
```

All page copy lives in `src/content/pages/*.md` as plain markdown with
frontmatter (`title`, `description`, `navLabel`, `navOrder`, `showInNav`,
`placeholder`). Non-developers can edit this text directly without touching
any component code. Pages currently marked `placeholder: true` contain
`TODO` notes only, pending the research brief and Indonesia-specific
details — see `CLAUDE.md`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                       |
| :------------------- | :-------------------------------------------- |
| `npm install`        | Installs dependencies                         |
| `npm run dev`         | Starts local dev server at `localhost:4321`  |
| `npm run build`       | Build the static site to `./dist/`           |
| `npm run preview`     | Preview the production build locally          |
