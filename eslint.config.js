import globals from 'globals'

// import importPlugin from 'eslint-plugin-import'
// import unicornPlugin from 'eslint-plugin-unicorn'
// import sveltePlugin from 'eslint-plugin-svelte'
// import jsonPlugin from 'eslint-plugin-jsonc'

import baseRules from './configs/eslint/baseRules'

export default [
	{
		files: ["**/*.js", "**/*.mjs"],
		globals: {
			...globals.browser
		},
		plugins: {
		}
	},
	baseRules
]