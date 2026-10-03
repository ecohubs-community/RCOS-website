<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import LayerChip from '$lib/components/ui/LayerChip.svelte';

	/** Every layer invariant and the stress tests that exercise it. */
	type Coverage = {
		covered: number;
		total: number;
		layers: {
			layer: { n: number; title: string; href: string };
			invariants: {
				id: string;
				code: string;
				name: string;
				href: string;
				tests: { href: string; title: string }[];
			}[];
		}[];
	};
	let { coverage }: { coverage: Coverage } = $props();
</script>

<section aria-labelledby="coverage" class="flex flex-col gap-4">
	<div class="flex flex-wrap items-baseline justify-between gap-2">
		<h2 id="coverage" class="font-serif text-2xl font-semibold text-heading">
			{m.stress_tests_coverage_title()}
		</h2>
		<p class="font-ui text-sm text-ink-muted">
			{m.stress_tests_coverage_summary({ covered: coverage.covered, total: coverage.total })}
		</p>
	</div>
	<p class="text-ink-2">{m.stress_tests_coverage_subtitle()}</p>
	<div class="flex flex-col divide-y divide-line-soft rounded-2xl border border-line bg-card">
		{#each coverage.layers as { layer, invariants } (layer.n)}
			<div class="flex flex-col gap-2.5 px-4.5 py-4">
				<a
					href={layer.href}
					class="flex items-center gap-2 font-ui text-sm font-semibold text-heading hover:underline"
				>
					<LayerChip n={layer.n} size="xs" />{layer.title}
				</a>
				<ul class="flex flex-col gap-2">
					{#each invariants as inv (inv.id)}
						<li class="grid gap-x-3 gap-y-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
							<a href={inv.href} class="text-sm text-ink-2 hover:text-heading">
								<span class="font-mono text-xs font-semibold text-forest-600">{inv.code}</span>
								{inv.name}
							</a>
							<span class="flex flex-wrap gap-x-3 gap-y-1 text-sm">
								{#each inv.tests as t (t.href)}
									<a
										href={t.href}
										class="text-guide-ink underline decoration-guide-line hover:decoration-guide-ink"
										>{t.title}</a
									>
								{:else}
									<span class="text-ink-faint italic">{m.stress_tests_coverage_uncovered()}</span>
								{/each}
							</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>
