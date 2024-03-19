import Image from "next/image";

import { connectDB } from "@/utils/db";
import { Media } from "@/utils/model/mediaModel";

export const revalidate=0

const getData = async () => {
    await connectDB();
    const data = await Media.find({ type: "image" });
    return data;
};

async function Images() {
    let data = await getData();
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center">
                <h1 className="text-5xl text-white text-center font-semibold font-inter">
                    Image Gallery
                </h1>
            </div>
            <div className="container px-5 py-24 mx-auto text-gray-600">
                <div className="flex flex-wrap -m-4">
                    {data.map((image) => (
                        <div key={image._id} className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative rounded-3xl overflow-hidden group">
                                <Image
                                    width={500}
                                    height={500}
                                    alt="gallery"
                                    className="relative w-full object-cover object-center"
                                    src={`/images${image.link}`}
                                />
                                <div className="absolute inset-0 w-full bg-neutral-900 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-80"></div>
                                <div className="absolute flex flex-col items-center justify-center inset-x-10 top-[100%] group-hover:top-0 inset-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                    <h1 className="text-xl font-medium text-white mb-3">
                                        {image.title}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Images;
