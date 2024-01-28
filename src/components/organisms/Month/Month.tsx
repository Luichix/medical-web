import React, { FC, Fragment } from 'react'
import styles from './Month.module.css'
import classNames from 'classnames'

const DAYS_TEXT_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

interface ExtraProperties {
  isCurrentMonth?: boolean
  isCurrentWeek?: boolean
}

export interface Days extends ExtraProperties {
  uuid: string
  parentWeekUuid: string
  dayweek: number
  daymonth: string
  date: string
  month: number
  isToday: boolean
  events: any[]
}

export interface Week {
  weekUuid: string
  weekIndex: number
  days: Days[]
}

// interface EventsProps {
//   days: Days[]
//   dayweekActive: number
// }

type Month = Week[]

interface EventsProps {
  ISO: string
  events: any
}

export interface MonthProps {
  month: Month
  onClick: () => void
  ListEvent?: FC<EventsProps>
}

export const Month = ({ ListEvent, onClick, month }: MonthProps) => {
  return (
    <div className={styles.container}>
      {/* weekly header  */}
      <div className={styles.weeklyHeader}>
        {DAYS_TEXT_WEEK.map((item, index) => (
          <Fragment key={index}>
            <span className={styles.dayLong}>{item}</span>
            <span className={styles.dayShort}>{item[0]}</span>
          </Fragment>
        ))}
      </div>
      {/* month body */}
      {month &&
        month.map((weeks, index) => (
          <div key={index} className={styles.weekContainer}>
            {weeks &&
              weeks.days.map(
                ({ daymonth, dayweek, isToday, date, events }, index) => (
                  <div
                    key={index}
                    className={classNames(styles.weekday, {
                      [styles.today]: isToday,
                      [styles.weekend]: dayweek === 5 || dayweek === 6,
                    })}
                    onClick={() => onClick()}
                  >
                    <div>
                      <span
                        className={classNames(styles.day, {
                          [styles.indicator]: isToday,
                        })}
                      >
                        {daymonth}
                      </span>
                    </div>
                    {/* events */}
                    {ListEvent && <ListEvent ISO={date} events={events} />}
                  </div>
                ),
              )}
          </div>
        ))}
    </div>
  )
}
