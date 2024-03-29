import Image from "next/image";

import { connectDB } from "@/utils/db";
import Blogs from "@/utils/model/blogsModel";

export async function generateMetadata({ params }) {
    const metadata = await getData(params.release);
    return {
        title: metadata.meta_title,
        description: metadata.meta_description,
        alternates: {
            canonical: metadata.canonical,
        },
    };
}
const getData = async (slug) => {
    await connectDB();
    const data = await Blogs.findOne({ type: "release", slug: slug });
    return data;
};

export default async function Release({ params }) {
    let data = await getData(params.release);

    return (
        <div className="mb-20">
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center bg-center">
                <h1 className="text-5xl text-white font-semibold max-w-3xl text-center leading-tight font-inter">
                    {data.title}
                </h1>
            </div>
            <div className="flex lg:flex-row flex-col mt-14 lg:gap-20 lg:px-20 px-5">
                <main className="lg:w-2/3 w-full">
                    <Image
                        src={`/images${data.image}`}
                        width={1000}
                        height={1000}
                        alt="photo"
                    />
                    {
                        <div
                            className="revert-tailwind"
                            key={data._id}
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        ></div>
                    }
                </main>
                <News />
            </div>
        </div>
    );
}
