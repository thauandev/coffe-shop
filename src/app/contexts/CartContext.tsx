'use client'

/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactNode, useReducer } from 'react'
import { ActionTypes } from '../reducers/cart/actions'
import { Cart, cartReducer } from '../reducers/cart/reducer'

interface CartContextType {
  cart: Cart[]
  totalItems: number
  addToCart: (product: Cart) => void
}

interface CartState {
  cart: Cart[]
}
interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export const storageVersion = '@cart:1.0.5'
export function CartProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    (initialState: CartState) => {
      const storageStateAsJSON = localStorage.getItem(`${storageVersion}`)

      if (storageStateAsJSON) {
        return JSON?.parse(storageStateAsJSON)
      }

      return initialState
    }
  )

  const { cart } = cartState
  console.log(cart)
  const totalItems = cart?.reduce(
    (acc: number, cur: Cart) => acc + cur?.amount,
    0
  )

  // const [cartTotal, setCartTotal] = us cart(total)

  // useEffect(() => {
  //   setCartTotal(total)
  // }, [cart])

  const addToCart = (product: Cart) => {
    // const hasProduct = cart.find(p => p.id === product.id)
    // if (hasProduct) {
    //   const newCart = cart.map((p): any => {
    //     if (p.id === product.id) {
    //       return { ...p, amount: p.amount + product.id }
    //     }
    //     return p
    //   })

    //   setCart(newCart)
    // } else {
    //   setCart([...cart, product])
    // }
    console.log('state', cart)
    dispatch({ type: ActionTypes.ADD_TO_CART, payload: { item: product } })
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
