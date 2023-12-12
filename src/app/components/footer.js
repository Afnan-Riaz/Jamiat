import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-gray-950 text-white">
            <div className="flex sm:flex-row flex-col justify-between gap-4 pt-36 px-2 mobile:px-[12vw]">
                <div>
                    <Image src={"/footer-logo.png"} height={120} width={100} alt="logo"/>
                    <p className="text-sm w-56 mt-4">
                        Jamiat is devoutly committed to building a strong and
                        developed Pakistan.
                    </p>
                </div>
                <div className="flex gap-12 flex-wrap lg:gap-24">
                    <div>
                        <h5 className="text-lg font-medium mb-5">Use Cases</h5>
                        <ul className="text-sm leading-8">
                            <li>Web-designers</li>
                            <li>Marketers</li>
                            <li>Small Business</li>
                            <li>Website Builder</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-medium mb-5">Resources</h5>
                        <ul className="text-sm leading-8">
                            <li>Academy</li>
                            <li>Blog</li>
                            <li>Themes</li>
                            <li>Hosting</li>
                            <li>Developers</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-medium mb-5">Company</h5>
                        <ul className="text-sm leading-8">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>FAQs</li>
                            <li>Teams</li>
                            <li><Link href={"/contactUs"}>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="h-px w-full bg-white"></div>
            <div className="py-3 flex justify-between items-center px-3 gap-3 md:px-[10vw]">
                <p className="font-light text-xs w-fit lg:w-80">© 2021 All Rights Reserved</p>
                <div className="flex flex-wrap justify-evenly gap-5">
                    <Link href="#">
                        <Image
                        className="min-w-fit"
                            alt="icon"
                            src={"/facebook.svg"}
                            width={10}
                            height={50}
                        />
                    </Link>
                    <Link href="#">
                        <Image
                        className="min-w-fit"
                            alt="icon"
                            src={"/instagram.svg"}
                            width={20}
                            height={50}
                        />
                    </Link>
                    <Link href="#">
                        <Image
                        className="min-w-fit"
                            alt="icon"
                            src={"/youtube.svg"}
                            width={20}
                            height={50}
                        />
                    </Link>
                    <Link href="#">
                        <Image
                        className="min-w-fit"
                            alt="icon"
                            src={"/twitter.svg"}
                            width={20}
                            height={50}
                        />
                    </Link>
                </div>
                <div className="text-sm flex gap-3 sm:gap-10">
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms of Use</Link>
                    <Link href="#">Site Map</Link>
                </div>
            </div>
        </div>
    );
}
