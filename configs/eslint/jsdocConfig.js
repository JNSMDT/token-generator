import jsdocPlugin from 'eslint-plugin-jsdoc';

export const baseJsdocConfig = {
	plugins: {
		jsdoc: jsdocPlugin
	},
	rules: {
		...jsdocPlugin.configs.recommended.rules
	}
};

export default [baseJsdocConfig];