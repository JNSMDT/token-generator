<script lang="ts">
	// Styling and Fonts
	import '@unocss/reset/tailwind.css';
	import 'uno.css';
	import '../app.css';
	import { setContext } from 'svelte';
	// make injected APP INFO to context
	const appInfo: AppInfo = __APP_INFO__;
	setContext('appInfo', appInfo);

	console.log(appInfo);
</script>

<slot />
