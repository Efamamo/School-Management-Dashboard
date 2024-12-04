<script>
    import { onMount } from "svelte";
    import Sidebar from "../components/Sidebar.svelte";
    import Topbar from "../components/Topbar.svelte";
    import {SchoolStore} from '../stores'
    
    onMount(async () => {
      const res = await fetch("/data/teachers.json");
      const teachers = await res.json();
      SchoolStore.update((currentState) => {
        return {...currentState, teachers}
      })
    });
  </script>

<main class="flex">
    <Sidebar/>
    <div class="flex-1">
        <Topbar/>
        <div class="py-4 min-h-screen px-8" style="background-color: #f6f6f6;">
            <h1 class="text-2xl font-bold mb-4">Teachers</h1>
            <ul class="list-disc pl-6">
              {#each $SchoolStore.teachers as teacher}
                <li class="mb-2">
                  <strong>{teacher.name}</strong> - {teacher.subject}
                </li>
              {/each}
            </ul>
          </div>

    </div>
</main>
  
  
  
  
  