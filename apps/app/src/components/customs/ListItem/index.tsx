import classNames from 'classnames'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

export const ListItem = ({
  behavior,
  navigation,
  color,
  Icon,
  children,
}: {
  behavior: boolean
  navigation: string
  color: string
  Icon: FC
  children: ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const listRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  // Select plan from dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  return (
    <li
      className={classNames(styles.group, {
        [styles.noList]: !behavior,
        [styles.list]: behavior,
      })}
      ref={listRef}
      onClick={toggleDropdown}
    >
      <div className={styles.element}>
        <i className={classNames(styles.item, styles[color])}>
          <Icon />
        </i>
        <span className={styles.link}>{navigation}</span>
      </div>
      {isOpen && (
        <div className={styles.transition}>
          <ul
            className={classNames(styles.menu, {
              [styles.outside]: !behavior,
              [styles.inside]: behavior,
            })}
          >
            {children}
          </ul>
        </div>
      )}
    </li>
  )
}
