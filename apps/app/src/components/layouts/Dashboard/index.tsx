import React, { useState, useContext, ReactNode } from 'react'
import styles from './dashboardLayout.module.css'
import classNames from 'classnames'
import { ThemeContext } from '@Contexts/index'
import { Sidenav } from 'ui'
import Link from 'next/link'
import { GiHamburgerMenu, GiHistogram } from 'react-icons/gi'
import {
  AiOutlineAppstoreAdd,
  AiTwotoneCalendar,
  AiOutlineSearch,
} from 'react-icons/ai'
import { CgLogOut } from 'react-icons/cg'

const routes = {
  logout: {
    route: 'Logout',
    ref: '/logout',
    id: 'navBarlogout',
  },
  find: {
    route: 'Buscar',
    ref: '/clinical',
  },
  calendar: {
    route: 'Calendario',
    ref: '/calendars',
  },
  activities: {
    route: 'Actividades',
    ref: '/activities',
  },
}

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const value = useContext(ThemeContext)
  const [showNav, setShowNav] = useState(false)

  return (
    <div className={classNames(styles.dashboard, styles[value?.theme])}>
      <div className={classNames(styles.container)}>
        <Sidenav show={showNav} onClick={() => setShowNav(!showNav)}>
          <Link href={routes.activities.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <AiOutlineAppstoreAdd />
            </i>
            <span className={styles.link}>{routes.activities.route}</span>
          </Link>
          <Link href={routes.calendar.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <AiTwotoneCalendar />
            </i>
            <span className={styles.link}>{routes.calendar.route}</span>
          </Link>
          <Link href={routes.find.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <AiOutlineSearch />
            </i>
            <span className={styles.link}>{routes.find.route}</span>
          </Link>
          <Link
            id={routes.logout.id}
            href={routes.logout.ref}
            className={classNames(styles.group, styles.logout)}
          >
            <i className={classNames(styles.item, styles.colorSky)}>
              <CgLogOut />
            </i>
            <span className={styles.link}>{routes.logout.route}</span>
          </Link>
        </Sidenav>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  )
}
export default DashboardLayout
