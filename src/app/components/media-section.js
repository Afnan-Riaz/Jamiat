"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Media() {
    const [activeTabMedia, setActiveTabMedia] = useState(1);
    const [activeTabSocial, setActiveTabSocial] = useState(1);
    const [audio, setAudio] = useState("/audio-file.mp3");
    return (
        <div className="w-full bg-media-bg bg-cover">
            <div className="w-full flex py-20 gap-5 justify-center">
                <div className="w-[380px] h-fit rounded-xl overflow-hidden">
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
                                className="px-3 py-3 w-full flex justify-center bg-blue-900 peer-checked:bg-blue-950 cursor-pointer"
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
                    <div className="h-[630px] w-full relative">
                        <div
                            className="bg-white absolute h-full w-full p-5"
                            hidden={activeTabMedia != 1}
                        >
                            <div className="mb-2">
                                <Image
                                    alt="photo"
                                    src={"/press-release-img.png"}
                                    height={200}
                                    width={500}
                                />
                                <div className="flex justify-between mx-2 my-3">
                                    <p className="text-sm">1 June</p>
                                    <div className="flex gap-4">
                                        <Image
                                            src={"/facebook-dark.svg"}
                                            width={7}
                                            height={10}
                                        />
                                        <Image
                                            src={"/twitter-dark.svg"}
                                            width={15}
                                            height={20}
                                        />
                                        <Image
                                            src={"/linkedin-dark.svg"}
                                            width={15}
                                            height={20}
                                        />
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold">
                                    jamiat online studies and portal for
                                    students.
                                </h3>
                            </div>
                        </div>
                        <div
                            className="bg-white absolute h-full w-full p-5"
                            hidden={activeTabMedia != 2}
                        >
                            <div className="w-full bg-[#f1f3f4] p-2 px-3  rounded-md">
                                <p className="text-lg font-semibold">Audio 1</p>

                                <audio
                                    className="mt-3 w-full"
                                    src={audio}
                                    controls
                                ></audio>
                            </div>
                        </div>
                        <div
                            className="bg-white absolute h-full w-full p-5"
                            hidden={activeTabMedia != 3}
                        >
                            <iframe
                                className="w-full mb-4 h-48 rounded-lg"
                                src="https://www.youtube.com/embed/Ozcpet7-KaI?si=3JEB8LpBX84DftKQ"
                                title="YouTube video player"
                                allow="accelerometer; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="w-[380px] h-fit rounded-xl overflow-hidden">
                    <div className="py-2 w-full flex justify-center items-center bg-blue-900 text-white text-lg font-semibold">
                        Events
                    </div>
                    <div className="h-[630px] w-full bg-white">
                        <div className="w-full p-5 mb-4">
                            <Image
                                className="w-full"
                                src={"/event-1.png"}
                                height={400}
                                width={400}
                            />
                            <div className="flex my-2 text-sm justify-between">
                                <p>22 june</p>
                                <p>04:00-06:00</p>
                            </div>
                            <h3 className="font-semibold mb-2 text-lg">
                                jamiat online studies and portal for students.
                            </h3>
                            <button
                                className="w-full py-3 text-sm bg-blue-700 text-white rounded-md"
                                type="button"
                            >
                                Upcoming
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[380px] h-fit rounded-xl overflow-hidden">
                    <div className="w-full flex gap-1 text-white text-sm font-semibold">
                        <div className="py-2 w-full flex-[3_3_0%] rounded-t-xl mr-2 flex justify-center items-center bg-blue-900 text-white text-lg font-semibold">
                            Social Stream
                        </div>
                        <div className="flex-1">
                            <input
                                type="radio"
                                id="facebook"
                                name="social"
                                value={"facebook"}
                                className="peer hidden"
                                checked={activeTabSocial === 1}
                                onChange={() => setActiveTabSocial(1)}
                            />
                            <label
                                className="px-2 py-2.5 w-full rounded-t-lg flex justify-center bg-blue-900 peer-checked:bg-blue-950 cursor-pointer"
                                htmlFor="facebook"
                            >
                                <Image
                                    alt="photo"
                                    src={"facebook.svg"}
                                    height={50}
                                    width={12}
                                />
                            </label>
                        </div>
                        <div className="flex-1">
                            <input
                                type="radio"
                                id="twitter"
                                name="social"
                                value={"twitter"}
                                className="peer hidden"
                                checked={activeTabSocial === 2}
                                onChange={() => setActiveTabSocial(2)}
                            />
                            <label
                                className="px-2 py-2.5 w-full rounded-t-lg flex justify-center bg-blue-900 peer-checked:bg-blue-950 cursor-pointer"
                                htmlFor="twitter"
                            >
                                <Image
                                    alt="photo"
                                    src={"twitter.svg"}
                                    height={50}
                                    width={25}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="h-[630px] w-full relative">
                        <div
                            className="bg-white absolute h-full w-full"
                            hidden={activeTabSocial != 1}
                        >
                            <iframe
                                className="border-0 h-full w-full overflow-hidden"
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FJamiatPK%2F&tabs=timeline&width=380&height=650&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                                allowfullscreen="true"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>
                        </div>
                        <div
                            className="bg-white absolute h-full w-full"
                            hidden={activeTabSocial != 2}
                        >
                            <a class="twitter-timeline" data-width="380" data-height="650" href="https://twitter.com/JamiatPK?ref_src=twsrc%5Etfw">Tweets by JamiatPK</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[1000px] relative rounded-2xl h-36 -mb-20 z-100 mx-auto bg-subscribe-bg bg-cover flex justify-between items-center px-12">
                <h5 className="font-inter text-2xl font-extrabold text-white">
                    Subscribe for newsletter
                </h5>
                <div className="w-1/2 flex items-center bg-white py-2 px-4 rounded-lg">
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
