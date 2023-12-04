"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState } from "react";

export default function Inspiration() {
    const [photo,setPhoto]=useState(1);
    const changePhoto=(index)=>{
        if(index!=null){
            setPhoto(index+1);
        }
    }
    const pagination = {
        clickable: true,
        bulletClass: "swiper-pagination-bullet !border-2 !border-white",
        bulletActiveClass: "swiper-pagination-bullet-active !border-opacity-0",
    };

    return (
        <div id="inspiration-section" className="w-full md:h-[48vw] relative bg-cover bg-inspiration-bg text-white flex md:flex-row flex-col items-center">
            <Swiper
                loop={true}
                style={{
                    "--swiper-pagination-color": "rgb(56 189 248)",
                    "--swiper-pagination-bottom": "3vw",
                    "--swiper-pagination-bullet-size": "13px",
                    "--swiper-pagination-bullet-inactive-color": "transparent",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                }}
                onSlideChange={(swiper)=>changePhoto(swiper.realIndex)}
                className="md:w-1/2 w-full h-1/2 md:h-full select-none"
                pagination={pagination}
                modules={[Pagination]}
            >
                <SwiperSlide className="w-full h-full !flex justify-center flex-col my-10 md:my-0 gap-y-2 pl-2 mobile:pl-[10vw]">
                    <p className="text-2xl font-bold font-inter capitalize">
                        Our
                    </p>
                    <h2 className="outlined-text font-black text-5xl">
                        Inspiration
                    </h2>
                    <p className="text-lg font-semibold">
                        Bani Islami Jamiat-e-Talba
                    </p>
                    <p className="text-2xl font-bold font-inter">
                        Syed Abu-Al-Ala Modoodi
                    </p>
                    <p className="text-base font-normal leading-7">1903-1979</p>
                    <p className="max-w-[400px] w-full text-base font-normal leading-7">
                        Vivamus suscipit tortor eget felis porttitor volutpat.
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a.
                    </p>
                    <Link
                        className="text-sky-400 w-fit font-medium underline hover:text-sky-500 transition-colors group"
                        href="#"
                    >
                        Read more
                        <Image
                            alt="photo"
                            className="ml-2 inline group-hover:translate-x-4 transition-transform"
                            src={"/arrow-blue.svg"}
                            height={12}
                            width={25}
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="w-full h-full !flex flex-col justify-center my-10 md:my-0 gap-y-2 pl-2 mobile:pl-[10vw]">
                    <p className="text-2xl font-bold font-inter capitalize">
                        Our
                    </p>
                    <h2 className="outlined-text font-black text-5xl">
                        Inspiration
                    </h2>
                    <p className="text-lg font-semibold">
                        Bani Islami Jamiat-e-Talba
                    </p>
                    <p className="text-2xl font-bold font-inter">
                        Syed Abu-Al-Ala Modoodi
                    </p>
                    <p className="text-base font-normal leading-7">1903-1979</p>
                    <p className="max-w-[400px] w-full text-base font-normal leading-7">
                        Vivamus suscipit tortor eget felis porttitor volutpat.
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a.
                    </p>
                    <Link
                        className="text-sky-400 w-fit font-medium underline hover:text-sky-500 transition-colors group"
                        href="#"
                    >
                        Read more
                        <Image
                            alt="photo"
                            className="ml-2 inline group-hover:translate-x-4 transition-transform"
                            src={"/arrow-blue.svg"}
                            height={12}
                            width={25}
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="w-full h-full !flex flex-col justify-center my-10 md:my-0 gap-y-2 pl-2 mobile:pl-[10vw]">
                    <p className="text-2xl font-bold font-inter capitalize">
                        Our
                    </p>
                    <h2 className="outlined-text font-black text-5xl">
                        Inspiration
                    </h2>
                    <p className="text-lg font-semibold">
                        Bani Islami Jamiat-e-Talba
                    </p>
                    <p className="text-2xl font-bold font-inter">
                        Syed Abu-Al-Ala Modoodi
                    </p>
                    <p className="text-base font-normal leading-7">1903-1979</p>
                    <p className="max-w-[400px] w-full text-base font-normal leading-7">
                        Vivamus suscipit tortor eget felis porttitor volutpat.
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a.
                    </p>
                    <Link
                        className="text-sky-400 w-fit font-medium underline hover:text-sky-500 transition-colors group"
                        href="#"
                    >
                        Read more
                        <Image
                            alt="photo"
                            className="ml-2 inline group-hover:translate-x-4 transition-transform"
                            src={"/arrow-blue.svg"}
                            height={12}
                            width={25}
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="w-full h-full !flex flex-col justify-center my-10 md:my-0 gap-y-2 pl-2 mobile:pl-[10vw]">
                    <p className="text-2xl font-bold font-inter capitalize">
                        Our
                    </p>
                    <h2 className="outlined-text font-black text-5xl">
                        Inspiration
                    </h2>
                    <p className="text-lg font-semibold">
                        Bani Islami Jamiat-e-Talba
                    </p>
                    <p className="text-2xl font-bold font-inter">
                        Syed Abu-Al-Ala Modoodi
                    </p>
                    <p className="text-base font-normal leading-7">1903-1979</p>
                    <p className="max-w-[400px] w-full text-base font-normal leading-7">
                        Vivamus suscipit tortor eget felis porttitor volutpat.
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a.
                    </p>
                    <Link
                        className="text-sky-400 w-fit font-medium underline hover:text-sky-500 transition-colors group"
                        href="#"
                    >
                        Read more
                        <Image
                            alt="photo"
                            className="ml-2 inline group-hover:translate-x-4 transition-transform"
                            src={"/arrow-blue.svg"}
                            height={12}
                            width={25}
                        />
                    </Link>
                </SwiperSlide>
            </Swiper>
            <Image
                alt="photo"
                className="md:w-1/2 w-3/5 md:rounded-none rounded-lg md:mb-0 mb-6 object-cover"
                src={`/inspiration-photo${photo}.png`}
                height={2000}
                width={2000}
            />
            <div className="flex absolute text-white bottom-8 left-8 flex-col z-10">
                <p>04</p>
                <div className="h-px w-full bg-sky-400"></div>
                <p>07</p>
            </div>
        </div>
    );
}
