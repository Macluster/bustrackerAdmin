// @ts-nocheck

import { supabase } from '../Backend/Supbase.js'



export async function getDataByName(name) {
    let busData = await supabase
        .from('Buses')
        .select().like("busName", name+"%")
        console.log("sassssssssssssssssssssss")

    try {
        for (var i = 0; i < busData['data']?.length; i++) {
            var ownerData = await supabase.from("BusOwners").select("ownerName,ownerNumber").eq("ownerId", busData['data'][i]['ownerId']).single()
            console.log("name" + ownerData['data'].ownerName)
            busData['data'][i]['ownerName'] = ownerData['data'].ownerName
            busData['data'][i]['ownerNumber'] = ownerData['data'].ownerNumber
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





export async function getDataByOwner(name) {

    
    var ownerId = await supabase.from("BusOwners").select("ownerId").like("ownerName",name+"%").single()
    console.log(ownerId)


    let busData = await supabase
        .from('Buses')
        .select().eq('ownerId',ownerId['data']['ownerId'])
        console.log("sassssssssssssssssssssss")

    try {
        for (var i = 0; i < busData['data']?.length; i++) {
            var ownerData = await supabase.from("BusOwners").select("ownerName,ownerNumber").eq("ownerId", busData['data'][i]['ownerId']).single()
            console.log("name" + ownerData['data'].ownerName)
            busData['data'][i]['ownerName'] = ownerData['data'].ownerName
            busData['data'][i]['ownerNumber'] = ownerData['data'].ownerNumber
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


export async function sendNotification(id,notification)
{

        console
  await   supabase.from("Notifications").insert({"content":notification,"who":"Police","ownerId":id})

} 