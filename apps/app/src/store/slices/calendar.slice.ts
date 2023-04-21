import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  updatePreviousMonth,
  updateNextMonth,
} from '@/views/calendar/utils/updateTime'
import createCalendar, { Week } from '@/views/calendar/utils/createCalendar'
import { calculateCalendar } from '@/views/calendar/utils/calculateCalendar'
import dayjs from 'dayjs'
import { GetAppointment } from '@/interfaces/reminder'
import EventAPI from '@/pages/api/Event'

/* ---------------------------------- types --------------------------------- */

type FecthYear = Record<string, Week[]>

type Year = Record<number, Week[]>

export interface Calendar {
  selectedDate: string
  currentMonthIndex: number
  currentDay: number
  currentMonth: number
  currentWeek: number
  currentYear: number
  week: Week
  month: Week[]
  year: Year
}

/* ------------------------------ initial state ----------------------------- */

const currentDate = dayjs().toISOString()
const currentDay = dayjs().day()
const currentYear = dayjs().year()
const currentMonth = 3
const currentWeek = 0
const monthInitialState = calculateCalendar(currentYear, currentMonth)

const monthCalendar = createCalendar(
  monthInitialState.startWeekOfMonth,
  monthInitialState.endWeekOfMonth,
  monthInitialState.numberOfWeeks,
  currentYear
)

const weekCalendar = monthCalendar[currentWeek]

const initialState: Calendar = {
  selectedDate: currentDate,
  currentMonthIndex: 0,
  currentDay: currentDay,
  currentWeek: currentWeek,
  currentMonth: currentMonth,
  currentYear: currentYear,
  week: weekCalendar,
  month: monthCalendar,
  year: { 0: monthCalendar },
}

/* ---------------------------------- slice --------------------------------- */

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: initialState,
  reducers: {
    getPreviousMonth: (state) => {
      const {
        prevMonthIndex,
        updateMonthCalendar,
        updatedYearCalendar,
        updateYear,
        updateMonth,
      } = updatePrevCalendar(state)

      return {
        ...state,
        currentMonthIndex: prevMonthIndex,
        week: updateMonthCalendar[0],
        month: updatedYearCalendar[prevMonthIndex],
        year: updatedYearCalendar,
        currentYear: updateYear,
        currentMonth: updateMonth,
        currentWeek: 0,
      }
    },
    getNextMonth: (state) => {
      const {
        nextMonthIndex,
        updateMonthCalendar,
        updatedYearCalendar,
        updateYear,
        updateMonth,
      } = updateNextCalendar(state)
      return {
        ...state,
        currentMonthIndex: nextMonthIndex,
        week: updateMonthCalendar[0],
        month: updatedYearCalendar[nextMonthIndex],
        year: updatedYearCalendar,
        currentYear: updateYear,
        currentMonth: updateMonth,
        currentWeek: 0,
      }
    },
    getPreviousWeek: (state) => {
      let updateWeek, updateWeekCalendar

      // Comprobar si el indice de la semana corresponde a la primera semana del mes
      if (state.currentWeek === 0) {
        // Generar los valores del mes previo
        const {
          prevMonthIndex,
          updateMonthCalendar,
          updatedYearCalendar,
          updateYear,
          updateMonth,
        } = updatePrevCalendar(state)

        // Seleccionar el indice de la semana en el mes previo generado
        updateWeek = updateMonthCalendar.length - 1

        // Comprobar el indice de la semana en el año para no repetir la semana en el anterior mes seleccionado
        if (
          state.week.weekIndex === updateMonthCalendar[updateWeek].weekIndex
        ) {
          updateWeek -= 1
          updateWeekCalendar = updateMonthCalendar[updateWeek]
        } else {
          updateWeekCalendar = updateMonthCalendar[updateWeek]
        }

        return {
          ...state,
          currentMonthIndex: prevMonthIndex,
          week: updateWeekCalendar,
          month: updatedYearCalendar[prevMonthIndex],
          year: updatedYearCalendar,
          currentYear: updateYear,
          currentMonth: updateMonth,
          currentWeek: updateWeek,
        }
      } else {
        // Seleccionar el indice de la semana en el mes en curso
        updateWeek = state.currentWeek - 1
        updateWeekCalendar = state.month[updateWeek]

        return {
          ...state,
          week: updateWeekCalendar,
          currentWeek: updateWeek,
        }
      }
    },
    getNextWeek: (state) => {
      let updateWeek, updateWeekCalendar

      // Comprobar si el indice de la semana corresponde a la ultima semana del mes
      if (state.currentWeek === state.month.length - 1) {
        // Generar los valores del mes siguiente
        const {
          nextMonthIndex,
          updateMonthCalendar,
          updatedYearCalendar,
          updateYear,
          updateMonth,
        } = updateNextCalendar(state)

        // Seleccionar el indice de la semana en el mes siguiente generado
        updateWeek = 0

        // Comprobar el indice de la semana en el año para no repetir la semana en el siguiente mes seleccionado
        if (
          state.week.weekIndex === updateMonthCalendar[updateWeek].weekIndex
        ) {
          updateWeek += 1
          updateWeekCalendar = updateMonthCalendar[updateWeek]
        } else {
          updateWeekCalendar = updateMonthCalendar[updateWeek]
        }

        return {
          ...state,
          currentMonthIndex: nextMonthIndex,
          week: updateWeekCalendar,
          month: updatedYearCalendar[nextMonthIndex],
          year: updatedYearCalendar,
          currentYear: updateYear,
          currentMonth: updateMonth,
          currentWeek: updateWeek,
        }
      } else {
        // Seleccionar el indice de la semana en el mes en curso
        updateWeek = state.currentWeek + 1
        updateWeekCalendar = state.month[updateWeek]

        return {
          ...state,
          week: updateWeekCalendar,
          currentWeek: updateWeek,
        }
      }
    },
    updateSelectedDate: (state, action) => {
      const selectedDate = action.payload
      console.log(selectedDate)
      return {
        ...state,
        selectedDate: selectedDate,
      }
    },
    getCurrentDate: () => initialState,
  },
})

