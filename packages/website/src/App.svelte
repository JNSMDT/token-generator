<script lang="ts">
	import { onMount } from 'svelte';

	let pw: string;

	onMount(async () => {
		await fetch(`https://pw.ngrttn.xyz/`)
			.then(res => res.json())
			.then(data => {
				pw = data.password;
			});
	});
</script>

<main>
	<h1 class="text-4xl">
		{pw}
	</h1>
</main>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
