'use client'

import { MapPin } from '@phosphor-icons/react'
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
      <div className="flex">
        <div>
          <MapPin color="var(--purple)" size={32} weight="fill" />
        </div>
        <div>
          <span className="text-purple-200">Porto Alegre, RS</span>
        </div>
      </div>
    </header>
  )
}

export default Header
