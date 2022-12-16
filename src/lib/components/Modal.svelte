<script>
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import CancelIcon from '$lib/assets/icons/cross.svg?component';

	/** @typedef {import("types/internal").ModalOptions} ModalOptions */

	const dispatch = createEventDispatcher();

	export let show = false;
	export let pwLength;
	export let customSpecialChars;
	export let customSpecialCharsType;
	/** @type {ModalOptions} */
	export let options;
	let inputPwLength = pwLength;
	let inputCustomSpecialChars = customSpecialChars;
	let inputCustomSpecialCharsType = customSpecialCharsType;
	// Methods
	function handleSaveSettings() {
		pwLength = inputPwLength;
		customSpecialChars = inputCustomSpecialChars;
		customSpecialCharsType = inputCustomSpecialCharsType;

		show = false;
		dispatch('regeneratePassword');
	}

	function closeModal() {
		show = false;
	}

	// Handler
	/**
	 *
	 * @param {KeyboardEvent} event
	 */
	function handleKeyPress(event) {
		if (event.key !== 'ESC') {
			return;
		}

		closeModal();
	}

</script>

<svelte:window on:keyup={handleKeyPress} />

{#if show}
	<div
		class="fixed top-0 left-0 right-0 bottom-0 bg-black/25 z-10 flex flex-col justify-center"
		data-close
		transition:fade={{ duration: 150 }}
	>
		<div
			class="rounded-xl relative bg-white w-[80%] sm:w-[400px] p-2 sm:p-4 sm:mt-4 sm:mb-4 shadow-md m-auto flex flex-col justify-center"
		>
			<h1 class="text-2xl font-bold mb-4">Settings</h1>

			<div class="flex flex-col text-center">
				<div class="mb-16">
					<label for="pwLength" class="px-2 mb-1 block text-sm font-medium text-gray-700">
						Length
					</label>
					<input
						class="focus:ring-sky-300 focus:border-sky-300 py-2 px-2 w-full border-2 border-gray-300 bg-transparent sm:text-sm rounded-md"
						name="pwLength"
						id="pwlength"
						type="number"
						bind:value={inputPwLength}
					/>
				</div>
				{#if options.includes('customSpecial')}
					<div>
						<input
							id="whitelist"
							type="radio"
							bind:group={inputCustomSpecialCharsType}
							name="customSpecialCharType"
							value={'whitelist'}
						/>
						<label class="pr-4 checked:text-white" for="whitelist"> Whitelist </label>
						<input
							id="blacklist"
							type="radio"
							bind:group={inputCustomSpecialCharsType}
							name="customSpecialCharType"
							value={'blacklist'}
						/>
						<label class="" for="blacklist"> Blacklist </label>
					</div>
					<div class="mb-8">
						<label
							for="customCharactersInput"
							class="px-2 mb-1 block text-sm font-medium text-gray-700"
						>
							Custom Characters (only special Character)</label
						>
						<input
							class="focus:ring-sky-300 focus:border-sky-300 py-2 px-2 w-full border-2 border-gray-300 bg-transparent sm:text-sm rounded-md"
							name="customCharactersInput"
							type="text"
							id="customCharactersInput"
							bind:value={inputCustomSpecialChars}
						/>
					</div>
				{/if}

				<button class="absolute top-4 right-4" on:click={closeModal}>
					<i class="block w-5 sm:w-6">
						<CancelIcon />
					</i>
				</button>
			</div>
			<button
				class="mt-10 mb-4 p-4  mx-auto rounded-md w-60 bg-sky-400 py-3 px-6 font-bold hover:text-white"
				on:click={handleSaveSettings}>Save</button
			>
		</div>
	</div>
{/if}

<style>
</style>
