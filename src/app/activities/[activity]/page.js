import Image from "next/image";

const getData = async (slug) => {
    const data = await fetch(`${process.env.domain}/api/blogs/activities`).then(
        (response) => {
            if (!response.ok) {
                console.error(
                    `Error: ${response.status} - ${response.statusText}`
                );
                return [];
            }
        }
    );
    const filter = data.find((obj) => obj.slug === slug);
    return filter;
};

async function Activity({ params }) {
    let data = await getData(params.activity);
    let activities = data.images;
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center">
                <h1 className="text-5xl text-white text-center font-semibold font-inter">
                    {data.title}
                </h1>
            </div>
            <div className="container px-5 py-24 mx-auto text-gray-600">
                <div className="flex flex-wrap -m-4">
                    {activities.map((activity) => (
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative rounded-3xl overflow-hidden group">
                                <Image
                                    width={500}
                                    height={500}
                                    alt="activity"
                                    className="relative w-full object-cover object-center"
                                    src={activity.link}
                                />
                                <div className="absolute inset-0 w-full bg-neutral-900 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-80"></div>
                                <p className="absolute flex items-center justify-center text-xl inset-x-10 top-[100%] group-hover:top-0 inset-0 transition-all duration-300 ease-in-out text-white leading-relaxed opacity-0 group-hover:opacity-100">
                                    {activity.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Activity;
