import { connectionStr } from "@/utils/db";
import { Blogs } from "@/utils/model/blogsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr);
    const data=await Blogs.find({ type: 'release'});
    return NextResponse.json(data);
}