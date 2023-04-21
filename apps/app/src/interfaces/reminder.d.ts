export interface Appointment {
  uid: string
  title: string
  description: string
  org: string
  appointmentDate: string
  appointmentCreator: string
}

export interface GetAppointment {
  clinic: string
  start?: string
  end?: string
  uid?: string
  all?: boolean
  id?: string
}

export interface Kanban {
  uid: string
  title: string
  description: string
  org: string
  startDate: string
  patient: string
  activityId: string
  stage: string
}

export interface GetKanban {
  id: string
  uid: string
  start: string
  end: string
  all: boolean
  stage: string
}

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
