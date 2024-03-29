"use client";

import { useRef, useState } from "react";
import Modal from "../components/modal";
import Image from "next/image";

export default function Join() {
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
        <div>
            {display && (
                <Modal
                    display={display}
                    setDisplay={setDisplay}
                    head={"Member Form Submitted"}
                    text={""}
                    cancel={false}
                    option={null}
                />
            )}

            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="flex">
                <div className="w-1/2 md:block hidden">
                    <Image
                        className="object-cover h-full"
                        src={"/images/landing-bg.png"}
                        width={1000}
                        height={1000}
                        alt="photo"
                    />
                </div>
                <div className="w-full md:w-1/2 px-4">
                    <h1 className=" text-4xl lg:ml-16 font-semibold text-blue-700 mb-4 mt-14">
                        Join Us
                    </h1>
                    <p className=" text-lg mb-8 lg:ml-16">
                        Become a member or volunteer by filling relevant
                        information.
                    </p>
                    <form
                        ref={formRef}
                        className="lg:w-2/3 mx-auto mobile:px-10 lg:px-0 mb-14"
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
                        <div className="mt-8">
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
                        <div className="mt-8">
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
                        <div className="mt-8">
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
                        <div className="mt-8">
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
                                        src={"/icons/info-button.svg"}
                                        width={16}
                                        height={64}
                                    />
                                    <p className="peer-hover:block mt-1 -ml-32 hidden bg-blue-700 text-xs w-40 px-3 py-3 rounded-md text-white">
                                        A member's role is to be a member.
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
                                        src={"/icons/info-button.svg"}
                                        width={16}
                                        height={64}
                                    />
                                    <p className="peer-hover:block mt-1 -ml-32 hidden bg-blue-700 text-xs w-40 px-3 py-3 rounded-md text-white">
                                        A volunteer's role is to be a volunteer.
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
        </div>
    );
}
