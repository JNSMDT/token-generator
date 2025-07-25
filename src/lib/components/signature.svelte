<script lang="ts">
import GithubIcon from '$lib/assets/icons/github.svg?component';

let appVersion = APP_VERSION;
</script>

<div class="text-md text-sky-500 font-bold flex gap-2 absolute items-center bottom-2 right-6">
	<p>v{ appVersion }</p>
	|
	<a href="https://github.com/JNSMDT/token-generator">
		<i class="block">
			<GithubIcon class="fill-black/50 w-5 hover:fill-black" />
		</i>
	</a>
	|
	<a class="hover:text-sky-600" href="mailto:hi@jnsmdt.dev">© JSNDMT</a>
</div>
