import { forwardRef, PropsWithRef } from 'react'
import ReactDOM from 'react-dom'
import styles from './ButtonFloat.module.css'
import { BsPlus } from 'react-icons/bs'

interface ButtonFloatProps {
  handleClick: (event: any) => void
}

export const ButtonFloat = forwardRef<
  PropsWithRef<HTMLAnchorElement>,
  ButtonFloatProps
>(function MedicalRecords({ handleClick }: ButtonFloatProps, ref) {
  const PortalButton = document.getElementById('portal')!
  return ReactDOM.createPortal(
    <a onClick={handleClick} className={styles.button} ref={ref}>
      <BsPlus />
    </a>,
    PortalButton
  )
})
