import { createClient } from '$lib/prismicio';

export const prerender = 'auto';

export async function load({ url }) {
	const client = createClient();

	const navigation = await client.getSingle('main_navigation');
	const footerNav = await client.getSingle('footernavigation');

	return {
		navigation,
		footerNav,
		url: url.pathname
	};
}
