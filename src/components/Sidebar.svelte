<script>  
import { onMount } from 'svelte';
import SidebarIcon from './SidebarIcon.svelte';
onMount(() => {
  feather.replace();
});
</script>

<aside class="border-r max-w-64 min-h-screen">
    <div class="flex my-5 justify-center">
        <img src="" alt="">
        <h3 class="text-2xl font-semibold">SMAR</h3>
    </div>

    <div>
        <p class="text-xs pl-3 text-gray-600">MAIN</p>
        <div class="mt-3 flex flex-col mb-6">
            <SidebarIcon name="Dashboard" icon="monitor"/>
        </div>

        <p class="text-xs pl-3 text-gray-600">PEOPLE</p>
        <div class="mt-3 flex flex-col mb-6">
            <SidebarIcon name="Students" icon="user"/>
            <SidebarIcon name="Teachers" icon="clipboard"/>
        </div>

        <p class="text-xs pl-3 text-gray-600">CLASS</p>
        <div class="mt-3 flex flex-col mb-6">
            <SidebarIcon name="Classes" icon="layers"/>
            <SidebarIcon name="Attendance" icon="check-circle"/> 
        </div>


        <p class="text-xs pl-3 text-gray-600">OTHER</p>
        <div class="mt-3 flex flex-col mb-6">
            <SidebarIcon name="Performance Report" icon="file"/>
            <SidebarIcon name="Events" icon="calendar"/> 
        </div>

        
    </div>
</aside>