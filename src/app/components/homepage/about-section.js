"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Pagination, EffectCards } from "swiper/modules";
import Link from "next/link";
export default function About() {
    return (
        <div className="w-full relative bg-about-bg bg-cover bg-no-repeat z-0">
            <div className="w-fit grid laptop12:grid-cols-[350px_350px_435px] justify-items-center md:grid-cols-2 grid-cols-1 text-white laptop12:grid-rows-2 gap-x-5 gap-y-2 mx-auto pt-8 max-md:pb-20 md:pt-20 pb-5">
                <Link href="#">
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
                <Link href="#">
                    <div className="w-[350px] h-[285px] hover:brightness-90 transition-[filter] duration-300 p-7 bg-card4-bg bg-center bg-no-repeat flex flex-col justify-between">
                        <div className="space-y-3">
                            <h3 className="text-lg font-medium leading-3">
                                Leadership
                            </h3>
                            <div className="h-px w-full bg-white"></div>
                            <p className="text-sm font-light">
                                Vivamus suscipit tortor eget felis porttitor
                                volutpat. Mauris blandit aliquet elit, egetr a.
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
                <Link className="row-span-1 laptop12:row-span-2 col-span-1 md:col-span-2 laptop12:col-span-1 justify-self-center" href={"#"}>
                    <div className="mobile:w-[435px] w-[350px] rounded-xl hover:brightness-90 transition-[filter] duration-300 bg-long-card-bg bg-center bg-no-repeat">
                        <div className="p-7 space-y-3">
                            <h3 className="text-lg font-medium leading-3">
                                Humqadam Magazine
                            </h3>
                            <div className="h-px w-full bg-white"></div>
                        </div>
                        <Swiper
                            style={{
                                "--swiper-pagination-bottom": "20px",
                                "--swiper-pagination-color": "#ffffff",
                                "--swiper-pagination-bullet-inactive-color":
                                    "#919191",
                                "--swiper-pagination-bullet-inactive-opacity":
                                    "1",
                                "--swiper-pagination-bullet-size": "12px",
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
                                <Image
                                    alt="photo"
                                    className="mobile:w-[350px] w-[300px]"
                                    src={"/magazine.png"}
                                    height={2000}
                                    width={2000}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    alt="photo"
                                    className="mobile:w-[350px] w-[300px]"
                                    src={"/magazine.png"}
                                    height={2000}
                                    width={2000}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    alt="photo"
                                    className="mobile:w-[350px] w-[300px]"
                                    src={"/magazine.png"}
                                    height={2000}
                                    width={2000}
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Link>
                <Link href={"#"}>
                    <div className="w-[350px] h-[285px] hover:brightness-90 transition-[filter] duration-300 p-7 bg-card2-bg bg-center bg-no-repeat flex flex-col justify-between">
                        <div className="space-y-3">
                            <h3 className="text-lg font-medium leading-3">
                                What is Jamiat?
                            </h3>
                            <div className="h-px w-full bg-white"></div>
                            <p className="text-sm font-light">
                                Vivamus suscipit tortor eget felis porttitor
                                volutpat. Mauris blandit aliquet elit, eget
                                tincidunt nibh pulvinar a.Vivamus
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
                <Link href={"#"}>
                    <div className="w-[350px] h-[285px] hover:brightness-90 transition-[filter] duration-300 p-7 bg-card3-bg bg-center bg-no-repeat flex flex-col justify-between">
                        <div className="space-y-3">
                            <h3 className="text-lg font-medium leading-3">
                                Blogs
                            </h3>
                            <div className="h-px w-full bg-white"></div>
                            <p className="text-sm font-light">
                                Vivamus suscipit tortor eget felis porttitor
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
