<script lang="ts">
  import { m } from '$lib/i18n';
  import { localized } from '$lib/i18n/path';
  import { DEFAULT_LOCALE } from '$lib/i18n/languages';
  import type { Coverage } from '$lib/types/coverage';

  let { coverage, locale = DEFAULT_LOCALE }: { coverage: Coverage; locale?: string } = $props();

  const fullyCovered = $derived(coverage.coveredInvariants === coverage.totalInvariants);
</script>

<section class="space-y-6" aria-labelledby="coverage-heading">
  <header class="space-y-2">
    <h2 id="coverage-heading" class="text-2xl font-bold text-text-primary">
      {m('stress_tests.coverage.title')}
    </h2>
    <p class="text-text-secondary">{m('stress_tests.coverage.subtitle')}</p>
    <p>
      <span
        class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium {fullyCovered
          ? 'bg-green-100 text-green-700'
          : 'bg-amber-100 text-amber-700'}"
      >
        {m('stress_tests.coverage.summary', {
          covered: coverage.coveredInvariants,
          total: coverage.totalInvariants
        })}
      </span>
    </p>
  </header>

  <div class="space-y-5">
    {#each coverage.layers as layer (layer.layer)}
      <div class="overflow-hidden rounded-xl border border-border">
        <h3
          class="bg-black/[0.03] px-4 py-2 text-sm font-semibold text-text-primary dark:bg-white/[0.04]"
        >
          {m('stress_tests.coverage.layer', { n: layer.layer })} — {layer.title}
        </h3>
        <ul class="divide-y divide-border">
          {#each layer.invariants as inv (inv.code)}
            <li class="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-4">
              <div class="shrink-0 sm:w-2/5">
                <span class="font-mono text-xs text-text-tertiary">{inv.code}</span>
                <span class="text-sm text-text-primary">{inv.name}</span>
              </div>
              <div class="text-sm sm:flex-1">
                {#if inv.tests.length}
                  {#each inv.tests as test, i (test.slug)}<a
                      class="text-primary hover:underline"
                      href={localized(`/articles/${test.slug}`, locale)}>{test.title}</a
                    >{#if i < inv.tests.length - 1}<span class="text-text-tertiary">, </span>{/if}{/each}
                {:else}
                  <span class="italic text-text-tertiary">{m('stress_tests.coverage.uncovered')}</span>
                {/if}
              </div>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>
