<script>
    import { onMount } from "svelte";
    import Sidebar from "../components/Sidebar.svelte";
    import Topbar from "../components/Topbar.svelte";
    import {SchoolStore} from '../stores'
  import { Link } from "svelte-routing";
    
    onMount(async () => {
      const res = await fetch("/data/teachers.json");
      const teachers = await res.json();
      SchoolStore.update((currentState) => {
        const newTeachers = []
        for (let t of teachers){
          let add = true;
          for (let teacher of currentState.teachers){
            if (teacher.id === t.id){
              add = false
            }
          }
          if (add){
            newTeachers.push(t)
          }
        }

        return {...currentState, teachers: [...currentState.teachers, ...newTeachers]}
      })
    });
  </script>

<main class="flex">
    <Sidebar/>
    <div class="flex-1">
        <Topbar/>
        <div class="py-4 px-8 min-h-screen" style="background-color: #f6f6f6;">
          <Link to='/teachers/add' class="p-2 text-center bg-blue-600  text-white font-semibold rounded-md block ml-auto w-32 mt-10">Add New</Link>

            <h1 class="text-2xl font-bold mb-4">Teachers</h1>
            <table class="table-auto w-full text-left">
              <thead>
                <tr>
                  <th class="border px-4 py-2">ID</th>
                  <th class="border px-4 py-2">Name</th>
                  <th class="border px-4 py-2">Subject</th>
                  <th class="border px-4 py-2">Email</th>
                </tr>
              </thead>
              <tbody>
                {#each $SchoolStore.teachers as teacher}
                  <tr>
                    <td class="border px-4 py-2">{teacher.id}</td>
                    <td class="border px-4 py-2">{teacher.name}</td>
                    <td class="border px-4 py-2">{teacher.subject}</td>
                    <td class="border px-4 py-2">{teacher.email}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>

    </div>
</main>
  
  
  
  
  