import styles from './Choice.module.css'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

interface DropdownOption {
  label: string
  value: string
}

export interface DropdownProps {
  placeholder: string
  options: DropdownOption[]
}

export const Choice = ({ placeholder, options }: DropdownProps) => {
  const [selected, setSelected] = useState<DropdownOption | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  // Select plan from dropdown
  const handleSelect = (option: DropdownOption) => {
    setSelected(option)
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <div className={styles.select} onClick={toggleDropdown}>
        <span className={styles.selected}>
          {selected ? selected.label : placeholder}
        </span>
        <div className={styles.caret} />
      </div>
      {isOpen && (
        <ul className={styles.menu}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className={styles.element}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
