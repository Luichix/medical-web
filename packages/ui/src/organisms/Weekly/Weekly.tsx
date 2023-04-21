import { FC, Fragment, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import styles from './Weekly.module.css'

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
  events: []
}

export interface Week {
  weekUuid: string
  weekIndex: number
  days: Days[]
}

interface EventsProps {
  days: Days[]
  dayweekActive: number
}

const DAYS_TEXT_WEEK = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']

const HOURS = [
  '12AM',
  '1AM',
  '2AM',
  '3AM',
  '4AM',
  '5AM',
  '6AM',
  '7AM',
  '8AM',
  '9AM',
  '10AM',
  '11AM',
  '12PM',
  '1PM',
  '2PM',
  '3PM',
  '4PM',
  '5PM',
  '6PM',
  '7PM',
  '8PM',
  '9PM',
  '10PM',
  '11PM',
]

export interface WeeklyProps {
  week: Week
  onClick: () => void
  ListEvent?: FC<EventsProps>
}

export const Weekly = ({ week, onClick, ListEvent }: WeeklyProps) => {
  const container = useRef<HTMLDivElement>(null)
  const containerNav = useRef<HTMLDivElement>(null)
  const containerOffset = useRef<HTMLDivElement>(null)
  const [dayweekActive, setDayweekActive] = useState<number>(0)

  useEffect(() => {
    if (container.current && containerNav.current && containerOffset.current) {
      // Set the container scroll position based on the current time.
      const currentMinute = new Date().getHours() * 60
      container.current.scrollTop =
        ((container.current.scrollHeight -
          containerNav.current.offsetHeight -
          containerOffset.current.offsetHeight) *
          currentMinute) /
        1440
    }
  }, [container, containerNav, containerOffset])

  return (
    <div className={styles.weekly}>
      <div ref={container} className={styles.container}>
        <div className={styles.section}>
          <div ref={containerNav} className={styles.nav}>
            <div className={styles.columnMobile}>
              {week.days.map(({ daymonth, dayweek, isToday }, index) => (
                <button
                  key={index}
                  type="button"
                  className={styles.centeredColumnDay}
                  onClick={() => setDayweekActive(dayweek)}
                >
                  {DAYS_TEXT_WEEK[dayweek][0]}
                  <span
                    className={classNames(styles.dayMobile, {
                      [styles.dayMobileActive]: dayweek === dayweekActive,
                    })}
                  >
                    {daymonth}
                  </span>
                </button>
              ))}
            </div>
            <div className={classNames(styles.columnDesktop)}>
              <div className={styles.columnDesktopEnd} />
              {week.days.map(({ daymonth, dayweek, isToday }, index) => (
                <div key={index} className={styles.dayContainer}>
                  <span className={classNames({ [styles.dayItem]: isToday })}>
                    {DAYS_TEXT_WEEK[dayweek]}
                    <span
                      className={classNames(styles.day, {
                        [styles.today]: isToday,
                      })}
                    >
                      {daymonth}
                    </span>
                  </span>
                </div>
              ))}
              <div></div>
            </div>
          </div>
          <div className={styles.bodyContainer}>
            <div className={styles.cellSticky} />
            <div className={styles.grid}>
              {/* Horizontal lines */}
              <div className={styles.horizontalLines}>
                <div ref={containerOffset} className={styles.containerOffset} />
                {HOURS.map((item, index) => (
                  <Fragment key={index}>
                    <div>
                      <div className={styles.hourLabel}>{item}</div>
                    </div>
                    <div></div>
                  </Fragment>
                ))}
                <div />
              </div>

              {/* Vertical lines */}
              <div className={styles.verticalLines}>
                <div className={styles.col_1} />
                <div className={styles.col_2} />
                <div className={styles.col_3} />
                <div className={styles.col_4} />
                <div className={styles.col_5} />
                <div className={styles.col_6} />
                <div className={styles.col_7} />
                <div className={styles.col_8} />
              </div>
              {/* Events */}
              {ListEvent && (
                <ListEvent days={week.days} dayweekActive={dayweekActive} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
