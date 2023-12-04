"use client"
import { useState } from "react"



export default function Member() {
    const [amount,setAmount]=useState();
    const [custom,setCustom]=useState(false)
    return (
        <div id="member-section" className="lg:w-5/6 lg:mx-auto sm:mr-4 sm:ml-16 mx-2 h-fit relative flex lg:flex-row flex-col lg:pt-0 pt-8 justify-between items-center">
            <div className="max-w-[500px] flex flex-col gap-3">
                <h5 className="text-2xl font-semibold">Be the change</h5>
                <h4 className="font-inter text-4xl font-extrabold text-blue-700">Join The Journey</h4>
                <p className="font-medium text-gray-700 leading-7">
                    Jamiat is devoutly committed to building a strong and
                    developed Pakistan which is unimaginable without the trust
                    and the unflinching support of the students of Pakistan.
                    Join us and be part of the unprecedented transformation that
                    is changing the lives of all students society for better.
                    Together, let's build a strong student generation and
                    witness the rise of New Pakistan under the charismatic
                    leadership of CEO and founder Shakeel Ahmed
                </p>
                <div className="flex gap-6 mt-3">
                <button className="bg-blue-700 hover:bg-blue-800 transition-colors font-inter w-fit px-4 py-3 rounded-lg text-white">Join as volunteer</button>
                <button className="bg-green-600 hover:bg-green-700 transition-colors font-inter w-fit px-4 py-3 rounded-lg text-white">Become a member</button>
            </div></div>
            <div className="max-w-[478px] my-8 border-2 border-blue-700 rounded-3xl flex flex-col gap-4 p-[2vw] pt-6">
                <h4 className="font-inter text-2xl font-extrabold mx-auto">Make a Donation</h4>
                <div className="w-full my-2 h-px bg-gray-400"></div>
                <p className="text-lg font-semibold mb-3">Choose an amount</p>
                <div className="flex gap-4 flex-wrap gap-y-10">
                    <div>
                        <input
                            className="hidden peer"
                            type="radio"
                            id="100"
                            name="amount"
                            value={100}
                            onChange={()=>{setCustom(false); setAmount(100)}}
                        />
                        <label className="border-2 px-4 py-3 rounded-md peer-checked:font-semibold peer-checked:bg-sky-200" htmlFor="100">100 RS</label>
                    </div>
                    <div>
                        <input
                            className="hidden peer"
                            type="radio"
                            id="500"
                            name="amount"
                            value={500}
                            onChange={()=>{setCustom(false); setAmount(500)}}
                            />
                        <label className="border-2 px-4 py-3 rounded-md peer-checked:font-semibold peer-checked:bg-sky-200" htmlFor="500">500 RS</label>
                    </div>
                    <div>
                        <input
                            className="hidden peer"
                            type="radio"
                            id="1000"
                            name="amount"
                            value={1000}
                            onChange={()=>{setCustom(false); setAmount(1000)}}
                            />
                        <label className="border-2 px-4 py-3 rounded-md peer-checked:font-semibold peer-checked:bg-sky-200" htmlFor="1000">1000 RS</label>
                    </div>
                    <div>
                        <input
                            className="hidden peer"
                            type="radio"
                            id="custom"
                            name="amount"
                            value={amount}
                            onChange={()=>{setCustom(true);setAmount("")}}
                        />
                        <label className="border-2 px-4 py-3 rounded-md peer-checked:font-semibold peer-checked:bg-sky-200" htmlFor="custom">Custom</label>
                    </div>
                </div>
                <p className="text-lg font-semibold">Make custom amount</p>
                <input
                disabled={!custom}
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                    className="px-5 w-[90%] py-3 border-2 rounded-md"
                    type="number"
                    name="custom"
                    id="amount"
                    placeholder="RS 100-10000000"
                />
                <p className="text-lg font-semibold">Make it monthly!</p>
                <div className="flex gap-4 gap-y-8 my-2 flex-wrap">
                    <div>
                        <input
                            type="radio"
                            id="yes"
                            name="choice"
                            value={"yes"}
                            className="peer hidden"
                        />
                        <label className="border-2 px-7 py-3 text-sm rounded-md peer-checked:font-semibold peer-checked:bg-sky-200 peer-checked:border-sky-200" htmlFor="yes">Yes, count me in</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="no"
                            name="choice"
                            value={"no"}
                            className="peer hidden"
                        />
                        <label className="border-2 px-7 py-3 text-sm rounded-md peer-checked:font-semibold peer-checked:bg-sky-200 peer-checked:border-sky-200" htmlFor="no">No, donate once</label>
                    </div>
                </div>
                <p className="text-sm text-gray-500">
                    Start a monthly donation today to invest in the future of
                    our party
                </p>
                <button className="bg-red-600 hover:bg-red-700 transition-colors font-inter w-fit px-4 py-3 rounded-md mx-auto text-white">Donate now</button>
            </div>
        </div>
    )
}
