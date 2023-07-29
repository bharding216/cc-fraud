<script>
    import { onMount } from 'svelte';
    import Loading from '../components/Loading.svelte';

    let appLoaded = false;

    // Simulate an async operation (e.g., API calls, data fetching) in onMount hook
    onMount(async () => {
        // Your async operations here...

        // Simulate a delay (replace this with your actual async operation)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // After the async operations are complete, set appLoaded to true
        appLoaded = true;
    }); 
</script>

{#if appLoaded}
    <h1>About Us</h1>
    <p>Welcome to our website!</p>
{:else}
    <Loading />
{/if}


  