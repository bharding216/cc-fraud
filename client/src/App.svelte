<script>
	import { Route, Router } from 'svelte-routing'; // For client-side routing.
	// https://www.npmjs.com/package/svelte-routing for the docs.
	import NotFound from './NotFound.svelte'; // Import the NotFound component
	import About from './About.svelte';
	import Layout from './Layout.svelte';
	export let api_url;

	// console.log(process.env.my_test)
	let enteredName = ''; // The name entered by the user.
	let serverResponse = ''; // The response received from the server.

	async function getName() {
		let usersName = enteredName.trim();
		if (!usersName) {
			return;
		}

		let response = await fetch(api_url + '/say-hi', {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name: usersName }),
		});

		let data = await response.json();

		if (response.ok && usersName === enteredName) {
			serverResponse = data.message;
		}
	};
</script>


<Router> <!-- Handles client side navigation -->
	<Layout> <!-- Uses the Layout component that was imported above -->
		<Route path="/"> <!-- Defining the home page content -->
			{#if serverResponse}
			<h1>Received Message: {serverResponse}!</h1> 
			{:else}
			<h1>Please enter your name below</h1>
			{/if}
			<input type="text" name="username" 
				   placeholder="Enter your name" 
				   autocomplete="off"
				   bind:value={enteredName} />
			<button on:click={getName} disabled={!enteredName.trim()}>Submit</button>
		</Route>

		<Route path="/about" component={About} /> <!-- Tells Svelte that the About component is to be loaded at the ''/about' url path -->
	    <Route path="*" component={NotFound} />
	</Layout>
</Router>

