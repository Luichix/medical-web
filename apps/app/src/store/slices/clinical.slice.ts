import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { ClinicalState } from '@/interfaces/state'
import ConsultAPI from '@/pages/api/Consult'

const initialState: ClinicalState = {
  patient: [],
  search: '',
  filteredPatient: [],
  pending: false,
  error: false,
}

export const getClinical = createAsyncThunk(
  'clinical/getClinical',
  async () => {
    return await ConsultAPI.getConsultSummary('salud')
  }
)

const clinicalSlice = createSlice({
  name: 'clinical',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
      state.filteredPatient = state.patient.filter((patient) =>
        patient.patient.toLowerCase().includes(state.search.toLowerCase())
      )
    },
    addClinical(state, action) {
      state.patient.push(action.payload)
    },
    deleteClinical(state, action) {
      const index = state.patient.findIndex(
        (clinical) => clinical._id === action.payload
      )
      if (index >= 0) {
        state.patient.splice(index, 1)
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClinical.pending, (state) => {
        state.pending = true
      })
      .addCase(getClinical.fulfilled, (state, { payload }) => {
        state.pending = false
        state.patient = payload.message.summary
        state.filteredPatient = payload.message.summary
      })
      .addCase(getClinical.rejected, (state) => {
        state.pending = false
        state.error = true
      })
  },
})

export const { setSearch, addClinical, deleteClinical } = clinicalSlice.actions
export default clinicalSlice.reducer

/***

import { Patient } from '@Interfaces/patient'
import { createSlice } from '@reduxjs/toolkit' //createAsyncThunk,
import { HYDRATE } from 'next-redux-wrapper'

const initialState: Patient[] = []

enum ClinicalRecord {
  annotations = 'annotations',
  bloodTransfusion = 'bloodTransfusion',
  drugReaction = 'drugReaction',
  habits = 'habits',
  heritageClinical = 'heritageClinical',
  pathologicalClinical = 'pathologicalClinical',
  surgicalIntervention = 'surgicalIntervention',
  trauma = 'trauma',
}

const patientsSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    getPatients: (_, action) => action.payload,
    addPatient(state, action) {
      state.push(action.payload)
    },
    deletePatient(state, action) {
      const index = state.findIndex((patient) => patient._id === action.payload)
      if (index >= 0) {
        state.splice(index, 1)
      }
    },
    addRecord(state, action) {
      const index = state.findIndex(
        (patient) => patient._id === action.payload.id
      )
      if (index >= 0) {
        const typeRecord = action.payload.typeRecord as ClinicalRecord
        const record = ClinicalRecord[typeRecord]
        state[index].clinicalRecord[record].push(action.payload[record])
      }
    },
    updateRecord(state, action) {
      const index = state.findIndex(
        (patient) => patient._id === action.payload.id
      )

      if (index >= 0) {
        const typeRecord = action.payload.typeRecord as ClinicalRecord
        const record = ClinicalRecord[typeRecord]

        const recordIndex = state[index].clinicalRecord[record].findIndex(
          (r) => r.id === action.payload[record].id
        )
        if (recordIndex >= 0) {
          Object.assign(
            state[index].clinicalRecord[record][recordIndex],
            action.payload[record]
          )
        }
      }
    },
    deleteRecord(state, action) {
      const index = state.findIndex(
        (patient) => patient._id === action.payload.id
      )

      if (index >= 0) {
        const typeRecord = action.payload.typeRecord as ClinicalRecord
        const record = ClinicalRecord[typeRecord]
        const recordIndex = state[index].clinicalRecord[record].findIndex(
          (r) => r.id === action.payload[record].id
        )
        if (recordIndex >= 0) {
          state[index].clinicalRecord[record].splice(recordIndex, 1)
        }
      }
    },
  },
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload.patient,
  //     }
  //   },
  // },
  // extraReducers: (builder) => ({
  //   [HYDRATE]: builder.addCase(getPatients.fulfilled, (state, action) => {
  //     console.log('HYDRATE', state, action.payload)
  //     return {
  //       ...state,
  //       ...action.payload,
  //     }
  //   }),
  // }),
  extraReducers: (builder) => ({
    [HYDRATE]: builder.addDefaultCase((_, action) => action.payload?.patient),
  }),
})

// export const getPatients = createAsyncThunk(
//   'patient/getPatients',
//   async (patients: Patient[]) => {
//     return patients
//   }
// )

export const {
  getPatients,
  addPatient,
  deletePatient,
  addRecord,
  updateRecord,
  deleteRecord,
} = patientsSlice.actions
export default patientsSlice.reducer
*/
