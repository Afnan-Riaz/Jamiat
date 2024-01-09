import mongoose from "mongoose";

const profilesModel=new mongoose.Schema({
    type:String,
    meta_title: { type: String, required:false },
    meta_description: { type: String, required:false },
    canonical: { type: String, required:false },
    slug:{ type: String, required:false },
    name:String,
    image:mongoose.Schema.Types.Mixed,
    designation:String,
    content:String,
    dob:{ type: String, required:false },
    dod:{ type: String, required:false }
},{versionKey:false});
export const Profiles = mongoose.models.profiles || mongoose.model("profiles",profilesModel,"profiles");