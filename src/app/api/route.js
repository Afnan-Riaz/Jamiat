import { connectionStr } from "@/utils/db";
import { Page } from "@/utils/model/pageModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr);
    const data=await Page.find();
    return NextResponse.json(data);
}