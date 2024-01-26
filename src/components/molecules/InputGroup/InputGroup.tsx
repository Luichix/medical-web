import React from 'react'
import styles from './InputGroup.module.css'
import classNames from 'classnames'
import { Input, InputProps, AlertProps } from '../../atoms'

export interface InputGroupProps extends InputProps, AlertProps {
  label?: string
  direction?: 'horizontal' | 'vertical'
}

export const InputGroup = ({
  id,
  type = 'text',
  name = 'name',
  value,
  onChange,
  size = 'md',
  theme = 'light',
  placeholder,
  length = 'regular',
  alert = 'none',
  message = '',
  show = false,
  label = '',
  direction = 'horizontal',
}: InputGroupProps) => {
  return (
    <div
      className={classNames(
        styles.inputGroup,
        styles[direction],
        styles[theme]
      )}
    >
      <label htmlFor={id} className={classNames(styles.label, [styles[alert]])}>
        {label}
      </label>
      <div className={styles.input}>
        <Input
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={(event) => onChange(event)}
          size={size}
          theme={theme}
          length={length}
        />
        {show && (
          <span className={classNames(styles.message, styles[alert])}>
            {message}
          </span>
        )}
      </div>
    </div>
  )
}
