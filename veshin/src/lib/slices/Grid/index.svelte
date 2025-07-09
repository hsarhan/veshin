<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.GridSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="text-primary-900 dark:text-primary-50 bg-surface-100 dark:bg-surface-800">
	{#if slice.variation === 'gridImageRight'}	
		<!-- Image Right -->
		<div class="w-full max-w-7xl mx-auto scroll-smooth scroll-mt-34" id={slice.primary.title?.replace(" ", "_").toWellFormed().toLowerCase().toString()} >
			<div class="grid grid-cols-1 md:grid-cols-2 items-center min-h-[65dvh] bg-primary-100 dark:bg-secondary-700 md:bg-secondary-50">

				<div class="order-2 md:order-1 px-12 md:px-8 lg:px-12 py-8 md:z-10 md:w-[90%]">
					<h2 class="h1 md:h2 lg:h1 font-display font-semibold text-balance">{slice.primary.title}</h2>
					{#if isFilled.keyText(slice.primary.subtitle) }
						<p class="text-lg leading-5 font-medium mt-4 mb-8 text-pretty">{slice.primary.subtitle}</p>
					{/if}
					<div class="prose-headings:h4 prose-headings:font-display prose-headings:font-light prose-headings:text-primary-700-300 prose-a:text-primary-600-400 prose-a:hover:underline prose-headings:text-balance prose-li:list-inside prose-li:ps-2 prose-li:pb-3 prose-li:list-decimal space-y-4 py-4 text-pretty"><PrismicRichText field={slice.primary.description} /></div>
					{#if isFilled.link(slice.primary.cta) }
						<PrismicLink field={slice.primary.cta}><Button cta={slice.primary.cta.text} /></PrismicLink>					
					{/if}

				</div>

				<div class="order-1 md:order-2 bg-primary-400-600 h-full content-center text-center">
					<PrismicImage field={slice.primary.image} class="w-fit object-cover h-full" />
				</div>

			</div>

		</div>
	{:else}
		<div class="w-full max-w-7xl mx-auto scroll-smooth scroll-mt-34" id={slice.primary.title?.replace(" ", "_").toWellFormed().toLowerCase().toString()} >
			<div class="grid grid-cols-1 md:grid-cols-2 items-center min-h-[65dvh] bg-secondary-100 md:bg-secondary-50 dark:bg-secondary-800">

				<div class="bg-primary-400-600 h-full content-center text-center">
					<PrismicImage field={slice.primary.image} class="w-fit object-cover h-full" />
				</div>

				<div class="px-12 md:px-8 lg:px-12 py-8 md:z-10 md:w-[90%]">
					<h2 class="h1 md:h2 lg:h1 font-display font-semibold text-balance">{slice.primary.title}</h2>
					{#if isFilled.keyText(slice.primary.subtitle) }
						<p class="text-lg leading-5 font-medium mt-4 mb-8 text-pretty">{slice.primary.subtitle}</p>
					{/if}
					{#if isFilled.link(slice.primary.email_link) }
						<PrismicLink field={slice.primary.email_link}><p class="font-medium mt-6 text-pretty hover:underline">{slice.primary.email_link.text}</p></PrismicLink>
					{/if}
					<div class="prose-headings:h4 prose-headings:font-display prose-headings:font-light prose-headings:text-primary-700-300 prose-a:text-primary-600-400 prose-a:hover:underline prose-headings:text-balance prose-li:list-inside prose-li:ps-2 prose-li:pb-3 prose-li:list-decimal space-y-4 py-4 text-pretty"><PrismicRichText field={slice.primary.description} /></div>
					{#if isFilled.link(slice.primary.cta) }
						<PrismicLink field={slice.primary.cta}><Button cta={slice.primary.cta.text} /></PrismicLink>					
					{/if}

				</div>

			</div>

		</div>
	{/if}
</section>

