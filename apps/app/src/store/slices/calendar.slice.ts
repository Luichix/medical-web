import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  updatePreviousMonth,
  updateNextMonth,
} from '@/views/calendar/utils/updateTime'
import createCalendar, { IWeek } from '@/views/calendar/utils/createCalendar'
import { calculateCalendar } from '@/views/calendar/utils/calculateCalendar'
import dayjs from 'dayjs'
import { GetAppointment } from '@/interfaces/reminder'
import EventAPI from '@/pages/api/Event'

/* ---------------------------------- types --------------------------------- */

type FecthYear = Record<string, NewWeek>

type Year = Record<number, IWeek[]>

interface OtherProperties {
  dayName?: string
  isCurrentMonth?: boolean
  isCurrentWeek?: boolean
}

export interface NewDay extends OtherProperties {
  dayweek: number
  daymonth: number
  date: string
  month: number
  isToday: boolean
  events: any
}

type NewWeek = NewDay[]

type NewMonth = NewWeek[]

type NewYear = Record<string, NewWeek[]>

export interface NextCalendar {
  selectedDate: string
  currentDay: number
  currentWeek: number
  currentMonth: number
  currentYear: number
  week: NewWeek
  month: NewMonth
  year: NewYear
}

interface NewCalendarState {
  calendar: NextCalendar
  pending: boolean
  error: boolean
}

export interface Calendar extends NewCalendarState {
  selectedDate: string
  currentMonthIndex: number
  week: IWeek
  month: IWeek[]
  year: Year
  currentYear: number
  currentMonth: number
  currentWeek: number
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
  week: weekCalendar,
  month: monthCalendar,
  year: { 0: monthCalendar },
  currentMonth: currentMonth,
  currentYear: currentYear,
  currentWeek: currentWeek,
  calendar: {
    selectedDate: currentDate,
    currentDay: currentDay,
    currentWeek,
    currentMonth,
    currentYear,
    week: [],
    month: [],
    year: {},
  },
  pending: false,
  error: false,
}

/* ---------------------------------- fetch --------------------------------- */

export const getCalendar = createAsyncThunk(
  'calendar/getCalendar',
  async (params: GetAppointment) => {
    const response = await EventAPI.getAppointment({ params })
    const month = getWeeksOfMonth(response, currentMonth)
    const week = getCurrentWeekOfMonth(month) ?? month[0]
    return {
      year: response,
      month,
      week,
    }
  }
)

/* ------------------------------- interceptor ------------------------------ */

function getWeeksOfMonth(yearWeeks: FecthYear, monthNumber: number) {
  const weeks = Object.values(yearWeeks) // Obtenemos todas las semanas del año
  console.log(
    '🚀 ~ file: calendar.slice.ts:128 ~ getWeeksOfMonth ~ weeks:',
    weeks[0][0]
  )

  const weeksOfMonth = weeks.filter((week) => {
    // Filtramos las semanas que tienen días del mes especificado
    return week.some((day) => day.month === monthNumber)
  })
  return weeksOfMonth
}

function getCurrentWeekOfMonth(weeksOfMonth: NewMonth) {
  const now = new Date()
  const currentWeek = Object.values(weeksOfMonth).find((week) =>
    week.some((day) => {
      const date = new Date(day.date)
      return (
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth() &&
        date.getDate() === now.getDate()
      )
    })
  )
  return currentWeek || null
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
  extraReducers: (builder) => {
    builder
      .addCase(getCalendar.pending, (state) => {
        state.pending = true
      })
      .addCase(getCalendar.fulfilled, (state, { payload }) => {
        state.calendar.year = payload.year
        state.calendar.month = payload.month
        state.calendar.week = payload.week
        state.pending = false
      })
      .addCase(getCalendar.rejected, (state) => {
        state.pending = false
        state.error = true
      })
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
