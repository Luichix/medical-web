import React, { PropsWithChildren } from 'react'
import { Title } from '../../atoms'
import styles from './CardItem.module.css'
import classNames from 'classnames'
import { Theme, Line, Colors, Family, Sizes } from '../../types'

export interface CardItemProps {
  title: string
  theme?: Theme
  size: Sizes
  line?: Line
  style?: string
  color?: Colors
  family?: Family
}

export const CardItem = ({
  title,
  theme = 'light',
  children,
  size = 'sm',
  color = 'primary',
  line,
  family,
  style,
}: PropsWithChildren<CardItemProps>) => {
  return (
    <div className={classNames(styles.group, styles[theme], style)}>
      <Title
        line={line}
        size={size}
        color={color}
        family={family}
        theme={theme}
      >
        {title}
      </Title>
      {children}
    </div>
  )
}
