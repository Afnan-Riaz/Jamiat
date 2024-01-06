import mongoose from "mongoose";

const pageModel=new mongoose.Schema({
    meta_title:String,
    meta_description:String,
    canonical:String,
    page_title:String,
    slug:String,
    content:{type:String,default:null}
},{versionKey:false});
export const Page = mongoose.models.page || mongoose.model("page",pageModel,"page");