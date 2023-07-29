import Home from './pages/Home.svelte';
import About from './pages/About.svelte';
import Contact from './pages/Contact.svelte';
import Checkout from './pages/Checkout.svelte';
import NotFound from './NotFound.svelte';

export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/checkout', component: Checkout },
    { path: '*', component: NotFound },
  ];