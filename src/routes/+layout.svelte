<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import "../routes/style/global.css";
</script>

<div>
  <Navbar />
  <main>
    <slot />
  </main>
</div>
