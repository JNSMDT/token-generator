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
	{pw}
</main>

<style>
</style>
