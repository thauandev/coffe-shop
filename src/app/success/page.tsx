'use client'

import { ShoppingCart } from '@phosphor-icons/react'
import Image from 'next/image'
import React, { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

const success: React.FC = () => {
  const { form } = useContext(FormContext)

  console.log(form)
  return (
    <div className="flex pt-20 max-[720px]:flex-col">
      <div className="w-6/12 h-auto flex-col  justify-center items-center px-6 max-[1024px]:px-6 max-[720px]:w-full">
        <div className="mb-6">
          <h1 className="text-3xl font-bold font-display text-yellow-300">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-lg">
            Agora é so aguardar que logo o café chegará até você
          </p>
        </div>
        <div className="w-full h-auto px-6 py-6 border-gradient rounded-sm rounded-bl-xl rounded-tr-xl flex-col flex">
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 items-center">
              <div className=" rounded-full w-7 h-7 flex items-center justify-center bg-yellow-300 ">
                <ShoppingCart color="white" size={15} weight="fill" />
              </div>
              <div className="max-[1024px]:text-sm max-[1024px]:max-w-[200px]">
                <p>
                  Entrega em {form.street}, {form.number}
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <div className=" rounded-full w-7 h-7 flex items-center justify-center bg-yellow-300 ">
                <ShoppingCart color="white" size={15} weight="fill" />
              </div>
              <div className="flex flex-col max-[1024px]:text-sm">
                <p>Previsao de entrega</p>
                <p>20min - 30min</p>
              </div>
            </div>

            <div className="flex gap-2 items-center ">
              <div className=" rounded-full w-7 h-7 flex items-center justify-center bg-yellow-300 ">
                <ShoppingCart color="white" size={15} weight="fill" />
              </div>
              <div className="flex flex-col max-[1024px]:text-sm">
                <p>Pagamento na entrega</p>
                <p>{form.paymentType}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-6/12 max-[720px]:w-full items-center ml-5">
        <div className="max-[720px]:w-full max-[1024px]:flex max-[1024px]:mt-10">
          <Image alt="coffe" src={'/success.png'} width={450} height={450} />
        </div>
      </div>
    </div>
  )
}

export default success
