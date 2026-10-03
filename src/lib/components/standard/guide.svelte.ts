/**
 * Which section's guide sheet is open, and which question in it. Opened from
 * the section's Guide button, its "In short" strip, or a clause's question
 * button. Only the browser writes it.
 */
export const guide = $state<{ section: string | null; question: string | null }>({
	section: null,
	question: null
});

export function openGuide(section: string, question: string | null = null) {
	guide.section = section;
	guide.question = question;
}

export function closeGuide() {
	guide.section = null;
	guide.question = null;
}
