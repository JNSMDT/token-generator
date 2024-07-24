export default [
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					ignoreRestSiblings: true,
					varsIgnorePattern: '^_',
				},
			],
			'import/no-unresolved': 'off',
			'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
			'no-unused-vars': 'off',
			'perfectionist/sort-imports': [
				'error',
				{
					groups: [
						'type',
						'internal-type',
						['parent-type', 'sibling-type', 'index-type'],
						['builtin', 'external'],
						'internal',
						['parent', 'sibling', 'index'],
						'side-effect',
						'style',
						'object',
						'unknown',
					],
					internalPattern: [
						'$lib/**',
						'$app/**',
					],
					newlinesBetween: 'always',
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-interfaces': [
				'error',
				{
					groupKind: 'required-first',
					order: 'asc',
					type: 'natural',
				},
			],
			'unicorn/filename-case': [
				'error',
				{
					cases: {
						camelCase: true,
						pascalCase: true,
					},
					ignore: ['\\.svelte$'],
				},
			],
			'unicorn/no-null': 'off',
			'unicorn/numeric-separators-style': 'off',
		},
	},
];
