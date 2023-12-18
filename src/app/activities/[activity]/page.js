import Image from "next/image";

function Activity({params}) {
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center">
                <h1 className="text-5xl text-white text-center font-semibold font-inter">
                    {params.activity}
                </h1>
            </div>
            <div className="container px-5 py-24 mx-auto text-gray-600">
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image
                                width={500}
                                height={500}
                                alt="activity"
                                className="relative w-full object-cover object-center"
                                src={"/activity1.png"}
                            />
                            <div className="absolute inset-0 px-8 py-10 z-10 w-full border-4 border-gray-200 bg-white transition-opacity opacity-0 hover:opacity-100">
                                <p className="leading-relaxed">
                                    Photo description Lorem ipsum dolor, sit
                                    amet consectetur adipisicing elit. Mollitia
                                    accusantium, facilis distinctio
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image
                                width={500}
                                height={500}
                                alt="activity"
                                className="relative w-full object-cover object-center"
                                src={"/activity1.png"}
                            />
                            <div className="absolute inset-0 px-8 py-10 z-10 w-full border-4 border-gray-200 bg-white transition-opacity opacity-0 hover:opacity-100">
                                <p className="leading-relaxed">
                                    Photo description Lorem ipsum dolor, sit
                                    amet consectetur adipisicing elit. Mollitia
                                    accusantium, facilis distinctio
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image
                                width={500}
                                height={500}
                                alt="activity"
                                className="relative w-full object-cover object-center"
                                src={"/activity1.png"}
                            />
                            <div className="absolute inset-0 px-8 py-10 z-10 w-full border-4 border-gray-200 bg-white transition-opacity opacity-0 hover:opacity-100">
                                <p className="leading-relaxed">
                                    Photo description Lorem ipsum dolor, sit
                                    amet consectetur adipisicing elit. Mollitia
                                    accusantium, facilis distinctio
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image
                                width={500}
                                height={500}
                                alt="activity"
                                className="relative w-full object-cover object-center"
                                src={"/activity1.png"}
                            />
                            <div className="absolute inset-0 px-8 py-10 z-10 w-full border-4 border-gray-200 bg-white transition-opacity opacity-0 hover:opacity-100">
                                <p className="leading-relaxed">
                                    Photo description Lorem ipsum dolor, sit
                                    amet consectetur adipisicing elit. Mollitia
                                    accusantium, facilis distinctio
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image
                                width={500}
                                height={500}
                                alt="activity"
                                className="relative w-full object-cover object-center"
                                src={"/activity1.png"}
                            />
                            <div className="absolute inset-0 px-8 py-10 z-10 w-full border-4 border-gray-200 bg-white transition-opacity opacity-0 hover:opacity-100">
                                <p className="leading-relaxed">
                                    Photo description Lorem ipsum dolor, sit
                                    amet consectetur adipisicing elit. Mollitia
                                    accusantium, facilis distinctio
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image
                                width={500}
                                height={500}
                                alt="activity"
                                className="relative w-full object-cover object-center"
                                src={"/activity1.png"}
                            />
                            <div className="absolute inset-0 px-8 py-10 z-10 w-full border-4 border-gray-200 bg-white transition-opacity opacity-0 hover:opacity-100">
                                <p className="leading-relaxed">
                                    Photo description Lorem ipsum dolor, sit
                                    amet consectetur adipisicing elit. Mollitia
                                    accusantium, facilis distinctio
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activity;
