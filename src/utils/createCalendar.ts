import { REMINDER_STATE } from '@/../public/data/reminder-dummies'
import guid from './guid'
import dayjs from 'dayjs'

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
  events: any[]
}

export interface Week {
  weekUuid: string
  weekIndex: number
  days: Days[]
}

/**
 * function CreateCalendar
 *
 */

// Crear calendario
const createCalendar = (
  startWeekOfMonth: number,
  endWeekOfMonth: number,
  numberOfWeeks: number,
  currentYear: number,
): Week[] => {
  const monthArray = []

  let endWeekOfMonthRef = endWeekOfMonth

  if (endWeekOfMonth < startWeekOfMonth) {
    endWeekOfMonthRef = numberOfWeeks + 1
  }

  for (
    let weekIndex = startWeekOfMonth, weekArrayIndex = 0;
    weekIndex < endWeekOfMonthRef + 1;
    weekIndex++, weekArrayIndex++
  ) {
    const weekUuid = guid()
    const fechaActual = dayjs()

    // Empujar el objeto de la semana dentro del mes
    monthArray.push({
      index: weekArrayIndex,
      weekIndex,
      weekUuid,
      days: Array(7)
        .fill({ id: 0 }) // Llenar un array en blanco con 7 elementos
        .map((_, index): Days => {
          const date = dayjs() // Obtener la fecha en base al año de referencia
            .year(currentYear) // Establecer el año de referencia
            .week(weekIndex) // Obtener o establecer la semana del año en referencia
            .startOf('week') // Establecer el primer dia de la semana, 12:00 am
            .clone() // Crear un clon de la duracion. Las duraciones son mutables
            .add(index, 'day')

          return {
            uuid: guid(),
            parentWeekUuid: weekUuid, // Mantener el registro del padre
            dayweek: date.day(), // Añadir el indice del dia dentro de la semana a partir del domingo,
            daymonth: date.format('D'), // Establecer el numero del dia
            date: date.toISOString(), // Agregar la fecha en formato ISO
            isToday: date.isSame(fechaActual, 'day'),
            month: date.month(),
            events: REMINDER_STATE.filter(
              (element) => element.date === date.toISOString(),
            ),
          }
        }),
    })
  }
  return monthArray
}

export default createCalendar
