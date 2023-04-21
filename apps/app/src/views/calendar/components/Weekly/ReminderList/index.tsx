import { Reminder } from '@Interfaces/tasks'
import ReminderLabel from '../ReminderLabel'
import styles from './styles.module.css'

const ReminderList = ({ reminders }: { reminders: Reminder[] }) => {
  return (
    <ul className={styles.list}>
      {reminders &&
        reminders.map((reminder) => (
          <ReminderLabel
            key={reminder.id}
            category={reminder.category}
            startDate={reminder.startDate}
          />
        ))}
    </ul>
  )
}

export default ReminderList
