"use client"

import { useRef, useState } from "react";
import Modal from "../components/modal";
import Image from "next/image";

export default function Contact() {
    const formRef=useRef(null);
    const [display,setDisplay]=useState(false);
    const handleSubmission=(e)=>{
        e.preventDefault();
        if(formRef.current.checkValidity()){
            setDisplay(true);
            formRef.current.reset();
        }
        else{
            formRef.current.reportValidity();
        }
    }
    return (
        <div>
            {display && (
                <Modal
                display={display}
                setDisplay={setDisplay}
                head={"Message Sent"}
                text={""}
                cancel={false}
                option={null}
                />
            )}

            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="flex">
            <div className="w-1/2 md:block hidden">
                <Image className="object-cover h-full" src={"/images/landing-bg.png"} alt="photo" width={1000} height={1000}/>
            </div>
            <div className="w-full md:w-1/2 px-4">
            <h1 className=" text-4xl font-semibold text-blue-700 mb-4 mt-14">
                Contact Us
            </h1>
            <p className=" text-lg mb-8">
                Reach us by filling relevant information.
            </p>
            <form ref={formRef} className="lg:w-2/3 mx-auto mobile:px-10 lg:px-0 mb-14">
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
                        Phone Number <span className="font-light text-xs">optional</span>
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400"
                        type="tel"
                        placeholder="Enter your Phone Number"
                    />
                </div>
                <div className="mt-8">
                    <label
                        htmlFor="message"
                        className="uppercase text-sm text-gray-600 font-bold"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your Message"
                        required
                    ></textarea>
                </div>
                <div className="mt-8">
                    <button
                        onClick={handleSubmission}
                        className="uppercase text-sm font-bold tracking-wide bg-red-600 hover:bg-red-700 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
            </form>
            </div>
        </div></div>
    );
}
