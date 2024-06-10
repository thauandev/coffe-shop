'use client'

import React, { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

const success: React.FC = () => {
  const { form } = useContext(FormContext)

  console.log(form)
  return (
    <div className="flex pt-20">
      <div className="w-6/12 h-auto flex-col border-gradient rounded-sm rounded-bl-xl rounded-tr-xl  justify-center items-center px-6 max-[720px]:px-6">
        <h1 className="text-3xl font-bold font-display text-yellow-300">
          Uhu! Pedido confirmado
        </h1>
        <p className="text-lg">
          Agora é so aguardar que logo o café chegará até você
        </p>
      </div>
      <div></div>
    </div>
  )
}

export default success
