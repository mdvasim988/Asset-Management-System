import mongoose from "mongoose";

const issueSchema = new mongoose.Schema({
    eid : { type : String, ref : 'emps', required : true },
    aid : { type : String, ref : 'assets', required : true },
    idate : { type : String, required : true },
    rdate : { type : String },
    remarks : { type : String }
}, { timestamps : true });

const ISSUE = mongoose.models.ISSUE || mongoose.model('ISSUE', issueSchema);

export default ISSUE;