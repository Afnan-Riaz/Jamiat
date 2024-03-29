
import { Media } from "@/utils/model/mediaModel";
import { connectDB } from "@/utils/db";
import { getMetaData } from "@/utils/metadata";

export const revalidate = 0;

export async function generateMetadata() {
    const metadata = await getMetaData("videos");
    return {
        title: metadata.meta_title,
        description: metadata.meta_description,
        alternates: {
            canonical: metadata.canonical,
        },
    };
}
const getData = async () => {
    await connectDB();
    const data=await Media.find({type:"video"});
    return data;
};

async function Videos() {
    let data = await getData();
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center">
                <h1 className="text-5xl text-white text-center font-semibold font-inter">
                    Our Videos
                </h1>
            </div>
            <div className="container mobile:px-5 py-24  mx-auto">
                <div className="flex flex-wrap mobile:-m-4">
                    {data.map((item) => (
                        <div key={item._id} className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="border-2 rounded-2xl overflow-hidden">
                                <iframe
                                    width="560"
                                    height="270"
                                    src={item.link}
                                    title="YouTube video player"
                                    allow="accelerometer; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    className="w-full"
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Videos;
