import { ReactNode } from 'react'
import styles from './styles.module.css'

export const Container = ({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: ReactNode
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.elements}>{children}</div>
    </div>
  )
}
