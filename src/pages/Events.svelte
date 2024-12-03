<script>
    import { onMount } from "svelte";
    import Sidebar from "../components/Sidebar.svelte";
    import Topbar from "../components/Topbar.svelte";
  
    let events = [];
  
    onMount(async () => {
      const res = await fetch("/data/events.json");
      events = await res.json();
    });
  </script>
  

<main class="flex">
    <Sidebar/>
    <div class="flex-1">
        <Topbar/>
        <div class="py-4 px-8 min-h-screen" style="background-color: #f6f6f6;">
                <h1 class="text-2xl font-bold mb-4">Events</h1>
                <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {#each events as event}
                    <div class="border rounded-md p-4 shadow-md">
                      <h2 class="text-lg font-semibold">{event.title}</h2>
                      <p class="text-sm text-gray-600">{event.date}</p>
                      <p class="text-gray-800 mt-2">{event.description}</p>
                    </div>
                  {/each}
                </div>
              </div>

    </div>
</main>
  
  
  
  
  