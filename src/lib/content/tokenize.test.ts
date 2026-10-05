import { describe, expect, it } from 'vitest';
import { tokenize, termForms } from './tokenize.js';

const terms = termForms(
	[
		{ key: 'invariant', term: 'Invariant' },
		{ key: 'constitutional-decision', term: 'Constitutional Decision' },
		{ key: 'community', term: 'Community', autolink: false }
	],
	'en'
);

describe('tokenize', () => {
	it('finds keywords, layers and the first use of a term', () => {
		const seen = new Set<string>();
		const parts = tokenize(
			'Invariants MUST NOT be changed except by a constitutional decision as defined in Layer 2; invariants MAY be listed.',
			{ locale: 'en', terms, seen }
		);
		expect(parts.filter((p) => p.t !== 'text')).toEqual([
			{ t: 'term', text: 'Invariants', key: 'invariant' },
			{ t: 'kw', text: 'MUST NOT', kind: 'must-not' },
			{ t: 'term', text: 'constitutional decision', key: 'constitutional-decision' },
			{ t: 'layer', text: 'Layer 2', n: 2 },
			{ t: 'kw', text: 'MAY', kind: 'may' }
		]);
		// The text parts plus the marked parts give back the clause unchanged.
		expect(parts.map((p) => ('text' in p ? p.text : '')).join('')).toBe(
			'Invariants MUST NOT be changed except by a constitutional decision as defined in Layer 2; invariants MAY be listed.'
		);
	});

	it('skips terms marked autolink: false and lowercase keywords', () => {
		const parts = tokenize('The community must agree.', { locale: 'en', terms, seen: new Set() });
		expect(parts).toEqual([{ t: 'text', text: 'The community must agree.' }]);
	});

	it('keeps inline markdown whole and does not match inside it', () => {
		const parts = tokenize('See [Layer 2](rcos:§4.1) and **MUST**.', {
			locale: 'en',
			terms,
			seen: new Set()
		});
		expect(parts).toEqual([
			{ t: 'text', text: 'See ' },
			{ t: 'md', md: '[Layer 2](rcos:§4.1)' },
			{ t: 'text', text: ' and ' },
			{ t: 'md', md: '**MUST**' },
			{ t: 'text', text: '.' }
		]);
	});

	it('knows the translated keywords and layer word', () => {
		const de = tokenize('Eine Gemeinschaft DARF NICHT … gemäß Schicht 2; sie MUSS …', {
			locale: 'de',
			terms: [],
			seen: new Set()
		});
		expect(de.filter((p) => p.t !== 'text')).toEqual([
			{ t: 'kw', text: 'DARF NICHT', kind: 'must-not' },
			{ t: 'layer', text: 'Schicht 2', n: 2 },
			{ t: 'kw', text: 'MUSS', kind: 'must' }
		]);
		const fr = tokenize('Elles NE DOIVENT PAS … et DOIVENT …', {
			locale: 'fr',
			terms: [],
			seen: new Set()
		});
		expect(fr.filter((p) => p.t === 'kw').map((p) => ('kind' in p ? p.kind : ''))).toEqual([
			'must-not',
			'must'
		]);
	});

	it('does not match a word inside another word', () => {
		const parts = tokenize('PODEMOS e DEVERIAMENTE', {
			locale: 'pt-br',
			terms: [],
			seen: new Set()
		});
		expect(parts).toEqual([{ t: 'text', text: 'PODEMOS e DEVERIAMENTE' }]);
	});

	it('finds a glossary term in the forms its language lists', () => {
		const terms = termForms(
			[{ key: 'invariant', term: 'Invariante', aliases: ['Invarianten'] }],
			'de'
		);
		const parts = tokenize('Invarianten MÜSSEN gelten.', { locale: 'de', terms, seen: new Set() });
		expect(parts[0]).toEqual({ t: 'term', text: 'Invarianten', key: 'invariant' });
	});
});
