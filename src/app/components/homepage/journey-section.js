"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
export default function Journey() {
    const pagination = {
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
        bulletClass: "swiper-pagination-bullet text-sky-400 !mx-1 sm:!mx-7 text-2xl font-bold",
        bulletActiveClass: "swiper-pagination-bullet-active",
        renderBullet: function (index, className) {
            const year = 1940 + index * 10;
            return `<span class="${className}">${year}'s</span>`;
        },
    };
    return (
        <div id="journey-section" className="w-full max-h-[695px] relative">
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
                spa
                pagination={pagination}
                modules={[Pagination, Navigation]}
                className="mySwiper h-full select-none"
            >
                <SwiperSlide className="swiper-slide pl-1 mobile:pl-[9vw] pr-1 mobile:pr-[4vw] min-h-[450px] !flex justify-between items-start md:items-end py-[7vw] bg-journey-bg bg-cover">
                    <div className="h-fit w-[536px]">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full min-h-[300px] h-[30vw] border-sky-500 border-2 rounded-2xl max-md:mb-20 bg-white bg-opacity-10 shadow">
                            <div className="rounded-white-scrollbar min-h-[280px] h-[28vw] p-[3vw] text-white font-light text-sm overflow-y-scroll">
                                <h4 className="text-3xl font-inter font-semibold mb-3">
                                    1960's
                                </h4>
                                <p>
                                    -President and General Secretary IT Pakistan
                                    participated in the IIFSO's Executive
                                    Council meeting held in Istanbul, Turkey.
                                    -Annual Members Meetup was held at the
                                    Punjab University. -The COVID outbreak
                                    restricted the life around the globe,
                                    monthly meetings and activities were held
                                    online. -Countrywide campaign to highlight
                                    the educational issues. -The sad demise of
                                    the formers central Presidents Dr. Murad Ali
                                    Shah and Syed Munawar Hasan. -Annual Members
                                    Meetup was held at Dar e Arqam School,
                                    Mukabbir Campus, Gujrat. -A moment was
                                    launched for the restoration of PMDC and to
                                    highlight the MDCAT issues nationwide
                                    -Associate Member Kaleemullah Sahu, a
                                    student of BZ University Muthan was martyred
                                    by the Drug Dealer on highlighting the issue
                                    of supplying of drugs at the campus. -A
                                    nationwide campaign was launched with the
                                    slogan “Development through Education” to
                                    enlighten the importance of education and to
                                    highlight the educational issues. -Grand
                                    Students Convention was held at the Down the
                                    captd Islamabad with a participation of more
                                    than 15,000 students -Continuing the trend,
                                    Student Conventions and Grand Expos we held
                                    throughout the country. -75th Foundation Day
                                    was celebrated with full zeal. General
                                    Secretary visited UAE on the invitation of
                                    IJT's Alumni Circle
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image className="h-[30vw] w-fit md:block hidden object-contain" src={"/journey-photo1.png"} height={680} width={680}/>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide pl-1 mobile:pl-[9vw] pr-1 mobile:pr-[4vw] min-h-[450px] !flex justify-between items-start md:items-end py-[7vw] bg-journey-bg bg-cover">
                    <div className="h-fit w-[536px]">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full min-h-[300px] h-[30vw] border-sky-500 border-2 rounded-2xl max-md:mb-20 bg-white bg-opacity-10 shadow">
                            <div className="rounded-white-scrollbar min-h-[280px] h-[28vw] p-[3vw] text-white font-light text-sm overflow-y-scroll">
                                <h4 className="text-3xl font-inter font-semibold mb-3">
                                    1960's
                                </h4>
                                <p>
                                    -President and General Secretary IT Pakistan
                                    participated in the IIFSO's Executive
                                    Council meeting held in Istanbul, Turkey.
                                    -Annual Members Meetup was held at the
                                    Punjab University. -The COVID outbreak
                                    restricted the life around the globe,
                                    monthly meetings and activities were held
                                    online. -Countrywide campaign to highlight
                                    the educational issues. -The sad demise of
                                    the formers central Presidents Dr. Murad Ali
                                    Shah and Syed Munawar Hasan. -Annual Members
                                    Meetup was held at Dar e Arqam School,
                                    Mukabbir Campus, Gujrat. -A moment was
                                    launched for the restoration of PMDC and to
                                    highlight the MDCAT issues nationwide
                                    -Associate Member Kaleemullah Sahu, a
                                    student of BZ University Muthan was martyred
                                    by the Drug Dealer on highlighting the issue
                                    of supplying of drugs at the campus. -A
                                    nationwide campaign was launched with the
                                    slogan “Development through Education” to
                                    enlighten the importance of education and to
                                    highlight the educational issues. -Grand
                                    Students Convention was held at the Down the
                                    captd Islamabad with a participation of more
                                    than 15,000 students -Continuing the trend,
                                    Student Conventions and Grand Expos we held
                                    throughout the country. -75th Foundation Day
                                    was celebrated with full zeal. General
                                    Secretary visited UAE on the invitation of
                                    IJT's Alumni Circle
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image className="h-[30vw] w-fit md:block hidden object-contain" src={"/journey-photo1.png"} height={680} width={680}/>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide pl-1 mobile:pl-[9vw] pr-1 mobile:pr-[4vw] min-h-[450px] !flex justify-between items-start md:items-end py-[7vw] bg-journey-bg bg-cover">
                    <div className="h-fit w-[536px]">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full min-h-[300px] h-[30vw] border-sky-500 border-2 rounded-2xl max-md:mb-20 bg-white bg-opacity-10 shadow">
                            <div className="rounded-white-scrollbar min-h-[280px] h-[28vw] p-[3vw] text-white font-light text-sm overflow-y-scroll">
                                <h4 className="text-3xl font-inter font-semibold mb-3">
                                    1960's
                                </h4>
                                <p>
                                    -President and General Secretary IT Pakistan
                                    participated in the IIFSO's Executive
                                    Council meeting held in Istanbul, Turkey.
                                    -Annual Members Meetup was held at the
                                    Punjab University. -The COVID outbreak
                                    restricted the life around the globe,
                                    monthly meetings and activities were held
                                    online. -Countrywide campaign to highlight
                                    the educational issues. -The sad demise of
                                    the formers central Presidents Dr. Murad Ali
                                    Shah and Syed Munawar Hasan. -Annual Members
                                    Meetup was held at Dar e Arqam School,
                                    Mukabbir Campus, Gujrat. -A moment was
                                    launched for the restoration of PMDC and to
                                    highlight the MDCAT issues nationwide
                                    -Associate Member Kaleemullah Sahu, a
                                    student of BZ University Muthan was martyred
                                    by the Drug Dealer on highlighting the issue
                                    of supplying of drugs at the campus. -A
                                    nationwide campaign was launched with the
                                    slogan “Development through Education” to
                                    enlighten the importance of education and to
                                    highlight the educational issues. -Grand
                                    Students Convention was held at the Down the
                                    captd Islamabad with a participation of more
                                    than 15,000 students -Continuing the trend,
                                    Student Conventions and Grand Expos we held
                                    throughout the country. -75th Foundation Day
                                    was celebrated with full zeal. General
                                    Secretary visited UAE on the invitation of
                                    IJT's Alumni Circle
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image className="h-[30vw] w-fit md:block hidden object-contain" src={"/journey-photo1.png"} height={680} width={680}/>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide pl-1 mobile:pl-[9vw] pr-1 mobile:pr-[4vw] min-h-[450px] !flex justify-between items-start md:items-end py-[7vw] bg-journey-bg bg-cover">
                    <div className="h-fit w-[536px]">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full min-h-[300px] h-[30vw] border-sky-500 border-2 rounded-2xl max-md:mb-20 bg-white bg-opacity-10 shadow">
                            <div className="rounded-white-scrollbar min-h-[280px] h-[28vw] p-[3vw] text-white font-light text-sm overflow-y-scroll">
                                <h4 className="text-3xl font-inter font-semibold mb-3">
                                    1960's
                                </h4>
                                <p>
                                    -President and General Secretary IT Pakistan
                                    participated in the IIFSO's Executive
                                    Council meeting held in Istanbul, Turkey.
                                    -Annual Members Meetup was held at the
                                    Punjab University. -The COVID outbreak
                                    restricted the life around the globe,
                                    monthly meetings and activities were held
                                    online. -Countrywide campaign to highlight
                                    the educational issues. -The sad demise of
                                    the formers central Presidents Dr. Murad Ali
                                    Shah and Syed Munawar Hasan. -Annual Members
                                    Meetup was held at Dar e Arqam School,
                                    Mukabbir Campus, Gujrat. -A moment was
                                    launched for the restoration of PMDC and to
                                    highlight the MDCAT issues nationwide
                                    -Associate Member Kaleemullah Sahu, a
                                    student of BZ University Muthan was martyred
                                    by the Drug Dealer on highlighting the issue
                                    of supplying of drugs at the campus. -A
                                    nationwide campaign was launched with the
                                    slogan “Development through Education” to
                                    enlighten the importance of education and to
                                    highlight the educational issues. -Grand
                                    Students Convention was held at the Down the
                                    captd Islamabad with a participation of more
                                    than 15,000 students -Continuing the trend,
                                    Student Conventions and Grand Expos we held
                                    throughout the country. -75th Foundation Day
                                    was celebrated with full zeal. General
                                    Secretary visited UAE on the invitation of
                                    IJT's Alumni Circle
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image className="h-[30vw] w-fit md:block hidden object-contain" src={"/journey-photo1.png"} height={680} width={680}/>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide pl-1 mobile:pl-[9vw] pr-1 mobile:pr-[4vw] min-h-[450px] !flex justify-between items-start md:items-end py-[7vw] bg-journey-bg bg-cover">
                    <div className="h-fit w-[536px]">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full min-h-[300px] h-[30vw] border-sky-500 border-2 rounded-2xl max-md:mb-20 bg-white bg-opacity-10 shadow">
                            <div className="rounded-white-scrollbar min-h-[280px] h-[28vw] p-[3vw] text-white font-light text-sm overflow-y-scroll">
                                <h4 className="text-3xl font-inter font-semibold mb-3">
                                    1960's
                                </h4>
                                <p>
                                    -President and General Secretary IT Pakistan
                                    participated in the IIFSO's Executive
                                    Council meeting held in Istanbul, Turkey.
                                    -Annual Members Meetup was held at the
                                    Punjab University. -The COVID outbreak
                                    restricted the life around the globe,
                                    monthly meetings and activities were held
                                    online. -Countrywide campaign to highlight
                                    the educational issues. -The sad demise of
                                    the formers central Presidents Dr. Murad Ali
                                    Shah and Syed Munawar Hasan. -Annual Members
                                    Meetup was held at Dar e Arqam School,
                                    Mukabbir Campus, Gujrat. -A moment was
                                    launched for the restoration of PMDC and to
                                    highlight the MDCAT issues nationwide
                                    -Associate Member Kaleemullah Sahu, a
                                    student of BZ University Muthan was martyred
                                    by the Drug Dealer on highlighting the issue
                                    of supplying of drugs at the campus. -A
                                    nationwide campaign was launched with the
                                    slogan “Development through Education” to
                                    enlighten the importance of education and to
                                    highlight the educational issues. -Grand
                                    Students Convention was held at the Down the
                                    captd Islamabad with a participation of more
                                    than 15,000 students -Continuing the trend,
                                    Student Conventions and Grand Expos we held
                                    throughout the country. -75th Foundation Day
                                    was celebrated with full zeal. General
                                    Secretary visited UAE on the invitation of
                                    IJT's Alumni Circle
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image className="h-[30vw] w-fit md:block hidden object-contain" src={"/journey-photo1.png"} height={680} width={680}/>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide pl-1 mobile:pl-[9vw] pr-1 mobile:pr-[4vw] min-h-[450px] !flex justify-between items-start md:items-end py-[7vw] bg-journey-bg bg-cover">
                    <div className="h-fit w-[536px]">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full min-h-[300px] h-[30vw] border-sky-500 border-2 rounded-2xl max-md:mb-20 bg-white bg-opacity-10 shadow">
                            <div className="rounded-white-scrollbar min-h-[280px] h-[28vw] p-[3vw] text-white font-light text-sm overflow-y-scroll">
                                <h4 className="text-3xl font-inter font-semibold mb-3">
                                    1960's
                                </h4>
                                <p>
                                    -President and General Secretary IT Pakistan
                                    participated in the IIFSO's Executive
                                    Council meeting held in Istanbul, Turkey.
                                    -Annual Members Meetup was held at the
                                    Punjab University. -The COVID outbreak
                                    restricted the life around the globe,
                                    monthly meetings and activities were held
                                    online. -Countrywide campaign to highlight
                                    the educational issues. -The sad demise of
                                    the formers central Presidents Dr. Murad Ali
                                    Shah and Syed Munawar Hasan. -Annual Members
                                    Meetup was held at Dar e Arqam School,
                                    Mukabbir Campus, Gujrat. -A moment was
                                    launched for the restoration of PMDC and to
                                    highlight the MDCAT issues nationwide
                                    -Associate Member Kaleemullah Sahu, a
                                    student of BZ University Muthan was martyred
                                    by the Drug Dealer on highlighting the issue
                                    of supplying of drugs at the campus. -A
                                    nationwide campaign was launched with the
                                    slogan “Development through Education” to
                                    enlighten the importance of education and to
                                    highlight the educational issues. -Grand
                                    Students Convention was held at the Down the
                                    captd Islamabad with a participation of more
                                    than 15,000 students -Continuing the trend,
                                    Student Conventions and Grand Expos we held
                                    throughout the country. -75th Foundation Day
                                    was celebrated with full zeal. General
                                    Secretary visited UAE on the invitation of
                                    IJT's Alumni Circle
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image className="h-[30vw] w-fit md:block hidden object-contain" src={"/journey-photo1.png"} height={680} width={680}/>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide pl-1 mobile:pl-[9vw] pr-1 mobile:pr-[4vw] min-h-[450px] !flex justify-between items-start md:items-end py-[7vw] bg-journey-bg bg-cover">
                    <div className="h-fit w-[536px]">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full min-h-[300px] h-[30vw] border-sky-500 border-2 rounded-2xl max-md:mb-20 bg-white bg-opacity-10 shadow">
                            <div className="rounded-white-scrollbar min-h-[280px] h-[28vw] p-[3vw] text-white font-light text-sm overflow-y-scroll">
                                <h4 className="text-3xl font-inter font-semibold mb-3">
                                    1960's
                                </h4>
                                <p>
                                    -President and General Secretary IT Pakistan
                                    participated in the IIFSO's Executive
                                    Council meeting held in Istanbul, Turkey.
                                    -Annual Members Meetup was held at the
                                    Punjab University. -The COVID outbreak
                                    restricted the life around the globe,
                                    monthly meetings and activities were held
                                    online. -Countrywide campaign to highlight
                                    the educational issues. -The sad demise of
                                    the formers central Presidents Dr. Murad Ali
                                    Shah and Syed Munawar Hasan. -Annual Members
                                    Meetup was held at Dar e Arqam School,
                                    Mukabbir Campus, Gujrat. -A moment was
                                    launched for the restoration of PMDC and to
                                    highlight the MDCAT issues nationwide
                                    -Associate Member Kaleemullah Sahu, a
                                    student of BZ University Muthan was martyred
                                    by the Drug Dealer on highlighting the issue
                                    of supplying of drugs at the campus. -A
                                    nationwide campaign was launched with the
                                    slogan “Development through Education” to
                                    enlighten the importance of education and to
                                    highlight the educational issues. -Grand
                                    Students Convention was held at the Down the
                                    captd Islamabad with a participation of more
                                    than 15,000 students -Continuing the trend,
                                    Student Conventions and Grand Expos we held
                                    throughout the country. -75th Foundation Day
                                    was celebrated with full zeal. General
                                    Secretary visited UAE on the invitation of
                                    IJT's Alumni Circle
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image className="h-[30vw] w-fit md:block hidden object-contain" src={"/journey-photo1.png"} height={680} width={680}/>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide pl-1 mobile:pl-[9vw] pr-1 mobile:pr-[4vw] min-h-[450px] !flex justify-between items-start md:items-end py-[7vw] bg-journey-bg bg-cover">
                    <div className="h-fit w-[536px]">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full min-h-[300px] h-[30vw] border-sky-500 border-2 rounded-2xl max-md:mb-20 bg-white bg-opacity-10 shadow">
                            <div className="rounded-white-scrollbar min-h-[280px] h-[28vw] p-[3vw] text-white font-light text-sm overflow-y-scroll">
                                <h4 className="text-3xl font-inter font-semibold mb-3">
                                    1960's
                                </h4>
                                <p>
                                    -President and General Secretary IT Pakistan
                                    participated in the IIFSO's Executive
                                    Council meeting held in Istanbul, Turkey.
                                    -Annual Members Meetup was held at the
                                    Punjab University. -The COVID outbreak
                                    restricted the life around the globe,
                                    monthly meetings and activities were held
                                    online. -Countrywide campaign to highlight
                                    the educational issues. -The sad demise of
                                    the formers central Presidents Dr. Murad Ali
                                    Shah and Syed Munawar Hasan. -Annual Members
                                    Meetup was held at Dar e Arqam School,
                                    Mukabbir Campus, Gujrat. -A moment was
                                    launched for the restoration of PMDC and to
                                    highlight the MDCAT issues nationwide
                                    -Associate Member Kaleemullah Sahu, a
                                    student of BZ University Muthan was martyred
                                    by the Drug Dealer on highlighting the issue
                                    of supplying of drugs at the campus. -A
                                    nationwide campaign was launched with the
                                    slogan “Development through Education” to
                                    enlighten the importance of education and to
                                    highlight the educational issues. -Grand
                                    Students Convention was held at the Down the
                                    captd Islamabad with a participation of more
                                    than 15,000 students -Continuing the trend,
                                    Student Conventions and Grand Expos we held
                                    throughout the country. -75th Foundation Day
                                    was celebrated with full zeal. General
                                    Secretary visited UAE on the invitation of
                                    IJT's Alumni Circle
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image className="h-[30vw] w-fit md:block hidden object-contain" src={"/journey-photo1.png"} height={680} width={680}/>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide min-h-[450px] !flex juhtify-between items-start md:items-end py-[7vw] pl-1 mobile:pl-[9vw] pr-1 mobile:pr-[4vw] bg-journey-bg bg-cover">
                    <div className="h-fit w-[536px]">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full min-h-[300px] h-[30vw] border-sky-500 border-2 rounded-2xl max-md:mb-20 bg-white bg-opacity-10 shadow">
                            <div className="rounded-white-scrollbar min-h-[280px] h-[28vw] p-[3vw] text-white font-light text-sm overflow-y-scroll">
                                <h4 className="text-3xl font-inter font-semibold mb-3">
                                    1960's
                                </h4>
                                <p>
                                    -President and General Secretary IT Pakistan
                                    participated in the IIFSO's Executive
                                    Council meeting held in Istanbul, Turkey.
                                    -Annual Members Meetup was held at the
                                    Punjab University. -The COVID outbreak
                                    restricted the life around the globe,
                                    monthly meetings and activities were held
                                    online. -Countrywide campaign to highlight
                                    the educational issues. -The sad demise of
                                    the formers central Presidents Dr. Murad Ali
                                    Shah and Syed Munawar Hasan. -Annual Members
                                    Meetup was held at Dar e Arqam School,
                                    Mukabbir Campus, Gujrat. -A moment was
                                    launched for the restoration of PMDC and to
                                    highlight the MDCAT issues nationwide
                                    -Associate Member Kaleemullah Sahu, a
                                    student of BZ University Muthan was martyred
                                    by the Drug Dealer on highlighting the issue
                                    of supplying of drugs at the campus. -A
                                    nationwide campaign was launched with the
                                    slogan “Development through Education” to
                                    enlighten the importance of education and to
                                    highlight the educational issues. -Grand
                                    Students Convention was held at the Down the
                                    captd Islamabad with a participation of more
                                    than 15,000 students -Continuing the trend,
                                    Student Conventions and Grand Expos we held
                                    throughout the country. -75th Foundation Day
                                    was celebrated with full zeal. General
                                    Secretary visited UAE on the invitation of
                                    IJT's Alumni Circle
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image className="h-[30vw] w-fit md:block hidden object-contain" src={"/journey-photo1.png"} height={680} width={680}/>
                </SwiperSlide>
                <div className="prev hidden md:block h-6 w-6 border-2 cursor-pointer rounded-full border-sky-500 absolute bottom-4 left-[10vw] rotate-180 z-10">
                    <Image
                        alt="photo"
                        src={"/cheveron-right.svg"}
                        height={24}
                        width={24}
                    />
                </div>
                <div className="next hidden md:block h-6 w-6 border-2 cursor-pointer rounded-full border-sky-500 absolute bottom-4 right-[10vw] z-10">
                    <Image
                        alt="photo"
                        src={"/cheveron-right.svg"}
                        height={24}
                        width={24}
                    />
                </div>
            </Swiper>
            <div className="flex absolute text-white bottom-8 left-8 flex-col z-10">
                <p>03</p>
                <div className="h-px w-full bg-sky-400"></div>
                <p>07</p>
            </div>
        </div>
    );
}
