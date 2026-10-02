import { describe, expect, it } from 'vitest';
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
// @ts-expect-error: plain JS module without types
import { checkContent } from './check.mjs';

/** Run the validator on a copy of content/ with one change applied. */
async function checkWith(file: string, edit: (text: string) => string): Promise<string[]> {
	const dir = mkdtempSync(path.join(tmpdir(), 'rcos-content-'));
	try {
		cpSync('content', dir, { recursive: true });
		const target = path.join(dir, file);
		writeFileSync(target, edit(readFileSync(target, 'utf8')));
		return (await checkContent(dir)).errors;
	} finally {
		rmSync(dir, { recursive: true, force: true });
	}
}

const CH = 'standard/rcos-core/0.1/chapters/02-layer-0-identity-scope';

// Each test copies content/ and validates all of it: seconds, not milliseconds.
describe('content:check', { timeout: 60_000 }, () => {
	it('passes on the real content', async () => {
		expect((await checkContent()).errors).toEqual([]);
	});

	it('catches a misspelled field', async () => {
		const errors = await checkWith(`${CH}.yaml`, (t) => t.replace('\ntitle: ', '\ntitel: '));
		expect(errors.join('\n')).toMatch(/02-layer-0-identity-scope\.yaml: .*(titel|title)/);
	});

	it('catches a clause numbered out of order', async () => {
		const errors = await checkWith(`${CH}.yaml`, (t) => t.replace('ref: 2.1.2', 'ref: 2.1.9'));
		expect(errors.join('\n')).toMatch(/clause 2\.1\.9 where 2\.1\.2 was expected/);
	});

	it('catches a template citing a clause that does not exist', async () => {
		const errors = await checkWith('templates/layer-0/purpose-charter.yaml', (t) =>
			t.replace('- 2.1.1', '- 2.1.99')
		);
		expect(errors.join('\n')).toMatch(/cites clause 2\.1\.99/);
	});

	it('catches a translation attached to a clause English does not have', async () => {
		const errors = await checkWith(`${CH}.de.yaml`, (t) =>
			t.replace('      2.1.1:\n', '      2.1.77:\n')
		);
		expect(errors.join('\n')).toMatch(
			/02-layer-0-identity-scope\.de\.yaml: holds text at ids or fields English does not have/
		);
	});

	it('catches an English RFC keyword left in a translation', async () => {
		const errors = await checkWith(`${CH}.de.yaml`, (t) =>
			t.replace('MUSS genau einen', 'MUST genau einen')
		);
		expect(errors.join('\n')).toMatch(/English RFC 2119 keyword "MUST" in de text/);
	});

	it('catches an untranslated "Layer N"', async () => {
		const errors = await checkWith(`${CH}.fr.yaml`, (t) => t.replace(/Couche 2/, 'Layer 2'));
		expect(errors.join('\n')).toMatch(/"Layer 2" not translated/);
	});

	it('catches ownership pointing at a section that does not exist', async () => {
		const errors = await checkWith('standard/rcos-core/0.1/ownership.yaml', (t) =>
			t.replace(
				"'2.1.5': purpose-charter.primary-purpose",
				"'2.1.5': purpose-charter.no-such-section"
			)
		);
		expect(errors.join('\n')).toMatch(
			/2\.1\.5 → purpose-charter\.no-such-section, no such template section/
		);
	});

	it('catches a typed link that points nowhere', async () => {
		const errors = await checkWith('templates/layer-0/purpose-charter.yaml', (t) =>
			t.replace(/rcos:§2\.1\b/, 'rcos:§9.9')
		);
		expect(errors.join('\n')).toMatch(/link rcos:§9\.9 points nowhere/);
	});

	it('catches a stress test linking to a test that does not exist', async () => {
		const errors = await checkWith('stress-tests/founder-informal-veto.yaml', (t) =>
			t.replace(
				/test: rcos-stress-tests\/[a-z-]+\/[a-z-]+/,
				'test: rcos-stress-tests/nowhere/nothing'
			)
		);
		expect(errors.join('\n')).toMatch(
			/cascade rcos-stress-tests\/nowhere\/nothing: no such stress test/
		);
	});
});
