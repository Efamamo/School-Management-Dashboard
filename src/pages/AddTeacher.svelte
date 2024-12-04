<script>
    import Sidebar from "../components/Sidebar.svelte";
    import Topbar from "../components/Topbar.svelte";
    import { SchoolStore } from '../stores';

    let gender = '';
    let age = 0;
    let name = '';
    let year = 0;
    let department = '';
    let experiance = 0;
    let email = '';
    let subject = '';

    let nameError = '';
    let genderError = '';
    let ageError = '';
    let yearError = '';
    let experianceError = '';
    let departmentError = '';
    let emailError = '';
    let subjectError = '';

    const isValid = () => {
        return age >= 18
            && name.trim().length >= 3
            && year > 0
            && year <= 7
            && (gender === "Male" || gender === "Female")
            && department
            && experiance >= 0
            && email
            && (subject);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid()) {
            genderError = '';
            nameError = '';
            ageError = '';
            yearError = '';
            subjectError = '';
            departmentError = '';
            emailError = '';
            experianceError= '';

            SchoolStore.update((currentState) => {
                return {
                    ...currentState,
                    teachers: [
                        ...currentState.teachers,
                        { name, department, email, subject, year, age, experiance, gender, grade:0, id:currentState.students.length + 1 }
                    ]
                };
            });

            name = '';
            experiance = 0;
            department = '';
            age = 0;
            gender = '';
            subject = '';
            email = '';
            year = 0;
            alert("Student added successfully");
        } else {
            ageError = age < 18 ? 'Please choose a valid age (18+).' : '';
            nameError = name.trim().length < 3 ? 'Minimum characters for name is 3.' : '';
            yearError = (year <= 0 || year > 7) ? 'Please choose a valid year (1-7).' : '';
            genderError = (gender !== "Male" && gender !== "Female") ? 'Please choose gender.' : '';
            departmentError = !department ? 'Please choose department.' : '';
            experianceError = (experiance < 0) ? 'Please choose a valid year of experiance (1-19).' : '';
            emailError = !email ? 'Please enter email address.' : '';
            subjectError = !status ? 'Please choose subject.' : '';
        }
    };
</script>

<main class="flex">
    <Sidebar />
    <div class="flex-1">
        <Topbar />
        <div class="max-w-2xl mx-2 md:mx-auto mt-20 md:mt-36 px-5 md:px-20 py-10 border rounded-md">
            <h2 class="text-center mb-8 text-2xl font-bold">Add Teacher</h2>
            <form class="mb-4" on:submit={handleSubmit}>
                <!-- Name -->
                <div class="flex flex-col gap-1 mb-4">
                    <label for="name">Name</label>
                    <input type="text" id="name" class="border border-gray-300 p-2 rounded-md focus:border-gray-400 focus:outline-none" bind:value={name}>
                    {#if nameError}
                        <p class="text-sm text-red-600">{nameError}</p>
                    {/if}
                </div>

                <!-- Email -->
                <div class="flex flex-col gap-1 mb-4">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="border border-gray-300 p-2 rounded-md focus:border-gray-400 focus:outline-none" bind:value={email}>
                    {#if emailError}
                        <p class="text-sm text-red-600">{emailError}</p>
                    {/if}
                </div>

               <div class="flex gap-12">
                 <!-- Gender -->
                 <div class="flex flex-col flex-1 gap-1 mb-4">
                    <label for="gender">Gender</label>
                    <select id="gender" class="border border-gray-300 bg-white p-2 rounded-md focus:border-gray-400 focus:outline-none" bind:value={gender}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    {#if genderError}
                        <p class="text-sm text-red-600">{genderError}</p>
                    {/if}
                </div>

                 <!-- Year -->
                 <div class="flex flex-col flex-1 gap-1 mb-4">
                    <label for="year">Year</label>
                    <select id="year" class="border border-gray-300 bg-white p-2 rounded-md focus:border-gray-400 focus:outline-none" bind:value={year}>
                        <option value="">Select Year</option>
                        {#each Array(7) as _, i}
                            <option value={i + 1}>{i + 1}</option>
                        {/each}
                    </select>
                    {#if yearError}
                        <p class="text-sm text-red-600">{yearError}</p>
                    {/if}
                </div>

               </div>
                <div class="flex gap-12">
                     <!-- Section -->
                     <div class="flex flex-col gap-1 mb-4 flex-1">
                        <label for="section">Section</label>
                        <input type="number" id="section" class="border border-gray-300 p-2 rounded-md focus:border-gray-400 focus:outline-none" bind:value={experiance} min='1' max='20'>
                        {#if experianceError}
                            <p class="text-sm text-red-600">{experianceError}</p>
                        {/if}
                    </div>
                    <!-- Age -->
                    <div class="flex flex-col gap-1 mb-4 flex-1">
                        <label for="section">Age</label>
                        <input type="number" id="section" class="border border-gray-300 p-2 rounded-md focus:border-gray-400 focus:outline-none" bind:value={age} min='18' max='60'>
                        {#if ageError}
                            <p class="text-sm text-red-600">{ageError}</p>
                        {/if}
                    </div>

                   
                </div>

               

                <div class="flex gap-12 mb-8">
                    <!-- Department -->
                <div class="flex flex-col gap-1 mb-4 flex-1">
                    <label for="department">Department</label>
                    <select id="department" class="border border-gray-300 p-2 bg-white rounded-md focus:border-gray-400 focus:outline-none" bind:value={department}>
                        <option value="">Select Department</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Software Engineering">Software Engineering</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Biomedical Engineering">Biomedical Engineering</option>
                        <option value="Chemical Engineering">Chemical Engineering</option>



                    </select>
                    {#if departmentError}
                        <p class="text-sm text-red-600">{departmentError}</p>
                    {/if}
                </div>

               

                <!-- Status -->
                <div class="flex flex-col gap-1 mb-4 flex-1">
                    <label for="status">Status</label>
                    <select id="status" class="border border-gray-300 bg-white p-2 rounded-md focus:border-gray-400 focus:outline-none" bind:value={subject}>
                        <option value="">Select Subject</option>
                        <option value="Computer Architecture">Computer Architecture</option>
                        <option value="Web Developement">Web Developement</option>
                    </select>
                    {#if subjectError}
                        <p class="text-sm text-red-600">{subjectError}</p>
                    {/if}
                </div>
                </div>

                <!-- Submit Button -->
                <button class="p-2 text-center bg-blue-600 w-full text-white font-semibold rounded-md">Add Teacher</button>
            </form>
        </div>
    </div>
</main>
