
import Blogs from "@/utils/model/blogsModel";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";
export const revalidate=10;

export async function GET(){
    await connectDB();
    const data=await Blogs.find({ type: 'project'});
    return NextResponse.json(data);
}