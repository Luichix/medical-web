import React from 'react'
import styles from './ButtonMenu.module.css'
import classNames from 'classnames'

export interface ButtonMenuProps {
  checked: boolean
  checkedHandler: () => void
}

export const ButtonMenu = ({ checked, checkedHandler }: ButtonMenuProps) => {
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        checked={checked}
        id="togglerBar"
        onChange={checkedHandler}
        className={styles.toggler}
      />
      <label htmlFor="togglerBar" className={styles.burger}>
        <span className={classNames(styles.bun, styles.bunTop)}>
          <span
            className={classNames(styles.bunCrust, styles.bunCrustTop)}
          ></span>
        </span>
        <span className={classNames(styles.bun, styles.bunBottom)}>
          <span
            className={classNames(styles.bunCrust, styles.bunCrustBottom)}
          ></span>
        </span>
      </label>
    </div>
  )
}
