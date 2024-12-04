<script>
    import { onMount } from "svelte";
    import Sidebar from "../components/Sidebar.svelte";
    import Topbar from "../components/Topbar.svelte";
    import {SchoolStore} from '../stores'
  
    onMount(async () => {
      const res = await fetch("/data/grades.json");
      const grades = await res.json();
      SchoolStore.update((currentState) => {
        return {...currentState, grades}
      })
    });
  </script>

<main class="flex">
    <Sidebar/>
    <div class="flex-1">
        <Topbar/>
        <div class="py-4 px-8 min-h-screen" style="background-color: #f6f6f6;">
            
                <h1 class="text-2xl font-bold mb-4">Grades</h1>
                <table class="table-auto w-full text-left">
                  <thead>
                    <tr>
                      <th class="border px-4 py-2">Id</th>
                      <th class="border px-4 py-2">Student</th>
                      <th class="border px-4 py-2">Subject</th>
                      <th class="border px-4 py-2">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {#each $SchoolStore.grades as grade}
                      <tr>
                        <td class="border px-4 py-2">{grade.student_id}</td>
                        <td class="border px-4 py-2">{grade.name}</td>
                        <td class="border px-4 py-2">{grade.subject}</td>
                        <td class="border px-4 py-2">{grade.grade}</td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>

    </div>
</main>
  
  
  
  