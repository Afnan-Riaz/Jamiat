import mongoose from "mongoose";

const analyticsModel=new mongoose.Schema({
    type:String,
    title:String,
    count:mongoose.Schema.Types.Mixed,
},{versionKey:false});
export const Analytics = mongoose.models.analytics || mongoose.model("analytics",analyticsModel,"analytics");