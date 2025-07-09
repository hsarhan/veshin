<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.HeroSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="text-primary-900 dark:text-primary-50 bg-secondary-100 dark:bg-primary-800">
	<div class="w-full max-w-7xl mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-2 items-center min-h-[65dvh]">

			<div class="p-8 md:z-10 order-1 md:order-2">
				<h2 class="h1 md:h2 lg:h1 font-display font-semibold">{slice.primary.title}</h2>
				<h3 class="h3 font-light my-6 text-pretty md:h6 md:font-light">{slice.primary.subtitle}</h3>
				{#if isFilled.link(slice.primary.hero_link) }
					<PrismicLink field={slice.primary.hero_link}><Button cta={slice.primary.description} clickHandlerURL={slice.primary.hero_link} /></PrismicLink>
				{:else}
					<p class="text-lg my-8">{slice.primary.description}</p>
				{/if}
			</div>
			
			<div class="bg-primary-400-600 h-full content-center text-center order-2 md:order-1">
				<PrismicImage field={slice.primary.hero_image} class="w-fit object-cover h-full lg:h-[65dvh]" />
			</div>
			
		</div>

	</div>
</section>
