import React, { useState, useCallback } from 'react'
import { InputForm, FormValues, NewInput } from './types'
/* ------------------------------- interfaces ------------------------------- */

interface UseForm {
  inputs: InputForm[]
  addInputs: (newInput: NewInput) => void
  updateInputs: (updatedVakyes: FormValues) => void
  clearForm: () => void
  updateForm: (newForm: InputForm[]) => void
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

/* ---------------------------------- hook ---------------------------------- */

/**
 * hook useInputForm
 * this receives an object with inputs, manage their state and return values into callback
 */

export function useForm(
  callback: (values: FormValues) => void,
  initialState: InputForm[] = []
): UseForm {
  /* ---------------------------------- state --------------------------------- */

  const [inputs, setInputs] = useState<InputForm[]>(initialState)

  /* ------------------------------- add inputs ------------------------------- */

  function addInputs(newInput: NewInput) {
    const nuevosInputs = [...inputs]
    nuevosInputs.push({
      id: (inputs.length + 1).toString(),
      value: '',
      ...newInput,
    })
    setInputs(nuevosInputs)
  }

  /* ------------------------------- update inputs ------------------------------- */

  function updateInputs(updatedValues: FormValues) {
    const updatedInputs = inputs.map((input) => {
      const updatedValue = updatedValues[input.name] ?? ''
      return {
        ...input,
        value: updatedValue,
      }
    })
    setInputs(updatedInputs)
  }

  /* ------------------------------- clear inputs ------------------------------- */

  function clearForm() {
    const clearedInputs = inputs.map((input) => {
      const clearedValues = ''
      return {
        ...input,
        value: clearedValues,
      }
    })
    setInputs(clearedInputs)
  }

  /* ------------------------------- clear inputs ------------------------------- */

  function updateForm(newForm: InputForm[]) {
    setInputs([...newForm])
  }

  /* ---------------------------- get inputs values --------------------------- */

  function getValues(inputs: InputForm[]): FormValues {
    const values: FormValues = {}
    inputs.forEach((input) => {
      values[input.name] = input.value
    })
    return values
  }

  /* ------------------------------ handle change ----------------------------- */

  const handleChange = useCallback(
    (
      event:
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLSelectElement>,
      index: number
    ) => {
      event.persist()
      const newInputs = [...inputs]
      newInputs[index].value =
        event.target.value.trim() === '' ? '' : event.target.value
      setInputs(newInputs)
    },
    [inputs, setInputs]
  )

  /* ------------------------------ handle submit ----------------------------- */

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const values = getValues(inputs)
    callback(values)
  }

  return {
    inputs,
    addInputs,
    updateInputs,
    clearForm,
    updateForm,
    handleChange,
    handleSubmit,
  }
}
