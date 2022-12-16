import jsonParser from 'jsonc-eslint-parser';
import jsonPlugin from 'eslint-plugin-jsonc';


export const generalJsonConfig = {
	files: ['**/*.json', '**/*.json5', '**/*.jsonc'],
	plugins: {
		jsonc: jsonPlugin
	},
	languageOptions: {
		parser: jsonParser
	}
};

export const packageJsonConfig = {
	files: ['package.json'],
	languageOptions: {
		parser: jsonParser
	},
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
					'eslintConfig'
				]
			},
			{
				pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
				order: { type: 'asc' }
			}
		]
	}
};

export default [generalJsonConfig, packageJsonConfig ];