import Image from "next/image";
import Link from "next/link";
import { connectionStr } from "@/utils/db";
import mongoose from "mongoose";
import BlogsModel from "@/utils/model/blogsModel";
export const revalidate = 0;

const getData = async () => {
    await mongoose.connect(connectionStr);
    const data = await BlogsModel.find({ type: "blog" });
    return data;
};

export default async function Blogs() {
    let data = await getData();
    return (
        <section className="text-gray-600">
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center bg-center">
                <h1 className="text-5xl text-white font-semibold font-inter">
                    Our Blogs
                </h1>
            </div>
            <div className="container px-5 pt-12 pb-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {data.map((blog) => (
                        <div key={blog._id} className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 md:rounded-lg rounded-3xl overflow-hidden">
                                <Image
                                    width={500}
                                    height={500}
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src={blog.image}
                                    alt="blog"
                                />
                                <div className="p-6 relative">
                                    <h1 className="text-lg font-medium text-gray-900 mb-3">
                                        {blog.title}
                                    </h1>
                                    <div className="max-h-[300px] overflow-hidden text-ellipsis">
                                        {
                                            <div
                                                className="revert-tailwind"
                                                key={blog._id}
                                                dangerouslySetInnerHTML={{
                                                    __html: blog.content,
                                                }}
                                            ></div>
                                        }
                                    </div>
                                    <div className="flex items-center h-12 bottom-0 -mr-6 bg-white w-full absolute">
                                        <Link
                                            href={`/literature/blogs/${blog.slug}`}
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
