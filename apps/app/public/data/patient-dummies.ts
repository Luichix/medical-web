import { Patient } from '@Interfaces/patient'

const fecha = new Date()

export const initialStatePatient: Patient[] = [
  {
    _id: '63ddca24cd853ef903500097',
    uid: 'string',
    registrationDate: '2023-02-08T02:45:48.705458',
    patientInformation: {
      basicInformation: {
        name: 'Luichix',
        lastName: 'Rex',
        birthDate: '2023-02-08',
        sex: 'M',
        maritalStatus: 'single',
        ethnicity: 'unknown',
      },
      ocupationAndLifeStyle: {
        workingHours: 8,
        recreationTime: 4,
        doExercises: false,
        exercicesFrequency: 'gym',
        typeofExcercices: '',
      },
      sanitaryServices: {
        description: '',
      },
    },
    clinicalRecord: {
      annotations: [
        {
          text: '',
          id: '0e947ca8-2f32-4ccf-938f-af258a705fb2',
        },
      ],
      bloodTransfusion: [
        {
          title: '',
          description: '',
          type: '',
          level: '',
          date: '2023-02-08T02:45:48.583505',
          id: 'b531536c-e7a1-42c2-ac7e-61b530e6e3c9',
        },
      ],
      drugReaction: [
        {
          title: '',
          description: '',
          id: '2c34654e-60b2-485a-892b-add8dc570b01',
        },
      ],
      habits: [
        {
          title: '',
          description: '',
          id: 'd12edeb2-58e6-49e5-9b7e-3ecd31c101cf',
        },
      ],
      heritageHistory: [
        {
          hierarchy: '',
          name: '',
          disease: '',
          patient: false,
          description: '',
          id: 'd0a45a80-45b2-4b08-bc88-ee30e6d94a16',
        },
      ],
      pathologicalHistory: [
        {
          date: '2023-02-08T02:45:48.645350',
          title: '',
          id: '31882079-a134-4a07-ac2f-5d0fb52c8225',
        },
      ],
      surgicalIntervention: [
        {
          title: '',
          description: '',
          date: '2023-02-08T02:45:48.658628',
          id: 'c635aa67-1dc9-4c20-bfce-aa37f22b95a6',
        },
      ],
      trauma: [
        {
          title: '',
          description: '',
          type: '',
          level: '',
          date: '2023-02-08T02:45:48.672999',
          fileURL: '',
          id: 'b10c4708-f75a-47e9-9d7e-a45072f2bc39',
        },
      ],
    },
  },
]

export const headers = {
  es: [
    { field: 'patient', name: 'Paciente', type: 'string' },
    { field: '_id', name: 'ID Paciente', type: 'link' },
    { field: 'stage', name: 'Etapa', type: 'string' },
    { field: 'prescription', name: 'Receta', type: 'string' },
    { field: 'laboratoryOrder', name: 'Examenes', type: 'string' },
    { field: 'treatment', name: 'Tratamientos', type: 'string' },
    { field: 'opportunities', name: 'Oportunidades', type: 'string' },
  ],
}

export const headersPatient = {
  es: [
    { field: 'consultID', name: 'ID Consulta', type: 'link' },
    { field: 'issue', name: 'Motivo', type: 'string' },
    { field: 'date', name: 'Fecha', type: 'string' },
    { field: 'examn', name: 'Examenes', type: 'string' },
    { field: 'prescription', name: 'Recetas', type: 'string' },
    { field: 'treatment', name: 'Tratamiento', type: 'string' },
  ],
}

export const rows = [
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '1',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '2',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '3',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '4',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '5',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '6',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '7',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '8',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '9',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '10',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '11',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '12',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '13',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '14',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '15',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '16',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '17',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '18',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '19',
  },
  {
    patient: 'Luis',
    patientID: '081-250860',
    fecha: fecha.toLocaleDateString(),
    processID: '20',
  },
]

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

export const PATIENT_CONSULT_HEADERS = [
  { field: '_id', name: 'Id Consulta', type: 'link' },
  { field: 'title', name: 'Motivo', type: 'string' },
  { field: 'date', name: 'Fecha', type: 'string' },
  { field: 'laboratoryOrder', name: 'Examenes', type: 'string' },
  { field: 'prescription', name: 'Recetas', type: 'string' },
  { field: 'treatment', name: 'Tratamientos', type: 'string' },
]
