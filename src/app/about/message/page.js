import Image from "next/image";

const getData=async ()=>{
    const data = await fetch("http://localhost:3000/api/about/message").then((response) =>
        response.json()
    );
    return data;
}

async function Message() {
    let data=await getData();
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover mb-20 flex items-center justify-center">
                <h1 className="text-5xl text-white text-center font-semibold font-inter">
                    Our Message
                </h1>
            </div>
            {data.map((section,index)=>(<div>
                <div key={section._id} className={`flex gap-10 lg:px-28 px-10 pb-20 justify-between items-center ${index%2==0?'':'flex-row-reverse'}`}>
                    <div className="w-fit">
                        <h2 className="font-semibold text-4xl mb-4 text-blue-700">{section.designation}</h2>
                        <h4 className="font-medium text-2xl">{section.name}</h4>
                        <Image className="-ml-10" src={"/quotes.svg"} width={70} height={100}/>
                        <p className="max-w-[500px] italic">{section.message}</p>
                    </div>
                    <div className="w-fit rounded-full overflow-hidden">
                        <Image src={section.photo} height={500} width={500} alt="photo"/>
                    </div>
                </div>
            </div>))}
        </div>
    );
}

export default Message;
