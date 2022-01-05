const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	content: ['./public/index.html', './src/**/*.svelte'],
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
