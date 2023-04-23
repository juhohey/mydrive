import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TFiles = {}
export type TFile = {
  name: string
}

const initialState = {
  data: [] as TFile[],
  status: '',
}

const filesStore = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setFiles: (state, action: PayloadAction<TFiles>) => {
      return { ...state, files: action.payload }
    },
  },
})

export default filesStore
