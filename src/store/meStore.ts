import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authenticatedRequest } from '../client/http'
import { getTokenFromStorage } from '../client/localStorage'
import { apiRouteUserMe } from '../client/routes'
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

export const getMe = async (dispatch, getState) => {
  const request = authenticatedRequest(getTokenFromStorage())

  const files = await request.get(apiRouteUserMe)
  dispatch(meStore.actions.setMe(files))
}
export default meStore
