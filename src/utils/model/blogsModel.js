import mongoose from "mongoose";

const blogsModel=new mongoose.Schema({
    meta_title: String,
    meta_description: String,
    canonical: String,
    slug:String,
    type:String,
    title:String,
    image:mongoose.Schema.Types.Mixed,
    content:String
},{versionKey:false});
export const Blogs = mongoose.models.blogs || mongoose.model("blogs",blogsModel,"blogs");