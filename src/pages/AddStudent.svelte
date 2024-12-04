
<script>
    import Sidebar from "../components/Sidebar.svelte";
    import Topbar from "../components/Topbar.svelte";
    import {SchoolStore} from '../stores'
      
    let id = 0;
    let age = 0;
    let name = '';
    let grade = '';

    let nameError = '';
    let idError = '';
    let ageError = '';
    let gradeError = '';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id >= 1000 && id <= 9999 && age > 18 && name.length >= 3 && parseFloat(grade) >= 0.0){
            idError = '';
            nameError = '';
            ageError = '';
            gradeError = '';

            SchoolStore.update((currentState) => {
                return {...currentState, students: [...currentState.students,{id,name,age,grade} ]}
                
        })  
        console.log($SchoolStore.students)      
    }    
    }
</script>
<main class="flex">
    <Sidebar/>
    <div class="flex-1">
        <Topbar/>
        <div class="max-w-2xl mx-2 md:mx-auto mt-20 md:mt-36 px-5 md:px-20 py-10 border rounded-md">
            <h2 class="text-center mb-8 text-2xl font-bold">Add Student</h2>
             <form class="mb-4" on:submit={handleSubmit}>
                <div class="flex flex-col gap-1 mb-4">
                    <label for="name">Name</label>
                    <input type="text" class="border border-gray-300 p-2 rounded-md focus:border-gray-400 focus:outline-none" bind:value={name}> 
                    {#if nameError}
                    <p class="text-sm text-red-600">{nameError}</p>
                    {/if}
                    
                </div>
    
    
                <div class="flex flex-col gap-1 mb-4">
                    <label for="name">ID</label>
                    <input type="number" class="border border-gray-300 p-2 rounded-md focus:border-gray-400 focus:outline-none" bind:value={id}> 
                    {#if idError}
                    <p class="text-sm text-red-600">{idError}</p>
                    {/if}
                    
                </div>
    
                <div class="flex flex-col gap-1 mb-4">
                    <label for="name">Age</label>
                    <input type="number" class="border border-gray-300 p-2 rounded-md focus:border-gray-400 focus:outline-none" bind:value={age}> 
                    {#if ageError}
                    <p class="text-sm text-red-600">{ageError}</p>
                    {/if}
                    
                </div>
    
                <div class="flex flex-col gap-1 mb-4">
                    <label for="name">Grade</label>
                    <input type="text" class="border border-gray-300 p-2 rounded-md focus:border-gray-400 focus:outline-none" bind:value={grade}> 
                    {#if gradeError}
                    <p class="text-sm text-red-600">{gradeError}</p>
                    {/if}
                    
                </div>
    
    
    
                <button class="p-2 text-center bg-blue-600 w-full text-white font-semibold rounded-md">Add Student</button>
             </form>
            
          
        </div>
    </div>
</main>
  
  