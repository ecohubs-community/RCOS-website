<script lang="ts">
	import { ToggleGroup } from 'bits-ui';
	import { m } from '$lib/paraglide/messages.js';
	import { reading, setReading } from './reading.svelte';
	import IconGavel from '~icons/tabler/gavel';
	import IconBulb from '~icons/tabler/bulb';

	/** "Rules only" / "With guidance". The look follows the `guided` class, so it is right before hydration. */
	const item =
		'inline-flex h-8.5 items-center gap-1.5 rounded-lg px-3 font-ui text-[13.5px] font-semibold';
</script>

<div class="flex flex-wrap items-center gap-x-3 gap-y-2">
	<ToggleGroup.Root
		type="single"
		value={reading.guided ? 'guided' : 'rules'}
		onValueChange={(v) => v && setReading(v === 'guided')}
		aria-label={m.std_reading_mode()}
		class="inline-flex gap-0.5 rounded-[10px] bg-paper-2 p-0.75"
	>
		<ToggleGroup.Item
			value="rules"
			class="{item} bg-card text-heading shadow-sm [.guided_&]:bg-transparent [.guided_&]:text-ink-muted [.guided_&]:shadow-none"
		>
			<IconGavel class="size-3.75" />{m.std_rules_only()}
		</ToggleGroup.Item>
		<ToggleGroup.Item
			value="guided"
			class="{item} text-ink-muted [.guided_&]:bg-card [.guided_&]:text-guide-accent [.guided_&]:shadow-sm"
		>
			<IconBulb class="size-3.75" />{m.std_with_guidance()}
		</ToggleGroup.Item>
	</ToggleGroup.Root>
	<span class="text-[12.5px] text-ink-muted">{m.std_guidance_note()}</span>
</div>
