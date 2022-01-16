<script lang="ts">
	import { fade } from 'svelte/transition';
	import CancelIcon from '$assets/icons/cross.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let show = false;
	export let pwLength;
	export let blackList;
	export let whiteList;
	let inputPwLength = pwLength;
	let inputBlackList = blackList;
	let inputWhiteList = whiteList;
	function handleRegeneratePW() {
		pwLength = inputPwLength;
		blackList = inputBlackList;
		whiteList = inputWhiteList;

		show = false;
		dispatch('regeneratePassword');
	}

	function handleCancel() {
		show = false;
	}
</script>

{#if show}
	<div
		class="fixed top-0 left-0 right-0 bottom-0 bg-black/25 z-10 flex flex-col justify-center"
		data-close
		transition:fade={{ duration: 150 }}
	>
		<div
			class="rounded-xl relative bg-white w-[400px] p-4 mt-4 mb-4 shadow-md m-auto flex flex-col justify-center"
		>
			<h1 class="text-2xl font-bold mb-4">Settings</h1>

			<div class="flex flex-col">
				<div class="mb-8">
					<label for="pwLength" class="px-2 mb-1 block text-sm font-medium text-gray-700"
						>Length</label
					>
					<input
						class="focus:ring-sky-300 focus:border-sky-300 py-2 px-2 w-full border-2 border-gray-300 bg-transparent sm:text-sm rounded-md"
						name="pwLength"
						id="pwlength"
						type="number"
						bind:value={inputPwLength}
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
						bind:value={inputBlackList}
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
						bind:value={inputWhiteList}
					/>
				</div>
				<button class="absolute top-4 right-4" on:click={handleCancel}
					><i><CancelIcon class="w-6" /></i></button
				>
			</div>
			<button
				class="mt-10 mb-4 p-4  mx-auto rounded-md w-60 bg-sky-400 py-3 px-6 font-bold hover:text-white"
				on:click={handleRegeneratePW}>Save</button
			>
		</div>
	</div>
{/if}

<style>
</style>
