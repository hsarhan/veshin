import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		adapter: adapter({
			edge: false,
			split: true
		})
	},
	prerender: {
		handleHttpError: ({ path, referrer, message }) => {
			// ignore deliberate link to shiny 404 page
			if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
				return;
			}
			throw new Error(message);
		}
	}
};

export default config;
