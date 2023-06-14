
import {supabase}  from '../../Backend/Supbase.js'




export async function load() {
    const { data, error } = await supabase
    .from('SeniorCitizens')
    .select()
    console.log(data)

    return {
        data: data ?? [],
      };
  }




