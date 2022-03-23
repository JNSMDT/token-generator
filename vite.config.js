import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: [
			{ find: '$lib', replacement: resolve('src/lib') },
			{ find: '$assets', replacement: resolve('/src/assets') },
			{ find: '$components', replacement: resolve('/src/components') }
		]
	}
});
