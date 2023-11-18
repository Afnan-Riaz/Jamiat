"use client";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
    const handleNavExpand = (e) => {
        const cheveron = e.currentTarget.querySelector(".cheveron");
        if (cheveron) cheveron.style.transform = "rotate(180deg)";
        const item = e.currentTarget.querySelector(".navItem");
        const menu = item.querySelector(".navMenu");
        if (menu) menu.style.display = "block";
    };
    const handleNavCollapse = (e) => {
        const cheveron = e.currentTarget.querySelector("img");
        if (cheveron) cheveron.style.transform = "rotate(0deg)";
        const item = e.currentTarget.querySelector(".navItem");
        const menu = item.querySelector(".navMenu");
        if (menu) menu.style.display = "none";
    };
    return (
        <header className="text-white bg-none z-10 relative h-24">
            <div className="hidden sm:flex h-8 p-1 text-xs bg-sky-600 bg-opacity-10 pr-7 backdrop-blur-[22px] items-center justify-end gap-6">
                <div className="flex justify-evenly gap-4">
                    <Link href="#">
                        <Image
                            alt="icon"
                            src={"/instagram.svg"}
                            width={20}
                            height={50}
                        />
                    </Link>
                    <Link href="#">
                        <Image
                            alt="icon"
                            src={"/facebook.svg"}
                            width={10}
                            height={50}
                        />
                    </Link>
                    <Link href="#">
                        <Image
                            alt="icon"
                            src={"/youtube.svg"}
                            width={20}
                            height={50}
                        />
                    </Link>
                    <Link href="#">
                        <Image
                            alt="icon"
                            src={"/twitter.svg"}
                            width={20}
                            height={50}
                        />
                    </Link>
                </div>
                <p>+92 333 1234567</p>
                <div className="h-5 w-px bg-white"></div>
                <p>info@jamiat.org</p>
            </div>
            <nav className=" flex px-7 justify-between items-center">
                <div className="mr-2">
                    <Image
                        alt="photo"
                        className="inline"
                        src={"/jamiat-logo.svg"}
                        width={65}
                        height={65}
                    />
                    <span className=" font-semibold hidden laptop12:inline laptop13:after:content-['Pakistan']">
                        Islami Jamiat-e-Talaba
                    </span>
                </div>
                <div className="flex items-center space-x-[2vw] ml-auto">
                    <Link className="hidden lg:block" href="#">
                        Home
                    </Link>
                    <div
                        onMouseEnter={handleNavExpand}
                        onMouseLeave={handleNavCollapse}
                        className="hidden lg:block relative"
                    >
                        <div className="navItem flex flex-col">
                            <Link className="flex gap-2" href="#">
                                About Us
                                <Image
                                    alt="photo"
                                    className="cheveron"
                                    src={"/cheveron.svg"}
                                    width={13}
                                    height={13}
                                />
                            </Link>
                            <div className="navMenu hidden h-40 w-40 bg-slate-700 absolute rounded-md p-4 top-6">
                                <ul>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm  bg-white"></div>
                                        <Link href="#">About Us 1</Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm  bg-white"></div>
                                        <Link href="#">About Us 2</Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm  bg-white"></div>
                                        <Link href="#">About Us 3</Link>
                                    </li>
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
                            <Link className="flex gap-2" href="#">
                                Literature
                                <Image
                                    alt="photo"
                                    className="cheveron"
                                    src={"/cheveron.svg"}
                                    width={13}
                                    height={13}
                                />
                            </Link>
                            <div className="navMenu hidden h-40 w-40 bg-slate-700 absolute rounded-md text-white p-4 top-6">
                                <ul>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm  bg-white"></div>
                                        <Link href="#">Literature 1</Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm  bg-white"></div>
                                        <Link href="#">Literature 2</Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm  bg-white"></div>
                                        <Link href="#">Literature 3</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Link className="hidden lg:block" href="#">
                        Alumni
                    </Link>
                    <Link className="hidden lg:block" href="#">
                        Our Projects
                    </Link>
                    <div
                        onMouseEnter={handleNavExpand}
                        onMouseLeave={handleNavCollapse}
                        className="hidden lg:block relative"
                    >
                        <div className="navItem flex flex-col">
                            <Link className="flex gap-2" href="#">
                                Media & News
                                <Image
                                    alt="photo"
                                    className="cheveron"
                                    src={"/cheveron.svg"}
                                    width={13}
                                    height={13}
                                />
                            </Link>
                            <div className="navMenu hidden h-40 w-40 bg-slate-700 absolute rounded-md text-white p-4 top-6">
                                <ul>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm  bg-white"></div>
                                        <Link href="#">News 1</Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm  bg-white"></div>
                                        <Link href="#">News 2</Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm  bg-white"></div>
                                        <Link href="#">News 3</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Link href="#">
                        <button className=" w-[8vw] h-[3vw] min-w-[75px] min-h-[35px] bg-red-600 rounded-md">
                            Join Us
                        </button>
                    </Link>
                    <Link className="!ml-2" href="#">
                        <button className="w-[8vw] h-[3vw] min-w-[75px] min-h-[35px] border rounded-md">
                            Donate
                        </button>
                    </Link>
                </div>
                <div className="inline lg:hidden ml-6">
                    <Image
                        alt="photo"
                        src={"/hamburger.svg"}
                        width={30}
                        height={30}
                    />
                </div>
            </nav>
        </header>
    );
}
