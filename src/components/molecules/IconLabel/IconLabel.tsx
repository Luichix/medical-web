import React, { PropsWithChildren } from 'react'
import PropTypes from 'prop-types'
import styles from './IconLabel.module.css'
import classNames from 'classnames'
import { AlertType, Theme } from '../../types'

export interface IconLabelProps {
  label: string
  handleClick: () => void
  iconType: AlertType
  theme: Theme
}

export const IconLabel = ({
  label,
  handleClick,
  children,
  iconType = 'none',
  theme = 'light',
}: PropsWithChildren<IconLabelProps>) => {
  return (
    <div className={classNames(styles.iconLabel)}>
      <span className={classNames(styles.label, styles[theme])}>{label}</span>
      <i
        className={classNames(styles.icon, [styles[`${iconType}-${theme}`]])}
        onClick={handleClick}
      >
        {children}
      </i>
    </div>
  )
}
