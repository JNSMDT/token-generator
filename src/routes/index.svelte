<script lang="ts">
	import { onMount } from 'svelte';
	import Modal from '$components/Modal.svelte';
	import RadioButton from '$components/RadioButton.svelte';
	// Import Icons
	import GithubIcon from '$assets/icons/github.svg';
	import SettingsIcon from '$assets/icons/settings.svg';
	import SyncIcon from '$assets/icons/sync.svg';
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
		switch (tokenType) {
			case 'b64Token':
				password = generateBase64Token(pwLength);
				break;

			case 'b64URLToken':
				password = generateBase64Token(pwLength, true);
				break;
			default:
				password = generatePassword(pwLength, {
					customSpecialChars,
					customSpecialCharsType
				});
				break;
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
			<RadioButton id='pwRadio' bind:group={tokenType} groupName="tokenTypes" value="password" label="Password" changeFunction={regeneratePassword}/>
			<RadioButton id='b64Radio' bind:group={tokenType} groupName="tokenTypes" value="b64Token" label="Base64 Token" changeFunction={regeneratePassword}/>
			<RadioButton id='b64URLRadio' bind:group={tokenType} groupName="tokenTypes" value="b64URLToken" label="Base64 URL Token" changeFunction={regeneratePassword}/>
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
			<i class="block w-5 sm:w-6">
				<SyncIcon />
			</i>
		</button>
		<button
			on:click={() => {
				modalShow = true;
			}}
			class="settings-button"
			><i class="block w-5 sm:w-6">
				<SettingsIcon />
			</i>
		</button>
	</div>
	<div class="flex absolute bottom-2 right-6 items-center gap-2 font-bold text-sm text-sky-400">
		<p>v{__VERSION__}</p>
		|
		<a href="https://github.com/angertitan/cryptosubtle-pw-generator">
			<i class="block w-5 fill-slate-50/50 hover:fill-slate-50">
				<GithubIcon/>
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
