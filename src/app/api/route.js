
import { Page } from "@/utils/model/pageModel";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";
export const revalidate=10;

export async function GET(){
    await connectDB();
    const data=await Page.find();
    return NextResponse.json(data);
}