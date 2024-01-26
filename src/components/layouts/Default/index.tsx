import React, { useState, useContext, ReactNode } from 'react'
import styles from './defaultLayout.module.css'
import Navbar from '../../customs/Navbar'
import classNames from 'classnames'
import { ThemeContext } from '@Contexts/index'

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const value = useContext(ThemeContext)
  const [isNav, setIsNav] = useState(false)

  const handleNav = () => {
    setIsNav(!isNav)
  }

  return (
    <div className={classNames(styles.layout, styles[value?.theme])}>
      <Navbar isNav={isNav} handleNav={handleNav} />
      <div className={classNames(styles.container, styles.noSidebar)}>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  )
}
export default DefaultLayout
