import type { AppProps } from 'next/app'
import { Quicksand } from 'next/font/google'
import { MainLayout } from '@/components/layouts/MainLayout'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { SWRConfig } from 'swr'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap'
})

const fetcher = async (resource: any, init: any) =>
  await fetch(resource, init).then(async (res) => await res.json())

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <div
        className={`${quicksand.variable} font-medium font-quicksand text-content`}
      >
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </div>
    </SWRConfig>
  )
}
