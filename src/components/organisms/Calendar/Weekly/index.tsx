import React from 'react'
import { hoursArrayNumber, hoursArrayString } from '@/constants/calendar'
import styles from './styles.module.css'
import HeaderCell from '@/components/organisms/Calendar/Weekly/HeaderCell'
import { IDays, IWeek } from '@/interfaces/tasks'
import { updateSelectedDate } from '@/store/slices/calendar.slice'
import { RootState, useAppDispatch } from '@/store/store'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import BodyCell from '@/components/organisms/Calendar/Weekly/BodyCell'
import { Days } from '@/utils/createCalendar'

const Weekly = ({ onModal }: { onModal: () => void }) => {
  const dispatch = useAppDispatch()
  const { week } = useSelector((state: RootState) => state.calendar)
  const reminders = useSelector((state: RootState) => state.reminder.reminder)
  function getHour(date: Date) {
    return date.getHours() + date.getMinutes() / 60
  }

  const handleModal = (day: Days) => {
    dispatch(updateSelectedDate(day.date))
    onModal()
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.column}>
            <th />
            {week.days.map((day: any, index: any) => (
              <HeaderCell key={index} day={day} index={index} />
            ))}
          </tr>
        </thead>
        <tbody>
          {hoursArrayNumber.map((hour) => (
            <tr key={hour} className={styles.row}>
              <td className={styles.hour}>
                <span>{hoursArrayString[hour]}</span>
              </td>
              {week.days.map((day: any, index: any) => {
                const dayReminders = reminders.filter((reminder) => {
                  const isSameDay = dayjs(reminder.date).isSame(day.date, 'day')
                  const startHour = getHour(dayjs(reminder.startDate).toDate())
                  const endHour = getHour(dayjs(reminder.endDate).toDate())
                  const isBetweenHours =
                    startHour >= hour && hour + 1 >= endHour
                  return isSameDay && isBetweenHours
                })

                return (
                  <BodyCell
                    key={index}
                    dayReminders={dayReminders}
                    day={day}
                    handleModal={handleModal}
                  />
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Weekly
