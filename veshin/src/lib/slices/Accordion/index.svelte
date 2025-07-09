<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import { reveal } from 'svelte-reveal';

	type Props = SliceComponentProps<Content.AccordionSlice>;

	const { slice }: Props = $props();
	let value = $state(['']);
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="text-primary-900 dark:text-primary-50 bg-secondary-50 dark:bg-primary-900 scroll-smooth scroll-mt-34" id={slice.primary.title?.replace(" ", "_").toWellFormed().toLowerCase().toString()}>
	<div class="w-full max-w-7xl mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-2 bg-secondary-50 dark:bg-secondary-700 overflow-hidden">
			<div class="px-6 md:px-12 py-8 md:py-16" use:reveal={{x:-200, easing: 'easeInOutQuad'}}>
				<h2 class="h1 md:h2 lg:h1 font-display font-semibold">{slice.primary.title}</h2>
				{#if isFilled.keyText(slice.primary.subtitle) }
					<p class="text-lg leading-5 font-medium mt-4 mb-8 text-pretty">{slice.primary.subtitle}</p>
				{/if}
			</div>
			<div class="h-full content-center px-2 py-6 lg:px-4 lg:py-8 md:me-4" use:reveal={{ x:200, delay: 300, easing: 'easeInOutQuad'}}>
				<Accordion {value} onValueChange={(e) => (value = e.value)} multiple>
				 {#each slice.primary.item as item, i}
				 	{#if isFilled.keyText(item.title)}
						<Accordion.Item value={item.title} controlPadding="px-4 py-2" controlHover="hover:bg-secondary-100/50 dark:hover:bg-secondary-800 group-hover:bg-secondary-100/50 dark:group-hover:bg-secondary-800 md:hover:bg-secondary-100/50" panelRounded="rounded-lg" classes="group rounded-lg hover:bg-secondary-100/25 dark:hover:bg-secondary-600" >
							<!-- Control -->
							{#snippet lead()}<span class="font-light text-gray-800-200 text-lg leading-4 text-pretty">{i + 1} -</span>{/snippet}
							{#snippet control()}<div class="font-light text-gray-800-200 text-lg leading-4 text-pretty">{item.title}</div>{/snippet}
							<!-- Panel -->
							{#snippet panel()}<div class="text-sm text-pretty px-2 max-w-[80%] lg:max-w-[95%} rounded-b-lg"><PrismicRichText field={item.description}/></div>{/snippet}
						</Accordion.Item>
						<hr class="hr" />
					{/if}
				 {/each}
				</Accordion>
			</div>
		</div>

	</div>
</section>
