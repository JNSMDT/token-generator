/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

// sveltekit-svg types
declare module '*.svg?component' {
  const content: ConstructorOfATypedSvelteComponent
  export default content
}

declare module '*.svg?src' {
  const content: string
  export default content
}

declare module '*.svg?url' {
  const content: string
  export default content
}

declare module '*.svg?dataurl' {
  const content: string
  export default content
}