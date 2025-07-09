<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';
	import Label from './Label.svelte';
	import Heading from './Heading.svelte';
	import Paragraph from './Paragraph.svelte';

	type Props = SliceComponentProps<Content.RichTextSlice>;

	const { slice }: Props = $props();
	
</script>

<section class="text-surface-800 dark:text-surface-100 bg-surface-100 dark:bg-surface-800">
	<div class="w-full max-w-7xl mx-auto px-12 md:px-8 lg:px-12 py-8 rich-text">
	<PrismicRichText
		field={slice.primary.content}
		components={{
			heading2: Heading,
			paragraph: Paragraph,
			label: Label
		}}
	/>
	</div>
</section>
<style></style>