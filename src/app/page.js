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

export default function Home() {
    return (
        <main>
            <div className="top-[40%] left-8 fixed hidden sm:flex flex-col gap-4 z-10">
                <input
                    className="appearance-none h-[15px] w-[15px] block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section1"
                />
                <input
                    className="appearance-none h-[15px] w-[15px] block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section2"
                />
                <input
                    className="appearance-none h-[15px] w-[15px] block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section3"
                />
                <input
                    className="appearance-none h-[15px] w-[15px] block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section4"
                />
                <input
                    className="appearance-none h-[15px] w-[15px] block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section5"
                />
                <input
                    className="appearance-none h-[15px] w-[15px] block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section6"
                />
                <input
                    className="appearance-none h-[15px] w-[15px] block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section7"
                />
            </div>
            <Landing />
            <About />
            <Journey />
            <Inspiration />
            <Message />
            <Footprint />
            <Projects />
            <Member />
            <Analytics />
            <Media />
        </main>
    );
}
