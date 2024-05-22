import { Cart } from "./reducer";

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',

}

export function addNewItemAction(item: Cart) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      item,
    },
  }
}

