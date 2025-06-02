'use server'
import dbconnection from "@/connection/conn";
import EMP from "@/models/emp.models";

export const addEmp = async(data) => {
  data = {...data, doj:String(data.doj)};
//     console.log(data)
    try{
        const result = await EMP.create(data);
        if(result){
            console.log('inserted');
            return true;
        }
        else
            return false;
    }
    catch(e)
    {
        console.log(e);
        return false;
    }
}


export const getEmps = async() => {    
    dbconnection();
    const temps = await EMP.find({}, {_id:0}).lean();
    // const ntassets= (tassets.map((item)=>{
    //     return {...item, dop:item.dop.split('T')[0]};
    // }))
    return temps;
}

export const editEmp = async(data) => {
    data = {...data, doj:String(data.doj)};
    console.log(data)
    try{
        const result = await EMP.updateOne(
            {eid:data.eid},
            {$set: data}
        );
        if(result.modifiedCount){
            console.log('updated');
            return true;
        }
        else
            return false;
    }
    catch(e)
    {
        console.log(e);
        return false;
    }
}


export const deleteEmp = async(id) => {
    // data = {...data, dop:String(data.dop)};
    console.log(id)
    try{
        const result = await EMP.deleteOne(
            {eid:id}
        );
        console.log('deleted');
        return true;
    }
    catch(e)
    {
        console.log(e);
        return false;
    }
}


