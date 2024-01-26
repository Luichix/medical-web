import classNames from 'classnames'
import { TiPlus } from 'react-icons/ti'
import { IoCloseCircle } from 'react-icons/io5'
import styles from './styles.module.css'
import { useState } from 'react'
import { TextArea } from '@/components/atoms'
import AddButtonDash from '../../molecules/AddButtonDash'

export const CardDash = ({
  value,
  setValue,
}: {
  value: string
  setValue: (value: string) => void
}) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div
      className={classNames(styles.group, {
        [styles.isActive]: !isActive,
      })}
    >
      {isActive ? (
        <>
          <button
            type="button"
            className={styles.exit}
            onClick={() => setIsActive(!isActive)}
          >
            <IoCloseCircle />
          </button>
          <label>
            <span>Diagnostico</span>
            <TextArea
              value={value}
              onChange={(event) => setValue(event.target.value)}
              desing="tertiary"
            />
          </label>
        </>
      ) : (
        <AddButtonDash name="Diagnostico" onClick={() => setIsActive(true)} />
      )}
    </div>
  )
}

export default CardDash
