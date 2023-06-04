import {supabase}  from './Supbase'


/**
 * @param {any} data
 * @param {any} id
 */
export  async function addError(data,id)
{
    await supabase.from("StCard").update({message:data,status:"error"}).eq("stId",id)
}


/**
 * @param {any} data
 * @param {any} id
 */
export  async function updateStatus(data,id)
{
    await supabase.from("StCard").update({status:data}).eq("stId",id)
}