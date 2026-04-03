import svg from '@poppanator/sveltekit-svg';
import { sveltekit } from '@sveltejs/kit/vite';
import unoCss from 'unocss/vite';
import { defineConfig } from 'vitest/config';

import { execSync } from 'node:child_process';
import { env } from 'node:process';

function getAppRevision() {
	if (env.APP_REVISION) {
		return env.APP_REVISION;
	}

	try {
		return execSync('git rev-parse HEAD').toString().trim();
	} catch {
		console.warn("Couldn't find AppRevision, default to unknown");
		return 'unknown';
	}
}

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
			revision: getAppRevision(),
			abbrevRevision: getAppRevision().substring(0, 6),
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
