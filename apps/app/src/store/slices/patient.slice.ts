import PatientData from '@/pages/api/Patient'
import { initialStatePatient } from '@Data/patient-dummies'
import { Patient, TypeClinicalRecord } from '@Interfaces/patient'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export type PatientState = {
  patient: Patient
  pending: boolean
  error: boolean
}

export enum ClinicalRecordEnum {
  annotations = 'annotations',
  bloodTransfusion = 'bloodTransfusion',
  drugReaction = 'drugReaction',
  habits = 'habits',
  heritageHistory = 'heritageHistory',
  pathologicalHistory = 'pathologicalHistory',
  surgicalIntervention = 'surgicalIntervention',
  trauma = 'trauma',
}

const initialState: PatientState = {
  patient: {
    _id: '',
    uid: '',
    registrationDate: '',
    patientInformation: {
      basicInformation: {
        name: '',
        lastName: '',
        birthDate: '',
        sex: '',
        maritalStatus: '',
        ethnicity: '',
      },
      ocupationAndLifeStyle: {
        workingHours: 0,
        recreationTime: 0,
        doExercises: false,
        exercicesFrequency: '',
        typeofExcercices: '',
      },
      sanitaryServices: {
        description: '',
      },
    },
    clinicalRecord: {
      annotations: [],
      bloodTransfusion: [],
      drugReaction: [],
      habits: [],
      heritageHistory: [],
      pathologicalHistory: [],
      surgicalIntervention: [],
      trauma: [],
    },
  },
  pending: false,
  error: false,
}

export const getPatient = createAsyncThunk(
  'history/getPatient',
  async (uid: string) => {
    // return await PatientData.getPatient(uid)
    return []
  }
)

const patientsSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    addPatient: (state, action) => {
      state.patient = action.payload
    },
    deletePatient: () => initialState,
    addRecord(state, action) {
      if (state.patient._id === action.payload.id) {
        const typeRecord = action.payload.typeRecord as TypeClinicalRecord
        const record = ClinicalRecordEnum[typeRecord]
        state.patient.clinicalRecord[record].push(action.payload[record])
      }
    },
    updateRecord(state, action) {
      if (state.patient._id === action.payload.id) {
        const typeRecord = action.payload.typeRecord as ClinicalRecordEnum
        const record = ClinicalRecordEnum[typeRecord]
        const recordIndex = state.patient.clinicalRecord[record].findIndex(
          (elementRecord) => elementRecord.id === action.payload[record].id
        )

        if (recordIndex >= 0) {
          Object.assign(
            state.patient.clinicalRecord[record][recordIndex],
            action.payload[record]
          )
        }
      }
    },
    deleteRecord(state, action) {
      if (state.patient._id === action.payload.id) {
        const typeRecord = action.payload.typeRecord as ClinicalRecordEnum
        const record = ClinicalRecordEnum[typeRecord]
        const recordIndex = state.patient.clinicalRecord[record].findIndex(
          (elementRecord) => elementRecord.id === action.payload[record].id
        )
        if (recordIndex >= 0) {
          state.patient.clinicalRecord[record].splice(recordIndex, 1)
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPatient.pending, (state) => {
        state.pending = true
      })
      .addCase(getPatient.fulfilled, (state, { payload }) => {
        state.pending = false
        state.patient = payload[0] ?? initialStatePatient[0]
      })
      .addCase(getPatient.rejected, (state) => {
        state.pending = false
        state.error = true
      })
  },
})

export const {
  addPatient,
  deletePatient,
  addRecord,
  updateRecord,
  deleteRecord,
} = patientsSlice.actions
export default patientsSlice.reducer
