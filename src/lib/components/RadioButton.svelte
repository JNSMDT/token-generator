<script lang="ts">
	export let id: string;
	export let group: string;
	export let changeFunction: () => void;
	export let label: string;
	export let groupName: string;
	export let value = label;
</script>

<div class={`radio-btn-${id}`}>
	<input
		{id}
		name={groupName}
		class="peer"
		type="radio"
		{value}
		bind:group
		on:change={changeFunction}
	/>
	<label
		class="flex select-none justify-center bg-white sm:text-base text-sm sm:min-w-[200px] min-w-[150px] rounded-md cursor-pointer p-2 border-2 border-slate-300 peer-checked:border-sky-500/20 peer-checked:bg-sky-400"
		for={id}
	>
		<span class="text-slate-800 font-bold font-mono text-lg"> {label} </span>
	</label>
</div>

<style>
	input[type='radio'] {
		display: none;
	}
</style>
