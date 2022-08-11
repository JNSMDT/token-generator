import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), svg()],
	test: {
		globals: true,
		include: ['test/**/*.{test,spec}.js'],
		setupFiles: ['test/setup.js'],
		reporters: 'verbose'
	}
};

export default config;
