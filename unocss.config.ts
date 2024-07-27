import extractorSvelte from '@unocss/extractor-svelte';
import presetMini from '@unocss/preset-mini';
import transformerDirectives from '@unocss/transformer-directives';
import { defineConfig } from 'unocss';

const SHORTCUT_LOOKUP = {
	'2k': ['2560px', '1440px'],
	'4k': ['4096px', '2160px'],
	'8k': ['7680px', '4320px'],
	fhd: ['1920px', '1080px'],
	h: 'height',
	hd: ['1280', '720px'],
	'max-h': 'max-height',
	'max-w': 'max-width',
	'min-h': 'min-height',
	'min-w': 'min-width',
	sd: ['720', '576px'],
	uhd: ['3840px', '2160px'],
	w: 'width',
};

const SL = SHORTCUT_LOOKUP;

export default defineConfig({
	extractors: [extractorSvelte()],
	presets: [presetMini()],
	rules: [
		[/^m-(\d+)$/, ([, d]) => ({ margin: `calc(${Number.parseInt(d) / 4} * var(--base-margin))` })],
		[/^p-(\d+)$/, ([, d]) => ({ padding: `calc(${Number.parseInt(d) / 4} * var(--base-padding))` })],
		[
			/^wh-(\d+)$/,
			([, d]) => ({
				height: `${Number.parseInt(d) / 4}rem`,
				width: `${Number.parseInt(d) / 4}rem`,
			}),
		],
		[
			/^wh-(\d+)px$/,
			([, d]) => ({
				height: `${d}px`,
				width: `${d}px`,
			}),
		],
		[
			/^wh-(\d+)%$/,
			([, d]) => ({
				height: `${d}%`,
				width: `${d}%`,
			}),
		],
		[
			/^flex-(\d+)$/,
			([, d]) => ({
				flex: `${d}`,
			}),
		],
		[
			/^(w|max-w|min-w|h|max-h|min-h)-half/,
			([, type]) => {
				const key = SL[type];

				return {
					[key]: '50%',
				};
			},
		],
		[
			/^(w|max-w|min-w|h|max-h|min-h)-(sd|hd|fhd|header)/,
			([, type, resolution]) => {
				const key = SL[type];

				return {
					[key]: SL[resolution][0],
				};
			},
		],
		[
			/^wrap-anywhere$/,
			() => ({
				'overflow-wrap': 'anywhere',
			}),
		],
		[
			/^h-content/,
			() => ({
				height: 'calc(99vh - var(--header-height))',
			}),
		],
		[
			/^flip-(x|y)$/,
			([, axis]) => ({
				transform: `scale${axis === 'x' ? 'X' : 'Y'}(-1)`,
			}),
		],
	],
	theme: {
		colors: {
			dark: 'hsl(28, 10%, 8%)',
			'highlight-dark': 'hsl(23, 41%, 37%)',
			'highlight-light': 'hsl(30, 100%, 91%)',
			light: 'hsl(28, 20%, 98%)',
			primary: 'hsl(28, 100%, 46%)',
			secondary: 'hsl(42, 100%, 35%)',
		},
		fontFamily: {
			mono: 'Consolas',
			sans: 'Consolas',
		},
	},
	transformers: [transformerDirectives()],
});
