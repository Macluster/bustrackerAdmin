<script>
	import '../app.css';
	import Card from './Components/Card.svelte';
	import NavItem from './Components/NavItem.svelte';

	var i;
</script>

<div  class="flex flex-col justify-around items-center h-full w-full p-10">
	
	<div class="flex flex-col w-full h-full ">
		<h1 class=" absolute  text-3xl font-bold self-start text-white m-10">Overview</h1>
		
		
		<div class="flex flex-row justify-around items-center h-[80%] w-[95%] absolute ">
			
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			
			
		
		</div>
	
			   
		<img  src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png" class=" h-full w-full rounded-xl object-cover  " alt="">
	   </div>
		
</div>
