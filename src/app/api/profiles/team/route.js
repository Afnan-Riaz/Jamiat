import { Team } from "@/utils/model/teamModel";
import { connectionStr } from "@/utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr);
    const data=await Team.find();
    return NextResponse.json(data);
}