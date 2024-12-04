<script>
    import Sidebar from "../components/Sidebar.svelte";
    import Topbar from "../components/Topbar.svelte";
    import { SchoolStore } from '../stores';

    let name = '';
    let students_count = 0;
    let teachers_count = 0;
    

    let nameError = '';
    let studentsError = ''
    let teachersError = ''

    const isValid = () => {
        return  name
            && students_count >= 0
            && teachers_count >= 0
            };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid()) {
            teachersError = '';
            nameError = '';
            studentsError = ''

            SchoolStore.update((currentState) => {
                return {
                    ...currentState,
                    classes: [
                        ...currentState.classes,
                        { name,students_count, teachers_count, id:currentState.classes.length + 1 }
                    ]
                };
            });

            name = '';
            students_count = 0;
            teachers_count = 0;
            alert("Class added successfully");
        } else {
            teachersError = teachers_count < 0 ? 'Teachers should be grater than or equal to 0': ''
            nameError = name.trim().length < 3 ? 'Minimum characters for name is 3.' : '';
            studentsError = students_count < 0 ? 'Students should be grater than or equal to 0': ''
        }
    };
</script>

<main class="flex">
    <Sidebar />
    <div class="flex-1">
        <Topbar />
        <div class="max-w-2xl mx-2 md:mx-auto mt-20 md:mt-36 px-5 md:px-20 py-10 border rounded-md">
            <h2 class="text-center mb-8 text-2xl font-bold">Add Class</h2>
            <form class="mb-4" on:submit={handleSubmit}>
                <!-- Name -->
                <div class="flex flex-col gap-1 mb-4">
                    <label for="name">Name</label>
                    <input type="text" id="name" class="border border-gray-300 p-2 rounded-md focus:border-gray-400 focus:outline-none" bind:value={name}>
                    {#if nameError}
                        <p class="text-sm text-red-600">{nameError}</p>
                    {/if}
                </div>
            
              <div class="flex gap-12">
                     <!-- Section -->
                     <div class="flex flex-col gap-1 mb-4 flex-1">
                        <label for="section">Students Count</label>
                        <input type="number" id="section" class="border border-gray-300 p-2 rounded-md focus:border-gray-400 focus:outline-none" bind:value={students_count} min='0' max='100'>
                        {#if studentsError}
                            <p class="text-sm text-red-600">{studentsError}</p>
                        {/if}
                    </div>
                    <!-- Age -->
                    <div class="flex flex-col gap-1 mb-4 flex-1">
                        <label for="section">Teachers Count</label>
                        <input type="number" id="section" class="border border-gray-300 p-2 rounded-md focus:border-gray-400 focus:outline-none" bind:value={teachers_count} min='0' max='12'>
                        {#if teachersError}
                            <p class="text-sm text-red-600">{teachersError}</p>
                        {/if}
                    </div>

                   
                </div>

                <!-- Submit Button -->
                <button class="p-2 text-center bg-blue-600 w-full text-white font-semibold rounded-md">Add Class</button>
            </form>
        </div>
    </div>
</main>
