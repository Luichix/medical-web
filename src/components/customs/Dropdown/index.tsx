import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import { SlOptionsVertical } from 'react-icons/sl'
import { BiEditAlt } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'

export const Dropdown = ({
  onDelete,
  onUpdate,
}: {
  onDelete: () => void
  onUpdate: () => void
}) => {
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
          <div className={styles.menu}>
            <div className={styles.option} onClick={onUpdate}>
              <BiEditAlt />
              Modificar
            </div>
            <div className={styles.option} onClick={onDelete}>
              <MdDelete />
              Eliminar
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
