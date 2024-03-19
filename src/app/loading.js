import Image from "next/image";

function Loading() {
    return (
        <div className="flex h-screen w-screen items-center mr-4 justify-center bg-gray-50">
            <div className="relative">
                <div className="absolute h-20 w-20 animate-pulse ">
                    <Image
                        src="/icons/jamiat-logo.svg"
                        alt="logo"
                        width={80}
                        height={80}
                    />
                </div>
            </div>
        </div>
    );
}

export default Loading;
