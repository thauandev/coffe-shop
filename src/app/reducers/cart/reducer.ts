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
      return produce(state, (draft: any) => {
        draft.cart.push(action.payload.item)
        localStorage.setItem(`${storageVersion}`, JSON.stringify(draft))
      })
  }
}