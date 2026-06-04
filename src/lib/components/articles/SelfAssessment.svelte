<script lang="ts">
  import { m } from '$lib/i18n';
  import { localized } from '$lib/i18n/path';
  import { DEFAULT_LOCALE } from '$lib/i18n/languages';
  import Icon from '@iconify/svelte';
  import type { Assessment, AssessmentTest } from '$lib/types/assessment';

  let { assessment, locale = DEFAULT_LOCALE }: { assessment: Assessment; locale?: string } =
    $props();

  // Checked symptoms, keyed by `${slug}::${index}`. A plain $state record — deep
  // proxy makes dynamic-key reads/writes reactive.
  let checked = $state<Record<string, boolean>>({});
  const keyFor = (slug: string, i: number) => `${slug}::${i}`;

  const SEV_WEIGHT: Record<string, number> = { high: 3, medium: 2, low: 1 };

  const results = $derived.by(() => {
    const rows: { test: AssessmentTest; count: number }[] = [];
    for (const cat of assessment.categories) {
      for (const test of cat.tests) {
        let count = 0;
        for (let i = 0; i < test.symptoms.length; i++) {
          if (checked[keyFor(test.slug, i)]) count++;
        }
        if (count > 0) rows.push({ test, count });
      }
    }
    rows.sort(
      (a, b) =>
        b.count - a.count ||
        (SEV_WEIGHT[b.test.severity] ?? 0) - (SEV_WEIGHT[a.test.severity] ?? 0) ||
        a.test.title.localeCompare(b.test.title)
    );
    return rows;
  });

  const totalSelected = $derived(Object.values(checked).filter(Boolean).length);

  function severityClass(s: string): string {
    if (s === 'high') return 'bg-red-100 text-red-700';
    if (s === 'medium') return 'bg-amber-100 text-amber-700';
    return 'bg-gray-100 text-gray-600';
  }

  function clearAll() {
    checked = {};
  }
</script>

<section class="space-y-6" aria-labelledby="assessment-results-heading">
  <!-- Results panel -->
  <div class="sticky top-2 z-10 rounded-xl border border-border bg-surface-elevated p-4 shadow-sm">
    <div class="flex items-center justify-between gap-3">
      <h2 id="assessment-results-heading" class="text-lg font-bold text-text-primary">
        {m('self_assessment.results_title')}
      </h2>
      {#if totalSelected > 0}
        <button
          type="button"
          onclick={clearAll}
          class="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm text-text-tertiary hover:text-primary"
        >
          <Icon icon="tabler:rotate" class="h-4 w-4" />
          {m('self_assessment.clear')}
          <span class="text-text-tertiary">· {m('self_assessment.selected', { n: totalSelected })}</span>
        </button>
      {/if}
    </div>

    {#if results.length === 0}
      <p class="mt-2 text-sm text-text-secondary">{m('self_assessment.empty')}</p>
    {:else}
      <ol class="mt-3 space-y-2">
        {#each results as { test, count } (test.slug)}
          <li class="rounded-lg border border-border p-3">
            <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <a
                href={localized(`/articles/${test.slug}`, locale)}
                class="font-semibold text-primary hover:underline">{test.title}</a
              >
              <span
                class="rounded-full px-2 py-0.5 text-xs font-medium {severityClass(test.severity)}"
                >{m(`self_assessment.severity.${test.severity}`)}</span
              >
              <span class="text-sm text-text-tertiary"
                >{m('self_assessment.signs', { count, total: test.symptoms.length })}</span
              >
            </div>
            {#if test.preventsWith.length}
              <p class="mt-1 text-sm text-text-secondary">
                <span class="font-medium text-text-tertiary">{m('self_assessment.prevent_with')}:</span>
                {#each test.preventsWith as tpl, i (tpl.slug)}<a
                    class="text-primary hover:underline"
                    href={localized(`/articles/${tpl.slug}`, locale)}>{tpl.title}</a
                  >{#if i < test.preventsWith.length - 1}<span class="text-text-tertiary">, </span
                    >{/if}{/each}
              </p>
            {/if}
          </li>
        {/each}
      </ol>
    {/if}
  </div>

  <!-- Symptom checklists -->
  <div class="space-y-6">
    {#each assessment.categories as cat (cat.key)}
      <div>
        <h3 class="mb-3 text-sm font-semibold uppercase tracking-wide text-text-tertiary">
          {cat.title}
        </h3>
        <div class="space-y-4">
          {#each cat.tests as test (test.slug)}
            <fieldset class="rounded-xl border border-border p-4">
              <legend class="px-1 text-sm font-semibold text-text-primary">{test.title}</legend>
              <ul class="space-y-2">
                {#each test.symptoms as symptom, i (i)}
                  {@const id = keyFor(test.slug, i)}
                  <li>
                    <label class="flex cursor-pointer items-start gap-2 text-sm text-text-secondary">
                      <input
                        type="checkbox"
                        class="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                        bind:checked={checked[id]}
                      />
                      <span>{symptom}</span>
                    </label>
                  </li>
                {/each}
              </ul>
            </fieldset>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
