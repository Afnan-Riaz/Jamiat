import Image from "next/image";
import Link from "next/link";

import { connectDB } from "@/utils/db";
import Blogs  from "@/utils/model/blogsModel";

import { getMetaData } from "@/utils/metadata";

export const revalidate = 0;

export async function generateMetadata() {
    const metadata = await getMetaData("projects");
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
    const data = await Blogs.find({ type: "project" });
    return data;
};

export default async function Projects() {
    let projects = await getData();
    return (
        <section className="text-gray-600">
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center bg-center">
                <h1 className="text-5xl text-white font-semibold font-inter">
                    Our Projects
                </h1>
            </div>
            <div className="container pt-12 pb-24 mx-auto">
                <div className="flex flex-wrap justify-center gap-8">
                    {projects.map((project) => (
                        <div
                            key={project._id}
                            className="relative mb-6 hover:brightness-90 transition-all w-fit h-fit md:rounded-lg rounded-3xl overflow-hidden"
                        >
                            <Image
                                width={1000}
                                height={500}
                                className="h-full w-full object-contain object-center"
                                src={`/images${project.image}`}
                                alt="photo"
                            />
                            <div className="absolute bottom-0 w-full flex flex-col items-center text-white">
                                <h4 className="text-xl text-center font-semibold">
                                    {project.title}
                                </h4>
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="text-base hover:text-gray-300 hover:scale-105 transition-all my-10 border-2 px-5 py-2 rounded-md"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
