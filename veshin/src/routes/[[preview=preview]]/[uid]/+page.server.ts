import { asText, mapSliceZone } from '@prismicio/client';
import { createClient } from '$lib/prismicio';
import { mappers } from '$lib/slices/mappers';

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const page = await client.getByUID('page', params.uid);

	const slices = await mapSliceZone(page.data.slices, mappers, { client });

	return {
		slices,
		title: asText(page.data.title),
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image.url
	};
}

export async function entries() {
	const client = createClient();

	const pages = await client.getAllByType('page');

	return pages.map((page) => {
		return { uid: page.uid };
	});
}
