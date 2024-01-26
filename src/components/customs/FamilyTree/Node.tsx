import classNames from 'classnames'
import { IoPerson } from 'react-icons/io5'
import styles from './FamilyTree.module.css'
/* ------------------------------- Node Person ------------------------------ */

export function Node({ name, type }: { name: string; type: string }) {
  return (
    <div className={styles.person}>
      <span className={styles.pronoun}>{name}</span>
      <div className={classNames(styles.burble, styles[type])}>
        <IoPerson />
      </div>
    </div>
  )
}
