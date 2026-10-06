# RCOS website: content and build

How the content is stored, checked, turned into pages and downloads, and
published. For the pages and components, see [FRONTEND.md](./FRONTEND.md). For
translating, see [docs/translation-workflow.md](../docs/translation-workflow.md).

The site has no server at runtime. Every page is prerendered at build time
(SvelteKit + `@sveltejs/adapter-vercel`), and redirects are static Vercel
routes.

## 1. Content: YAML is the source

Everything about the standard is YAML under `content/`. Markdown, docx, odt,
PDF and the data RCOS Compass uses are **generated** from it. Do not add new
markdown content.

| Folder                                          | What                                                                                                            | Schema kind           |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------- |
| `content/standard/rcos-core/0.1/chapters/`      | The core standard: chapters with sections, clauses, rationale, glossary (Appendix A)                            | `chapter`, `glossary` |
| `content/standard/rcos-core/`                   | About page and version page                                                                                     | `doc`                 |
| `content/standard/modules/`                     | Optional modules (permaculture, minimal permaculture)                                                           | `chapter`             |
| `content/standard/rcos-core/0.1/ownership.yaml` | Which template section answers which clause (one owner per MUST clause)                                         | —                     |
| `content/templates/layer-N/`                    | The 29 templates (artifacts): sections with clauses, rationale, instructions and fill-in markdown               | `template`            |
| `content/layers/`                               | One guide per layer                                                                                             | `doc`                 |
| `content/stress-tests/`                         | 24 stress tests (failure scenarios), with `layers`, severity and the templates that prevent them                | `doc`                 |
| `content/guidance/rcos-core/0.1/layer-N.yaml`   | Reader guidance: "In short" and questions per spec section; question, prompts and examples per template section | `guidance`            |
| `content/pages/**.md`                           | The few pages that are still markdown: hub intros, toolkit, safeguards, reference implementations               | frontmatter           |

Page copy that is not about the standard (home page, hub chrome, buttons) is in
the Paraglide message files `messages/<locale>.json`, not in `content/`.

### 1.1 Translations are overlays

Each English file `<name>.yaml` has one sibling per locale, `<name>.<locale>.yaml`
(`de`, `es`, `fr`, `pt-br`). An overlay holds only the translated text, keyed by
section, clause or block id, plus `lang` and `sourceHash`.

- `src/lib/content/overlay.js`: `split(en, translated)` makes an overlay, `merge(en, overlay)` puts it back. `TRANSLATABLE` lists the fields that are text.
- `src/lib/content/hash.js`: `sourceHashOf(doc)` is the MD5 of the English translatable text. If it differs from the overlay's `sourceHash`, the translation is outdated.
- Markdown pages use `<key>.<locale>.md` and are hashed by the English file's MD5.
- Glossary overlays may list `aliases` per term (plural and inflected forms), so a term is found in running text in that language.

### 1.2 Typed links

Prose links to other content with `rcos:` references, not with paths, for example
`[Layer 2](rcos:§4.1)`. `src/lib/content/refs.js` resolves them per target:
a localized site URL, an absolute URL in downloads, or plain text in the
Compass data.

### 1.3 Schemas and checks

- `src/lib/content/schema.js` (zod): the shape of every document kind and of overlays.
- `pnpm content:check` (`scripts/content/check.mjs`) validates everything under `content/`:
  shape, overlays merge cleanly, refs resolve, clause ownership is complete,
  guidance exists in every locale, translated keywords are present (MUST →
  MÜSSEN, …), "Layer" is translated, and guidance has no capitalised RFC keywords.
- `src/lib/content/published-schema.js`: the schema of the published data
  (`schema.json`), see §4.

## 2. From content to pages

All of this runs at prerender time; pages receive finished HTML and data.

| Module                         | Does                                                                                                       |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `src/lib/content/load.js`      | Reads the YAML (`loadDocuments`, `loadGuidance`) and merges overlays                                       |
| `src/lib/server/docs.ts`       | `loadStore()`: every document with its translations, guidance, ownership and link targets, loaded once     |
| `src/lib/content/tokenize.js`  | Splits clause text into keywords (MUST, DARF NICHT, …), layer mentions and the first use of glossary terms |
| `src/lib/content/render.js`    | Markdown to HTML with `marked`                                                                             |
| `src/lib/server/standard.ts`   | The standard reader: pages, contents rail, related items, print view, guidance per section                 |
| `src/lib/server/site.ts`       | Templates, layer guides, stress tests and their hubs; coverage matrix                                      |
| `src/lib/server/pages.ts`      | The markdown pages in `content/pages` (marked, with GitHub-style heading ids)                              |
| `src/lib/server/assessment.ts` | The stress-test self-assessment, grouped by layer                                                          |
| `src/lib/server/search.ts`     | The search index per locale, served as `/search-index/<lang>.json`                                         |
| `src/lib/server/redirects.ts`  | Old `/articles/…` URLs to new routes                                                                       |
| `src/lib/content/routes.js`    | `standardRoute`, `siteRoute`, `PAGE_ROUTES`: where each document lives                                     |

