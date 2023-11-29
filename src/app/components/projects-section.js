"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function Projects() {
    return (
        <div className="w-full h-screen relative">
            <Swiper
                navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                }}
                loop={true}
                modules={[Navigation]}
                slidesPerView={4}
                className="mySwiper h-full"
                spaceBetween={-1}
            >
                <SwiperSlide className="!flex flex-col justify-end items-center text-white bg-cover bg-project-afia-bg">
                    <h4 className="text-xl font-semibold">Release Dr.Aafia</h4>
                    <button className="text-base hover:text-gray-300 hover:scale-105 transition-all my-10 border-2 px-5 py-2 rounded-md">
                        Read More
                    </button>
                </SwiperSlide>
                <SwiperSlide className="!flex flex-col justify-end items-center text-white bg-cover bg-project-farmer-bg">
                    <h4 className="text-xl font-semibold">Farmer Support</h4>
                    <button className="text-base hover:text-gray-300 hover:scale-105 transition-all my-10 border-2 px-5 py-2 rounded-md">
                        Read More
                    </button>
                </SwiperSlide>
                <SwiperSlide className="!flex flex-col justify-end items-center text-white bg-cover bg-project-scholarship-bg">
                    <h4 className="text-xl font-semibold">
                        Scholarship Programs
                    </h4>
                    <button className="text-base hover:text-gray-300 hover:scale-105 transition-all my-10 border-2 px-5 py-2 rounded-md">
                        Read More
                    </button>
                </SwiperSlide>
                <SwiperSlide className="!flex flex-col justify-end items-center text-white bg-cover bg-project-environment-bg">
                    <h4 className="text-xl font-semibold">Environment</h4>
                    <button className="text-base hover:text-gray-300 hover:scale-105 transition-all my-10 border-2 px-5 py-2 rounded-md">
                        Read More
                    </button>
                </SwiperSlide>
                <SwiperSlide className="!flex flex-col justify-end items-center text-white bg-cover bg-project-afia-bg">
                    <h4 className="text-xl font-semibold">Release Dr.Aafia</h4>
                    <button className="text-base hover:text-gray-300 hover:scale-105 transition-all my-10 border-2 px-5 py-2 rounded-md">
                        Read More
                    </button>
                </SwiperSlide>
                <SwiperSlide className="!flex flex-col justify-end items-center text-white bg-cover bg-project-farmer-bg">
                    <h4 className="text-xl font-semibold">Farmer Support</h4>
                    <button className="text-base hover:text-gray-300 hover:scale-105 transition-all my-10 border-2 px-5 py-2 rounded-md">
                        Read More
                    </button>
                </SwiperSlide>
                <div className="prev h-10 w-10 flex justify-center items-center cursor-pointer rounded-full bg-opacity-70 bg-gray-800 absolute top-[45%] left-20 rotate-90 z-10">
                    <Image
                        alt="photo"
                        src={"/cheveron.svg"}
                        height={16}
                        width={16}
                    />
                </div>
                <div className="next h-10 w-10 flex justify-center items-center cursor-pointer rounded-full bg-opacity-70 bg-gray-800 absolute top-[45%] right-20 -rotate-90 z-10">
                    <Image
                        alt="photo"
                        src={"/cheveron.svg"}
                        height={16}
                        width={16}
                    />
                </div>
            </Swiper>
            <div className="flex absolute text-white bottom-8 left-8 flex-col z-10">
                <p>07</p>
                <div className="h-px w-full bg-sky-400"></div>
                <p>07</p>
            </div>
        </div>
    );
}
