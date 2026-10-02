import { execFile } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';

const run = promisify(execFile);

export type FileDates = {
	/** ISO date of the oldest commit touching the file (under its current path). */
	published?: string;
	/** ISO date of the newest commit touching the file. */
	modified?: string;
};

/**
 * Publish/modify dates for every committed file under `content/`, read from git
 * history once per process. Keyed by absolute path, matching `filePath` from
 * src/lib/server/content.ts.
 *
 * Pages are prerendered, so this runs at build time. Two degradations, both
 * chosen to omit a date rather than emit a wrong one:
 *   - No git (or no .git dir): empty map, pages simply carry no dates.
 *   - Shallow clone (CI default, Vercel clones shallow unless the project sets
 *     VERCEL_DEEP_CLONE=true): the boundary commit looks like it added every file,
 *     so dates coming from it are dropped. Files edited within the fetched depth
 *     keep a correct `modified`, but `published` is only trusted in a full clone.
 * Uncommitted files have no history and get no dates.
 */
let cache: Promise<Map<string, FileDates>> | undefined;

export function getFileDates(): Promise<Map<string, FileDates>> {
	cache ??= readGitDates().catch((error) => {
		console.warn(
			'[dates] git history unavailable, pages will carry no dates:',
			error?.message ?? error
		);
		return new Map();
	});
	return cache;
}

async function readGitDates(): Promise<Map<string, FileDates>> {
	const git = (...args: string[]) =>
		run('git', ['-c', 'core.quotePath=false', ...args], { maxBuffer: 64 * 1024 * 1024 });

	const root = (await git('rev-parse', '--show-toplevel')).stdout.trim();
	const shallowCommits = await readShallowBoundary(root);

	// Newest first. Each commit is "\0<sha> <iso-date>" followed by its file names.
	const { stdout } = await git('log', '--format=%x00%H %cI', '--name-only', '--', 'content');

	const dates = new Map<string, FileDates>();
	for (const block of stdout.split('\0')) {
		const [header, ...files] = block.split('\n');
		if (!header) continue;
		const [sha, date] = header.split(' ');
		const trusted = !shallowCommits.has(sha);
		for (const file of files) {
			if (!file) continue;
			const key = path.join(root, file);
			const entry = dates.get(key) ?? {};
			if (!dates.has(key)) {
				// First sighting = newest commit. Untrusted (boundary) → leave unset.
				if (trusted) entry.modified = date;
				dates.set(key, entry);
			}
			// Every later sighting is older; the last one wins as `published`.
			entry.published = trusted ? date : undefined;
		}
	}
	return dates;
}

/** Commits at the edge of a shallow clone, listed in .git/shallow (empty for full clones). */
async function readShallowBoundary(root: string): Promise<Set<string>> {
	const { stdout } = await run('git', ['rev-parse', '--git-path', 'shallow'], { cwd: root });
	try {
		const raw = await readFile(path.resolve(root, stdout.trim()), 'utf8');
		return new Set(raw.split('\n').filter(Boolean));
	} catch {
		return new Set();
	}
}
