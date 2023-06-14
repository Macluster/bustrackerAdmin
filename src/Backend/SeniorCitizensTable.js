import {supabase}  from './Supbase'


/**
 * @param {any} data
 * @param {any} id
 */
export  async function addError(data,id)
{
    await supabase.from("SeniorCitizens").update({message:data,status:"error"}).eq("cid",id)
}


/**
 * @param {any} data
 * @param {any} id
 */
export  async function updateStatus(data,id)
{
    await supabase.from("SeniorCitizens").update({status:data}).eq("cid",id)
}