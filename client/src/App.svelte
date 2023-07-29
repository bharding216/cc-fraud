<script>
	import { Route, Router } from 'svelte-routing'; // For client-side routing.
	// https://www.npmjs.com/package/svelte-routing for the docs.
	import Layout from './Layout.svelte';
	import { routes } from './routes.js';

</script>

<style></style>

<Router>
	<Layout>
		{#each routes as { path, component }}
			<Route {path} {component} />
	  	{/each}
	</Layout>
</Router>

