
export enum ActionTypes {
  ADD_TO_FORM = 'ADD_TO_FORM',
}

export interface FormProps {

  cep: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  paymentType: string
}

export function addNewForm(item: FormProps) {
  return {
    type: ActionTypes.ADD_TO_FORM,
    payload: {
      item,
    },
  }
}