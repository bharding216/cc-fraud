// The entry point for the Svelte application. 

import App from './App.svelte';

// Create a new instance of the 'App' component.
const app = new App({ 
	target: document.querySelector('#svelte-app-container'), // Specify where the component will be mounted in the DOM.
	props: { // Data passed to the App component.
		
	}
});

export default app;