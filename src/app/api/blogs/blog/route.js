import { connectionStr } from "@/utils/db";
import Blogs from "@/utils/model/blogsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const revalidate=10;

export async function GET(){
    await mongoose.connect(connectionStr);
    const data=await Blogs.find({ type: 'blog'});
    return NextResponse.json(data);
}