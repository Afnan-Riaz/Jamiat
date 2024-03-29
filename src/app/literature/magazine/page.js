import Link from "next/link";
import Image from "next/image";

import { connectDB } from "@/utils/db";
import { Media } from "@/utils/model/mediaModel";
import { getMetaData } from "@/utils/metadata";

export const revalidate = 0;

export async function generateMetadata() {
    const metadata = await getMetaData("magazine");
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
    const data = await Media.find({ type: "magazine" }).sort({ date: -1 });
    return data;
};

async function Magazine() {
    let magazines = await getData();
    const parseDate = (d) => {
        const date = d.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
        });
        return date;
    };
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center bg-center">
                <h1 className="text-5xl text-white font-semibold font-inter">
                    Hamqadam Magazine
                </h1>
            </div>
            <div className="flex justify-between gap-3 mx-20 my-10">
                <div className="mt-5">
                    <h2 className="text-4xl mb-6 text-blue-700 font-semibold">
                        Index
                    </h2>
                    <ul className="space-y-3 list-disc text-lg">
                        {magazines.map((magazine) => (
                            <li
                                key={magazine._id}
                                className="flex justify-between gap-x-20"
                            >
                                <div className="space-x-3">
                                    <span className="font-medium">
                                        {magazine.title}
                                    </span>
                                    <span>{parseDate(magazine.date)}</span>
                                </div>
                                <Link
                                    href={magazine.link}
                                    className="underline"
                                >
                                    Read Here
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Link className="block mb-10" href={magazines[0].link}>
                        <Image
                            className="max-w-[350px] h-fit"
                            src={`/images${magazines[0].description}`}
                            width={350}
                            height={350}
                            alt="photo"
                        />
                    </Link>
                    <Link href={magazines[1].link}>
                        <Image
                            className="max-w-[350px] h-fit"
                            src={`/images${magazines[1].description}`}
                            width={350}
                            height={350}
                            alt="photo"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Magazine;
