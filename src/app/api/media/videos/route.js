import { connectionStr } from "@/utils/db";
import { Media } from "@/utils/model/mediaModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr);
    const data=await Media.find({type:"video"},{ title: 0, description: 0, date: 0, type:0 });
    return NextResponse.json(data);
}