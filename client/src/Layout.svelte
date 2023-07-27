<script>
    import { Link } from 'svelte-routing'; // Used to create navigation links.
</script>
  
<nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
</nav>
  
<slot></slot> <!-- Placeholder for external content to be injected -->