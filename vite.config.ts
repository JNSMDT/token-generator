import svg from '@poppanator/sveltekit-svg';
import { sveltekit } from '@sveltejs/kit/vite';
import unoCss from 'unocss/vite';
import { defineConfig } from 'vitest/config';

import { execSync } from 'node:child_process';
import { env } from 'node:process';

const appRevision = execSync('git rev-parse HEAD').toString();

export default defineConfig({
	build: {
		cssMinify: 'lightningcss',
	},
	css: {
		transformer: 'lightningcss',
	},
	define: {
		__APP_INFO__: JSON.stringify({
			name: env.npm_package_name,
			version: env.npm_package_version,
			revision: appRevision,
			abbrevRevision: appRevision.substring(0, 6),
		}),
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
					},
				],
			},
		}),
	],

	test: {
		globals: true,
		include: ['tests/**/{test,spec}.ts'],
		reporters: 'verbose',
		setupFiles: ['tests/setup.ts'],
	},
});
