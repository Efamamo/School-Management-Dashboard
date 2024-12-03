<script>
    export let title = '';
    export let number = '';
    export let difference = 0;
    export let image = '';
    $: color = difference >= 0 ? 'text-green-600' : 'text-red-600'
    $: either = difference >= 0 ? "Increase" : "Decrease"
    $: val = difference >= 0 ? difference : -1 * difference
</script>

<div class="bg-white shadow-md py-6 px-3 rounded-md flex justify-between" style="max-width: 22rem;">
    <div>
    <div class="flex flex-col gap-1 mb-6">
        <h3 class="text-lg font-bold">{title}</h3>
        <h3 class="text-lg font-bold">{number}</h3>
    </div>

    <p><span class={color}>{val}%</span> {either}</p>
</div>
    
    <img src={image} alt="" width="130">
</div>
