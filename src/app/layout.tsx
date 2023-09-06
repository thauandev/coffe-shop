import type { Metadata } from 'next'
import { Baloo_2, Roboto_Condensed } from 'next/font/google'
import Header from './components/Header'
import './globals.css'

interface RootLayoutProps {
  children: React.ReactNode
}

const baloo = Baloo_2({ subsets: ['latin'], weight: ['700', '800'] })
const roboto = Roboto_Condensed({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Coffe Delivery',
  description: 'Coffe Delivery app',
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className={(baloo.className, roboto.className)}>
        <Header />
        {children}
      </body>
    </html>
  )
}
