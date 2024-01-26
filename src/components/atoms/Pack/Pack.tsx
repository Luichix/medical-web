import React, { PropsWithChildren } from 'react'
import styles from './Pack.module.css'
import classNames from 'classnames'
import { Theme } from '../../types'

export interface PackProps {
  theme: Theme
  style?: string
}

export const Pack = ({
  children,
  theme,
  style,
}: PropsWithChildren<PackProps>) => {
  return (
    <div className={classNames(styles.pack, styles[theme], style)}>
      {children}
    </div>
  )
}
