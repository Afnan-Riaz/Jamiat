import Image from "next/image";

const getData = async () => {
    const data = await fetch("http://localhost:3000/api/media/images").then(
        (response) => response.json()
    );
    return data;
};

async function Images() {
    let data = await getData();
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center">
                <h1 className="text-5xl text-white text-center font-semibold font-inter">
                    Image Gallery
                </h1>
            </div>
            <div className="container px-5 py-24 mx-auto text-gray-600">
                <div className="flex flex-wrap -m-4">
                    {data.map((image) => (
                        <div key={image._id} className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <Image
                                    width={500}
                                    height={500}
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={image.link}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white transition-opacity opacity-0 hover:opacity-100">
                                    <h1 className="text-lg font-medium text-blue-700 mb-3">
                                        {image.title}
                                    </h1>
                                    <p className="leading-relaxed">
                                        {image.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Images;
