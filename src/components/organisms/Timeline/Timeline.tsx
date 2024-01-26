import React from 'react'
import styles from './Timeline.module.css'

export interface TimelineProps {
  events: Array<{
    id: string
    title: string
    description?: string
    date: string
  }>
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const dateFormatter = new Intl.DateTimeFormat('es', {
    month: 'short',
    year: 'numeric',
  })

  const currentDate = new Date()

  const timelineEvents = [
    {
      id: 'start',
      date: currentDate,
      title: '',
      description: '',
    },
    // ...events,
    {
      id: 'end',
      date: currentDate,
      title: '',
      description: '',
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        {timelineEvents &&
          timelineEvents.map((event) => (
            <div key={event.id} className={styles.timelineItem}>
              <div className={styles.item}>
                <div className={styles.timelineLine} />
                {event.title !== '' && (
                  <span className={styles.event}>{event.title}</span>
                )}
                <div className={styles.date}>
                  {dateFormatter.format(new Date(event.date))}
                </div>
                {/* <p>{event.description}</p> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
