import EventAPI from '@/pages/api/Event'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetAppointment, GetKanban } from '@Interfaces/reminder'
import { ReminderState } from '@/interfaces/state'
import { REMINDER_STATE } from 'public/data/reminder-dummies'

const reminder = REMINDER_STATE

const initialState: ReminderState = {
  reminder: REMINDER_STATE,
  search: '',
  filteredReminder: [],
  pending: false,
  error: false,
}

export const getReminder = createAsyncThunk(
  'reminder/getReminder',
  async (params: GetAppointment) => {
    const response = await EventAPI.getAppointment({ params })
    return []
  }
)

const eventSlice = createSlice({
  name: 'reminder',
  initialState,
  reducers: {
    adddEvent(state, action) {
      state.reminder.push(action.payload)
    },
    deletedEvent(state, action) {
      const index = state.reminder.findIndex(
        (record) => record.id === action.payload
      )
      if (index >= 0) {
        state.reminder.splice(index, 1)
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReminder.pending, (state) => {
        state.pending = true
      })
      .addCase(getReminder.fulfilled, (state, { payload }) => {
        state.pending = false
        // state.reminder = payload
        state.filteredReminder = payload
      })
      .addCase(getReminder.rejected, (state) => {
        state.pending = false
        state.error = true
      })
  },
})

export const { adddEvent, deletedEvent } = eventSlice.actions

export default eventSlice.reducer
