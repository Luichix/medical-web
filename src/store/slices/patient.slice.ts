import PatientData from '@/services/Patient'
import { PATIENT_INFORMATION_DUMMIES } from '@/../public/data/patient-dummies'
import { Patient, TypeClinicalRecord } from '@/interfaces/patient'
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
  patient: PATIENT_INFORMATION_DUMMIES,
  pending: false,
  error: false,
}

export const getPatient = createAsyncThunk(
  'history/getPatient',
  async (uid: string) => {
    // return await PatientData.getPatient(uid)
    return []
  },
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
          (elementRecord) => elementRecord.id === action.payload[record].id,
        )

        if (recordIndex >= 0) {
          Object.assign(
            state.patient.clinicalRecord[record][recordIndex],
            action.payload[record],
          )
        }
      }
    },
    deleteRecord(state, action) {
      if (state.patient._id === action.payload.id) {
        const typeRecord = action.payload.typeRecord as ClinicalRecordEnum
        const record = ClinicalRecordEnum[typeRecord]
        const recordIndex = state.patient.clinicalRecord[record].findIndex(
          (elementRecord) => elementRecord.id === action.payload[record].id,
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
        state.patient = payload[0] ?? PATIENT_INFORMATION_DUMMIES
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
