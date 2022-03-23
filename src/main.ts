import App from './App.svelte';
import './global.css';

const vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh.toFixed(3)}px`);

const app = new App({
	target: document.querySelector('#app')
});

export default app;
