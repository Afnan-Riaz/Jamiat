import Image from "next/image";
import Link from "next/link";
export default function Books() {
    return (
        <section className="text-gray-600">
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center bg-center">
                <h1 className="text-5xl text-white font-semibold font-inter">
                    Our Books
                </h1>
            </div>
            <div className="container pt-12 pb-24 mx-auto">
                <div className="flex flex-wrap justify-center gap-6">
                    <Link href={"http://www.tazkeer.org/literature/read/dastoor-islami-jamiat-talaba/1701"} className="h-[500px] mb-6 w-fit hover:brightness-90 transition-all md:rounded-lg rounded-3xl overflow-hidden">
                        <Image
                            width={1000}
                            height={500}
                            className="h-full w-full object-contain object-center"
                            src="/magazine.png"
                            alt="blog"
                        />
                    </Link>
                    <Link href={"http://www.tazkeer.org/literature/read/dastoor-islami-jamiat-talaba/1701"} className="h-[500px] mb-6 w-fit hover:brightness-90 transition-all md:rounded-lg rounded-3xl overflow-hidden">
                        <Image
                            width={1000}
                            height={500}
                            className="h-full w-full object-contain object-center"
                            src="/magazine.png"
                            alt="blog"
                        />
                    </Link>
                    <Link href={"http://www.tazkeer.org/literature/read/dastoor-islami-jamiat-talaba/1701"} className="h-[500px] mb-6 w-fit hover:brightness-90 transition-all md:rounded-lg rounded-3xl overflow-hidden">
                        <Image
                            width={1000}
                            height={500}
                            className="h-full w-full object-contain object-center"
                            src="/magazine.png"
                            alt="blog"
                        />
                    </Link>
                    <Link href={"http://www.tazkeer.org/literature/read/dastoor-islami-jamiat-talaba/1701"} className="h-[500px] mb-6 w-fit hover:brightness-90 transition-all md:rounded-lg rounded-3xl overflow-hidden">
                        <Image
                            width={1000}
                            height={500}
                            className="h-full w-full object-contain object-center"
                            src="/magazine.png"
                            alt="blog"
                        />
                    </Link>
                    <Link href={"http://www.tazkeer.org/literature/read/dastoor-islami-jamiat-talaba/1701"} className="h-[500px] mb-6 w-fit hover:brightness-90 transition-all md:rounded-lg rounded-3xl overflow-hidden">
                        <Image
                            width={1000}
                            height={500}
                            className="h-full w-full object-contain object-center"
                            src="/magazine.png"
                            alt="blog"
                        />
                    </Link>
                    <Link href={"http://www.tazkeer.org/literature/read/dastoor-islami-jamiat-talaba/1701"} className="h-[500px] mb-6 w-fit hover:brightness-90 transition-all md:rounded-lg rounded-3xl overflow-hidden">
                        <Image
                            width={1000}
                            height={500}
                            className="h-full w-full object-contain object-center"
                            src="/magazine.png"
                            alt="blog"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
