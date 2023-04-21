import { Consultation } from './consult'
import { Reminder } from './event'

export interface User {
  userID: string
  name: string
  company: string
  email: string
  phone: string
  access: string
  avatar: string
}

export type ClinicalState = {
  patient: Summary[]
  search: string
  filteredPatient: Summary[]
  pending: boolean
  error: boolean
}

export interface Summary {
  client: string
  opportunities: string
  laboratoryOrder: number
  prescription: number
  treatment: number
  patient: string
  result: number
  stage: string
  _id: string
}

export type ConsultState = {
  consult: Consultation[]
  search: string
  filteredConsult: Consultation[]
  pending: boolean
  error: boolean
}

export type ReminderState = {
  reminder: Reminder[]
  search: string
  filteredReminder: Reminder[]
  pending: boolean
  error: boolean
}
