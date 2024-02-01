"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
export default function Header() {
    const menuRef = useRef(null);
    const handleNavExpand = (e) => {
        const cheveron = e.currentTarget.querySelector(".cheveron");
        if (cheveron) cheveron.style.transform = "rotate(180deg)";
        const item = e.currentTarget.querySelector(".navItem");
        const menu = item.querySelector(".navMenu");
        if (menu) {
            menu.style.maxHeight = "160px";
        }
    };
    const handleNavCollapse = (e) => {
        const cheveron = e.currentTarget.querySelector("img");
        if (cheveron) cheveron.style.transform = "rotate(0deg)";
        const item = e.currentTarget.querySelector(".navItem");
        const menu = item.querySelector(".navMenu");
        if (menu) {
            menu.style.maxHeight = "0px";
        }
    };
    return (
        <header className="text-white bg-none z-10 relative h-24 sm:pt-0 pt-4">
            <div className="hidden sm:flex h-8 p-1 text-xs bg-sky-600 bg-opacity-10 pr-7 backdrop-blur-[22px] items-center justify-end gap-6">
                <div className="flex justify-evenly gap-4">
                    <Link href="https://www.instagram.com/jamiatpk/">
                        <Image
                            alt="icon"
                            src={"/instagram.svg"}
                            width={20}
                            height={50}
                        />
                    </Link>
                    <Link href="https://www.facebook.com/JamiatPK/">
                        <Image
                            alt="icon"
                            src={"/facebook.svg"}
                            width={10}
                            height={50}
                        />
                    </Link>
                    <Link href="https://www.youtube.com/JamiatPK">
                        <Image
                            alt="icon"
                            src={"/youtube.svg"}
                            width={20}
                            height={50}
                        />
                    </Link>
                    <Link href="https://twitter.com/JamiatPK">
                        <Image
                            alt="icon"
                            src={"/twitter.svg"}
                            width={20}
                            height={50}
                        />
                    </Link>
                </div>
                <Link href={"tel:6031112298"}>+92 333 1234567</Link>
                <div className="h-5 w-px bg-white"></div>
                <Link href="mailto:info@jamiat.org">info@jamiat.org</Link>
            </div>
            <nav className=" flex px-7 justify-between items-center">
                <Link href="/">
                    <div className="mr-2 cursor-pointer">
                        <Image
                            alt="photo"
                            className="inline"
                            src={"/jamiat-logo.svg"}
                            width={65}
                            height={65}
                        />
                        <span className=" font-semibold hidden laptop12:inline laptop13:after:content-['Pakistan']">
                            Islami Jamiat-e-Talaba&nbsp;
                        </span>
                    </div>
                </Link>
                <div className="flex items-center space-x-[2vw] ml-auto">
                    <Link
                        className="hidden lg:block hover:text-gray-200"
                        href="/"
                    >
                        Home
                    </Link>
                    <div
                        onMouseEnter={handleNavExpand}
                        onMouseLeave={handleNavCollapse}
                        className="hidden lg:block relative"
                    >
                        <div className="navItem flex flex-col">
                            <Link
                                className="flex gap-2 items-center pr-[1.5px] hover:text-gray-200"
                                href="/"
                            >
                                About Us
                                <Image
                                    alt="photo"
                                    className="cheveron h-3 transition-transform duration-300"
                                    src={"/cheveron.svg"}
                                    width={13}
                                    height={13}
                                />
                            </Link>
                            <div className="navMenu overflow-hidden max-h-0 transition-all duration-500 w-max bg-slate-700 absolute rounded-md top-6">
                                <ul className="m-4">
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm bg-white"></div>
                                        <Link
                                            className="hover:text-gray-200"
                                            href={"/about/islami-jamiat-talaba"}
                                        >
                                            Islami Jamiat Talaba
                                        </Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm bg-white"></div>
                                        <Link
                                            className="hover:text-gray-200"
                                            href={"/about/team"}
                                        >
                                            Our Team
                                        </Link>
                                    </li>
                                    {/* <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm bg-white"></div>
                                        <Link
                                            className="hover:text-gray-200"
                                            href={"/about/message"}
                                        >
                                            Our Message
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        onMouseEnter={handleNavExpand}
                        onMouseLeave={handleNavCollapse}
                        className="hidden lg:block relative"
                    >
                        <div className="navItem flex flex-col">
                            <Link
                                className="flex gap-2 items-center pr-[1.5px] hover:text-gray-200"
                                href="/"
                            >
                                Literature
                                <Image
                                    alt="photo"
                                    className="cheveron h-3 transition-transform duration-300"
                                    src={"/cheveron.svg"}
                                    width={13}
                                    height={13}
                                />
                            </Link>
                            <div className="navMenu overflow-hidden max-h-0 transition-all duration-500 w-40 bg-slate-700 absolute rounded-md text-white top-6">
                                <ul className="m-4">
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm bg-white"></div>
                                        <Link
                                            className="hover:text-gray-200"
                                            href="/literature/blogs"
                                        >
                                            Blogs
                                        </Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm bg-white"></div>
                                        <Link
                                            className="hover:text-gray-200"
                                            href="/literature/books"
                                        >
                                            Books
                                        </Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm bg-white"></div>
                                        <Link
                                            className="hover:text-gray-200"
                                            href="/literature/magazine"
                                        >
                                            Magazine
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Link
                        className="hidden lg:block hover:text-gray-200"
                        href="#"
                    >
                        Alumni
                    </Link>
                    <Link
                        className="hidden lg:block hover:text-gray-200"
                        href="/projects"
                    >
                        Our Projects
                    </Link>
                    <div
                        onMouseEnter={handleNavExpand}
                        onMouseLeave={handleNavCollapse}
                        className="hidden lg:block relative"
                    >
                        <div className="navItem flex flex-col">
                            <Link
                                className="flex gap-2 items-center pr-[1.5px] hover:text-gray-200"
                                href="/"
                            >
                                Media & News
                                <Image
                                    alt="photo"
                                    className="cheveron h-3 transition-transform duration-300"
                                    src={"/cheveron.svg"}
                                    width={13}
                                    height={13}
                                />
                            </Link>
                            <div className="navMenu overflow-hidden max-h-0 transition-all duration-500 w-40 bg-slate-700 absolute rounded-md text-white top-6">
                                <ul className="m-4">
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm bg-white"></div>
                                        <Link
                                            className="hover:text-gray-200"
                                            href="/media/images"
                                        >
                                            Images
                                        </Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm bg-white"></div>
                                        <Link
                                            className="hover:text-gray-200"
                                            href="/media/audio"
                                        >
                                            Audio
                                        </Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm bg-white"></div>
                                        <Link
                                            className="hover:text-gray-200"
                                            href="/media/videos"
                                        >
                                            Videos
                                        </Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm bg-white"></div>
                                        <Link
                                            className="hover:text-gray-200"
                                            href="/media/press"
                                        >
                                            Press Release
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Link href="/join">
                        <button className="hover:bg-red-700 transition-colors w-[8vw] h-[3vw] min-w-[75px] min-h-[35px] bg-red-600 rounded-md">
                            Join Us
                        </button>
                    </Link>
                    <Link className="!ml-2" href="/donate">
                        <button className="hover:border-2 hover:text-gray-200 w-[8vw] h-[3vw] min-w-[75px] min-h-[35px] border rounded-md">
                            Donate
                        </button>
                    </Link>
                </div>
                <div
                    onClick={() => {
                        menuRef.current.style.width = "60%";
                    }}
                    className="inline lg:hidden ml-6"
                >
                    <Image
                        alt="photo"
                        src={"/hamburger.svg"}
                        width={30}
                        height={30}
                    />
                </div>
                <div
                    ref={menuRef}
                    className="h-screen overflow-hidden transition-all fixed top-0 right-0 bg-gray-700 w-0"
                >
                    <Image
                        onClick={() => {
                            menuRef.current.style.width = "0";
                        }}
                        className="float-right m-8"
                        src={"/cross.png"}
                        height={30}
                        width={30}
                        alt="photo"
                    />
                    <ul className="my-16 mx-4 space-y-5">
                        <li className="flex gap-1 leading-8 items-center">
                            <div className="h-6 w-1 rounded-sm bg-white"></div>
                            <Link
                                onClick={() => {
                                    menuRef.current.style.width = "0";
                                }}
                                className="hover:text-gray-200"
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <div className="flex gap-1 leading-8 items-center">
                                <div className="h-6 w-1 rounded-sm bg-white"></div>
                                <Link
                                    onClick={() => {
                                        menuRef.current.style.width = "0";
                                    }}
                                    className="hover:text-gray-200"
                                    href="/about"
                                >
                                    About
                                </Link>
                            </div>
                            <ul className="ml-4 text-sm">
                                <li>
                                    <Link
                                        onClick={() => {
                                            menuRef.current.style.width = "0";
                                        }}
                                        className="hover:text-gray-200"
                                        href="/about/islami-jamiat-talaba"
                                    >
                                        Islami Jamiat Talaba
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={() => {
                                            menuRef.current.style.width = "0";
                                        }}
                                        className="hover:text-gray-200"
                                        href="/about/team"
                                    >
                                        Our Team
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={() => {
                                            menuRef.current.style.width = "0";
                                        }}
                                        className="hover:text-gray-200"
                                        href="/about/message"
                                    >
                                        Our Message
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="flex gap-1 leading-8 items-center">
                                <div className="h-6 w-1 rounded-sm bg-white"></div>
                                <Link
                                    onClick={() => {
                                        menuRef.current.style.width = "0";
                                    }}
                                    className="hover:text-gray-200"
                                    href="#"
                                >
                                    Literature
                                </Link>
                            </div>
                            <ul className="ml-4 text-sm">
                                <li>
                                    <Link
                                        onClick={() => {
                                            menuRef.current.style.width = "0";
                                        }}
                                        className="hover:text-gray-200"
                                        href="/literature/blogs"
                                    >
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={() => {
                                            menuRef.current.style.width = "0";
                                        }}
                                        className="hover:text-gray-200"
                                        href="/literature/books"
                                    >
                                        Books
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={() => {
                                            menuRef.current.style.width = "0";
                                        }}
                                        className="hover:text-gray-200"
                                        href="/literature/magazine"
                                    >
                                        Magazine
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <div className="flex gap-1 leading-8 items-center">
                                <div className="h-6 w-1 rounded-sm bg-white"></div>
                                <Link
                                    onClick={() => {
                                        menuRef.current.style.width = "0";
                                    }}
                                    className="hover:text-gray-200"
                                    href="/projects"
                                >
                                    Our Projects
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="flex gap-1 leading-8 items-center">
                                <div className="h-6 w-1 rounded-sm bg-white"></div>
                                <Link
                                    onClick={() => {
                                        menuRef.current.style.width = "0";
                                    }}
                                    className="hover:text-gray-200"
                                    href="#"
                                >
                                    Media & News
                                </Link>
                            </div>
                            <ul className="ml-4 text-sm">
                                <li>
                                    <Link
                                        onClick={() => {
                                            menuRef.current.style.width = "0";
                                        }}
                                        className="hover:text-gray-200"
                                        href="/media/images"
                                    >
                                        Images
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={() => {
                                            menuRef.current.style.width = "0";
                                        }}
                                        className="hover:text-gray-200"
                                        href="/media/audio"
                                    >
                                        Audio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={() => {
                                            menuRef.current.style.width = "0";
                                        }}
                                        className="hover:text-gray-200"
                                        href="/media/video"
                                    >
                                        Video
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={() => {
                                            menuRef.current.style.width = "0";
                                        }}
                                        className="hover:text-gray-200"
                                        href="/media/press"
                                    >
                                        Press Release
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
