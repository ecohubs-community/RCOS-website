// @ts-check
/**
 * Which template section owns each clause of the standard: the section a
 * community opens to write its answer. A clause cited by exactly one section
 * belongs to it; where several cite it, ownership.yaml names the owner; the
 * clauses in its `dispositions` belong to no section. The same rules as
 * scripts/build-standard-data.mjs, which publishes them for RCOS-compass.
 */

/**
 * @param {Array<{ file: string, en: any }>} docs the English documents
 * @param {{ owners?: Record<string, string>, dispositions?: Record<string, unknown> }} ownership
 * @returns {Map<string, string>} clause ref → `<template>.<section>`
 */
export function clauseOwners(docs, ownership) {
	/** @type {Map<string, string[]>} */
	const citedBy = new Map();
	for (const { file, en } of docs) {
		if (en.kind !== 'template') continue;
		const template = file
			.split('/')
			.pop()
			?.replace(/\.yaml$/, '');
		for (const section of en.sections) {
			for (const block of section.blocks) {
				if (block.kind !== 'clauses') continue;
				for (const ref of block.refs) {
					const list = citedBy.get(ref) ?? [];
					list.push(`${template}.${section.id}`);
					citedBy.set(ref, list);
				}
			}
		}
	}
	/** @type {Map<string, string>} */
	const owners = new Map();
	for (const [ref, keys] of citedBy) {
		if (ownership.dispositions?.[ref]) continue;
		const owner = ownership.owners?.[ref] ?? (keys.length === 1 ? keys[0] : null);
		if (owner) owners.set(ref, owner);
	}
	return owners;
}
