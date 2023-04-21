import { IDays } from '@/interfaces/tasks'
import { daysTextWeek } from '@Constants/calendar'
import { useHasReminders } from '../../../hooks/usehasReminder'
import classNames from 'classnames'
import dayjs from 'dayjs'
import styles from './styles.module.css'

const HeaderCell = ({ day, index }: { day: IDays; index: number }) => {
  return (
    <th
      key={index}
      className={classNames(styles.days, {
        // [styles.weekend]: [0, 6].includes(day.index),
        [styles.today]: dayjs().isSame(day.ISO, 'day'),
      })}
    >
      <span className={styles.day}>
        {daysTextWeek[index]} &nbsp;
        {day.day}
        {useHasReminders(day.ISO) && <span className={styles.indicator} />}
      </span>
    </th>
  )
}

export default HeaderCell
