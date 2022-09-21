import { AppThunk } from "../../../featuresStore";
import { setSharedKey } from "../../../Shared";

export const routeTo = (payload: string): AppThunk => async (dispatch: any) => {
  try {
    console.log ("routeTo", payload);

    // dispatch(setSharedKey({ key: 'notifying', value: {
    //   severity: "error",
    //   code: "ST-101",
    //   message: payload.toString()
    // }}))
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "error",
      code: "ST-101",
      message: error.toString()
    }}))
  }
}
