const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		height: (theme) => ({
			auto: 'auto',
			...theme('spacing'),
			full: '100%'
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
