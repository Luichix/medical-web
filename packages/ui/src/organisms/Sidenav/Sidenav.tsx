import { ReactNode } from 'react'
import styles from './Sidenav.module.css'
import classNames from 'classnames'
import { ButtonMenu } from '../../molecules'

export interface SidenavProps {
  show: boolean
  theme?: string
  onClick?: () => void
  children: ReactNode
}

export const Sidenav = ({
  show = false,
  theme = 'light',
  onClick = () => {},
  children,
}: SidenavProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonBar}>
        <ButtonMenu checked={show} checkedHandler={onClick} />
      </div>
      <div
        className={classNames(
          styles.sidenav,
          {
            [styles.visible]: show,
            [styles.hidden]: !show,
          },
          styles[theme]
        )}
      >
        <ul className={styles.list}>{children}</ul>
      </div>
    </div>
  )
}
