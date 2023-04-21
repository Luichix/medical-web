import React, { PropsWithChildren } from 'react'
import styles from './Title.module.css'
import classNames from 'classnames'
import { Colors, Sizes, Weights, Theme, Line, Family } from '../../types'

export interface TitleProps {
  color?: Colors
  size?: Sizes
  weight?: Weights
  isCentered?: boolean
  isInline?: boolean
  theme?: Theme
  style?: string
  family?: Family
  line?: Line
}

export const Title = ({
  children,
  color = 'base',
  size = 'md',
  weight = 'bold',
  isCentered,
  isInline,
  theme = 'light',
  family = 'roboto',
  style,
  line = 'tight',
}: PropsWithChildren<TitleProps>) => {
  return (
    <h3
      className={classNames(
        styles.title,
        styles[family],
        styles[color],
        styles[size],
        styles[weight],
        styles[theme],
        styles[line],
        {
          [styles.isCentered]: isCentered,
          [styles.isInline]: isInline,
        },
        style
      )}
    >
      {children}
    </h3>
  )
}
