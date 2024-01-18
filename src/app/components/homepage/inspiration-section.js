"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState, useEffect } from "react";


const getData = async (slug) => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/profiles/inspirations`).then(
        (response) => response.json()
    );
    return data;
}
export default function Inspiration() {
    const [photo,setPhoto]=useState(0);
    const [swiperLoaded, setSwiperLoaded] = useState(false);
    const [inspirations,setInspirations]=useState([]);
    const changePhoto=(index)=>{
        if(index!=null){
            setPhoto(index);
        }
    }
    const shorten=(content)=>{
        const words = content.split(' ');
        const first20 = words.slice(0, 20).join(' ');
        return first20;
    }
    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            setInspirations(data);
            setSwiperLoaded(true);
        }
        fetchData();
    }, []);
    const pagination = {
        clickable: true,
        bulletClass: "swiper-pagination-bullet !border-2 !border-white",
        bulletActiveClass: "swiper-pagination-bullet-active !border-opacity-0",
    };

    return (
        <div id="inspiration-section" className="w-full md:h-[48vw] relative bg-cover bg-inspiration-bg text-white flex md:flex-row flex-col items-center">
            {swiperLoaded&&<Swiper
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
                {inspirations.map((inspiration)=>(<SwiperSlide key={inspiration._id} className="w-full h-full !flex pb-10 justify-center flex-col my-10 md:my-0 gap-y-1 lg:gap-y-4 pl-2 mobile:pl-[10vw]">
                    <p className="text-2xl font-bold font-inter capitalize">
                        Our
                    </p>
                    <h2 className="outlined-text font-black text-4xl lg:text-5xl">
                        Inspiration
                    </h2>
                    <p className="text-lg font-semibold">
                        {inspiration.designation}
                    </p>
                    <p className="text-xl lg:text-2xl font-bold font-inter">
                        {inspiration.name}
                    </p>
                    <p className="text-sm lg:text-base font-normal">{inspiration.dob} - {inspiration.dod}</p>
                    <p className="max-w-[400px] w-full lg:text-base text-sm font-normal leading-normal">
                        {shorten(inspiration.content)}
                    </p>
                    <Link
                        className="text-sky-400 w-fit font-medium underline hover:text-sky-500 transition-colors group"
                        href={`/inspirations/${inspiration.slug}`}
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
                </SwiperSlide>))}
            </Swiper>}
            {swiperLoaded&&
                <Image
                    alt="photo"
                    className="md:w-1/2 w-3/5 md:rounded-none rounded-lg md:mb-0 mb-6 object-cover"
                    src={inspirations[photo].image}
                    height={2000}
                    width={2000}
                />
            }
            <div className="flex absolute text-white bottom-8 left-8 flex-col z-10">
                <p>04</p>
                <div className="h-px w-full bg-sky-400"></div>
                <p>07</p>
            </div>
        </div>
    );
}
