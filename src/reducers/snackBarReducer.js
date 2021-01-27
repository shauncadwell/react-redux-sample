import { SET_SNACKBAR_PROPS } from "../actions/actionTypes/snackBarActionTypes";

const initialState = {
  message: "Default message",
  open: true,
  severity: "error",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SNACKBAR_PROPS: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};
