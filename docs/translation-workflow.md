# Translation workflow

How to translate RCOS content, for people and AI agents. For how the content is
stored, see [specs/BACKEND.md](../specs/BACKEND.md). The original design notes
are in [specs/TRANSLATION.md](../specs/TRANSLATION.md) (historical).

Locales: `en` (source, American English), `de`, `es` (neutral, not Castilian),
`fr`, `pt-br`. Replace `<locale>` below with one of them.

## What gets translated, and where it lives

| Content                                                    | Source (English)                                                  | Translation                     |
| ---------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------- |
| Standard, templates, layer guides, stress tests            | `content/{standard,templates,layers,stress-tests}/**/<name>.yaml` | `<name>.<locale>.yaml` overlay  |
| Guidance ("In short", questions, prompts, examples)        | `content/guidance/rcos-core/0.1/layer-N.yaml`                     | `layer-N.<locale>.yaml` overlay |
| Hub intros, toolkit, safeguards, reference implementations | `content/pages/**/<key>.md`                                       | `<key>.<locale>.md`             |
| UI strings and page copy of Svelte pages                   | `messages/en.json`                                                | `messages/<locale>.json`        |
| Strings inside downloaded files                            | `scripts/i18n.mjs`                                                | same file, one entry per locale |

An overlay holds only the translated text, keyed by id, plus `lang` and
`sourceHash`. `sourceHash` records which English text was translated; when the
English changes, the translation shows as **outdated**.

## Terms to keep consistent

- **RFC keywords** stay in capitals and use the agreed forms, e.g. German
  MUSS / MÜSSEN / DARF NICHT / SOLLTE / KANN. `tokenize.js` (`KEYWORDS`) lists
  every form per locale; `pnpm content:check` fails when a translated clause
  lost a keyword.
- **Layer N** is always Schicht N / Capa N / Couche N / Camada N.
- **Glossary terms**: translate the term in the glossary overlay. If the term
  appears inflected or in the plural in running text, add those forms as
  `aliases` on the term in the glossary overlay, so the reader marks it.
- Guidance never uses capitalised RFC keywords; it explains, it does not
  require.

## 1. See what needs translating

```bash
pnpm check:translations -- --locale <locale>
```

Lists every file as `MISSING`, `OUTDATED` or `UP-TO-DATE`.

## 2. Translate with the script

`scripts/translate.mjs` translates missing and outdated files with an LLM and
writes the overlay or markdown file. It picks a backend from the environment:
`ANTHROPIC_API_KEY` → Anthropic API, else `GEMINI_API_KEY` → Gemini, else the
local `claude` CLI. Override with `--provider anthropic-api|gemini|claude-cli`
and `--model <id>`.

```bash
pnpm translate -- --locale <locale> --only <path-part> --dry-run   # list what would run
pnpm translate -- --locale <locale> --only <path-part>             # translate
```

- `--only` matches part of the source path, e.g. `templates/layer-2`,
  `stress-tests`, `guidance`, `chapters/03`.
- `--force` re-translates files that are up to date.
- YAML goes to the model as markdown (guidance as JSON) and comes back into the
  overlay. A reply whose structure differs from the English is rejected, so
  nothing half-translated is written.

To translate or fix by hand, edit the overlay (or copy one from another
language and replace the text). For an outdated file, `pnpm check:translations`
prints the old and the current hash (`sourceHash: old → current`); once the
text matches the English again, set `sourceHash` to the current one.

## 3. Check

```bash
pnpm content:check                                # overlays merge, keywords, layer words
pnpm check:translations -- --locale <locale>      # nothing missing or outdated
pnpm check:i18n                                   # UI message keys complete
```

Then read a few pages in the browser (`pnpm dev`, open `/<locale>/…`). A page
that is not translated shows the English text with a notice.

## 4. Regenerate downloads and commit

```bash
pnpm build:downloads     # template files, core markdown, published data
git add content messages static/downloads
git commit -m "Translate <scope> to <language>"
```

The PDF is rebuilt with `pnpm content:pdf` (needs a build and Playwright).

## 5. Review

Machine translations need a native speaker's review before they count as
final. Review the guidance and the clause wording first: they are what people
act on.

## Adding a new locale

1. `project.inlang/settings.json` `locales`, and `messages/<code>.json` (copy `en.json`, translate).
2. `src/lib/i18n/languages.ts` `LOCALES` (the router, sitemap and language switcher follow it).
3. The locale lists in `src/lib/content/schema.js` (overlay `lang`), `src/lib/content/published-schema.js`, `scripts/content/check.mjs` and `scripts/i18n.mjs` (`SUPPORTED_LOCALES` and the download strings).
4. Keywords and the layer word in `src/lib/content/tokenize.js` (`KEYWORDS`, `LAYER_WORD`), the clause prefix in `src/lib/content/template.js`, and the Open Graph locale in `src/lib/components/seo/SEO.svelte`.
5. `scripts/translate.mjs`: the language name and the term rules in the prompt.
6. Translate everything (steps 1–4 above), then run all checks and `pnpm build`.
