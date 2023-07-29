<script>
  import NameGenerator from '../components/forms/NameGen.svelte';
</script>

<style>
  #starry-image {
    width: 200px;
    display: block;
    margin: 0 auto;
  }
</style>

<div class="mb-4">
  <h1>Welcome to our homepage!</h1>
</div>

<div class="mb-4">
  <img src="/assets/image1.jpg" alt="A starry field" id="starry-image"/>
</div>

<NameGenerator api_url="http://localhost:2000" />
