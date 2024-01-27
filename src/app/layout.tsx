import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GraphqlProvider } from '@/contexts/index'
import '@/styles/index.css'
import { StoreProvider } from '@/store/StoreProvider'
import DashboardLayout from '@/components/templates/Dashboard'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clinical Home',
  description: 'Web Application for management medical clinic',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <GraphqlProvider>
      <StoreProvider>
        <html lang="en">
          <body className={inter.className}>
            <DashboardLayout>{children}</DashboardLayout>
            <div id="portal"></div>
          </body>
        </html>
      </StoreProvider>
    </GraphqlProvider>
  )
}
