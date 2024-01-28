import { RootState } from '@/store/store'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'

function Appointment() {
  const reminders = useSelector((state: RootState) => state.reminder.reminder)
  const { selectedDate } = useSelector((state: RootState) => state.calendar)

  const filteredReminders = reminders.filter((item) => {
    return dayjs(item.date).isSame(dayjs(selectedDate), 'day')
  })

  return (
    <ul>
      {filteredReminders.map((reminder) => (
        <li key={reminder.id}>
          {reminder.category}
          {reminder.patient}
          {reminder.title}
          {reminder.description}
          {reminder.date}
        </li>
      ))}
    </ul>
  )
}

export default Appointment
