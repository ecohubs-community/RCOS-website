# RCOS website: frontend

How the pages and components are built. For where the content comes from, see
[BACKEND.md](./BACKEND.md).

Stack: SvelteKit 2 with Svelte 5 runes, Tailwind CSS v4, bits-ui (headless
dialogs, popovers, accordions, tabs, command palette), Paraglide JS 2 for UI
strings, unplugin-icons with Tabler icons, MiniSearch for search. Fonts are
self-hosted from `@fontsource` (Stack Sans Text, Stack Sans Headline, Pridi).

## 1. Rules

- **Tailwind classes**, not inline styles or `<style>` blocks. **Svelte**, not
  plain DOM JavaScript. Exceptions are allowed only where Tailwind or Svelte
  cannot do it, with a comment that says why (for example the pre-paint script
  in `app.html`).
- The **sidebar (contents rail) appears only inside the standard**
  (`/standard/…`). Other pages have no sidebar.
- Pages get **finished data** from their `+page.server.ts`: HTML is rendered,
  links are resolved and localized at prerender time. Components do not parse
  markdown or YAML.
- UI text is a **Paraglide message** (`m.key()` from `$lib/paraglide/messages.js`),
  never a hard-coded string. Add the key to all five `messages/<locale>.json`.
- **SEO**: every page has a unique title, a description, a canonical URL,
  `hreflang` alternates and JSON-LD where it fits (`SEO.svelte`,
  `src/lib/utils/jsonld.ts`). `pnpm check:links` enforces this. `SEO.svelte`
  cuts descriptions at about 155 characters on a word and drops the " - RCOS"
  suffix when the title would pass 60 characters, so pass the full text. Pages
  that should not be indexed (search, print view, placeholder chapters without
  sections) pass `noindex` (`noindex, follow`) and stay out of the sitemap.
  Articles carry `datePublished`/`dateModified` from git (`datesOf` in
  `src/lib/server/docs.ts`).
- **Accessibility**: WCAG 2.1 AA in light and dark mode, checked by axe in
  `tests/e2e/a11y.test.ts`. Use the colour tokens below; they are tuned for
  contrast.

Use the Svelte MCP server (see `AGENTS.md`) for Svelte 5 and SvelteKit
questions, and run `svelte-autofixer` on new components.

## 2. Routes

All pages live under `src/routes/[[lang=lang]]/`; English has no prefix, other
locales are `/de/…`, `/es/…`, `/fr/…`, `/pt-br/…` (`src/params/lang.ts`).

| Route (in `(app)/`)                                          | Page                                                           |
| ------------------------------------------------------------ | -------------------------------------------------------------- |
| `+page.svelte`                                               | Home                                                           |
| `standard/[...path]`                                         | The standard reader: core chapters, appendices, about, modules |
| `standard/jump`                                              | Clause jump (`§2.3` → its page and anchor)                     |
| `templates`, `templates/[layer]`, `templates/[layer]/[name]` | Templates hub, per layer, one template                         |
| `layers`, `layers/[slug]`                                    | Layer guides                                                   |
| `stress-tests`, `stress-tests/[slug]`                        | Stress tests, grouped by layer                                 |
| `toolkit`, `toolkit/[slug]`                                  | Self-assessment, facilitation worksheet                        |
| `safeguards`, `safeguards/[slug]`                            | Safeguards                                                     |
| `reference-implementations`, `library`, `data`, `search`     | Other hubs; `data` documents the published data                |
| `articles/[...slug]`                                         | Redirects only (old URLs)                                      |

Outside `(app)`: `(print)/standard/core/0.1/print` (the print view used for the
PDF), `search-index/[lang].json`, `sitemap.xml`, `robots.txt`, `llms.txt`
(a plain-text map of the site for language models, built from the same data).
Icons and the web manifest are static files (`favicon.ico`, `favicon.svg`,
`apple-touch-icon.png`, `icon-*.png`, `site.webmanifest`).

`(app)/+layout.svelte` holds the site shell: header, footer, consent banner,
analytics and the search palette.

## 3. Components (`src/lib/components/`)

| Folder                                | Contents                                                                                                                                                                                                                     |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `shell/`                              | `SiteHeader` with the mega menus (`MegaStandard`, `MegaLayers`, `MegaToolkit`), `MobileDrawer`, `SiteFooter`, `HeaderSearch`, `ThemeToggle`. Links come from `src/lib/nav/site-nav.ts`.                                      |
| `standard/`                           | The reader: `Clause`, `ClauseText`, `KeywordChip`, `Term` (glossary popover), `ContentsRail`, `IconRail`, `OnThisPage`, `RelatedRail`, `GuideSheet`, `SectionFooter`, `ReadingModeToggle`, `StandardDownloads`, `ClauseJump` |
| `site/`                               | `PageHeader`, `MarkdownPageView`, `CoverageMatrix`, `SelfAssessment`, `SeverityDot`                                                                                                                                          |
| `search/`                             | `SearchPalette` (⌘K / Ctrl+K) and its state                                                                                                                                                                                  |
| `home/`                               | `LayerRings`                                                                                                                                                                                                                 |
| `templates/`                          | `TemplateDownloads`                                                                                                                                                                                                          |
| `ui/`                                 | `Prose` (renders trusted HTML with typography styles), `LayerChip`                                                                                                                                                           |
| `consent/`, `embed/`, `seo/`, `i18n/` | Consent banner and GA4, click-to-load embeds, `SEO`, language switcher and fallback banner                                                                                                                                   |

