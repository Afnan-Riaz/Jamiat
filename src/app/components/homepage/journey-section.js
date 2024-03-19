"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";
const getData = async () => {
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/blogs/journey`
    ).then((response) => response.json());
    return data;
};

export default function Journey() {
    const [journey, setJourney] = useState([]);
    const [swiperLoaded, setSwiperLoaded] = useState(false);
    const pagination = {
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
        bulletClass:
            "swiper-pagination-bullet text-sky-400 !mx-1 sm:!mx-7 text-2xl font-bold",
        bulletActiveClass: "swiper-pagination-bullet-active",
        renderBullet: function (index, className) {
            const year = journey[index].title;
            return `<span class="${className}">${year}'s</span>`;
        },
    };

    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            setJourney(data);
            setSwiperLoaded(true);
        }
        fetchData();
    }, []);
    return (
        <div id="journey-section" className="w-full md:h-[680px] relative">
            {swiperLoaded && (
                <Swiper
                    style={{
                        "--swiper-pagination-color": "none",
                        "--swiper-pagination-bullet-inactive-color": "none",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "16px",
                        "--swiper-pagination-bottom": "12px",
                        "--swiper-pagination-bullet-width": "auto",
                        "--swiper-pagination-bullet-height": "auto",
                    }}
                    navigation={{
                        prevEl: ".prev",
                        nextEl: ".next",
                    }}
                    initialSlide={6}
                    loop={true}
                    pagination={pagination}
                    modules={[Pagination, Navigation]}
                    className="mySwiper max-h-full select-none"
                >
                    {journey.map((slide) => (
                        <SwiperSlide
                            key={slide._id}
                            className="swiper-slide pl-1 mobile:pl-[9vw] pr-1 mobile:pr-[4vw] min-h-[450px] h-full !flex justify-around items-center py-20 bg-journey-bg bg-cover"
                        >
                            <div className="h-fit w-[536px] md:max-w-[50%]">
                                <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                                    Our Journey
                                </h2>
                                <div className="w-full h-[450px] border-sky-500 border-2 rounded-2xl  bg-white bg-opacity-10 shadow">
                                    <div className="rounded-white-scrollbar h-[430px] pt-[3vw] text-white overflow-y-scroll">
                                        <h4 className="text-3xl ml-8 font-inter text-center md:text-left font-semibold mb-3">
                                            {slide.title}'s
                                        </h4>
                                        <p
                                            className="revert-tailwind"
                                            style={{
                                                color: "white",
                                                fontSize: "small",
                                            }}
                                            key={slide._id}
                                            dangerouslySetInnerHTML={{
                                                __html: slide.content,
                                            }}
                                        ></p>
                                    </div>
                                </div>
                            </div>
                            <Image
                                className="lg:h-96 md:h-72 w-fit md:block hidden object-contain"
                                alt="photo"
                                src={"/images/jamiat-image.png"}
                                height={680}
                                width={680}
                            />
                        </SwiperSlide>
                    ))}
                    <div className="prev hidden md:block h-6 w-6 border-2 cursor-pointer rounded-full border-sky-500 absolute bottom-4 left-[10vw] rotate-180 z-10">
                        <Image
                            alt="photo"
                            src={"/icons/cheveron-right.svg"}
                            height={24}
                            width={24}
                        />
                    </div>
                    <div className="next hidden md:block h-6 w-6 border-2 cursor-pointer rounded-full border-sky-500 absolute bottom-4 right-[10vw] z-10">
                        <Image
                            alt="photo"
                            src={"/icons/cheveron-right.svg"}
                            height={24}
                            width={24}
                        />
                    </div>
                </Swiper>
            )}
            <div className="flex absolute text-white bottom-8 left-8 flex-col z-10">
                <p>03</p>
                <div className="h-px w-full bg-sky-400"></div>
                <p>07</p>
            </div>
        </div>
    );
}
