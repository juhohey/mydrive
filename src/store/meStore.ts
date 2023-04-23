import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUser } from './userStore'

const initialState = {
  name: '',
} as TUser

const meStore = createSlice({
  name: 'me',
  initialState,
  reducers: {
    setMe: (state, action: PayloadAction<TUser>) => {
      return action.payload
    },
  },
})

export default meStore
