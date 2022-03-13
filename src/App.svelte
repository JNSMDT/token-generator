<script lang="ts">
	import { onMount } from 'svelte';
	import GithubIcon from '$assets/icons/github.svelte';
	import Modal from '$components/Modal.svelte';
	import pkg from '../package.json';
	import {
		generatePassword,
		syntaxHighlight,
		convertToBase64,
		saveToSessionStorage
	} from '$lib/functions/generateTokens';

	import type { CustomSpecialChars, CustomSpecialCharsType } from '$lib/functions/generateTokens';

	let password: string;
	let highlightedToken: string;
	let buttonText = 'Copy Password';
	let modalShow = false;
	let pwLength = 30;
	let customSpecialChars: CustomSpecialChars = '';
	let customSpecialCharsType: CustomSpecialCharsType = 'whitelist';
	let tokenType = 'password';

	function getToken() {
		password = generatePassword(pwLength, {
			customSpecialChars,
			customSpecialCharsType
		});
		if (tokenType === 'b64token') {
			password = convertToBase64(password);
		}
		highlightedToken = syntaxHighlight(password);
	}

	onMount(() => {
		getToken();
	});

	function regeneratePassword() {
		getToken();
	}

	async function copyToClipboard() {
		await navigator.clipboard.writeText(password);
		saveToSessionStorage(password);
		await changeButtonText();
	}

	async function changeButtonText() {
		buttonText = 'Copied';
		setTimeout(() => {
			buttonText = 'Copy Password';
		}, 2000);
	}
</script>

<main class="bg-sky-300 px-4 py-[10vh] flex flex-col justify-evenly items-center h-screen">
	<h1 class="xl:text-6xl md:text-4xl text-3xl font-bold text-center">
		WebCrypto Token Generator 🔐
	</h1>
	<div class="flex flex-col gap-10">
		<div class="flex justify-center mx-auto gap-[10%]">
			<input
				id="passwordRadio"
				type="radio"
				bind:group={tokenType}
				name="tokenTypes"
				value={'password'}
				on:change={regeneratePassword}
			/>
			<input
				id="b64Radio"
				type="radio"
				bind:group={tokenType}
				name="tokenTypes"
				value={'b64token'}
				on:change={regeneratePassword}
			/>
			<label class="radio-label radio-label-pw" for="passwordRadio">
				<span class="radio-dot" />
				<span class="radio-text"> Password </span>
			</label>
			<label class="radio-label radio-label-tkn" for="b64Radio">
				<span class="radio-dot" />
				<span class="radio-text"> Base64 Token </span>
			</label>
		</div>
		<h2
			class="text-base sm:text-3xl lg:text-4xl font-mono slashed-zero tabular-nums text-md font-bold text-center bg-slate-100 p-3 sm:p-6 rounded-md"
		>
			{@html highlightedToken}
		</h2>
	</div>

	<div class="flex gap-5 justify-center items-center">
		<button
			on:click={copyToClipboard}
			class="rounded-md w-60 text-slate-800 bg-sky-400 py-2 px-4 sm:py-3 sm:px-6 font-bold hover:text-white "
			>{buttonText}</button
		>
		<button on:click={regeneratePassword} class="bg-slate-100 p-3 rounded-md hover:bg-slate-300">
			<i>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 sm:h-6 sm:w-6"
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
			</i>
		</button>
		<button
			on:click={() => {
				modalShow = true;
			}}
			class="bg-slate-100 p-3 rounded-md hover:bg-slate-300"
			><i>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 sm:h-6 sm:w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			</i>
		</button>
	</div>
	<div class="flex absolute bottom-2 right-6 items-center gap-2 font-bold text-sm text-sky-400">
		<p>v{pkg.version}</p>
		|
		<a href="https://github.com/angertitan/cryptosubtle-pw-generator">
			<i>
				<GithubIcon class="w-4 fill-slate-50/50 hover:fill-slate-50" />
			</i>
		</a>
		|
		<a class="hover:text-sky-500" href="mailto:hi@jnschmdt.dev">© Jan Schmidt</a>
	</div>
	<Modal
		on:regeneratePassword={regeneratePassword}
		bind:show={modalShow}
		bind:pwLength
		bind:customSpecialChars
		bind:customSpecialCharsType
	/>
</main>

<style>
	input[type='radio'] {
		display: none;
	}
</style>
