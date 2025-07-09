<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';
	import ContentList from './ContentList.svelte';

	type Props = SliceComponentProps<Content.ContentIndexSlice>; 

	const { slice, items }: Props = $props();

	// console.log(items)

</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="text-primary-900 dark:text-primary-50 bg-white dark:bg-primary-900 scroll-smooth scroll-mt-32">
	<div class="w-full max-w-7xl mx-auto">
		<div class="py-10 px-4 md:px-6 text-center">
			<div class="title h2 mb-8 font-display font-light">
				<h2>{slice.primary.heading}</h2>
			</div>
			{#if isFilled.richText(slice.primary.description) }
			<div class="prose-headings:h4 prose-headings:font-display prose-headings:font-light prose-headings:text-primary-700-300 prose-a:text-primary-600-400 prose-a:hover:underline prose-headings:text-balance prose-img:rounded-lg prose-img:my-8 space-y-4 py-4 text-pretty">
				<PrismicRichText field={slice.primary.description} />
			</div>
			{/if}

			<div class="grid">
				<ContentList fallbackImage={slice.primary.fallback_item_image} {items} viewMoreText={slice.primary.view_more_text} />
			</div>
		</div>
	</div>
</section>
