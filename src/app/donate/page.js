"use client";

import { useRef, useState } from "react";
import Modal from "../components/modal";
import Image from "next/image";

export default function Join() {
    const [amount, setAmount] = useState();
    const [custom, setCustom] = useState(false);
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
                        Make A Donation
                    </h1>
                    <p className=" text-lg mb-8 lg:ml-16">
                        Donate us and be a part of our journey
                    </p>
                    <form
                        ref={formRef}
                        className="lg:w-2/3 mx-auto mobile:px-10 lg:px-0 mb-14"
                    >
                        <p className="text-lg font-semibold mb-5">
                            Choose an amount
                        </p>
                        <div className="flex gap-4 flex-wrap gap-y-10 mb-8">
                            <div>
                                <input
                                    required
                                    className="hidden peer"
                                    type="radio"
                                    id="100"
                                    name="amount"
                                    value={100}
                                    onChange={() => {
                                        setCustom(false);
                                        setAmount(100);
                                    }}
                                />
                                <label
                                    className="border-2 px-4 py-3 rounded-md peer-checked:font-semibold cursor-pointer peer-checked:bg-sky-200"
                                    htmlFor="100"
                                >
                                    100 RS
                                </label>
                            </div>
                            <div>
                                <input
                                    className="hidden peer"
                                    type="radio"
                                    id="500"
                                    name="amount"
                                    value={500}
                                    onChange={() => {
                                        setCustom(false);
                                        setAmount(500);
                                    }}
                                />
                                <label
                                    className="border-2 px-4 py-3 rounded-md peer-checked:font-semibold cursor-pointer peer-checked:bg-sky-200"
                                    htmlFor="500"
                                >
                                    500 RS
                                </label>
                            </div>
                            <div>
                                <input
                                    className="hidden peer"
                                    type="radio"
                                    id="1000"
                                    name="amount"
                                    value={1000}
                                    onChange={() => {
                                        setCustom(false);
                                        setAmount(1000);
                                    }}
                                />
                                <label
                                    className="border-2 px-4 py-3 rounded-md peer-checked:font-semibold cursor-pointer peer-checked:bg-sky-200"
                                    htmlFor="1000"
                                >
                                    1000 RS
                                </label>
                            </div>
                            <div>
                                <input
                                    className="hidden peer"
                                    type="radio"
                                    id="custom"
                                    name="amount"
                                    value={amount}
                                    onChange={() => {
                                        setCustom(true);
                                        setAmount("");
                                    }}
                                />
                                <label
                                    className="border-2 px-4 py-3 rounded-md peer-checked:font-semibold cursor-pointer peer-checked:bg-sky-200"
                                    htmlFor="custom"
                                >
                                    Custom
                                </label>
                            </div>
                        </div>
                        <p className="text-lg font-semibold mb-2">
                            Make custom amount
                        </p>
                        <input
                            required
                            disabled={!custom}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="px-5 w-[90%] py-3 border-2 rounded-md mb-5"
                            type="number"
                            name="custom"
                            id="amount"
                            placeholder="RS 100-10000000"
                        />
                        <p className="text-lg font-semibold mb-5">
                            Make it monthly!
                        </p>
                        <div className="flex gap-4 gap-y-8 mb-5 flex-wrap">
                            <div>
                                <input
                                    type="radio"
                                    id="yes"
                                    name="choice"
                                    value={"yes"}
                                    className="peer hidden"
                                    required
                                />
                                <label
                                    className="border-2 cursor-pointer px-7 py-3 text-sm rounded-md peer-checked:font-semibold peer-checked:bg-sky-200 peer-checked:border-sky-200"
                                    htmlFor="yes"
                                >
                                    Yes, count me in
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="no"
                                    name="choice"
                                    value={"no"}
                                    className="peer hidden"
                                />
                                <label
                                    className="border-2 cursor-pointer px-7 py-3 text-sm rounded-md peer-checked:font-semibold peer-checked:bg-sky-200 peer-checked:border-sky-200"
                                    htmlFor="no"
                                >
                                    No, donate once
                                </label>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-8">
                            Start a monthly donation today to invest in the
                            future of our party
                        </p>
                        <button
                            onClick={handleSubmission}
                            className="bg-red-600 hover:bg-red-700 transition-colors font-inter w-fit px-4 py-3 rounded-md mx-auto text-white"
                        >
                            Donate now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
