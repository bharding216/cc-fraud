<!-- FormSubmission.svelte -->
<script>
    export let message = '';
    export let showModal = false;

    function closeModal() {
        showModal = false;
    }
</script>
  
<style>

</style>
  

<div class="modal" style="{showModal ? 'display: flex;' : ''}">
    <!-- In Svelte syntax, if showModal is true, display it. If false show empty quotes -->
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5">Form Submitted Successfully!</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" 
                    aria-label="Close" on:click={closeModal}></button>
            </div>
            <div class="modal-body">
                <p>{message}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" 
                    data-bs-dismiss="modal" on:click={closeModal}>Close</button>
            </div>
        </div>
    </div>
</div>
  
