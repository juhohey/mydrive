import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { get } from '../client/http'
import { apiRouteFile } from '../client/routes'

export type TFile = {
  name: string
}

const initialState = {
  data: [] as TFile[],
  status: 'initial',
}

const filesStore = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setFiles: (state, action: PayloadAction<TFile[]>) => {
      return { ...state, data: action.payload, status: 'success' }
    },
    setStatus: (state, action: PayloadAction<string>) => {
      return { ...state, status: action.payload }
    },
  },
})

export const getUserFiles = async (dispatch, getState) => {
  if (getState().files.status !== 'initial') return

  dispatch(filesStore.actions.setStatus('loading'))

  const files = await get(apiRouteFile)

  dispatch(filesStore.actions.setFiles(files))
}

export default filesStore
