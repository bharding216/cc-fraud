<script>
    import FormSubmissionModal from '../modals/FormSubmission.svelte';
    import { capitalizeFirstLetter } from '../../helpers';
    import { writable } from 'svelte/store';

    let name = '';
    let error = '';
    let showModal = false;

    const lettersOnlyPattern = /^[A-Za-z]+$/;
    const capitalName = writable('');

    function handleSubmit() {
        if (name.trim() === '') {
            error = 'Looks like you forgot to enter your name!';
        } else if (!lettersOnlyPattern.test(name.trim())) {
            error = 'Name must contain only letters (no numbers or symbols)';
        } else {
            capitalName.set(capitalizeFirstLetter(name.trim()));
            console.log('Form submitted with name:', $capitalName);
            error = '';
            showModal = true;
        };
    };
</script>
  

<style>
    .error {
        color: red;
        font-size: 0.8rem;
    }
</style>

<div class='row'>
    <div class='col-6'>
        <form on:submit|preventDefault={handleSubmit}>
            <div class="form-group mb-3"> 
                <input type="text" 
                    name="name" id="name"
                    placeholder="Enter your name"
                    autocomplete="off"
                    class='form-control'
                    bind:value={name} />
            </div>

            <button class='btn btn-primary' type="submit">Submit</button>
            {#if error}
                <p class="error my-2">{error}</p>
            {/if}
        </form>
    </div>
</div>

<FormSubmissionModal 
    message="Thank you, {$capitalName}. Your form was successfully submitted!" 
    bind:showModal={showModal} />