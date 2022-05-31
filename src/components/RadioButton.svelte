<script lang='ts'>
	export let id:string;
	export let group:string;
	export let changeFunction:() => void;
	export let label: string;
	export let groupName: string;
	export let value: string = label;
</script>

<div class={`radio-btn-${id}`}>
	<input
	id={id}
	type="radio"
	bind:group={group}
	name={groupName}
	value={value}
	on:change={changeFunction}
	/>
	<label class={`radio-label radio-label-${id}`} for={id}>
		<span class="radio-dot" />
		<span class="radio-text"> {label} </span>
	</label>
</div>

<style>
		input[type='radio'] {
		display: none;
	}
</style>
