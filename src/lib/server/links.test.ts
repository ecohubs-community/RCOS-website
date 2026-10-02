import { describe, expect, it } from 'vitest';
import { rewriteArticleLinks } from './links';

const articles = [{ id: '4a376956', slug: 'rcos-layers/layer-0-identity-scope' }];

describe('rewriteArticleLinks', () => {
	it('resolves ?id= to the current slug and drops the id', () => {
		const html = '<a href="/articles/old-slug?id=4a376956#part">x</a>';
		expect(rewriteArticleLinks(html, 'en', articles)).toContain(
			'href="/articles/rcos-layers/layer-0-identity-scope#part"'
		);
	});

	it('prefixes the active locale', () => {
		const html = '<a href="/articles/old-slug?id=4a376956">x</a>';
		expect(rewriteArticleLinks(html, 'de', articles)).toContain(
			'href="/de/articles/rcos-layers/layer-0-identity-scope"'
		);
	});
});
