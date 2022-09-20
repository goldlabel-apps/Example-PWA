import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import sharedReducer from '../features/Shared/store/slice'
import divemaltaReducer from '../features/DiveMalta/store/slice'

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