import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
    return (
        <section class="text-gray-600">
            <div className="bg-green-800 w-full h-28 -mt-24"></div>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 md:rounded-lg rounded-3xl overflow-hidden">
                            <Image
                                width={500}
                                height={500}
                                class="lg:h-48 md:h-36 w-full object-cover object-center"
                                src="/event-1.png"
                                alt="blog"
                            />
                            <div class="p-6">
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                                    Blog 1
                                </h1>
                                <p class="leading-relaxed mb-3">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Itaque, praesentium?
                                    Veniam qui est maxime. Veritatis doloribus
                                    eos sint voluptatum officia voluptate?
                                    Deserunt obcaecati a nihil qui placeat
                                    voluptatum vitae delectus.
                                </p>
                                <div class="flex items-center flex-wrap ">
                                    <Link
                                        href={`/blogs/blog-1`}
                                        class="text-blue-700 inline-flex items-center md:mb-2 lg:mb-0"
                                    >
                                        Read More
                                        <svg
                                            class="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 md:w-1/3">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 md:rounded-lg rounded-3xl overflow-hidden">
                            <Image
                                width={500}
                                height={500}
                                class="lg:h-48 md:h-36 w-full object-cover object-center"
                                src="/event-2.png"
                                alt="blog"
                            />
                            <div class="p-6">
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                                    Blog 2
                                </h1>
                                <p class="leading-relaxed mb-3">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Itaque, praesentium?
                                    Veniam qui est maxime. Veritatis doloribus
                                    eos sint voluptatum officia voluptate?
                                    Deserunt obcaecati a nihil qui placeat
                                    voluptatum vitae delectus.
                                </p>
                                <div class="flex items-center flex-wrap">
                                    <Link
                                        href={`/blogs/blog-2`}
                                        class="text-blue-700 inline-flex items-center md:mb-2 lg:mb-0"
                                    >
                                        Read More
                                        <svg
                                            class="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 md:w-1/3">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 md:rounded-lg rounded-3xl overflow-hidden">
                            <Image
                                width={500}
                                height={500}
                                class="lg:h-48 md:h-36 w-full object-cover object-center"
                                src="/press-release-img.png"
                                alt="blog"
                            />
                            <div class="p-6">
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                                    Blog 3
                                </h1>
                                <p class="leading-relaxed mb-3">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Itaque, praesentium?
                                    Veniam qui est maxime. Veritatis doloribus
                                    eos sint voluptatum officia voluptate?
                                    Deserunt obcaecati a nihil qui placeat
                                    voluptatum vitae delectus.
                                </p>
                                <div class="flex items-center flex-wrap ">
                                    <Link
                                        href={`/blogs/blog-3`}
                                        class="text-blue-700 inline-flex items-center md:mb-2 lg:mb-0"
                                    >
                                        Read More
                                        <svg
                                            class="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
