import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { parseChapter, emitChapter } from './chapter.js';
import { parseTemplate, emitTemplate } from './template.js';
import { parseGlossary, emitGlossary } from './glossary.js';
import { parseDoc, emitDoc } from './doc.js';
import { split, merge } from './overlay.js';
import { headingSlug } from './markdown.js';

const CONTENT = path.resolve('content');
const LOCALE_FILE = /\.(de|es|fr|pt-br)\.yaml$/;

function walk(dir: string): string[] {
	return readdirSync(dir).flatMap((f) => {
		const p = path.join(dir, f);
		return statSync(p).isDirectory() ? walk(p) : [p];
	});
}

type Doc = Record<string, any>;
const english = ['standard', 'templates', 'layers', 'stress-tests']
	.flatMap((d) => walk(path.join(CONTENT, d)))
	.filter((f) => f.endsWith('.yaml') && !LOCALE_FILE.test(f) && !f.endsWith('ownership.yaml'))
	.map((file) => ({ file, doc: yaml.load(readFileSync(file, 'utf8')) as Doc }));

// Clause links, as build-articles derives them.
const hrefs = new Map<string, string>();
for (const { doc } of english) {
	if (doc.kind !== 'chapter' || !/^rcos-core\/v0-1\/0[2-8]-/.test(doc.legacyPath)) continue;
	const slug = path.basename(doc.legacyPath).replace(/^\d\d-/, '');
	for (const s of doc.sections)
		for (const b of s.blocks)
			if (b.kind === 'clause') hrefs.set(b.ref, `/x/${slug}#${headingSlug(`${s.ref} ${s.title}`)}`);
}
const href = (ref: string) => hrefs.get(ref) ?? `missing:${ref}`;

/** Emit a document to markdown and parse it back, the way the site reads it. */
function roundTrip(doc: Doc, locale: string, ids?: Doc): Doc {
	switch (doc.kind) {
		case 'chapter':
			return parseChapter(emitChapter({ intro: doc.intro ?? '', sections: doc.sections ?? [] }));
		case 'template':
			return parseTemplate(
				emitTemplate({ preamble: doc.preamble ?? '', sections: doc.sections }, locale, href),
				locale,
				href,
				ids?.sections.map((s: Doc) => s.id)
			);
		case 'glossary':
			return parseGlossary(
				emitGlossary({ intro: doc.intro, terms: doc.terms }),
				ids?.terms.map((t: Doc) => t.key)
			);
		case 'doc':
			return parseDoc(
				emitDoc({ head: doc.head, sections: doc.sections }, doc.headingLevel),
				doc.headingLevel,
				ids?.sections.map((s: Doc) => s.id)
			);
		default:
			return {};
	}
}

const body = (doc: Doc) => {
	const keep = ['intro', 'sections', 'preamble', 'terms', 'head'];
	return Object.fromEntries(Object.entries(doc).filter(([k]) => keep.includes(k) && doc[k] !== ''));
};

describe('content YAML', () => {
	it('finds the migrated documents', () => {
		expect(english.length).toBe(84);
	});

	it.each(english.map(({ file, doc }) => [path.relative(CONTENT, file), doc]))(
		'%s survives markdown and back unchanged',
		(_name, doc) => {
			expect(body(roundTrip(doc as Doc, 'en'))).toEqual(body(doc as Doc));
		}
	);

	it.each(english.map(({ file, doc }) => [path.relative(CONTENT, file), doc, file]))(
		'%s: every translation survives markdown and back, and splits back to its overlay',
		(_name, en, file) => {
			for (const locale of ['de', 'es', 'fr', 'pt-br']) {
				const overlayFile = (file as string).replace(/\.yaml$/, `.${locale}.yaml`);
				const { lang, sourceHash, ...overlay } = yaml.load(
					readFileSync(overlayFile, 'utf8')
				) as Doc;
				expect(lang).toBe(locale);
				expect(sourceHash).toBeTruthy();
				const translated = merge(en, overlay);
				expect(body(roundTrip(translated, locale, en as Doc))).toEqual(body(translated));
				expect(split(en, translated) ?? {}).toEqual(overlay);
			}
		}
	);
});

describe('overlay', () => {
	const en = {
		title: 'Title',
		order: 3,
		sections: [
			{ id: 'a', title: 'A', blocks: [{ id: '1.1', text: 'one', items: ['x', 'y'] }] },
			{ id: 'b', title: 'B', blocks: [] }
		]
	};

	it('keeps only text, keyed by identity', () => {
		const de = structuredClone(en);
		de.title = 'Titel';
		de.sections[0].blocks[0].items = ['ix', 'ypsilon'];
		expect(split(en, de)).toEqual({
			title: 'Titel',
			sections: {
				a: { title: 'A', blocks: { '1.1': { text: 'one', items: ['ix', 'ypsilon'] } } },
				b: { title: 'B' }
			}
		});
		expect(merge(en, split(en, de))).toEqual(de);
	});

	it('falls back to English where the overlay is silent', () => {
		expect(merge(en, { title: 'Titel' }).sections[0].title).toBe('A');
	});

	it('refuses translations whose structure differs', () => {
		const wrong = structuredClone(en);
		wrong.sections.reverse();
		expect(() => split(en, wrong)).toThrow(/id b, English has a/);
	});
});

describe('translation round trip (article.js)', () => {
	it('every overlay → article → overlay is unchanged', async () => {
		const { toArticle, fromArticle } = await import('./article.js');
		let checked = 0;
		for (const { file, doc } of english) {
			for (const locale of ['de', 'es', 'fr', 'pt-br']) {
				const raw = yaml.load(
					readFileSync(file.replace(/\.yaml$/, `.${locale}.yaml`), 'utf8')
				) as Doc;
				const { lang: _l, sourceHash: _h, ...overlay } = raw;
				const article = toArticle(doc, overlay, locale, href);
				expect(fromArticle(doc, article, locale, href)).toEqual(overlay);
				checked++;
			}
		}
		expect(checked).toBe(336);
	});
});
