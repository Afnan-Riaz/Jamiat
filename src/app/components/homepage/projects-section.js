"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";

const getData = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/blogs/projects`).then(
        (response) => response.json()
    );
    return data;
};

export default function Projects() {
    const [swiperLoaded, setSwiperLoaded] = useState(false);
    const [projects,setProjects]=useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            setProjects(data);
            setSwiperLoaded(true);
        }
        fetchData();
    }, []);
    return (
        <div
            id="projects-section"
            className="w-full h-[48vw] min-h-[600px] relative"
        >
            {swiperLoaded&&<Swiper
                navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                }}
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                loop={true}
                modules={[Navigation]}
                slidesPerView={1}
                className="mySwiper h-full"
                spaceBetween={-1}
            >
                {projects.map((project)=>(<SwiperSlide key={project._id} className="!flex flex-col relative justify-end items-center text-white">
                    <Image src={`${project.image}`} width={400} height={400} className="absolute inset-0 w-full h-full -z-10"/>
                    <h4 className="text-xl text-center font-semibold">
                        {project.title}
                    </h4>
                    <Link
                        href={`/`}
                        className="text-base hover:text-gray-300 hover:scale-105 transition-all my-10 border-2 px-5 py-2 rounded-md"
                    >
                        Read More
                    </Link>
                </SwiperSlide>))}
                <div className="prev h-10 w-10 flex justify-center items-center cursor-pointer rounded-full bg-opacity-75 bg-gray-600 absolute top-[45%] left-2 mobile:left-12 rotate-90 z-10">
                    <Image
                        alt="photo"
                        src={"/cheveron.svg"}
                        height={16}
                        width={16}
                    />
                </div>
                <div className="next h-10 w-10 flex justify-center items-center cursor-pointer rounded-full bg-opacity-75 bg-gray-600 absolute top-[45%] right-2 mobile:right-12 -rotate-90 z-10">
                    <Image
                        alt="photo"
                        src={"/cheveron.svg"}
                        height={16}
                        width={16}
                    />
                </div>
            </Swiper>}
            <div className="flex absolute text-white bottom-8 left-8 flex-col z-10">
                <p>07</p>
                <div className="h-px w-full bg-sky-400"></div>
                <p>07</p>
            </div>
        </div>
    );
}
