import Image from "next/image";
import { connectionStr } from "@/utils/db";
import mongoose from "mongoose";
import Blogs from "@/utils/model/blogsModel";

const getData = async (slug) => {
    await mongoose.connect(connectionStr);
    const data = await Blogs.findOne({ type: "project", slug: slug });
    return data;
};

async function Project({ params }) {
    let data = await getData(params.project);
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center bg-center">
                <h1 className="text-5xl text-white font-semibold font-inter">
                    {data.title}
                </h1>
            </div>
            <div className="mx-20 my-10">
                <div className="flex gap-10">
                    <Image
                        className="h-fit"
                        src={data.image}
                        width={400}
                        height={300}
                        alt="photo"
                    />
                    <div className="my-6">
                    {
                        <div
                            className="revert-tailwind"
                            key={data._id}
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        ></div>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
