import Image from "next/image"


function Loading() {
  return (
<div className="flex min-h-screen w-screen items-center justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <div className="relative">
    <div className="absolute h-20 w-20 animate-pulse "><Image src="/jamiat-logo.svg" alt="logo" width={80} height={80}/>
    </div>
  </div>
</div>
  )
}

export default Loading