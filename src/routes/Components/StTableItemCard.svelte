<script>
	import { updateStatus } from '../../Backend/StCardTable';

	/**
	 * @type {{ [x: string]: any; }}
	 */
	export let contents;
	/**
	 * @type {any}
	 */

	export let openFormImage;
	let status = contents['status'];
	let error = '';

	/**
	 * @type {any}
	 */
	export let changeDialogFlag;

	function onChange() {
		updateStatus(status, contents['stId']);
	}
</script>

<tr
	class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
>
	<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
		{contents['stId']}
	</th>
	<td class="px-6 py-4">
		{contents['institutionName']}
	</td>
	<td class="px-6 py-4">
		{contents['institutionPlace']}
	</td>
	<td class="px-6 py-4">
		{contents['address']}
	</td>
	<td class="px-6 py-4">
		{contents['issueDate']}
	</td>
	<td class="px-6 py-4">
		{contents['expiryDate']}
	</td>
	<td class="px-6 py-4">
		{contents['course']}
	</td>
	<td class="px-6 py-4">
		{contents['courseDuration']}
	</td>
	<td class="px-6 py-4">
		<div class="flex flex-row">
			<select name="" id="" bind:value={status} on:change={onChange}>
				<option>done</option>
				<option>inprogress</option>
				<option>error</option>
				<option>pending</option>
			</select>
			<div class="w-[5px]" />
			<button class="p-1 bg-red-200 rounded-lg" on:click={changeDialogFlag(contents['stId'])}
				>note</button
			>
		</div>
	</td>

	<td class="px-6 py-4">
		<div
			class="h-[30px] w-[60px] bg-red-600 rounded-xl flex justify-center items-center"
			on:mouseup={openFormImage(contents['formImage'])}
		>
			<h1 class="text-white">View</h1>
		</div>
	</td>
    <td class="px-6 py-4">
		<div
			class="h-[30px] w-[60px] bg-red-600 rounded-xl flex justify-center items-center"
			on:mouseup={openFormImage(contents['photo'])}
		>
			<h1 class="text-white">View</h1>
		</div>
	</td>
</tr>
