import '@poppanator/sveltekit-svg/dist/svg';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	type AppInfo = {
		name: string;
		version: string;
		revision: string;
		abbrevRevision: string;
	};
	declare const __APP_INFO__: AppInfo;
}

export {};
