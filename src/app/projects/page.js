import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    return (
        <section className="text-gray-600">
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center bg-center">
                <h1 className="text-5xl text-white font-semibold font-inter">
                    Our Projects
                </h1>
            </div>
            <div className="container pt-12 pb-24 mx-auto">
                <div className="flex flex-wrap justify-center gap-8">
                    <Link
                        href={"/projects/project-1"}
                        className="relative mb-6 hover:brightness-90 transition-all w-fit h-fit md:rounded-lg rounded-3xl overflow-hidden"
                    >
                        <Image
                            width={1000}
                            height={500}
                            className="h-full w-full object-contain object-center"
                            src="/project-afia.png"
                            alt="blog"
                        />
                        <div className="absolute bottom-0 w-full flex flex-col items-center text-white">
                            <h4 className="text-xl text-center font-semibold">
                                Release Dr.Aafia
                            </h4>
                            <button className="text-base hover:text-gray-300 hover:scale-105 transition-all my-10 border-2 px-5 py-2 rounded-md">
                                Read More
                            </button>
                        </div>
                    </Link>
                    <Link
                        href={"/projects/project-2"}
                        className="relative mb-6 hover:brightness-90 transition-all w-fit h-fit md:rounded-lg rounded-3xl overflow-hidden"
                    >
                        <Image
                            width={1000}
                            height={500}
                            className="h-full w-full object-contain object-center"
                            src="/project-environment.png"
                            alt="blog"
                        />
                        <div className="absolute bottom-0 w-full flex flex-col items-center text-white">
                            <h4 className="text-xl text-center font-semibold">
                                Environment
                            </h4>
                            <button className="text-base hover:text-gray-300 hover:scale-105 transition-all my-10 border-2 px-5 py-2 rounded-md">
                                Read More
                            </button>
                        </div>
                    </Link>
                    <Link
                        href={"/projects/project-3"}
                        className="relative mb-6 hover:brightness-90 transition-all w-fit h-fit md:rounded-lg rounded-3xl overflow-hidden"
                    >
                        <Image
                            width={1000}
                            height={500}
                            className="h-full w-full object-contain object-center"
                            src="/project-farmer.png"
                            alt="blog"
                        />
                        <div className="absolute bottom-0 w-full flex flex-col items-center text-white">
                            <h4 className="text-xl text-center font-semibold">
                                Farmer Support
                            </h4>
                            <button className="text-base hover:text-gray-300 hover:scale-105 transition-all my-10 border-2 px-5 py-2 rounded-md">
                                Read More
                            </button>
                        </div>
                    </Link>
                    <Link
                        href={"/projects/project-4"}
                        className="relative mb-6 hover:brightness-90 transition-all w-fit h-fit md:rounded-lg rounded-3xl overflow-hidden"
                    >
                        <Image
                            width={1000}
                            height={500}
                            className="h-full w-full object-contain object-center"
                            src="/project-scholarship.png"
                            alt="blog"
                        />
                        <div className="absolute bottom-0 w-full flex flex-col items-center text-white">
                            <h4 className="text-xl text-center font-semibold">
                                Scholarship Program
                            </h4>
                            <button className="text-base hover:text-gray-300 hover:scale-105 transition-all my-10 border-2 px-5 py-2 rounded-md">
                                Read More
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
