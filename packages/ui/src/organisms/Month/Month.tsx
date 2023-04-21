import React, { FC, Fragment } from 'react'
import styles from './Month.module.css'
import classNames from 'classnames'

const DAYS_TEXT_WEEK = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']

interface OtherProperties {
  dayName?: string
  isCurrentMonth?: boolean
  isCurrentWeek?: boolean
}

export interface NewDay extends OtherProperties {
  dayweek: number
  daymonth: number
  date: string
  month: number
  isToday: boolean
  events: any
}

type NewWeek = NewDay[]

type NewMonth = NewWeek[]

export interface IDays {
  index: number
  uuid: string
  day: string
  weekday: number
  weekIndex: number
  ISO: string
  parentWeekUuid: string
  isToday?: boolean
  isWeekend?: boolean
}

export interface IWeek {
  index: number
  weekIndex: number
  weekUuid: string
  days: IDays[]
}

type Year = Record<number, IWeek[]>

export interface Calendar {
  selectedDate: string
  currentMonthIndex: number
  week: IWeek
  month: IWeek[]
  year: Year
  currentYear: number
  currentMonth: number
  currentWeek: number
}

interface EventsProps {
  ISO: string
  events: any
}

export interface MonthProps {
  month: NewMonth
  onClick: () => void
  ListEvent?: FC<EventsProps>
}

export const Month = ({ ListEvent, onClick, month }: MonthProps) => {
  console.log(month)
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
              weeks.map(
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
                )
              )}
          </div>
        ))}
    </div>
  )
}
