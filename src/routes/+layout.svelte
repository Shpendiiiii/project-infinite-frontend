<script>let { children } = $props();
import "../app.css";
import Navbar from '$lib/Navbar.svelte';
</script>
{@render children()}

<Navbar />