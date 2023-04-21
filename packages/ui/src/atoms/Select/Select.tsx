import React from 'react'
import classNames from 'classnames'
import styles from './Select.module.css'
import { Desing, Length, Sizes } from '../../types'

export interface SelectProps {
  id: string
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options?: Record<string, string>[]
  disabled?: boolean
  size?: Sizes
  desing?: Desing
  placeholder: string
  length?: Length
}

export const Select = ({
  id,
  name,
  value,
  onChange,
  options,
  size = 'md',
  disabled = false,
  placeholder,
  length = 'regular',
  desing = 'none',
}: SelectProps) => {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={(event) => onChange(event)}
      className={classNames(
        styles.select,
        styles[size],
        styles[desing],
        styles[length]
      )}
      disabled={disabled}
    >
      <option value="" defaultValue="" disabled={true}>
        {placeholder}
      </option>

      {options &&
        options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  )
}
