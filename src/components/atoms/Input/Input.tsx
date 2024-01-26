import React from 'react'
import styles from './Input.module.css'
import classNames from 'classnames'
import { Desing, Length, Sizes, Theme } from '../../types'

export interface InputProps {
  id: string
  type?: string
  name?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  size?: Sizes
  length?: Length
  theme?: Theme
  placeholder: string
  desing?: Desing
  autoComplete?: string
  style?: string
}

export const Input = ({
  id,
  type = 'text',
  name = 'name',
  value,
  onChange,
  size = 'md',
  theme = 'light',
  placeholder,
  length = 'regular',
  desing = 'none',
  autoComplete = 'off',
  style,
}: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={(event) => onChange(event)}
      className={classNames(
        styles.input,
        styles[size],
        styles[length],
        styles[theme],
        styles[desing],
        style
      )}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required
    />
  )
}
