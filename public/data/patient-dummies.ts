import {
  Consultation,
  Identifier,
  LaboratoryItem,
  LaboratoryOrder,
  Prescription,
  PrescriptionItem,
  RecordConsultation,
  Treatment,
  TreatmentItem,
} from '@/interfaces/consult'
import { Summary } from '@/interfaces/state'
import { Patient } from '@/interfaces/patient'

/* ----------------------- PATIENT INFORMATION DUMMIES ---------------------- */

export const PATIENT_INFORMATION_DUMMIES: Patient = {
  _id: '63ddca24cd853ef903500097',
  uid: 'ABC1234',
  registrationDate: '2023-03-15T13:22:11.123456',
  patientInformation: {
    basicInformation: {
      name: 'Juan',
      lastName: 'Gómez',
      birthDate: '1985-06-10',
      sex: 'M',
      maritalStatus: 'married',
      ethnicity: 'Hispanic',
    },
    ocupationAndLifeStyle: {
      workingHours: 9,
      recreationTime: 2,
      doExercises: true,
      exercicesFrequency: 'twice a week',
      typeofExcercices: 'jogging, weightlifting',
    },
    sanitaryServices: {
      description: 'No current medical conditions',
    },
  },
  clinicalRecord: {
    annotations: [
      {
        text: 'Patient presented with flu-like symptoms',
        id: '0e947ca8-2f32-4ccf-938f-af258a705fb2',
      },
    ],
    bloodTransfusion: [
      {
        title: 'Blood transfusion after surgery',
        description: 'Received 2 units of blood',
        type: 'Whole blood',
        level: 'Moderate',
        date: '2022-11-05T08:10:00.000Z',
        id: 'b531536c-e7a1-42c2-ac7e-61b530e6e3c9',
      },
    ],
    drugReaction: [
      {
        title: 'Allergic reaction to penicillin',
        description: 'Developed hives and difficulty breathing',
        id: '2c34654e-60b2-485a-892b-add8dc570b01',
      },
    ],
    habits: [
      {
        title: 'Smoking',
        description: 'Smokes 10 cigarettes per day',
        id: 'd12edeb2-58e6-49e5-9b7e-3ecd31c101cf',
      },
    ],
    heritageHistory: [
      {
        hierarchy: 'Father',
        name: 'Luis Gómez',
        disease: 'Type 2 diabetes',
        patient: true,
        description: 'Father diagnosed at age 45',
        id: 'd0a45a80-45b2-4b08-bc88-ee30e6d94a16',
      },
    ],
    pathologicalHistory: [
      {
        date: '2020-01-05T14:30:00.000Z',
        title: 'Appendectomy',
        id: '31882079-a134-4a07-ac2f-5d0fb52c8225',
      },
    ],
    surgicalIntervention: [
      {
        title: 'Knee surgery',
        description: 'Arthroscopic surgery to repair torn meniscus',
        date: '2015-06-20T09:00:00.000Z',
        id: 'c635aa67-1dc9-4c20-bfce-aa37f22b95a6',
      },
    ],
    trauma: [
      {
        title: 'Car accident',
        description: 'Suffered minor injuries',
        type: 'Motor vehicle accident',
        level: 'Mild',
        date: '2010-03-10T18:15:00.000Z',
        fileURL: '',
        id: 'b10c4708-f75a-47e9-9d7e-a45072f2bc39',
      },
    ],
  },
}

/* --------------------------- CLINIC DUMMIES -------------------------- */

export const CLINIC_HEADERS_DUMMIES = [
  { field: 'patient', name: 'NAME', type: 'user' },
  { field: '_id', name: '#ID', type: 'string' },
  { field: 'status', name: 'STATUS', type: 'string' },
  { field: 'lastVisit', name: 'LAST VISIT', type: 'string' },
  { field: 'diagnosis', name: 'DIAGNOSIS', type: 'string' },
  { field: '_id', name: '', type: 'link' },
]

