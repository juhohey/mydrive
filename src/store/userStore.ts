import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authenticatedRequest } from '../client/http'
import { getTokenFromStorage } from '../client/localStorage'
import { apiRouteUser } from '../client/routes'

export type TUser = {
  name: string
  id: string
}

type TPermission = 'read' | 'write' | 'delete'

export type TFilePermission = {
  [key: string]: {
    [K in TPermission]?: boolean
  }
}

const initialState = {
  data: [] as TUser[],
  status: 'initial',
}

const usersStore = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<TUser[]>) => {
      return { ...state, data: action.payload, status: 'success' }
    },
    setStatus: (state, action: PayloadAction<string>) => {
      return { ...state, status: action.payload }
    },
  },
})

export const getUsersIfNotExists = async (dispatch, getState) => {
  const { get } = authenticatedRequest(getTokenFromStorage())

  if (getState().users.status !== 'initial') return

  dispatch(usersStore.actions.setStatus('loading'))

  const users = await get(apiRouteUser)
  dispatch(usersStore.actions.setUsers(users))
}

export default usersStore
