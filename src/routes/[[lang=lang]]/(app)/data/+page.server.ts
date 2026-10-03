import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { localeEntries } from '$lib/server/entries';
import { DEFAULT_LOCALE } from '$lib/i18n/languages';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => localeEntries([{}]);

/** The published standard data, from its manifest (file → size, checksum). */
export const load: PageServerLoad = async ({ params }) => {
	const manifest = JSON.parse(
		await readFile(path.resolve('static/downloads/standard/manifest-standard.json'), 'utf8')
	) as { generated: string; files: Record<string, { sha256: string; bytes: number }> };
	return {
		locale: params.lang ?? DEFAULT_LOCALE,
		generated: manifest.generated,
		files: Object.entries(manifest.files).map(([file, f]) => ({
			file,
			href: `/downloads/standard/${file}`,
			kb: Math.max(1, Math.round(f.bytes / 1024)),
			sha256: f.sha256
		}))
	};
};
