import { describe, expect, it } from 'vitest';
import { standardRoute } from './routes.js';

describe('standardRoute', () => {
	it.each([
		['content/standard/rcos-core/about.yaml', {}, '/standard'],
		['content/standard/rcos-core/0.1/version.yaml', {}, '/standard/core/0.1'],
		['content/standard/rcos-core/0.1/chapters/02-layer-0-identity-scope.yaml', {}, '/standard/core/0.1/layer-0-identity-scope'],
		['content/standard/rcos-core/0.1/chapters/appendix-a-glossary.yaml', { slug: 'glossary' }, '/standard/core/0.1/glossary'],
		['content/standard/modules/about.yaml', {}, '/standard/modules'],
		['content/standard/modules/permaculture/about.yaml', {}, '/standard/modules/permaculture'],
		['content/standard/modules/permaculture/0.1/standard.yaml', {}, '/standard/modules/permaculture/0.1'],
		['content/standard/modules/permaculture/0.1/additional-artifacts.yaml', {}, '/standard/modules/permaculture/0.1/additional-artifacts'],
		['content/templates/layer-0/purpose-charter.yaml', {}, null]
	])('%s → %s', (file, en, path) => {
		expect(standardRoute(`/repo/${file}`, en)).toBe(path);
	});
});
