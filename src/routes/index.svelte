<script context="module">
	export const ssr = false;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import Modal from '$components/Modal.svelte';

	// Import Icons
	import GithubIcon from '$assets/icons/github.svelte';
	import SettingsIcon from '$assets/icons/settings.svelte';
	import SyncIcon from '$assets/icons/sync.svelte';
	import {
		generatePassword,
		syntaxHighlight,
		generateBase64Token,
		saveToSessionStorage
	} from '$lib/functions/generateTokens';

	// Import Types
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
			password = generateBase64Token(pwLength);
		}
		highlightedToken = syntaxHighlight(password);
	}

	onMount(() => {
		getToken();
	});

	function regeneratePassword() {
		getToken();
	}

	async function changeButtonText() {
		buttonText = 'Copied';
		setTimeout(() => {
			buttonText = 'Copy Password';
		}, 2000);
	}

	async function copyToClipboard() {
		await navigator.clipboard.writeText(password);
		saveToSessionStorage(password);
		await changeButtonText();
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
			class="text-xl sm:text-3xl lg:text-4xl font-mono slashed-zero tabular-nums text-md font-bold text-center bg-slate-100 p-3 sm:p-6 rounded-md"
		>
		<!-- eslint-disable-next-line -->
			{@html highlightedToken}
		</h2>
	</div>

	<div class="flex gap-5 justify-center items-center">
		<button
			on:click={copyToClipboard}
			class="text-sm sm:text-base rounded-md w-52 sm:w-60 text-slate-800 bg-sky-400 py-2 px-2 sm:py-3 sm:px-6 font-bold hover:text-white "
			>{buttonText}</button
		>
		<button on:click={regeneratePassword} class="settings-button">
			<i>
				<SyncIcon class=" w-4 sm:w-6" />
			</i>
		</button>
		<button
			on:click={() => {
				modalShow = true;
			}}
			class="settings-button"
			><i>
				<SettingsIcon class="w-4 sm:w-6" />
			</i>
		</button>
	</div>
	<div class="flex absolute bottom-2 right-6 items-center gap-2 font-bold text-sm text-sky-400">
		<p>v{__VERSION__}</p>
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
