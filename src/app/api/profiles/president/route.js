import { connectionStr } from "@/utils/db";
import { Profiles } from "@/utils/model/profilesModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr);
    const data=await Profiles.findOne({ type: 'president' });
    return NextResponse.json(data);
}