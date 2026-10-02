/**
 * The contents rail can collapse to an icon rail on desktop. The choice is a
 * class on <html> (`rail-collapsed`), set before first paint by app.html from
 * the same localStorage key, so the layout never jumps. Styles follow it with
 * the `[.rail-collapsed_&]:` variant.
 */
export const RAIL_STORAGE_KEY = 'rcos-rail';

export function toggleRail() {
	const collapsed = document.documentElement.classList.toggle('rail-collapsed');
	try {
		localStorage.setItem(RAIL_STORAGE_KEY, collapsed ? 'collapsed' : 'open');
	} catch {
		// storage blocked: the choice still applies for this page view
	}
}

/** `[` toggles the rail, as in the design, unless the reader is typing. */
export function onRailKey(e: KeyboardEvent) {
	if (e.key !== '[' || e.metaKey || e.ctrlKey || e.altKey) return;
	const t = e.target as HTMLElement | null;
	if (t?.closest('input, textarea, select, [contenteditable]')) return;
	toggleRail();
}
