<script>
  import { onMount } from "svelte";
  import Sidebar from "../components/Sidebar.svelte";
    import Topbar from "../components/Topbar.svelte";

  let attendance = [];

  onMount(async () => {
    const res = await fetch("/data/attendance.json");
    attendance = await res.json();
  });
</script>


  
 

<main class="flex">
    <Sidebar/>
    <div class="flex-1">
        <Topbar/>
        
    <div class="py-4 px-8 min-h-screen" style="background-color: #f6f6f6;">
    <h1 class="text-2xl font-bold mb-4">Attendance</h1>
    <table class="table-auto w-full text-left">
      <thead>
        <tr>
          <th class="border px-4 py-2">Student</th>
          <th class="border px-4 py-2">Date</th>
          <th class="border px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {#each attendance as record}
          <tr>
            <td class="border px-4 py-2">{record.name}</td>
            <td class="border px-4 py-2">{record.date}</td>
            <td class="border px-4 py-2">{record.status}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

    </div>
</main>
  
  
  
