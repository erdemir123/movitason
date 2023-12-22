import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Tavk from '@/components/Tavk'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
          <Header/>
          <Nav/>
          <div className='flex justify-center items-center h-[100%]'> 
            {children}
          </div>
          <Tavk/>
      </body>
    </html>
  )
}
