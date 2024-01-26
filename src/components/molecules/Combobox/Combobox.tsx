import { useEffect, useRef, useState } from 'react'
import styles from './Combobox.module.css'
import { HiChevronUpDown, HiCheck } from 'react-icons/hi2'
import classNames from 'classnames'

interface ComboboxOption {
  id: string
  name: string
}

export interface ComboboxProps {
  options: ComboboxOption[]
}

export const Combobox = ({ options }: ComboboxProps) => {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<ComboboxOption | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const comboboxRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        comboboxRef.current &&
        !comboboxRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const handleOptionClick = (option: ComboboxOption) => {
    setSelectedId(option.id)
    setQuery(option.name)
    setIsOpen(false)
  }

  useEffect(() => {
    if (selected) {
      setQuery(selected.name)
    }
  }, [selected])

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          option.name.toLowerCase().includes(query.toLowerCase())
        )

  const toggleCombobox = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = () => {
    setQuery(inputRef.current?.value || '')
  }

  const handleInputBlur = () => {
    if (query === '') {
      setSelected(null)
    }
  }

  return (
    <div className={styles.combobox}>
      <label className={styles.label}>Assigned to</label>
      <div className={styles.container} ref={comboboxRef}>
        <input
          ref={inputRef}
          className={styles.input}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          value={query}
        />
        <button className={styles.button} onClick={toggleCombobox}>
          <HiChevronUpDown className={styles.icon} />
        </button>

        {filteredOptions.length > 0 && isOpen && (
          <div className={styles.dropdown}>
            {filteredOptions.map((option) => (
              <div
                key={option.id}
                className={styles.option}
                onClick={() => setSelected(option)}
              >
                <span
                  className={classNames(styles.name, {
                    [styles.selected]: selectedId === option.id,
                  })}
                >
                  {option.name}
                </span>
                {selected?.id === option.id && (
                  <HiCheck className={styles.check} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
