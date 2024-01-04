import { Inter, Tiro_Bangla } from 'next/font/google'
import './globals.css'
import Headers from '@/components/Headers/Headers'
import Footer from '@/components/Footer/Footer'
import FixedSocialMedia from '@/components/Share/FixedSocialMedia/FixedSocialMedia'
import ToastRapper from '@/components/Share/ToastRapper/ToastRapper'

const inter = Inter({ subsets: ['latin'] })
const tiro = Tiro_Bangla({ subsets: ["bengali"], weight: ["400"] })

export const metadata = {
  title: 'The Last News',
  description: 'News Portal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
      <body className={`${inter.className} ${tiro}`}>
        <div >
          <Headers />
          <div className=" hidden lg:flex fixed right-0 lg:top-32 bottom-0   p-3 z-50 ">
            <FixedSocialMedia />
          </div>
          {children}
          <ToastRapper />
          <Footer />
        </div>
      </body>
    </html>
  )
}