Prerender entries come from `src/lib/server/entries.ts` (`localeEntries`: the
default locale unprefixed, others under `/<lang>/`).

## 3. URLs and redirects

- English has no prefix (`/standard/core/0.1/…`); other locales are `/<lang>/…`.
- Every URL of the markdown era (`/articles/…`, `?id=…`) redirects permanently
  (308). The map is built from the content (`legacyPath` of each document) and
  `PAGE_ROUTES`. `src/lib/server/legacy-urls.json` snapshots the old URL list;
  `redirects.test.ts` checks that every one of them still redirects.
- `src/hooks.server.ts` serves the redirects in dev; at build time they become
  static Vercel routes (prerendered `articles/[...slug]`).
- Old heading anchors keep working: pages carry the old ids as extra anchors
  (`legacyAnchors`).
- **Keep these redirects for good.** Old URLs live in downloaded docx files,
  videos and Compass.

## 4. Downloads and the Compass data

Generated files are committed under `static/downloads/`. Regenerate them after
a content change:

```bash
pnpm build:downloads   # templates + core markdown + standard data
pnpm content:pdf       # the PDF of the standard (needs a running build, Playwright)
pnpm content:og        # share images of the important pages (after pnpm build; build again after)
```

| Script                               | Writes                                                                                                                  |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `scripts/content/build-articles.mjs` | `.content-build/articles/**.md` from the YAML (input for the scripts below)                                             |
| `scripts/build-templates.mjs`        | Per-locale template files (md, docx, odt via pandoc) and zip bundles, `manifest-templates.json`                         |
| `scripts/build-core.mjs`             | The whole core standard as one markdown file per locale, `manifest-core.json`                                           |
| `scripts/build-standard-data.mjs`    | The published data in `static/downloads/standard/rcos-core/0.1/` plus `manifest-standard.json`                          |
| `scripts/content/build-pdf.mjs`      | `static/downloads/<locale>/rcos-core-v0-1.pdf`, printed from the print route                                            |
| `scripts/content/build-og.mjs`       | `static/og/<locale>/<path>.jpg` (1200×630 share cards for hubs, layer chapters and guides) and `src/lib/og-images.json` |

`scripts/i18n.mjs` holds the strings that appear inside downloaded files
(preamble labels, "Rationale", …) and `SUPPORTED_LOCALES`.

### 4.1 The Compass contract

RCOS Compass (`ecohubs-community/RCOS-compass`) vendors the published data by
sha256 (`standard/upstream-manifest.json` there):

- `clauses.yaml`, `sections.yaml`, `artifacts.yaml`, `glossary.yaml`, `meta.yaml`, `specSections.yaml`, `schema.json`
- one file per kind, all locales inline (`i18n: {en, de, …}`)
- template sections carry `question`, `prompts` and `examples`; `specSections.yaml` carries "In short" and the reader questions. Compass keeps only `effort` and `dependsOn` in its own `annotations.yaml`.

To update Compass: regenerate here, copy the files listed in
`manifest-standard.json` and the manifest itself into Compass `standard/`, and
run `pnpm check:standard` there. Never edit the vendored copy.

`published-schema.test.ts` guards the contract. Adding fields is safe; renaming
or removing one breaks Compass, so change both repos together.

## 5. Checks and CI

| Command                   | Checks                                                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `pnpm content:check`      | Content (see §1.3)                                                                                                   |
| `pnpm test:unit`          | Vitest: loaders, tokenizer, routes, redirects, search, JSON-LD, published schema                                     |
| `pnpm check`              | svelte-check / TypeScript                                                                                            |
| `pnpm check:links`        | After `pnpm build`: every link and anchor resolves; every page has a unique title, a description and a canonical URL |
| `pnpm test:e2e`           | Playwright smoke tests and axe (WCAG 2.1 A/AA, light and dark) on port 4371                                          |
| `pnpm check:translations` | Which translations are missing or outdated                                                                           |
| `pnpm check:i18n`         | Missing or untranslated keys in `messages/<locale>.json`                                                             |

GitHub workflows:

- `site.yml`: type check, lint, unit tests, build, link check, e2e and axe.
- `content.yml`: content check, unit tests, and generated downloads are current.
- `check-translations.yml`: posts translation coverage on PRs (never blocks).

## 6. Deployment

Vercel builds with `pnpm build`. Set `PUBLIC_APP_URL` to the site URL (it is
used for canonical URLs, the sitemap and JSON-LD). `src/lib/config/site.ts`
holds the site name and the public URL that files leaving the site link to.
