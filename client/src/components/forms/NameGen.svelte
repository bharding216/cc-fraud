<script>
    import { capitalizeFirstLetter } from '../../helpers';
    export let api_url;

    // to get a variable from .env:
    // console.log(process.env.my_test)
    let enteredName = ''; // The name entered by the user.
    let serverResponse = ''; // The response received from the server.
    let error = '';

    async function getName() {
        // Regular expression to validate the input (only letters allowed)
        const lettersOnlyPattern = /^[A-Za-z]+$/;

        if (!lettersOnlyPattern.test(enteredName)) {
            error = 'Name must contain only letters (no numbers or symbols)';
            return;
        } else {
            error = '';
        }

        let capitalName = capitalizeFirstLetter(enteredName.trim()); 
        let usersName = enteredName.trim();
        if (!usersName) {
            return;
        }

        let response = await fetch(api_url + '/say-hi', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: capitalName }),
        });

        let data = await response.json();

        if (response.ok && usersName === enteredName) {
            serverResponse = data.message;
        }
    };

</script>

<style>
    .error {
        color: red;
        font-size: 0.8rem;
    }
</style>



{#if serverResponse}
    <h1 class='mb-4'>{serverResponse}!</h1> 
{:else}
    <h1 class='mb-4'>Please enter your name below</h1>
{/if}

<div class='row'>
    <div class='col-6'>
        <form on:submit|preventDefault={getName}>
            <div class='form-group mb-3'>
                <input type="text" name="username" 
                    placeholder="Enter your name" 
                    autocomplete="off"
                    class='form-control'
                    bind:value={enteredName} />
            </div>

            <button disabled={!enteredName.trim()}
                class='btn btn-primary'>Submit</button>
        </form>
    </div>
</div>

{#if error}
<div class="my-2">
    <p class="error">{error}</p>
</div>
{/if}