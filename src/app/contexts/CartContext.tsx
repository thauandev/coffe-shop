'use client'

/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({} as any)

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState([])
  const storageVersion = '@cart:1.0.0'
  // const total = cart.reduce((acc, cur) => acc + cur.value * cur.amount, 0)
  const totalItems = cart.reduce((acc, cur) => acc + cur.amount, 0)

  // const [cartTotal, setCartTotal] = useState(total)

  // useEffect(() => {
  //   setCartTotal(total)
  // }, [cart])

  useEffect(() => {
    const cartStorage =
      JSON.parse(localStorage.getItem(`${storageVersion}`)) || []
    setCart(cartStorage)
  }, [])

  const addToCart = (product: any) => {
    const hasProduct = cart.find(p => p.id === product.id)
    if (hasProduct) {
      const newCart = cart.map((p): any => {
        if (p.id === product.id) {
          return { ...p, amount: p.amount + product.id }
        }
        return p
      })

      setCart(newCart)
    } else {
      setCart([...cart, product])
    }
    localStorage.setItem(`${storageVersion}`, JSON.stringify(cart))
  }

  // const removeFromCart = product => {
  //   const newCart = cart.filter(p => p.idTicket !== product.idTicket)
  //   if (newCart.length === 0) {
  //     localStorage.removeItem(`${process.env.NEXT_PUBLIC_LOCAL_STORAGE}`)
  //     setCart(newCart)
  //   }
  //   setCart(newCart)

  //   localStorage.setItem(
  //     `${process.env.NEXT_PUBLIC_LOCAL_STORAGE}`,
  //     JSON.stringify(newCart)
  //   )
  // }

  // const emptyCart = () => {
  //   setCart([])
  //   localStorage.removeItem(`${process.env.NEXT_PUBLIC_LOCAL_STORAGE}`)
  // }

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
