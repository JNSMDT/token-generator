import globals from 'globals';

// Plugins
import sveltePlugin from 'eslint-plugin-svelte';

// Parser
import svelteParser from 'svelte-eslint-parser';


export const baseSvelteConfig = {
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
		...sveltePlugin.configs.base.overrides[0].rules,
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
		'svelte/no-useless-mustaches': [
			'error',
			{
				ignoreIncludesComment: false,
				ignoreStringEscape: false
			}
		],
		'svelte/shorthand-attribute': [
			'error',
			{
				prefer: 'always' // "never"
			}
		],
		'svelte/shorthand-directive': [
			'error',
			{
				prefer: 'always' // "never"
			}
		],
		'svelte/sort-attributes': [
			'error',
			{
				order: [
					// `this` property.
					'this',
					// `bind:this` directive.
					'bind:this',
					// `id` attribute.
					'id',
					// `name` attribute.
					'name',
					// `slot` attribute.
					'slot',
					// `--style-props` (Alphabetical order within the same group.)
					{ match: '/^--/u', sort: 'alphabetical' },
					// `style` attribute, and `style:` directives.
					['style', '/^style:/u'],
					// `class` attribute.
					'class',
					// `class:` directives. (Alphabetical order within the same group.)
					{ match: '/^class:/u', sort: 'alphabetical' },
					// other attributes. (Alphabetical order within the same group.)
					{
						match: ['!/:/u', '!/^(?:this|id|name|style|class)$/u', '!/^--/u'],
						sort: 'alphabetical'
					},
					// `bind:` directives (other then `bind:this`), and `on:` directives.
					['/^bind:/u', '!bind:this', '/^on:/u'],
					// `use:` directives. (Alphabetical order within the same group.)
					{ match: '/^use:/u', sort: 'alphabetical' },
					// `transition:` directive.
					{ match: '/^transition:/u', sort: 'alphabetical' },
					// `in:` directive.
					{ match: '/^in:/u', sort: 'alphabetical' },
					// `out:` directive.
					{ match: '/^out:/u', sort: 'alphabetical' },
					// `animate:` directive.
					{ match: '/^animate:/u', sort: 'alphabetical' },
					// `let:` directives. (Alphabetical order within the same group.)
					{ match: '/^let:/u', sort: 'alphabetical' }
				]
			}
		],
		'svelte/spaced-html-comment': [
			'error',
			'always' // or "never"
		],
		'svelte/html-closing-bracket-spacing': [
			'error',
			{
				startTag: 'never', // or "always" or "ignore"
				endTag: 'never', // or "always" or "ignore"
				selfClosingTag: 'always' // or "never" or "ignore"
			}
		],
		'svelte/html-self-closing': [
			'error',
			'all' // or "html" or "none"
		],
		'no-trailing-spaces': 'off', // Don't need ESLint's no-trailing-spaces rule, so turn it off.
		'svelte/no-trailing-spaces': [
			'error',
			{
				skipBlankLines: false,
				ignoreComments: false
			}
		],
		'svelte/no-inner-declarations': [
			'error',
			'functions' // or "both"
		],
		'svelte/first-attribute-linebreak': [
			'error',
			{
				multiline: 'below', // or "beside"
				singleline: 'beside' // "below"
			}
		],
		'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
		'svelte/mustache-spacing': 'error',
		'svelte/require-stores-init': 'error',
		'svelte/require-store-reactive-access': 'error',
		// import
		'import/first': 'off',
		'import/no-duplicates': 'off',
		'import/no-mutable-exports': 'off',
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'svelte/valid-compile': 'off',
		'import/extensions': 'off'
	}
};

export default [baseSvelteConfig];