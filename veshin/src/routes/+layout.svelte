<script lang="ts">
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/state';
	import { repositoryName } from '$lib/prismicio';
	import "../app.css";
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { fade, fly } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	import { Toaster } from '@skeletonlabs/skeleton-svelte';
	import { toaster } from '../toaster-svelte';

	let { children, data } = $props();
	const duration = 500; // Animation
	
</script>

<svelte:head>
	<title>{page.data.title}</title>
	{#if page.data.meta_description}
		<meta name="description" content={page.data.meta_description} />
	{/if}
	{#if page.data.meta_title}
		<meta name="og:title" content={page.data.meta_title} />
	{/if}
	{#if page.data.meta_image}
		<meta name="og:image" content={page.data.meta_image} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<Toaster {toaster}></Toaster>
<Nav navigation={data.navigation} />

{#key data.url }	
	<main class="pt-26 md:pt-24 -mt-1 scroll-smooth" in:fly={{y: 50, duration, delay: duration, easing: circOut }} out:fade={{duration, easing: circOut }}>
		{@render children()}
	</main>
	<Footer navigation={data.navigation} footerNav={data.footerNav} />
{/key}


<PrismicPreview {repositoryName} />
