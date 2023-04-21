import { NewDay } from '@/store/slices/calendar.slice'
import classNames from 'classnames'
import dayjs from 'dayjs'
import React, { Fragment } from 'react'
import styles from './styles.module.css'

interface Appointment {
  _id: string
  appointmentStart: string
  appointmentEnd: string
  title: string
  description: string
  uid: string
  appointmentCreator: string
  clinic: string
  date: string
  duration: number
}

const WeekEvents = ({
  days,
  dayweekActive,
}: {
  days: NewDay[]
  dayweekActive: number
}) => {
  return (
    <ol className={styles.events}>
      {days &&
        days.map(({ events, dayweek }, index) => (
          <Fragment key={index}>
            {events &&
              events.map((element: Appointment, index: number) => {
                const { rowStart, rowEnd } = calculateGridItem({
                  start: element.appointmentStart,
                  duration: element.duration,
                })

                return (
                  <li
                    key={index}
                    className={classNames(
                      styles.EventsListItem,
                      styles[`col_${dayweek}`],
                      {
                        [styles.showDay]: dayweek === dayweekActive,
                        [styles.hiddenDay]: dayweek !== dayweekActive,
                      }
                    )}
                    style={{
                      gridRow: `${rowStart}  / span ${rowEnd}`,
                    }}
                  >
                    <a href="#" className={styles.EventsListItemLink}>
                      <p className={styles.title}>{element.title}</p>
                      <p>
                        <time dateTime={element.appointmentStart}>
                          {element.date}
                        </time>
                      </p>
                    </a>
                  </li>
                )
              })}
          </Fragment>
        ))}
    </ol>
  )
}

export default WeekEvents

const calculateGridItem = ({
  start,
  duration,
}: {
  start: string
  duration: number
}) => {
  const ROWS_FOR_HOUR = 12
  const ROWS_INITIAL_SPACE = 2
  const ROWS_VALUE_ON_MINUTE = 5

  const appointmentStart = start
  const rowHour = dayjs(appointmentStart).hour() * ROWS_FOR_HOUR
  const rowMinute = Math.round(
    dayjs(appointmentStart).minute() / ROWS_VALUE_ON_MINUTE
  )

  const rowStart = ROWS_INITIAL_SPACE + rowHour + rowMinute
  const rowEnd = Math.round(duration / ROWS_VALUE_ON_MINUTE)

  return {
    rowStart,
    rowEnd,
  }
}
