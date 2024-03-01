"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";

const getData = async () => {
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/media/images/landing`
    ).then((response) => response.json());
    return data;
};

export default function Landing() {
    const [swiperLoaded, setSwiperLoaded] = useState(false);
    const [images, setImages] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            setImages(data);
            setSwiperLoaded(true)
        }
        fetchData();
    }, []);

    return (
        <div
            id="landing-section"
            className={`w-full relative -mt-24 z-0 min-h-[450px] sm:h-[600px] lg:h-[700px] 2xl:[800]`}
        >
            {swiperLoaded ? (
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#0ea5e9",
                        "--swiper-pagination-bullet-inactive-color": "#919191",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "16px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    slidesPerView={1}
                    spaceBetween={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="w-full h-full text-lg overflow-hidden"
                >
                    {images.map((image) => (
                        <SwiperSlide key={image._id}>
                            <Image
                                className="object-cover object-center"
                                alt="photo"
                                src={`/backgrounds${image.link}`}
                                fill
                                loading="eager"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <Image
                    src={"/backgrounds/landing-bg.webp"}
                    className="object-cover object-center"
                    alt="photo"
                    fill
                    loading="eager"
                />
            )}
            <div className="flex absolute text-white bottom-8 left-8 flex-col z-10">
                <p>01</p>
                <div className="h-px w-full bg-sky-400"></div>
                <p>07</p>
            </div>
        </div>
    );
}
