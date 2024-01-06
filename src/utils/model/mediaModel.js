import mongoose from "mongoose";

const mediaModel=new mongoose.Schema({
    type:String,
    link:String,
    title:String,
},{versionKey:false});
export const Audio = mongoose.models.media || mongoose.model("media",mediaModel,"media");