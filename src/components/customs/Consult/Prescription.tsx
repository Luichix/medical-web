import React, { useState } from 'react'
import {
  MdAddCircleOutline,
  MdOutlineArrowDropDownCircle,
} from 'react-icons/md'
import { Input, Paragraph, TextArea, Title } from 'ui'
import styles from './styles.module.css'

const Prescription = () => {
  const [input, setInput] = useState('')
  const [textarea, setTextarea] = useState('')

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Form')
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title color="primary" line="snug">
          Receta de Pita Oliva
        </Title>
        <Paragraph color="tertiary" size="xs">
          22/09/2022
        </Paragraph>
      </div>
      <form onSubmit={handlerSubmit} className={styles.form}>
        <div className={styles.element}>
          <span>
            <button type="button" className={styles.button}>
              <MdOutlineArrowDropDownCircle />
            </button>
          </span>
          <label>
            <Input
              id="input"
              value={input}
              placeholder="Escriba el nombre del medicamento"
              onChange={(event) => setInput(event.target.value)}
              desing="tertiary"
              size="xs"
            />
            <TextArea
              value={textarea}
              onChange={(event) => setTextarea(event.target.value)}
              desing="tertiary"
            />
          </label>
        </div>
        <button type="button" className={styles.button}>
          <MdAddCircleOutline />
        </button>
      </form>
    </div>
  )
}

export default Prescription
