import React from 'react'
import classNames from 'classnames'
import styles from './Checkbox.module.css'

export interface CheckboxProps {
  checked: boolean
  onClick: () => void
}

export const Checkbox = ({ checked, onClick }: CheckboxProps) => {
  return (
    <span
      className={classNames(styles.content, {
        [styles.visible]: checked,
        [styles.hidden]: !checked,
      })}
    >
      <label className={classNames(styles.contentCheck)}>
        <input
          type="checkbox"
          checked={checked}
          onClick={onClick}
          className={styles.checkbox}
          readOnly
        />
        <span className={styles.checkmark}></span>
      </label>
    </span>
  )
}
