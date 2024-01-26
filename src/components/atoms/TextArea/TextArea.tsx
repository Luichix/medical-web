import classNames from 'classnames'
import { useEffect, useRef } from 'react'
import { Desing } from '../../types'
import styles from './TextArea.module.css'

export interface TextAreaProps {
  name?: string
  type?: 'box' | 'table' | 'none'
  length?: number
  placeholder?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  disabled?: boolean
  required?: boolean
  style?: string
  autoComplete?: 'off'
  desing?: Desing
}

export const TextArea = ({
  name,
  type = 'none',
  length = 1000,
  placeholder = '',
  value = '',
  onChange,
  disabled = false,
  required = true,
  desing = 'none',
  style,
  autoComplete = 'off',
}: TextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const textarea = textareaRef.current
    if (textarea) {
      if (value === '') {
        textarea.style.height = 'auto'
      } else if (value.trim() === '') {
        textarea.style.height = 'auto'
      } else {
        textarea.style.height = `${textarea.scrollHeight}px`
      }
    }
  }, [value])

  return (
    <textarea
      ref={textareaRef}
      value={value}
      rows={1}
      onChange={(event) => onChange(event)}
      name={name}
      maxLength={length}
      placeholder={placeholder}
      className={classNames(
        styles.textarea,
        styles[type],
        styles[desing],
        style
      )}
      disabled={disabled}
      required={required}
      autoComplete={autoComplete}
    />
  )
}