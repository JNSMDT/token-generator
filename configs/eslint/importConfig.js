import importPlugin from 'eslint-plugin-import';

export const baseImportConfig = {
	plugins: {
		import: importPlugin
	},
	rules: {
		'import/no-unresolved': 'off',
		'import/order': 'error',
		'import/first': 'error',
		'import/named': 'off',
		'import/no-mutable-exports': 'error',
		'import/no-absolute-path': 'off',
		'import/extensions': 'off'
	}
};

export default [baseImportConfig];