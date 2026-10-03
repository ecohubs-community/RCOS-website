// @ts-check
/**
 * Read the content documents (content/**.yaml): each English document with
 * its translation overlays. Shared by the build scripts and the site's server
 * code.
 */
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

/** Folders holding content documents. */
export const YAML_DIRS = ['standard', 'templates', 'layers', 'stress-tests'];
const LOCALE_FILE = /\.(de|es|fr|pt-br)\.yaml$/;
/** YAML in the content folders that holds data, not articles. */
export const DATA_FILES = new Set(['ownership.yaml']);
const DEFAULT_CONTENT = path.resolve(process.cwd(), 'content');

/**
 * @param {string} dir
 * @returns {Promise<string[]>}
 */
async function walk(dir) {
	if (!existsSync(dir)) return [];
	const out = [];
	for (const e of await readdir(dir, { withFileTypes: true })) {
		const p = path.join(dir, e.name);
		if (e.isDirectory()) out.push(...(await walk(p)));
		else out.push(p);
	}
	return out;
}

/**
 * @typedef {Record<string, any> & { kind: string, legacyPath: string }} EnDoc  (guidance documents have no legacyPath)
 * @typedef {{ file: string, en: EnDoc, overlays: Record<string, { file: string, data: Record<string, any> }> }} LoadedDoc
 */

/**
 * Load every English document with its overlays.
 * @param {string} [contentDir] the content folder (tests pass a copy)
 * @returns {Promise<LoadedDoc[]>}
 */
export function loadDocuments(contentDir = DEFAULT_CONTENT) {
	return loadYaml(YAML_DIRS, contentDir);
}

/**
 * Load the guidance (content/guidance/**): plain-language help next to the
 * standard, kept apart from it so the rules and their downloads never change
 * when guidance does, and so guidance can be translated on its own schedule.
 * @param {string} [contentDir]
 * @returns {Promise<LoadedDoc[]>}
 */
export function loadGuidance(contentDir = DEFAULT_CONTENT) {
	return loadYaml(['guidance'], contentDir);
}

/**
 * @param {string[]} dirs
 * @param {string} contentDir
 * @returns {Promise<LoadedDoc[]>}
 */
async function loadYaml(dirs, contentDir) {
	const files = (await Promise.all(dirs.map((d) => walk(path.join(contentDir, d)))))
		.flat()
		.filter((f) => f.endsWith('.yaml'));
	/** @type {LoadedDoc[]} */
	const docs = [];
	for (const file of files.filter((f) => !LOCALE_FILE.test(f)).sort()) {
		const en = /** @type {EnDoc | null} */ (yaml.load(await readFile(file, 'utf8')));
		if (!en?.kind) {
			// Data about the standard, not an article.
			if (DATA_FILES.has(path.basename(file))) continue;
			throw new Error(
				`${path.relative(contentDir, file)}: no \`kind\` (and not a known data file)`
			);
		}
		/** @type {LoadedDoc['overlays']} */
		const overlays = {};
		for (const f of files.filter(
			(f) => LOCALE_FILE.test(f) && f.replace(LOCALE_FILE, '.yaml') === file
		)) {
			const locale = /** @type {RegExpExecArray} */ (LOCALE_FILE.exec(f))[1];
			overlays[locale] = {
				file: f,
				data: /** @type {Record<string, any>} */ (yaml.load(await readFile(f, 'utf8')))
			};
		}
		docs.push({ file, en, overlays });
	}
	return docs;
}
