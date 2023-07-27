// The entry point for the Svelte application. 

import App from './App.svelte'; // Import component 'App'.

const app = new App({ // Create a new instance of the 'App' component.
	target: document.body, // Specify where the component will be mounted in the DOM.
	props: { // Data passed to the App component.
		api_url: 'http://localhost:2000' 
	}
});

export default app;