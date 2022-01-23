const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	content: ['./public/index.html', './src/**/*.svelte'],
	theme: {
		height: theme => ({
			auto: 'auto',
			...theme('spacing'),
			full: '100%',
			screen: 'calc(var(--vh) * 100)'
		}),
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
