import { ReactNode } from 'react'
import styles from './Button.module.css'
import classNames from 'classnames'
import { Colors, Dimensions, Sizes, Theme } from '../../types'

export interface ButtonProps {
  size: Sizes
  color?: Colors
  theme?: Theme
  dimension?: Dimensions
  type?: 'button' | 'submit'
  onClick?: () => void
  children: ReactNode
}

export const Button = ({
  color = 'primary',
  dimension = 'normal',
  size = 'md',
  theme = 'light',
  type = 'button',
  onClick = () => {},
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(
        styles.button,
        styles[color],
        styles[size],
        styles[dimension],
        styles[theme]
      )}
    >
      {children}
    </button>
  )
}

