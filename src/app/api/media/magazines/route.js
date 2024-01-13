import { connectionStr } from "@/utils/db";
import { Media } from "@/utils/model/mediaModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr);
    const data=await Media.find({ type: 'magazine'}).sort({ date: -1 });
    return NextResponse.json(data);
}