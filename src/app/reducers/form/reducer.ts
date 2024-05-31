import { produce } from "immer"
import { ActionTypes, FormProps } from "./actions"


export function FormReducer(
  state: FormProps,
  action: any
) {
  switch (action.type) {
    case ActionTypes.ADD_TO_FORM:
      return produce(state, (draft: FormProps) => {
        console.log('chamou', action.payload.item)


        draft.cep = action.payload.item.cep
        draft.street = action.payload.item.street
        draft.number = action.payload.item.number
        draft.complement = action.payload.item.complement
        draft.neighborhood = action.payload.item.neighborhood
        draft.city = action.payload.item.city
        draft.state = action.payload.item.state
        draft.paymentType = action.payload.item.paymentType




      })
    default:
      return state
  }
}