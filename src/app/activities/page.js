import Image from "next/image";
import Link from "next/link";
import { connectionStr } from "@/utils/db";
import mongoose from "mongoose";
import Blogs from "@/utils/model/blogsModel";
import { Media } from "@/utils/model/mediaModel";

const getData = async () => {
    await mongoose.connect(connectionStr);
    const data = await Blogs.find({ type: "activity" });
    const activities = await Promise.all(
        data.map(async (activity) => {
            const images = await Media.find({
                type: "activity",
                title: activity._id,
            });
            return { ...activity.toObject(), images };
        })
    );
    return activities;
};

export default async function Activities() {
    let activities = await getData();
    return (
        <section className="text-gray-600">
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center bg-center">
                <h1 className="text-5xl text-white font-semibold font-inter">
                    Our Activities
                </h1>
            </div>
            <div className="container px-5 pt-12 pb-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {activities.map((activity) => (
                        <div key={activity._id} className="p-4 md:w-1/4">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 md:rounded-lg rounded-3xl overflow-hidden">
                                <Image
                                    width={500}
                                    height={500}
                                    className=" w-full object-cover object-center"
                                    src={activity.image}
                                    alt="activity"
                                />
                                <div className="p-6">
                                    <h1 className="text-lg font-medium text-gray-900 mb-3">
                                        {activity.title}
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        {activity.content}
                                    </p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link
                                            href={`/activities/${activity.slug}`}
                                            className="text-blue-700 inline-flex items-center md:mb-2 lg:mb-0"
                                        >
                                            Read More
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
