// FIXME: Why is this only working without ssr?!
/* eslint-disable import/prefer-default-export */

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		ssr: false
	});

	return response;
}
