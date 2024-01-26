import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { ClinicalState } from '@/interfaces/state'
import ConsultAPI from '@/services/Consult'
import { CLINIC_DATA_DUMMIES } from '@/../public/data/patient-dummies'

const initialState: ClinicalState = {
  patient: CLINIC_DATA_DUMMIES,
  search: '',
  filteredPatient: CLINIC_DATA_DUMMIES,
  pending: false,
  error: false,
}

export const getClinical = createAsyncThunk(
  'clinical/getClinical',
  async () => {
    return await ConsultAPI.getConsultSummary('salud')
  },
)

const clinicalSlice = createSlice({
  name: 'clinical',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
      state.filteredPatient = state.patient.filter((patient) =>
        patient.patient.toLowerCase().includes(state.search.toLowerCase()),
      )
    },
    addClinical(state, action) {
      state.patient.push(action.payload)
    },
    deleteClinical(state, action) {
      const index = state.patient.findIndex(
        (clinical) => clinical._id === action.payload,
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
