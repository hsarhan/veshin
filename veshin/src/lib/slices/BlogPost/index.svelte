<script lang="ts">
	import { asDate, isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.BlogPostSlice>;

	const { slice }: Props = $props();
	let date = $derived(asDate(slice.primary.publish_date));
	let weekday = $derived(date?.toLocaleDateString("en-US", { weekday: 'long' }));
	let month = $derived(date?.toLocaleDateString("en-US", { month: 'long' }));
	let day = $derived(date?.toLocaleDateString("en-US", { day: 'numeric' }));
	let year = $derived(date?.toLocaleDateString("en-US", { year: 'numeric' }));
</script>

<svelte:head>
	<title>{slice.primary.title} - Veshin Factory Blog</title>
</svelte:head>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="text-surface-800 dark:text-surface-100 bg-surface-100 dark:bg-surface-800">
	<div class="w-full max-w-4xl mx-auto">
		<PrismicImage field={slice.primary.featured_image} class="w-full object-cover h-fit lg:h-[35dvh] lg:object-top" />
	
		<div class="p-8 bg-secondary-50-950">
			<h2 class="h2 font-semibold text-primary-900-100">{slice.primary.title}</h2>
			{#if isFilled.date(slice.primary.publish_date)}
				<small class="text-secondary-500 dark:text-secondary-300">Published on</small>
			{/if}
			<small>{weekday}, {month} {day} of {year}</small>
			<!-- Render content as HTML -->
			<div class="prose-headings:h4 prose-headings:font-display prose-headings:font-light prose-headings:text-primary-700-300 prose-a:text-primary-600-400 prose-a:hover:underline prose-headings:text-balance prose-img:rounded-lg prose-img:my-8 space-y-4 py-4 text-pretty">
				<PrismicRichText field={slice.primary.post_content}/>
			</div>
			
		</div>
	</div>
</section>
