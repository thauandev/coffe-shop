'use client'

import { ShoppingCart } from '@phosphor-icons/react'
import Image from 'next/image'

const Home: React.FC = () => {
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
      <section className="w-full h-full ">
        <h2 className="font-display font-bold text-2xl pt-20 mb-20">
          Nossos cafés
        </h2>
        <div className="flex gap-5 mb-20">
          <div className=" relative bg-gray-50 rounded-sm rounded-bl-xl rounded-tr-xl w-64 h-60 ">
            <div className="absolute inset-0 flex justify-center -top-10">
              <Image
                alt="coffe"
                src={'/coffee.png'}
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-full">
              <h3 className="font-display font-bold">Expresso Tradicional</h3>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
