import { About } from "@/utils/model/aboutModel";
import { connectionStr } from "@/utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr);
    const data=await About.find();
    return NextResponse.json(data);
}