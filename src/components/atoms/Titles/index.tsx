import React, { ReactNode } from 'react'
import styles from './styles.module.css'

export interface TitlesProps {
  id: string
  title: string
  subtitle: string
  children: ReactNode
}

export const Titles = ({ id, title, subtitle, children }: TitlesProps) => {
  return (
    <div id={id} style={{ paddingTop: '50px' }}>
      <div className={styles.section}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.subtitle}>{subtitle}</span>
        {children}
      </div>
    </div>
  )
}

export default Titles
