'use client'

import { MapPinLine } from '@phosphor-icons/react'

const Checkout: React.FC = () => {
  return (
    <div className="container mx-auto w-full pt-16">
      <div className="w-8/12 ">
        <h1 className="font-display font-bold pb-5">Complete seu pedido</h1>
        <div className="w-full h-auto bg-gray-50 rounded-md">
          <div className="flex pl-10 pt-10 pb-10 gap-2">
            <MapPinLine size={22} color="#DBAC2C" />
            <div className="gap-2">
              <p>Endereço de Entrega</p>
              <p className="text-sm">
                Informe o endereço onde deseja receber o seu pedido
              </p>
            </div>
          </div>
          <div className="pl-10 pb-10 gap-2">
            <input
              className="bg-gray-150 w-52 h-10 pl-2 rounded-sm border-gray-100 border"
              placeholder="CEP"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Checkout
