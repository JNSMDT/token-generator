module.exports = {
	extends: '@antfu/eslint-config-ts',
	plugins: ['svelte3'],
	rules: {
		'semi': 'off',
		'@typescript-eslint/semi': ['error', 'always'],
		// tabs
		'no-tabs': 'off',
		'@typescript-eslint/indent': ['error', 'tab', { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
		// trailing-commas
		'comma-dangle': ['error', 'never'],
		'@typescript-eslint/comma-dangle': ['error', 'never'],

		// new lines
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			{ blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
		],

		// max-len
		'max-len': ['error', {
			code: 120,
			ignoreComments: true,
			ignoreTrailingComments: true,
			ignoreUrls: true,
			ignoreTemplateLiterals: true,
			ignoreRegExpLiterals: true
		}]
	},
	settings: {
		'svelte3/typescript': () => require('typescript') // pass the TypeScript package to the Svelte plugin
	},
	overrides: [
		{
			files: ['**/*.svelte'],
			processor: 'svelte3/svelte3'

		}
	]
};
