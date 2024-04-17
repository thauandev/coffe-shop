'use client'

import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from './contexts/CartContext'

const Home: React.FC = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Expresso Tradicional',
      description: 'O tradicional cafe feito com a leite quente e o espuma.',
      price: 9.9,
      amount: 0,
      image: '/coffee.png',
    },
    {
      id: 2,
      name: 'Ristreto',
      description: 'O tradicional cafe feito com a leite quente e o espuma.',
      price: 9.9,
      amount: 0,
      image: '/coffee.png',
    },

    {
      id: 3,
      name: 'Lungo',
      description: 'O tradicional cafe feito com a leite quente e o espuma.',
      price: 9.9,
      amount: 0,
      image: '/coffee.png',
    },
  ])

  const { cart, addToCart } = useContext(CartContext)

  useEffect(() => {
    console.log(cart)
  }, [cart])

  function increment(id: number) {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 }
      }
      return item
    })

    setItems(newItems)
  }

  function decrement(id: number) {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, amount: item.amount === 0 ? 0 : item.amount - 1 }
      }
      return item
    })

    setItems(newItems)
  }

  function add(item: any) {
    addToCart(item)
  }

  return (
    <div className="container mx-auto">
      <main className="flex w-full pt-16">
        <div className="w-10/12">
          <div className="w-8/12 pb-10">
            <p className="font-display font-extrabold text-4xl pb-3">
              Encontre o café perfeito para qualquer hora do dia
            </p>
            <p className="font-regular text-lg text-gray-300">
              Com o Coffee Delivery você recebe seu café onde estiver a qualquer
              hora
            </p>
          </div>
          <div className="grid grid-cols-2 font-regular text-xs text-gray-300 gap-5 w-8/12">
            <div className="flex gap-2 items-center ">
              <div className=" rounded-full w-7 h-7 flex items-center justify-center bg-yellow-300 ">
                <ShoppingCart color="white" size={15} weight="fill" />
              </div>
              <span className=" ">Compra simples e segura</span>
            </div>
            <div className="flex gap-2 items-center ">
              <div className=" rounded-full w-7 h-7 flex items-center justify-center bg-yellow-300">
                <ShoppingCart color="white" size={15} weight="fill" />
              </div>
              <span className=" ">Compra simples e segura</span>
            </div>
            <div className="flex gap-2 items-center ">
              <div className=" rounded-full w-7 h-7 flex items-center justify-center bg-yellow-300">
                <ShoppingCart color="white" size={15} weight="fill" />
              </div>
              <span className=" ">Compra simples e segura</span>
            </div>
            <div className="flex gap-2 items-center ">
              <div className=" rounded-full w-7 h-7 flex items-center justify-center bg-yellow-300">
                <ShoppingCart color="white" size={15} weight="fill" />
              </div>
              <span className=" ">Compra simples e segura</span>
            </div>
          </div>
        </div>
        <div className="w-6/12 ">
          <div className="">
            <Image alt="coffe" src={'/main.png'} width={380} height={380} />
          </div>
        </div>
      </main>
      <section className="w-full h-full">
        <h2 className="font-display font-bold text-2xl pt-20 mb-20">
          Nossos cafés
        </h2>
        <div className="flex gap-5 mb-20">
          {items.map(item => (
            <div
              className=" relative bg-gray-50 rounded-sm rounded-bl-xl rounded-tr-xl w-64 h-60 "
              key={item.id}
            >
              <div className="absolute inset-0 flex justify-center -top-10 h-7">
                <Image
                  alt="coffe"
                  src={item.image}
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full h-full">
                <h3 className="font-display font-bold">{item.name}</h3>
                <span className="font-regular text-sm text-gray-200 text-center">
                  {item.description}
                </span>

                <div className="w-full justify-around items-center flex pt-5">
                  <div className="flex gap-1">
                    <span>R$</span>
                    <strong>{item.price}</strong>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-2 items-center">
                      <button
                        type="button"
                        className="cursor-pointer"
                        onClick={() => increment(item.id)}
                      >
                        <Plus />
                      </button>

                      <span>{item.amount}</span>
                      <button
                        type="button"
                        className="cursor-pointer"
                        onClick={() => decrement(item.id)}
                      >
                        <Minus />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="cursor-pointer"
                      onClick={() => add(item)}
                    >
                      <ShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
