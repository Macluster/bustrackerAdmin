<script>
// @ts-nocheck

	import BusesItemCard from '../Components/BusesItemCard.svelte';

	import { getDataByName,getDataByOwner,sendNotification } from '../../Backend/BusTable';
	import writeUserData from '../../Backend/FirebaseDatabase'
	import StTableItemCard from '../Components/StTableItemCard.svelte';

	export let data;

	let searchName = '';
    let searchOwner="";
	let dialogFlag = 0;
	let standardFare="";

	async function onNameChange() {
		data = await getDataByName(searchName);
	}

    async function onOwnerChange() {
		data = await getDataByOwner(searchOwner);
	}

	let selectedID;
	let message;
	function changedailogFlag(id) {
		dialogFlag == 0 ? (dialogFlag = 1) : (dialogFlag = 0);
		selectedID=id;
	}

	function OnMessageSendClicked()
	{
			sendNotification(selectedID,message)
	}

</script>
<div class="h-[100%] w-[100%]  flex flex-col ">
<div class="h-[100%] w-[100%] p-5">
	<div class="h-[30px]" />

	<div class="flex flex-row">
		<h1 class="text-2xl font-bold">Manage Buses</h1>
		<div class="w-[30px]" />
		<input
			class="p-1"
			placeholder="Search by Name"
			bind:value={searchName}
            
			on:input={onNameChange}
		/>
        <div class="w-[30px]" />
        <input
			class="p-1"
			placeholder="Search by Owner"
			bind:value={searchOwner}
            
			on:input={onOwnerChange}
		/>
		<div class="w-[30px]" />
		<input  class="p-1" placeholder="Set Stadard fare" bind:value={standardFare}/>
		<div class="w-[10px]" />
		<button class="bg-slate-600 p-1 rounded-lg text-white" on:click={()=>{writeUserData(standardFare)}}>Submit</button>
	</div>

	<div class="h-[20px]" />
	<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
		<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th class="px-6 py-3">Bus Id</th>
				<th class="px-6 py-3">BusName</th>
				<th class="px-6 py-3">Owner Name</th>
				<th class="px-6 py-3">Owner Number</th>
				<th class="px-6 py-3">Start Stop</th>
				<th class="px-6 py-3">Bus Number</th>
				<th class="px-6 py-3">Starting Time</th>
				<th class="px-6 py-3">Send a Message</th>
			</tr>
		</thead>
		<tbody>
			
				{#each data['data'] as item}
					<BusesItemCard contents={item} changeDialogFlag={changedailogFlag} />
				{/each}
		
		</tbody>
	</table>
</div>
	{#if dialogFlag == 1}
<div class="  bg-gray-700 h-[100%] w-[100%] flex justify-center items-center  fixed bg-opacity-50">

	<div class="bg-[#F9F5F6] h-[400px] w-[600px] flex flex-col p-5  rounded-lg shadow-2xl ">
		<div class="flex  justify-end"><h1 class="font-bold"  on:mousedown={()=>{dialogFlag=0}}>X</h1></div>
			<h1 class="font-bold text-2xl">Write the Message</h1>
			<div class="h-[20px]"></div>

			<textarea bind:value={message} rows="10" placeholder="Problems" class="p-5"></textarea>
			<div class="h-[20px]"></div>
			<button class="bg-red-500" on:click={OnMessageSendClicked}  >Submit</button>
	</div>
</div>
{/if}
</div>
