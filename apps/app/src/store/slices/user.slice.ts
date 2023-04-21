import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '@Interfaces/state'

const initialState: User = {
  userID: '01',
  name: 'Luichix',
  email: 'luichix.rex@gmail.com',
  phone: '84584479',
  company: '502540379651',
  avatar: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/10.png',
  access: 'admin',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    createUser: (_, action) => action.payload,
    modifyUser: (state, action: PayloadAction<object>) => ({
      ...state,
      ...action.payload,
    }),
    resetUser: () => initialState,
  },
})

export const { createUser, modifyUser, resetUser } = userSlice.actions

export default userSlice.reducer
