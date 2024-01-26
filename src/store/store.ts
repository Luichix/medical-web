import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import user from './slices/user.slice'
import patient from './slices/patient.slice'
import consult from './slices/consult.slice'
import clinical from './slices/clinical.slice'
import calendar from './slices/calendar.slice'
import reminder from './slices/reminder.slice'

export type RootState = {
  user: ReturnType<typeof user>
  clinical: ReturnType<typeof clinical>
  patient: ReturnType<typeof patient>
  calendar: ReturnType<typeof calendar>
  reminder: ReturnType<typeof reminder>
  consult: ReturnType<typeof consult>
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default function getStore(incomingPreloadState?: RootState) {
  const store = configureStore({
    reducer: combineReducers({
      user,
      clinical,
      patient,
      calendar,
      reminder,
      consult,
    }),
    preloadedState: incomingPreloadState,
  })
  return store
}

export const selectSearch = (state: RootState) => state.clinical.search
export const selectFilteredPokemon = (state: RootState) =>
  state.clinical.filteredPatient

export type AppStore = ReturnType<typeof getStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
