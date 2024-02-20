"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Pagination, EffectCards } from "swiper/modules";
import Link from "next/link";
import { useState,useEffect } from "react";

const getData = async () => {
    const magazines = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/media/magazines`).then(
        (response) => response.json()
    );
    return magazines;
};

export default function About() {
    const [swiperLoaded, setSwiperLoaded] = useState(false);
    const [magazines,setMagazines]=useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            setMagazines(data);
            setSwiperLoaded(true);
        }
        fetchData();
    }, []);
    return (
        <div id="about-section" className="w-full relative bg-about-bg bg-cover overflow-x-hidden bg-no-repeat z-0">
            <div className="w-fit grid laptop12:grid-cols-[350px_350px_435px] justify-items-center md:grid-cols-2 grid-cols-1 text-white laptop12:grid-rows-2 gap-x-5 gap-y-2 mx-auto pt-8 max-md:pb-20 md:pt-20 pb-5">
                <Link href="/releases">
                    <div className="w-[350px] h-[285px] hover:brightness-90 transition-[filter] duration-300 p-7 bg-card1-bg bg-center bg-no-repeat flex flex-col justify-between">
                        <div className="space-y-3">
                            <h3 className="text-lg font-medium leading-3">
                                Press Release
                            </h3>
                            <div className="h-px w-full bg-white"></div>
                            <p className="text-sm font-light">
                                Party's official narative
                            </p>
                        </div>
                        <span className="text-sm">
                            Read more
                            <Image
                                alt="photo"
                                className="inline-block ml-2"
                                src={"/arrow.svg"}
                                width={30}
                                height={30}
                            />
                        </span>
                    </div>
                </Link>
                <Link href="/about/team">
                    <div className="w-[350px] h-[285px] hover:brightness-90 transition-[filter] duration-300 p-7 bg-card4-bg bg-center bg-no-repeat flex flex-col justify-between">
                        <div className="space-y-3">
                            <h3 className="text-lg font-medium leading-3">
                                Leadership
                            </h3>
                            <div className="h-px w-full bg-white"></div>
                            <p className="text-sm font-light">
                            Empowering through faith, Islami Jamiat Talaba fosters visionary leadership, nurturing minds with Islamic principles for excellence.
                            </p>
                        </div>
                        <span className="text-sm">
                            View leaders
                            <Image
                                alt="photo"
                                className="inline-block ml-2"
                                src={"/arrow.svg"}
                                width={30}
                                height={30}
                            />
                        </span>
                    </div>
                </Link>
                <div className="row-span-1 laptop12:row-span-2 col-span-1 md:col-span-2 laptop12:col-span-1 justify-self-center">
                    <div className="mobile:w-[435px] w-[350px] rounded-xl hover:brightness-90 transition-[filter] duration-300 bg-long-card-bg bg-center bg-no-repeat">
                        <div className="p-7 space-y-3">
                            <h3 className="text-lg font-medium leading-3">
                                Humqadam Magazine
                            </h3>
                            <div className="h-px w-full bg-white"></div>
                        </div>
                        {swiperLoaded&&<Swiper
                            style={{
                                "--swiper-pagination-bottom": "20px",
                                "--swiper-pagination-color": "#ffffff",
                                "--swiper-pagination-bullet-inactive-color":
                                    "#919191",
                                "--swiper-pagination-bullet-inactive-opacity":
                                    "1",
                                "--swiper-pagination-bullet-size": "18px",
                                "--swiper-pagination-bullet-horizontal-gap":
                                    "6px",
                            }}
                            effect={"cards"}
                            initialSlide={1}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[EffectCards, Pagination]}
                            className="mobile:h-[500px] h-[450px] mobile:!pl-[10%] !pl-[8%]"
                        >
                            <SwiperSlide>
                                <Link href={magazines[1].link}>
                                <Image
                                    alt="photo"
                                    className="mobile:w-[350px] w-[300px] rounded-2xl"
                                    src={magazines[1].description}
                                    height={450}
                                    width={350}
                                />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={magazines[0].link}>
                                <Image
                                    alt="photo"
                                    className="mobile:w-[350px] w-[300px] rounded-2xl"
                                    src={magazines[0].description}
                                    height={450}
                                    width={350}
                                />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={magazines[2].link}>
                                <Image
                                    alt="photo"
                                    className="mobile:w-[350px] w-[300px] rounded-2xl"
                                    src={magazines[2].description}
                                    height={450}
                                    width={350}
                                />
                                </Link>
                            </SwiperSlide>
                        </Swiper>}
                    </div>
                </div>
                <Link href={"/about/islami-jamiat-talaba"}>
                    <div className="w-[350px] h-[285px] hover:brightness-90 transition-[filter] duration-300 p-7 bg-card2-bg bg-center bg-no-repeat flex flex-col justify-between">
                        <div className="space-y-3">
                            <h3 className="text-lg font-medium leading-3">
                                What is Jamiat?
                            </h3>
                            <div className="h-px w-full bg-white"></div>
                            <p className="text-sm font-light">
                            An Islamic Organization with a vision to seek the pleasure of Allah (SWT) by ordering human life in accordance with the principles of Allah (SWT) and His Messenger Muhammad (PBUH)
                            </p>
                        </div>
                        <span className="text-sm">
                            Read more
                            <Image
                                alt="photo"
                                className="inline-block ml-2"
                                src={"/arrow.svg"}
                                width={30}
                                height={30}
                            />
                        </span>
                    </div>
                </Link>
                <Link href={"/blogs"}>
                    <div className="w-[350px] h-[285px] hover:brightness-90 transition-[filter] duration-300 p-7 bg-card3-bg bg-center bg-no-repeat flex flex-col justify-between">
                        <div className="space-y-3">
                            <h3 className="text-lg font-medium leading-3">
                                Blogs
                            </h3>
                            <div className="h-px w-full bg-white"></div>
                            <p className="text-sm font-light">
                                Our blog posts
                            </p>
                        </div>
                        <span className="text-sm">
                            View all blogs
                            <Image
                                alt="photo"
                                className="inline-block ml-2"
                                src={"/arrow.svg"}
                                width={30}
                                height={30}
                            />
                        </span>
                    </div>
                </Link>
            </div>
            <div className="flex absolute text-black bottom-8 left-8 flex-col z-10">
                <p>02</p>
                <div className="h-px w-full bg-sky-500"></div>
                <p>07</p>
            </div>
        </div>
    );
}
