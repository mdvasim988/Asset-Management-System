'use server'
import ASSET from "@/models/asset.models";
import dbconnection from "@/connection/conn";

export const addAsset = async(data) => {
  data = {...data, dop:String(data.dop)};
//     console.log(data)
    try{
        const result = await ASSET.create(data);
        if(result){
            console.log('inserted');
            return true;
        }
        else{
            return false;
        }
    }
    catch(e)
    {
        console.log(e);
        return false;
    }
}


export const getAssets = async() => {    
    dbconnection();
    const tassets = await ASSET.find({}, {_id:0}).lean();
    // const ntassets= (tassets.map((item)=>{
    //     return {...item, dop:item.dop.split('T')[0]};
    // }))
    return tassets;
}

export const editAsset = async(data) => {
    data = {...data, dop:String(data.dop)};
    console.log(data)
    try{
        const result = await ASSET.updateOne(
            {sno:data.sno},
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


export const deleteAsset = async(id) => {
    // data = {...data, dop:String(data.dop)};
    console.log(id)
    try{
        const result = await ASSET.deleteOne(
            {sno:id}
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


