


import {supabase}  from '../Backend/Supbase.js'




export async function load() {
    const StCount =  await supabase
    .from('StCard')
 
    .select('*', { count: 'exact' })

    const seniorCitizenCount =  await supabase
    .from('SeniorCitizens')
 
    .select('*', { count: 'exact' })


    const totalNumberOfBusOwners =  await supabase
    .from('BusOwners')
 
    .select('*', { count: 'exact' })

    const totalUsers =  await supabase
    .from('Users')
 
    .select('*', { count: 'exact' })


  
        console.log("ssfasaf"+StCount['count'])
    return {
        stCardCount: StCount['count']?? [],
        seniorCitizenCount:seniorCitizenCount['count']??[],
        totalNumberOfBusOwners:totalNumberOfBusOwners['count']??[],
        totalUsers:totalUsers['count']??[]
      };
  }




