import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';
import { PUBLISHED, publishedJsonSchema } from './published-schema.js';

const DIR = 'static/downloads/standard/rcos-core/0.1';

describe('published standard data', () => {
	it.each(Object.keys(PUBLISHED))('%s matches its schema', (file) => {
		const data = yaml.load(readFileSync(`${DIR}/${file}`, 'utf8'));
		const result = PUBLISHED[file as keyof typeof PUBLISHED].safeParse(data);
		expect(result.success ? [] : result.error.issues.slice(0, 3)).toEqual([]);
	});

	it('exports as JSON Schema', () => {
		const schema = publishedJsonSchema();
		expect(Object.keys(schema.$defs)).toEqual([
			'clauses',
			'sections',
			'artifacts',
			'glossary',
			'meta'
		]);
	});
});
