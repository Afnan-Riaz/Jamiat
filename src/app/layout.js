import Header from './components/header'
import './globals.css'



export const metadata = {
  title: 'Islami Jamiat Talaba',
  description: 'Developed by Afnan Riaz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='m-0'>
        <Header/>
        <div className="top-[40%] left-8 fixed flex flex-col gap-4 z-10">
                <input
                    className="appearance-none h-[15px] w-[15px] block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section1"
                />
                <input
                    className="appearance-none h-[15px] w-[15px] block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section2"
                />
                <input
                    className="appearance-none h-[15px] w-[15px] block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section3"
                />
                <input
                    className="appearance-none h-[15px] w-[15px] block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section4"
                />
                <input
                    className="appearance-none h-[15px] w-[15px] block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section5"
                />
                <input
                    className="appearance-none h-[15px] w-[15px] block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section6"
                />
                <input
                    className="appearance-none h-[15px] w-[15px] block bg-none border-2 border-gray-400 rounded-full checked:border-sky-400 checked:bg-sky-400"
                    type="radio"
                    name="vertical-slider"
                    id="section7"
                />
            </div>

        {children}
        {/* <Footer/> */}
      </body>
    </html>
  )
}
