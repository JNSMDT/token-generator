<script>
	import GithubIcon from '$lib/assets/icons/github.svg?component';

	const packageVersion = __VERSION__; // injected on build

</script>

<div class="flex absolute bottom-2 right-6 items-center gap-2 font-bold text-sm text-sky-400">
	{#if packageVersion}

	<p>v{packageVersion}</p>
	|
	{/if}
	<a href="https://github.com/angertitan/cryptosubtle-pw-generator">
		<i class="block w-5 fill-slate-50/50 hover:fill-slate-50">
			<GithubIcon />
		</i>
	</a>
	|
	<a class="hover:text-sky-500" href="mailto:hi@jnschmdt.dev">© Jan Schmidt</a>
</div>
