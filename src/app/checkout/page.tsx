'use client'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from '@phosphor-icons/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { CartContext } from '../contexts/CartContext'
import { formatNumber } from '../utils/formatNumber'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

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
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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

  const [
    errorPaymentTypeSelectedOnSubmit,
    setErrorPaymentTypeSelectedOnSubmit,
  ] = useState(false)

  const {
    cart,
    totalValue,
    totalItems,
    deliveryTax,
    addToCartOnCheckout,
    removeItemFromCart,
    removeAmountFromCart,
  } = useContext(CartContext)

  const schema = zod.object({
    cep: zod.string().min(8, 'CEP obrigatório'),
    street: zod.string().min(1, 'Endereço obrigatório'),
    number: zod
      .number({ invalid_type_error: 'Digite somente números' })
      .max(99999, 'Número inválido')
      .min(1, 'Número obrigatório'),
    complement: zod.string().optional(),
    neighborhood: zod.string().min(1, 'Bairro obrigatório'),
    city: zod.string().min(1, 'Cidade obrigatório'),
    state: zod.string().max(2, 'Digite a UF com dois caracteres'),
  })
  // type FormData = zod.infer<typeof schema>

  const router = useRouter()

  useEffect(() => {
    if (totalItems === 0) {
      router.push('/')
    }
  }, [cart])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })
  console.log(errors)
  const onSubmit: SubmitHandler<FieldValues> = (data: Fields | {}) => {
    const verifiedPaymentType = paymentType.every(item => !item.isSelected)
    setErrorPaymentTypeSelectedOnSubmit(verifiedPaymentType)
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

  const increment = (id: number) => {
    addToCartOnCheckout(id)
  }

  const decrement = (id: number) => {
    removeAmountFromCart(id)
  }

  const handleRemove = (id: number) => {
    removeItemFromCart(id)
  }

  return (
    <form
      className="container mx-auto w-full pt-16 flex max-[1024px]:flex-col max-[1024px]:px-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {isClient && (
        <>
          <div className="w-7/12 max-[1024px]:w-full">
            <h1 className="font-display font-bold pb-5">Complete seu pedido</h1>
            <div className="w-full h-auto bg-gray-50 rounded-md">
              <div className="flex pl-10 pt-10 pb-10 gap-2 max-[1024px]:px-4">
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
                  className="bg-gray-150 w-52 h-10 pl-2 rounded-sm border-gray-100 border max-[1024px]:w-full"
                  placeholder="CEP*"
                  {...register('cep')}
                />

                <input
                  className="bg-gray-150 w-full h-10 pl-2 rounded-sm border-gray-100 border max-[1024px]:w-full"
                  placeholder="Rua*"
                  {...register('street')}
                />
                <div className="flex gap-2 max-[1024px]:flex-col">
                  <input
                    className="bg-gray-150 w-52 h-10 pl-2 rounded-sm border-gray-100 border max-[1024px]:w-full"
                    placeholder="Número*"
                    {...register('number')}
                  />
                  <input
                    className="bg-gray-150 w-2/3 h-10 pl-2 rounded-sm border-gray-100 border"
                    placeholder="Complemento"
                    {...register('complement')}
                  />
                </div>

                <div className="flex gap-2 max-[1024px]:flex-col">
                  <input
                    className="bg-gray-150 w-52 h-10 pl-2 rounded-sm border-gray-100 border max-[1024px]:w-full"
                    placeholder="Bairro*"
                    {...register('neighborhood')}
                  />
                  <input
                    className="bg-gray-150 w-80 h-10 pl-2 rounded-sm border-gray-100 border max-[1024px]:w-full"
                    placeholder="Cidade*"
                    {...register('city')}
                  />
                  <input
                    className="bg-gray-150 w-2/12 h-10 pl-2 rounded-sm border-gray-100 border"
                    placeholder="UF*"
                    {...register('state')}
                  />
                </div>
                {Object.keys(errors).length !== 0 &&
                  Object.keys(errors).map((key, index) => (
                    <li key={index} className="text-sm text-purple-300">
                      {errors[key]?.message as string}
                    </li>
                  ))}
              </div>
            </div>
            <div className="mt-3 w-full h-52 bg-gray-50 rounded-md max-[1024px]:h-auto max-[1024px]:pb-10 max-[1024px]:mb-10">
              <div className="flex pl-10 pt-10 pb-10 gap-2 max-[1024px]:px-4">
                <CurrencyDollar size={22} color="#8047F8" />
                <div className="gap-2">
                  <p>Pagamento</p>
                  <p className="text-sm">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-5 pl-10 max-[1024px]:flex-col max-[1024px]:pl-0 pb-1">
                {errorPaymentTypeSelectedOnSubmit && (
                  <span className="text-sm text-purple-300">
                    Selecione uma forma de pagamento
                  </span>
                )}
              </div>

              <div className="flex items-center justify-start gap-5 pl-10 max-[1024px]:flex-col max-[1024px]:pl-0">
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
          <div className="w-5/12 ml-5 max-[1024px]:w-full max-[1024px]:ml-0">
            <h1 className="font-display font-bold pb-5">Cafés selecionados</h1>
            <div className="w-full h-auto bg-gray-50 rounded-md flex flex-col justify-center items-center px-6 max-[720px]:px-6">
              {cart.map(item => (
                <div
                  className=" w-full flex align-center justify-evenly gap-5 py-6 border-b-gray-100 border-b max-[720px]:gap-1"
                  key={item.id}
                >
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
                      <button
                        type="button"
                        onClick={() => handleRemove(item.id)}
                        className={
                          'flex gap-1 items-center bg-gray-100 rounded px-2 cursor-pointer'
                        }
                      >
                        <Trash size={16} color="#8047F8" />
                        <span>Remover</span>
                      </button>
                    </div>
                  </div>
                  <span>{formatNumber(item.price)}</span>
                </div>
              ))}
              <div className="w-full flex-col align-center justify-evenly py-6">
                <div className="flex justify-between mb-2">
                  <p>Total de itens</p>
                  <p>{formatNumber(totalValue)}</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p>Entrega</p>
                  <p>{formatNumber(deliveryTax)}</p>
                </div>
                <div className="flex justify-between text-xl">
                  <p className="font-bold">Total</p>
                  <p className="font-bold">
                    {formatNumber(totalValue + deliveryTax)}
                  </p>
                </div>

                <button
                  type="submit"
                  className=" font-bold text-gray-50 w-full h-14 mt-5 bg-yellow-200 rounded-md"
                >
                  Confirme o seu pedido
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </form>
  )
}

export default Checkout
