import type { Attachment } from 'svelte/attachments';

/**
 * The section in view, shared by "On this page" and the contents rail. Only
 * the browser writes it (the server always renders no active section).
 */
export const spy = $state({ active: '' });

/**
 * Watch the page's sections (`section[data-spy]`) and mark the last one whose
 * top has passed the line where a jump to a section lands (its scroll margin),
 * so a section is marked as soon as a link has scrolled it into place. Near the
 * end of the page the last sections cannot reach that line, so there the
 * section named in the URL wins while it is on screen. Pass the page path so
 * it re-runs when the reader moves to another chapter.
 */
export function scrollSpy(_path: string): Attachment<HTMLElement> {
	return (root) => {
		const sections = [...root.querySelectorAll<HTMLElement>('section[data-spy]')];
		if (!sections.length) return;
		let frame = 0;

		const update = () => {
			frame = 0;
			// The scroll margin is set in CSS (header height + a gap) and differs by breakpoint.
			const line = (parseFloat(getComputedStyle(sections[0]).scrollMarginTop) || 0) + 8;
			let current: HTMLElement | undefined;
			for (const s of sections) {
				if (s.getBoundingClientRect().top <= line) current = s;
				else break;
			}
			const atEnd =
				window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
			if (atEnd && location.hash) {
				const id = decodeURIComponent(location.hash.slice(1));
				const target = sections.find((s) => s.id === id);
				if (target && target.getBoundingClientRect().top < window.innerHeight) current = target;
			}
			spy.active = current?.id ?? '';
		};
		const schedule = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};

		update();
		window.addEventListener('scroll', schedule, { passive: true });
		window.addEventListener('resize', schedule);
		window.addEventListener('hashchange', schedule);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('scroll', schedule);
			window.removeEventListener('resize', schedule);
			window.removeEventListener('hashchange', schedule);
			spy.active = '';
		};
	};
}
