import React from 'react'
import styles from './Switch.module.css'

export interface SwitchProps {
  name: string
  checked: boolean
  onClick: () => void
}

export const Switch = ({ name, checked, onClick }: SwitchProps) => {
  return (
    <div className={styles.switch}>
      <input
        id={name}
        type="checkbox"
        checked={checked}
        className={styles.input}
        onClick={onClick}
      />
      <label htmlFor={name} className={styles.button}></label>
    </div>
  )
}
