import React, { useState, useContext, ReactNode } from 'react'
import styles from './dashboardLayout.module.css'
import classNames from 'classnames'
import { ThemeContext } from '@Contexts/index'
import { Sidenav } from 'ui'
import Link from 'next/link'
import { AiOutlineAppstoreAdd, AiTwotoneCalendar } from 'react-icons/ai'
import { CgLogOut } from 'react-icons/cg'
import { BsPersonBadge } from 'react-icons/bs'
import { BiHome, BiTask } from 'react-icons/bi'
import {
  MdOutlineSettings,
  MdOutlineHelpOutline,
  MdOutlineSick,
} from 'react-icons/md'
import { FaUserDoctor, FaRegCalendarMinus } from 'react-icons/fa6'

const routes = {
  logout: {
    route: 'Salir',
    ref: '/logout',
    id: 'navBarlogout',
  },
  find: {
    route: 'Pacientes',
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
  home: {
    route: 'Tablero',
    ref: '/',
  },
  doctors: {
    route: 'Doctores',
    ref: '/doctors',
  },
  setting: {
    route: 'Configuración',
    ref: '/setting',
  },
  support: {
    route: 'Soporte',
    ref: '/support',
  },
}

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const value = useContext(ThemeContext)
  const [showNav, setShowNav] = useState(false)

  return (
    <div className={classNames(styles.dashboard, styles[value?.theme])}>
      <div className={classNames(styles.container)}>
        <Sidenav show={showNav} onClick={() => setShowNav(!showNav)}>
          <Link href={routes.home.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <BiHome />
            </i>
            <span className={styles.link}>{routes.home.route}</span>
          </Link>
          <Link href={routes.doctors.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <FaUserDoctor />
            </i>
            <span className={styles.link}>{routes.doctors.route}</span>
          </Link>
          <Link href={routes.find.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <MdOutlineSick />
            </i>
            <span className={styles.link}>{routes.find.route}</span>
          </Link>
          <Link href={routes.activities.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <BiTask />
            </i>
            <span className={styles.link}>{routes.activities.route}</span>
          </Link>
          <Link href={routes.calendar.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <FaRegCalendarMinus />
            </i>
            <span className={styles.link}>{routes.calendar.route}</span>
          </Link>
          <Link href={routes.setting.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <MdOutlineSettings />
            </i>
            <span className={styles.link}>{routes.setting.route}</span>
          </Link>
          <Link href={routes.setting.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <MdOutlineHelpOutline />
            </i>
            <span className={styles.link}>{routes.support.route}</span>
          </Link>
          <Link
            id={routes.logout.id}
            href={routes.home.ref}
            className={classNames(styles.logout)}
          >
            <i className={classNames(styles.item, styles.colorSky)}>
              <CgLogOut />
            </i>
            <span className={styles.link}>{routes.logout.route}</span>
          </Link>
        </Sidenav>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}
export default DashboardLayout
