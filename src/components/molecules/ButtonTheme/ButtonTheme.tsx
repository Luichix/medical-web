import React from 'react'
import styles from './ButtonTheme.module.css'

export const ButtonTheme = ({
  checked,
  checkedHandler,
  themeHandler,
}: {
  checked: boolean
  checkedHandler: () => void
  themeHandler: () => void
}) => {
  return (
    <>
      <input
        id="toggle"
        type="checkbox"
        checked={checked}
        className={styles.input}
        onClick={checkedHandler}
        onChange={themeHandler}
      />
      <label htmlFor="toggle" className={styles.button}></label>
    </>
  )
}
