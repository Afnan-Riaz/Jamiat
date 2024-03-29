import { writeFile } from "fs/promises"
import { NextResponse } from "next/server"
export const revalidate=10;

export async function POST(req){
    const data=await req.formData();
    const file=data.get('file');
    if(!file){
        return NextResponse.json({"message":"no image found",success: false});
    }
    const byteData=await file.arrayBuffer();
    const buffer=Buffer.from(byteData);
    const path=`./${file.name}`;
    await writeFile(path,buffer);
    return NextResponse.json({"message":"file uploaded",success:true});
}