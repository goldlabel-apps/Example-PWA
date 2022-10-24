import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import sharedReducer from '../Features/Shared/store/slice'
import divemaltaReducer from '../Features/DiveMalta/store/slice'

export const featuresStore = configureStore({
  reducer: {
    shared: sharedReducer,
    divemalta: divemaltaReducer,
  },
})

export type AppDispatch = typeof featuresStore.dispatch
export type RootState = ReturnType<typeof featuresStore.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>