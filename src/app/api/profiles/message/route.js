import { connectionStr } from "@/utils/db";
import { Profiles } from "@/utils/model/profilesModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const revalidate=10;

export async function GET(){
    await mongoose.connect(connectionStr);
    const data=await Profiles.find({ type: 'message' });
    return NextResponse.json(data);
}