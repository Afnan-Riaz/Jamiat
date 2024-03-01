
import { Profiles } from "@/utils/model/profilesModel";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";
export const revalidate=10;

export async function GET(){
    await connectDB();
    const data=await Profiles.find({ type: 'inspiration' });
    return NextResponse.json(data);
}