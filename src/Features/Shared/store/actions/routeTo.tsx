import { AppThunk } from "../../../featuresStore";
import { setSharedKey } from "../../../Shared";

export const routeTo = (path: string): AppThunk => async (dispatch: any) => {
  try {
    window.open(path, "_self");
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "error",
      code: "ST-101",
      message: error.toString()
    }}))
  }
}
