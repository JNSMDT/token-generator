import presetMini from '@unocss/preset-mini';
import { defineConfig } from 'unocss';

export default defineConfig({
	presets: [presetMini()],
	rules: [
		[/^m-(\d+)$/, ([, d]) => ({ margin: `calc(${d / 4} * var(--base-margin))` })],
		[/^p-(\d+)$/, ([, d]) => ({ padding: `calc(${d / 4} * var(--base-padding))` })],
		[
			/^wh-(\d+)$/,
			([, d]) => ({
				width: `${d / 4}rem`,
				height: `${d / 4}rem`,
			}),
		],
		[
			/^wh-(\d+)px$/,
			([, d]) => ({
				width: `${d}px`,
				height: `${d}px`,
			}),
		],
		[
			/^wh-(\d+)%$/,
			([, d]) => ({
				width: `${d}%`,
				height: `${d}%`,
			}),
		],
		[
			/^flex-g(\d+)$/,
			([, d]) => ({
				'flex-grow': `${d}`,
			}),
		],
		[
			/^flex-g(\d+.\d+)$/,
			([, d]) => ({
				'flex-grow': `${d}`,
			}),
		],
	],
});
