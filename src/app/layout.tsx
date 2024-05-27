import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Baloo_2, Roboto_Condensed } from 'next/font/google'
import { CartProvider } from './contexts/CartContext'
import './globals.css'

interface RootLayoutProps {
  children: React.ReactNode
}

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-baloo-2',
})
const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Coffe Delivery',
  description: 'Coffe Delivery app',
}

const HeaderNoSSR = dynamic(() => import('./components/Header'), { ssr: false })
export default function RootLayout({
  children,
  checkout,
}: {
  children: React.ReactNode
  checkout: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" className={(roboto.variable, baloo.variable)}>
      <body>
        <CartProvider>
          <div className="w-full mx-auto">
            <HeaderNoSSR />
            {children}
            {checkout}
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
