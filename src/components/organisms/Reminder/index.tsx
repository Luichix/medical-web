import React from 'react'
import { Reminder } from '@/interfaces/reminder'
import Category from '../Category'
import styles from './styles.module.css'

type Category = 'appointment' | 'consultation' | 'exam' | 'diagnosis'

interface RemiderProps {
  category: Category
  reminders: Reminder[]
}

const Reminder = ({ reminders, category }: RemiderProps) => {
  const filterReminders = (category: Category) => {
    return reminders.filter((item: any) => item.category === category)
  }

  return (
    <div className={styles.container}>
      <h4>{category}</h4>
      <ul>
        {filterReminders(category).map((item: any) => (
          <Category key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default Reminder
