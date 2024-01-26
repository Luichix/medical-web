import { HiOutlinePaperClip } from 'react-icons/hi2'
import styles from './List.module.css'

interface RecordList {
  label: string
  value: string
}

export interface ListProps {
  id: string
  title: string
  subtitle: string
  record: RecordList[]
}

export const List: React.FC<ListProps> = ({ id, title, subtitle, record }) => {
  return (
    <div id={id} className={styles.container}>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.divider}>
        <dl className={styles.list}>
          {record &&
            record.map((item, index) => (
              <div key={index} className={styles.item}>
                <dt className={styles.label}>{item.label}</dt>
                <dd className={styles.value}>
                  <span>{item.value}</span>
                </dd>
              </div>
            ))}
        </dl>
      </div>
    </div>
  )
}