export const CLINIC_DATA_DUMMIES: Summary[] = [
  {
    patient: {
      name: 'Jill Brown',
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
    },
    _id: 'P-00151',
    status: 'Inactive',
    lastVisit: '2023-09-20',
    diagnosis: 'Obesity',
    result: 0,
    client: 'Clinic XYZ',
    opportunities: 'Opportunity I',
    laboratoryOrder: 1,
    prescription: 0,
    treatment: 5,
    stage: 'Stage 9',
  },
  {
    patient: {
      name: 'Robert Davis',
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
    },
    _id: 'P-05180',
    status: 'Active',
    lastVisit: '2023-11-08',
    diagnosis: 'Hypothyroidism',
    result: 0,
    client: 'Clinic ABC',
    opportunities: 'Opportunity J',
    laboratoryOrder: 2,
    prescription: 3,
    treatment: 1,
    stage: 'Stage 10',
  },
  {
    patient: {
      name: 'Lucho Chiquipu',
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
    },
    _id: 'P-04650',
    status: 'Active',
    lastVisit: '2023-12-15',
    diagnosis: 'New Diagnosis',
    result: 0,
    client: 'Clinic XYZ',
    opportunities: 'New Opportunity',
    laboratoryOrder: 5,
    prescription: 2,
    treatment: 4,
    stage: 'New Stage',
  },
  {
    patient: {
      name: 'Tom Williams',
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
    },
    _id: 'P-02118',
    status: 'Active',
    lastVisit: '2023-04-29',
    diagnosis: 'Depression',
    result: 0,
    client: 'Clinic ABC',
    opportunities: 'Opportunity F',
    laboratoryOrder: 2,
    prescription: 1,
    treatment: 4,
    stage: 'Stage 6',
  },
  {
    patient: {
      name: 'Sara Garcia',
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
    },
    _id: 'P-00989',
    status: 'Inactive',
    lastVisit: '2023-01-12',
    diagnosis: 'Arthritis',
    result: 0,
    client: 'Clinic XYZ',
    opportunities: 'Opportunity G',
    laboratoryOrder: 1,
    prescription: 4,
    treatment: 0,
    stage: 'Stage 7',
  },
  {
    patient: {
      name: 'Juan Perez',
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
    },
    _id: 'P-001205',
    status: 'Active',
    lastVisit: '2023-06-05',
    diagnosis: 'High Cholesterol',
    result: 0,
    client: 'Clinic ABC',
    opportunities: 'Opportunity H',
    laboratoryOrder: 3,
    prescription: 2,
    treatment: 3,
    stage: 'Stage 8',
  },
  {
    patient: {
      name: 'Bob Johnson',
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
    },
    _id: 'P-03991',
    status: 'Active',
    lastVisit: '2023-07-10',
    diagnosis: 'Allergies',
    result: 0,
    client: 'Clinic XYZ',
    opportunities: 'Opportunity C',
    laboratoryOrder: 3,
    prescription: 1,
    treatment: 2,
    stage: 'Stage 3',
  },
  {
    patient: {
      name: 'Mary Jones',
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
    },
    _id: 'P-08038',
    status: 'Inactive',
    lastVisit: '2023-02-05',
    diagnosis: 'Asthma',
    result: 0,
    client: 'Clinic ABC',
    opportunities: 'Opportunity D',
    laboratoryOrder: 0,
    prescription: 2,
    treatment: 1,
    stage: 'Stage 4',
  },
  {
    patient: {
      name: 'Alice Lee',
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
    },
    _id: 'P-09021',
    status: 'Active',
    lastVisit: '2023-08-18',
    diagnosis: 'Migraine',
    result: 0,
    client: 'Clinic XYZ',
    opportunities: 'Opportunity E',
    laboratoryOrder: 4,
    prescription: 3,
    treatment: 2,
    stage: 'Stage 5',
  },
  {
    patient: {
      name: 'John Doe',
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
    },
    _id: 'P-06981',
    status: 'Active',
    lastVisit: '2023-05-15',
    diagnosis: 'Hypertension',
    result: 0,
    client: 'Clinic XYZ',
    opportunities: 'Opportunity A',
    laboratoryOrder: 2,
    prescription: 4,
    treatment: 3,
    stage: 'Stage 1',
  },
  {
    patient: {
      name: 'Jane Smith',
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
    },
    _id: 'P-00269',
    status: 'Inactive',
    lastVisit: '2023-03-22',
    diagnosis: 'Diabetes',
    result: 0,
    client: 'Clinic ABC',
    opportunities: 'Opportunity B',
    laboratoryOrder: 1,
    prescription: 2,
    treatment: 5,
    stage: 'Stage 2',
  },
]

/* -------------------------- CONSULT DUMMIES -------------------------- */

export const CONSULT_HEADERS_DUMMIES = {
  es: [
    { field: '_id', name: 'Id Consulta', type: 'string' },
    { field: 'title', name: 'Motivo', type: 'string' },
    { field: 'date', name: 'Fecha', type: 'string' },
    { field: 'laboratoryOrder', name: 'Examenes', type: 'string' },
    { field: 'prescription', name: 'Recetas', type: 'string' },
    { field: 'treatment', name: 'Tratamiento', type: 'string' },
  ],
}

