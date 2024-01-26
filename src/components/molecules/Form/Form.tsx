import React from 'react'
import { Input, Select } from '../../atoms'
import styles from './styles.module.css'
import { InputForm } from './types'

export interface FormProps {
  id: string
  title: string
  subtitle: string
  inputs: InputForm[]
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const Form = ({
  id,
  title,
  subtitle,
  inputs,
  handleChange,
  handleSubmit,
}: FormProps) => {
  return (
    <form id={id} onSubmit={handleSubmit} className={styles.form}>
      <h4 className={styles.subtitle}>{title}</h4>
      <span className={styles.details}>{subtitle}</span>
      <fieldset className={styles.section}>
        {inputs.map((input, index) => {
          switch (input.type) {
            case 'text':
            case 'hidden':
              return (
                <label key={input.id}>
                  {input.type !== 'hidden' && input.label}
                  <Input
                    id={input.id}
                    type={input.type}
                    value={input.value}
                    onChange={(event) => handleChange(event, index)}
                    placeholder={input.placeholder}
                    length="long"
                    desing="primary"
                  />
                </label>
              )
            case 'date':
              return (
                <label htmlFor={input.id} key={input.id}>
                  {input.label}
                  <Input
                    id={input.id}
                    type={input.type}
                    name={input.name}
                    value={input.value}
                    onChange={(event) => handleChange(event, index)}
                    placeholder={input.placeholder}
                    length="short"
                    desing="primary"
                  />
                </label>
              )
            case 'select':
              return (
                <label htmlFor={input.id} key={input.id}>
                  {input.label}
                  <Select
                    id={input.id}
                    name={input.name}
                    value={input.value}
                    onChange={(event) => handleChange(event, index)}
                    options={input.options}
                    placeholder={input.placeholder}
                    length="short"
                  />
                </label>
              )
            default:
              return null
          }
        })}
      </fieldset>
      <button className={styles.button} type="submit">
        Send Data
      </button>
    </form>
  )
}
