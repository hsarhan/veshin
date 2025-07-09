<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.page.data.meta_title}</title>
	{#if data.page.data.meta_description}
		<meta name="description" content={data.page.data.meta_description} />
	{/if}
	{#if data.page.data.meta_title}
		<meta name="og:title" content={data.page.data.meta_title} />
	{/if}
	{#if data.page.data.meta_image}
		<meta name="og:image" content={data.page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<SliceZone slices={data.page.data.slices} {components} />