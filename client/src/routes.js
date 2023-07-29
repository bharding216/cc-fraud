import Home from './pages/Home.svelte';
import About from './pages/About.svelte';
import Contact from './pages/Contact.svelte';
import NotFound from './NotFound.svelte';

export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '*', component: NotFound },
  ];