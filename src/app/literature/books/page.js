import Image from "next/image";
import Link from "next/link";

import { connectDB } from "@/utils/db";
import { Media } from "@/utils/model/mediaModel";
import { getMetaData } from "@/utils/metadata";

export const revalidate = 0;

export async function generateMetadata() {
    const metadata = await getMetaData("books");
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
    const data = await Media.find({ type: "book" });
    return data;
};

export default async function Books() {
    let data = await getData();
    return (
        <section className="text-gray-600">
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center bg-center">
                <h1 className="text-5xl text-white font-semibold font-inter">
                    Our Books
                </h1>
            </div>
            <div className="container pt-12 pb-24 mx-auto">
                <div className="flex flex-wrap justify-center gap-6">
                    {data.map((book) => (
                        <Link
                            key={book._id}
                            href={book.link}
                            className="h-[500px] mb-6 w-fit max-w-[400px] hover:brightness-90 transition-all md:rounded-lg rounded-3xl overflow-hidden"
                        >
                            <Image
                                width={1000}
                                height={500}
                                className="h-full w-full object-contain object-center"
                                src={`/images${book.title}`}
                                alt="book"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
