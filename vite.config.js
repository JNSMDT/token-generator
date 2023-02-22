// svelte stuff

import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';

// postcss stuff

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import nesting from 'postcss-nesting';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), svg()],
	css: {
		postcss: {
			plugins: [
				nesting(),
				// Some plugins, like tailwindcss/nesting, need to run before Tailwind,
				tailwindcss({
					config: './configs/tailwind.config.cjs'
				}),
				// But others, like autoprefixer, need to run after,
				autoprefixer
			]
		}
	},
	test: {
		globals: true,
		include: ['test/**/*.{test,spec}.js'],
		setupFiles: ['test/setup.js'],
		reporters: 'verbose'
	}
};

export default config;
