<script>
	import { fade } from 'svelte/transition';

	function overlay_click(e) {
		if ('close' in e.target.dataset) show = false;
	}

	export let show = false;
	export let pwLength;
	export let blackList;
	export let whiteList;
</script>

{#if show}
	<div>
		<div
			class="fixed top-0 left-0 right-0 bottom-0 bg-black/25 z-10 flex flex-col justify-center"
			data-close
			on:click={overlay_click}
			transition:fade={{ duration: 150 }}
		>
			<div
				class="rounded-md relative bg-white w-1/4 p-4 mt-4 mb-4 shadow-md m-auto flex flex-col justify-center"
			>
				<h1 class="text-2xl font-bold mb-4">Settings</h1>

				<div class="flex flex-col">
					<div class="mb-8">
						<label for="pwLength" class="px-2 mb-1 block text-sm font-medium text-gray-700"
							>Length</label
						>
						<input
							class="focus:ring-sky-300 focus:border-sky-300 py-2 px-2 w-full  border-2 border-gray-300 bg-transparent sm:text-sm rounded-md"
							name="pwLength"
							id="pwlength"
							type="number"
							bind:value={pwLength}
						/>
					</div>

					<div class="mb-8">
						<label for="blackList" class="px-2 mb-1 block text-sm font-medium text-gray-700"
							>Blacklist (only special Character)</label
						>
						<input
							class="focus:ring-sky-300 focus:border-sky-300 py-2 px-2 w-full border-2 border-gray-300 bg-transparent sm:text-sm rounded-md"
							name="blackList"
							type="text"
							id="blackList"
							bind:value={blackList}
						/>
					</div>
					<div>
						<label for="whiteList" class="px-2 mb-1 block text-sm font-medium text-gray-700"
							>Whitelist (only special Character)</label
						>
						<input
							class="focus:ring-sky-300 focus:border-sky-300 py-2 px-2 w-full border-2 border-gray-300 bg-transparent sm:text-sm rounded-md"
							name="whitelist"
							type="text"
							id="whitelist"
							bind:value={whiteList}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
</style>
