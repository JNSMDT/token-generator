<script lang="ts">
	import { onMount } from 'svelte';
	import GithubIcon from '$assets/icons/github.svelte';
	import Modal from '$components/Modal.svelte';
	import pkg from '../package.json';
	import {
		generatePassword,
		syntaxHighlight,
		convertToBase64
	} from '$lib/functions/generateTokens';

	let password: string;
	let highlightedPassword: string;
	let buttonText = 'Copy Password';
	let modalShow = false;
	let pwLength = 30;
	let blackList = '';
	let whiteList = '';
	let tokenType = 'password';

	function getToken() {
		password = generatePassword(pwLength, {
			blackList,
			whiteList
		});
		console.log(tokenType);
		if (tokenType === 'b64token') {
			password = convertToBase64(password);
		}

		highlightedPassword = syntaxHighlight(password);
	}

	onMount(() => {
		getToken();
	});

	function regeneratePassword() {
		getToken();
	}

	async function copyToClipboard() {
		await navigator.clipboard.writeText(password);
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
	<h2
		class="sm:text-3xl lg:text-4xl font-mono text-md font-bold text-center bg-slate-200 p-6 rounded-md"
	>
		{@html highlightedPassword}
	</h2>

	<div class="flex gap-5 justify-center items-center">
		<button
			on:click={copyToClipboard}
			class="rounded-md w-60 bg-sky-400 py-3 px-6 font-bold hover:text-white ">{buttonText}</button
		>
		<button on:click={regeneratePassword} class="bg-slate-200 p-3 rounded-md hover:bg-slate-300">
			<i>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
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
			class="bg-slate-200 p-3 rounded-md hover:bg-slate-300"
			><i>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
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
		bind:tokenType
		bind:pwLength
		bind:blackList
		bind:whiteList
	/>
</main>

<style global>
	@tailwind base;
	@tailwind components;

	@layer base {
		@font-face {
			font-family: Iosevka;
			font-weight: 700;
			src: url(../assets/fonts/iosevka-fixed-bold.woff2) format('woff2');
		}
	}

	@tailwind utilities;

	.number {
		@apply text-blue-500;
	}

	.special {
		@apply text-red-500;
	}

	.uppercase {
		@apply text-black;
	}

	.lowercase {
		@apply text-gray-700;
	}
</style>
