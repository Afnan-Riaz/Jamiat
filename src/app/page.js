"use client"
import About from "./components/homepage/about-section";
import Inspiration from "./components/homepage/inspiration-section";
import Journey from "./components/homepage/journey-section";
import Landing from "./components/homepage/landing-section";
import Footprint from "./components/homepage/footprint-section";
import Message from "./components/homepage/message-section";
import Projects from "./components/homepage/projects-section";
import Member from "./components/homepage/member-section";
import Analytics from "./components/homepage/analytics-section";
import Media from "./components/homepage/media-section";
import { useRef } from "react";

export default function Home() {
    const sectionRefs = {
        landing: useRef(null),
        about: useRef(null),
        journey: useRef(null),
        inspiration: useRef(null),
        message: useRef(null),
        footprint: useRef(null),
        projects: useRef(null),
    };
    const scrollSection = (sectionRef) => {
        console.log(sectionRef)
        if(sectionRef)
            sectionRef.current.scrollIntoView({ behavior: "smooth",block:"start"});
    };
    return (
        <main>
            <div className="top-[40%] left-8 fixed hidden sm:flex flex-col gap-4 z-10">
                <input
                    onClick={()=>{scrollSection(sectionRefs.landing)}}
                    className="appearance-none h-[15px] w-[15px] cursor-pointer block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    defaultChecked
                    name="vertical-slider"
                    id="section1"
                />
                <input
                    onClick={()=>{scrollSection(sectionRefs.about)}}
                    className="appearance-none h-[15px] w-[15px] cursor-pointer block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section2"
                />
                <input
                    onClick={()=>{scrollSection(sectionRefs.journey)}}
                    className="appearance-none h-[15px] w-[15px] cursor-pointer block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section3"
                />
                <input
                    onClick={()=>{scrollSection(sectionRefs.inspiration)}}
                    className="appearance-none h-[15px] w-[15px] cursor-pointer block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section4"
                />
                <input
                    onClick={()=>{scrollSection(sectionRefs.message)}}
                    className="appearance-none h-[15px] w-[15px] cursor-pointer block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section5"
                />
                <input
                    onClick={()=>{scrollSection(sectionRefs.footprint)}}
                    className="appearance-none h-[15px] w-[15px] cursor-pointer block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section6"
                />
                <input
                    onClick={()=>{scrollSection(sectionRefs.projects)}}
                    className="appearance-none h-[15px] w-[15px] cursor-pointer block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section7"
                />
            </div>
            <div ref={sectionRefs.landing}><Landing /></div>
            <div ref={sectionRefs.about}><About /></div>
            <div ref={sectionRefs.journey}><Journey /></div>
            <div ref={sectionRefs.inspiration}><Inspiration /></div>
            <div ref={sectionRefs.message}><Message /></div>
            <div ref={sectionRefs.footprint}><Footprint /></div>
            <div ref={sectionRefs.projects}><Projects /></div>
            <Member />
            <Analytics />
            <Media />
        </main>
    );
}
