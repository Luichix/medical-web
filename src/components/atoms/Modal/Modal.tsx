import classNames from 'classnames'
import { forwardRef, PropsWithRef, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

export interface ModalProps {
  onClose: (event: any) => void
  position?: 'center' | 'left' | 'right'
  children: ReactNode
}

export const Modal = forwardRef<PropsWithRef<HTMLElement>, ModalProps>(
  function ModalRef(
    { children, position = 'center', onClose }: ModalProps,
    ref
  ) {
    const handleModalContent = (event: any) => event.stopPropagation()
    const PortalDiv = document.getElementById('portal')!
    return ReactDOM.createPortal(
      <section className={styles.modal} onClick={onClose} ref={ref}>
        <div
          className={classNames(styles.content, styles[position])}
          onClick={handleModalContent}
        >
          <button className={styles.close} onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </section>,
      PortalDiv
    )
  }
)
