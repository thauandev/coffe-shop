import { Cart } from "./reducer";

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  ADD_TO_CART_ON_CHECKOUT = 'ADD_TO_CART_ON_CHECKOUT',

}
export interface CartAction {
  type: ActionTypes
  payload: {
    item: Cart
  }
}





export function addNewItemAction(item: Cart) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      item,
    },
  }
}

export function addNewItemOnCheckoutAction(item: number) {

  return {
    type: ActionTypes.ADD_TO_CART_ON_CHECKOUT,
    payload: {
      item,
    },
  }
}

