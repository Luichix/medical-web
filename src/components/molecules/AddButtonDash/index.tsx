import React from 'react'
import { TiPlus } from 'react-icons/ti'
import styles from './styles.module.css'

export const AddButtonDash = ({
  name,
  onClick,
}: {
  name: string
  onClick: () => void
}) => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.addButton} onClick={onClick}>
        <TiPlus className={styles.icon} />
      </button>
      <span>Diagnostico</span>
    </div>
  )
}

export default AddButtonDash
