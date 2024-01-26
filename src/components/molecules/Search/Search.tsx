import React, { PropsWithChildren, useRef } from 'react'
import styles from './Search.module.css'
import { AiOutlineSearch } from 'react-icons/ai'

export interface SearchProps {
  placeholder: string
  value: string
  onChange: (e: string) => void
}

export const Search = ({
  children,
  placeholder,
  value = '',
  onChange,
}: PropsWithChildren<SearchProps>) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    const isValid = inputRef?.current?.value
    if (isValid === '') {
      inputRef?.current?.focus()
    } else if (typeof isValid === 'string') {
      onChange('')
    }
  }
  return (
    <div className={styles.search}>
      <AiOutlineSearch size={'20'} color="#9DA3AE" />
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
        ref={inputRef}
      />

      {children}
    </div>
  )
}
