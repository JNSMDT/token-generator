
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const TAMPLATE_DIR: string;
	export const npm_package_devDependencies_vitest: string;
	export const USER: string;
	export const HOST_GITLAB_HTTPS: string;
	export const npm_package_devDependencies__poppanator_sveltekit_svg: string;
	export const npm_package_dependencies__fontsource_variable_quicksand: string;
	export const npm_config_user_agent: string;
	export const STARSHIP_SHELL: string;
	export const BUN_INSTALL: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_config_init_version: string;
	export const npm_node_execpath: string;
	export const WT_PROFILE_ID: string;
	export const SHLVL: string;
	export const BROWSER: string;
	export const npm_package_devDependencies__unocss_preset_mini: string;
	export const npm_package_devDependencies_svelte_eslint_parser: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const npm_package_devDependencies__unocss_eslint_config: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const PYENV_SHELL: string;
	export const npm_config_init_license: string;
	export const PAGER: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const FNM_ARCH: string;
	export const npm_package_scripts_check: string;
	export const GOROOT: string;
	export const VISUAL: string;
	export const npm_config_init_author_name: string;
	export const npm_config_init_author_url: string;
	export const WSL_DISTRO_NAME: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_description: string;
	export const DEVDIR: string;
	export const WAYLAND_DISPLAY: string;
	export const TEMPL: string;
	export const FNM_VERSION_FILE_STRATEGY: string;
	export const FNM_LOGLEVEL: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const npm_package_devDependencies__stylistic_eslint_plugin: string;
	export const npm_package_devDependencies_eslint_plugin_perfectionist: string;
	export const npm_package_devDependencies_prettier: string;
	export const LOGNAME: string;
	export const GO111MODULE: string;
	export const npm_package_type: string;
	export const PULSE_SERVER: string;
	export const WSL_INTEROP: string;
	export const NAME: string;
	export const WINICON: string;
	export const FNM_NODE_DIST_MIRROR: string;
	export const _: string;
	export const npm_package_private: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_registry: string;
	export const TERM: string;
	export const npm_package_devDependencies__unocss_extractor_svelte: string;
	export const npm_package_author_email: string;
	export const PATH: string;
	export const WIN_ROOT: string;
	export const npm_package_name: string;
	export const npm_package_devDependencies_typescript_eslint: string;
	export const NODE: string;
	export const XDG_RUNTIME_DIR: string;
	export const WT_SESSION: string;
	export const npm_package_scripts_test_integration: string;
	export const npm_config_frozen_lockfile: string;
	export const DISPLAY: string;
	export const npm_package_scripts_test_unit: string;
	export const LANG: string;
	export const npm_package_devDependencies__unocss_transformer_directives: string;
	export const npm_package_devDependencies_eslint: string;
	export const XDG_CONFIG_HOME: string;
	export const FNM_DIR: string;
	export const npm_lifecycle_script: string;
	export const FNM_RESOLVE_ENGINES: string;
	export const npm_package_scripts_test: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies__sveltejs_adapter_cloudflare: string;
	export const npm_lifecycle_event: string;
	export const NODE_PATH: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_globals: string;
	export const HOST_GITLAB_SSH: string;
	export const npm_package_scripts_format: string;
	export const npm_package_devDependencies__unocss_reset: string;
	export const npm_package_dependencies__fontsource_ibm_plex_sans: string;
	export const PWD: string;
	export const FNM_MULTISHELL_PATH: string;
	export const WIN_HOME: string;
	export const npm_execpath: string;
	export const ZDOTDIR: string;
	export const PYENV_ROOT: string;
	export const npm_package_author_name: string;
	export const npm_package_author_url: string;
	export const STARSHIP_SESSION_KEY: string;
	export const npm_package_devDependencies_eslint_plugin_import_x: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const FNM_COREPACK_ENABLED: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_devDependencies_eslint_plugin_unicorn: string;
	export const npm_package_devDependencies_unocss: string;
	export const npm_config_init_author_email: string;
	export const HOSTTYPE: string;
	export const WSL2_GUI_APPS_ENABLED: string;
	export const PNPM_HOME: string;
	export const MANPATH: string;
	export const WSLENV: string;
	export const npm_package_devDependencies_lightningcss: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		TAMPLATE_DIR: string;
		npm_package_devDependencies_vitest: string;
		USER: string;
		HOST_GITLAB_HTTPS: string;
		npm_package_devDependencies__poppanator_sveltekit_svg: string;
		npm_package_dependencies__fontsource_variable_quicksand: string;
		npm_config_user_agent: string;
		STARSHIP_SHELL: string;
		BUN_INSTALL: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies_vite: string;
		npm_config_init_version: string;
		npm_node_execpath: string;
		WT_PROFILE_ID: string;
		SHLVL: string;
		BROWSER: string;
		npm_package_devDependencies__unocss_preset_mini: string;
		npm_package_devDependencies_svelte_eslint_parser: string;
		HOME: string;
		OLDPWD: string;
		npm_package_devDependencies__unocss_eslint_config: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		PYENV_SHELL: string;
		npm_config_init_license: string;
		PAGER: string;
		npm_package_devDependencies_svelte_check: string;
		FNM_ARCH: string;
		npm_package_scripts_check: string;
		GOROOT: string;
		VISUAL: string;
		npm_config_init_author_name: string;
		npm_config_init_author_url: string;
		WSL_DISTRO_NAME: string;
		npm_package_devDependencies_typescript: string;
		npm_package_description: string;
		DEVDIR: string;
		WAYLAND_DISPLAY: string;
		TEMPL: string;
		FNM_VERSION_FILE_STRATEGY: string;
		FNM_LOGLEVEL: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies__playwright_test: string;
		npm_package_devDependencies__stylistic_eslint_plugin: string;
		npm_package_devDependencies_eslint_plugin_perfectionist: string;
		npm_package_devDependencies_prettier: string;
		LOGNAME: string;
		GO111MODULE: string;
		npm_package_type: string;
		PULSE_SERVER: string;
		WSL_INTEROP: string;
		NAME: string;
		WINICON: string;
		FNM_NODE_DIST_MIRROR: string;
		_: string;
		npm_package_private: string;
		npm_package_scripts_check_watch: string;
		npm_package_scripts_lint: string;
		npm_config_registry: string;
		TERM: string;
		npm_package_devDependencies__unocss_extractor_svelte: string;
		npm_package_author_email: string;
		PATH: string;
		WIN_ROOT: string;
		npm_package_name: string;
		npm_package_devDependencies_typescript_eslint: string;
		NODE: string;
		XDG_RUNTIME_DIR: string;
		WT_SESSION: string;
		npm_package_scripts_test_integration: string;
		npm_config_frozen_lockfile: string;
		DISPLAY: string;
		npm_package_scripts_test_unit: string;
		LANG: string;
		npm_package_devDependencies__unocss_transformer_directives: string;
		npm_package_devDependencies_eslint: string;
		XDG_CONFIG_HOME: string;
		FNM_DIR: string;
		npm_lifecycle_script: string;
		FNM_RESOLVE_ENGINES: string;
		npm_package_scripts_test: string;
		npm_package_devDependencies__sveltejs_kit: string;
		SHELL: string;
		npm_package_version: string;
		npm_package_devDependencies__sveltejs_adapter_cloudflare: string;
		npm_lifecycle_event: string;
		NODE_PATH: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_globals: string;
		HOST_GITLAB_SSH: string;
		npm_package_scripts_format: string;
		npm_package_devDependencies__unocss_reset: string;
		npm_package_dependencies__fontsource_ibm_plex_sans: string;
		PWD: string;
		FNM_MULTISHELL_PATH: string;
		WIN_HOME: string;
		npm_execpath: string;
		ZDOTDIR: string;
		PYENV_ROOT: string;
		npm_package_author_name: string;
		npm_package_author_url: string;
		STARSHIP_SESSION_KEY: string;
		npm_package_devDependencies_eslint_plugin_import_x: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		FNM_COREPACK_ENABLED: string;
		npm_package_scripts_preview: string;
		npm_package_devDependencies_eslint_plugin_unicorn: string;
		npm_package_devDependencies_unocss: string;
		npm_config_init_author_email: string;
		HOSTTYPE: string;
		WSL2_GUI_APPS_ENABLED: string;
		PNPM_HOME: string;
		MANPATH: string;
		WSLENV: string;
		npm_package_devDependencies_lightningcss: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
