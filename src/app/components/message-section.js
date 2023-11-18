import Link from "next/link";
import Image from "next/image";

export default function Message() {
    return (
        <div className="h-screen w-full relative bg-message-bg bg-cover text-white">
            <div className="flex flex-col h-full gap-y-2 px-32 pt-20">
                <p className="text-2xl font-bold font-inter capitalize">Our</p>
                <h2 className="font-extrabold text-[42px] text-sky-400 font-inter">
                    President's Message
                </h2>
                <div className="w-[500px] h-[450px] border-gray-400 border-2 mt-8 rounded-2xl relative bg-none shadow">
                    <div className="rounded-white-scrollbar h-[400px] p-10 text-white font-light text-sm overflow-y-scroll">
                        <h4 className="text-3xl text-sky-400 font-inter font-semibold mb-3">
                            Shakeel Ahmad
                        </h4>
                        <h5 className="text-lg font-semibold">
                            CEO & Founder Islami Jamiat-e-Talba
                        </h5>
                        <div className="flex justify-start gap-4 my-3">
                            <Link href="#">
                                <Image
                                    alt="photo"
                                    src={"/instagram.svg"}
                                    width={20}
                                    height={50}
                                />
                            </Link>
                            <Link href="#">
                                <Image
                                    alt="photo"
                                    src={"/facebook.svg"}
                                    width={10}
                                    height={50}
                                />
                            </Link>
                            <Link href="#">
                                <Image
                                    alt="photo"
                                    src={"/twitter.svg"}
                                    width={20}
                                    height={50}
                                />
                            </Link>
                        </div>
                        <div className="h-px w-full bg-white my-5"></div>
                        <p>
                            Islami Jamiat e Talaba, True to its name, is an
                            Islamic society of Students. With a legacy of 75
                            golden years, and counting, Jamiat has groomed and
                            nurtured countless Leaders, Thinkers , Artists,
                            Scholars and Social workers who have played their
                            part in the Service of Islam and development of
                            Pakistan. In an era of materialism and selfish
                            indulgence, Jamiat calls its workers to be selfless
                            servants to the cause of Islam. In times where Islam
                            is being misrepresented by Muslims and others alike,
                            we call Muslims to inculcate Islamic values in their
                            own lives, become the beacons that lead others by
                            lighting the way themselves, and lead the Ummah
                            towards the teachings of Quran And Sunnah. In times
                            where Ummah has fallen in an inferiority complex, we
                            remind them that:
                            <br />
                            پرے ہے چرخ نیلی فام سے منزل مسلماں کی
                            <br />
                            ستارے جس کی گرد راہ ہیں، وہ کارواں تو ہے <br />
                            The journey has been long and eventful, but we must
                            be reminded in the words of Iqbal ,<br />
                            وقت فرصت ہے کہاں، کام ابھی باقی ہے
                            <br />
                            نور توحید کا اتمام ابھی باقی ہے۔
                        </p>
                    </div>
                    <Link
                        className="text-sky-400 font-medium absolute bottom-4 ml-10 underline"
                        href="#"
                    >
                        Read more
                        <Image
                            alt="photo"
                            className="ml-4 inline"
                            src={"/arrow-blue.svg"}
                            height={12}
                            width={25}
                        />
                    </Link>
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
