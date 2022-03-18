module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	extends: [
		'plugin:import/recommended',
		'plugin:jsonc/recommended-with-jsonc',
		'plugin:@typescript-eslint/recommended',
	],
	ignorePatterns: [
		'*.min.*',
		'CHANGELOG.md',
		'dist',
		'LICENSE*',
		'output',
		'coverage',
		'public',
		'temp',
		'packages-lock.json',
		'pnpm-lock.yaml',
		'yarn.lock',
		'__snapshots__',
		'!.github',
		'!.vitepress',
		'!.vscode',
	],
	plugins: [
		'html',
		'unicorn',
	],
	settings: {
		'import/resolver': {
			node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
		},
	},
	overrides: [
		{
			files: ['*.json', '*.json5'],
			parser: 'jsonc-eslint-parser',
			rules: {
				'quotes': ['error', 'double'],
				'quote-props': ['error', 'always'],
				'comma-dangle': ['error', 'never'],
			},
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
							'eslintConfig',
						],
					},
					{
						pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
						order: { type: 'asc' },
					},
				],
			},
		},
		{
			files: ['*.d.ts'],
			rules: {
				'import/no-duplicates': 'off',
			},
		},
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
		{
			files: ['scripts/**/*.*', 'cli.*'],
			rules: {
				'no-console': 'off',
			},
		},
		{
			files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
			rules: {
				'no-unused-expressions': 'off',
			},
		},
	],
	rules: {

		// import
		'import/order': 'error',
		'import/first': 'error',
		'import/no-mutable-exports': 'error',
		'import/no-unresolved': 'off',
		'import/no-absolute-path': 'off',

		// Common
		'semi': 'off',
		'padded-blocks': ['error', 'never'],
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
		'curly': ['error', 'multi-or-nest', 'consistent'],
		'quotes': ['error', 'single'],
		'quote-props': ['error', 'consistent-as-needed'],
		'no-unused-vars': 'warn',
		'no-param-reassign': 'off',
		'array-bracket-spacing': ['error', 'never'],
		'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
		'block-spacing': ['error', 'always'],
		'camelcase': 'off',
		'comma-spacing': ['error', { before: false, after: true }],
		'comma-style': ['error', 'last'],
		'comma-dangle': ['error', 'always-multiline'],
		'no-constant-condition': 'warn',
		'no-debugger': 'error',
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'no-cond-assign': ['error', 'always'],
		'func-call-spacing': ['off', 'never'],
		'key-spacing': ['error', { beforeColon: false, afterColon: true }],
		'indent': ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
		'no-restricted-syntax': [
			'error',
			'DebuggerStatement',
			'LabeledStatement',
			'WithStatement',
		],
		'object-curly-spacing': ['error', 'always'],
		'no-return-await': 'off',
		'space-before-function-paren': ['error', 'never'],

		// es6
		'no-var': 'error',
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: true,
			},
		],
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],
		'object-shorthand': [
			'error',
			'always',
			{
				ignoreConstructors: false,
				avoidQuotes: true,
			},
		],
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'template-curly-spacing': 'error',
		'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
		'generator-star-spacing': 'off',
		'spaced-comment': ['error', 'always', {
			line: {
				markers: ['/'],
				exceptions: ['/', '#'],
			},
			block: {
				markers: ['!'],
				exceptions: ['*'],
				balanced: true,
			},
		}],

		// best-practice
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'consistent-return': 'off',
		'complexity': ['off', 11],
		'eqeqeq': ['error', 'smart'],
		'no-alert': 'warn',
		'no-case-declarations': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-with': 'error',
		'no-void': 'error',
		'no-useless-escape': 'off',
		'vars-on-top': 'error',
		'require-await': 'off',
		'no-return-assign': 'off',
		'operator-linebreak': ['error', 'before'],


		// unicorns
		// Pass error message when throwing errors
		'unicorn/error-message': 'error',
		// Uppercase regex escapes
		'unicorn/escape-case': 'error',
		// Array.isArray instead of instanceof
		'unicorn/no-array-instanceof': 'error',
		// Prevent deprecated `new Buffer()`
		'unicorn/no-new-buffer': 'error',
		// Keep regex literals safe!
		'unicorn/no-unsafe-regex': 'off',
		// Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
		'unicorn/number-literal-case': 'error',
		// ** instead of Math.pow()
		'unicorn/prefer-exponentiation-operator': 'error',
		// includes over indexOf when checking for existence
		'unicorn/prefer-includes': 'error',
		// String methods startsWith/endsWith instead of more complicated stuff
		'unicorn/prefer-starts-ends-with': 'error',
		// textContent instead of innerText
		'unicorn/prefer-text-content': 'error',
		// Enforce throwing type error when throwing error while checking typeof
		'unicorn/prefer-type-error': 'error',
		// Use new when throwing error
		'unicorn/throw-new-error': 'error',

		'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
		'eslint-comments/disable-enable-pair': 'off',
		'import/no-named-as-default-member': 'off',
		'n/no-callback-literal': 'off',

		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
				allowSeparatedGroups: false,
			},
		],

		'indent': ['error', 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 1,
			outerIIFEBody: 1,
			MemberExpression: 1,
			FunctionDeclaration: { parameters: 1, body: 1 },
			FunctionExpression: { parameters: 1, body: 1 },
			CallExpression: { arguments: 1 },
			ArrayExpression: 1,
			ObjectExpression: 1,
			ImportDeclaration: 1,
			flatTernaryExpressions: false,
			ignoreComments: false,
			ignoredNodes: ['TemplateLiteral *', 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
			offsetTernaryExpressions: true,
		}],

		'import/named': 'off',

		// TS
		'@typescript-eslint/semi': ['error', 'always'],
		'@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
		'@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
		'@typescript-eslint/type-annotation-spacing': ['error', {}],
		'@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
		'@typescript-eslint/prefer-ts-expect-error': 'error',

		// Override JS
		'no-useless-constructor': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': 'error',
		'@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
		'@typescript-eslint/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
		'@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
		'@typescript-eslint/object-curly-spacing': ['error', 'always'],

		// off
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-namespace': 'off',
	},
};
