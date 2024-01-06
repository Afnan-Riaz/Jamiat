import Image from "next/image";


const getData=async ()=>{
    const data = await fetch("http://localhost:3000/api/about/team").then((response) =>
        response.json()
    );
    return data;
}
async function Team() {
    let data=await getData();
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center">
                <h1 className="text-5xl text-white text-center font-semibold font-inter">
                    Our Team
                </h1>
            </div>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {data.map((member)=>(
                    <div key={member._id} class="p-4 lg:w-1/4 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center">
                            <Image
                                alt="team"
                                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                width={300}
                                height={300}
                                src={member.photo}
                            />
                            <div class="w-full">
                                <h2 class="font-medium text-lg text-gray-900">
                                    {member.name}
                                </h2>
                                <h3 class="text-gray-500 mb-3">{member.role}</h3>
                                <p class="mb-4">
                                    {member.bio}
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

export default Team;
