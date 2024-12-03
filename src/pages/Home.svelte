<script>
    import Sidebar from "../components/Sidebar.svelte";
    import Topbar from "../components/Topbar.svelte";
    import OverviewCard from "../components/OverviewCard.svelte";
</script>

<main class="flex">
    <Sidebar/>
    <div class="flex-1">
        <Topbar/>
        <div class="w-full min-h-screen py-8 px-6" style="background-color: #f6f6f6;">
            <div class="mb-20">
                <h1 class="text-2xl font-bold mb-6 text-gray-700">School Information</h1>
                <div class="flex flex-wrap gap-8">
                    <OverviewCard title="Total number of students" number="600" difference={10} image="/assets/students.png" />
                    <OverviewCard title="Number of Male Students" number="260" difference={-20} image="/assets/male.png"/>
                    <OverviewCard title="Number of Female Students" number="340" difference={36} image="/assets/female.png"/>
                    <OverviewCard title="Number of Active Students" number="520" difference={45} image="/assets/active.png"/>
                    <OverviewCard title="Number of Inactive Students" number="80" difference={-6} image="/assets/inactive.jpg"/>
                    <OverviewCard title="Recently Registered Students" number="50" difference={-11} image="/assets/recent.png"/>
    
                </div>
            </div>

            <div>
                <h1 class="text-2xl font-bold mb-6 text-gray-700">Events / Announcements.</h1>
            </div>
            
        </div>
    </div>
</main>

<style></style>