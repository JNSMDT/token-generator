import svg from '@poppanator/sveltekit-svg';
import { sveltekit } from '@sveltejs/kit/vite';
import unoCss from 'unocss/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	build: {
		cssMinify: 'lightningcss',
	},
	css: {
		transformer: 'lightningcss',
	},
	define: {
		APP_VERSION: JSON.stringify(process.env.npm_package_version),
	},
	plugins: [
		sveltekit(),
		unoCss(),
		svg({
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',

						// by default svgo removes the viewBox which prevents svg icons from scaling
						// not a good idea! https://github.com/svg/svgo/pull/1461
						params: { overrides: { removeViewBox: false } },
					},
				],
			},
		}),
	],

	test: {
		globals: true,
		include: ['test/**/*.{test,spec}.ts'],
		reporters: 'verbose',
		setupFiles: ['test/setup.js'],
	},
});
