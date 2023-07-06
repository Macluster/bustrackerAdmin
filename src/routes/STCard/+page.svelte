<script>
	import { bind } from 'svelte/internal';
import StTableItemCard from '../Components/StTableItemCard.svelte';
	import {addError} from '../../Backend/StCardTable'

	// @ts-ignore
	export let data;
	// @ts-ignore
	console.log(data);

	let dialogFlag = 0;
	let errorData="";
	/**
	 * @type {any}
	 */
	let selectedID;
	/**
	 * @param {any} id
	 */
	function changedailogFlag(id) {
		dialogFlag == 0 ? (dialogFlag = 1) : (dialogFlag = 0);
		selectedID=id;
	}

	function submitButtonClicked()
	{
		addError(errorData,selectedID)
	}
	
	let formImage="";
	let formFlag=0;
	// @ts-ignore
	function openFormImageFun(url)
	{
			formImage=url;
			formFlag == 0 ? (formFlag = 1) : (formFlag = 0);
	}


</script>
<div class="h-[100%] w-[100%]  flex flex-col ">

<div class="h-[100%] w-[100%] p-10 flex flex-col ">
	<div class="h-[30px]" />

	<h1 class="text-2xl font-bold">Manage ST Card</h1>
	<div class="h-[20px]" />
	<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
		<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th scope="col" class="px-6 py-3">ST Id</th>

				<th scope="col" class="px-6 py-3">Institution</th>
				<th scope="col"  class="px-6 py-3">Institution Place</th>
				<th scope="col" class="px-6 py-3">Address</th>
				<th scope="col" class="px-6 py-3">Issue Date</th>
				<th scope="col" class="px-6 py-3">Expiry Date</th>
				<th scope="col" class="px-6 py-3">Course</th>
				<th scope="col" class="px-6 py-3">Course Duration</th>
				<th scope="col" class="px-6 py-3">Status</th>
				<th scope="col" class="px-6 py-3">Form Image</th>
				<th scope="col" class="px-6 py-3">Passport Photo</th>
			</tr>
		</thead>
		<tbody>
			{#each data['data'] as item}
				<StTableItemCard contents={item} changeDialogFlag={changedailogFlag} openFormImage={openFormImageFun} />
			{/each}
		</tbody>
	</table>


</div>
{#if dialogFlag == 1}
<div class="  bg-gray-700 h-[100%] w-[100%] flex justify-center items-center  fixed bg-opacity-50">

	<div class="bg-[#F9F5F6] h-[400px] w-[600px] flex flex-col p-5  rounded-lg shadow-2xl ">
		<div class="flex  justify-end"><h1 class="font-bold"  on:mousedown={()=>{dialogFlag=0}}>X</h1></div>
			<h1 class="font-bold text-2xl">Write the problem</h1>
			<div class="h-[20px]"></div>

			<textarea bind:value={errorData} rows="10" placeholder="Problems" class="p-5"></textarea>
			<div class="h-[20px]"></div>
			<button class="bg-red-500" on:click={submitButtonClicked} >Submit</button>
	</div>
</div>
{/if}
{#if formFlag == 1}
<div class="  bg-gray-700 h-[100%] w-[100%] flex justify-center items-center  fixed bg-opacity-50">

	<div class="bg-[#F9F5F6] h-[400px] w-[600px] flex flex-col p-5  rounded-lg shadow-2xl ">
		<div class="flex  justify-end"><h1 class="font-bold"  on:mousedown={()=>{formFlag=0}}>X</h1></div>
		<img src={formImage} alt="" class="h-full w-full"/>
	</div>
</div>

{/if}
</div>
