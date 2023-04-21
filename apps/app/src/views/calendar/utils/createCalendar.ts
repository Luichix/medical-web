import guid from './guid'
import dayjs from 'dayjs'

export interface IWeek {
  index: number
  weekIndex: any
  weekUuid: string
  days: IDays[]
}

export interface IDays {
  uuid: string
  parentWeekUuid: string
  day: string
  weekday: number
  ISO: string
  weekIndex: number
  index: number
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
  currentYear: number
): IWeek[] => {
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

    // Empujar el objeto de la semana dentro del mes
    monthArray.push({
      index: weekArrayIndex,
      weekIndex,
      weekUuid,
      days: Array(7)
        .fill({ id: 0 }) // Llenar un array en blanco con 7 elementos
        .map((_, index): IDays => {
          const date = dayjs() // Obtener la fecha en base al año de referencia
            .year(currentYear) // Establecer el año de referencia
            .week(weekIndex) // Obtener o establecer la semana del año en referencia
            .startOf('week') // Establecer el primer dia de la semana, 12:00 am
            .clone() // Crear un clon de la duracion. Las duraciones son mutables
            .add(index, 'day')

          return {
            index: index,
            uuid: guid(),
            day: date.format('D'), // Establecer el numero del dia
            weekday: date.day(), // Añadir el indice del dia dentro de la semana a partir del domingo,
            ISO: date.toISOString(), // Agregar la fecha en formato ISO
            weekIndex, // Añadir el indice de la semana del año
            parentWeekUuid: weekUuid, // Mantener el registro del padre
          }
        }),
    })
  }
  return monthArray
}

export default createCalendar
