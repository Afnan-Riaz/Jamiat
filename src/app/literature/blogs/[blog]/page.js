import Image from "next/image";
import { connectionStr } from "@/utils/db";
import mongoose from "mongoose";
import Blogs from "@/utils/model/blogsModel";

const getData = async (slug) => {
    await mongoose.connect(connectionStr);
    const data = await Blogs.findOne({ type: "blog", slug: slug });
    return data;
};

export default async function Blog({ params }) {
    let data = await getData(params.blog);
    return (
        <div className="mb-20">
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center bg-center">
                <h1 className="text-5xl text-white font-semibold font-inter">
                    {data.title}
                </h1>
            </div>
            <div className="flex lg:flex-row flex-col mt-14 lg:gap-20 lg:px-20 px-5">
                <main className="lg:w-2/3 w-full">
                    <Image
                        src={data.image}
                        className="mb-10"
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
                <aside className="lg:w-1/3 w-full">
                    <div className="w-full flex gap-5 items-center border-b-2 mt-5 pb-5">
                        <Image
                            src={"/inspiration-photo1.png"}
                            height={120}
                            width={120}
                            alt="photo"
                        />
                        <div>
                            <h4 className="text-lg font-medium">
                                Syed Abul A'la Maududi example news
                            </h4>
                            <p className="text-sm text-gray-500">5 days ago</p>
                        </div>
                    </div>
                    <div className="w-full flex gap-5 items-center border-b-2 mt-5 pb-5">
                        <Image
                            src={"/inspiration-photo1.png"}
                            height={120}
                            width={120}
                            alt="photo"
                        />
                        <div>
                            <h4 className="text-lg font-medium">
                                Syed Abul A'la Maududi example news
                            </h4>
                            <p className="text-sm text-gray-500">5 days ago</p>
                        </div>
                    </div>
                    <div className="w-full flex gap-5 items-center border-b-2 mt-5 pb-5">
                        <Image
                            src={"/inspiration-photo1.png"}
                            height={120}
                            width={120}
                            alt="photo"
                        />
                        <div>
                            <h4 className="text-lg font-medium">
                                Syed Abul A'la Maududi example news
                            </h4>
                            <p className="text-sm text-gray-500">5 days ago</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
