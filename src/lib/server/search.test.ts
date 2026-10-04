import { describe, expect, it } from 'vitest';
import { searchIndex } from './search';
import { grouped, refIn } from '$lib/search/engine';

describe('search index', () => {
	it('covers clauses, sections, terms, templates, tests, guides and pages', async () => {
		const docs = await searchIndex('de');
		const kinds = new Set(docs.map((d) => d.kind));
		expect([...kinds].sort()).toEqual(
			['clause', 'guide', 'page', 'section', 'template', 'template-section', 'term', 'test'].sort()
		);
		expect(new Set(docs.map((d) => d.id)).size).toBe(docs.length);
		const clause = docs.find((d) => d.ref === '2.3.4' && d.kind === 'clause')!;
		expect(clause.url).toBe('/de/standard/core/0.1/layer-0-identity-scope#2.3.4');
		expect(clause.text).toContain('Notfallmaßnahme');
		expect(docs.every((d) => d.text.length <= 401)).toBe(true);
	});

	it('reads clause numbers and groups results by kind', () => {
		expect(refIn('2.3.4')).toBe('2.3.4');
		expect(refIn(' §2.3 ')).toBe('2.3');
		expect(refIn('invariant')).toBeNull();
		const g = grouped([
			{ id: 'a', kind: 'test', url: '', title: '', text: '', context: '' },
			{ id: 'b', kind: 'clause', url: '', title: '', text: '', context: '' }
		]);
		expect(g.map((x) => x.kind)).toEqual(['clause', 'test']);
	});
});
