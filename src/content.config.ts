// Content collection definitions.
//
// All page copy lives in markdown files under `src/content/pages/` so that
// non-developers can eventually edit it directly, and so the future Bahasa
// Indonesia translation pass can be done file-by-file without touching any
// component code. See CLAUDE.md for the project's content rules.

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    // Page <title> / H1
    title: z.string(),
    // Short summary used for <meta name="description">
    description: z.string(),
    // Label shown in the main navigation
    navLabel: z.string(),
    // Sort order in the main navigation (lower = earlier)
    navOrder: z.number(),
    // Whether this page appears in the main navigation at all
    showInNav: z.boolean().default(true),
    // True while this page still contains placeholder copy awaiting the
    // research brief and/or Indonesia-specific details from the user.
    // Drives the visible "placeholder" notice on the page.
    placeholder: z.boolean().default(false),
    // Home page only: motto and feast day, shown in the hero/feast banner.
    motto: z.string().optional(),
    feastDay: z.string().optional(),
  }),
});

export const collections = { pages };
