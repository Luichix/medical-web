import { IDays } from '@/interfaces/tasks'
import { daysTextWeek } from '@/constants/calendar'
import { useHasReminders } from '@/hooks/usehasReminder'
import classNames from 'classnames'
import dayjs from 'dayjs'
import styles from './styles.module.css'
import { Days } from '@/components/organisms/Weekly/Weekly'

const HeaderCell = ({ day, index }: { day: Days; index: number }) => {
  return (
    <th
      key={index}
      className={classNames(styles.days, {
        // [styles.weekend]: [0, 6].includes(day.index),
        [styles.today]: dayjs().isSame(day.date, 'day'),
      })}
    >
      <span className={styles.day}>
        {daysTextWeek[index]} &nbsp;
        {day.daymonth}
        {useHasReminders(day.date) && <span className={styles.indicator} />}
      </span>
    </th>
  )
}

export default HeaderCell
