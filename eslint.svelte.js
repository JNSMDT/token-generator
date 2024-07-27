/**
 * This Config File is based on the Version 2.39.0 of the ESLint Plugin Svelte.
 */
import pluginSvelte from 'eslint-plugin-svelte';
import fs from 'node:fs';
import tsEslint from 'typescript-eslint';

const isUnoCss = fs.existsSync('./unocss.config.ts');

// Possible Errors see https://github.com/sveltejs/eslint-plugin-svelte?tab=readme-ov-file#possible-errors
const rulesPossibleErrors = {
	/* 'svelte/infinite-reactive-loop': [], */
	'svelte/no-dom-manipulating': ['error'],

	/* 'svelte/no-dupe-else-if-blocks': [], // disabled cause is already covered by recommended */
	'svelte/no-dupe-on-directives': ['error'],

	/* 'svelte/no-dupe-style-properties': [], // disabled cause is already covered by recommended */
	'svelte/no-dupe-use-directives': ['error'],

	/* 'svelte/no-dynamic-slot-name': [], // disabled cause is already covered by recommended */
	'svelte/no-export-load-in-svelte-module-in-kit-pages': ['error'],

	/* 'svelte/no-not-function-handler': [], // disabled cause is already covered by recommended */
	/* 'svelte/no-object-in-text-mustaches': [], // disabled cause is already covered by recommended */
	'svelte/no-reactive-reassign': ['error'],

	/* 'svelte/no-shorthand-style-property-overrides': [], // disabled cause is already covered by recommended */
	'svelte/no-store-async': ['error'],

	/* 'svelte/no-unknown-style-directive-property': [], // disabled cause is already covered by recommended */
	'svelte/require-store-callbacks-use-set-param': ['error'],
	'svelte/require-store-reactive-access': ['error'],

	/* 'svelte/valid-compile': [], // disabled cause is already covered by recommended */
	'svelte/valid-prop-names-in-kit-pages': ['error'],
};

const rulesSecurityVulnerability = {
	/* 'svelte/no-at-html-tags': [] // disabled cause is already covered by recommended */
	'svelte/no-target-blank': ['error'],
};

// Best Practices see https://github.com/sveltejs/eslint-plugin-svelte?tab=readme-ov-file#best-practices
const rulesBestPractices = {
	'svelte/block-lang': ['error', { script: ['js', 'ts'] }],
	'svelte/button-has-type': ['error'],

	/* 'svelte/no-at-debug-tags': ['error'], // disabled cause is already covered by recommended */
	'svelte/no-ignored-unsubscribe': ['error'],
	'svelte/no-immutable-reactive-statements': ['error'],
	'svelte/no-inline-styles': ['error'],
	'svelte/no-reactive-functions': ['error'],
	'svelte/no-reactive-literals': ['error'],
	'svelte/no-svelte-internal': ['error'],
	'svelte/no-unused-class-name': isUnoCss ? 'off' : ['error'],

	/* 'svelte/no-unused-svelte-ignore' : ['error'], // disabled cause is already covered by recommended */
	'svelte/no-useless-mustaches': ['error'],
	'svelte/prefer-destructured-store-props': ['error'],
	'svelte/require-each-key': ['error'],
	'svelte/require-optimized-style-attribute': ['error'],
	'svelte/require-stores-init': ['error'],
	'svelte/valid-each-key': ['error'],
};

// Stylistiv Rules see https://github.com/sveltejs/eslint-plugin-svelte?tab=readme-ov-file#stylistic-issues
const rulesStylistic = {
	'@stylistic/indent': 'off',
	'svelte/derived-has-same-inputs-outputs': 'error',
	'svelte/first-attribute-linebreak': ['error',	{	multiline: 'beside', singleline: 'beside' }],
	'svelte/html-closing-bracket-spacing': ['error', {	endTag: 'never', selfClosingTag: 'always', startTag: 'never' }],
	'svelte/html-quotes': ['error', { prefer: 'double' }],
	'svelte/html-self-closing': ['error', 'always'],
	'svelte/indent': ['error', { alignAttributesVertically: false, indent: 'tab', switchCase: 1 }],
	'svelte/max-attributes-per-line': ['error', { multiline: 1, singleline: 3 }],
	'svelte/mustache-spacing': [
		'error', {
			attributesAndProps: 'always',
			directiveExpressions: 'always',
			tags: {
				closingBrace: 'never',
				openingBrace: 'never',
			},
			textExpressions: 'always',
		},
	],
	'svelte/no-extra-reactive-curlies': 'error',
	'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
	'svelte/prefer-class-directive': 'error',
	'svelte/prefer-style-directive': 'error',
	'svelte/shorthand-attribute': 'error',
	'svelte/shorthand-directive': 'error',

	// disabled since we are using perfectionist rules
	'svelte/sort-attributes': 'off',
	'svelte/spaced-html-comment': ['error', 'always'],
};

// Extension Rules see https://github.com/sveltejs/eslint-plugin-svelte?tab=readme-ov-file#extension-rules
const rulesExtension = {
	/* 'svelte/no-inner-declarations': ['error'] // disabled cause is already covered by recommended */

	// Don't need ESLint's no-trailing-spaces rule, so turn it off.
	'no-trailing-spaces': 'off',
	'svelte/no-trailing-spaces': ['error', { ignoreComments: true }],
};

// SvelteKit Rules see https://github.com/sveltejs/eslint-plugin-svelte?tab=readme-ov-file#sveltekit
const rulesSvelteKit = {
	'svelte/no-goto-without-base': ['error'],
};

export default [
	...pluginSvelte.configs['flat/recommended'],

	{
		files: ['*.svelte', '**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tsEslint.parser,
			},
		},
		rules: {
			...rulesPossibleErrors,
			...rulesSecurityVulnerability,
			...rulesBestPractices,
			...rulesStylistic,
			...rulesExtension,
			...rulesSvelteKit,
		},
	},
];
