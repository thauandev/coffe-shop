'use client'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Image from 'next/image'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="flex justify-between container mx-auto pb-7 pt-2">
      <Image
        loading="eager"
        width={85}
        height={40}
        src="/logo.png"
        alt="logo"
      />
      <div className="flex gap-3">
        <div className="flex items-center gap-1 px-2 w-143 bg-purple-100 rounded">
          <div>
            <MapPin color="var(--purple)" size={20} weight="fill" />
          </div>
          <div>
            <span className="text-purple-300 font-regular ">
              Rio de Janeiro, RJ
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 px-2 w-143 bg-yellow-100 rounded">
          <ShoppingCart color="var(--yellowdark)" size={20} weight="fill" />
        </div>
      </div>
    </header>
  )
}

export default Header
