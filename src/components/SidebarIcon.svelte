<script>
    export let icon = '';
    export let name = ''
</script>

<div class="flex justify-between items-center cursor-pointer hover:bg-gray-200 py-3 pl-5 text-gray-600">
    <div class="flex gap-2 items-center">
        <i class="w-4 h-4" data-feather="{icon}"></i>
        <p class="text-sm">{name}</p>
    </div>
    
    <i class="w-3 h-3 mr-2" data-feather="plus" style="stroke-width: 4;"></i>

</div>