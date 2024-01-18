import { connectionStr } from "@/utils/db";
import Blogs from "@/utils/model/blogsModel";
import { Media } from "@/utils/model/mediaModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(connectionStr);
    const data = await Blogs.find({ type: 'activity' });
    const activities = await Promise.all(
      data.map(async (activity) => {
        const images = await Media.find({type:"activity", title: activity._id });
        return { ...activity.toObject(), images };
      })
    );
    return NextResponse.json(activities);
  }