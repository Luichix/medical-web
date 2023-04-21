import React from 'react'
import styles from './styles.module.css'
import dayjs from 'dayjs'
import { LabelReminder } from '@Interfaces/tasks'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '@Constants/reminder'

function ReminderLabel({ category, startDate }: LabelReminder) {
  const startHour = dayjs(startDate).format('HH:mm')

  // hook useDrag to move reminder label
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.REMINDER_LABEL,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <li
      ref={drag}
      className={styles.reminder}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
    >
      <span>{category}</span>
      <span>{startHour}</span>
    </li>
  )
}

export default ReminderLabel
