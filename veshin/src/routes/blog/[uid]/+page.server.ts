import { createClient } from '$lib/prismicio';
import type { PageServerLoad, EntryGenerator } from './$types';

export const load: PageServerLoad = async ({ params, fetch, cookies }) => {
	const client = createClient({ fetch, cookies });

	const page = await client.getByUID('blog', params.uid);

	return {
		page
	};
};

export const entries: EntryGenerator = async () => {
	const client = createClient();

	const pages = await client.getAllByType('blog');

	return pages.map((page) => {
		return { uid: page.uid };
	});
};
