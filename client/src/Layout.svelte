<script>
    import { Link } from 'svelte-routing';

  </script>
  
  <div class="mb-4">
    <nav class='navbar navbar-expand-lg bg-light'>
        <div class='container-fluid'>
            <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class='collapse navbar-collapse' id='navbarNav'>
                <ul class='navbar-nav'>
                    <li class='nav-item'>
                        <Link to="/" class='nav-link'>Home</Link>
                    </li>
                </ul>

                <ul class='navbar-nav'>
                    <li class='nav-item'>
                        <Link to="/about" class='nav-link'>About</Link>
                    </li>
                </ul>

                <ul class='navbar-nav'>
                    <li class='nav-item'>
                        <Link to="/contact" class='nav-link'>Contact</Link>
                    </li>
                </ul>

                <ul class='navbar-nav'>
                    <li class='nav-item'>
                        <Link to="/checkout" class='nav-link'>Checkout</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
  

<div class="container">
    <slot></slot> 
</div>