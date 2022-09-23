import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "../../featuresStore"
import {list} from "../data/list"

export interface DiveMaltaSlice {
  error: any
  editing: any
  notifying: any
  confirming: any
  newItem: any
  newItemValue: string
  list: any
  showInfiniteMenu: boolean
  showNumber: number
}

const initialState: DiveMaltaSlice = {
  error: null,
  editing: null,
  confirming: null,
  notifying: null,
  newItem: null,
  newItemValue: "",
  list,
  showInfiniteMenu: false,
  showNumber: 6,
}

export const divemaltaSlice = createSlice({
  name: 'divemalta',
  initialState,
  reducers: {
    setDiveMaltaKey: (state, action: PayloadAction<any>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value;
    },
    edit: (state, action: PayloadAction<any>) => {
      const { key, value, subKey } = action.payload;
      state.editing.pristine = false;
      if (subKey){
        // @ts-ignore
        state.editing.item[subKey][key] = value;
      } else {
        // @ts-ignore
        state.editing.item[key] = value;
      }
    },
    increaseShowNumber: (state, action: PayloadAction<any>) => {
      const { by, max } = action.payload;
      let newShowNumber = state.showNumber + by;
      if (newShowNumber >= max) newShowNumber = max;
      state.showNumber = newShowNumber;
    },
  },
})

export const selectDiveMalta = (state: RootState) => state.divemalta;
export const { 
  increaseShowNumber,
  setDiveMaltaKey,
  edit,
} = divemaltaSlice.actions;
export default divemaltaSlice.reducer;
