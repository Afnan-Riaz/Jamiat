import Image from "next/image";

const getData = async (slug) => {
    const data = await fetch("http://localhost:3000/api/blogs/activities").then(
        (response) => response.json()
    );
    const filter = data.find((obj) => obj.slug === slug);
    return filter;
};


async function Activity({ params }) {
    let activity= await getData(params.activity);
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center">
                <h1 className="text-5xl text-white text-center font-semibold font-inter">
                    {activity.title}
                </h1>
            </div>
            <div className="container px-5 py-24 mx-auto text-gray-600">
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative rounded-3xl overflow-hidden group">
                            <Image
                                width={500}
                                height={500}
                                alt="activity"
                                className="relative w-full object-cover object-center"
                                src={"/activity1.png"}
                            />
                            <div className="absolute inset-0 w-full bg-neutral-900 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-80"></div>
                            <p className="absolute flex items-center justify-center text-xl inset-x-10 top-[100%] group-hover:top-0 inset-0 transition-all duration-300 ease-in-out text-white leading-relaxed opacity-0 group-hover:opacity-100">
                                Photo description Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Mollitia
                                consectetur adipisicing elit. Mollitia
                                accusantium, facilis distinctio. Lorem ipsum
                                dolor sit, amet duol consectetur adipisicing
                                elit. Fugiat, sed?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activity;
