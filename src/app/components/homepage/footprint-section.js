"use client";
import { useEffect, useState } from "react";
import Pakistan from "./map";
import Image from "next/image";
import Link from "next/link";
export default function Footprint() {
    const [analyticsData, setAnalyticsData] = useState([]);
    const [activities, setActivities] = useState([]);
    const [text, setText] = useState(null);
    const handleChange = (t) => {
        setText(t);
    };
    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(
                `${process.env.NEXT_PUBLIC_DOMAIN}/api/analytics/footprints`
            );
            let data = await response.json();
            setAnalyticsData(data);
            response = await fetch(
                `${process.env.NEXT_PUBLIC_DOMAIN}/api/blogs/activities`
            );
            data = await response.json();
            setActivities(data.slice(0, 3));
        };
        fetchData();
    }, []);
    useEffect(() => {
        setText(analyticsData.find((obj) => obj.title === "Pakistan"));
    }, [analyticsData]);
    return (
        <div
            id="footprint-section"
            className="w-full pl-2 mobile:pl-[8vw] pr-[4vw] pt-8 sm:pt-20 relative overflow-x-hidden bg-footprint-bg bg-cover"
        >
            <div className="flex justify-between md:flex-row flex-col items-center">
                <div className="flex flex-col h-full w-full md:w-3/5 gap-y-3">
                    <p className="text-2xl font-bold font-inter capitalize">
                        Our
                    </p>
                    <h2 className="font-extrabold leading-none text-[52px] text-blue-800 font-inter">
                        Footprints
                    </h2>
                    {text && (
                        <div>
                            <p className="max-w-[480px] text-3xl font-extrabold font-inter">
                                Jamiat lead {text.count.edu + text.count.res}{" "}
                                units around {text.title}
                            </p>
                            <div className="max-w-[510px] h-28 p-2 border-2 border-black rounded-lg flex justify-evenly items-center my-5">
                                <div className="flex flex-col items-center">
                                    <h6 className="text-lg font-semibold">
                                        Educational Units
                                    </h6>
                                    <p className="text-4xl text-blue-800 font-extrabold font-inter">
                                        {text.count.edu}
                                    </p>
                                </div>
                                <div className="h-5/6 w-px mr-2 bg-black"></div>
                                <div className="flex flex-col items-center">
                                    <h6 className="text-lg font-semibold">
                                        Residential Units
                                    </h6>
                                    <p className="text-4xl text-blue-800 font-extrabold font-inter">
                                        {text.count.res}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="h-auto w-2/5 min-w-[345px]">
                    <Pakistan
                        text={text}
                        analyticsData={analyticsData}
                        ontextChange={handleChange}
                    />
                </div>
            </div>
            <div className="lg:-mt-6 pb-20">
                <h4 className="w-fit text-2xl mb-4 font-extrabold font-inter">
                    Activities
                </h4>
                <div className="flex max-sm:justify-center gap-4 mb-4 flex-wrap">
                    {activities.map((activity) => (
                        <Link
                            key={activity._id}
                            className="hover:brightness-90 transition-[filter]"
                            href={`/activities/${activity.slug}`}
                        >
                            <Image
                                src={`/images${activity.image}`}
                                height={160}
                                width={190}
                                className="w-52 h-52 object-cover rounded-xl"
                                alt="photo"
                            />
                        </Link>
                    ))}
                </div>
                <Link
                    className="text-blue-800 hover:text-blue-600 block md:inline text-center text-lg font-medium underline"
                    href="/activities"
                >
                    View All
                </Link>
            </div>
            <div className="flex absolute text-black bottom-8 left-8 flex-col z-10">
                <p>06</p>
                <div className="h-px w-full bg-sky-400"></div>
                <p>07</p>
            </div>
        </div>
    );
}
