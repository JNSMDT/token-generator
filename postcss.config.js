import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import nesting from 'postcss-nesting';

export default {
	plugins: [
		nesting(),
		// Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		// But others, like autoprefixer, need to run after,
		autoprefixer
	]
};