### 3.1 The standard reader

- Rule text is tokenized on the server. `ClauseText` renders the parts:
  keywords as `KeywordChip`, the first use of a glossary term per section as
  `Term`, layer mentions as links.
- `standard/context.ts` passes the page's glossary and layer names to rule text
  through Svelte context.
- **Reading mode** (`reading.svelte.ts`): "Guided" shows the "In short" strips
  and the guide buttons; "Spec only" hides them. The guide sheet
  (`guide.svelte.ts`, `GuideSheet`) shows the guidance for one section.
- **Rail** (`rail.ts`): `[` collapses and expands the contents rail.
- `spy.svelte.ts` marks the section in view for both rails: the last one whose
  top has passed its scroll margin (where a jump lands), or, at the end of the
  page, the one named in the URL.
- The right column holds only "On this page". The "Related to Layer N" card
  (`RelatedRail`) closes the chapter, with Templates and Stress tests in
  `<details>` that start collapsed.

### 3.2 State that must exist before first paint

`src/app.html` reads `localStorage` and sets classes on `<html>` before the
page paints, so nothing jumps:

| Class            | Set from                  | Used by                     |
| ---------------- | ------------------------- | --------------------------- |
| `dark` / `light` | `theme` (else system)     | dark mode (`@variant dark`) |
| `rail-collapsed` | `rcos-rail`               | contents rail               |
| `guided`         | `rcos-reading`            | reading mode                |
| `consent-known`  | consent cookie or storage | hides the consent banner    |

Change the storage key in both places if you rename one.

## 4. Styling

Tokens are in `src/lib/styles/theme.css` (`@theme`).

- **Use the role tokens**: `bg-paper`, `bg-paper-2`, `bg-card`, `border-line`,
  `text-ink`, `text-ink-2`, `text-ink-muted`, `text-ink-faint`, `text-heading`,
  `text-link`, `text-accent-ink`, `bg-brand`, `bg-tile`, the guide colours
  (`guide-*`), keyword colours (`kw-*`), `layer-0…6` with `layer-ink-0…6`, and
  `severity-*`. They use `light-dark()`, so they work in both modes without
  `dark:` variants.
- The older palette (`forest-*`, `soil-*`, `clay-*`, `primary`, `text-text-*`,
  `surface`, …) is still used in places. Prefer role tokens in new code.
- **Keep `--max-width-*` and `--spacing-*`**: in Tailwind v4, `max-w-xl` looks
  up `--max-width-xl` first, then `--spacing-xl`. Removing one changes widths.
- **Stacking**: use `z-(--z-sticky)`, `z-(--z-header)`, `z-(--z-drawer)`,
  `z-(--z-popover)` and the others defined in `theme.css`; no raw `z-50`.
- Focus rings come from a base rule; add `focus-visible:` utilities only for a
  different shape.
- Prose (rendered HTML) uses `Prose.svelte` with the typography plugin;
  tables scroll horizontally on small screens.

## 5. Search

`src/lib/server/search.ts` builds one index per locale at build time
(`/search-index/<lang>.json`). `src/lib/search/engine.ts` loads MiniSearch
lazily the first time the palette or `/search` opens; `grouped()` groups the
results by kind (`components/search/kinds.ts`).

## 6. Testing

- `pnpm test:unit` (Vitest) for server and content code.
- `pnpm test:e2e` (Playwright, port 4371) runs `tests/e2e/smoke.test.ts` and
  `a11y.test.ts` against a build. Run `pnpm build` first.
- `pnpm check:links` after a build.

## 7. Adding a page

1. Content about the standard: add YAML (see BACKEND.md) and a route under
   `(app)/` with a `+page.server.ts` that calls the loader in
   `src/lib/server/site.ts` or `standard.ts`.
2. Other pages: write the copy as Paraglide messages in a Svelte page. Long
   prose that is not about the standard can go in `content/pages/<key>.md`;
   add the key to `PAGE_KEYS` (`src/lib/server/pages.ts`).
3. Add `entries()` with `localeEntries()` so every locale is prerendered.
4. Set the title, description and JSON-LD; run `pnpm build && pnpm check:links`.
