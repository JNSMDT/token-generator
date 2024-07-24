import eslint from '@eslint/js';
import unocss from '@unocss/eslint-config/flat';
import perfectionistNatural from 'eslint-plugin-perfectionist';
import pluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

import personalConfig from './eslint.personal.js';
import stylisticConfig from './eslint.stylistic.js';
import svelteConfig from './eslint.svelte.js';

export default [
	eslint.configs.recommended,
	stylisticConfig,
	unocss,
	perfectionistNatural.configs['recommended-natural'],
	{
		languageOptions: {
			ecmaVersion: 2022,
			globals: {
				...globals.node,
				...globals.browser,
				...globals.es2017,
			},
			sourceType: 'module',
		},
	},
	{
		plugins: {
			unicorn: pluginUnicorn,
		},
	},
	...tsEslint.configs.recommended,

	...svelteConfig,

	...personalConfig,
];

