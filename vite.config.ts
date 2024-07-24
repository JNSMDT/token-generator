import svg from '@poppanator/sveltekit-svg';
import { sveltekit } from '@sveltejs/kit/vite';
import unoCss from 'unocss/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
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
					{ name: 'removeAttrs', params: { attrs: '(fill|stroke)' } },
				],
			},
		}),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
	css: {
		transformer: 'lightningcss',
	},
	build: {
		cssMinify: 'lightningcss',
	},
});
