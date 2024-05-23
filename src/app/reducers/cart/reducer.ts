import { storageVersion } from "@/app/contexts/CartContext";
import { produce } from "immer";
import { ActionTypes } from './actions';

export interface Cart {
  id: number,
  name: string,
  description: string,
  price: number,
  amount: number,
  image: string,
}
interface CartState {
  cart: Cart[]
}


export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft: CartState) => {
        const hasProduct = draft.cart.find((p: Cart) => p.id === action.payload.item.id)
        if (hasProduct) {
          const newCart = draft.cart.map((p: Cart) => {
            if (p.id === action.payload.item.id) {
              return { ...p, amount: p.amount + action.payload.item.amount }
            }
            return p
          })

          draft.cart = newCart
          localStorage.setItem(`${storageVersion}`, JSON.stringify(draft))
          return
        }
        draft.cart.push(action.payload.item)
        localStorage.setItem(`${storageVersion}`, JSON.stringify(draft))
      })

    case ActionTypes.ADD_TO_CART_ON_CHECKOUT: {
      return produce(state, (draft: CartState) => {


        const newCart = draft.cart.map((p: Cart) => {
          if (p.id === action.payload.item) {
            return { ...p, amount: p.amount + 1 }
          }
          return p
        })

        draft.cart = newCart
        localStorage.setItem(`${storageVersion}`, JSON.stringify(draft))

      })
    }

    default:
      return state

  }
}