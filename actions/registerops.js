'use server'
import dbconnection from "@/connection/conn";
import USER from "@/models/user.models";

export const addUser = async(data) => {
//   data = {...data, doj:String(data.doj)};
//     console.log(data)
    dbconnection();
    try{
        const result = await USER.create(data);
        console.log('inserted');
        return true;
    }
    catch(e)
    {
        console.log(e);
        return false;
    }
}

export const editUser = async(data) => {
    // data = {...data, doj:String(data.doj)};
    console.log(data)
    try{
        const result = await USER.updateOne(
            { $and: [ { eid: data.eid }, { email: data.email }, { secret: data.secret } ] },
            {$set: {password : data.password}}
        );
        console.log('updated');
        return true;
    }
    catch(e)
    {
        console.log(e);
        return false;
    }
}


