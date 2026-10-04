<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	/** A stress test's severity as a coloured dot, with its name for screen readers. */
	let { severity, class: className = '' }: { severity: string | null; class?: string } = $props();
	const FILL: Record<string, string> = {
		high: 'bg-severity-high',
		medium: 'bg-severity-medium',
		low: 'bg-severity-low'
	};
	const LABEL: Record<string, () => string> = {
		high: m.self_assessment_severity_high,
		medium: m.self_assessment_severity_medium,
		low: m.self_assessment_severity_low
	};
</script>

{#if severity}
	<span
		class="inline-block size-2 shrink-0 rounded-full {FILL[severity] ?? FILL.low} {className}"
		title={LABEL[severity]?.()}
	></span><span class="sr-only">{LABEL[severity]?.()}</span>
{/if}
