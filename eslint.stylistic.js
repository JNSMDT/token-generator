/**
 * This Config File is based on the version 2.2.1 of the ESLint Stylistic Plugin.
 */
/* eslint-disable unicorn/filename-case */
/* eslint-disable unicorn/prefer-module */
import pluginStylistic from '@stylistic/eslint-plugin';

const indent = 'tab';
const quotes = 'single';

/** @type {import("@stylistic/eslint-plugin").RuleOptions} */
const stylisticRules = {
	'@stylistic/array-bracket-newline': ['error', { multiline: true }],
	'@stylistic/array-bracket-spacing': ['error', 'never'],
	'@stylistic/array-element-newline': ['error', 'consistent'],
	'@stylistic/arrow-parens': ['error', 'always'],
	'@stylistic/arrow-spacing': ['error', { after: true, before: true }],
	'@stylistic/block-spacing': ['error', 'always'],
	'@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
	'@stylistic/comma-dangle': ['error', 'always-multiline'],
	'@stylistic/comma-spacing': ['error', { after: true, before: false }],
	'@stylistic/comma-style': ['error', 'last'],
	'@stylistic/computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
	'@stylistic/dot-location': ['error', 'property'],
	'@stylistic/eol-last': 'error',
	'@stylistic/function-call-argument-newline': ['error', 'consistent'],
	'@stylistic/function-call-spacing': ['error', 'never'],
	'@stylistic/function-paren-newline': ['error', { minItems: 4 }],
	'@stylistic/generator-star-spacing': ['error', { after: false, before: true }],
	'@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
	'@stylistic/indent': [
		'error',
		indent,
		{
			ArrayExpression: 1,
			CallExpression: { arguments: 1 },
			flatTernaryExpressions: false,
			FunctionDeclaration: { body: 1, parameters: 1 },
			FunctionExpression: { body: 1, parameters: 1 },
			ignoreComments: false,
			ignoredNodes: [
				'TemplateLiteral *',
				'JSXElement',
				'JSXElement > *',
				'JSXAttribute',
				'JSXIdentifier',
				'JSXNamespacedName',
				'JSXMemberExpression',
				'JSXSpreadAttribute',
				'JSXExpressionContainer',
				'JSXOpeningElement',
				'JSXClosingElement',
				'JSXFragment',
				'JSXOpeningFragment',
				'JSXClosingFragment',
				'JSXText',
				'JSXEmptyExpression',
				'JSXSpreadChild',
				'TSTypeParameterInstantiation',
				'FunctionExpression > .params[decorators.length > 0]',
				'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
				'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
			],
			ImportDeclaration: 1,
			MemberExpression: 1,
			ObjectExpression: 1,
			offsetTernaryExpressions: true,
			outerIIFEBody: 1,
			SwitchCase: 1,
			VariableDeclarator: 1,
		},
	],

	'@stylistic/indent-binary-ops': ['error', 1],
	'@stylistic/key-spacing': ['error', { afterColon: true, beforeColon: false }],
	'@stylistic/keyword-spacing': ['error', { after: true, before: true }],
	'@stylistic/line-comment-position': ['error', { ignorePattern: 'in', position: 'above' }],
	'@stylistic/linebreak-style': ['error', 'unix'],
	'@stylistic/lines-around-comment': [
		'error',
		{
			allowArrayStart: true,
			allowBlockStart: true,
			allowObjectStart: true,
			beforeBlockComment: true,
			beforeLineComment: true,
		},
	],
	'@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
	'@stylistic/max-len': 'off',
	'@stylistic/max-statements-per-line': 'off',
	'@stylistic/member-delimiter-style': [
		'error', {
			multiline: {
				delimiter: 'semi',
				requireLast: true,
			},
			multilineDetection: 'brackets',
			singleline: {
				delimiter: 'semi',
				requireLast: false,
			},
		},
	],
	'@stylistic/multiline-comment-style': 'off',
	'@stylistic/multiline-ternary': ['error', 'always-multiline'],
	'@stylistic/new-parens': 'error',
	'@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
	'@stylistic/no-confusing-arrow': 'error',
	'@stylistic/no-extra-parens': ['error', 'functions'],
	'@stylistic/no-extra-semi': 'error',
	'@stylistic/no-floating-decimal': 'error',
	'@stylistic/no-mixed-operators': [
		'error',
		{
			allowSamePrecedence: true,
			groups: [['==', '!=', '===', '!==', '>', '>=', '<', '<='], ['&&', '||'], ['in', 'instanceof']],
		},
	],
	'@stylistic/no-mixed-spaces-and-tabs': 'error',
	'@stylistic/no-multi-spaces': 'error',
	'@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
	'@stylistic/no-tabs': indent === 'tab' ? 'off' : 'error',
	'@stylistic/no-trailing-spaces': 'error',
	'@stylistic/no-whitespace-before-property': 'error',
	'@stylistic/nonblock-statement-body-position': 'off',
	'@stylistic/object-curly-newline': ['error', { consistent: true }],
	'@stylistic/object-curly-spacing': ['error', 'always'],
	'@stylistic/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
	'@stylistic/one-var-declaration-per-line': ['error', 'initializations'],
	'@stylistic/operator-linebreak': ['error', 'after'],
	'@stylistic/padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],
	'@stylistic/padding-line-between-statements': ['error', { blankLine: 'always', next: 'return', prev: '*' }, { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] }, { blankLine: 'any', next: ['const', 'let', 'var'], prev: ['const', 'let', 'var'] }],

	'@stylistic/quote-props': ['error', 'as-needed'],
	'@stylistic/quotes': ['error', quotes, { allowTemplateLiterals: true, avoidEscape: false }],
	'@stylistic/rest-spread-spacing': ['error', 'never'],
	'@stylistic/semi': ['error', 'always'],
	'@stylistic/semi-spacing': ['error', { after: true, before: false }],
	'@stylistic/semi-style': ['error', 'last'],
	'@stylistic/space-before-blocks': ['error', 'always'],
	'@stylistic/space-before-function-paren': ['error', { anonymous: 'always', asyncArrow: 'always', named: 'never' }],
	'@stylistic/space-in-parens': ['error', 'never'],
	'@stylistic/space-infix-ops': 'error',
	'@stylistic/space-unary-ops': ['error', { nonwords: false, words: true }],
	'@stylistic/spaced-comment': [
		'error',
		'always',
		{
			block: {
				balanced: true,
				exceptions: ['*'],
				markers: ['!'],
			},
			line: {
				exceptions: ['/', '#'],

				markers: ['/'],
			},
		},
	],
	'@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],

	'@stylistic/template-curly-spacing': 'error',
	'@stylistic/template-tag-spacing': ['error', 'never'],
	'@stylistic/type-annotation-spacing': ['error', {}],
	'@stylistic/type-generic-spacing': ['error'],
	'@stylistic/type-named-tuple-spacing': ['error'],
	'@stylistic/wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
	'@stylistic/wrap-regex': ['error'],
	'@stylistic/yield-star-spacing': ['error', 'both'],
	curly: ['error', 'all'],
};

export default {
	plugins: { '@stylistic': pluginStylistic },
	rules: stylisticRules,
};
