<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.AboutSlice>;

	const { slice }: Props = $props();
</script>

<section class="text-surface-800 dark:text-surface-100 bg-surface-100 dark:bg-surface-800">
	<div class="w-full max-w-7xl mx-auto">
		<PrismicImage field={slice.primary.about_image} class="w-full object-cover h-fit lg:h-[65dvh]" />
	
		<div class="p-8 bg-secondary-50-950">
			<h2 class="h2 font-semibold text-primary-900-100">{slice.primary.heading}</h2>
			<!-- Render content as HTML -->
			<div class="prose-headings:h4 prose-headings:font-display prose-headings:font-light prose-headings:text-primary-700-300 prose-a:text-primary-600-400 prose-a:hover:underline prose-headings:text-balance space-y-4 py-4 text-pretty">
				<PrismicRichText field={slice.primary.description}/>
			</div>
			<PrismicLink field={slice.primary.button_link}>
				 <Button cta={slice.primary.button_label} />
			</PrismicLink>
				
		</div>
	</div>
</section>

<style>
</style>
