"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
export default function Journey() {
    const pagination = {
        clickable: true,
        dynamicBullets:true,
        dynamicMainBullets:1,
        bulletClass: "swiper-pagination-bullet text-sky-400 text-2xl font-bold",
        bulletActiveClass:
            "swiper-pagination-bullet-active",
        renderBullet: function (index, className) {
            const year = 1940 + index * 10;
            return `<span class="${className}">${year}'s</span>`;
        },
    };
    return (
        <div className="w-full h-screen relative">
            <Swiper
                style={{
                    "--swiper-pagination-color": "none",
                    "--swiper-pagination-bullet-inactive-color": "none",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "16px",
                    "--swiper-pagination-bullet-horizontal-gap": "30px",
                    "--swiper-pagination-bottom": "12px",
                    "--swiper-pagination-bullet-width": "auto",
                    "--swiper-pagination-bullet-height": "auto",
                }}
                navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                }}
                loop={true}
                pagination={pagination}
                modules={[Pagination, Navigation]}
                className="mySwiper h-full"
            >
                <SwiperSlide className="swiper-slide bg-journey-bg1 bg-cover">
                    <div className="h-fit w-[536px] mt-16 ml-36">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full h-[420px] border-sky-500 border-2 rounded-2xl bg-white bg-opacity-10 shadow">
                        <div className="rounded-white-scrollbar h-[400px] p-10 text-white font-light text-sm overflow-y-scroll">
                            <h4 className="text-3xl font-inter font-semibold mb-3">1960's</h4>
                            <p>
                                -President and General Secretary IT Pakistan
                                participated in the IIFSO's Executive Council
                                meeting held in Istanbul, Turkey. -Annual
                                Members Meetup was held at the Punjab
                                University. -The COVID outbreak restricted the
                                life around the globe, monthly meetings and
                                activities were held online. -Countrywide
                                campaign to highlight the educational issues.
                                -The sad demise of the formers central
                                Presidents Dr. Murad Ali Shah and Syed Munawar
                                Hasan. -Annual Members Meetup was held at Dar e
                                Arqam School, Mukabbir Campus, Gujrat. -A moment
                                was launched for the restoration of PMDC and to
                                highlight the MDCAT issues nationwide -Associate
                                Member Kaleemullah Sahu, a student of BZ
                                University Muthan was martyred by the Drug
                                Dealer on highlighting the issue of supplying of
                                drugs at the campus. -A nationwide campaign was
                                launched with the slogan “Development through
                                Education” to enlighten the importance of
                                education and to highlight the educational
                                issues. -Grand Students Convention was held at
                                the Down the captd Islamabad with a
                                participation of more than 15,000 students
                                -Continuing the trend, Student Conventions and
                                Grand Expos we held throughout the country.
                                -75th Foundation Day was celebrated with full
                                zeal. General Secretary visited UAE on the
                                invitation of IJT's Alumni Circle
                            </p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-journey-bg1 bg-cover">
                    <div className="h-fit w-[536px] mt-16 ml-36">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full h-[420px] border-sky-500 border-2 rounded-2xl bg-white bg-opacity-10 shadow">
                        <div className="rounded-white-scrollbar h-[400px] p-10 text-white font-light text-sm overflow-y-scroll">
                            <h4 className="text-3xl font-inter font-semibold mb-3">1960's</h4>
                            <p>
                                -President and General Secretary IT Pakistan
                                participated in the IIFSO's Executive Council
                                meeting held in Istanbul, Turkey. -Annual
                                Members Meetup was held at the Punjab
                                University. -The COVID outbreak restricted the
                                life around the globe, monthly meetings and
                                activities were held online. -Countrywide
                                campaign to highlight the educational issues.
                                -The sad demise of the formers central
                                Presidents Dr. Murad Ali Shah and Syed Munawar
                                Hasan. -Annual Members Meetup was held at Dar e
                                Arqam School, Mukabbir Campus, Gujrat. -A moment
                                was launched for the restoration of PMDC and to
                                highlight the MDCAT issues nationwide -Associate
                                Member Kaleemullah Sahu, a student of BZ
                                University Muthan was martyred by the Drug
                                Dealer on highlighting the issue of supplying of
                                drugs at the campus. -A nationwide campaign was
                                launched with the slogan “Development through
                                Education” to enlighten the importance of
                                education and to highlight the educational
                                issues. -Grand Students Convention was held at
                                the Down the captd Islamabad with a
                                participation of more than 15,000 students
                                -Continuing the trend, Student Conventions and
                                Grand Expos we held throughout the country.
                                -75th Foundation Day was celebrated with full
                                zeal. General Secretary visited UAE on the
                                invitation of IJT's Alumni Circle
                            </p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-journey-bg1 bg-cover">
                    <div className="h-fit w-[536px] mt-16 ml-36">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full h-[420px] border-sky-500 border-2 rounded-2xl bg-white bg-opacity-10 shadow">
                        <div className="rounded-white-scrollbar h-[400px] p-10 text-white font-light text-sm overflow-y-scroll">
                            <h4 className="text-3xl font-inter font-semibold mb-3">1960's</h4>
                            <p>
                                -President and General Secretary IT Pakistan
                                participated in the IIFSO's Executive Council
                                meeting held in Istanbul, Turkey. -Annual
                                Members Meetup was held at the Punjab
                                University. -The COVID outbreak restricted the
                                life around the globe, monthly meetings and
                                activities were held online. -Countrywide
                                campaign to highlight the educational issues.
                                -The sad demise of the formers central
                                Presidents Dr. Murad Ali Shah and Syed Munawar
                                Hasan. -Annual Members Meetup was held at Dar e
                                Arqam School, Mukabbir Campus, Gujrat. -A moment
                                was launched for the restoration of PMDC and to
                                highlight the MDCAT issues nationwide -Associate
                                Member Kaleemullah Sahu, a student of BZ
                                University Muthan was martyred by the Drug
                                Dealer on highlighting the issue of supplying of
                                drugs at the campus. -A nationwide campaign was
                                launched with the slogan “Development through
                                Education” to enlighten the importance of
                                education and to highlight the educational
                                issues. -Grand Students Convention was held at
                                the Down the captd Islamabad with a
                                participation of more than 15,000 students
                                -Continuing the trend, Student Conventions and
                                Grand Expos we held throughout the country.
                                -75th Foundation Day was celebrated with full
                                zeal. General Secretary visited UAE on the
                                invitation of IJT's Alumni Circle
                            </p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-journey-bg1 bg-cover">
                    <div className="h-fit w-[536px] mt-16 ml-36">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full h-[420px] border-sky-500 border-2 rounded-2xl bg-white bg-opacity-10 shadow">
                        <div className="rounded-white-scrollbar h-[400px] p-10 text-white font-light text-sm overflow-y-scroll">
                            <h4 className="text-3xl font-inter font-semibold mb-3">1960's</h4>
                            <p>
                                -President and General Secretary IT Pakistan
                                participated in the IIFSO's Executive Council
                                meeting held in Istanbul, Turkey. -Annual
                                Members Meetup was held at the Punjab
                                University. -The COVID outbreak restricted the
                                life around the globe, monthly meetings and
                                activities were held online. -Countrywide
                                campaign to highlight the educational issues.
                                -The sad demise of the formers central
                                Presidents Dr. Murad Ali Shah and Syed Munawar
                                Hasan. -Annual Members Meetup was held at Dar e
                                Arqam School, Mukabbir Campus, Gujrat. -A moment
                                was launched for the restoration of PMDC and to
                                highlight the MDCAT issues nationwide -Associate
                                Member Kaleemullah Sahu, a student of BZ
                                University Muthan was martyred by the Drug
                                Dealer on highlighting the issue of supplying of
                                drugs at the campus. -A nationwide campaign was
                                launched with the slogan “Development through
                                Education” to enlighten the importance of
                                education and to highlight the educational
                                issues. -Grand Students Convention was held at
                                the Down the captd Islamabad with a
                                participation of more than 15,000 students
                                -Continuing the trend, Student Conventions and
                                Grand Expos we held throughout the country.
                                -75th Foundation Day was celebrated with full
                                zeal. General Secretary visited UAE on the
                                invitation of IJT's Alumni Circle
                            </p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-journey-bg1 bg-cover">
                    <div className="h-fit w-[536px] mt-16 ml-36">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full h-[420px] border-sky-500 border-2 rounded-2xl bg-white bg-opacity-10 shadow">
                        <div className="rounded-white-scrollbar h-[400px] p-10 text-white font-light text-sm overflow-y-scroll">
                            <h4 className="text-3xl font-inter font-semibold mb-3">1960's</h4>
                            <p>
                                -President and General Secretary IT Pakistan
                                participated in the IIFSO's Executive Council
                                meeting held in Istanbul, Turkey. -Annual
                                Members Meetup was held at the Punjab
                                University. -The COVID outbreak restricted the
                                life around the globe, monthly meetings and
                                activities were held online. -Countrywide
                                campaign to highlight the educational issues.
                                -The sad demise of the formers central
                                Presidents Dr. Murad Ali Shah and Syed Munawar
                                Hasan. -Annual Members Meetup was held at Dar e
                                Arqam School, Mukabbir Campus, Gujrat. -A moment
                                was launched for the restoration of PMDC and to
                                highlight the MDCAT issues nationwide -Associate
                                Member Kaleemullah Sahu, a student of BZ
                                University Muthan was martyred by the Drug
                                Dealer on highlighting the issue of supplying of
                                drugs at the campus. -A nationwide campaign was
                                launched with the slogan “Development through
                                Education” to enlighten the importance of
                                education and to highlight the educational
                                issues. -Grand Students Convention was held at
                                the Down the captd Islamabad with a
                                participation of more than 15,000 students
                                -Continuing the trend, Student Conventions and
                                Grand Expos we held throughout the country.
                                -75th Foundation Day was celebrated with full
                                zeal. General Secretary visited UAE on the
                                invitation of IJT's Alumni Circle
                            </p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-journey-bg1 bg-cover">
                    <div className="h-fit w-[536px] mt-16 ml-36">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full h-[420px] border-sky-500 border-2 rounded-2xl bg-white bg-opacity-10 shadow">
                        <div className="rounded-white-scrollbar h-[400px] p-10 text-white font-light text-sm overflow-y-scroll">
                            <h4 className="text-3xl font-inter font-semibold mb-3">1960's</h4>
                            <p>
                                -President and General Secretary IT Pakistan
                                participated in the IIFSO's Executive Council
                                meeting held in Istanbul, Turkey. -Annual
                                Members Meetup was held at the Punjab
                                University. -The COVID outbreak restricted the
                                life around the globe, monthly meetings and
                                activities were held online. -Countrywide
                                campaign to highlight the educational issues.
                                -The sad demise of the formers central
                                Presidents Dr. Murad Ali Shah and Syed Munawar
                                Hasan. -Annual Members Meetup was held at Dar e
                                Arqam School, Mukabbir Campus, Gujrat. -A moment
                                was launched for the restoration of PMDC and to
                                highlight the MDCAT issues nationwide -Associate
                                Member Kaleemullah Sahu, a student of BZ
                                University Muthan was martyred by the Drug
                                Dealer on highlighting the issue of supplying of
                                drugs at the campus. -A nationwide campaign was
                                launched with the slogan “Development through
                                Education” to enlighten the importance of
                                education and to highlight the educational
                                issues. -Grand Students Convention was held at
                                the Down the captd Islamabad with a
                                participation of more than 15,000 students
                                -Continuing the trend, Student Conventions and
                                Grand Expos we held throughout the country.
                                -75th Foundation Day was celebrated with full
                                zeal. General Secretary visited UAE on the
                                invitation of IJT's Alumni Circle
                            </p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-journey-bg1 bg-cover">
                    <div className="h-fit w-[536px] mt-16 ml-36">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full h-[420px] border-sky-500 border-2 rounded-2xl bg-white bg-opacity-10 shadow">
                        <div className="rounded-white-scrollbar h-[400px] p-10 text-white font-light text-sm overflow-y-scroll">
                            <h4 className="text-3xl font-inter font-semibold mb-3">1960's</h4>
                            <p>
                                -President and General Secretary IT Pakistan
                                participated in the IIFSO's Executive Council
                                meeting held in Istanbul, Turkey. -Annual
                                Members Meetup was held at the Punjab
                                University. -The COVID outbreak restricted the
                                life around the globe, monthly meetings and
                                activities were held online. -Countrywide
                                campaign to highlight the educational issues.
                                -The sad demise of the formers central
                                Presidents Dr. Murad Ali Shah and Syed Munawar
                                Hasan. -Annual Members Meetup was held at Dar e
                                Arqam School, Mukabbir Campus, Gujrat. -A moment
                                was launched for the restoration of PMDC and to
                                highlight the MDCAT issues nationwide -Associate
                                Member Kaleemullah Sahu, a student of BZ
                                University Muthan was martyred by the Drug
                                Dealer on highlighting the issue of supplying of
                                drugs at the campus. -A nationwide campaign was
                                launched with the slogan “Development through
                                Education” to enlighten the importance of
                                education and to highlight the educational
                                issues. -Grand Students Convention was held at
                                the Down the captd Islamabad with a
                                participation of more than 15,000 students
                                -Continuing the trend, Student Conventions and
                                Grand Expos we held throughout the country.
                                -75th Foundation Day was celebrated with full
                                zeal. General Secretary visited UAE on the
                                invitation of IJT's Alumni Circle
                            </p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-journey-bg1 bg-cover">
                    <div className="h-fit w-[536px] mt-16 ml-36">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full h-[420px] border-sky-500 border-2 rounded-2xl bg-white bg-opacity-10 shadow">
                        <div className="rounded-white-scrollbar h-[400px] p-10 text-white font-light text-sm overflow-y-scroll">
                            <h4 className="text-3xl font-inter font-semibold mb-3">1960's</h4>
                            <p>
                                -President and General Secretary IT Pakistan
                                participated in the IIFSO's Executive Council
                                meeting held in Istanbul, Turkey. -Annual
                                Members Meetup was held at the Punjab
                                University. -The COVID outbreak restricted the
                                life around the globe, monthly meetings and
                                activities were held online. -Countrywide
                                campaign to highlight the educational issues.
                                -The sad demise of the formers central
                                Presidents Dr. Murad Ali Shah and Syed Munawar
                                Hasan. -Annual Members Meetup was held at Dar e
                                Arqam School, Mukabbir Campus, Gujrat. -A moment
                                was launched for the restoration of PMDC and to
                                highlight the MDCAT issues nationwide -Associate
                                Member Kaleemullah Sahu, a student of BZ
                                University Muthan was martyred by the Drug
                                Dealer on highlighting the issue of supplying of
                                drugs at the campus. -A nationwide campaign was
                                launched with the slogan “Development through
                                Education” to enlighten the importance of
                                education and to highlight the educational
                                issues. -Grand Students Convention was held at
                                the Down the captd Islamabad with a
                                participation of more than 15,000 students
                                -Continuing the trend, Student Conventions and
                                Grand Expos we held throughout the country.
                                -75th Foundation Day was celebrated with full
                                zeal. General Secretary visited UAE on the
                                invitation of IJT's Alumni Circle
                            </p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-journey-bg1 bg-cover">
                    <div className="h-fit w-[536px] mt-16 ml-36">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full h-[420px] border-sky-500 border-2 rounded-2xl bg-white bg-opacity-10 shadow">
                        <div className="rounded-white-scrollbar h-[400px] p-10 text-white font-light text-sm overflow-y-scroll">
                            <h4 className="text-3xl font-inter font-semibold mb-3">1960's</h4>
                            <p>
                                -President and General Secretary IT Pakistan
                                participated in the IIFSO's Executive Council
                                meeting held in Istanbul, Turkey. -Annual
                                Members Meetup was held at the Punjab
                                University. -The COVID outbreak restricted the
                                life around the globe, monthly meetings and
                                activities were held online. -Countrywide
                                campaign to highlight the educational issues.
                                -The sad demise of the formers central
                                Presidents Dr. Murad Ali Shah and Syed Munawar
                                Hasan. -Annual Members Meetup was held at Dar e
                                Arqam School, Mukabbir Campus, Gujrat. -A moment
                                was launched for the restoration of PMDC and to
                                highlight the MDCAT issues nationwide -Associate
                                Member Kaleemullah Sahu, a student of BZ
                                University Muthan was martyred by the Drug
                                Dealer on highlighting the issue of supplying of
                                drugs at the campus. -A nationwide campaign was
                                launched with the slogan “Development through
                                Education” to enlighten the importance of
                                education and to highlight the educational
                                issues. -Grand Students Convention was held at
                                the Down the captd Islamabad with a
                                participation of more than 15,000 students
                                -Continuing the trend, Student Conventions and
                                Grand Expos we held throughout the country.
                                -75th Foundation Day was celebrated with full
                                zeal. General Secretary visited UAE on the
                                invitation of IJT's Alumni Circle
                            </p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-journey-bg1 bg-cover">
                    <div className="h-fit w-[536px] mt-16 ml-36">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full h-[420px] border-sky-500 border-2 rounded-2xl bg-white bg-opacity-10 shadow">
                        <div className="rounded-white-scrollbar h-[400px] p-10 text-white font-light text-sm overflow-y-scroll">
                            <h4 className="text-3xl font-inter font-semibold mb-3">1960's</h4>
                            <p>
                                -President and General Secretary IT Pakistan
                                participated in the IIFSO's Executive Council
                                meeting held in Istanbul, Turkey. -Annual
                                Members Meetup was held at the Punjab
                                University. -The COVID outbreak restricted the
                                life around the globe, monthly meetings and
                                activities were held online. -Countrywide
                                campaign to highlight the educational issues.
                                -The sad demise of the formers central
                                Presidents Dr. Murad Ali Shah and Syed Munawar
                                Hasan. -Annual Members Meetup was held at Dar e
                                Arqam School, Mukabbir Campus, Gujrat. -A moment
                                was launched for the restoration of PMDC and to
                                highlight the MDCAT issues nationwide -Associate
                                Member Kaleemullah Sahu, a student of BZ
                                University Muthan was martyred by the Drug
                                Dealer on highlighting the issue of supplying of
                                drugs at the campus. -A nationwide campaign was
                                launched with the slogan “Development through
                                Education” to enlighten the importance of
                                education and to highlight the educational
                                issues. -Grand Students Convention was held at
                                the Down the captd Islamabad with a
                                participation of more than 15,000 students
                                -Continuing the trend, Student Conventions and
                                Grand Expos we held throughout the country.
                                -75th Foundation Day was celebrated with full
                                zeal. General Secretary visited UAE on the
                                invitation of IJT's Alumni Circle
                            </p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-journey-bg1 bg-cover">
                    <div className="h-fit w-[536px] mt-16 ml-36">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full h-[420px] border-sky-500 border-2 rounded-2xl bg-white bg-opacity-10 shadow">
                        <div className="rounded-white-scrollbar h-[400px] p-10 text-white font-light text-sm overflow-y-scroll">
                            <h4 className="text-3xl font-inter font-semibold mb-3">1960's</h4>
                            <p>
                                -President and General Secretary IT Pakistan
                                participated in the IIFSO's Executive Council
                                meeting held in Istanbul, Turkey. -Annual
                                Members Meetup was held at the Punjab
                                University. -The COVID outbreak restricted the
                                life around the globe, monthly meetings and
                                activities were held online. -Countrywide
                                campaign to highlight the educational issues.
                                -The sad demise of the formers central
                                Presidents Dr. Murad Ali Shah and Syed Munawar
                                Hasan. -Annual Members Meetup was held at Dar e
                                Arqam School, Mukabbir Campus, Gujrat. -A moment
                                was launched for the restoration of PMDC and to
                                highlight the MDCAT issues nationwide -Associate
                                Member Kaleemullah Sahu, a student of BZ
                                University Muthan was martyred by the Drug
                                Dealer on highlighting the issue of supplying of
                                drugs at the campus. -A nationwide campaign was
                                launched with the slogan “Development through
                                Education” to enlighten the importance of
                                education and to highlight the educational
                                issues. -Grand Students Convention was held at
                                the Down the captd Islamabad with a
                                participation of more than 15,000 students
                                -Continuing the trend, Student Conventions and
                                Grand Expos we held throughout the country.
                                -75th Foundation Day was celebrated with full
                                zeal. General Secretary visited UAE on the
                                invitation of IJT's Alumni Circle
                            </p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-journey-bg1 bg-cover">
                    <div className="h-fit w-[536px] mt-16 ml-36">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full h-[420px] border-sky-500 border-2 rounded-2xl bg-white bg-opacity-10 shadow">
                        <div className="rounded-white-scrollbar h-[400px] p-10 text-white font-light text-sm overflow-y-scroll">
                            <h4 className="text-3xl font-inter font-semibold mb-3">1960's</h4>
                            <p>
                                -President and General Secretary IT Pakistan
                                participated in the IIFSO's Executive Council
                                meeting held in Istanbul, Turkey. -Annual
                                Members Meetup was held at the Punjab
                                University. -The COVID outbreak restricted the
                                life around the globe, monthly meetings and
                                activities were held online. -Countrywide
                                campaign to highlight the educational issues.
                                -The sad demise of the formers central
                                Presidents Dr. Murad Ali Shah and Syed Munawar
                                Hasan. -Annual Members Meetup was held at Dar e
                                Arqam School, Mukabbir Campus, Gujrat. -A moment
                                was launched for the restoration of PMDC and to
                                highlight the MDCAT issues nationwide -Associate
                                Member Kaleemullah Sahu, a student of BZ
                                University Muthan was martyred by the Drug
                                Dealer on highlighting the issue of supplying of
                                drugs at the campus. -A nationwide campaign was
                                launched with the slogan “Development through
                                Education” to enlighten the importance of
                                education and to highlight the educational
                                issues. -Grand Students Convention was held at
                                the Down the captd Islamabad with a
                                participation of more than 15,000 students
                                -Continuing the trend, Student Conventions and
                                Grand Expos we held throughout the country.
                                -75th Foundation Day was celebrated with full
                                zeal. General Secretary visited UAE on the
                                invitation of IJT's Alumni Circle
                            </p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-journey-bg1 bg-cover">
                    <div className="h-fit w-[536px] mt-16 ml-36">
                        <h2 className="text-4xl mb-9 text-sky-400 font-bold font-inter">
                            Our Journey
                        </h2>
                        <div className="w-full h-[420px] border-sky-500 border-2 rounded-2xl bg-white bg-opacity-10 shadow">
                        <div className="rounded-white-scrollbar h-[400px] p-10 text-white font-light text-sm overflow-y-scroll">
                            <h4 className="text-3xl font-inter font-semibold mb-3">1960's</h4>
                            <p>
                                -President and General Secretary IT Pakistan
                                participated in the IIFSO's Executive Council
                                meeting held in Istanbul, Turkey. -Annual
                                Members Meetup was held at the Punjab
                                University. -The COVID outbreak restricted the
                                life around the globe, monthly meetings and
                                activities were held online. -Countrywide
                                campaign to highlight the educational issues.
                                -The sad demise of the formers central
                                Presidents Dr. Murad Ali Shah and Syed Munawar
                                Hasan. -Annual Members Meetup was held at Dar e
                                Arqam School, Mukabbir Campus, Gujrat. -A moment
                                was launched for the restoration of PMDC and to
                                highlight the MDCAT issues nationwide -Associate
                                Member Kaleemullah Sahu, a student of BZ
                                University Muthan was martyred by the Drug
                                Dealer on highlighting the issue of supplying of
                                drugs at the campus. -A nationwide campaign was
                                launched with the slogan “Development through
                                Education” to enlighten the importance of
                                education and to highlight the educational
                                issues. -Grand Students Convention was held at
                                the Down the captd Islamabad with a
                                participation of more than 15,000 students
                                -Continuing the trend, Student Conventions and
                                Grand Expos we held throughout the country.
                                -75th Foundation Day was celebrated with full
                                zeal. General Secretary visited UAE on the
                                invitation of IJT's Alumni Circle
                            </p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="prev h-6 w-6 border-2 cursor-pointer rounded-full border-sky-500 absolute bottom-4 left-40 rotate-180 z-10">
                    <Image alt="photo" src={"/cheveron-right.svg"} height={24} width={24} />
                </div>
                <div className="next h-6 w-6 border-2 cursor-pointer rounded-full border-sky-500 absolute bottom-4 right-40 z-10">
                    <Image alt="photo" src={"/cheveron-right.svg"} height={24} width={24} />
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
