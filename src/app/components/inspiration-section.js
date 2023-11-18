"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Inspiration() {
    const pagination = {
        clickable: true,
        bulletClass: "swiper-pagination-bullet !border-2 !border-white",
        bulletActiveClass: "swiper-pagination-bullet-active !border-0",
    };

    return (
        <div className="w-full h-screen relative bg-cover bg-inspiration-bg text-white flex">
            <Swiper
                loop={true}
                style={{
                    "--swiper-pagination-color": "rgb(56 189 248)",
                    "--swiper-pagination-bottom": "120px",
                    "--swiper-pagination-bullet-size": "13px",
                    "--swiper-pagination-bullet-inactive-color": "transparent",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                }}
                className="w-1/2 h-full"
                pagination={pagination}
                modules={[Pagination]}
            >
                <SwiperSlide className="w-full h-full !flex flex-col justify-center gap-y-2 pl-32">
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
                    <p className="w-[400px] text-base font-normal leading-7">
                        Vivamus suscipit tortor eget felis porttitor volutpat.
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a.
                    </p>
                    <Link
                        className="text-sky-400 font-medium underline"
                        href="#"
                    >
                        Read more
                        <Image
                            alt="photo"
                            className="ml-4 inline"
                            src={"/arrow-blue.svg"}
                            height={12}
                            width={25}
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="w-full h-full !flex flex-col justify-center gap-y-2 pl-32">
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
                    <p className="w-[400px] text-base font-normal leading-7">
                        Vivamus suscipit tortor eget felis porttitor volutpat.
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a.
                    </p>
                    <Link
                        className="text-sky-400 font-medium underline"
                        href="#"
                    >
                        Read more
                        <Image
                            alt="photo"
                            className="ml-4 inline"
                            src={"/arrow-blue.svg"}
                            height={12}
                            width={25}
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="w-full h-full !flex flex-col justify-center gap-y-2 pl-32">
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
                    <p className="w-[400px] text-base font-normal leading-7">
                        Vivamus suscipit tortor eget felis porttitor volutpat.
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a.
                    </p>
                    <Link
                        className="text-sky-400 font-medium underline"
                        href="#"
                    >
                        Read more
                        <Image
                            alt="photo"
                            className="ml-4 inline"
                            src={"/arrow-blue.svg"}
                            height={12}
                            width={25}
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="w-full h-full !flex flex-col justify-center gap-y-2 pl-32">
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
                    <p className="w-[400px] text-base font-normal leading-7">
                        Vivamus suscipit tortor eget felis porttitor volutpat.
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a.
                    </p>
                    <Link
                        className="text-sky-400 font-medium underline"
                        href="#"
                    >
                        Read more
                        <Image
                            alt="photo"
                            className="ml-4 inline"
                            src={"/arrow-blue.svg"}
                            height={12}
                            width={25}
                        />
                    </Link>
                </SwiperSlide>
            </Swiper>
            <Image
                alt="photo"
                className="w-1/2 object-cover"
                src={"/inspiration-photo.png"}
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
