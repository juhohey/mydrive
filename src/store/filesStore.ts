import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authenticatedRequest } from '../client/http'
import { getTokenFromStorage } from '../client/localStorage'
import { apiRouteFile } from '../client/routes'
import { TFilePermission } from './userStore'

export type TFile = {
  filepath: string
  name: string
  extension: string
  id: string
  owner: string
  userPermission: TFilePermission
  orgPermission: TFilePermission
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

export const getUserFilesIfNotExists = async (dispatch, getState) => {
  const request = authenticatedRequest(getTokenFromStorage())

  if (getState().files.status !== 'initial') return

  dispatch(filesStore.actions.setStatus('loading'))

  const files = await request.get(apiRouteFile)
  dispatch(filesStore.actions.setFiles(files))
}

export const getUserFiles = async (dispatch, getState) => {
  const request = authenticatedRequest(getTokenFromStorage())

  const files = await request.get(apiRouteFile)
  dispatch(filesStore.actions.setFiles(files))
}

export default filesStore
