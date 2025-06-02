import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name : { type : String, required : true },
    eid : { type : String, required : true, unique : true },
    email : { type : String, required : true, unique : true },
    password : { type : String, required : true },
    role : { type : String, required : true, default : 'normal'},
    secret : { type : String, required : true }
}, { timestamps : true });

const USER = mongoose.models.USER || mongoose.model('USER', userSchema);

export default USER;