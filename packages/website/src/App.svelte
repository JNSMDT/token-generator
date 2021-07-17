<script lang="ts">
	import { onMount } from "svelte";

	let pw:string;

	onMount(async () => {
    await fetch(`https://pw.ngrttn.xyz/`)
      .then(res => res.text())
      .then(data => {
        pw = data;
      });
  })

</script>

<main>
	PW is :{pw}
</main>

<style>

</style>