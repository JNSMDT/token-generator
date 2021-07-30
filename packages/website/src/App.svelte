<script lang="ts">
	import { onMount } from 'svelte';

	let pw: string;

	onMount(fetchPassword);

	async function fetchPassword() {
		await fetch(`https://cryptosubtle-pw-generator.angertitan.workers.dev/`)
			.then(res => res.json())
			.then(data => {
				pw = data.password;
			});
	}

	async function copyToClipboard() {
		await navigator.clipboard.writeText(pw);
		console.log('copied password successfully');
	}
</script>

<main class="bg-blue-300 px-4 pt-10 pb-80 grid grid-rows-3 justify-center items-center h-screen">
	<h1 class="xl:text-6xl md:text-4xl text-3xl font-bold text-center">Cryptosubtle PWGen 🔐</h1>
	<h2
		class="sm:text-3xl lg:text-4xl font-mono text-md font-bold text-center bg-blue-200 p-6 rounded-md"
	>
		{pw}
	</h2>
	<div class="flex gap-5 justify-center items-center">
		<button on:click={copyToClipboard} class="rounded-md bg-blue-400 py-3 px-6 font-bold"
			>COPY PASSWORD</button
		>
		<button on:click={fetchPassword} class="bg-gray-400 p-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
				/>
			</svg>
		</button>
	</div>
</main>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
