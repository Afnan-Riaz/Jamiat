import Link from "next/link";
import React from "react";
import Image from "next/image";
function Magazine() {
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center bg-center">
                <h1 className="text-5xl text-white font-semibold font-inter">
                    Hamqadam Magazine
                </h1>
            </div>
            <div className="flex justify-between gap-3 mx-20 my-10">
                <div className="mt-5">
                    <h2 className="text-4xl mb-6 text-blue-700 font-semibold">
                        Index
                    </h2>
                    <ul className="space-y-3 list-disc text-lg">
                        <li className="flex justify-between gap-x-20">
                            Hamqadam Magazine January 2023
                            <Link
                                href={
                                    "http://www.tazkeer.org/literature/read/dastoor-islami-jamiat-talaba/1701"
                                }
                                className="underline"
                            >
                                Read Here
                            </Link>
                        </li>
                        <li className="flex justify-between gap-x-20">
                            Hamqadam Magazine Feburary 2023
                            <Link
                                href={
                                    "http://www.tazkeer.org/literature/read/dastoor-islami-jamiat-talaba/1701"
                                }
                                className="underline"
                            >
                                Read Here
                            </Link>
                        </li>
                        <li className="flex justify-between gap-x-20">
                            Hamqadam Magazine March 2023
                            <Link
                                href={
                                    "http://www.tazkeer.org/literature/read/dastoor-islami-jamiat-talaba/1701"
                                }
                                className="underline"
                            >
                                Read Here
                            </Link>
                        </li>
                        <li className="flex justify-between gap-x-20">
                            Hamqadam Magazine April 2023
                            <Link
                                href={
                                    "http://www.tazkeer.org/literature/read/dastoor-islami-jamiat-talaba/1701"
                                }
                                className="underline"
                            >
                                Read Here
                            </Link>
                        </li>
                        <li className="flex justify-between gap-x-20">
                            Hamqadam Magazine May 2023
                            <Link
                                href={
                                    "http://www.tazkeer.org/literature/read/dastoor-islami-jamiat-talaba/1701"
                                }
                                className="underline"
                            >
                                Read Here
                            </Link>
                        </li>
                        <li className="flex justify-between gap-x-20">
                            Hamqadam Magazine June 2023
                            <Link
                                href={
                                    "http://www.tazkeer.org/literature/read/dastoor-islami-jamiat-talaba/1701"
                                }
                                className="underline"
                            >
                                Read Here
                            </Link>
                        </li>
                        <li className="flex justify-between gap-x-20">
                            Hamqadam Magazine July 2023
                            <Link
                                href={
                                    "http://www.tazkeer.org/literature/read/dastoor-islami-jamiat-talaba/1701"
                                }
                                className="underline"
                            >
                                Read Here
                            </Link>
                        </li>
                        <li className="flex justify-between gap-x-20">
                            Hamqadam Magazine August 2023
                            <Link
                                href={
                                    "http://www.tazkeer.org/literature/read/dastoor-islami-jamiat-talaba/1701"
                                }
                                className="underline"
                            >
                                Read Here
                            </Link>
                        </li>
                        <li className="flex justify-between gap-x-20">
                            Hamqadam Magazine September 2023
                            <Link
                                href={
                                    "http://www.tazkeer.org/literature/read/dastoor-islami-jamiat-talaba/1701"
                                }
                                className="underline"
                            >
                                Read Here
                            </Link>
                        </li>
                        <li className="flex justify-between gap-x-20">
                            Hamqadam Magazine October 2023
                            <Link
                                href={
                                    "http://www.tazkeer.org/literature/read/dastoor-islami-jamiat-talaba/1701"
                                }
                                className="underline"
                            >
                                Read Here
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-10">
                    <Image
                        className="max-w-[350px] h-fit"
                        src={"/magazine.png"}
                        width={350}
                        height={350}
                    />
                    <Image
                        className="max-w-[350px] h-fit"
                        src={"/magazine.png"}
                        width={350}
                        height={350}
                    />
                </div>
            </div>
        </div>
    );
}

export default Magazine;
