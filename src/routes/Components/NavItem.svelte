


<script>

    /**
	 * @type {any}
	 */
     export let icon
    /**
	 * @type {any}
	 */
     export let title

     /**
	 * @type {any}
	 */
      export let href

      export let selected=false

      /**
	 * @type {any}
	 */
       export let onClick
      
      /**
	 * @type {string}
	 */
      let backlgroundColor;
      if (selected==true)
      {
            backlgroundColor="#3C79F5"
      }
      else
      {
        backlgroundColor="#645CB"
      }

</script>


<div on:mousedown={onClick}   class="flex flex-row  w-[100%] p-1 px-4 font-thin items-center bg-[{backlgroundColor}] rounded-md">
    <img src={icon} alt="" height="30px" width="30px"/>
    <div class="w-[20px]"></div>
    <a href={href}><h1 class="text-white text-md font-bold">{title}</h1></a>
    
   

</div>