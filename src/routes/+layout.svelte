<script>
	import NavItem from './Components/NavItem.svelte';
	import Navbar from './Components/Navbar.svelte';

	let list=[
		{href:"", icon:"/over.png" ,title:"Overview"},
		{href:"/STCard", icon:"/student.png", title:"Manage ST Card "},
		{href:"/Buses", icon:"/student.png", title:"Buses "}
	]

	let selectedIndex

</script>

<body class="h-[100%] w-[100%] bg-[#f5f5f5] flex flex-col">
	<Navbar></Navbar>
	<div class="overflow-auto w-full h-full">
		<slot />
	</div>
</body>


<!--



<div class="h-[100%] w-[30%] bg-[#645CBB] flex flex-col items-start p-3">
	<h1 class="text-white text-2xl self-centers">Dashboard</h1>
	<div class="h-[50px]" />
	{#each list as item,i }
	<NavItem onClick={()=>{selectedIndex=i}} href={item['href']} icon={item['icon']} title={item['title']}  selected={true} />
	<div class="h-[10px]" />
	{/each}
	
	
</div>

-->