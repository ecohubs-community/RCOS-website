// @ts-check
/**
 * Translation freshness. A translation records the hash of the English text it
 * was made from; when English text changes, the hash no longer matches and the
 * translation is outdated.
 *
 * Only translatable text counts (the same fields an overlay holds), so editing
 * a slug, a number or a link target does not mark translations outdated.
 */
import { createHash } from 'node:crypto';
import { split } from './overlay.js';

/** @param {any} en English document */
export function sourceHashOf(en) {
	const text = JSON.stringify(split(en, en) ?? {});
	return createHash('md5').update(text).digest('hex').slice(0, 8);
}
