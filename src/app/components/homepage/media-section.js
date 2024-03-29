"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const getAudio = async () => {
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/media/audio`
    ).then((response) => response.json());
    return data;
};
const getEvents = async () => {
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/blogs/events`
    ).then((response) => response.json());
    return data;
};
const getVideos = async () => {
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/media/videos`
    ).then((response) => response.json());
    return data;
};
const getReleases = async () => {
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/blogs/releases`
    ).then((response) => response.json());
    return data;
};

export default function Media() {
    const [activeTabMedia, setActiveTabMedia] = useState(1);
    const [activeTabSocial, setActiveTabSocial] = useState(2);
    const [audio, setAudio] = useState([]);
    const [videos, setVideos] = useState([]);
    const [releases, setReleases] = useState([]);
    const [events, setEvents] = useState([]);
    const formatDate = (date) => {
        let d = new Date(date);
        const formattedDate = d.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
        return formattedDate;
    };
    const formatDateTime = (d) => {
        const date = new Date(d).toLocaleString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
        return date;
    };

    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = "https://platform.twitter.com/widgets.js";
    //     script.async = true;
    //     document.head.appendChild(script);

    //     return () => {
    //         document.head.removeChild(script);
    //     };
    // }, []);
    useEffect(() => {
        async function fetchData() {
            let releaseData = await getReleases();
            setReleases(releaseData);
            let eventsData = await getEvents();
            setEvents(eventsData);
            let audioData = await getAudio();
            setAudio(audioData);
            let videoData = await getVideos();
            setVideos(videoData);
        }
        fetchData();
    }, []);
    return (
        <div className="w-full bg-media-bg bg-cover">
            <div className="w-full flex flex-wrap py-20 gap-5 justify-center">
                <div className="w-[350px] h-fit rounded-xl overflow-hidden">
                    <div className="w-full flex text-white text-sm font-semibold">
                        <div className="flex-1">
                            <input
                                type="radio"
                                id="press"
                                name="tab"
                                value={"press"}
                                className="peer hidden"
                                checked={activeTabMedia === 1}
                                onChange={() => setActiveTabMedia(1)}
                            />
                            <label
                                className="px-2 py-3 w-full flex justify-center bg-blue-900 peer-checked:bg-blue-950 cursor-pointer"
                                htmlFor="press"
                            >
                                Press Release
                            </label>
                        </div>
                        <div className="flex-1">
                            <input
                                type="radio"
                                id="audio"
                                name="tab"
                                value={"audio"}
                                className="peer hidden"
                                checked={activeTabMedia === 2}
                                onChange={() => setActiveTabMedia(2)}
                            />
                            <label
                                className="px-3 py-3 w-full flex justify-center border-x border-black bg-blue-900 peer-checked:bg-blue-950 cursor-pointer"
                                htmlFor="audio"
                            >
                                Audio
                            </label>
                        </div>
                        <div className="flex-1">
                            <input
                                type="radio"
                                id="video"
                                name="tab"
                                value={"video"}
                                className="peer hidden"
                                checked={activeTabMedia === 3}
                                onChange={() => setActiveTabMedia(3)}
                            />
                            <label
                                className="px-3 py-3 w-full flex justify-center bg-blue-900 peer-checked:bg-blue-950 cursor-pointer"
                                htmlFor="video"
                            >
                                Video
                            </label>
                        </div>
                    </div>
                    <div className="h-[630px] max-h-[90vh]  w-full relative">
                        <div
                            className="bg-white absolute h-full w-full overflow-y-auto p-5"
                            hidden={activeTabMedia != 1}
                        >
                            {releases.map((release) => (
                                <div
                                    key={release._id}
                                    className="py-3 border-b-2 border-neutral-300"
                                >
                                    <Image
                                        alt="photo"
                                        src={`/images${release.image}`}
                                        height={200}
                                        width={500}
                                    />
                                    <p className="text-sm my-2">
                                        {formatDate(release.date)}
                                    </p>
                                    <h3 className="text-lg font-semibold">
                                        {release.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                        <div
                            className="bg-white absolute h-full w-full overflow-y-auto p-5"
                            hidden={activeTabMedia != 2}
                        >
                            {audio.map((aud) => (
                                <div
                                    key={aud._id}
                                    className="w-full bg-neutral-200 p-2 px-3 my-3 rounded-md"
                                >
                                    <p className="text-lg font-semibold">
                                        {aud.title}
                                    </p>
                                    <audio
                                        className="mt-3 w-full"
                                        src={`/audio${aud.link}`}
                                        controls
                                    ></audio>
                                </div>
                            ))}
                        </div>
                        <div
                            className="bg-white absolute h-full w-full overflow-y-auto p-5"
                            hidden={activeTabMedia != 3}
                        >
                            {videos.map((video) => (
                                <iframe
                                    key={video._id}
                                    className="w-full mb-4 h-48 rounded-lg"
                                    src={video.link}
                                    title="YouTube video player"
                                    allow="accelerometer; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    loading="lazy"
                                ></iframe>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-[350px] h-fit rounded-xl overflow-hidden">
                    <div className="py-2 w-full flex justify-center items-center bg-blue-900 text-white text-lg font-semibold">
                        Events
                    </div>
                    <div className="h-[630px] max-h-[90vh] w-full bg-white">
                        <div className="w-full h-full p-5 mb-4 overflow-y-auto">
                            {events.map((event) => (
                                <div
                                    key={event._id}
                                    className="py-3 border-b-2 border-neutral-300"
                                >
                                    <Image
                                        className="w-full"
                                        src={`/images${event.image}`}
                                        height={400}
                                        width={400}
                                        alt="event"
                                    />
                                    <h3 className="font-semibold my-2 text-lg">
                                        {event.title}
                                    </h3>
                                    <div>
                                        <div className="flex gap-1">
                                            <Image
                                                src={"/icons/clock.svg"}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                            <p>{formatDateTime(event.date)}</p>
                                        </div>
                                        <div className="flex gap-1">
                                            <Image
                                                src={"icons/map-pin.svg"}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                            <p>{event.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-[350px] h-fit rounded-xl overflow-hidden">
                    <div className="w-full flex gap-1 text-white text-sm font-semibold">
                        <div className="py-2 w-full flex-[3_3_0%] rounded-t-xl mr-2 flex justify-center items-center bg-blue-900 text-white text-lg font-semibold">
                            Social Stream
                        </div>
                        {/* <div className="flex-1">
                            <input
                                type="radio"
                                id="twitter"
                                name="social"
                                value={"twitter"}
                                className="peer hidden"
                                checked={activeTabSocial === 1}
                                onChange={() => setActiveTabSocial(1)}
                            />
                            <label
                                className="px-2 py-2.5 w-full rounded-t-lg flex justify-center bg-blue-900 peer-checked:bg-blue-950 cursor-pointer"
                                htmlFor="twitter"
                            >
                                <Image
                                    alt="photo"
                                    src={"icons/twitter.svg"}
                                    height={50}
                                    width={25}
                                />
                            </label>
                        </div> */}
                        <div className="flex-1">
                            <input
                                type="radio"
                                id="facebook"
                                name="social"
                                value={"facebook"}
                                className="peer hidden"
                                checked={activeTabSocial === 2}
                                onChange={() => setActiveTabSocial(2)}
                            />
                            <label
                                className="px-2 py-2.5 w-full rounded-t-lg flex justify-center bg-blue-900 peer-checked:bg-blue-950 cursor-pointer"
                                htmlFor="facebook"
                            >
                                <Image
                                    alt="photo"
                                    src={"icons/facebook.svg"}
                                    height={50}
                                    width={12}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="h-[630px] max-h-[90vh]  w-full relative">
                        {/* <div
                            className="bg-white absolute h-full w-full"
                            hidden={activeTabSocial != 1}
                        >
                            <Link
                                className="twitter-timeline"
                                data-width="350"
                                data-height="650"
                                href="https://twitter.com/JamiatPK?ref_src=twsrc%5Etfw"
                            >
                                Tweets by JamiatPK
                            </Link>
                        </div> */}
                        <div
                            className="bg-white absolute h-full w-full"
                            hidden={activeTabSocial != 2}
                        >
                            <iframe
                                className="border-0 h-full w-full overflow-hidden"
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FJamiatPK%2F&tabs=timeline&width=350&height=650&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:w-5/6 w-full relative rounded-2xl h-fit py-11 -mb-20 z-100 mx-auto bg-subscribe-bg bg-cover flex flex-col md:flex-row justify-center gap-y-5 md:justify-between items-center px-2 mobile:px-12">
                <h5 className="font-inter text-2xl font-extrabold text-white">
                    Subscribe for newsletter
                </h5>
                <div className="max-w-1/2 flex items-center bg-white py-2 px-4 rounded-lg">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Enter your mail"
                    />
                    <button
                        className="flex-shrink-0 bg-red-600 text-base font-inter text-white py-3 px-4 -mr-1 rounded-md"
                        type="button"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}
