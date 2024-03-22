import Image from "next/image";

import { connectDB } from "@/utils/db";
import { Page } from "@/utils/model/pageModel";
import News from "@/app/components/news";

export const revalidate = 0;
export async function generateMetadata() {
    const metadata = await getData();
    return {
        title: metadata.meta_title,
        description: metadata.meta_description,
        alternates: {
            canonical: metadata.canonical,
        },
    };
}
export const getData = async () => {
    await connectDB();
    const slug = "islami-jamiat-talaba";
    const data = Page.findOne({ slug: slug });
    return data || [];
};
export default async function IJT() {
    let data = await getData();
    return (
        <div className="mb-20">
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center">
                <h1 className="text-5xl text-white font-semibold font-inter">
                    Jamiat
                </h1>
            </div>
            <div className="flex lg:flex-row flex-col mt-14 lg:gap-20 lg:px-20 px-5">
                <main className="lg:w-2/3 w-full">
                    {
                        <div
                            className="revert-tailwind"
                            key={data._id}
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        ></div>
                    }
                </main>
                <News/>
            </div>
        </div>
    );
}
