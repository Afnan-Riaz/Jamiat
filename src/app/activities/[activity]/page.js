import Image from "next/image";
function Activity({ params }) {
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
                        <div className="flex relative group">
                            <Image
                                width={500}
                                height={500}
                                alt="activity"
                                className="relative w-full object-cover object-center transition-all duration-500 ease-out transform group-hover:scale-75"
                                src={"/activity2.png"}
                            />
                            <div className="absolute inset-0 px-8 py-10 z-10 w-full border-4 border-gray-200 bg-white transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                <p className="leading-relaxed">
                                    Photo description Lorem ipsum dolor, sit
                                    amet consectetur adipisicing elit. Mollitia
                                    accusantium, facilis distinctio
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative overflow-hidden group">
                            <Image
                                width={500}
                                height={500}
                                alt="activity"
                                className="relative w-full object-cover object-center group-hover:scale-0 transition-transform duration-500"
                                src={"/activity1.png"}
                            />
                            <div className="absolute inset-0 px-8 py-10 z-10 w-full border-4 border-gray-200 bg-white transition-transform translate-x-full duration-500 group-hover:translate-x-0">
                                <p className="leading-relaxed">
                                    Photo description Lorem ipsum dolor, sit
                                    amet consectetur adipisicing elit. Mollitia
                                    accusantium, facilis distinctio
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 group sm:w-1/2 p-4">
                        <div className="relative flex group-hover:[transform:rotateY(180deg)] transition-all duration-700">
                            <Image
                                width={500}
                                height={500}
                                alt="activity"
                                className="relative w-full h-full transition-all duration-100 delay-200 z-20 group-hover:opacity-0"
                                src={"/activity1.png"}
                            />
                            <div className="absolute [transform:rotateY(180deg)] inset-0 w-full h-full px-8 py-10 border-4 rounded-3xl border-gray-200 transition-all z-10">
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
