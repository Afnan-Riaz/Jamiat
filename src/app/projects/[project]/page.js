import Image from "next/image";
import { connectionStr } from "@/utils/db";
import mongoose from "mongoose";
import Blogs from "@/utils/model/blogsModel";

const getData = async (slug) => {
    // try {
    //     const data = await fetch(
    //         `${process.env.NEXT_PUBLIC_DOMAIN}/api/blogs/projects`
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
                        {/* <h2 className="text-2xl font-semibold text-black">
                            Heading
                        </h2>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatibus nam vel officia. Iusto eligendi
                            quas excepturi. Distinctio eos, saepe perspiciatis,
                            adipisci voluptatibus itaque delectus ipsa nemo
                            facere dolorem ex placeat exercitationem quam aut
                            sapiente sequi, cum nam architecto non! Itaque qui
                            maxime, aut illo debitis explicabo nam nostrum
                            deleniti assumenda voluptatibus exercitationem! Modi
                            blanditiis impedit velit exercitationem tenetur
                            perferendis similique praesentium magnam optio rem
                            esse fuga enim vero magni saepe nisi harum quo
                            debitis, mollitia labore corporis veritatis nostrum
                            porro quibusdam! Quo, vero quae assumenda sit animi
                            minima magnam accusamus nulla distinctio eveniet,
                            quia cupiditate soluta, ad id architecto
                            necessitatibus sunt ipsam et in amet.
                        </p> */}
                        <p>{data.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
