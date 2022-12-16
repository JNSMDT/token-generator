import globals from 'globals';
// Plugins
import sveltePlugin from 'eslint-plugin-svelte';

// Parser
import svelteParser from 'svelte-eslint-parser';

// configs
import jsonConfigs from './configs/eslint/jsonConfigs.js';
import unicornConfig from './configs/eslint/unicornConfig.js';
import importConfig from './configs/eslint/importConfig.js';

// Rules
import baseRules from './configs/eslint/baseRules.js';


export default [
	{
		files: ['**/*.js', '**/*.mjs'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	baseRules,
	unicornConfig,
	importConfig,
	{
		files: ['**/*.svelte'],
		plugins: {
			svelte: sveltePlugin
		},
		languageOptions: {
			parser: svelteParser,
			globals: {
				...globals.browser
			}
		},
		rules: {
			...sveltePlugin.configs.base.rules,
			...sveltePlugin.configs.recommended.rules,
			indent: 'off',
			'svelte/indent': ['error', { indent: 'tab', alignAttributesVertically: true }],
			'no-undef': 'off',
			// 'no-inner-declarations': 'off',
			'no-unused-vars': 'off',
			'no-self-assign': 'off',
			'svelte/html-quotes': [
				'error',
				{
					prefer: 'double',
					dynamic: {
						quoted: false,
						avoidInvalidUnquotedInHTML: false
					}
				}
			],
			// import
			'import/first': 'off',
			'import/no-duplicates': 'off',
			'import/no-mutable-exports': 'off',
			'import/prefer-default-export': 'off',
			'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
			'svelte/valid-compile': 'off',
			'import/extensions': 'off'
		}
	},
	...jsonConfigs
];