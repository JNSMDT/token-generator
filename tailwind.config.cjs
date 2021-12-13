const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./public/index.html', './src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
			mono: [...defaultTheme.fontFamily.mono]
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
