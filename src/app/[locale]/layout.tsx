import './globals.css'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import Layout from '../../components/Layout'
import { Providers } from './providers'
import { locales } from '@/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const isValidLocale = locales.some((cur) => cur === locale)
  if (!isValidLocale) notFound()

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextTopLoader color={'#ff8b46'} showSpinner={false} />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
