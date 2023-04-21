import React, { useState } from 'react'
import { Input, InputProps } from '../../atoms'
import styles from './Password.module.css'
import classNames from 'classnames'
import { AiFillUnlock, AiFillLock } from 'react-icons/ai'

export const Password = (props: InputProps) => {
  const [see, setSee] = useState(false)

  const seeHandle = () => {
    if (see) setSee(false)
    else setSee(true)
  }

  return (
    <div className={styles.password}>
      <Input {...props} type={see ? 'text' : 'password'} />
      <button
        type="button"
        onClick={seeHandle}
        className={classNames(styles.view)}
      >
        <i>{see ? <AiFillUnlock /> : <AiFillLock />}</i>
      </button>
    </div>
  )
}
