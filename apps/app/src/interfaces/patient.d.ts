export interface Patient {
  _id: string
  uid: string
  registrationDate: string
  patientInformation: PatientInformation
  clinicalRecord: ClinicalRecord
}

export interface PatientInformation {
  basicInformation: BasicInformation
  ocupationAndLifeStyle: OcupationAndLifeStyle
  sanitaryServices: SanitaryServices
}

export interface BasicInformation {
  name: string
  lastName: string
  birthDate: string
  sex: string
  maritalStatus: string
  ethnicity: string
}

export interface OcupationAndLifeStyle {
  workingHours: number
  recreationTime: number
  doExercises: boolean
  exercicesFrequency: string
  typeofExcercices: string
}

export interface SanitaryServices {
  description: string
}

interface ClinicalRecord {
  annotations: Annotations[]
  bloodTransfusion: BloodTransfusion[]
  drugReaction: DrugReaction[]
  habits: Habits[]
  heritageHistory: HeritageHistory[]
  pathologicalHistory: PathologicalHistory[]
  surgicalIntervention: SurgicalIntervention[]
  trauma: Trauma[]
}

export interface Annotations {
  text: string
  id: string
}

export interface BloodTransfusion {
  title: string
  description: string
  type: string
  level: string
  date: string
  id: string
}

export interface DrugReaction {
  title: string
  description: string
  id: string
}
export interface Habits {
  title: string
  description: string
  id: string
}

export interface HeritageHistory {
  hierarchy: string
  name: string
  disease: string
  patient: boolean
  description: string
  id: string
}

export interface PathologicalHistory {
  date: string
  title: string
  id: string
}

export interface SurgicalIntervention {
  title: string
  description: string
  date: string
  id: string
}

export interface Trauma {
  title: string
  description: string
  type: string
  level: string
  date: string
  fileURL: string
  id: string
}

/* --------------------------- interfaces into API -------------------------- */

export type TypeRecord =
  | 'annotations'
  | 'blood-transfusion'
  | 'drug-reaction'
  | 'habits'
  | 'heritage-history'
  | 'pathological-history'
  | 'surgical-intervention'
  | 'trauma'

export type UpdatePatient =
  | 'basic-information'
  | 'occupation-life-style'
  | 'sanitary-services'

/* ---------------------- interfaces into Store Patient --------------------- */

export type TypeClinicalRecord =
  | 'annotations'
  | 'bloodTransfusion'
  | 'drugReaction'
  | 'habits'
  | 'heritageHistory'
  | 'pathologicalHistory'
  | 'surgicalIntervention'
  | 'trauma'
