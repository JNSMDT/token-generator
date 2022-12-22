import globals from 'globals';


// configs
import svelteConfig from './configs/eslint/svelteConfig.js';
import jsonConfigs from './configs/eslint/jsonConfigs.js';
import unicornConfig from './configs/eslint/unicornConfig.js';
import importConfig from './configs/eslint/importConfig.js';

// Rules
import baseRules from './configs/eslint/baseRules.js';


export default [
	'eslint:recommended',
	// jsdoc.configs.recommended,
	baseRules,
	unicornConfig,
	importConfig,
	{
		files: ['**/*.js', '**/*.mjs'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	svelteConfig,
	...jsonConfigs
];