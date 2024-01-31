import Link from "next/link";
import Image from "next/image";

const getData = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/profiles/president`).then(
        (response) => response.json()
    );
    return data;
};
export default async function President() {
    let data=await getData()
    return (
        <div id="message-section" className="w-full relative bg-message-bg bg-cover bg-right text-white">
            <div className="flex flex-col px-1 mobile:px-[10vw] py-[6vw]">
                <p className="text-2xl font-bold font-inter capitalize">Our</p>
                <h2 className="font-extrabold text-[45px] max-sm:h-[90px] max-sm:leading-[45px] text-sky-400 font-inter">
                    President
                </h2>
                <div className="w-full sm:w-[580px] h-[450px] max-md:mb-20 border-gray-400 overflow-hidden border-2 mt-[3vw] rounded-2xl relative bg-gray-950 bg-opacity-75 shadow">
                    <div className="rounded-white-scrollbar h-[400px] p-[3vw] text-white font-light text-sm overflow-y-scroll">
                        <h4 className="text-3xl text-sky-400 font-inter font-semibold mb-3">
                            {data.name}
                        </h4>
                        <h5 className="text-lg font-semibold">
                            {data.designation}
                        </h5>
                        <div className="h-px w-full bg-white my-5"></div>
                        <p className="revert-tailwind" style={{color:"white",fontSize:"small"}} key={data._id} dangerouslySetInnerHTML={{ __html:data.content}}>
                        </p>
                    </div>
                    {/* <Link
                        className="text-sky-400 w-fit font-medium absolute hover:text-sky-500 transition-colors group bottom-4 ml-10 underline"
                        href="/about/message"
                    >
                        Read more
                        <Image
                            alt="photo"
                            className="ml-2 inline group-hover:translate-x-4 transition-transform"
                            src={"/arrow-blue.svg"}
                            height={12}
                            width={25}
                        />
                    </Link> */}
                </div>
            </div>
            <div className="flex absolute text-white bottom-8 left-8 flex-col z-10">
                <p>05</p>
                <div className="h-px w-full bg-sky-400"></div>
                <p>07</p>
            </div>
        </div>
    );
}
