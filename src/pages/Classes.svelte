<script>
    import { onMount } from "svelte";
    import Sidebar from "../components/Sidebar.svelte";
    import Topbar from "../components/Topbar.svelte";
  
    let classes = [];

  
    onMount(async () => {
      const res = await fetch("/data/classes.json");
      classes = await res.json();
    });
  </script>
  
 

<main class="flex">
    <Sidebar/>
    <div class="flex-1">
        <Topbar/>
        <div class="py-4 px-8 min-h-screen">
            <h1 class="text-2xl font-bold mb-4">Classes</h1>
            <ul class="list-disc pl-6">
              {#each classes as cls}
                <li class="mb-2">
                  <strong>Class {cls.name}</strong>: {cls.students_count} students taught by {cls.teacher}
                </li>
              {/each}
            </ul>
        </div>

    </div>
</main>
  
  
  