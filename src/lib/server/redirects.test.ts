import { describe, expect, it } from 'vitest';
import legacy from './legacy-urls.json';
import { redirectFor } from './redirects';

describe('redirects', () => {
	it('sends every article URL of website-v1 somewhere', async () => {
		const missing: string[] = [];
		for (const url of legacy.urls) if (!(await redirectFor(url))) missing.push(url);
		expect(missing).toEqual([]);
	});

	it('maps old pages to their new homes', async () => {
		expect(await redirectFor('/articles')).toBe('/library');
		expect(await redirectFor('/articles/rcos-templates/layer-0/purpose-charter')).toBe(
			'/templates/layer-0/purpose-charter'
		);
		expect(await redirectFor('/articles/rcos-layers/layer-2-governance-decision-logic')).toBe(
			'/layers/2-governance-decision-logic'
		);
		expect(
			await redirectFor('/articles/rcos-stress-tests/governance-power/founder-informal-veto')
		).toBe('/stress-tests/founder-informal-veto');
		expect(await redirectFor('/articles/rcos-stress-tests/culture-influence')).toBe(
			'/stress-tests#layer-2'
		);
		expect(await redirectFor('/articles/rcos-stress-tests/self-assessment')).toBe(
			'/toolkit/self-assessment'
		);
	});

	it('keeps the query before a fragment in the target', async () => {
		const { handle } = await import('../../hooks.server');
		const event = {
			url: new URL('http://x/de/articles/rcos-stress-tests/culture-influence?utm=1'),
			cookies: { get: () => undefined },
			request: new Request('http://x/'),
			locals: {}
		};
		await expect(
			handle({ event, resolve: () => new Response() } as unknown as Parameters<typeof handle>[0])
		).rejects.toMatchObject({ status: 308, location: '/de/stress-tests?utm=1#layer-2' });
	});
});
