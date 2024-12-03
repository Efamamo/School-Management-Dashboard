<script>  
  import { Link } from 'svelte-routing';
import SidebarIcon from './SidebarIcon.svelte';
</script>

<aside class="w-64 min-h-screen max-md:hidden">
    <div class="flex my-5 justify-center gap-4 items-center">
        <img src="/assets/school.png" alt="" width="40">
        <h3 class="text-2xl font-semibold mt-2">SMAR</h3>
    </div>

    <div>
        <p class="text-xs pl-3 text-gray-600">MAIN</p>
        <Link to="/" class="mt-3 flex flex-col mb-6">
            <SidebarIcon name="Dashboard" icon="fas fa-tv" />
        </Link>

        <p class="text-xs pl-3 text-gray-600">PEOPLE</p>
        <div class="mt-3 flex flex-col mb-6">
            <SidebarIcon name="Students" icon="fas fa-user-graduate" dropdowns={[
               {name: "All Students", link:"/students"}, {name: "Add Student", link: "/students/add"}
            ]}/>
            <SidebarIcon name="Teachers" icon="fas fa-chalkboard-teacher" dropdowns={[
                {name: "All Teachers", link:"/teachers"}, {name: "Add Teacher", link:"/teachers/add"}
            ]}/>
        </div>

        <p class="text-xs pl-3 text-gray-600">CLASS</p>
        <div class="mt-3 flex flex-col mb-6">
            <SidebarIcon name="Classes" icon="fas fa-layer-group" dropdowns={[
                {name: "All Classes", link: "/classes"}, {name: "Add Class", link: "/classes/add"}
            ]}/>
            <SidebarIcon name="Attendance" icon="fas fa-check-circle" dropdowns={[
                {name:"All Attendances", link: "/attendances"}
            ]}/>
        </div>

        <p class="text-xs pl-3 text-gray-600">OTHER</p>
        <div class="mt-3 flex flex-col mb-6">
            <SidebarIcon name="Performance Report" icon="fas fa-file-alt" dropdowns={[
                {name: "All Grades",link: "/grades"}, {name: "Add Grade", link: "/grades/add"}, {name: "Generate Report", link: "/generate"}
            ]}/>
            <SidebarIcon name="Events" icon="fas fa-calendar-alt" dropdowns={[
                {name: "All Events",link:"/events"}, {name: "Add Event", link: "/events/add"}
            ]}/>
        </div>
    </div>
</aside>