import styles from './Dropdown.module.css'
import { useEffect, useRef, useState } from 'react'
import { SlOptionsVertical } from 'react-icons/sl'

interface DropdownOption {
  label: string
  value: string
  onClick?: () => void
}

export interface DropdownProps {
  options: DropdownOption[]
}

export const Dropdown = ({ options }: DropdownProps) => {
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
  const handleSelect = (callback?: () => void) => {
    setIsOpen(false)
    if (callback) callback()
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div ref={dropdownRef} className={styles.container}>
      <button className={styles.options} onClick={toggleDropdown}>
        <SlOptionsVertical />
      </button>
      {isOpen && (
        <div className={styles.transition}>
          <ul className={styles.menu}>
            {options.map(({ label, onClick }, index) => (
              <li
                key={index}
                onClick={() => handleSelect(onClick)}
                className={styles.option}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
