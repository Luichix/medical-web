import React, { useContext } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'
import { ThemeContext } from '@Contexts/index'
import { FaBars } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

function Navbar({
  isNav,
  handleNav,
}: {
  isNav: boolean
  handleNav: () => void
}) {
  const { theme } = useContext(ThemeContext)
  return (
    <div>
      <header id="header" className={classNames(styles.header, styles[theme])}>
        <Image
          className={styles.image}
          src="/medical-symbol.svg"
          alt="medical symbol"
          height={36}
          width={36}
          onClick={handleNav}
        />
        <ul className={styles.list}>
          <li className={classNames(styles.link)}>
            <Link href="/dashboard" title="Menu">
              Tablero
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/clinical" title="Buscar">
              Buscar
            </Link>
          </li>
        </ul>
        <Image
          className={styles.avatar}
          src="https://placeimg.com/192/191/people"
          alt="user"
          height={45}
          width={45}
        />
        <span className={styles.bar} onClick={handleNav}>
          <FaBars
            className={classNames({
              [styles.visible]: isNav,
              [styles.hidden]: !isNav,
            })}
          />
        </span>
      </header>
    </div>
  )
}

export default Navbar
