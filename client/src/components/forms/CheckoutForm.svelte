<script>
    let creditCardNumber = ''

    function formatCreditCardNumber() {
        const regex = /\d{1,4}/g;
        const groups = creditCardNumber.match(regex);
        if (groups) {
            creditCardNumber = groups.join(' ');
        }
    }

    function handleSubmit() {
        console.log(creditCardNumber)
    };

</script>
  

<style>

</style>

<div class='row'>
    <div class='col-6'>
        <form on:submit|preventDefault={handleSubmit}>
            <div class="form-group mb-3"> 
                <input type="tel" 
                    name="creditCard" id="creditCard"
                    placeholder="Enter your credit card number"
                    autocomplete="off"
                    class='form-control'
                    maxlength="19" pattern="[0-9 ]*" 
                    bind:value={creditCardNumber}
                    on:input={formatCreditCardNumber}
                />
            </div>

            <button class='btn btn-primary' type="submit">Submit</button>

        </form>
    </div>
</div>