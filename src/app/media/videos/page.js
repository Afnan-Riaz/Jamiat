const getData = async () => {
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/media/videos`).then(
            (response) => {
                if (!response.ok) {
                    console.error(
                        `Error: ${response.status} - ${response.statusText}`
                    );
                    return [];
                }
            }
        );
        return data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
};

async function Videos() {
    let data = await getData();
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center">
                <h1 className="text-5xl text-white text-center font-semibold font-inter">
                    Our Videos
                </h1>
            </div>
            <div className="container mobile:px-5 py-24  mx-auto">
                <div className="flex flex-wrap mobile:-m-4">
                    {data.map((item) => (
                        <div key={item._id} className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="border-2 rounded-2xl overflow-hidden">
                                <iframe
                                    width="560"
                                    height="270"
                                    src={item.link}
                                    title="YouTube video player"
                                    allow="accelerometer; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    className="w-full"
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Videos;
