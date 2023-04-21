import React, { PropsWithChildren, ReactNode } from 'react'
import styles from './Card.module.css'
import classNames from 'classnames'
import { Sizes, Theme, Colors, Dimensions, Direction } from '../../types'

export interface CardProps {
  theme?: Theme
  style?: string
  size?: Sizes
  direction?: Direction
  dimension?: Dimensions
  color?: Colors
  isClickable?: boolean
  isDraggable?: boolean
  handleClick?: () => void
  children: ReactNode
}

export const Card = ({
  color = 'none',
  size = 'md',
  direction = 'vertical',
  dimension = 'small',
  isClickable,
  isDraggable,
  handleClick,
  children,
}: CardProps) => {
  return (
    <div
      onClick={handleClick}
      className={classNames(
        styles.card,
        styles[color],
        styles[direction],
        styles[dimension],
        styles[size],
        {
          [styles.isClickable]: isClickable,
          [styles.isDraggable]: isDraggable,
        }
      )}
    >
      {children}
    </div>
  )
}
