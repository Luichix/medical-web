import { ReactNode } from 'react'
import styles from './Container.module.css'
import classNames from 'classnames'

export interface ContainerProps {
  children: ReactNode
  isPlayground?: boolean
  isCentered?: boolean
  style?: string
}

export const Container = ({
  children,
  isCentered,
  isPlayground,
  style,
}: ContainerProps) => {
  return (
    <div
      className={classNames(
        styles.container,
        {
          [styles.isPlayground]: isPlayground,
          [styles.isCentered]: isCentered,
        },
        style,
      )}
    >
      {children}
    </div>
  )
}

export default Container
