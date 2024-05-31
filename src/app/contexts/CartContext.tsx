'use client'

/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactNode, useReducer } from 'react'
import { ActionTypes } from '../reducers/cart/actions'
import { Cart, cartReducer, CartState } from '../reducers/cart/reducer'

interface CartContextType {
  cart: Cart[]
  totalItems: number
  totalValue: number
  deliveryTax: number
  addToCart: (product: Cart) => void
  addToCartOnCheckout: (id: number) => void
  removeItemFromCart: (id: number) => void
  removeAmountFromCart: (id: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export const storageVersion = '@cart:1.0.6'
export function CartProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    (initialState: CartState) => {
      if (typeof window !== 'undefined') {
        const storage = localStorage.getItem(`${storageVersion}`)
        if (storage) {
          return JSON.parse(storage)
        }
      }
      return initialState
    }
  )

  const { cart } = cartState

  const totalValue = cart?.reduce(
    (acc: number, cur: Cart) => acc + cur?.price * cur?.amount,
    0
  )

  const totalItems = cart?.reduce(
    (acc: number, cur: Cart) => acc + cur?.amount,
    0
  )

  const deliveryTax = 3.5

  const addToCart = (product: Cart) => {
    dispatch({ type: ActionTypes.ADD_TO_CART, payload: { item: product } })
  }

  const addToCartOnCheckout = (id: number) => {
    dispatch({
      type: ActionTypes.ADD_TO_CART_ON_CHECKOUT,
      payload: { id },
    })
  }

  const removeAmountFromCart = (id: number) => {
    dispatch({ type: ActionTypes.REMOVE_AMOUNT_TO_CART, payload: { id } })
  }

  const removeItemFromCart = (id: number) => {
    dispatch({ type: ActionTypes.REMOVE_ITEM_TO_CART, payload: { id } })
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
        totalValue,
        deliveryTax,
        addToCartOnCheckout,
        removeItemFromCart,
        removeAmountFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
