import { FC } from 'react'
import styles from './styles.module.css'

export const CardElement = ({ Icon }: { Icon: FC }) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.iconContainer}>
        <span className={styles.date}>Sep, 2012</span>
        <i className={styles.icon}>
          <Icon />
        </i>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Bienvenido al mundo <b>Santiago</b>
        </p>
      </div>
      <span className={styles.edit}>Editar</span>
    </div>
  )
}
