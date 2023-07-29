<script>
    let name = '';
    let error = '';

    const lettersOnlyPattern = /^[A-Za-z]+$/;

    function handleSubmit() {
        if (name.trim() === '') {
            error = 'Name cannot be empty';
        } else if (!lettersOnlyPattern.test(name.trim())) {
            error = 'Name must contain only letters (no numbers)';
        } else {
            console.log('Form submitted with name:', name);
            error = '';
        };
    };
</script>
  

<style>
    .error {
        color: red;
        font-size: 0.8rem;
    }
</style>

<form on:submit|preventDefault={handleSubmit}>
    <label for="name">Name:</label>
    <input type="text" id="name" bind:value={name} />
    <button type="submit">Submit</button>
    {#if error}
        <p class="error">{error}</p>
    {/if}
</form>