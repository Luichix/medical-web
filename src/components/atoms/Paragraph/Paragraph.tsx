import { ReactNode } from 'react'
import classNames from 'classnames'
import styles from './Paragraph.module.css'
import { Colors, Sizes, Weights, Theme, Line } from '../../types'

export interface ParagraphProps {
  color?: Colors
  size?: Sizes
  weight?: Weights
  isStriked?: boolean
  isInline?: boolean
  isMonospace?: boolean
  isCentered?: boolean
  isJustify?: boolean
  theme?: Theme
  line?: Line
  style?: string
  children: ReactNode
}

export const Paragraph = ({
  color = 'base',
  size = 'md',
  weight = 'normal',
  isStriked = false,
  isInline = false,
  isMonospace = false,
  isCentered = false,
  isJustify = false,
  children,
  line = 'tight',
  theme = 'light',
  style,
}: ParagraphProps) => {
  return (
    <p
      className={classNames(
        styles.paragraph,
        styles[color],
        styles[size],
        styles[weight],
        styles[line],
        styles[theme],
        style,
        {
          [styles.isStriked]: isStriked,
          [styles.isInline]: isInline,
          [styles.isMonospace]: isMonospace,
          [styles.isCentered]: isCentered,
          [styles.isJustify]: isJustify,
        }
      )}
    >
      {children}
    </p>
  )
}