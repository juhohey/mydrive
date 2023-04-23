import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { get } from '../client/http'
import { apiRouteFile } from '../client/routes'

export type TUser = {
  name: string
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
  if (getState().users.status !== 'initial') return

  dispatch(usersStore.actions.setStatus('loading'))

  const users = await get(apiRouteFile)
  dispatch(usersStore.actions.setUsers(users))
}

export default usersStore
