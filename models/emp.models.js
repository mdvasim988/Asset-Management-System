import mongoose from 'mongoose';

const empSchema = new mongoose.Schema({
    eid : { type : String, required : true, unique : true },
    name : { type : String, required : true },
    email : { type : String, required : true, unique : true },
    phone : { type : String, required : true },
    doj : { type : String, required : true },
    role : { type : String, required : true },
    wlocation : { type : String, required : true }
}, { timestamps : true });

const EMP = mongoose.models.EMP || mongoose.model('EMP', empSchema);

export default EMP;