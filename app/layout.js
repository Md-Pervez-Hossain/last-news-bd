import { Inter, Noto_Sans_Bengali } from 'next/font/google'

import '@splidejs/react-splide/css';
import './globals.css'
import Headers from '@/components/Headers/Headers'
import Footer from '@/components/Footer/Footer'
import FixedSocialMedia from '@/components/Share/FixedSocialMedia/FixedSocialMedia'
import ToastRapper from '@/components/Share/ToastRapper/ToastRapper'
import { UseRedux } from './Providers';

const inter = Inter({ subsets: ['latin'] })
const noto = Noto_Sans_Bengali({ subsets: ["bengali"], weight: ["400", "500", "600"] })

export const metadata = {
  title: 'The Last News',
  description: 'News Portal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
      <body className={`${inter.className}${noto.className} overflow-x-hidden`}>

        <UseRedux>
          <Headers />
          <div className=" hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2   p-3 z-50 ">
            <FixedSocialMedia />
          </div>
          {children}
          <ToastRapper />
          <Footer />
        </UseRedux>

      </body>
    </html>
  )
}
