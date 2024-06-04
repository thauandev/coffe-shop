import { Metadata } from 'next'
import { Baloo_2, Roboto_Condensed } from 'next/font/google'
import Header from './components/Header'
import { CartProvider } from './contexts/CartContext'
import { FormProvider } from './contexts/FormContext'
import './globals.css'

// interface RootLayoutProps {
//   children: React.ReactNode
// }

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
        <FormProvider>
          <CartProvider>
            <div className="w-full mx-auto">
              <Header />
              {children}
              {checkout}
            </div>
          </CartProvider>
        </FormProvider>
      </body>
    </html>
  )
}
