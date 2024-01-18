import Image from "next/image";
import { connectionStr } from "@/utils/db";
import mongoose from "mongoose";
import { Profiles } from "@/utils/model/profilesModel";

const getData = async (slug) => {
    // try {
    //     const data = await fetch(
    //         `${process.env.NEXT_PUBLIC_DOMAIN}/api/profiles/inspirations`
    //     ).then((response) => {
    //         if (!response.ok) {
    //             console.error(
    //                 `Error: ${response.status} - ${response.statusText}`
    //             );
    //             return [];
    //         }
    //     });
    //     const filter = data.find((obj) => obj.slug === slug);
    //     return filter;
    // } catch (error) {
    //     console.error("Error fetching data:", error.message);
    // }
    await mongoose.connect(connectionStr);
    const data=await Profiles.findOne({ type: 'inspiration' ,slug:slug});
    return data;
};

async function Inspiration({ params }) {
    let data = await getData(params.inspiration);
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center bg-center">
                <h1 className="text-5xl text-white font-semibold font-inter">
                    {data.name}
                </h1>
            </div>
            <div className="flex lg:mx-20 mx-10 my-10">
                <div className="w-1/3 space-y-4">
                    <Image
                        src={data.image}
                        width={350}
                        height={200}
                        alt="photo"
                    />
                    <div className="flex gap-3">
                        <h3 className="text-xl font-semibold">Name: </h3>
                        <p className="text-lg">{data.name}</p>
                    </div>
                    <div className="flex gap-3">
                        <h3 className="text-xl font-semibold">Born: </h3>
                        <p className="text-lg">{data.dob}</p>
                    </div>
                    {data.dod && (
                        <div className="flex gap-3">
                            <h3 className="text-xl font-semibold">Died: </h3>
                            <p className="text-lg">{data.dod}</p>
                        </div>
                    )}
                    <div className="flex gap-3">
                        <h3 className="text-xl font-semibold">Designation: </h3>
                        <p className="text-lg">{data.designation}</p>
                    </div>
                </div>
                <div className="w-2/3">
                    <div>
                        {/* <h2 className="text-blue-700 text-3xl font-semibold mb-3">
                            Heading 1
                        </h2>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Similique dolores debitis deleniti placeat
                            vel, quo doloribus itaque ea. Distinctio
                            reprehenderit nesciunt iure cupiditate fuga ullam
                            rerum voluptates, laudantium possimus magnam eius
                            maxime voluptatum dolor corrupti dolorum minus! Sit
                            ducimus asperiores aspernatur debitis molestiae
                            deleniti perferendis magnam commodi reiciendis
                            maxime! Inventore obcaecati id eligendi eum
                            perferendis veniam, velit voluptatem, voluptates
                            dicta ea impedit animi ab quae nesciunt pariatur,
                            nisi praesentium. Dignissimos iste totam repudiandae
                            suscipit? Nihil inventore voluptate, obcaecati
                            voluptatum temporibus odit, explicabo, natus earum
                            voluptatibus cumque, ex aspernatur maxime vel libero
                            odio consequatur tenetur perferendis. Rem odio
                            corporis aliquid voluptatum, deserunt adipisci sunt
                            necessitatibus quod similique, totam aspernatur
                            nihil.
                        </p> */}
                        {data.content}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inspiration;
