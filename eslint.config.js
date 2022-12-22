import globals from 'globals';

// configs
import baseConfig from './configs/eslint/baseConfig.js';
import importConfig from './configs/eslint/importConfig.js';
// import jsdocConfig from './configs/eslint/jsdocConfig.js';
import jsonConfigs from './configs/eslint/jsonConfig.js';
import svelteConfig from './configs/eslint/svelteConfig.js';
import unicornConfig from './configs/eslint/unicornConfig.js';


export default [
	// build in config
	'eslint:recommended',
	// global configs
	...baseConfig,
	...importConfig,
	...unicornConfig,
	...jsonConfigs,
	// ...jsdocConfig,
	// file specific configs
	{
		files: ['**/*.js', '**/*.mjs'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	...svelteConfig
];