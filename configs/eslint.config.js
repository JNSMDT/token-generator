import globals from 'globals';

// configs
import baseConfig from './eslint/baseConfig.js';
import importConfig from './eslint/importConfig.js';
// import jsdocConfig from './configs/eslint/jsdocConfig.js';
import jsonConfigs from './eslint/jsonConfig.js';
import svelteConfig from './eslint/svelteConfig.js';
import unicornConfig from './eslint/unicornConfig.js';


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