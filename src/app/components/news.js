import Blogs from "@/utils/model/blogsModel";
import Image from "next/image";
import Link from "next/link";

import { connectDB } from "@/utils/db";

export const revalidate = 0;
const getData = async () => {
    await connectDB();
    const data = await Blogs.find({ type: "release" })
        .sort({ date: -1 })
        .limit(3);
    return data;
};
export default async function News() {
    const data = await getData();
    const parseDate = (d) => {
        const date = new Date(d).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
        return date;
    };
    return (
        <aside className="lg:w-1/3 w-full">
            {data.map((release) => (
                <div className="w-full flex gap-5 items-center border-b-2 mt-5 pb-5">
                    <Image
                        src={`/images${release.image}`}
                        height={120}
                        width={120}
                        alt="photo"
                    />
                    <div>
                        <h4 className="text-lg font-medium">{release.title}</h4>
                        <p className="text-sm text-gray-500">
                            {parseDate(release.date)}
                        </p>
                    </div>
                </div>
            ))}
        </aside>
    );
}
