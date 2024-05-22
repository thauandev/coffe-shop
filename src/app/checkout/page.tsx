'use client'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
} from '@phosphor-icons/react'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { CartContext } from '../contexts/CartContext'

interface Fields {
  cep: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
}
const Checkout: React.FC = () => {
  const [paymentType, setpaymentType] = useState([
    {
      id: 1,
      isSelected: false,
      name: 'CARTÃO DE CRÉDITO',
    },
    {
      id: 2,
      isSelected: false,
      name: 'CARTÃO DE DÉBITO',
    },
    {
      id: 3,
      isSelected: false,
      name: 'DINHEIRO',
    },
  ])

  const { cart } = useContext(CartContext)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit: SubmitHandler<FieldValues> = (data: Fields | {}) => {
    console.log(data)
  }

  const handlePaymentType = (id: number): void => {
    setpaymentType(
      paymentType.map(item =>
        item.id === id
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false }
      )
    )
  }

  console.log(cart)
  return (
    <div
      className="container mx-auto w-full pt-16 flex"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-7/12 ">
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
          <div className="px-10 pb-10 gap-2 flex flex-col">
            <input
              className="bg-gray-150 w-52 h-10 pl-2 rounded-sm border-gray-100 border"
              placeholder="CEP"
              {...(register('cep'), { required: true })}
            />
            <input
              className="bg-gray-150 w-full h-10 pl-2 rounded-sm border-gray-100 border"
              placeholder="Rua"
              {...(register('street'), { required: true })}
            />
            <div className="flex gap-2">
              <input
                className="bg-gray-150 w-52 h-10 pl-2 rounded-sm border-gray-100 border"
                placeholder="Número"
                {...(register('number'), { required: true })}
              />
              <input
                className="bg-gray-150 w-2/3 h-10 pl-2 rounded-sm border-gray-100 border"
                placeholder="Complemento"
                {...(register('complement'), { required: true })}
              />
            </div>

            <div className="flex gap-2">
              <input
                className="bg-gray-150 w-52 h-10 pl-2 rounded-sm border-gray-100 border"
                placeholder="Bairro"
                {...(register('neighborhood'), { required: true })}
              />
              <input
                className="bg-gray-150 w-80 h-10 pl-2 rounded-sm border-gray-100 border"
                placeholder="Cidade"
                {...(register('city'), { required: true })}
              />
              <input
                className="bg-gray-150 w-2/12 h-10 pl-2 rounded-sm border-gray-100 border"
                placeholder="UF"
                {...(register('state'), { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="mt-3 w-full h-52 bg-gray-50 rounded-md">
          <div className="flex pl-10 pt-10 pb-10 gap-2">
            <CurrencyDollar size={22} color="#8047F8" />
            <div className="gap-2">
              <p>Pagamento</p>
              <p className="text-sm">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-5 pl-10">
            {paymentType.map(payment => (
              <button
                key={payment.id}
                className={`w-44 h-14 ${payment.isSelected ? 'bg-purple-100 border-purple-200 border' : 'bg-gray-100'} rounded-md text-xs items-center flex gap-2`}
                type="button"
                onClick={() => handlePaymentType(payment.id)}
              >
                <div className="ml-3">
                  {payment.name === 'CARTÃO DE CRÉDITO' && (
                    <CreditCard size={18} color="#8047F8" />
                  )}
                  {payment.name === 'CARTÃO DE DÉBITO' && (
                    <Bank size={18} color="#8047F8" />
                  )}
                  {payment.name === 'DINHEIRO' && (
                    <Money size={18} color="#8047F8" />
                  )}
                </div>
                <span className="pr-2">{payment.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-5/12 ml-5 ">
        <h1 className="font-display font-bold pb-5">Cafés selecionados</h1>
        <div className="w-full h-auto bg-gray-50 rounded-md flex flex-col justify-center items-center px-6">
          {cart.map(item => (
            <div className=" w-full flex align-center justify-evenly gap-5 py-6   border-b-gray-100 border-b">
              <Image
                alt="coffe"
                src={item.image}
                width={100}
                height={100}
                className="w-14 h-14"
              />
              <div>
                <p>{item.name}</p>

                <div className="flex gap-2">
                  <div className="flex gap-2 items-center bg-gray-100 rounded">
                    <button
                      type="button"
                      className="cursor-pointer pl-2"
                      onClick={() => increment(item.id)}
                    >
                      <Plus size={13} color="#8047F8" />
                    </button>

                    <span>{item.amount}</span>
                    <button
                      type="button"
                      className="cursor-pointer pr-2"
                      onClick={() => decrement(item.id)}
                    >
                      <Minus size={13} color="#8047F8" />
                    </button>
                  </div>
                  <div>
                    <span>Remover</span>
                  </div>
                </div>
              </div>
              <span>R$ {item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Checkout
