import { TiPlus } from 'react-icons/ti'
import styles from './styles.module.css'

export const AddButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <TiPlus className={styles.icon} />
    </button>
  )
}
