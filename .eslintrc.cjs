module.exports = {

	extends: [
		'airbnb-base',
		'plugin:unicorn/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:jsonc/recommended-with-jsonc',
		'plugin:@ota-meshi/svelte/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	plugins: ['unicorn', 'import'],
	settings: {
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			typescript: {
				directory: './tsconfig.json'
			},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}
		}
	},
	rules: {
		'max-len': 'off',
		// tabs
		'no-tabs': 'off',
		indent: 'off',
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

		// import
		'import/no-unresolved': 'off',
		'import/order': 'error',
		'import/first': 'error',
		'import/named': 'off',
		'import/no-mutable-exports': 'error',
		'import/no-absolute-path': 'off',
		'import/extensions': ['error', 'ignorePackages', {
			ts: 'never',
			tsx: 'never',
			js: 'never',
			jsx: 'never',
			mjs: 'never'
		}],

		// Unicorn
		// Pass error message when throwing errors
		'unicorn/error-message': 'error',
		// Uppercase regex escapes
		'unicorn/escape-case': 'error',
		// Array.isArray instead of instanceof
		'unicorn/no-instanceof-array': 'error',
		// Prevent deprecated `new Buffer()`
		'unicorn/no-new-buffer': 'error',
		// Keep regex literals safe!
		'unicorn/no-unsafe-regex': 'off',
		// Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
		'unicorn/number-literal-case': 'error',
		// includes over indexOf when checking for existence
		'unicorn/prefer-includes': 'error',
		// String methods startsWith/endsWith instead of more complicated stuff
		'unicorn/prefer-string-starts-ends-with': 'error',
		// textContent instead of innerText
		'unicorn/prefer-dom-node-text-content': 'error',
		// Enforce throwing type error when throwing error while checking typeof
		'unicorn/prefer-type-error': 'error',
		// Use new when throwing error
		'unicorn/throw-new-error': 'error',
		// Use numeric seperator
		'unicorn/numeric-separators-style': ['error', {
			onlyIfContainsSeparator: false,
			hexadecimal: {
				minimumDigits: 0,
				groupLength: 2
			},
			binary: {
				minimumDigits: 0,
				groupLength: 4
			},
			octal: {
				minimumDigits: 0,
				groupLength: 4
			},
			number: {
				minimumDigits: 7,
				groupLength: 3
			}
		}],
		'unicorn/filename-case': [
			'error',
			{
				cases: {
					camelCase: true,
					pascalCase: true
				}
			}
		]
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			},
			env: { browser: true, node: false },
			rules: {
				'no-inner-declarations': 'off',
				'no-unused-vars': 'off',
				'no-self-assign': 'off',
				// import
				'import/first': 'off',
				'import/no_duplicates': 'off',
				'import/no-mutable-exports': 'off',
				'import/prefer-default-export': 'off',
				'import/no-extraneous-dependencies': 'off'
			}
		},
		{
			files: ['src/**/*.ts', 'src/**/*.js'],
			parser: '@typescript-eslint/parser',
			env: { browser: true, node: false }
		},
		{
			files: ['*.json', '*.json5', '*.jsonc'],
			parser: 'jsonc-eslint-parser'
		},
		{
			files: ['package.json'],
			parser: 'jsonc-eslint-parser',
			rules: {
				'jsonc/sort-keys': [
					'error',
					{
						pathPattern: '^$',
						order: [
							'name',
							'type',
							'version',
							'private',
							'packageManager',
							'description',
							'keywords',
							'license',
							'author',
							'repository',
							'funding',
							'main',
							'module',
							'types',
							'unpkg',
							'jsdelivr',
							'exports',
							'files',
							'bin',
							'sideEffects',
							'scripts',
							'peerDependencies',
							'peerDependenciesMeta',
							'dependencies',
							'optionalDependencies',
							'devDependencies',
							'husky',
							'lint-staged',
							'eslintConfig'
						]
					},
					{
						pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
						order: { type: 'asc' }
					}
				]
			}
		}
	]
};
