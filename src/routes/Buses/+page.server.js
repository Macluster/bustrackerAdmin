// @ts-nocheck
import {supabase}  from '../../Backend/Supbase.js'


export async function load() {
   let  busData = await supabase
    .from('Buses')
    .select()

        try{
            for (var i=0;i<busData['data']?.length;i++)
            {
                var ownerData= await supabase.from("BusOwners").select("ownerName,ownerNumber").eq("ownerId",busData['data'][i]['ownerId']).single()
                console.log("name"+ownerData['data'].ownerName)
                busData['data'][i]['ownerName']=ownerData['data'].ownerName
                busData['data'][i]['ownerNumber']=ownerData['data'].ownerNumber
            }
        }
        catch
        {

        }
   
  

    console.log(busData['data'])

   
    return {
        data: busData['data'] ?? [],
      };
  }


