'use client'

import { CartContext } from '@/app/contexts/CartContext'
import { ShoppingCart } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

const Header: React.FC = () => {
  const { totalItems } = useContext(CartContext)

  return (
    <nav className="flex flex-row justify-between items-center py-4 gap-x-32 max-[1024px]:mx1 max-[1024px]:w-full max-[1024px]:px-4">
      <div>
        <Image src="/logo.png" alt="Logo" width={84} height={40} />
      </div>
      <Link href="/checkout">
        <div className="flex flex-row gap-x-8">
          <div className="flex flex-row justify-center align-center rounded-md bg-yellow-100 p-2 relative">
            <ShoppingCart color="#c47f17" size={15} weight="fill" />
            <div
              className="absolute rounded-full bg-yellow-300 -top-2 -right-1 
          flex w-4 h-4 justify-center items-center text-xs"
            >
              <strong className="text-gray-50">{totalItems}</strong>
            </div>
          </div>
        </div>
      </Link>
    </nav>
  )
}

export default Header
