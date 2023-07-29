// The entry point for the Svelte application. 

import App from './App.svelte'; // Import component 'App'.

const app = new App({ // Create a new instance of the 'App' component.
	target: document.querySelector('#svelte-app-container'), // Specify where the component will be mounted in the DOM.
	props: { // Data passed to the App component.
		
	}
});

export default app;