import type { AppProps } from 'next/app'
import { Quicksand } from 'next/font/google'
import { MainLayout } from '@/components/layouts'
import '@/styles/globals.css'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${quicksand.variable} font-medium font-quicksand`}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  )
}
