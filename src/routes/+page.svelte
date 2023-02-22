<script>
	import { onMount } from 'svelte';
	import Modal from '$lib/components/Modal.svelte';
	import RadioButton from '$lib/components/RadioButton.svelte';
	import Signature from '$lib/components/Signature.svelte';
	// Import Icons
	import SettingsIcon from '$lib/assets/icons/settings.svg?component';
	import LockIcon from '$lib/assets/icons/lock-lucide.svg?component';
	import SyncIcon from '$lib/assets/icons/sync.svg?component';
	import {
		generatePassword,
		syntaxHighlight,
		generateToken,
		saveToSessionStorage
	} from '$lib/functions/token';

	/** @typedef {import("types/internal").CustomSpecialChars} CustomSpecialChars */
	/** @typedef {import("types/internal").CustomSpecialCharsType} CustomSpecialCharsType */
	/** @typedef {import("types/internal").ModalOptions} ModalOptions */

	// Import Types
	import { dev } from '$app/environment';

	const title = dev ? '(dev) Token Generator' : 'Token Generator';
	/** @type {string} */
	let password;
	/** @type {string} */
	let highlightedToken;
	let buttonText = 'Copy Password';
	let modalShow = false;
	let pwLength = 30;

	/** @type {CustomSpecialChars} */
	let customSpecialChars = '';

	/** @type {CustomSpecialCharsType} */
	let customSpecialCharsType = 'whitelist';

	/** @type {ModalOptions} */
	let availableOptions = ['length', 'customSpecial'];

	/** @type {   'password' | 'token'} */
	let tokenType = 'password';
	function getToken() {
		switch (tokenType) {
			case 'token': {
				password = generateToken(pwLength);
				break;
			}

			default: {
				password = generatePassword(pwLength, {
					customSpecialChars,
					customSpecialCharsType
				});
				break;
			}
		}

		highlightedToken = syntaxHighlight(password);
	}

	onMount(() => {
		getToken();
	});

	function onRadioChange() {
		availableOptions = tokenType === 'token' ? ['length'] : ['length', 'customSpecial'];
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

/* eslint-disable svelte/no-at-html-tags */
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<main class="bg-sky-300 px-4 py-[10vh] flex flex-col justify-evenly items-center min-h-screen">
	<div class="flex">
		<h1 class="xl:text-6xl md:text-4xl text-3xl font-bold text-center">
			{title}
		</h1>
		<LockIcon class="stroke-slate-800" />
	</div>
	<div class="flex flex-col gap-10">
		<div class="flex justify-center mx-auto gap-[10%]">
			<RadioButton
				id="pwRadio"
				changeFunction={onRadioChange}
				groupName="tokenTypes"
				label="Password"
				value="password"
				bind:group={tokenType}
			/>
			<RadioButton
				id="tokenRadio"
				changeFunction={onRadioChange}
				groupName="tokenTypes"
				label="Token"
				value="token"
				bind:group={tokenType}
			/>
		</div>
		<h2 class="text-xl sm:text-3xl lg:text-4xl font-mono slashed-zero tabular-nums text-md font-bold text-center bg-slate-100 p-3 sm:p-6 rounded-md"
		>
			{@html highlightedToken}
		</h2>
	</div>

	<div class="flex gap-5 justify-center items-center">
		<button
			class="
				text-sm
				sm:text-base
				rounded-md w-52
				sm:w-60
				text-slate-800
				bg-sky-400
				border-2
				border-sky-500/25
				py-2 px-2
				sm:py-3 sm:px-6
				font-bold
				hover:text-white"
			on:click={copyToClipboard}
		>
			{buttonText}</button
		>
		<button class="bg-slate-100 p-2 rounded-md hover:bg-slate-300" on:click={onRadioChange}>
			<i class="block w-5 sm:w-6">
				<SyncIcon />
			</i>
		</button>
		<button
			class="bg-slate-100 p-2 rounded-md hover:bg-slate-300"
			on:click={() => {
				modalShow = true;
			}}
		><i class="block w-5 sm:w-6">
			<SettingsIcon />
		</i>
		</button>
	</div>
	<Signature />
	<Modal
		options={availableOptions}
		on:regeneratePassword={onRadioChange}
		bind:show={modalShow}
		bind:pwLength
		bind:customSpecialChars
		bind:customSpecialCharsType
	/>
</main>
