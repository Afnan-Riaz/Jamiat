"use client"
import { useState } from "react";
import Pakistan from "./map";
import Image from "next/image";
import Link from "next/link";
export default function Footprint() {
    const [text,setText]=useState({state:"the country",resident:"868",education:"532"});
    const handleChange=(t)=>{
        setText(t);
    }
    return (

        <div className="w-full h-screen pl-32 pr-20 pt-20 relative bg-footprint-bg bg-cover flex justify-between">
            <div className="flex flex-col h-full gap-y-3">
                <p className="text-2xl font-bold font-inter capitalize">Our</p>
                <h2 className="font-extrabold leading-none text-[52px] text-blue-800 font-inter">
                    Footprints
                </h2>
                <p className="w-[480px] text-3xl font-extrabold font-inter">Jamiat led 1400 units around {text.state}</p>
                <div className="w-[510px] h-28 border-2 border-black rounded-lg flex justify-evenly items-center my-5">
                    <div className="flex flex-col items-center">
                        <h6 className="text-lg font-semibold">Educational Units</h6>
                        <p className="text-4xl text-blue-800 font-extrabold font-inter">{text.education}</p>
                    </div>
                    <div className="h-5/6 w-px bg-black"></div>
                    <div className="flex flex-col items-center">
                        <h6 className="text-lg font-semibold">Residential Units</h6>
                        <p className="text-4xl text-blue-800 font-extrabold font-inter">{text.resident}</p>
                    </div>
                </div>
                <h4 className="w-[480px] text-2xl font-extrabold font-inter">Activities</h4>
                <div className="flex gap-4">
                    <Link className="hover:brightness-90 transition-[filter]" href={"#"}><Image src={"/activity1.png"} height={160} width={190} alt="photo"/></Link>
                    <Link className="hover:brightness-90 transition-[filter]" href={"#"}><Image src={"/activity2.png"} height={160} width={190} alt="photo"/></Link>
                    <Link className="hover:brightness-90 transition-[filter]" href={"#"}><Image src={"/activity3.png"} height={160} width={190} alt="photo"/></Link>
                </div>
                <Link
                        className="text-blue-800 hover:text-blue-600 w-fit font-medium underline"
                        href="#"
                    >
                        View All
                    </Link>

            </div>
            <div>
                <Pakistan text={text} onChange={handleChange}/>
            </div>
            <div className="flex absolute text-black bottom-8 left-8 flex-col z-10">
                <p>06</p>
                <div className="h-px w-full bg-sky-400"></div>
                <p>07</p>
            </div>
        </div>
    );
}
