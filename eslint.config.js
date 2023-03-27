/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/**
 * Thanks to https://github.com/AndreaPontrandolfo helping me putting this together with his work
 * on https://github.com/AndreaPontrandolfo/sheriff.
 */

// Plugins
import eslintRecommended from '@eslint/js';
import pluginUnicorn from 'eslint-plugin-unicorn';
import pluginSvelte from 'eslint-plugin-svelte';
import parserSvelte from 'svelte-eslint-parser';
import pluginTypescript from '@typescript-eslint/eslint-plugin';
import pluginTypescriptParser from '@typescript-eslint/parser';
import pluginImport from 'eslint-plugin-import';
import pluginJest from 'eslint-plugin-jest';
import configPrettier from 'eslint-config-prettier';
import globals from 'globals';

const jsExtensions = 'js,mjs,cjs,cts,jsx,mjsx';
const tsExtentions = 'ts,mts,tsx,mtsx';
const tsFiles = `**/*{${tsExtentions}}`;
const supportedFileTypes = `**/*{${jsExtensions},${tsExtentions}}`;

function pluginRules(plugin, config = 'recommended') {
	return plugin.configs[config].rules;
}

// Handpicked Rules

// Options
const langOptionsTypescript = {
	parser: pluginTypescriptParser,
	parserOptions: {
		ecmaFeatures: { modules: true },
		project: './tsconfig.json'
	}
};

export default [
	{
		files: [supportedFileTypes],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	eslintRecommended.configs.recommended,
	{
		files: [supportedFileTypes]
	},
	{
		files: [tsFiles],
		plugins: {
			'@typescript-eslint': pluginTypescript
		},
		languageOptions: langOptionsTypescript,
		rules: {
			...pluginRules(pluginTypescript)
			// ...pluginRules(pluginTypescript, 'recommended-requiring-type-checking')
		}
	},
	{
		files: [supportedFileTypes],
		plugins: {
			unicorn: pluginUnicorn
		},
		rules: {
			...pluginRules(pluginUnicorn)
		}
	},
	{
		files: ['**/*.svelte'],
		plugins: {
			svelte: pluginSvelte
		},
		languageOptions: {
			parser: parserSvelte,
			parserOptions: {
				parser: pluginTypescriptParser,
				project: './tsconfig.json',
				extraFileExtensions: ['.svelte']
			}
		},
		rules: {
			...pluginRules(pluginSvelte)
		}
	},
	{
		files: [`**/*.{test,spec}.{${jsExtensions},${tsExtentions}}`, '**/tests/**', '**/__tests__/**'],
		plugins: {
			jest: pluginJest
		},
		rules: {
			...pluginRules(pluginJest),
			'@typescript-eslint/unbound-method': 'off', // see reference: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
			'jest/unbound-method': 'error' // we need to overwrite @typescript-eslint/unbound-method
		}
	},
	{
		files: [supportedFileTypes],
		plugins: { import: pluginImport },
		settings: {
			'import/parsers': {
				'@typescript-eslint/parser': ['.ts', '.tsx']
			},
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true
				},
				node: true
			}
		}
	},
	// disable all eslint formating rules
	configPrettier
];
