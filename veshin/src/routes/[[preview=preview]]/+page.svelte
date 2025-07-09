<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import type { PageProps } from './$types';

	import { components } from '$lib/slices';

	const { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.page.data.meta_title}</title>
</svelte:head>

<SliceZone slices={data.page.data.slices} {components} />
