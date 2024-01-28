import { daysTextWeek } from '@/constants/calendar'
import dayjs from 'dayjs'

interface Days {
  index: number
  day: string
  date: string
}

export const useWeekdays = (week: number) => {
  // Obtener la fecha del domingo de la semana actual
  const today = new Date()
  const currentDay = today.getDay()
  const sunday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - currentDay + week * 7,
  )

  // Generar los días de la semana a partir de la fecha del domingo
  const days: Days[] = []

  for (let i = 0; i < 7; i++) {
    const day = new Date(
      sunday.getFullYear(),
      sunday.getMonth(),
      sunday.getDate() + i,
    )
    const dayMonth = dayjs(day).get('date')
    const date = dayjs(day).clone().format('DD/MM/YYYY')
    days.push({
      day: daysTextWeek[i].concat(' ', dayMonth.toString()),
      date,
      index: i,
    })
  }

  return { today, days }
}
