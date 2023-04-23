import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import filesStore from './filesStore'
import meStore from './meStore'
import usersStore from './userStore'
import snackStore from './snackStore'

export type TStoreKey = keyof ReturnType<typeof createStore>
export type TStore = ReturnType<typeof createStore>

export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>
export type AppDispatch = ReturnType<typeof createStore>['dispatch']

export type ThunkAPI = {
  getState: () => RootState
}

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>
export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

function createStore() {
  const store = configureStore({
    reducer: {
      files: filesStore.reducer,
      users: usersStore.reducer,
      me: meStore.reducer,
      snack: snackStore.reducer,
    },
    middleware: [thunkMiddleware],
  })

  return store
}

const store = createStore()
export default store
