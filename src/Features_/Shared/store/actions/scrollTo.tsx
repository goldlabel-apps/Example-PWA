import { AppThunk } from "../../../featuresStore"
import { setSharedKey } from "../../../Shared"

export interface Scroll {
  target: string,
}

export const scrollTo = (payload:Scroll): AppThunk => async (dispatch: any) => {
  try {
    console.log ("scrollTo", payload);
    
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "error",
      code: "ST-101",
      message: error.toString()
    }}))
  }
}
