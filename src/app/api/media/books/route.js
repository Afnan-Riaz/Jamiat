import { connectionStr } from "@/utils/db";
import { Media } from "@/utils/model/mediaModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const revalidate=10;

export async function GET(){
    await mongoose.connect(connectionStr);
    const data=await Media.find({ type: 'book'});
    return NextResponse.json(data);
}