<script>
    let username = '';
    let password = '';

    let usernameError = '';
    let passwordError = '';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password){
            usernameError = '';

            if(username !== 'Efa' || password != "#Mini555"){
                passwordError = 'Incorrect username or password'
            }else{
                passwordError = '';
                window.location.href = '/'
            }
        }
        else{
            if (!username){
                usernameError = 'Username is required';
            }else{
                usernameError = '';
            }

            if (!password){
                passwordError = 'Password is required';
            }else{
                passwordError = '';
            }
        }
        
    }
</script>

<main>
    <div class="max-w-2xl mx-2 md:mx-auto mt-20 md:mt-36 px-5 md:px-20 py-10 border rounded-md">
        <h2 class="text-center mb-8 text-2xl font-bold">Login</h2>
         <form class="mb-4" on:submit={handleSubmit}>
            <div class="flex flex-col gap-1 mb-4">
                <label for="username">Username</label>
                <input type="text" class="border border-gray-300 p-2 rounded-md focus:border-gray-400 focus:outline-none" bind:value={username}> 
                {#if usernameError}
                <p class="text-sm text-red-600">{usernameError}</p>
                {/if}
                
            </div>

            <div class="flex flex-col gap-1 mb-8">
                <label for="username">Password</label>
                <input type="password" class="border border-gray-300 p-2 rounded-md focus:border-gray-400 focus:outline-none" bind:value={password}>
                {#if passwordError}
                <p class="text-sm text-red-600">{passwordError}</p>
                {/if}
            </div>

            <button class="p-2 text-center bg-blue-600 w-full text-white font-semibold rounded-md">Login</button>
         </form>
        
         <div class="flex gap-1.5 justify-center">
            <p>Don't have an account?</p>
            <a href="" class="text-blue-600">Signup</a>
         </div>
    </div>
</main>