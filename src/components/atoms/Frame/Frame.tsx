import React, { PropsWithChildren } from 'react'
import styles from './Frame.module.css'

export interface FrameProps {
  title: string
  text: string
}

export const Frame = ({
  children,
  title,
  text,
}: PropsWithChildren<FrameProps>) => {
  return (
    <div className={styles.info}>
      <div className={styles.group}>
        {children}
        <h6 className={styles.title}> {title} </h6>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
