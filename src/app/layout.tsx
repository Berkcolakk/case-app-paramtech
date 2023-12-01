import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from '@/layouts'
import AntdProvider from '@/providers/AntdProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ParamTech',
  description: 'ParamTech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdProvider>
          <Layout>
            {children}
          </Layout>
        </AntdProvider>
      </body>
    </html>
  )
}
