import { connectionStr } from "@/utils/db";
import { Analytics } from "@/utils/model/analyticsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const revalidate=10;

export async function GET(){
    await mongoose.connect(connectionStr);
    const data=await Analytics.find({ type: 'analytics' });
    return NextResponse.json(data);
}