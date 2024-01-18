import Image from "next/image";
import { connectionStr } from "@/utils/db";
import mongoose from "mongoose";

const getData = async (slug) => {
    // try {
    //     const data = await fetch(
    //         `${process.env.NEXT_PUBLIC_DOMAIN}/api/blogs/releases`
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
    const data = await Blogs.find({ type: "release", slug: slug });
    return data;
};

export default async function Release({ params }) {
    let data = await getData(params.release);
    const shorten = (content) => {
        const words = content.split(" ");
        const first50 = words.slice(0, 50).join(" ");
        return first50;
    };
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
                        width={1000}
                        height={1000}
                        alt="photo"
                    />
                    <h4 className="text-3xl font-semibold text-blue-700 font-inter my-4">
                        Statement
                    </h4>
                    <p>{shorten(data.content)}</p>
                    <h4 className="text-3xl font-semibold text-blue-700 font-inter my-4">
                        Full Message
                    </h4>
                    <p>{data.content}</p>
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
