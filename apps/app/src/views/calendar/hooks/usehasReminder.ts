import { RootState } from '@Store/store'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'

export function useHasReminders(date: string) {
  const reminders = useSelector((state: RootState) => state.reminder.reminder)
  return reminders.some((r) => {
    return dayjs(r.date).isSame(date, 'day')
  })
}
