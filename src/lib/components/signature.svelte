<script lang="ts">
	import { dev } from '$app/environment';
	import GithubIcon from '$lib/assets/icons/github.svg?component';
	import { getContext } from 'svelte';

	const appInfo: AppInfo = getContext('appInfo');
</script>

<div class="text-md text-sky-500 font-bold flex gap-2 absolute items-center bottom-2 right-6">
	{#if dev}
		<p>v{appInfo.version} - {appInfo.abbrevRevision}</p>
	{:else}
		<p>v{appInfo.version}</p>
	{/if}
	|
	<a href="https://github.com/JNSMDT/token-generator">
		<i class="block">
			<GithubIcon class="fill-black/50 w-5 hover:fill-black" />
		</i>
	</a>
	|
	<a class="hover:text-sky-600" href="mailto:hi@jnsmdt.dev">© JSNDMT</a>
</div>
