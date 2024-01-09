import { connectionStr } from "@/utils/db";
import { Profiles } from "@/utils/model/profilesModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr);
    const data=await Profiles.find({ type: 'message' }).select({image:1,designation:1,content:1,name:1});
    return NextResponse.json(data);
}