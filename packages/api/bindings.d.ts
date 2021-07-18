// hack to get global working
export {};
declare global {
	const PRIVATE_JWK: string;
	const KVStore: KVNamespace;
}

declare module '*.html' {
	const content: string;
	export default content;
}
