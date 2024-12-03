<script>
    export let icon = ''; // Icon class for the main button
    export let name = ''; // Name to display
    export let dropdowns = []

    let isOpen = false;
  </script>
  
  <button
    class="flex justify-between items-center cursor-pointer hover:bg-gray-200 py-3 pl-5 pr-3 text-gray-600"
    on:click={() => (isOpen = !isOpen)}
  >
    <div class="flex gap-3 items-center">
      <i class="{icon} text-gray-500 text-sm"></i>
      <p class="text-sm">{name}</p>
    </div>
    {#if isOpen && dropdowns.length > 0}
      <i class="fas fa-minus text-gray-500 text-xs"></i>
    {:else if !isOpen && dropdowns.length > 0}
      <i class="fas fa-plus text-gray-500 text-xs"></i>
    {/if}
  </button>
  
  {#if isOpen && dropdowns.length > 0}
  <div>
    {#each dropdowns as dropdown}
    <div class="flex items-center gap-3 hover:bg-gray-200 pl-7">
      <i class="fas fa-chevron-right text-gray-500 text-xs"></i>
      <a href="#option1" class="block py-2 text-xs text-gray-700">{dropdown}</a>
    </div>
    {/each}

  </div>
  {/if}
  