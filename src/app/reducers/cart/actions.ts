import { Cart } from "./reducer";

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  ADD_TO_CART_ON_CHECKOUT = 'ADD_TO_CART_ON_CHECKOUT',
  REMOVE_AMOUNT_TO_CART = 'REMOVE_AMOUNT_TO_CART',
  REMOVE_ITEM_TO_CART = 'REMOVE_ITEM_TO_CART',
  ADD_TO_CART_INITIAL_STATE = 'ADD_TO_CART_INITIAL_STATE',
}
export function addNewItemAction(item: Cart) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      item,
    },
  }
}

export function addNewItemOnCheckoutAction(id: number) {

  return {
    type: ActionTypes.ADD_TO_CART_ON_CHECKOUT,
    payload: {
      id,
    },
  }
}


export function removeAmountOnCheckoutAction(id: number) {

  return {
    type: ActionTypes.REMOVE_AMOUNT_TO_CART,
    payload: {
      id,
    },
  }
}

export function removeItemOnCheckoutAction(id: number) {

  return {
    type: ActionTypes.REMOVE_ITEM_TO_CART,
    payload: {
      id,
    },
  }


}
export function addToCartInitialState(item: Cart) {
  return {
    type: ActionTypes.ADD_TO_CART_INITIAL_STATE,
    payload: {
      item,
    },
  }
}


