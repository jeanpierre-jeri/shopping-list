import { MainLayout } from '@/components/layouts/MainLayout'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopping List',
  description: 'Organize your shopping with ease and efficiency using our shopping list app. Create and share shopping lists, receive reminders, and track your expenses while you shop. Download our free app now and save time and money on your daily shopping!'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
