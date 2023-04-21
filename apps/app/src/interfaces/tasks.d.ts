export interface Reminder {
  id: number | string
  title: string
  date: string
  description: string
  patient: string
  patientID: string
  category: 'cita' | 'consulta' | 'examen' | 'diagnostico'
  startDate: string
  endDate: string
  done: boolean
}

export type LabelReminder = Pick<Reminder, 'id', 'category', 'starDate'>

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

export interface DayProps {
  onModal: () => void
  day: string
  weekday: number
  ISO: string
}
