
'use client'

import { ShoppingCart } from "@phosphor-icons/react";
import Image from "next/image";



const Header: React.FC = () => {
  return(
    <nav className="flex flex-row justify-between items-center px-6 py-4 gap-x-32">
        
        <div>
            <Image src="/logo.png" alt="Logo" width={84} height={40} />
        </div>

       
        <div className="flex flex-row gap-x-8">
            <div className="flex flex-row justify-center align-center rounded-md bg-yellow-100 p-2">
            <ShoppingCart color="#c47f17" size={15} weight="fill" />
            </div>
        </div>
    </nav>

  )
}

export default Header;