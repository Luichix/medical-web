import { Consultation, ConsultationRecord } from './consult'
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
  patient: {
    name: string
    picture: string
  }
  result: number
  stage: string
  _id: string
  lastVisit: string
  status: string
  diagnosis: string
}

export type ConsultState = {
  consult: ConsultationRecord[]
  search: string
  filteredConsult: ConsultationRecord[]
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
