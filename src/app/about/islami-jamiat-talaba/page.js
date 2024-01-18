import Image from "next/image";
export const getData = async () => {
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api`).then(
            (response) => {
                if (!response.ok) {
                    console.error(
                        `Error: ${response.status} - ${response.statusText}`
                    );
                    return [];
                }
            }
        );
        const slug = "islami-jamiat-talaba";
        const filter = data.find((item) => item.slug === slug);
        return filter || null;
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
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
                        <div key={data._id}>
                            {/* <h4 className="text-3xl font-semibold text-blue-700 font-inter my-4">
                                {section.heading}
                            </h4>
                            <p>{section.content}</p> */}
                            {data.content}
                        </div>
                    }
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
