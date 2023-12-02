"use client";
import { useState } from "react";
import Pakistan from "./map";
import Image from "next/image";
import Link from "next/link";
export default function Footprint() {
    const [text, setText] = useState({
        state: "Pakistan",
        resident: "868",
        education: "532",
    });
    const handleChange = (t) => {
        setText(t);
    };
    return (
        <div className="w-full pl-2 mobile:pl-[8vw] pr-[4vw] pt-8 sm:pt-20 relative bg-footprint-bg bg-cover">
            <div className="flex justify-between md:flex-row flex-col items-center">
                <div className="flex flex-col h-full w-full md:w-3/5 gap-y-3">
                    <p className="text-2xl font-bold font-inter capitalize">
                        Our
                    </p>
                    <h2 className="font-extrabold leading-none text-[52px] text-blue-800 font-inter">
                        Footprints
                    </h2>
                    <p className="max-w-[480px] text-3xl font-extrabold font-inter">
                        Jamiat led 1400 units around {text.state}
                    </p>
                    <div className="max-w-[510px] h-28 p-2 border-2 border-black rounded-lg flex justify-evenly items-center my-5">
                        <div className="flex flex-col items-center">
                            <h6 className="text-lg font-semibold">
                                Educational Units
                            </h6>
                            <p className="text-4xl text-blue-800 font-extrabold font-inter">
                                {text.education}
                            </p>
                        </div>
                        <div className="h-5/6 w-px mr-2 bg-black"></div>
                        <div className="flex flex-col items-center">
                            <h6 className="text-lg font-semibold">
                                Residential Units
                            </h6>
                            <p className="text-4xl text-blue-800 font-extrabold font-inter">
                                {text.resident}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-2/5 min-w-[345px]">
                    <Pakistan text={text} onChange={handleChange} />
                </div>
            </div>
            <div className="lg:-mt-6 pb-20">
                <h4 className="w-fit text-2xl mb-4 font-extrabold font-inter">
                    Activities
                </h4>
                <div className="flex max-sm:justify-center gap-4 mb-4 flex-wrap">
                    <Link
                        className="hover:brightness-90 transition-[filter]"
                        href={"#"}
                    >
                        <Image
                            src={"/activity1.png"}
                            height={160}
                            width={190}
                            alt="photo"
                        />
                    </Link>
                    <Link
                        className="hover:brightness-90 transition-[filter]"
                        href={"#"}
                    >
                        <Image
                            src={"/activity2.png"}
                            height={160}
                            width={190}
                            alt="photo"
                        />
                    </Link>
                    <Link
                        className="hover:brightness-90 transition-[filter]"
                        href={"#"}
                    >
                        <Image
                            src={"/activity3.png"}
                            height={160}
                            width={190}
                            alt="photo"
                        />
                    </Link>
                </div>
                <Link
                    className="text-blue-800 hover:text-blue-600 w-full block text-center font-medium underline"
                    href="#"
                >
                    View All
                </Link>
            </div>
            <div className="flex absolute text-black bottom-8 left-8 flex-col z-10">
                <p>06</p>
                <div className="h-px w-full bg-sky-400"></div>
                <p>07</p>
            </div>
        </div>
    );
}