export const CONSULT_DATA_DUMMIES = [
  {
    _id: '1',
    title: 'Dolor de cabeza',
    date: '2023-04-20',
    laboratoryOrder: 'Examen físico y neurológico',
    prescription: 'Ibuprofeno 400mg cada 6 horas',
    treatment: 'Reposo y seguimiento médico',
  },
  {
    _id: '2',
    title: 'Fiebre',
    date: '2023-04-21',
    laboratoryOrder: 'Examen físico general',
    prescription: 'Paracetamol 500mg cada 8 horas',
    treatment: 'Hidratación y seguimiento médico',
  },
  {
    _id: '3',
    title: 'Tos persistente',
    date: '2023-04-18',
    laboratoryOrder: 'Radiografía de tórax',
    prescription: 'Antibiótico amoxicilina-clavulanato',
    treatment: 'Reposo y seguimiento médico',
  },
  {
    _id: '4',
    title: 'Dolor abdominal',
    date: '2023-04-16',
    laboratoryOrder: 'Examen físico y ecografía abdominal',
    prescription: 'Analgésico y antiinflamatorio',
    treatment: 'Dieta blanda y seguimiento médico',
  },
]

/* ------------------------- CONSULT RECORD DUMMIES ------------------------- */

// PrescriptionItem
const prescriptionItemExample: PrescriptionItem = {
  id: 'p123',
  title: 'Ibuprofen',
  description: 'Take two pills twice a day after meals',
}

// Prescription
const prescriptionExample: Prescription = {
  id: 'pr456',
  date: '2023-04-22',
  title: 'Pain Management',
  prescriptionItem: [prescriptionItemExample],
}

// LaboratoryItem
const laboratoryItemExample: LaboratoryItem = {
  id: 'l789',
  title: 'Blood Test',
  description: 'Check blood count and cholesterol levels',
  url: 'https://example.com/labresults',
}

// LaboratoryOrder
const laboratoryOrderExample: LaboratoryOrder = {
  id: 'lo101',
  patient: 'John Doe',
  date: '2023-04-20',
  title: 'Lab Order',
  laboratoryItem: [laboratoryItemExample],
}

// TreatmentItem
const treatmentItemExample: TreatmentItem = {
  id: 't123',
  title: 'Physical Therapy',
  description: 'Stretching exercises for lower back pain',
}

// Treatment
const treatmentExample: Treatment = {
  id: 'tr456',
  patient: 'Jane Doe',
  date: '2023-04-19',
  title: 'Back Pain Treatment',
  treatmentItem: [treatmentItemExample],
}

// RecordConsultation
const recordConsultationExample: RecordConsultation = {
  uid: 'rc123',
  title: 'Back Pain Consultation',
  notes: 'Patient complains of lower back pain',
  medicalImpression: 'Muscle strain',
  diagnostic: 'X-ray showed no abnormalities',
  treatment: treatmentExample,
  laboratoryOrder: laboratoryOrderExample,
  prescription: prescriptionExample,
  date: '2023-04-18',
}

// Identifier
const identifierExample: Identifier = {
  clinic: 'ABC Medical Center',
}

// Consultation
export const consultationExample: Consultation = {
  _id: 'c001',
  identifier: identifierExample,
  record: recordConsultationExample,
}

/* --------------------------------- OTHERS --------------------------------- */

export const traumaRecords = [
  {
    title: 'Fractura',
    description: 'Fractura de hombro',
    type: 'Fractura',
    level: 'leve',
    date: '2023/01/01',
    fileURL: 'http://localhost:3000/file',
    id: '1',
  },
  {
    description: 'Lesion de brazo',
    title: 'Lesion',
    type: 'Lesion',
    level: 'grave',
    date: '2023/01/01',
    fileURL: 'http://localhost:3000/file',
    id: '2',
  },
]

export const traumaHeaders = [
  { field: 'id', name: 'id', type: 'string' },
  { field: 'title', name: 'title', type: 'link' },
  { field: 'description', name: 'description', type: 'string' },
  { field: 'type', name: 'type', type: 'string' },
  { field: 'level', name: 'level', type: 'string' },
  { field: 'date', name: 'date', type: 'string' },
  { field: 'fileURL', name: 'fileURL', type: 'file' },
]
export const PRESCRIPTION_RECORDS = [
  {
    issue: 'Fractura',
    date: '2023/01/01',
    examn: 'http://localhost:3000/file',
    prescription: 'http://localhost:3000/file',
    id: '84584479',
    patient: 'Felipe',
    stage: 'cita',
    prescriptions: 10,
    examns: 10,
    op: 12,
  },
  {
    issue: 'Lesion',
    date: '2023/01/01',
    examn: 'http://localhost:3000/file',
    prescription: 'http://localhost:3000/file',
    id: '84584479',
    patient: 'Julian',
    stage: 'cita',
    prescriptions: 102,
    examns: 101,
    op: 120,
  },
]

export const PRESCRIPTION_HEADERS = [
  { field: 'id', name: 'Id Consulta', type: 'link' },
  { field: 'issue', name: 'Motivo', type: 'string' },
  { field: 'date', name: 'Fecha', type: 'string' },
  { field: 'examn', name: 'Examenes', type: 'file' },
  { field: 'prescription', name: 'Recetas', type: 'file' },
  { field: 'treatment', name: 'Tratamientos', type: 'file' },
]
