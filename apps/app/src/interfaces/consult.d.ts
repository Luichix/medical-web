interface PrescriptionItem {
  id: string
  title: string
  description: string
}
export interface Prescription {
  id: string
  date: string
  title: string
  prescriptionItem: PrescriptionItem[]
}

interface LaboratoryItem {
  id: string
  title: string
  description: string
  url: string
}

export interface LaboratoryOrder {
  id: string
  patient: string
  date: string
  title: string
  laboratoryItem: LaboratoryItem[]
}

interface TreatmentItem {
  id: string
  title: string
  description: string
}

export interface Treatment {
  id: string
  patient: string
  date: string
  title: string
  treatmentItem: TreatmentItem[]
}

export interface RecordConsultation {
  uid: string
  title: string
  notes: string
  medicalImpression: string
  diagnostic: string
  treatment: Treatment
  laboratoryOrder: LaboratoryOrder
  prescription: Prescription
  date: string
}

interface Identifier {
  clinic: string
}

export interface Consultation {
  _id: string
  identifier: Identifier
  record: RecordConsultation
}

export interface ConsultationRecord {
  _id: string
  title: string
  date: string
  laboratoryOrder: string
  prescription: string
  treatment: string
}
