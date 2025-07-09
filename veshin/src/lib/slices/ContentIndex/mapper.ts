import type { Client, Content, SliceMapper } from '@prismicio/client';
import type { ComponentProps } from 'svelte';

import ContentIndex from './index.svelte';

type Context = { client: Client<Content.AllDocumentTypes> };

type ContentIndexProps = {
	slice: Content.ContentIndexSlice;
	items: Content.BlogDocument<string>[] | Content.MaterialsDocument<string>[];
};

const mapper: SliceMapper<Content.ContentIndexSlice, ContentIndexProps, Context> = async ({
	slice,
	context
}) => {
	const { client } = context;
	const items =
		slice.primary.content_type === 'Blog'
			? await client.getAllByType('blog')
			: await client.getAllByType('materials');

	return { slice, items };
};

export default mapper;
