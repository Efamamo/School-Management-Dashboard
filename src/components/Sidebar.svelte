<script>  
import SidebarIcon from './SidebarIcon.svelte';
</script>

<aside class="border-r w-64 min-h-screen">
    <div class="flex my-5 justify-center gap-4 items-center">
        <img src="/assets/school.png" alt="" width="40">
        <h3 class="text-2xl font-semibold mt-2">SMAR</h3>
    </div>

    <div>
        <p class="text-xs pl-3 text-gray-600">MAIN</p>
        <div class="mt-3 flex flex-col mb-6">
            <SidebarIcon name="Dashboard" icon="fas fa-tv" />
        </div>

        <p class="text-xs pl-3 text-gray-600">PEOPLE</p>
        <div class="mt-3 flex flex-col mb-6">
            <SidebarIcon name="Students" icon="fas fa-user-graduate" dropdowns={[
                "All Students", "Add Student"
            ]}/>
            <SidebarIcon name="Teachers" icon="fas fa-chalkboard-teacher" dropdowns={[
                "All Teachers", "Add Teacher"
            ]}/>
        </div>

        <p class="text-xs pl-3 text-gray-600">CLASS</p>
        <div class="mt-3 flex flex-col mb-6">
            <SidebarIcon name="Classes" icon="fas fa-layer-group" dropdowns={[
                "All Classes", "Add Class"
            ]}/>
            <SidebarIcon name="Attendance" icon="fas fa-check-circle" dropdowns={[
                "All Attendances"
            ]}/>
        </div>

        <p class="text-xs pl-3 text-gray-600">OTHER</p>
        <div class="mt-3 flex flex-col mb-6">
            <SidebarIcon name="Performance Report" icon="fas fa-file-alt" dropdowns={[
                "All Grades", "Add Grade", "Generate Report"
            ]}/>
            <SidebarIcon name="Events" icon="fas fa-calendar-alt" dropdowns={[
                "All Events", "Add Event"
            ]}/>
        </div>
    </div>
</aside>