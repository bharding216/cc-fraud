import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		// name: 'world',
		api_url: 'http://localhost:2000'
	}
});

export default app;