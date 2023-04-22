import useTimeRest from '@Hooks/useTimeRest'
import dayjs from 'dayjs'
import styles from './styles.module.css'

const Category = ({ item }: any) => {
  const createdAt = dayjs(item.date).toDate()
  const timerest = useTimeRest(createdAt.getTime())
  return (
    <li className={styles.container}>
      <h5>{item.title}</h5>
      <span>{item.patient}</span>
      <span>{timerest}</span>
    </li>
  )
}

export default Category
