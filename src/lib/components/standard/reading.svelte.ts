/**
 * Reading mode: "Rules only" or "With guidance". Like the rail, the choice is a
 * class on <html> (`guided`), set before first paint by app.html from the same
 * localStorage key, and styles follow it with `[.guided_&]:`. The state here
 * only drives the toggle's checked state; only the browser writes it.
 */
export const READING_STORAGE_KEY = 'rcos-reading';

export const reading = $state({ guided: false });

/** Pick up what app.html applied before first paint. */
export function initReading() {
	reading.guided = document.documentElement.classList.contains('guided');
}

export function setReading(guided: boolean) {
	reading.guided = guided;
	document.documentElement.classList.toggle('guided', guided);
	try {
		localStorage.setItem(READING_STORAGE_KEY, guided ? 'guided' : 'rules');
	} catch {
		// storage blocked: the choice still applies for this page view
	}
}
