'use server'
import dbconnection from "@/connection/conn";
import ISSUE from "@/models/issue.models";

export const addIssue = async(data) => {
  data = {...data, idate:String(data.idate), rdate:String(data.rdate)};
    // console.log(data)
    try{
        const result = await ISSUE.create(data);
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


export const getIssue = async() => {    
    dbconnection();
    const temps = await ISSUE.find({}, {_id:0}).lean();
    // const ntassets= (tassets.map((item)=>{
    //     return {...item, dop:item.dop.split('T')[0]};
    // }))
    return temps;
}

export const editIssue = async(data) => {
  data = {...data, idate:String(data.idate), rdate:String(data.rdate)};
    console.log(data)
    try{
        const result = await ISSUE.updateOne(
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


export const deleteIssue = async(id) => {
//   data = {...data, idate:String(data.idate), rdate:String(data.rdate)};
    console.log(id)
    try{
        const result = await ISSUE.deleteOne(
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


