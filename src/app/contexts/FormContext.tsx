'use client'

import { createContext, ReactNode, useReducer } from 'react'
import { FormProps } from '../reducers/form/actions'
import { FormReducer } from '../reducers/form/reducer'

interface FormContextType {
  form: FormProps
  addForm: (item: FormProps) => void
}

interface FormContextProviderProps {
  children: ReactNode
}

export const FormContext = createContext({} as FormContextType)

export const FormProvider = ({ children }: FormContextProviderProps) => {
  const [formState, dispatch] = useReducer(
    FormReducer,
    {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentType: '',
    },
    (initialState: FormProps) => {
      return initialState
    }
  )

  const {
    cep,
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
    paymentType,
  } = formState

  console.log(cep)

  const addForm = (item: FormProps) => {
    console.log('chamou')
    dispatch({ type: 'ADD_TO_FORM', payload: { item: item } })
  }

  return (
    <FormContext.Provider
      value={{
        form: {
          cep,
          street,
          number,
          complement,
          neighborhood,
          city,
          state,
          paymentType,
        },
        addForm,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
