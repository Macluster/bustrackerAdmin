
<script>
    import {updateStatus} from '../../Backend/StCardTable'
    
     /**
         * @type {{ [x: string]: any; }}
         */
       export  let  contents;
     
       
    

          /**
	 * @type {(arg0: any) => any}
	 */
           export let changeDialogFlag;
    
       
    
    
      
    
    
    </script>
    
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row"  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
            {contents['busId']}
        </th>
        <td class="px-6 py-4">
            {contents['busName']}
        </td>
        <td class="px-6 py-4 ">
            {contents['ownerName']}
        </td>
        <td class="px-6 py-4 ">
            {contents['ownerNumber']}
        </td>
        <td class="px-6 py-4 ">
            {contents['startStop']}
        </td>
        <td class="px-6 py-4">
            {contents['busNumber']}
        </td>
        <td class="px-6 py-4">
            {contents['startingTime']}
        </td>
        <td class="px-6 py-4">
            <div class="h-[30px] w-[65px] bg-red-600 rounded-lg flex justify-center items-center" on:mousedown={changeDialogFlag(contents['ownerId'])}>
                <h1 class="text-white">Message</h1>
        </div>
        </td>
     
      
       
    </tr>
    
    
    