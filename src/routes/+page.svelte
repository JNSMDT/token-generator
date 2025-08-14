<script lang="ts">
	import LockIcon from "$lib/assets/icons/lock-lucide.svg?component";
	import SettingsIcon from "$lib/assets/icons/settings.svg?component";
	import SyncIcon from "$lib/assets/icons/sync.svg?component";
	import Signature from "$lib/components/signature.svelte";
	import type { ListType } from "$lib/token/token";
	import { CHARACTERS_SPECIAL, generatePassword as generateToken, syntaxHighlight } from "$lib/token/token";

	type TokenType = "password" | "token";

	let passwordLength = $state(30);
	let generatedToken = $state("");
	let customSpecialChars = $state("");
	let listType: ListType = $state("whitelist");
	let highlightedPassword = $state("");
	let tokenType: TokenType = $state("password");
	let showSettings = $state(false);
	let inputLength = $state(30);
	let inputSpecialChars = $state("");
	let inputListType: ListType = $state("whitelist");
	let copyButtonText = $state("Copy to Clipboard");

	$effect(() => {
		generateNewToken();
	});

	function generateHighlightedPassword() {
		const newPassword = generateToken(passwordLength, {
			customSpecialChars,
			listType,
		});

		generatedToken = newPassword;

		return syntaxHighlight(newPassword);
	}

	function generateHighlightedToken() {
		const newToken = generateToken(passwordLength, {
			customSpecialChars: CHARACTERS_SPECIAL,
			listType: "blacklist",
		});

		generatedToken = newToken;

		return syntaxHighlight(newToken);
	}

	function generateNewToken() {
		if (tokenType === "password") {
			highlightedPassword = generateHighlightedPassword();
		}

		if (tokenType === "token") {
			highlightedPassword = generateHighlightedToken();
		}
	}

	function handlePasswordButtonClick() {
		tokenType = "password";
	}

	function handleTokenButtonClick() {
		tokenType = "token";
	}

	function handleCopyButtonClick() {
		navigator.clipboard.writeText(generatedToken);
		copyButtonText = "Copied!";
		setTimeout(() => {
			copyButtonText = "Copy to Clipboard";
		}, 3000);
	}

	function saveSettings() {
		passwordLength = inputLength;
		customSpecialChars = inputSpecialChars;
		listType = inputListType;
		generateNewToken();
		showSettings = false;
	}
</script>

<svelte:head>
	<title>JNSMDT Token Generator</title>
</svelte:head>

<div class="app bg-sky-300 font-mono flex flex-col h-100svh w-100svw items-center p-10">
	<header class="flex">
		<h1 class="text-7xl font-bold">Token Generator</h1>
		<LockIcon class="stroke-slate-800 h-10 w-10" />
	</header>
	<main class="mb-20 flex flex-1 flex-col gap-10 relative justify-center items-center">
		<div class="token-type-controls flex gap-15">
			<button
				class="token-button"
				class:white-button={tokenType === "password"}
				onclick={handlePasswordButtonClick}
				type="button">Password</button
			>
			<button
				class="token-button"
				class:white-button={tokenType === "token"}
				onclick={handleTokenButtonClick}
				type="button">Token</button
			>
		</div>

		<div class="password-section">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<h2 class="password bg-sky-50 rounded-2 text-4xl font-bold p-8">
				{@html highlightedPassword}
			</h2>
		</div>

		<div class="user-controls flex gap-4 items-center">
			<button
				class="copy-button token-button"
				class:animate-copy={copyButtonText === "Copied!"}
				onclick={handleCopyButtonClick}
				type="button"
			>
				{copyButtonText}
			</button>
			<button
				class="token-button white-button icon-button sync-button"
				onclick={() => generateNewToken()}
				type="button"
			>
				<SyncIcon class="stroke-2.5 stroke-slate-800 h-5 w-5" />
			</button>
			<button
				class="token-button white-button icon-button"
				onclick={() => (showSettings = !showSettings)}
				type="button"
			>
				<SettingsIcon class="stroke-2.5 stroke-slate-800 h-5 w-5" />
			</button>
		</div>
		<div
			class="settings bg-sky-50 rounded-2 flex flex-col gap-4 absolute min-w-80 justify-center items-center left-110% p-4"
			class:hidden={!showSettings}
		>
			<h3 class="text-2xl font-bold">Settings</h3>
			<div class="flex gap-2 justify-center items-center">
				<label class="text-lg" for="password-length"> Password Length:</label>
				<input
					bind:value={inputLength}
					class="border-b-2 border-slate-400 text-center w-12"
					id="password-length"
					type="text"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label class="text-lg text-center" for="special-characters">Special Characters:</label>
				<div class="special-characters">
					<input
						bind:value={inputSpecialChars}
						class="px-1 border-b-2 border-slate-400 w-50"
						id="special-characters"
						type="text"
					/>
					<button
						class="px-1 border-1 border-black w-1lh"
						class:bg-sky-500={inputListType === "whitelist"}
						class:font-bold={inputListType === "whitelist"}
						class:text-white={inputListType === "whitelist"}
						onclick={() => (inputListType = "whitelist")}
						type="button">W</button
					>
					<button
						class="px-1 border-1 border-black w-1lh"
						class:bg-sky-500={inputListType === "blacklist"}
						class:font-bold={inputListType === "blacklist"}
						onclick={() => (inputListType = "blacklist")}
						type="button">B</button
					>
				</div>
			</div>
			<button class="px-2 py-1 mt-5 bg-sky-500 rounded-2 font-bold" onclick={saveSettings} type="button"
				>Save Settings</button
			>
		</div>
	</main>
	<Signature />
</div>

<style>
	:global(input) {
		--uno: "bg-transparent";
	}

	.hidden {
		display: none;
	}

	.password {
		font-variant-numeric: slashed-zero tabular-nums;
	}
	.token-button {
		--uno: "p-2 min-w-40 rounded-2 bg-sky-500 font-bold text-black text-xl shadow-sm";

		&.white-button {
			--uno: "bg-white";
		}
	}
	.user-controls {
		.token-button {
			--uno: "min-w-60";
		}

		.icon-button {
			--uno: "min-w-0";
		}
	}

	/* Animations */
	@keyframes Animate-Copy {
		50% {
			transform: translateY(-10%);
		}
		100% {
			transform: translateY(0);
		}
	}
	.animate-copy {
		animation: Animate-Copy 0.5s ease-in-out;
	}
</style>
