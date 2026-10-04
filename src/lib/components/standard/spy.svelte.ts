import type { Attachment } from 'svelte/attachments';

/**
 * The section in view, shared by "On this page" and the contents rail. Only
 * the browser writes it (the server always renders no active section).
 */
export const spy = $state({ active: '' });

/**
 * Watch the page's sections (`section[data-spy]`) and mark the one crossing a
 * band near the top of the viewport. Pass the page path so it re-runs when
 * the reader moves to another chapter.
 */
export function scrollSpy(_path: string): Attachment<HTMLElement> {
	return (root) => {
		const sections = [...root.querySelectorAll<HTMLElement>('section[data-spy]')];
		const inBand: Record<string, boolean> = {};
		const observer = new IntersectionObserver(
			(entries) => {
				for (const e of entries) inBand[e.target.id] = e.isIntersecting;
				// Between two short sections nothing crosses the band: keep the last one.
				const first = sections.find((s) => inBand[s.id]);
				if (first) spy.active = first.id;
			},
			{ rootMargin: '-10% 0px -60% 0px' }
		);
		for (const s of sections) observer.observe(s);
		return () => {
			observer.disconnect();
			spy.active = '';
		};
	};
}
