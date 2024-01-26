import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear'
import isLeapYear from 'dayjs/plugin/isLeapYear'
dayjs.extend(weekOfYear)
dayjs.extend(isoWeeksInYear)
dayjs.extend(isLeapYear)

export const calculateCalendar = (year: number, month: number) => {
  // Obtener datos del periodo
  const date = `${year}-${month + 1}-1`
  const initialDate = dayjs(date)
  const numberOfWeeks = initialDate.isoWeeksInYear()

  // Establecer la fecha inicio y final del mes actual
  const startDateOfMonth = dayjs(date).startOf('month')
  const endDateOfMonth = dayjs(date).endOf('month')

  // Obtener el numero de semana inicial del mes
  const startWeekOfMonth = dayjs(startDateOfMonth).week()
  const endWeekOfMonth = dayjs(endDateOfMonth).week()

  const values = {
    numberOfWeeks,
    startWeekOfMonth,
    endWeekOfMonth,
  }

  return values
}
