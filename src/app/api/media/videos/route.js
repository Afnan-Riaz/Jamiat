import { Videos } from "@/utils/model/videosModel";
import { connectionStr } from "@/utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr);
    const data=await Videos.find();
    return NextResponse.json(data);
}