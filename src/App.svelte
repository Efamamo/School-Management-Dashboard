<script>
  import { Router, Route } from 'svelte-routing';
  import { routes } from './routes';
</script>

<Router>
  {#each routes as { path, component }}
    <Route path={path} component={component} />
  {/each}
</Router>
