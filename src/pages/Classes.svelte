<script>
    import { onMount } from "svelte";
    import Sidebar from "../components/Sidebar.svelte";
    import Topbar from "../components/Topbar.svelte";
    import {SchoolStore} from '../stores'
  import { Link } from "svelte-routing";
  import Students from "./Students.svelte";

  
  
    onMount(async () => {
      const res = await fetch("/data/classes.json");
      const classes = await res.json();
      SchoolStore.update((currentState) => {
        const newClasses = []
        for (let c of classes){
          let add = true;
          for (let cls of currentState.classes){
            if (cls.id === c.id){
              add = false
            }
          }
          if (add){
            newClasses.push(c)
          }
        }

        return {...currentState, classes: [...currentState.classes, ...newClasses]}
      })
    });
  </script>
  
 

<main class="flex">
    <Sidebar/>
    <div class="flex-1">
        <Topbar/>
        <div class="py-4 px-8 min-h-screen" style="background-color: #f6f6f6;">
          <Link to='/classes/add' class="p-2 text-center bg-blue-600  text-white font-semibold rounded-md block ml-auto w-32 mt-10">Add New</Link>

            <h1 class="text-2xl font-bold mb-4">Classes</h1>
            <table class="table-auto w-full text-left">
              <thead>
                <tr>
                  <th class="border px-4 py-2">ID</th>
                  <th class="border px-4 py-2">Name</th>
                  <th class="border px-4 py-2">Students</th>
                  <th class="border px-4 py-2">Teachers</th>

                </tr>
              </thead>
              <tbody>
                {#each $SchoolStore.classes as cls}
                  <tr>
                    <td class="border px-4 py-2">{cls.id}</td>
                    <td class="border px-4 py-2">{cls.name}</td>
                    <td class="border px-4 py-2">{cls.students_count}</td>
                    <td class="border px-4 py-2">{cls.teachers_count}</td>

                  </tr>
                {/each}
              </tbody>
            </table>
          </div>

    </div>
</main>
  
  
  