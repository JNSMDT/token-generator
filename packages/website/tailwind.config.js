const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: {
		enabled: !process.env.ROLLUP_WATCH,
		content: ['./public/index.html', './src/**/*.svelte'],
		options: {
			defaultExtractor: content => [
				...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
				...(content.match(/(?<=class:)[^=>/\s]*/g) || [])
			]
		}
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
			mono: ['Fira Code', ...defaultTheme.fontFamily.mono]
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
