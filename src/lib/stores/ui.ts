import { writable } from 'svelte/store';

export const theme = writable<'light' | 'dark' | undefined>(undefined);

type Theme = 'light' | 'dark';

/** localStorage key for an explicit choice. Absent = follow the system setting.
 * app.html reads the same key before first paint, so keep the two in sync. */
const THEME_STORAGE_KEY = 'theme';

function systemTheme(): Theme {
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function storedTheme(): Theme | null {
	try {
		const v = localStorage.getItem(THEME_STORAGE_KEY);
		return v === 'light' || v === 'dark' ? v : null;
	} catch {
		return null; // storage blocked (private mode, disabled cookies)
	}
}

export function setTheme(t: Theme) {
	theme.set(t);
	if (typeof document !== 'undefined') {
		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(t);
	}
}

/**
 * Apply the saved choice, or the system setting when nothing is saved. Until the
 * user picks a theme, follow live system changes (e.g. macOS auto dark mode at
 * sunset). Returns a cleanup function for the media-query listener.
 */
export function initTheme(): () => void {
	setTheme(storedTheme() ?? systemTheme());

	const media = window.matchMedia('(prefers-color-scheme: dark)');
	const onChange = () => {
		if (!storedTheme()) setTheme(systemTheme());
	};
	media.addEventListener('change', onChange);
	return () => media.removeEventListener('change', onChange);
}

/** Flip the theme and remember the choice; from then on the system setting is ignored. */
export function toggleTheme() {
	const current =
		storedTheme() ?? (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
	const next: Theme = current === 'light' ? 'dark' : 'light';
	setTheme(next);
	try {
		localStorage.setItem(THEME_STORAGE_KEY, next);
	} catch {
		// storage blocked: the choice still applies for this page view
	}
}
