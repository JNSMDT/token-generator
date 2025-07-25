import extractorSvelte from '@unocss/extractor-svelte';
import presetMini from '@unocss/preset-mini';
import transformerDirectives from '@unocss/transformer-directives';
import { defineConfig } from 'unocss';

export default defineConfig({
	extractors: [extractorSvelte()],
	presets: [presetMini()],
	rules: [
		[/^m-(\d+)$/, ([, d]) => ({ margin: `calc(${Number.parseInt(d)}rem / var(--margin-devider))` })],
		[/^p-(\d+)$/, ([, d]) => ({ padding: `calc(${Number.parseInt(d)}rem / var(--padding-devider))` })],
	],
	transformers: [transformerDirectives()],
});
