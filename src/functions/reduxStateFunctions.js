// We could use this to open up specific types of snackbars based on the type of or just one..

import { updateSnackbar } from "../actions/snackBarActions";

export const showSnackbar = ({ severity, message }) => async (dispatch) => {
  dispatch(updateSnackbar({ message, severity, open: true }));
};

export const closeSnackbar = () => async (dispatch) => {
  dispatch(updateSnackbar({ open: false }));
};
