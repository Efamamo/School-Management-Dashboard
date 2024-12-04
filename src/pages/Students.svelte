<script>
    import { onMount } from "svelte";
    import Sidebar from "../components/Sidebar.svelte";
    import Topbar from "../components/Topbar.svelte";
    import {SchoolStore} from '../stores'
  import { Link } from "svelte-routing";
      
    onMount(async () => {
      const res = await fetch("/data/students.json");
      const students = await res.json();

      SchoolStore.update((currentState) => {
        const newStudents = []
        for (let s of students){
          let add = true;
          for (let student of currentState.students){
            if (student.id === s.id){
              add = false
            }
          }
          if (add){
            newStudents.push(s)
          }
        }

        return {...currentState, students: [...currentState.students, ...newStudents]}
      })
    });
</script>
<main class="flex">
    <Sidebar/>
    <div class="flex-1">
        <Topbar/>
        <div class="py-4 px-8 min-h-screen" style="background-color: #f6f6f6;">
          <Link to='/students/add' class="p-2 text-center bg-blue-600  text-white font-semibold rounded-md block ml-auto w-32 mt-10">Add New</Link>

            <h1 class="text-2xl font-bold mb-4">Students</h1>
            <table class="table-auto w-full text-left">
              <thead>
                <tr>
                  <th class="border px-4 py-2">ID</th>
                  <th class="border px-4 py-2">Name</th>
                  <th class="border px-4 py-2">Grade</th>
                  <th class="border px-4 py-2">Age</th>
                </tr>
              </thead>
              <tbody>
                {#each $SchoolStore.students as student}
                  <tr>
                    <td class="border px-4 py-2">{student.id}</td>
                    <td class="border px-4 py-2">{student.name}</td>
                    <td class="border px-4 py-2">{student.grade}</td>
                    <td class="border px-4 py-2">{student.age}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>

    </div>
</main>
  
  