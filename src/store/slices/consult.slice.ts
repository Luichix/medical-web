import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { ConsultState } from '@/interfaces/state'
import ConsultAPI from '@/page/api/Consult'
import { CONSULT_DATA_DUMMIES } from '@/../public/data/patient-dummies'

const initialState: ConsultState = {
  consult: CONSULT_DATA_DUMMIES,
  search: '',
  filteredConsult: CONSULT_DATA_DUMMIES,
  pending: false,
  error: false,
}

export const getConsult = createAsyncThunk(
  'consult/getConsult',
  async ({ uid, idRecord }: { uid: string; idRecord: string }) => {
    return await ConsultAPI.getConsultRecord(uid, idRecord)
  },
)

const consultSlice = createSlice({
  name: 'consult',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
      state.filteredConsult = state.consult.filter((record) =>
        record.title.toLowerCase().includes(state.search.toLowerCase()),
      )
    },
    addConsult(state, action) {
      state.consult.push(action.payload)
    },
    deleteConsult(state, action) {
      const index = state.consult.findIndex(
        (record) => record._id === action.payload,
      )
      if (index >= 0) {
        state.consult.splice(index, 1)
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConsult.pending, (state) => {
        state.pending = true
      })
      .addCase(getConsult.fulfilled, (state, { payload }) => {
        state.pending = false
        state.consult = payload
        state.filteredConsult = payload
      })
      .addCase(getConsult.rejected, (state) => {
        state.pending = false
        state.error = true
      })
  },
})

export const { setSearch, addConsult, deleteConsult } = consultSlice.actions
export default consultSlice.reducer
