import Image from "next/image";

function Message() {
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover mb-20 flex items-center justify-center">
                <h1 className="text-5xl text-white text-center font-semibold font-inter">
                    Our Message
                </h1>
            </div>
            <div className="flex gap-10 lg:px-28 px-10 pb-20 justify-between items-center">
                <div className="w-1/2">
                    <h2 className="font-semibold text-4xl mb-4 text-blue-700">Founder</h2>
                    <h4 className="font-medium text-2xl">Sayed Abul Ala Maudoodi</h4>
                    <Image className="-ml-10" src={"/quotes.svg"} width={70} height={100}/>
                    <p className="max-w-[500px] italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus, quasi animi, similique earum, maiores corrupti fuga vero quaerat veniam cum culpa. Odit dolorem quo porro magnam tenetur aspernatur, repellendus laudantium minima sapiente itaque ex quis quisquam sequi suscipit ipsum fugiat. Obcaecati veritatis non sapiente aut, et temporibus nam recusandae iatis quaerat.</p>
                </div>
                <div className="w-fit rounded-full overflow-hidden">
                    <Image src={"/inspiration-photo1.png"} height={500} width={500} alt="photo"/>
                </div>
            </div>
            <div className="flex gap-10 lg:px-28 px-10 pb-20 justify-between items-center">
                <div className="w-fit rounded-full overflow-hidden">
                    <Image src={"/journey-photo1.png"} height={500} width={500} alt="photo"/>
                </div>
                <div className="w-1/2">
                    <h2 className="font-semibold text-4xl mb-4 text-blue-700">Founder</h2>
                    <h4 className="font-medium text-2xl">Sayed Abul Ala Maudoodi</h4>
                    <Image className="-ml-10" src={"/quotes.svg"} width={70} height={100}/>
                    <p className="max-w-[500px] italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus, quasi animi, similique earum, maiores corrupti fuga vero quaerat veniam cum culpa. Odit dolorem quo porro magnam tenetur aspernatur, repellendus laudantium minima sapiente itaque ex quis quisquam sequi suscipit ipsum fugiat. Obcaecati veritatis non sapiente aut, et temporibus nam recusandae iatis quaerat.</p>
                </div>
            </div>
        </div>
    );
}

export default Message;
