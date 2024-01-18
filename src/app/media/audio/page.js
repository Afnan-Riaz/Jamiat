const getData = async () => {
    const data = await fetch(`${process.env.domain}/api/media/audio`).then(
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
};

async function Audio() {
    let data = await getData();
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center">
                <h1 className="text-5xl text-white text-center font-semibold font-inter">
                    Our Audio Files
                </h1>
            </div>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {data.map((audio) => (
                        <div key={audio._id} className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="px-4 py-4 border-4 rounded-lg bg-blue-50">
                                <div className="text-lg font-semibold">
                                    <h2 className="text-xl mb-2 text-center font-medium text-blue-700">
                                        {audio.title}
                                    </h2>
                                    <p>
                                        Voice of:
                                        <span className="text-gray-600 text-base ml-2">
                                            {audio.description}
                                        </span>
                                    </p>
                                    <p>
                                        Date:
                                        <span className="text-gray-600 text-base ml-2">
                                            {audio.date}
                                        </span>
                                    </p>
                                </div>
                                <div className="w-full mt-6">
                                    <audio
                                        src={audio.link}
                                        controls
                                        className="w-full min-w-[250px]"
                                    ></audio>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Audio;
