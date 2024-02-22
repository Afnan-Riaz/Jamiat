"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Member() {
    const formRef = useRef(null);
    const [display, setDisplay] = useState(false);
    const handleSubmission = (e) => {
        e.preventDefault();
        if (formRef.current.checkValidity()) {
            setDisplay(true);
            formRef.current.reset();
        } else {
            formRef.current.reportValidity();
        }
    };

    return (
        <div
            id="member-section"
            className="lg:w-5/6 lg:mx-auto sm:mr-4 sm:ml-16 mx-2 h-fit relative flex lg:flex-row flex-col lg:pt-0 pt-8 justify-between items-center"
        >
            <div className="max-w-[500px] flex flex-col gap-3">
                <h5 className="text-2xl font-semibold">Be the change</h5>
                <h4 className="font-inter text-4xl font-extrabold text-blue-700">
                    Join The Journey
                </h4>
                <p className="font-medium text-gray-700 leading-7">
                    Jamiat is devoutly committed to building a strong and
                    developed Pakistan which is unimaginable without the trust
                    and the unflinching support of the students of Pakistan.
                    Join us and be part of the unprecedented transformation that
                    is changing the lives of all students society for better.
                    Together, let's build a strong student generation and
                    witness the rise of New Pakistan under the charismatic
                    leadership of CEO and founder Shakeel Ahmed
                </p>
            </div>
            <div className="lg:w-[50%] my-8 border-2 border-blue-700 rounded-3xl flex flex-col gap-4 p-[2vw] pt-6">
                <form
                    ref={formRef}
                    className="mx-auto mobile:px-10 w-full lg:px-0"
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="uppercase text-sm text-gray-600 font-bold"
                        >
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400"
                            type="text"
                            placeholder="Enter your Name"
                            required
                        />
                    </div>
                    <div className="mt-2">
                        <label
                            htmlFor="email"
                            className="uppercase text-sm text-gray-600 font-bold"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400"
                            type="email"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                    <div className="mt-2">
                        <label
                            htmlFor="phone"
                            className="uppercase text-sm text-gray-600 font-bold"
                        >
                            Phone Number
                        </label>
                        <input
                            required
                            id="phone"
                            name="phone"
                            className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400"
                            type="tel"
                            placeholder="Enter your Phone Number"
                        />
                    </div>
                    <div className="mt-2">
                        <label
                            htmlFor="address"
                            className="uppercase text-sm text-gray-600 font-bold"
                        >
                            Address
                        </label>
                        <input
                            required
                            id="address"
                            name="address"
                            className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400"
                            type="text"
                            placeholder="Enter your Address"
                        />
                    </div>
                    <div className="mt-2">
                        <label
                            htmlFor="Education"
                            className="uppercase text-sm text-gray-600 font-bold"
                        >
                            Education
                        </label>
                        <input
                            type="text"
                            id="Education"
                            name="Education"
                            className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your Education"
                            required
                        ></input>
                    </div>
                    <div className="flex gap-x-3 gap-y-7 my-8 flex-wrap">
                        <div className="relative">
                            <input
                                type="radio"
                                id="member"
                                name="choice"
                                value={"member"}
                                className="peer hidden"
                                required
                            />
                            <label
                                className="border-2 pr-6 pl-4 py-3 text-sm rounded-md cursor-pointer peer-checked:font-semibold peer-checked:bg-sky-200 peer-checked:border-sky-200"
                                htmlFor="member"
                            >
                                Join as Member
                            </label>
                            <div className="absolute -top-1 left-[85%] z-50">
                                <Image
                                    alt="photo"
                                    className="peer cursor-help"
                                    src={"/info-button.svg"}
                                    width={16}
                                    height={64}
                                />
                                <p className="peer-hover:block mt-1 -ml-32 hidden bg-blue-700 text-xs w-40 px-3 py-3 rounded-md text-white">
                                    A member's role is to be a part of
                                    organization.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <input
                                type="radio"
                                id="volunteer"
                                name="choice"
                                value={"volunteer"}
                                className="peer hidden"
                            />
                            <label
                                className="border-2 pr-6 pl-4 py-3 text-sm rounded-md cursor-pointer peer-checked:font-semibold peer-checked:bg-sky-200 peer-checked:border-sky-200"
                                htmlFor="volunteer"
                            >
                                Join as Volunteer
                            </label>
                            <div className="absolute -top-1 left-[85%] z-50">
                                <Image
                                    alt="photo"
                                    className="peer cursor-help"
                                    src={"/info-button.svg"}
                                    width={16}
                                    height={64}
                                />
                                <p className="peer-hover:block mt-1 -ml-32 hidden bg-blue-700 text-xs w-40 px-3 py-3 rounded-md text-white">
                                    A volunteer's role is to be a contributer to
                                    the organization.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button
                            onClick={handleSubmission}
                            className="uppercase text-sm font-bold tracking-wide bg-red-600 hover:bg-red-700 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
