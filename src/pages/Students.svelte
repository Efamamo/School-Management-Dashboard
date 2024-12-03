<script>
    import { onMount } from "svelte";
    import Sidebar from "../components/Sidebar.svelte";
    import Topbar from "../components/Topbar.svelte";
    let students = [];
  
    onMount(async () => {
      const res = await fetch("/data/students.json");
      students = await res.json();
    });
</script>
<main class="flex">
    <Sidebar/>
    <div class="flex-1">
        <Topbar/>
        <div class="py-4 px-8 min-h-screen" style="background-color: #f6f6f6;">
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
                {#each students as student}
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
  
  