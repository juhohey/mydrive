import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = [] as string[]

const snackStore = createSlice({
  name: 'snack',
  initialState,
  reducers: {
    showSnack: (state, action: PayloadAction<string>) => {
      return state.concat(action.payload)
    },
  },
})

export default snackStore
