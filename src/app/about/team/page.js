import Image from "next/image";
import { connectionStr } from "@/utils/db";
import { Profiles } from "@/utils/model/profilesModel";
import mongoose from "mongoose";

export const revalidate = 0;

const getData = async () => {
    await mongoose.connect(connectionStr);
    const data = await Profiles.find({ type: { $in: ["team", "president"] } });
    return data;
};

async function Team() {
    let data = await getData();
    const president = data.find((obj) => obj.type === "president");
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center">
                <h1 className="text-5xl text-white text-center font-semibold font-inter">
                    Our Team
                </h1>
            </div>
            <div className="container px-5 py-16 mx-auto">
                <div className="flex w-full justify-center gap-8">
                    <div className="flex flex-col items-center min-w-fit gap-4 mb-8">
                        <Image
                            alt="team"
                            className="flex-shrink-0 rounded-lg w-96 h-96 object-cover object-top"
                            width={300}
                            height={300}
                            src={president.image}
                        />
                        <div className="max-w-96">
                            <h2 className="font-medium text-2xl text-center text-gray-900">
                                {president.name}
                            </h2>
                            <h3 className="text-black mb-3 text-center text-xl">
                                {president.designation}
                            </h3>
                        </div>
                    </div>
                    {/* <p className="max-w-[430px]">{president.content}</p> */}

                </div>
                <div className="flex flex-wrap -m-4">
                    {data.map((member) =>
                        member.type == "team" ? (
                            <div
                                key={member._id}
                                className="p-4 lg:w-1/4 md:w-1/2"
                            >
                                <div className="h-full flex flex-col items-center text-center">
                                    <Image
                                        alt="team"
                                        className="flex-shrink-0 rounded-lg w-72 h-56 object-cover object-top mb-4"
                                        width={300}
                                        height={300}
                                        src={member.image}
                                    />
                                    <div className="w-full">
                                        <h2 className="font-medium text-lg text-gray-900">
                                            {member.name}
                                        </h2>
                                        <h3 className="text-gray-500 mb-3">
                                            {member.designation}
                                        </h3>
                                        <p className="mb-4">{member.content}</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default Team;
