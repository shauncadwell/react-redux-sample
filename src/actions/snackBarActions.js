import { SET_SNACKBAR_PROPS } from "./actionTypes/snackBarActionTypes";

export const updateSnackbar = (props) => {
  return { type: SET_SNACKBAR_PROPS, payload: props };
};
