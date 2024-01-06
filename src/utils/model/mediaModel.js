import mongoose from "mongoose";

const mediaModel=new mongoose.Schema({
    type: String,
    link: String,
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    }
},{versionKey:false});
export const Media = mongoose.models.media || mongoose.model("media",mediaModel,"media");