
import { Analytics } from "@/utils/model/analyticsModel";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";
export const revalidate=10;

export async function GET(){
    await connectDB();
    const data=await Analytics.find({ type: 'footprints' });
    return NextResponse.json(data);
}