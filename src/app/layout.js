import Footer from './components/footer'
import Header from './components/header'
import './globals.css'



export const metadata = {
  title: 'Islami Jamiat Talaba',
  description: 'description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='m-0'>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
