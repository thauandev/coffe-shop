'use client'

import React, { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

const success: React.FC = () => {
  const { form } = useContext(FormContext)

  console.log(form)
  return <h1>Sucesso</h1>
}

export default success
