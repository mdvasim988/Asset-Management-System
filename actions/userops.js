'use server'
import dbconnection from "@/connection/conn";
import USER from "@/models/user.models";

export const addUser = async (data) => {
    await dbconnection();
    //   data = {...data, doj:String(data.doj)};
    //     console.log(data)
    try {
        const result = await USER.create(data);
        // console.log(result);
        if (result) {
            console.log('inserted');
            return true;
        }
        else
            return false;
    }
    catch (e) {
        console.log(e);
        return false;
    }
}


export const getUser = async () => {
    await dbconnection();
    const temps = await USER.find({}, { _id: 0 }).lean();
    // const ntassets= (tassets.map((item)=>{
    //     return {...item, dop:item.dop.split('T')[0]};
    // }))
    return temps;
}

export const editUser = async (data) => {
    await dbconnection();
    // data = {...data, doj:String(data.doj)};
    console.log(data)
    try {
        const result = await USER.updateOne(
            { eid: data.eid },
            { $set: data }
        );
        // console.log(result);
        if (result.modifiedCount) {
            console.log('updated');
            return true;
        }
        else
            return false;
    }
    catch (e) {
        console.log(e);
        return false;
    }
}


export const deleteUser = async (id) => {
    await dbconnection();
    // data = {...data, dop:String(data.dop)};
    console.log(id)
    try {
        const result = await USER.deleteOne(
            { eid: id }
        );
        console.log('deleted');
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
}


