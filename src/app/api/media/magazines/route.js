
import { Media } from "@/utils/model/mediaModel";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";
export const revalidate=10;

export async function GET(){
    await connectDB();
    const data=await Media.find({ type: 'magazine'}).sort({ date: -1 });
    return NextResponse.json(data);
}