export const {
  getPreviousMonth,
  getNextMonth,
  getPreviousWeek,
  getNextWeek,
  getCurrentDate,
  updateSelectedDate,
} = calendarSlice.actions

export default calendarSlice.reducer

const updatePrevCalendar = (state: Calendar) => {
  // Obtener el indice del mes previo
  const prevMonthIndex = state.currentMonthIndex - 1

  // Actualizar a los periodos de mes y años previos
  const { updateMonth, updateYear } = updatePreviousMonth({
    year: state.currentYear,
    month: state.currentMonth,
  })

  // Obtener los valores correspondientes a las semanas del periodo actualizado
  const { startWeekOfMonth, endWeekOfMonth, numberOfWeeks } = calculateCalendar(
    updateYear,
    updateMonth
  )

  // Verificar si es generar el calendario del mes previo
  const updateMonthCalendar = state.year[prevMonthIndex]
    ? state.year[prevMonthIndex]
    : createCalendar(
        startWeekOfMonth,
        endWeekOfMonth,
        numberOfWeeks,
        updateYear
      )

  // Objeto de actualizacion de la propiedad year
  const updatedYearCalendar = {
    ...state.year,
    [state.currentMonthIndex]: state.month,
    [prevMonthIndex]: updateMonthCalendar,
  }
  return {
    prevMonthIndex,
    updateMonthCalendar,
    updatedYearCalendar,
    updateYear,
    updateMonth,
  }
}

const updateNextCalendar = (state: Calendar) => {
  // Obtener el indice del mes siguiente
  const nextMonthIndex = state.currentMonthIndex + 1

  // Actualizar a los periodos de mes y años siguientes
  const { updateMonth, updateYear } = updateNextMonth({
    year: state.currentYear,
    month: state.currentMonth,
  })

  // Obtener los valores correspondientes a las semanas del periodo actualizado
  const { startWeekOfMonth, endWeekOfMonth, numberOfWeeks } = calculateCalendar(
    updateYear,
    updateMonth
  )

  // Verificar si es generar el calendario del mes siguiente
  const updateMonthCalendar = state.year[nextMonthIndex]
    ? state.year[nextMonthIndex]
    : createCalendar(
        startWeekOfMonth,
        endWeekOfMonth,
        numberOfWeeks,
        updateYear
      )

  // Objeto de actualizacion de la propiedad year
  const updatedYearCalendar = {
    ...state.year,
    [state.currentMonthIndex]: state.month,
    [nextMonthIndex]: updateMonthCalendar,
  }

  return {
    nextMonthIndex,
    updateMonthCalendar,
    updatedYearCalendar,
    updateYear,
    updateMonth,
  }
}
