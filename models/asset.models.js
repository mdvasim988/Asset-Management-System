import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
    name : { type : String, required : true },
    brand : { type : String, required : true },
    sno : { type : String, required : true, unique : true },
    config : { type : String, required : true },
    category : { type : String, required : true },
    dop : { type : String, required : true },
    status : { type : String, enum : ['assigned', 'not-assigned'], default : 'not-assigned' },
    condition : { type : String, required : true, default : 'new'}
}, { timestamps : true });

const ASSET = mongoose.models.ASSET || mongoose.model('ASSET', assetSchema);

export default ASSET;