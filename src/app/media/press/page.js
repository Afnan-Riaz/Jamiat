import Image from "next/image";
import Link from "next/link";

const getData = async () => {
    const data = await fetch("http://localhost:3000/api/blogs/releases").then(
        (response) => response.json()
    );
    return data;
};
export default async function Press() {
    const data=await getData();
    const shorten=(content)=>{
        const words = content.split(' ');
        const first50 = words.slice(0, 50).join(' ');
        return first50;
    }
    return (
        <section className="text-gray-600">
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center bg-center">
                <h1 className="text-5xl text-white font-semibold font-inter">
                    Press Release
                </h1>
            </div>
            <div className="container px-5 pt-12 pb-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {data.map((release)=>(
                    <div key={release._id} className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 md:rounded-lg rounded-3xl overflow-hidden">
                            <Image
                                width={500}
                                height={500}
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src={release.image}
                                alt="blog"
                            />
                            <div className="p-6">
                                <h1 className="text-lg font-medium text-gray-900 mb-3">
                                    {release.title}
                                </h1>
                                <p className="leading-relaxed mb-3">
                                    {shorten(release.content)}
                                </p>
                                <div className="flex items-center flex-wrap ">
                                    <Link
                                        href={`/media/press/${release.slug}`}
                                        className="text-blue-700 inline-flex items-center md:mb-2 lg:mb-0"
                                    >
                                        Read More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
