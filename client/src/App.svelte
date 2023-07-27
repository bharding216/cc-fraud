<script>
	import { Route, Router } from 'svelte-routing';
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



<Router>
	<Layout>
		<Route path="/" let:params>
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

		<Route path="/about" component={About} />
	</Layout>
</Router>